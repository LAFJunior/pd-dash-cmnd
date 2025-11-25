-- Criar sistema de cursos e treinamentos

-- Tabela de cursos
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  thumbnail_url TEXT,
  category TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('iniciante', 'intermediario', 'avancado')),
  duration_hours DECIMAL(5,2),
  instructor_name TEXT NOT NULL,
  instructor_avatar TEXT,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela de módulos (seções) do curso
CREATE TABLE public.course_modules (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(course_id, order_index)
);

-- Tabela de aulas (lessons)
CREATE TABLE public.course_lessons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id UUID NOT NULL REFERENCES public.course_modules(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  content_type TEXT NOT NULL CHECK (content_type IN ('video', 'text', 'quiz', 'exercise')),
  video_url TEXT,
  video_duration INTEGER, -- duração em segundos
  content_text TEXT,
  order_index INTEGER NOT NULL,
  is_free BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(module_id, order_index)
);

-- Tabela de progresso do usuário nos cursos
CREATE TABLE public.user_course_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_accessed_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  progress_percentage DECIMAL(5,2) NOT NULL DEFAULT 0,
  UNIQUE(user_id, course_id)
);

-- Tabela de progresso do usuário nas aulas
CREATE TABLE public.user_lesson_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.course_lessons(id) ON DELETE CASCADE,
  is_completed BOOLEAN NOT NULL DEFAULT false,
  completed_at TIMESTAMP WITH TIME ZONE,
  watch_time INTEGER DEFAULT 0, -- tempo assistido em segundos
  last_position INTEGER DEFAULT 0, -- última posição do vídeo em segundos
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, lesson_id)
);

-- Índices para melhor performance
CREATE INDEX idx_course_modules_course_id ON public.course_modules(course_id);
CREATE INDEX idx_course_lessons_module_id ON public.course_lessons(module_id);
CREATE INDEX idx_user_course_progress_user_id ON public.user_course_progress(user_id);
CREATE INDEX idx_user_course_progress_course_id ON public.user_course_progress(course_id);
CREATE INDEX idx_user_lesson_progress_user_id ON public.user_lesson_progress(user_id);
CREATE INDEX idx_user_lesson_progress_lesson_id ON public.user_lesson_progress(lesson_id);

-- Habilitar Row Level Security
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_modules ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_course_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_lesson_progress ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para courses (todos podem ver cursos publicados)
CREATE POLICY "Anyone can view published courses"
  ON public.courses
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage courses"
  ON public.courses
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.user_id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Políticas RLS para course_modules
CREATE POLICY "Anyone can view modules of published courses"
  ON public.course_modules
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.courses
      WHERE courses.id = course_modules.course_id
      AND courses.is_published = true
    )
  );

CREATE POLICY "Admins can manage modules"
  ON public.course_modules
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.user_id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Políticas RLS para course_lessons
CREATE POLICY "Anyone can view lessons of published courses"
  ON public.course_lessons
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.course_modules
      JOIN public.courses ON courses.id = course_modules.course_id
      WHERE course_modules.id = course_lessons.module_id
      AND courses.is_published = true
    )
  );

CREATE POLICY "Admins can manage lessons"
  ON public.course_lessons
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.user_id = auth.uid()
      AND profiles.role = 'admin'
    )
  );

-- Políticas RLS para user_course_progress
CREATE POLICY "Users can view their own course progress"
  ON public.user_course_progress
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own course progress"
  ON public.user_course_progress
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own course progress"
  ON public.user_course_progress
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Políticas RLS para user_lesson_progress
CREATE POLICY "Users can view their own lesson progress"
  ON public.user_lesson_progress
  FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own lesson progress"
  ON public.user_lesson_progress
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own lesson progress"
  ON public.user_lesson_progress
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Função para atualizar o progresso do curso automaticamente
CREATE OR REPLACE FUNCTION update_course_progress()
RETURNS TRIGGER AS $$
DECLARE
  total_lessons INTEGER;
  completed_lessons INTEGER;
  new_progress DECIMAL(5,2);
  v_course_id UUID;
BEGIN
  -- Buscar o course_id através do lesson_id
  SELECT cm.course_id INTO v_course_id
  FROM public.course_lessons cl
  JOIN public.course_modules cm ON cl.module_id = cm.id
  WHERE cl.id = NEW.lesson_id;

  -- Contar total de aulas do curso
  SELECT COUNT(*) INTO total_lessons
  FROM public.course_lessons cl
  JOIN public.course_modules cm ON cl.module_id = cm.id
  WHERE cm.course_id = v_course_id;

  -- Contar aulas completadas pelo usuário
  SELECT COUNT(*) INTO completed_lessons
  FROM public.user_lesson_progress ulp
  JOIN public.course_lessons cl ON ulp.lesson_id = cl.id
  JOIN public.course_modules cm ON cl.module_id = cm.id
  WHERE cm.course_id = v_course_id
  AND ulp.user_id = NEW.user_id
  AND ulp.is_completed = true;

  -- Calcular progresso
  IF total_lessons > 0 THEN
    new_progress := (completed_lessons::DECIMAL / total_lessons::DECIMAL) * 100;
  ELSE
    new_progress := 0;
  END IF;

  -- Atualizar ou inserir progresso do curso
  INSERT INTO public.user_course_progress (user_id, course_id, progress_percentage, last_accessed_at, completed_at)
  VALUES (
    NEW.user_id,
    v_course_id,
    new_progress,
    now(),
    CASE WHEN new_progress >= 100 THEN now() ELSE NULL END
  )
  ON CONFLICT (user_id, course_id)
  DO UPDATE SET
    progress_percentage = new_progress,
    last_accessed_at = now(),
    completed_at = CASE WHEN new_progress >= 100 THEN now() ELSE NULL END,
    updated_at = now();

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para atualizar progresso do curso quando uma aula é completada
CREATE TRIGGER trigger_update_course_progress
AFTER INSERT OR UPDATE ON public.user_lesson_progress
FOR EACH ROW
WHEN (NEW.is_completed = true)
EXECUTE FUNCTION update_course_progress();

