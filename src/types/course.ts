export type CourseLevel = 'iniciante' | 'intermediario' | 'avancado';
export type ContentType = 'video' | 'text' | 'quiz' | 'exercise';

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail_url?: string;
  category: string;
  level: CourseLevel;
  duration_hours?: number;
  instructor_name: string;
  instructor_avatar?: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface CourseModule {
  id: string;
  course_id: string;
  title: string;
  description?: string;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface CourseLesson {
  id: string;
  module_id: string;
  title: string;
  description?: string;
  content_type: ContentType;
  video_url?: string;
  video_duration?: number; // em segundos
  content_text?: string;
  order_index: number;
  is_free: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserCourseProgress {
  id: string;
  user_id: string;
  course_id: string;
  enrolled_at: string;
  last_accessed_at?: string;
  completed_at?: string;
  progress_percentage: number;
}

export interface UserLessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  is_completed: boolean;
  completed_at?: string;
  watch_time: number; // em segundos
  last_position: number; // em segundos
  created_at: string;
  updated_at: string;
}

// Tipos compostos para facilitar o uso
export interface CourseWithProgress extends Course {
  progress?: UserCourseProgress;
  total_lessons?: number;
  completed_lessons?: number;
}

export interface ModuleWithLessons extends CourseModule {
  lessons: LessonWithProgress[];
}

export interface LessonWithProgress extends CourseLesson {
  progress?: UserLessonProgress;
}

export interface CourseDetails extends Course {
  modules: ModuleWithLessons[];
  progress?: UserCourseProgress;
  total_lessons: number;
  completed_lessons: number;
}

