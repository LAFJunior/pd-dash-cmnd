-- Inserir cursos de exemplo

-- Curso 1: Comunicação e Oratória
INSERT INTO public.courses (id, title, description, category, level, duration_hours, instructor_name, is_published)
VALUES (
  '550e8400-e29b-41d4-a716-446655440001',
  'Comunicação e Oratória',
  'Desenvolva suas habilidades de comunicação e oratória para apresentações impactantes e comunicação efetiva no ambiente corporativo.',
  'Desenvolvimento Pessoal',
  'iniciante',
  8.5,
  'Sophia Tech',
  true
);

-- Módulos do Curso 1
INSERT INTO public.course_modules (id, course_id, title, description, order_index)
VALUES 
  ('650e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'Introdução à Comunicação', 'Fundamentos da comunicação efetiva', 1),
  ('650e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440001', 'Técnicas de Oratória', 'Aprenda técnicas para falar em público', 2),
  ('650e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440001', 'Comunicação Não-Verbal', 'Linguagem corporal e expressões', 3);

-- Aulas do Módulo 1
INSERT INTO public.course_lessons (id, module_id, title, description, content_type, video_duration, order_index, is_free)
VALUES 
  ('750e8400-e29b-41d4-a716-446655440001', '650e8400-e29b-41d4-a716-446655440001', 'O que é Comunicação Efetiva?', 'Entenda os princípios básicos da comunicação', 'video', 900, 1, true),
  ('750e8400-e29b-41d4-a716-446655440002', '650e8400-e29b-41d4-a716-446655440001', 'Barreiras da Comunicação', 'Identifique e supere obstáculos na comunicação', 'video', 720, 2, true),
  ('750e8400-e29b-41d4-a716-446655440003', '650e8400-e29b-41d4-a716-446655440001', 'Exercício: Análise de Comunicação', 'Pratique identificando estilos de comunicação', 'exercise', null, 3, false);

-- Aulas do Módulo 2
INSERT INTO public.course_lessons (id, module_id, title, description, content_type, video_duration, order_index, is_free)
VALUES 
  ('750e8400-e29b-41d4-a716-446655440004', '650e8400-e29b-41d4-a716-446655440002', 'Preparação para Apresentações', 'Como se preparar para falar em público', 'video', 1200, 1, false),
  ('750e8400-e29b-41d4-a716-446655440005', '650e8400-e29b-41d4-a716-446655440002', 'Controle de Nervosismo', 'Técnicas para controlar a ansiedade', 'video', 840, 2, false),
  ('750e8400-e29b-41d4-a716-446655440006', '650e8400-e29b-41d4-a716-446655440002', 'Quiz: Técnicas de Oratória', 'Teste seus conhecimentos', 'quiz', null, 3, false);

-- Curso 2: Programa de Melhoria Contínua
INSERT INTO public.courses (id, title, description, category, level, duration_hours, instructor_name, is_published)
VALUES (
  '550e8400-e29b-41d4-a716-446655440002',
  'Programa de Melhoria Contínua',
  'Aprenda metodologias e ferramentas para implementar melhorias contínuas em processos organizacionais.',
  'Gestão de Processos',
  'intermediario',
  12.0,
  'Sophia Tech',
  true
);

-- Módulos do Curso 2
INSERT INTO public.course_modules (id, course_id, title, description, order_index)
VALUES 
  ('650e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440002', 'Fundamentos da Melhoria Contínua', 'Conceitos e princípios básicos', 1),
  ('650e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440002', 'Ferramentas de Análise', 'PDCA, 5W2H, Ishikawa', 2),
  ('650e8400-e29b-41d4-a716-446655440006', '550e8400-e29b-41d4-a716-446655440002', 'Implementação Prática', 'Cases e aplicações reais', 3);

-- Curso 3: Gestão Ágil
INSERT INTO public.courses (id, title, description, category, level, duration_hours, instructor_name, is_published)
VALUES (
  '550e8400-e29b-41d4-a716-446655440003',
  'Gestão Ágil com Scrum e Kanban',
  'Domine as metodologias ágeis mais utilizadas no mercado para gestão de projetos e equipes.',
  'Metodologias Ágeis',
  'intermediario',
  15.0,
  'Lucian Marcos Santos',
  true
);

-- Curso 4: PDI - Plano de Desenvolvimento Individual
INSERT INTO public.courses (id, title, description, category, level, duration_hours, instructor_name, is_published)
VALUES (
  '550e8400-e29b-41d4-a716-446655440004',
  'PDI - Plano de Desenvolvimento Individual',
  'Construa seu plano de desenvolvimento profissional e alcance seus objetivos de carreira.',
  'Desenvolvimento Pessoal',
  'iniciante',
  6.0,
  'Sophia Tech',
  true
);

-- Curso 5: Gestão de Tráfego Pago
INSERT INTO public.courses (id, title, description, category, level, duration_hours, instructor_name, is_published)
VALUES (
  '550e8400-e29b-41d4-a716-446655440005',
  'Gestão de Tráfego Pago',
  'Aprenda a criar e gerenciar campanhas de tráfego pago em diferentes plataformas digitais.',
  'Marketing Digital',
  'avancado',
  20.0,
  'Lucian Marcos Santos',
  true
);

-- Curso 6: Modelo de Diagnóstico e Solução de Problemas
INSERT INTO public.courses (id, title, description, category, level, duration_hours, instructor_name, is_published)
VALUES (
  '550e8400-e29b-41d4-a716-446655440006',
  'Modelo de Diagnóstico e Solução de Problemas',
  'Desenvolva habilidades analíticas para identificar, diagnosticar e resolver problemas complexos.',
  'Gestão de Processos',
  'intermediario',
  10.0,
  'Sophia Tech',
  true
);

-- Curso 7: Processos de Desenvolvimento de Desvio Padrão
INSERT INTO public.courses (id, title, description, category, level, duration_hours, instructor_name, is_published)
VALUES (
  '550e8400-e29b-41d4-a716-446655440007',
  'Processos de Desenvolvimento de Desvio Padrão',
  'Entenda e aplique metodologias para monitoramento e desenvolvimento de desvios padrão em processos.',
  'Gestão de Processos',
  'avancado',
  8.0,
  'Lucian Marcos Santos',
  true
);

-- Curso 8: Mídia Social
INSERT INTO public.courses (id, title, description, category, level, duration_hours, instructor_name, is_published)
VALUES (
  '550e8400-e29b-41d4-a716-446655440008',
  'Mídia Social para Empresas',
  'Estratégias e táticas para gerenciar a presença da sua empresa nas redes sociais.',
  'Marketing Digital',
  'intermediario',
  12.0,
  'Sophia Tech',
  true
);

