-- Remove as políticas que dependem da função antiga
DROP POLICY IF EXISTS "Admins do mural podem criar posts" ON public.mural_posts;
DROP POLICY IF EXISTS "Admins do mural podem atualizar posts" ON public.mural_posts;
DROP POLICY IF EXISTS "Admins do mural podem deletar posts" ON public.mural_posts;
DROP POLICY IF EXISTS "Admins do mural podem deletar qualquer comentário" ON public.mural_comments;

-- Agora remove a função antiga
DROP FUNCTION IF EXISTS public.is_mural_admin(text);

-- Cria a nova versão da função que usa a tabela profiles
CREATE OR REPLACE FUNCTION public.is_mural_admin(user_id_param uuid)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM public.profiles
    WHERE user_id = user_id_param
      AND email IN ('luiz.ferreira@grupooscar.com.br', 'rh@grupooscar.com.br')
  );
END;
$$;

-- Cria novas políticas para mural_posts usando a função atualizada
CREATE POLICY "Admins do mural podem criar posts"
ON public.mural_posts
FOR INSERT
TO authenticated
WITH CHECK (public.is_mural_admin(auth.uid()));

CREATE POLICY "Admins do mural podem atualizar posts"
ON public.mural_posts
FOR UPDATE
TO authenticated
USING (public.is_mural_admin(auth.uid()));

CREATE POLICY "Admins do mural podem deletar posts"
ON public.mural_posts
FOR DELETE
TO authenticated
USING (public.is_mural_admin(auth.uid()));

-- Cria nova política para mural_comments usando a função atualizada
CREATE POLICY "Admins do mural podem deletar qualquer comentário"
ON public.mural_comments
FOR DELETE
TO authenticated
USING (public.is_mural_admin(auth.uid()));