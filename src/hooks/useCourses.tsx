import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Course, CourseWithProgress, CourseDetails, ModuleWithLessons, LessonWithProgress } from '@/types/course';
import { useAuth } from './useAuth';

export const useCourses = () => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['courses', user?.id],
    queryFn: async (): Promise<CourseWithProgress[]> => {
      const { data: courses, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (!user) return courses as CourseWithProgress[];

      // Buscar progresso do usuário para cada curso
      const { data: progressData } = await supabase
        .from('user_course_progress')
        .select('*')
        .eq('user_id', user.id);

      const coursesWithProgress = courses.map(course => {
        const progress = progressData?.find(p => p.course_id === course.id);
        return {
          ...course,
          progress
        };
      });

      return coursesWithProgress as CourseWithProgress[];
    },
    enabled: true
  });
};

export const useCourseDetails = (courseId: string) => {
  const { user } = useAuth();

  return useQuery({
    queryKey: ['course-details', courseId, user?.id],
    queryFn: async (): Promise<CourseDetails> => {
      // Buscar curso
      const { data: course, error: courseError } = await supabase
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single();

      if (courseError) throw courseError;

      // Buscar módulos
      const { data: modules, error: modulesError } = await supabase
        .from('course_modules')
        .select('*')
        .eq('course_id', courseId)
        .order('order_index', { ascending: true });

      if (modulesError) throw modulesError;

      // Buscar aulas de todos os módulos
      const moduleIds = modules.map(m => m.id);
      const { data: lessons, error: lessonsError } = await supabase
        .from('course_lessons')
        .select('*')
        .in('module_id', moduleIds)
        .order('order_index', { ascending: true });

      if (lessonsError) throw lessonsError;

      // Buscar progresso do usuário
      let userProgress = null;
      let lessonProgress: any[] = [];

      if (user) {
        const { data: progressData } = await supabase
          .from('user_course_progress')
          .select('*')
          .eq('user_id', user.id)
          .eq('course_id', courseId)
          .single();

        userProgress = progressData;

        const lessonIds = lessons.map(l => l.id);
        const { data: lessonProgressData } = await supabase
          .from('user_lesson_progress')
          .select('*')
          .eq('user_id', user.id)
          .in('lesson_id', lessonIds);

        lessonProgress = lessonProgressData || [];
      }

      // Montar estrutura de módulos com aulas
      const modulesWithLessons: ModuleWithLessons[] = modules.map(module => {
        const moduleLessons = lessons
          .filter(lesson => lesson.module_id === module.id)
          .map(lesson => {
            const progress = lessonProgress.find(p => p.lesson_id === lesson.id);
            return {
              ...lesson,
              progress
            } as LessonWithProgress;
          });

        return {
          ...module,
          lessons: moduleLessons
        };
      });

      const totalLessons = lessons.length;
      const completedLessons = lessonProgress.filter(p => p.is_completed).length;

      return {
        ...course,
        modules: modulesWithLessons,
        progress: userProgress,
        total_lessons: totalLessons,
        completed_lessons: completedLessons
      } as CourseDetails;
    },
    enabled: !!courseId
  });
};

export const useEnrollCourse = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (courseId: string) => {
      if (!user) throw new Error('Usuário não autenticado');

      const { data, error } = await supabase
        .from('user_course_progress')
        .insert({
          user_id: user.id,
          course_id: courseId,
          progress_percentage: 0
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] });
      queryClient.invalidateQueries({ queryKey: ['course-details'] });
    }
  });
};

