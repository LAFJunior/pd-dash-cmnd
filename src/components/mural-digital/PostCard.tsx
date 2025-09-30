import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, Pin, Trash2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useMuralPermissions } from '@/hooks/useMuralPermissions';

interface Author {
  full_name: string;
  department: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  author_id: string;
  category: string;
  is_pinned: boolean;
  attachments: any[];
  created_at: string;
  author?: Author;
  likes_count?: number;
  comments_count?: number;
  user_has_liked?: boolean;
}

interface PostCardProps {
  post: Post;
  onUpdate?: () => void;
}

const PostCard = ({ post, onUpdate }: PostCardProps) => {
  const { isMuralAdmin, profile } = useMuralPermissions();
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<any[]>([]);
  const [isLiked, setIsLiked] = useState(post.user_has_liked || false);
  const [likesCount, setLikesCount] = useState(post.likes_count || 0);

  const handleLike = async () => {
    if (!profile) return;

    try {
      if (isLiked) {
        await supabase
          .from('mural_likes')
          .delete()
          .eq('post_id', post.id)
          .eq('user_id', profile.user_id);
        setIsLiked(false);
        setLikesCount(prev => prev - 1);
      } else {
        await supabase
          .from('mural_likes')
          .insert({ post_id: post.id, user_id: profile.user_id });
        setIsLiked(true);
        setLikesCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Erro ao curtir:', error);
      toast.error('Erro ao curtir o post');
    }
  };

  const loadComments = async () => {
    const { data } = await supabase
      .from('mural_comments')
      .select(`
        *,
        author:profiles!mural_comments_author_id_fkey(full_name, department)
      `)
      .eq('post_id', post.id)
      .order('created_at', { ascending: true });
    
    setComments(data || []);
  };

  const handleToggleComments = async () => {
    if (!showComments) {
      await loadComments();
    }
    setShowComments(!showComments);
  };

  const handleAddComment = async () => {
    if (!newComment.trim() || !profile) return;

    try {
      await supabase
        .from('mural_comments')
        .insert({
          post_id: post.id,
          author_id: profile.user_id,
          content: newComment
        });
      
      setNewComment('');
      await loadComments();
      toast.success('Comentário adicionado!');
    } catch (error) {
      console.error('Erro ao comentar:', error);
      toast.error('Erro ao adicionar comentário');
    }
  };

  const handleTogglePin = async () => {
    if (!isMuralAdmin) return;

    try {
      await supabase
        .from('mural_posts')
        .update({ is_pinned: !post.is_pinned })
        .eq('id', post.id);
      
      toast.success(post.is_pinned ? 'Post desafixado' : 'Post fixado');
      onUpdate?.();
    } catch (error) {
      console.error('Erro ao fixar post:', error);
      toast.error('Erro ao fixar post');
    }
  };

  const handleDelete = async () => {
    if (!isMuralAdmin) return;
    if (!confirm('Deseja realmente excluir este post?')) return;

    try {
      await supabase
        .from('mural_posts')
        .delete()
        .eq('id', post.id);
      
      toast.success('Post excluído com sucesso');
      onUpdate?.();
    } catch (error) {
      console.error('Erro ao excluir post:', error);
      toast.error('Erro ao excluir post');
    }
  };

  const getCategoryColor = () => {
    const colors = {
      comunicacao: 'bg-blue-500',
      celebracao: 'bg-green-500',
      evento: 'bg-purple-500',
      campanha: 'bg-orange-500'
    };
    return colors[post.category as keyof typeof colors] || 'bg-gray-500';
  };

  const getCategoryLabel = () => {
    const labels = {
      comunicacao: 'Comunicação',
      celebracao: 'Celebração',
      evento: 'Evento',
      campanha: 'Campanha'
    };
    return labels[post.category as keyof typeof labels] || post.category;
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>{post.author?.full_name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{post.author?.full_name || 'Usuário'}</h3>
              <p className="text-sm text-muted-foreground">{post.author?.department}</p>
            </div>
          </div>
          {isMuralAdmin && (
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleTogglePin}
                className={post.is_pinned ? 'text-yellow-500' : ''}
              >
                <Pin size={18} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDelete}
                className="text-destructive"
              >
                <Trash2 size={18} />
              </Button>
            </div>
          )}
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            {post.is_pinned && (
              <span className="inline-flex items-center gap-1 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                <Pin size={12} /> Fixado
              </span>
            )}
            <span className={`inline-block text-xs text-white px-2 py-1 rounded ${getCategoryColor()}`}>
              {getCategoryLabel()}
            </span>
          </div>
          {post.title && <h4 className="font-bold text-lg mb-2">{post.title}</h4>}
          <p className="text-foreground whitespace-pre-wrap">{post.content}</p>
        </div>

        {post.attachments && post.attachments.length > 0 && (
          <div className="mb-4 space-y-2">
            {post.attachments.map((attachment: any, index: number) => (
              <div key={index}>
                {attachment.type === 'image' && (
                  <img src={attachment.url} alt="Anexo" className="rounded-lg max-h-96 w-full object-cover" />
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
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={isLiked ? 'text-red-500' : ''}
          >
            <Heart size={18} className={isLiked ? 'fill-current' : ''} />
            <span className="ml-2">{likesCount}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggleComments}
          >
            <MessageCircle size={18} />
            <span className="ml-2">{post.comments_count || 0}</span>
          </Button>
        </div>

        {showComments && (
          <div className="mt-4 pt-4 border-t space-y-4">
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>{comment.author?.full_name?.charAt(0) || 'U'}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="bg-muted rounded-lg p-3">
                    <p className="font-semibold text-sm">{comment.author?.full_name}</p>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{profile?.full_name?.charAt(0) || 'U'}</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex gap-2">
                <Textarea
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Escreva um comentário..."
                  className="min-h-[60px]"
                />
                <Button onClick={handleAddComment} disabled={!newComment.trim()}>
                  Enviar
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PostCard;
