-- Criar índices para melhorar performance das queries
CREATE INDEX IF NOT EXISTS idx_mural_posts_author_id ON public.mural_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_mural_posts_created_at ON public.mural_posts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_mural_posts_category ON public.mural_posts(category);
CREATE INDEX IF NOT EXISTS idx_mural_likes_post_id ON public.mural_likes(post_id);
CREATE INDEX IF NOT EXISTS idx_mural_comments_post_id ON public.mural_comments(post_id);