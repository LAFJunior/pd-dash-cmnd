import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CourseWithProgress } from '@/types/course';
import { Clock, BookOpen, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CourseCardProps {
  course: CourseWithProgress;
}

const levelLabels = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado'
};

const levelColors = {
  iniciante: 'bg-green-500',
  intermediario: 'bg-yellow-500',
  avancado: 'bg-red-500'
};

export const CourseCard = ({ course }: CourseCardProps) => {
  const navigate = useNavigate();
  const hasProgress = course.progress && course.progress.progress_percentage > 0;

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-[1.02] overflow-hidden"
      onClick={() => navigate(`/cursos/${course.id}`)}
    >
      {/* Thumbnail */}
      <div className="relative h-48 bg-gradient-to-br from-purple-500 to-blue-600 overflow-hidden">
        {course.thumbnail_url ? (
          <img 
            src={course.thumbnail_url} 
            alt={course.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <BookOpen className="w-16 h-16 text-white opacity-50" />
          </div>
        )}
        
        {/* Badge de nível */}
        <div className="absolute top-3 right-3">
          <Badge className={`${levelColors[course.level]} text-white`}>
            {levelLabels[course.level]}
          </Badge>
        </div>

        {/* Badge de categoria */}
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-white/90 text-gray-800">
            {course.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg line-clamp-2 min-h-[3.5rem]">
          {course.title}
        </h3>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {course.description}
        </p>

        {/* Informações do instrutor e duração */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span className="line-clamp-1">{course.instructor_name}</span>
          </div>
          {course.duration_hours && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration_hours}h</span>
            </div>
          )}
        </div>
      </CardContent>

      {hasProgress && (
        <CardFooter className="pt-0 flex-col items-start gap-2">
          <div className="w-full flex justify-between text-sm">
            <span className="text-muted-foreground">Progresso</span>
            <span className="font-semibold text-primary">
              {Math.round(course.progress!.progress_percentage)}%
            </span>
          </div>
          <Progress value={course.progress!.progress_percentage} className="h-2" />
        </CardFooter>
      )}
    </Card>
  );
};

