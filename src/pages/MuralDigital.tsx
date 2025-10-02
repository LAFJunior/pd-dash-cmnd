import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import CreatePost from '@/components/mural-digital/CreatePost';
import PostCard from '@/components/mural-digital/PostCard';
import { PostCardSkeleton } from '@/components/mural-digital/PostCardSkeleton';
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
          queryClient.invalidateQueries({ queryKey: ['mural-posts'] });
          queryClient.invalidateQueries({ queryKey: ['mural-posts-counts'] });
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

  // Cache inteligente para contadores
  const { data: postCounts = { todos: 0, comunicacao: 0, celebracao: 0, evento: 0, campanha: 0 } } = useQuery({
    queryKey: ['mural-posts-counts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('mural_posts')
        .select('category');
      
      if (error) throw error;
      
      const counts = { todos: 0, comunicacao: 0, celebracao: 0, evento: 0, campanha: 0 };
      data?.forEach(post => {
        counts.todos++;
        if (post.category in counts) {
          counts[post.category as keyof typeof counts]++;
        }
      });
      
      return counts;
    },
    staleTime: 1000 * 60 * 15, // 15 minutos - contadores mudam menos
    gcTime: 1000 * 60 * 60, // 1 hora
  });

  const handlePostCreated = () => {
    // Invalida tanto posts quanto contadores
    queryClient.invalidateQueries({ queryKey: ['mural-posts'] });
    queryClient.invalidateQueries({ queryKey: ['mural-posts-counts'] });
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
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <PostCardSkeleton key={i} />
              ))}
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
