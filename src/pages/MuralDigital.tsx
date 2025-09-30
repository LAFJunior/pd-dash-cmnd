import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import CreatePost from '@/components/mural-digital/CreatePost';
import PostCard from '@/components/mural-digital/PostCard';
import FilterTabs from '@/components/mural-digital/FilterTabs';
import { usePermissions } from '@/hooks/usePermissions';

const MuralDigital = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState('todos');
  const [loading, setLoading] = useState(true);
  const { profile } = usePermissions();

  const loadPosts = async () => {
    try {
      setLoading(true);
      const { data: postsData, error } = await supabase
        .from('mural_posts')
        .select(`
          *,
          author:profiles!mural_posts_author_id_fkey(full_name, department),
          likes_count:mural_likes(count),
          comments_count:mural_comments(count)
        `)
        .order('is_pinned', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Verificar se usuário curtiu cada post
      if (profile) {
        const { data: userLikes } = await supabase
          .from('mural_likes')
          .select('post_id')
          .eq('user_id', profile.user_id);

        const likedPostIds = new Set(userLikes?.map(like => like.post_id));

        const enrichedPosts = postsData?.map(post => ({
          ...post,
          likes_count: post.likes_count?.[0]?.count || 0,
          comments_count: post.comments_count?.[0]?.count || 0,
          user_has_liked: likedPostIds.has(post.id)
        }));

        setPosts(enrichedPosts || []);
      } else {
        const enrichedPosts = postsData?.map(post => ({
          ...post,
          likes_count: post.likes_count?.[0]?.count || 0,
          comments_count: post.comments_count?.[0]?.count || 0,
          user_has_liked: false
        }));
        setPosts(enrichedPosts || []);
      }
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();

    // Realtime subscription
    const channel = supabase
      .channel('mural_posts_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'mural_posts'
        },
        () => {
          loadPosts();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [profile]);

  const filteredPosts = useMemo(() => {
    if (activeFilter === 'todos') return posts;
    return posts.filter(post => post.category === activeFilter);
  }, [posts, activeFilter]);

  const postCounts = useMemo(() => {
    return {
      todos: posts.length,
      comunicacao: posts.filter(p => p.category === 'comunicacao').length,
      celebracao: posts.filter(p => p.category === 'celebracao').length,
      evento: posts.filter(p => p.category === 'evento').length,
      campanha: posts.filter(p => p.category === 'campanha').length,
    };
  }, [posts]);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-8 mb-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Mural Digital Corporativo</h1>
          <p className="text-lg opacity-90">Conectando nossa equipe, compartilhando sucessos</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="space-y-6">
          <CreatePost onPostCreated={loadPosts} />
          
          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            postCounts={postCounts}
          />

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Carregando posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum post encontrado nesta categoria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} onUpdate={loadPosts} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MuralDigital;
