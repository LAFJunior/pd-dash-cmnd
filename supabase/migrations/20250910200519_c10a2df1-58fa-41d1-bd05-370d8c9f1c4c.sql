-- Criar função para promover usuário a admin
CREATE OR REPLACE FUNCTION public.promote_user_to_admin(user_email TEXT)
RETURNS TEXT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  user_count INTEGER;
BEGIN
  -- Verificar se existe algum admin no sistema
  SELECT COUNT(*) INTO user_count FROM public.profiles WHERE role = 'admin';
  
  -- Se não há admins, permitir criar o primeiro
  IF user_count = 0 THEN
    UPDATE public.profiles 
    SET role = 'admin' 
    WHERE email = user_email;
    
    IF FOUND THEN
      RETURN 'Usuário promovido a admin com sucesso';
    ELSE
      RETURN 'Usuário não encontrado';
    END IF;
  ELSE
    RETURN 'Já existe um admin no sistema';
  END IF;
END;
$$;

-- Comentário: Para promover o primeiro admin, execute:
-- SELECT public.promote_user_to_admin('email@exemplo.com');