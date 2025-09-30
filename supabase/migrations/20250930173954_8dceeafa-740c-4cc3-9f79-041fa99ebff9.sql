-- Criar tabela de posts do mural
CREATE TABLE public.mural_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category TEXT NOT NULL CHECK (category IN ('comunicacao', 'celebracao', 'evento', 'campanha')),
  is_pinned BOOLEAN NOT NULL DEFAULT false,
  attachments JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar tabela de comentários
CREATE TABLE public.mural_comments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.mural_posts(id) ON DELETE CASCADE,
  author_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Criar tabela de curtidas
CREATE TABLE public.mural_likes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES public.mural_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(post_id, user_id)
);

-- Habilitar RLS
ALTER TABLE public.mural_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mural_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mural_likes ENABLE ROW LEVEL SECURITY;

-- Função para verificar se usuário é admin do mural
CREATE OR REPLACE FUNCTION public.is_mural_admin(user_email TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN user_email IN ('luiz.ferreira@grupooscar.com.br', 'rh@grupooscar.com.br');
END;
$$;

-- Policies para mural_posts
CREATE POLICY "Todos podem visualizar posts"
ON public.mural_posts FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Admins do mural podem criar posts"
ON public.mural_posts FOR INSERT
TO authenticated
WITH CHECK (
  is_mural_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
);

CREATE POLICY "Admins do mural podem atualizar posts"
ON public.mural_posts FOR UPDATE
TO authenticated
USING (
  is_mural_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
);

CREATE POLICY "Admins do mural podem deletar posts"
ON public.mural_posts FOR DELETE
TO authenticated
USING (
  is_mural_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
);

-- Policies para mural_comments
CREATE POLICY "Todos podem visualizar comentários"
ON public.mural_comments FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Usuários autenticados podem criar comentários"
ON public.mural_comments FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Usuários podem deletar seus próprios comentários"
ON public.mural_comments FOR DELETE
TO authenticated
USING (auth.uid() = author_id);

CREATE POLICY "Admins do mural podem deletar qualquer comentário"
ON public.mural_comments FOR DELETE
TO authenticated
USING (
  is_mural_admin((SELECT email FROM auth.users WHERE id = auth.uid()))
);

-- Policies para mural_likes
CREATE POLICY "Todos podem visualizar curtidas"
ON public.mural_likes FOR SELECT
TO authenticated
USING (true);

CREATE POLICY "Usuários podem curtir posts"
ON public.mural_likes FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuários podem remover suas curtidas"
ON public.mural_likes FOR DELETE
TO authenticated
USING (auth.uid() = user_id);

-- Trigger para atualizar updated_at
CREATE TRIGGER update_mural_posts_updated_at
BEFORE UPDATE ON public.mural_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Criar índices para melhor performance
CREATE INDEX idx_mural_posts_created_at ON public.mural_posts(created_at DESC);
CREATE INDEX idx_mural_posts_is_pinned ON public.mural_posts(is_pinned);
CREATE INDEX idx_mural_comments_post_id ON public.mural_comments(post_id);
CREATE INDEX idx_mural_likes_post_id ON public.mural_likes(post_id);