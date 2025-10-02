import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface MuralPost {
  id: string;
  title: string;
  content: string;
  author_id: string;
  category: string;
  is_pinned: boolean;
  attachments: any[];
  created_at: string;
  author: {
    full_name: string;
    department: string;
  };
  likes_count: number;
  comments_count: number;
  user_has_liked: boolean;
}

export const useMuralPosts = (category?: string) => {
  const queryClient = useQueryClient();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['mural-posts', category],
    queryFn: async () => {
      // Buscar posts primeiro
      let query = supabase
        .from('mural_posts')
        .select('*')
        .order('is_pinned', { ascending: false })
        .order('created_at', { ascending: false });
      
      // Aplica filtro no backend se necessário
      if (category && category !== 'todos') {
        query = query.eq('category', category);
      }
      
      const { data: postsData, error } = await query;

      if (error) throw error;
      if (!postsData || postsData.length === 0) return [];

      // Buscar autores dos posts
      const authorIds = [...new Set(postsData.map(post => post.author_id))];
      const { data: authorsData } = await supabase
        .from('profiles')
        .select('user_id, full_name, department')
        .in('user_id', authorIds);

      const authorsMap = new Map(
        authorsData?.map(author => [author.user_id, author]) || []
      );

      const postIds = postsData.map(post => post.id);
      const { data: { user } } = await supabase.auth.getUser();
      
      // Buscar contagens em paralelo
      const [likesData, commentsData, userLikesData] = await Promise.all([
        supabase
          .from('mural_likes')
          .select('post_id')
          .in('post_id', postIds),
        supabase
          .from('mural_comments')
          .select('post_id')
          .in('post_id', postIds),
        user ? supabase
          .from('mural_likes')
          .select('post_id')
          .in('post_id', postIds)
          .eq('user_id', user.id) : Promise.resolve({ data: [] })
      ]);

      const likesCount = new Map<string, number>();
      likesData.data?.forEach(like => {
        likesCount.set(like.post_id, (likesCount.get(like.post_id) || 0) + 1);
      });

      const commentsCount = new Map<string, number>();
      commentsData.data?.forEach(comment => {
        commentsCount.set(comment.post_id, (commentsCount.get(comment.post_id) || 0) + 1);
      });

      const likedPostIds = new Set(userLikesData.data?.map(like => like.post_id) || []);

      return postsData.map(post => ({
        ...post,
        author: authorsMap.get(post.author_id) || { full_name: 'Usuário Desconhecido', department: '' },
        likes_count: likesCount.get(post.id) || 0,
        comments_count: commentsCount.get(post.id) || 0,
        user_has_liked: likedPostIds.has(post.id)
      })) as MuralPost[];
    },
    staleTime: 1000 * 60 * 5, // 5 minutos
    gcTime: 1000 * 60 * 15, // 15 minutos
    refetchOnWindowFocus: false,
  });

  const togglePin = useMutation({
    mutationFn: async ({ postId, isPinned }: { postId: string; isPinned: boolean }) => {
      const { error } = await supabase
        .from('mural_posts')
        .update({ is_pinned: !isPinned })
        .eq('id', postId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mural-posts'] });
      toast.success('Post atualizado!');
    },
    onError: () => {
      toast.error('Erro ao atualizar post');
    }
  });

  const deletePost = useMutation({
    mutationFn: async (postId: string) => {
      const { error } = await supabase
        .from('mural_posts')
        .delete()
        .eq('id', postId);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['mural-posts'] });
      toast.success('Post excluído!');
    },
    onError: () => {
      toast.error('Erro ao excluir post');
    }
  });

  return {
    posts, // Já filtrado no backend
    isLoading,
    togglePin,
    deletePost
  };
};
