import { useEffect, useState } from 'react';
import { LessonWithProgress } from '@/types/course';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, PlayCircle, FileText, HelpCircle, Code } from 'lucide-react';
import { useLessonProgress } from '@/hooks/useLessonProgress';
import VideoPlayer from '@/components/VideoPlayer';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface LessonViewerProps {
  lesson: LessonWithProgress;
}

const contentTypeIcons = {
  video: PlayCircle,
  text: FileText,
  quiz: HelpCircle,
  exercise: Code
};

const contentTypeLabels = {
  video: 'Vídeo Aula',
  text: 'Conteúdo Textual',
  quiz: 'Quiz',
  exercise: 'Exercício Prático'
};

export const LessonViewer = ({ lesson }: LessonViewerProps) => {
  const { markAsComplete, updateWatchProgress, isUpdating } = useLessonProgress();
  const [watchTime, setWatchTime] = useState(0);
  const isCompleted = lesson.progress?.is_completed || false;
  const Icon = contentTypeIcons[lesson.content_type];

  const handleMarkComplete = () => {
    markAsComplete(lesson.id);
  };

  const handleVideoProgress = (currentTime: number, duration: number) => {
    setWatchTime(currentTime);
    
    // Atualizar progresso a cada 10 segundos
    if (Math.floor(currentTime) % 10 === 0) {
      updateWatchProgress(lesson.id, Math.floor(currentTime), Math.floor(currentTime));
    }

    // Marcar como completo automaticamente se assistiu 90% do vídeo
    if (!isCompleted && currentTime / duration >= 0.9) {
      markAsComplete(lesson.id);
    }
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-5 h-5 text-primary" />
              <Badge variant="secondary">
                {contentTypeLabels[lesson.content_type]}
              </Badge>
              {isCompleted && (
                <Badge className="bg-green-500">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Concluída
                </Badge>
              )}
            </div>
            <CardTitle className="text-2xl">{lesson.title}</CardTitle>
            {lesson.description && (
              <CardDescription className="mt-2 text-base">
                {lesson.description}
              </CardDescription>
            )}
          </div>
          
          {!isCompleted && (
            <Button 
              onClick={handleMarkComplete}
              disabled={isUpdating}
              className="flex-shrink-0"
            >
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Marcar como concluída
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Conteúdo de Vídeo */}
        {lesson.content_type === 'video' && lesson.video_url && (
          <div className="aspect-video bg-black rounded-lg overflow-hidden">
            <VideoPlayer
              src={lesson.video_url}
              onProgress={handleVideoProgress}
              startTime={lesson.progress?.last_position || 0}
            />
          </div>
        )}

        {/* Conteúdo de Texto */}
        {lesson.content_type === 'text' && lesson.content_text && (
          <div className="prose prose-slate max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {lesson.content_text}
            </ReactMarkdown>
          </div>
        )}

        {/* Quiz */}
        {lesson.content_type === 'quiz' && (
          <div className="p-6 bg-muted rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <HelpCircle className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Quiz Interativo</h3>
                <p className="text-sm text-muted-foreground">
                  Teste seus conhecimentos sobre o conteúdo desta aula
                </p>
              </div>
            </div>
            {lesson.content_text && (
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {lesson.content_text}
                </ReactMarkdown>
              </div>
            )}
          </div>
        )}

        {/* Exercício */}
        {lesson.content_type === 'exercise' && (
          <div className="p-6 bg-muted rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Exercício Prático</h3>
                <p className="text-sm text-muted-foreground">
                  Coloque em prática o que você aprendeu
                </p>
              </div>
            </div>
            {lesson.content_text && (
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {lesson.content_text}
                </ReactMarkdown>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

