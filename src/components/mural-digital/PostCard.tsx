import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, Pin, Trash2 } from 'lucide-react';
import { usePermissions } from '@/hooks/usePermissions';
import { usePostLike } from '@/hooks/usePostLike';
import { usePostComments } from '@/hooks/usePostComments';
import { useMuralPosts } from '@/hooks/useMuralPosts';

const MURAL_ADMIN_EMAILS = [
  'luiz.ferreira@grupooscar.com.br',
  'rh@grupooscar.com.br'
];

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
}

const PostCard = ({ post }: PostCardProps) => {
  const { profile } = usePermissions();
  const isMuralAdmin = profile?.email ? MURAL_ADMIN_EMAILS.includes(profile.email) : false;
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  
  const { togglePin, deletePost } = useMuralPosts();
  const likeMutation = usePostLike(post.id, profile?.user_id || '');
  const { comments, addComment } = usePostComments(post.id, showComments);

  const handleLike = () => {
    if (!profile) return;
    likeMutation.mutate(post.user_has_liked);
  };

  const handleToggleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = () => {
    if (!newComment.trim() || !profile) return;
    addComment.mutate(
      { content: newComment, authorId: profile.user_id },
      {
        onSuccess: () => {
          setNewComment('');
        }
      }
    );
  };

  const handleTogglePin = () => {
    if (!isMuralAdmin) return;
    togglePin.mutate({ postId: post.id, isPinned: post.is_pinned });
  };

  const handleDelete = () => {
    if (!isMuralAdmin) return;
    if (!confirm('Deseja realmente excluir este post?')) return;
    deletePost.mutate(post.id);
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
            {post.attachments.map((attachment: any, index: number) => {
              const getImageClasses = () => {
                if (attachment.type !== 'image') return '';
                const size = attachment.size || 'small';
                switch (size) {
                  case 'small':
                    return 'max-w-[300px] h-auto mx-auto object-contain';
                  case 'fit':
                    return 'w-full max-w-2xl h-auto mx-auto object-contain';
                  case 'original':
                    return 'max-w-none h-auto mx-auto object-contain';
                  default:
                    return 'max-w-[300px] h-auto mx-auto object-contain';
                }
              };

              return (
                <div key={index} className="flex justify-center">
                  {attachment.type === 'image' && (
                    <img src={attachment.url} alt="Anexo" className={`rounded-lg ${getImageClasses()}`} />
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
              );
            })}
          </div>
        )}

        <div className="flex items-center gap-4 pt-4 border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={post.user_has_liked ? 'text-red-500' : ''}
            disabled={likeMutation.isPending}
          >
            <Heart size={18} className={post.user_has_liked ? 'fill-current' : ''} />
            <span className="ml-2">{post.likes_count}</span>
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
                <Button 
                  onClick={handleAddComment} 
                  disabled={!newComment.trim() || addComment.isPending}
                >
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
