import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const usePostLike = (postId: string, userId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (isLiked: boolean) => {
      if (isLiked) {
        const { error } = await supabase
          .from('mural_likes')
          .delete()
          .eq('post_id', postId)
          .eq('user_id', userId);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('mural_likes')
          .insert({ post_id: postId, user_id: userId });
        if (error) throw error;
      }
    },
    onMutate: async (isLiked) => {
      // Optimistic update
      await queryClient.cancelQueries({ queryKey: ['mural-posts'] });
      
      const previousPosts = queryClient.getQueryData(['mural-posts']);
      
      queryClient.setQueryData(['mural-posts'], (old: any) => {
        if (!old) return old;
        return old.map((post: any) => {
          if (post.id === postId) {
            return {
              ...post,
              user_has_liked: !isLiked,
              likes_count: isLiked ? post.likes_count - 1 : post.likes_count + 1
            };
          }
          return post;
        });
      });

      return { previousPosts };
    },
    onError: (err, variables, context) => {
      // Rollback on error
      if (context?.previousPosts) {
        queryClient.setQueryData(['mural-posts'], context.previousPosts);
      }
      toast.error('Erro ao curtir o post');
    },
    onSuccess: () => {
      // Invalidate queries to ensure fresh data
      queryClient.invalidateQueries({ queryKey: ['mural-posts'] });
    }
  });
};
