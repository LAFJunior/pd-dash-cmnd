import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, MessageCircle, Pin } from 'lucide-react';
import { usePermissions } from '@/hooks/usePermissions';
import { ImageSize } from './ImageSizeSelector';

interface PostPreviewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  content: string;
  category: string;
  attachments: any[];
  imageSize?: ImageSize;
}

const PostPreview = ({ open, onOpenChange, title, content, category, attachments, imageSize = 'small' }: PostPreviewProps) => {
  const { profile } = usePermissions();

  const getCategoryColor = () => {
    const colors = {
      comunicacao: 'bg-blue-500',
      celebracao: 'bg-green-500',
      evento: 'bg-purple-500',
      campanha: 'bg-orange-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  };

  const getCategoryLabel = () => {
    const labels = {
      comunicacao: 'Comunicação',
      celebracao: 'Celebração',
      evento: 'Evento',
      campanha: 'Campanha'
    };
    return labels[category as keyof typeof labels] || category;
  };

  const getImageClasses = () => {
    switch (imageSize) {
      case 'small':
        return 'max-w-[300px] mx-auto object-contain';
      case 'fit':
        return 'w-full max-h-[600px] object-contain';
      case 'original':
        return 'max-w-full object-contain';
      default:
        return 'max-w-[300px] mx-auto object-contain';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Prévia do Post</DialogTitle>
        </DialogHeader>
        
        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{profile?.full_name?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{profile?.full_name || 'Usuário'}</h3>
                  <p className="text-sm text-muted-foreground">{profile?.department}</p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-block text-xs text-white px-2 py-1 rounded ${getCategoryColor()}`}>
                  {getCategoryLabel()}
                </span>
              </div>
              {title && <h4 className="font-bold text-lg mb-2">{title}</h4>}
              <p className="text-foreground whitespace-pre-wrap">{content || 'Seu conteúdo aparecerá aqui...'}</p>
            </div>

            {attachments && attachments.length > 0 && (
              <div className="mb-4 space-y-2">
                {attachments.map((attachment: any, index: number) => (
                  <div key={index} className="flex justify-center">
                    {attachment.type === 'image' && (
                      <img 
                        src={attachment.url} 
                        alt="Anexo" 
                        className={`rounded-lg ${getImageClasses()}`}
                      />
                    )}
                    {attachment.type === 'video' && (
                      <video src={attachment.url} controls className="rounded-lg w-full" />
                    )}
                    {attachment.type === 'link' && (
                      <a href={attachment.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                        {attachment.url}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 pt-4 border-t">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Heart size={18} />
                <span className="text-sm">0</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageCircle size={18} />
                <span className="text-sm">0</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default PostPreview;
