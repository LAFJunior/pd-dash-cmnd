-- Create RLS policy to allow super admin to view all profiles
CREATE POLICY "Super admin can view all profiles" 
ON public.profiles 
FOR SELECT 
TO authenticated 
USING ((auth.jwt() ->> 'email') = 'luiz.ferreira@grupooscar.com.br');