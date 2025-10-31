import { useState, useRef, useEffect } from "react";
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { UserRound, MessageCircle, X, Edit2, Trash2 } from "lucide-react";
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
const STORAGE_KEY = 'oscar-digital-chat-messages';

const AgenteIA = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastGeneratedMessageId, setLastGeneratedMessageId] = useState<string | null>(null);
  const [userDepartment, setUserDepartment] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [conversations, setConversations] = useState([
    "Meu papel no Inside Out - T.I Projetos",
    "Estratégias de implementação digital",
    "Análise de documentos DOU e PIT",
    "Negociação de horas e projetos",
    "Arquitetura de engajamento interno",
    "Integrações CRM e APIs vendas",
    "Escolha de tecnologias modernas",
    "Deploy e infraestrutura cloud",
    "Gamificação e módulos de cupom",
    "Marketing digital integrado",
    "Transformação digital corporativa",
    "Embaixadores digitais da marca"
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  // Carregar mensagens do localStorage ao montar
  useEffect(() => {
    const savedMessages = localStorage.getItem(STORAGE_KEY);
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        // Converter timestamps de string para Date
        const messagesWithDates = parsed.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(messagesWithDates);
      } catch (error) {
        console.error('Erro ao carregar mensagens:', error);
      }
    }
  }, []);

  // Salvar mensagens no localStorage sempre que mudarem
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

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

  const appendMessage = (msg: Message) => {
    setMessages(prev => [...prev, msg]);
  };

  const clearChatHistory = () => {
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
    setLastGeneratedMessageId(null);
    toast.success('Histórico de conversa limpo');
  };

  const createNewChat = () => {
    if (messages.length > 0) {
      const confirmNew = window.confirm('Deseja iniciar uma nova conversa? A conversa atual será salva no histórico.');
      if (!confirmNew) return;
    }
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

    // 1. Add user message immediately (pending)
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      role: "user",
      timestamp: new Date(),
      isPending: true
    };
    appendMessage(userMessage);

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
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !loading) {
      handleSendMessage(input);
      setInput("");
    }
  };

  const deleteConversation = (index: number) => {
    if (window.confirm('Tem certeza que deseja excluir esta conversa?')) {
      setConversations(prev => prev.filter((_, i) => i !== index));
    }
  };

  const renameConversation = (index: number) => {
    const currentName = conversations[index];
    const newName = window.prompt('Renomear conversa:', currentName);
    if (newName && newName.trim()) {
      setConversations(prev => prev.map((conv, i) => i === index ? newName.trim() : conv));
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b-0 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="text-lg font-semibold text-slate-800">
          Oscar Digital
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={createNewChat}
            className="bg-slate-800 text-white p-2.5 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors flex items-center gap-2"
            title="Novo Chat"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
          </button>
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
                  <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">O</span>
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
          <div className="text-lg font-semibold text-slate-800">
            Conversas
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3">
          {conversations.map((conversation, index) => (
            <div 
              key={index}
              className="group px-4 py-3.5 rounded-lg cursor-pointer transition-colors hover:bg-gray-100 mb-1 flex justify-between items-center text-gray-700 text-sm"
            >
              <span className="flex-1 truncate mr-2">
                {conversation}
              </span>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    renameConversation(index);
                  }}
                  className="p-1.5 hover:bg-gray-200 rounded transition-colors text-gray-600"
                  title="Renomear"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteConversation(index);
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
      <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? "bg-blue-500" : "bg-slate-800"}`}>
        {isUser ? (
          <span className="text-white font-semibold text-sm">U</span>
        ) : shouldShowAIIcon ? (
          <span className="text-white font-semibold text-sm">O</span>
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
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput("");
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  
  return <div className="">
      <form onSubmit={handleSubmit} className="">
        <div className="bg-white border border-gray-300 rounded-3xl flex items-center px-5 py-3 transition-all focus-within:border-blue-500 focus-within:shadow-lg">
          <input 
            ref={inputRef}
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
          <img src={iconPD} alt="Oscar Digital" className="w-12 h-12 object-contain" />
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
