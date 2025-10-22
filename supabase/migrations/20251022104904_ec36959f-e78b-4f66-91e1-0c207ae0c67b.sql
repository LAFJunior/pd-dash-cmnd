-- Criar bucket para vídeos do mural
INSERT INTO storage.buckets (id, name, public)
VALUES ('mural-videos', 'mural-videos', true);

-- RLS Policy: Permitir upload apenas para usuários autenticados
CREATE POLICY "Usuários autenticados podem fazer upload de vídeos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'mural-videos');

-- RLS Policy: Leitura pública dos vídeos
CREATE POLICY "Leitura pública de vídeos do mural"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'mural-videos');

-- RLS Policy: Apenas admins do mural podem deletar vídeos
CREATE POLICY "Apenas admins podem deletar vídeos do mural"
ON storage.objects FOR DELETE
TO authenticated
USING (
  bucket_id = 'mural-videos' 
  AND auth.jwt() ->> 'email' IN (
    'luiz.ferreira@grupooscar.com.br',
    'rh@grupooscar.com.br'
  )
);