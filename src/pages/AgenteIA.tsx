import { useState, useRef, useEffect } from "react";
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { useChatConversations } from '@/hooks/useChatConversations';
import { UserRound, MessageCircle, X, Edit2, Trash2, Plus } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Paperclip, Image, Mic } from "lucide-react";
import iconPD from "@/assets/icon_pd.png";
import { Card } from "@/components/ui/card";
import { getSuggestionsByDepartment } from "@/data/chat-suggestions";
import { MermaidRenderer } from "@/components/MermaidRenderer";
interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isPending?: boolean;
}

const AgenteIA = () => {
  const {
    conversations,
    currentConversationId,
    messages: dbMessages,
    loading: dbLoading,
    setCurrentConversationId,
    createConversation,
    saveMessage,
    deleteConversation,
    clearCurrentConversation
  } = useChatConversations();

  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastGeneratedMessageId, setLastGeneratedMessageId] = useState<string | null>(null);
  const [userDepartment, setUserDepartment] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Sincronizar mensagens do banco
  useEffect(() => {
    if (dbMessages.length > 0) {
      setMessages(dbMessages.map(msg => ({
        id: msg.id,
        content: msg.content,
        role: msg.role,
        timestamp: new Date(msg.created_at)
      })));
    } else if (!currentConversationId) {
      setMessages([]);
    }
  }, [dbMessages, currentConversationId]);

  useEffect(() => {
    const loadUserProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('department')
          .eq('user_id', user.id)
          .single();
        
        if (profile) {
          setUserDepartment(profile.department);
        }
      }
    };
    
    loadUserProfile();
  }, []);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const appendMessage = (msg: Message) => {
    setMessages(prev => [...prev, msg]);
  };

  const clearChatHistory = () => {
    clearCurrentConversation();
    setMessages([]);
    setLastGeneratedMessageId(null);
    toast.success('Nova conversa iniciada');
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;
    setLoading(true);

    // Obter dados do usuário autenticado
    const { data: { user } } = await supabase.auth.getUser();
    let userProfile = null;
    if (user) {
      const { data: profile } = await supabase.from('profiles').select('full_name, department, role, email').eq('user_id', user.id).single();
      userProfile = profile;
    }

    // Criar ou usar conversa existente
    let convId = currentConversationId;
    if (!convId) {
      convId = await createConversation(content);
      if (!convId) {
        setLoading(false);
        return;
      }
    }

    // 1. Add user message immediately (pending)
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      role: "user",
      timestamp: new Date(),
      isPending: true
    };
    appendMessage(userMessage);

    // Salvar mensagem do usuário
    await saveMessage(convId, content, 'user');

    // 4. Call backend for AI response
    let assistantContent = "";
    try {
      // Determinar qual webhook usar baseado no role do usuário
      const isAdmin = userProfile?.role === 'admin';
      const webhookUrl = isAdmin 
        ? "https://webhook.pd.oscarcloud.com.br/webhook/dp-develop"
        : "https://webhook.pd.oscarcloud.com.br/webhook/processos-digitais-user";
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: content,
          user_id: user?.id,
          full_name: userProfile?.full_name || "Usuário",
          timestamp: new Date().toISOString(),
          user: {
            name: userProfile?.full_name || 'Usuário Anônimo',
            department: userProfile?.department || 'Não informado',
            role: userProfile?.role || 'guest',
            email: userProfile?.email || user?.email || 'Não informado'
          }
        })
      });
      const responseText = await response.text();
      try {
        if (responseText && responseText.trim()) {
          const data = JSON.parse(responseText);
          assistantContent = data.output || data.response || data.message || responseText;
        } else {
          assistantContent = "Resposta vazia do servidor.";
        }
      } catch (parseError) {
        assistantContent = responseText || "Formato de resposta desconhecido.";
      }
    } catch (err: any) {
      assistantContent = "Erro ao obter resposta da IA.";
      toast.error("Erro ao buscar resposta da IA");
    }

    // 5. Add AI message
    const assistantMessageId = `assistant-${Date.now()}`;
    const assistantMessage: Message = {
      id: assistantMessageId,
      content: assistantContent,
      role: "assistant",
      timestamp: new Date(),
      isPending: true
    };
    appendMessage(assistantMessage);
    setLastGeneratedMessageId(assistantMessageId);

    // Salvar resposta da IA
    await saveMessage(convId, assistantContent, 'assistant');

    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !loading) {
      handleSendMessage(input);
      setInput("");
    }
  };

  const handleDeleteConversation = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta conversa?')) {
      deleteConversation(id);
    }
  };

  const handleNewChat = () => {
    clearCurrentConversation();
    setMessages([]);
    setLastGeneratedMessageId(null);
    toast.success('Novo chat iniciado');
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="bg-white border-b-0 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="text-lg font-semibold text-slate-800">
          Oscar Digital
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Conversas
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-6">
        <div className="max-w-4xl mx-auto w-full">
          {messages.length === 0 ? (
            <EmptyState onSuggestClick={handleSendMessage} userDepartment={userDepartment} />
          ) : (
            <div className="space-y-6">
              {messages.map(message => (
                <ChatMessage
                  key={message.id}
                  message={message}
                  isNewMessage={message.id === lastGeneratedMessageId && message.role === "assistant"}
                />
              ))}
              {loading && (
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <img src={iconPD} alt="Oscar Digital" className="w-6 h-6 object-contain" loading="eager" fetchpriority="high" />
                  </div>
                  <div className="typing-indicator mt-1">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>
      </div>
      
      {/* Chat Input */}
      <div className="bg-white border-t-0 px-6 py-1.5">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSendMessage={handleSendMessage} isLoading={loading} />
        </div>
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-40 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 w-80 h-full sidebar-glass shadow-2xl z-50 flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-lg font-semibold text-slate-800">
              Conversas
            </div>
            <button
              onClick={handleNewChat}
              className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
              title="Novo chat"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-3">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setCurrentConversationId(conversation.id)}
              className={`group px-4 py-3.5 rounded-lg cursor-pointer transition-colors hover:bg-gray-100 mb-1 flex justify-between items-center text-gray-700 text-sm ${
                currentConversationId === conversation.id ? 'bg-gray-100' : ''
              }`}
            >
              <span className="flex-1 truncate mr-2">
                {conversation.title}
              </span>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteConversation(conversation.id);
                  }}
                  className="p-1.5 hover:bg-gray-200 rounded transition-colors text-gray-600"
                  title="Excluir"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ChatMessage Component
interface ChatMessageProps {
  message: Message;
  isNewMessage?: boolean;
}
const ChatMessage = ({
  message,
  isNewMessage = false
}: ChatMessageProps) => {
  const [displayedContent, setDisplayedContent] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isThinking, setIsThinking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const isUser = message.role === "user";

  const processContent = (content: string) => {
    return content.replace(/\\n\\n/g, '\n\n').replace(/\\n/g, '\n');
  };

  const processedContent = processContent(message.content);

  useEffect(() => {
    if (isUser || !isNewMessage) {
      setDisplayedContent(processedContent);
      return;
    }
    setIsThinking(true);
    setIsTyping(false);
    setDisplayedContent("");
    setCurrentIndex(0);
    const thinkingTimer = setTimeout(() => {
      setIsThinking(false);
      setIsTyping(true);
    }, 200);
    return () => clearTimeout(thinkingTimer);
  }, [message, isUser, processedContent, isNewMessage]);

  useEffect(() => {
    if (!isTyping || isUser || !isNewMessage) return;
    if (currentIndex < processedContent.length) {
      const char = processedContent[currentIndex];
      const delay = char === '.' || char === '!' || char === '?' ? 35 : char === ',' || char === ';' ? 25 : char === ' ' ? 5 : 10;
      const timeoutId = setTimeout(() => {
        setDisplayedContent(processedContent.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, delay);
      return () => clearTimeout(timeoutId);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping, isUser, processedContent, isNewMessage]);

  const shouldShowAIIcon = !isUser && (!isNewMessage || isThinking || isTyping || displayedContent.length > 0);

  return <div className={`flex gap-4 max-w-4xl mx-auto w-full ${isUser ? "flex-row-reverse" : "flex-row"}`}>
      {/* Avatar */}
      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? "bg-blue-500" : "bg-white border border-gray-200"}`}>
        {isUser ? (
          <span className="text-white font-semibold text-sm">U</span>
        ) : shouldShowAIIcon ? (
          <img src={iconPD} alt="Oscar Digital" className="w-6 h-6 object-contain" loading="eager" fetchpriority="high" />
        ) : null}
      </div>

      {/* Message Content */}
      <div className="flex-1">
        {isUser ? (
          <div className="bg-gray-100 text-slate-800 px-5 py-4 rounded-2xl max-w-full">
            <p className="whitespace-pre-wrap leading-relaxed">{displayedContent}</p>
          </div>
        ) : (
          <div className="bg-transparent text-slate-800 px-0 py-4">
            {isThinking ? (
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
              </div>
            ) : (
              <ReactMarkdown components={{
                p: ({ children }) => <p className="mb-3 last:mb-0 leading-relaxed text-gray-700">{children}</p>,
                h1: ({ children }) => <h1 className="text-xl font-bold mb-3 text-slate-800">{children}</h1>,
                h2: ({ children }) => <h2 className="text-lg font-bold mb-2 text-slate-800">{children}</h2>,
                h3: ({ children }) => <h3 className="text-base font-semibold mb-3 text-slate-800">{children}</h3>,
                strong: ({ children }) => <strong className="font-semibold text-slate-800">{children}</strong>,
                em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-3 ml-5 text-gray-700">{children}</ol>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-3 ml-5 text-gray-700">{children}</ul>,
                li: ({ children }) => <li className="leading-relaxed mb-2 text-gray-700">{children}</li>,
                code: ({ node, inline, className, children, ...props }: any) => {
                  const match = /language-(\w+)/.exec(className || "");
                  const codeContent = String(children).replace(/\n$/, '');

                  if (!inline && match?.[1] === "mermaid") {
                    return (
                      <code {...props} className={`${className || ''} mermaid-code`}>
                        {codeContent}
                      </code>
                    );
                  }

                  if (inline) {
                    return (
                      <code 
                        className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800 border border-gray-300"
                        {...props}
                      >
                        {children}
                      </code>
                    );
                  }

                  return (
                    <code 
                      className="text-sm font-mono text-gray-900"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                pre: ({ children }: any) => {
                  const codeElement = typeof children === 'object' && children?.props;
                  const codeClassName = codeElement?.className || '';
                  
                  if (codeClassName.includes('language-mermaid')) {
                    const mermaidContent = String(codeElement?.children || '').replace(/\n$/, '');
                    return <MermaidRenderer code={mermaidContent} />;
                  }
                  
                  return (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-3 border border-gray-300">
                      {children}
                    </pre>
                  );
                },
                blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-600 pl-4 italic mb-3 text-gray-700">{children}</blockquote>
              }}>
                {displayedContent}
              </ReactMarkdown>
            )}
          </div>
        )}
      </div>
    </div>;
};

// ChatInput Component
interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}
const ChatInput = ({
  onSendMessage,
  isLoading
}: ChatInputProps) => {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  return <div className="">
      <form onSubmit={handleSubmit} className="">
        <div className="bg-white border border-gray-300 rounded-3xl flex items-center px-5 py-3 transition-all focus-within:border-blue-500 focus-within:shadow-lg">
          <input 
            ref={textareaRef}
            value={input} 
            onChange={e => setInput(e.target.value)} 
            onKeyDown={handleKeyDown} 
            placeholder="Pergunte qualquer coisa..." 
            className="flex-1 bg-transparent border-0 outline-none text-base text-gray-800 placeholder-gray-500 pl-2" 
            disabled={isLoading}
          />
          
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-slate-800 hover:bg-slate-700 text-white p-2.5 rounded-full transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed ml-3"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </form>
      
      <p className="text-xs text-center mt-3 text-gray-500">
        O Oscar Digital está em desenvolvimento e pode cometer erros. Verifique informações importantes.
      </p>
    </div>;
};
// EmptyState Component
const EmptyState = ({ onSuggestClick, userDepartment }: { onSuggestClick: (text: string) => void; userDepartment: string | null }) => {
  const suggestions = getSuggestionsByDepartment(userDepartment);

  return (
    <div className="flex flex-col items-center justify-center h-full space-y-8 py-12">
      <div className="text-center space-y-3">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-2xl">
          <img src={iconPD} alt="Oscar Digital" className="w-12 h-12 object-contain" loading="eager" fetchpriority="high" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          Olá! Como posso ajudar?
        </h2>
        <p className="text-muted-foreground max-w-md">
          Faça perguntas sobre processos, documentação e procedimentos da empresa
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        {suggestions.map((suggestion, index) => (
          <Card
            key={index}
            className="p-5 cursor-pointer hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm group"
            onClick={() => onSuggestClick(suggestion.prompt)}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <suggestion.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {suggestion.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {suggestion.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AgenteIA;
