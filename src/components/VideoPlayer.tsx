import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAnalytics } from '@/hooks/useAnalytics';
import { PlayCircle, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface VideoPlayerProps {
  fileName: string;
  bucketName?: string;
  title?: string;
  departmentName?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  fileName, 
  bucketName = 'lojas-vds',
  title,
  departmentName
}) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { trackVideoPlay, trackVideoCompletion } = useAnalytics();

  useEffect(() => {
    const getVideoUrl = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const { data, error: storageError } = await supabase.storage
          .from(bucketName)
          .createSignedUrl(fileName, 3600); // URL válida por 1 hora

        if (storageError) {
          throw storageError;
        }

        if (data?.signedUrl) {
          setVideoUrl(data.signedUrl);
        } else {
          throw new Error('Não foi possível gerar URL do vídeo');
        }
      } catch (err) {
        console.error('Erro ao carregar vídeo:', err);
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setIsLoading(false);
      }
    };

    getVideoUrl();
  }, [fileName, bucketName]);

  const handlePlay = () => {
    trackVideoPlay(fileName, title || fileName, departmentName);
  };

  const handleEnded = (event: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    trackVideoCompletion(fileName, Math.floor(video.duration || 0));
  };

  if (isLoading) {
    return (
      <Card className="w-full aspect-video flex items-center justify-center bg-muted">
        <div className="flex items-center gap-2 text-muted-foreground">
          <PlayCircle className="animate-pulse" size={24} />
          <span className="text-sm">Carregando vídeo...</span>
        </div>
      </Card>
    );
  }

  if (error || !videoUrl) {
    return (
      <Card className="w-full aspect-video flex items-center justify-center bg-destructive/10 border-destructive/20">
        <div className="flex items-center gap-2 text-destructive">
          <AlertCircle size={24} />
          <span className="text-sm">Erro ao carregar vídeo</span>
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full overflow-hidden">
      <video
        controls
        preload="metadata"
        className="w-full aspect-video object-cover"
        onError={() => setError('Erro ao reproduzir vídeo')}
        onPlay={handlePlay}
        onEnded={handleEnded}
      >
        <source src={videoUrl} type="video/mp4" />
        Seu navegador não suporta reprodução de vídeo.
      </video>
    </Card>
  );
};

export default VideoPlayer;