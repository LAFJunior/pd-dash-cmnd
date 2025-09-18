import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Play } from 'lucide-react';

interface VideoAnalyticsProps {
  data: Array<{ title: string; plays: number; completion_rate: number }>;
}

export const VideoAnalytics = ({ data }: VideoAnalyticsProps) => {
  return (
    <Card className="p-6">
      <div className="flex items-center gap-2 mb-4">
        <Play className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Vídeos Mais Reproduzidos</h3>
      </div>
      
      {data.length === 0 ? (
        <div className="flex items-center justify-center h-64 text-muted-foreground">
          Nenhum dado disponível
        </div>
      ) : (
        <div className="space-y-4">
          {data.map((video, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <p className="font-medium text-sm truncate" title={video.title}>
                    {video.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {video.plays} reproduções
                  </p>
                </div>
                <div className="text-right ml-2">
                  <p className="text-sm font-medium">{video.completion_rate}%</p>
                  <p className="text-xs text-muted-foreground">conclusão</p>
                </div>
              </div>
              <Progress 
                value={video.completion_rate} 
                className="h-2"
              />
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};