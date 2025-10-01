import { useState, useEffect, useMemo } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import CreatePost from '@/components/mural-digital/CreatePost';
import PostCard from '@/components/mural-digital/PostCard';
import FilterTabs from '@/components/mural-digital/FilterTabs';
import MuralHeader from '@/components/mural-digital/MuralHeader';
import { useMuralPosts } from '@/hooks/useMuralPosts';

const MuralDigital = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  const { posts, isLoading } = useMuralPosts(activeFilter);
  const queryClient = useQueryClient();

  useEffect(() => {
    // Realtime subscription com invalidação inteligente
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
          // Apenas invalida cache, não recarrega tudo
          queryClient.invalidateQueries({ queryKey: ['mural-posts'] });
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'mural_likes'
        },
        () => {
          queryClient.invalidateQueries({ queryKey: ['mural-posts'] });
        }
      )
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'mural_comments'
        },
        () => {
          queryClient.invalidateQueries({ queryKey: ['mural-posts'] });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [queryClient]);

  const postCounts = useMemo(() => {
    const allPosts = queryClient.getQueryData(['mural-posts', 'todos']) as any[] || posts;
    return {
      todos: allPosts.length,
      comunicacao: allPosts.filter(p => p.category === 'comunicacao').length,
      celebracao: allPosts.filter(p => p.category === 'celebracao').length,
      evento: allPosts.filter(p => p.category === 'evento').length,
      campanha: allPosts.filter(p => p.category === 'campanha').length,
    };
  }, [posts, queryClient]);

  const handlePostCreated = () => {
    queryClient.invalidateQueries({ queryKey: ['mural-posts'] });
  };

  return (
    <div className="min-h-screen bg-background">
      <MuralHeader />

      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="space-y-6">
          <CreatePost onPostCreated={handlePostCreated} />
          
          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            postCounts={postCounts}
          />

          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Carregando posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum post encontrado nesta categoria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MuralDigital;
