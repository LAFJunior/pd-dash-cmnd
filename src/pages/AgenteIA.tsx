import { useState, useRef, useEffect } from "react";
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { UserRound } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Paperclip, Image, Mic } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isPending?: boolean;
}

const AgenteIA = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [lastGeneratedMessageId, setLastGeneratedMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const appendMessage = (msg: Message) => {
    setMessages(prev => [...prev, msg]);
  };

  const handleSendMessage = async (content: string) => {
    if (!content.trim()) return;

    setLoading(true);

    // Obter dados do usuário autenticado
    const { data: { user } } = await supabase.auth.getUser();
    let userProfile = null;
    
    if (user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('full_name, department, role, email')
        .eq('user_id', user.id)
        .single();
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
      const response = await fetch("https://n8n.pd.oscarcloud.com.br/webhook-test/processos-digitais-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  const clearChatHistory = () => {
    setMessages([]);
    setLastGeneratedMessageId(null);
    toast.success('Histórico de conversa limpo');
  };
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-[#0f1218] text-gray-900 dark:text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 bg-zinc-700">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-0 py-[13px]">
          <div className="flex items-center gap-3 ml-12">
            <img 
              alt="Grupo Oscar Logo" 
              src="/lovable-uploads/8d123358-879a-4bd0-8c59-94020f57ed0c.jpg" 
              className="mix-blend-screen w-24 h-auto mx-auto object-fill" 
            />
          </div>
          <Button variant="outline" onClick={clearChatHistory} className="h-9 mr-4">
            Limpar Conversa
          </Button>
        </div>
      </header>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 flex flex-col h-full">
          {messages.length === 0 ? (
            <div className="flex flex-1 items-center justify-center">
              <span className="text-xl text-slate-200 font-medium">
                Bem-vindo ao Agente IA Grupo Oscar!
              </span>
            </div>
          ) : (
            <div className="py-6 space-y-6">
              {messages.map(message => (
                <ChatMessage 
                  key={message.id} 
                  message={message} 
                  isNewMessage={message.id === lastGeneratedMessageId && message.role === "assistant"}
                />
              ))}
              {loading && (
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
                    <img 
                      src="/lovable-uploads/iconeIA.jpg" 
                      alt="IA" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="typing-indicator mt-1">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Chat Input */}
      <div className="sticky bottom-0 backdrop-blur-md border-t border-gray-200 dark:border-gray-800 bg-zinc-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
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
      const delay = char === '.' || char === '!' || char === '?' ? 100 : char === ',' || char === ';' ? 80 : char === ' ' ? 10 : 20;
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

  return (
    <div className={`group relative ${isUser ? "ml-auto max-w-[80%]" : "mr-auto max-w-full"}`}>
      <div className={`flex gap-4 ${isUser ? "justify-end" : "justify-start"}`}>
        {shouldShowAIIcon && (
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
            <img
              src="/lovable-uploads/iconeIA.jpg"
              alt="IA"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        )}

        <div className="max-w-full break-words">
          {isUser ? (
            <p className="whitespace-pre-wrap leading-relaxed text-white">{displayedContent}</p>
          ) : (
            <div className="markdown-content text-white">
              {isThinking ? (
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              ) : (
                <ReactMarkdown components={{
                  p: ({ children }) => <p className="mb-3 last:mb-0 leading-relaxed text-white">{children}</p>,
                  h1: ({ children }) => <h1 className="text-xl font-bold mb-3 text-white">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-lg font-bold mb-2 text-white">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-base font-bold mb-2 text-white">{children}</h3>,
                  strong: ({ children }) => <strong className="font-bold text-white">{children}</strong>,
                  em: ({ children }) => <em className="italic text-white">{children}</em>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-3 ml-4 text-white">{children}</ol>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-3 ml-4 text-white">{children}</ul>,
                  li: ({ children }) => <li className="leading-relaxed text-white">{children}</li>,
                  code: ({ children }) => <code className="bg-gray-700 px-1 py-0.5 rounded text-sm font-mono text-white">{children}</code>,
                  pre: ({ children }) => <pre className="bg-gray-700 p-3 rounded-lg overflow-x-auto mb-3 text-white">{children}</pre>,
                  blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-600 pl-4 italic mb-3 text-white">{children}</blockquote>
                }}>
                  {displayedContent}
                </ReactMarkdown>
              )}
            </div>
          )}
        </div>

        {isUser && (
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-zinc-600">
            <UserRound className="h-4 w-4 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

// ChatInput Component
interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
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

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow bg-gray-200">
          <div className="flex items-center gap-1 p-3">
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" 
              disabled={isLoading}
            >
              <Paperclip className="h-4 w-4" />
              <span className="sr-only">Anexar arquivo</span>
            </Button>
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" 
              disabled={isLoading}
            >
              <Image className="h-4 w-4" />
              <span className="sr-only">Adicionar imagem</span>
            </Button>
          </div>

          <Textarea 
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua mensagem..."
            className="flex-1 min-h-[20px] max-h-[200px] resize-none border-0 bg-transparent px-0 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
            disabled={isLoading}
            rows={1}
          />

          <div className="flex items-center gap-1 p-3">
            {input.trim() ? (
              <Button 
                type="submit" 
                size="icon" 
                className="h-8 w-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg" 
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Enviar mensagem</span>
              </Button>
            ) : (
              <Button 
                type="button" 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" 
                disabled={isLoading}
              >
                <Mic className="h-4 w-4" />
                <span className="sr-only">Gravar áudio</span>
              </Button>
            )}
          </div>
        </div>
      </form>
      
      <p className="text-xs text-center mt-2 text-slate-100">
        O Agente IA Grupo Oscar está em desenvolvimento, pode cometer erros. Considere verificar informações importantes.
      </p>
    </div>
  );
};

export default AgenteIA;
