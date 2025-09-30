import { useState, useMemo } from 'react';
import Header from '@/components/corporate/Header';
import Sidebar from '@/components/corporate/Sidebar';
import PostCard from '@/components/corporate/PostCard';
import CreatePost from '@/components/corporate/CreatePost';
import FilterTabs from '@/components/corporate/FilterTabs';
import { mockPosts } from '@/data/mockPosts';
import heroBanner from '@/assets/hero-banner.jpg';

const Index = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [activeFilter, setActiveFilter] = useState('todos');

  const addPost = (newPost: any) => {
    const post = {
      id: Date.now().toString(),
      author: {
        name: newPost.autor,
        role: 'Funcionário',
        department: 'Geral',
        avatar: '/src/assets/avatar-placeholder.jpg'
      },
      content: `${newPost.titulo}\n\n${newPost.content}`,
      attachments: newPost.attachments || [],
      likes: 0,
      comments: 0,
      timestamp: 'agora',
      tags: [],
      category: newPost.tipo
    };
    setPosts(prev => [post, ...prev]);
  };

  const filteredPosts = useMemo(() => {
    if (activeFilter === 'todos') return posts;
    return posts.filter(post => post.category === activeFilter);
  }, [posts, activeFilter]);

  const postCounts = useMemo(() => {
    const counts = {
      todos: posts.length,
      comunicacao: posts.filter(p => p.category === 'comunicacao').length,
      celebracao: posts.filter(p => p.category === 'celebracao').length,
      evento: posts.filter(p => p.category === 'evento').length,
      campanha: posts.filter(p => p.category === 'campanha').length,
    };
    return counts;
  }, [posts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={heroBanner} 
          alt="Corporate Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-hover/90 flex items-center justify-center">
          <div className="text-center text-primary-foreground fade-in px-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Mural Digital Corporativo</h1>
            <p className="text-lg md:text-xl opacity-90">Conectando nossa equipe, compartilhando sucessos</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
          {/* Main Feed */}
          <main className="flex-1 max-w-2xl space-y-6 mx-auto lg:mx-0">
            <CreatePost onPostCreated={addPost} />
            
            <FilterTabs 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              postCounts={postCounts}
            />
            
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className="slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </main>

          {/* Sidebar - Hidden on mobile */}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
