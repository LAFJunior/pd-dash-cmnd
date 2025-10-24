import { useState, useRef, useEffect } from "react";
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { UserRound } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Paperclip, Image, Mic } from "lucide-react";
import iconPD from "@/assets/icon_pd.png";
import { Card } from "@/components/ui/card";
import { getSuggestionsByDepartment } from "@/data/chat-suggestions";
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
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
    setMessages([]);
    localStorage.removeItem(STORAGE_KEY);
    setLastGeneratedMessageId(null);
    toast.success('Histórico de conversa limpo');
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
        ? "https://webhook.pd.oscarcloud.com.br/webhook/processos-digitais-admin"
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

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-xl border-b bg-background/80 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img src={iconPD} alt="Oscar Digital" className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Oscar Digital
              </h1>
              <p className="text-xs text-muted-foreground">Seu assistente inteligente</p>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={clearChatHistory} 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Limpar Conversa
          </Button>
        </div>
      </header>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 flex flex-col h-full py-8">
          {messages.length === 0 ? <EmptyState onSuggestClick={handleSendMessage} userDepartment={userDepartment} /> : <div className="pb-6 space-y-6">
              {messages.map(message => <ChatMessage key={message.id} message={message} isNewMessage={message.id === lastGeneratedMessageId && message.role === "assistant"} />)}
              {loading && <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                    <img src={iconPD} alt="Oscar Digital" className="w-full h-full object-cover" loading="eager" />
                  </div>
                  <div className="typing-indicator mt-1">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>}
            </div>}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Chat Input */}
      <div className="sticky bottom-0 backdrop-blur-xl border-t bg-background/80 shadow-2xl">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <ChatInput onSendMessage={handleSendMessage} isLoading={loading} />
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

  return <div className={`group relative ${isUser ? "ml-auto max-w-[85%]" : "mr-auto max-w-full"}`}>
      <div className={`flex gap-4 ${isUser ? "justify-end" : "justify-start"}`}>
        {shouldShowAIIcon && (
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 border border-gray-200">
            <img src={iconPD} alt="Oscar Digital" className="w-7 h-7 object-contain" loading="eager" />
          </div>
        )}

        <div className="max-w-full break-words">
          {isUser ? <div className="bg-[#F3F4F6] text-black px-5 py-3.5 rounded-2xl rounded-tr-md shadow-sm max-w-[80%] ml-auto">
              <p className="whitespace-pre-wrap leading-relaxed text-[15px]">{displayedContent}</p>
            </div> : <div className="markdown-content bg-transparent text-foreground px-2 py-1">
              {isThinking ? <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{
              animationDelay: '0ms'
            }} />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{
              animationDelay: '150ms'
            }} />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{
              animationDelay: '300ms'
            }} />
                </div> : <ReactMarkdown components={{
            p: ({
              children
            }) => <p className="mb-3 last:mb-0 leading-relaxed text-black">{children}</p>,
            h1: ({
              children
            }) => <h1 className="text-xl font-bold mb-3 text-black">{children}</h1>,
            h2: ({
              children
            }) => <h2 className="text-lg font-bold mb-2 text-black">{children}</h2>,
            h3: ({
              children
            }) => <h3 className="text-base font-bold mb-2 text-black">{children}</h3>,
            strong: ({
              children
            }) => <strong className="font-bold text-black">{children}</strong>,
            em: ({
              children
            }) => <em className="italic text-black">{children}</em>,
            ol: ({
              children
            }) => <ol className="list-decimal list-inside mb-3 ml-4 text-black">{children}</ol>,
            ul: ({
              children
            }) => <ul className="list-disc list-inside mb-3 ml-4 text-black">{children}</ul>,
            li: ({
              children
            }) => <li className="leading-relaxed text-black">{children}</li>,
            code: ({
              children
            }) => <code className="bg-gray-200 px-1 py-0.5 rounded text-sm font-mono text-gray-800 border border-gray-300">{children}</code>,
            pre: ({
              children
            }) => <pre className="bg-gray-100 p-3 rounded-lg overflow-x-auto mb-3 text-gray-900 border border-gray-300">{children}</pre>,
            blockquote: ({
              children
            }) => <blockquote className="border-l-4 border-gray-600 pl-4 italic mb-3 text-black">{children}</blockquote>
          }}>
                  {displayedContent}
                </ReactMarkdown>}
            </div>}
        </div>

        {isUser && (
          <div className="w-8 h-8 rounded-full bg-[#f3f4f6] flex items-center justify-center flex-shrink-0">
            <UserRound className="h-4 w-4 text-black" />
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
  return <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center rounded-3xl border-2 shadow-xl hover:shadow-2xl transition-all bg-background/50 backdrop-blur-sm focus-within:border-primary/50">
          <div className="flex items-center gap-1 pl-4 pr-2 py-3">
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors" 
              disabled={isLoading}
            >
              <Paperclip className="h-5 w-5" />
              <span className="sr-only">Anexar arquivo</span>
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors" 
              disabled={isLoading}
            >
              <Image className="h-5 w-5" />
              <span className="sr-only">Adicionar imagem</span>
            </Button>
          </div>

          <Textarea 
            ref={textareaRef} 
            value={input} 
            onChange={e => setInput(e.target.value)} 
            onKeyDown={handleKeyDown} 
            placeholder="Pergunte ao Oscar Digital sobre processos..." 
            className="flex-1 min-h-[24px] max-h-[200px] resize-none border-0 bg-transparent px-2 py-4 placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0 text-base" 
            disabled={isLoading} 
            rows={1} 
          />

          <div className="flex items-center gap-1 pr-4 pl-2 py-3">
            {input.trim() ? <Button 
                type="submit" 
                size="icon" 
                className="h-10 w-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-lg hover:shadow-xl transition-all" 
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-5 w-5" />
                <span className="sr-only">Enviar mensagem</span>
              </Button> : <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-colors" 
                disabled={isLoading}
              >
                <Mic className="h-5 w-5" />
                <span className="sr-only">Gravar áudio</span>
              </Button>}
          </div>
        </div>
      </form>
      
      <p className="text-xs text-center mt-3 text-muted-foreground/80">
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
