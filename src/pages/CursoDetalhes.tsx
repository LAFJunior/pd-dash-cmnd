import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCourseDetails, useEnrollCourse } from '@/hooks/useCourses';
import { ModuleList } from '@/components/courses/ModuleList';
import { LessonViewer } from '@/components/courses/LessonViewer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  ArrowLeft, 
  BookOpen, 
  Clock, 
  User, 
  CheckCircle2,
  PlayCircle,
  Award
} from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from '@/hooks/use-toast';

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

const CursoDetalhes = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: course, isLoading } = useCourseDetails(id!);
  const enrollMutation = useEnrollCourse();
  const [selectedLessonId, setSelectedLessonId] = useState<string | undefined>();

  // Selecionar primeira aula automaticamente
  useEffect(() => {
    if (course && !selectedLessonId && course.modules.length > 0) {
      const firstLesson = course.modules[0]?.lessons[0];
      if (firstLesson) {
        setSelectedLessonId(firstLesson.id);
      }
    }
  }, [course, selectedLessonId]);

  const handleEnroll = async () => {
    try {
      await enrollMutation.mutateAsync(id!);
      toast({
        title: 'Inscrição realizada!',
        description: 'Você foi inscrito no curso com sucesso.',
      });
    } catch (error) {
      toast({
        title: 'Erro ao se inscrever',
        description: 'Não foi possível realizar a inscrição. Tente novamente.',
        variant: 'destructive'
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-8 px-4 space-y-6">
        <Skeleton className="h-12 w-64" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Skeleton className="h-96" />
          </div>
          <div className="space-y-6">
            <Skeleton className="h-64" />
            <Skeleton className="h-96" />
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">Curso não encontrado</p>
          <Button onClick={() => navigate('/cursos')} className="mt-4">
            Voltar para cursos
          </Button>
        </div>
      </div>
    );
  }

  const selectedLesson = course.modules
    .flatMap(m => m.lessons)
    .find(l => l.id === selectedLessonId);

  const isEnrolled = !!course.progress;
  const progressPercentage = course.progress?.progress_percentage || 0;
  const isCompleted = progressPercentage >= 100;

  return (
    <div className="container mx-auto py-8 px-4 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/cursos')}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <div className="flex items-center gap-2 mt-2">
            <Badge className={`${levelColors[course.level]} text-white`}>
              {levelLabels[course.level]}
            </Badge>
            <Badge variant="secondary">{course.category}</Badge>
            {isCompleted && (
              <Badge className="bg-green-500">
                <Award className="w-3 h-3 mr-1" />
                Concluído
              </Badge>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Conteúdo Principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Visualizador de Aula */}
          {isEnrolled && selectedLesson ? (
            <LessonViewer lesson={selectedLesson} />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Sobre o Curso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{course.description}</p>
                
                {!isEnrolled && (
                  <div className="pt-4">
                    <Button 
                      onClick={handleEnroll}
                      disabled={enrollMutation.isPending}
                      size="lg"
                      className="w-full"
                    >
                      <PlayCircle className="w-5 h-5 mr-2" />
                      {enrollMutation.isPending ? 'Inscrevendo...' : 'Começar Curso'}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Informações do Curso */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Informações do Curso</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Instrutor */}
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={course.instructor_avatar} />
                  <AvatarFallback>
                    {course.instructor_name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm text-muted-foreground">Instrutor</p>
                  <p className="font-semibold">{course.instructor_name}</p>
                </div>
              </div>

              <Separator />

              {/* Estatísticas */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    <span>Total de aulas</span>
                  </div>
                  <span className="font-semibold">{course.total_lessons}</span>
                </div>

                {course.duration_hours && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Duração</span>
                    </div>
                    <span className="font-semibold">{course.duration_hours}h</span>
                  </div>
                )}

                {isEnrolled && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Concluídas</span>
                    </div>
                    <span className="font-semibold">
                      {course.completed_lessons}/{course.total_lessons}
                    </span>
                  </div>
                )}
              </div>

              {/* Progresso */}
              {isEnrolled && (
                <>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-semibold text-primary">
                        {Math.round(progressPercentage)}%
                      </span>
                    </div>
                    <Progress value={progressPercentage} className="h-2" />
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Lista de Módulos */}
          {isEnrolled && (
            <ModuleList
              modules={course.modules}
              onLessonSelect={setSelectedLessonId}
              selectedLessonId={selectedLessonId}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CursoDetalhes;

