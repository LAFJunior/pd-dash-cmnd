import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const usePostComments = (postId: string, enabled: boolean = false) => {
  const queryClient = useQueryClient();

  const { data: comments = [], isLoading } = useQuery({
    queryKey: ['post-comments', postId],
    queryFn: async () => {
      const { data: commentsData, error } = await supabase
        .from('mural_comments')
        .select('*')
        .eq('post_id', postId)
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      if (!commentsData) return [];

      // Buscar autores separadamente
      const authorIds = commentsData.map(c => c.author_id);
      const { data: authorsData } = await supabase
        .from('profiles')
        .select('user_id, full_name, department')
        .in('user_id', authorIds);

      const authorsMap = new Map(
        authorsData?.map(a => [a.user_id, a]) || []
      );

      return commentsData.map(comment => ({
        ...comment,
        author: authorsMap.get(comment.author_id) || { full_name: 'Usuário', department: '' }
      }));
    },
    enabled,
    staleTime: 1000 * 60, // 1 minuto
  });

  const addComment = useMutation({
    mutationFn: async ({ content, authorId }: { content: string; authorId: string }) => {
      const { error } = await supabase
        .from('mural_comments')
        .insert({
          post_id: postId,
          author_id: authorId,
          content
        });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post-comments', postId] });
      queryClient.invalidateQueries({ queryKey: ['mural-posts'] });
      toast.success('Comentário adicionado!');
    },
    onError: () => {
      toast.error('Erro ao adicionar comentário');
    }
  });

  return {
    comments,
    isLoading,
    addComment
  };
};
