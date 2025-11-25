import { useState } from 'react';
import { ModuleWithLessons } from '@/types/course';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, PlayCircle, FileText, HelpCircle, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModuleListProps {
  modules: ModuleWithLessons[];
  onLessonSelect: (lessonId: string) => void;
  selectedLessonId?: string;
}

const contentTypeIcons = {
  video: PlayCircle,
  text: FileText,
  quiz: HelpCircle,
  exercise: Code
};

const contentTypeLabels = {
  video: 'Vídeo',
  text: 'Texto',
  quiz: 'Quiz',
  exercise: 'Exercício'
};

const formatDuration = (seconds?: number) => {
  if (!seconds) return '';
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (minutes < 60) {
    return `${minutes}min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}min`;
};

export const ModuleList = ({ modules, onLessonSelect, selectedLessonId }: ModuleListProps) => {
  const [openModules, setOpenModules] = useState<string[]>([modules[0]?.id || '']);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          Conteúdo do Curso
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Accordion 
          type="multiple" 
          value={openModules}
          onValueChange={setOpenModules}
          className="w-full"
        >
          {modules.map((module, moduleIndex) => {
            const completedLessons = module.lessons.filter(l => l.progress?.is_completed).length;
            const totalLessons = module.lessons.length;
            const progressPercentage = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

            return (
              <AccordionItem key={module.id} value={module.id} className="border-b last:border-b-0">
                <AccordionTrigger className="px-6 hover:bg-muted/50">
                  <div className="flex items-center justify-between w-full pr-4">
                    <div className="flex items-center gap-3 text-left">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                        {moduleIndex + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold">{module.title}</h4>
                        {module.description && (
                          <p className="text-sm text-muted-foreground line-clamp-1">
                            {module.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {completedLessons}/{totalLessons} aulas
                      </Badge>
                      {progressPercentage === 100 && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="space-y-1 mt-2">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const Icon = contentTypeIcons[lesson.content_type];
                      const isCompleted = lesson.progress?.is_completed;
                      const isSelected = selectedLessonId === lesson.id;

                      return (
                        <div
                          key={lesson.id}
                          onClick={() => onLessonSelect(lesson.id)}
                          className={cn(
                            "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
                            isSelected 
                              ? "bg-primary/10 border-2 border-primary" 
                              : "hover:bg-muted/50 border-2 border-transparent"
                          )}
                        >
                          <div className="flex-shrink-0">
                            {isCompleted ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500" />
                            ) : (
                              <Circle className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                          
                          <Icon className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                          
                          <div className="flex-1 min-w-0">
                            <p className={cn(
                              "text-sm font-medium",
                              isCompleted && "line-through text-muted-foreground"
                            )}>
                              {lessonIndex + 1}. {lesson.title}
                            </p>
                            {lesson.description && (
                              <p className="text-xs text-muted-foreground line-clamp-1">
                                {lesson.description}
                              </p>
                            )}
                          </div>

                          <div className="flex items-center gap-2 flex-shrink-0">
                            {lesson.video_duration && (
                              <span className="text-xs text-muted-foreground">
                                {formatDuration(lesson.video_duration)}
                              </span>
                            )}
                            <Badge variant="secondary" className="text-xs">
                              {contentTypeLabels[lesson.content_type]}
                            </Badge>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
};

