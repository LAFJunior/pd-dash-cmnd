import { useState, useEffect, useMemo, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import CreatePost from '@/components/mural-digital/CreatePost';
import PostCard from '@/components/mural-digital/PostCard';
import FilterTabs from '@/components/mural-digital/FilterTabs';
import MuralHeader from '@/components/mural-digital/MuralHeader';
import { usePermissions } from '@/hooks/usePermissions';

const MuralDigital = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState('todos');
  const [loading, setLoading] = useState(true);
  const { profile } = usePermissions();

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      const { data: postsData, error } = await supabase
        .from('mural_posts')
        .select('*')
        .order('is_pinned', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (!postsData) {
        setPosts([]);
        return;
      }

      // Buscar informações dos autores
      const authorIds = postsData.map(post => post.author_id);
      const { data: authorsData } = await supabase
        .from('profiles')
        .select('user_id, full_name, department')
        .in('user_id', authorIds);

      const authorsMap = new Map(
        authorsData?.map(author => [author.user_id, author]) || []
      );

      // Buscar contagens de likes e comentários
      const postIds = postsData.map(post => post.id);
      
      const { data: likesData } = await supabase
        .from('mural_likes')
        .select('post_id')
        .in('post_id', postIds);

      const { data: commentsData } = await supabase
        .from('mural_comments')
        .select('post_id')
        .in('post_id', postIds);

      const likesCount = new Map<string, number>();
      likesData?.forEach(like => {
        likesCount.set(like.post_id, (likesCount.get(like.post_id) || 0) + 1);
      });

      const commentsCount = new Map<string, number>();
      commentsData?.forEach(comment => {
        commentsCount.set(comment.post_id, (commentsCount.get(comment.post_id) || 0) + 1);
      });

      // Verificar se usuário curtiu cada post
      let likedPostIds = new Set<string>();
      if (profile) {
        const { data: userLikes } = await supabase
          .from('mural_likes')
          .select('post_id')
          .eq('user_id', profile.user_id);

        likedPostIds = new Set(userLikes?.map(like => like.post_id) || []);
      }

      const enrichedPosts = postsData.map(post => ({
        ...post,
        author: authorsMap.get(post.author_id) || { full_name: 'Usuário Desconhecido', department: '' },
        likes_count: likesCount.get(post.id) || 0,
        comments_count: commentsCount.get(post.id) || 0,
        user_has_liked: likedPostIds.has(post.id)
      }));

      setPosts(enrichedPosts);
    } catch (error) {
      console.error('Erro ao carregar posts:', error);
    } finally {
      setLoading(false);
    }
  }, [profile]);

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
  }, [loadPosts]);

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
      <MuralHeader />

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
