import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Image, Video, Link as LinkIcon, X, Eye } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { usePermissions } from '@/hooks/usePermissions';
import ImageSizeSelector, { ImageSize } from './ImageSizeSelector';
import PostPreview from './PostPreview';

const MURAL_ADMIN_EMAILS = [
  'luiz.ferreira@grupooscar.com.br',
  'rh@grupooscar.com.br'
];

interface CreatePostProps {
  onPostCreated?: () => void;
}

const CreatePost = ({ onPostCreated }: CreatePostProps) => {
  const { profile } = usePermissions();
  const isMuralAdmin = profile?.email ? MURAL_ADMIN_EMAILS.includes(profile.email) : false;
  const [category, setCategory] = useState('comunicacao');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [attachments, setAttachments] = useState<any[]>([]);
  const [linkUrl, setLinkUrl] = useState('');
  const [imageSize, setImageSize] = useState<ImageSize>('small');
  const [showPreview, setShowPreview] = useState(false);

  // Atualiza o tamanho de todas as imagens quando a opção mudar
  useEffect(() => {
    setAttachments(prev => 
      prev.map(att => 
        att.type === 'image' ? { ...att, size: imageSize } : att
      )
    );
  }, [imageSize]);

  if (!isMuralAdmin) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast.error('Por favor, escreva algo no post');
      return;
    }

    if (!profile) {
      toast.error('Usuário não autenticado');
      return;
    }

    try {
      const { error } = await supabase
        .from('mural_posts')
        .insert({
          title: title.trim(),
          content: content.trim(),
          author_id: profile.user_id,
          category,
          attachments
        });

      if (error) throw error;

      toast.success('Post criado com sucesso!');
      setTitle('');
      setContent('');
      setAttachments([]);
      setCategory('comunicacao');
      onPostCreated?.();
    } catch (error) {
      console.error('Erro ao criar post:', error);
      toast.error('Erro ao criar post');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'video') => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setAttachments([...attachments, { type, url: reader.result, size: type === 'image' ? imageSize : undefined }]);
    };
    reader.readAsDataURL(file);
  };

  const handleAddLink = () => {
    if (!linkUrl.trim()) return;
    setAttachments([...attachments, { type: 'link', url: linkUrl }]);
    setLinkUrl('');
  };

  const removeAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  return (
    <>
      <PostPreview
        open={showPreview}
        onOpenChange={setShowPreview}
        title={title}
        content={content}
        category={category}
        attachments={attachments}
        imageSize={imageSize}
      />
      
      <Card>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Tipo de post" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="comunicacao">Comunicação</SelectItem>
              <SelectItem value="celebracao">Celebração</SelectItem>
              <SelectItem value="evento">Evento</SelectItem>
              <SelectItem value="campanha">Campanha</SelectItem>
            </SelectContent>
          </Select>

          <Input
            placeholder="Título (opcional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Textarea
            placeholder="No que você está pensando?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[120px]"
          />

          {attachments.some(a => a.type === 'image') && (
            <ImageSizeSelector value={imageSize} onChange={setImageSize} />
          )}

          {attachments.length > 0 && (
            <div className="space-y-2">
              {attachments.map((attachment, index) => (
                <div key={index} className="relative bg-muted p-3 rounded-lg flex items-center justify-between">
                  <span className="text-sm truncate flex-1">
                    {attachment.type === 'link' ? attachment.url : `${attachment.type} anexado${attachment.size ? ` (${attachment.size})` : ''}`}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => removeAttachment(index)}
                  >
                    <X size={16} />
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div className="flex items-center gap-2">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, 'image')}
              className="hidden"
              id="image-upload"
            />
            <label htmlFor="image-upload">
              <Button type="button" variant="outline" size="sm" asChild>
                <span className="cursor-pointer">
                  <Image size={16} className="mr-2" />
                  Imagem
                </span>
              </Button>
            </label>

            <input
              type="file"
              accept="video/*"
              onChange={(e) => handleFileUpload(e, 'video')}
              className="hidden"
              id="video-upload"
            />
            <label htmlFor="video-upload">
              <Button type="button" variant="outline" size="sm" asChild>
                <span className="cursor-pointer">
                  <Video size={16} className="mr-2" />
                  Vídeo
                </span>
              </Button>
            </label>

            <div className="flex gap-2 flex-1">
              <Input
                placeholder="Cole um link..."
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                className="flex-1"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleAddLink}
                disabled={!linkUrl.trim()}
              >
                <LinkIcon size={16} />
              </Button>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1"
              onClick={() => setShowPreview(true)}
              disabled={!content.trim()}
            >
              <Eye size={16} className="mr-2" />
              Prévia
            </Button>
            <Button type="submit" className="flex-1" disabled={!content.trim()}>
              Publicar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
    </>
  );
};

export default CreatePost;
