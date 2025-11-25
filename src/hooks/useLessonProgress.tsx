import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from '@/hooks/use-toast';

interface UpdateLessonProgressParams {
  lessonId: string;
  isCompleted?: boolean;
  watchTime?: number;
  lastPosition?: number;
}

export const useLessonProgress = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const updateProgress = useMutation({
    mutationFn: async (params: UpdateLessonProgressParams) => {
      if (!user) throw new Error('Usuário não autenticado');

      const { lessonId, isCompleted, watchTime, lastPosition } = params;

      // Verificar se já existe progresso
      const { data: existing } = await supabase
        .from('user_lesson_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('lesson_id', lessonId)
        .single();

      const updateData: any = {
        user_id: user.id,
        lesson_id: lessonId,
        updated_at: new Date().toISOString()
      };

      if (isCompleted !== undefined) {
        updateData.is_completed = isCompleted;
        if (isCompleted) {
          updateData.completed_at = new Date().toISOString();
        }
      }

      if (watchTime !== undefined) {
        updateData.watch_time = watchTime;
      }

      if (lastPosition !== undefined) {
        updateData.last_position = lastPosition;
      }

      if (existing) {
        // Atualizar progresso existente
        const { data, error } = await supabase
          .from('user_lesson_progress')
          .update(updateData)
          .eq('id', existing.id)
          .select()
          .single();

        if (error) throw error;
        return data;
      } else {
        // Criar novo progresso
        const { data, error } = await supabase
          .from('user_lesson_progress')
          .insert(updateData)
          .select()
          .single();

        if (error) throw error;
        return data;
      }
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['course-details'] });
      
      if (variables.isCompleted) {
        toast({
          title: 'Aula concluída!',
          description: 'Seu progresso foi atualizado.',
        });
      }
    },
    onError: (error) => {
      toast({
        title: 'Erro ao atualizar progresso',
        description: 'Não foi possível salvar seu progresso. Tente novamente.',
        variant: 'destructive'
      });
      console.error('Erro ao atualizar progresso:', error);
    }
  });

  const markAsComplete = (lessonId: string) => {
    return updateProgress.mutate({
      lessonId,
      isCompleted: true
    });
  };

  const updateWatchProgress = (lessonId: string, watchTime: number, lastPosition: number) => {
    return updateProgress.mutate({
      lessonId,
      watchTime,
      lastPosition
    });
  };

  return {
    updateProgress: updateProgress.mutate,
    markAsComplete,
    updateWatchProgress,
    isUpdating: updateProgress.isPending
  };
};

