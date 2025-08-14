-- Create RLS policy to allow public read access to videos in lojas-vds bucket
CREATE POLICY "Allow public read access to videos" ON storage.objects
FOR SELECT USING (bucket_id = 'lojas-vds');