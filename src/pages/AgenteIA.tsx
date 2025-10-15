import { useState, useRef, useEffect } from "react";
import { supabase } from '@/integrations/supabase/client';
import { toast } from "sonner";
import { UserRound } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Paperclip, Image, Mic } from "lucide-react";
import iconPD from "@/assets/icon_pd.png";
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
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });
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
    const {
      data: {
        user
      }
    } = await supabase.auth.getUser();
    let userProfile = null;
    if (user) {
      const {
        data: profile
      } = await supabase.from('profiles').select('full_name, department, role, email').eq('user_id', user.id).single();
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
  const clearChatHistory = () => {
    setMessages([]);
    setLastGeneratedMessageId(null);
    toast.success('Histórico de conversa limpo');
  };
  return <div className="flex flex-col h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md border-b border-gray-200 bg-white shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            
        <h1 className="text-2xl font-bold text-gray-900">
          Oscar Digital
        </h1>
          </div>
          <Button variant="outline" onClick={clearChatHistory} className="h-9 border-gray-300 text-gray-700 hover:bg-gray-100">
            Limpar Conversa
          </Button>
        </div>
      </header>
      
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto px-4 flex flex-col h-full pt-4">
          {messages.length === 0 ? <div className="flex flex-1 items-center justify-center">
              <span className="text-lg text-gray-500">
                Faça uma pergunta para começar...
              </span>
            </div> : <div className="pb-6 space-y-6">
              {messages.map(message => <ChatMessage key={message.id} message={message} isNewMessage={message.id === lastGeneratedMessageId && message.role === "assistant"} />)}
              {loading && <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
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
      <div className="sticky bottom-0 backdrop-blur-md border-t border-gray-200 bg-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <ChatInput onSendMessage={handleSendMessage} isLoading={loading} />
        </div>
      </div>
    </div>;
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
      const delay = char === '.' || char === '!' || char === '?' ? 70 : char === ',' || char === ';' ? 50 : char === ' ' ? 10 : 20;
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
  return <div className={`group relative ${isUser ? "ml-auto max-w-[80%]" : "mr-auto max-w-full"}`}>
      <div className={`flex gap-4 ${isUser ? "justify-end" : "justify-start"}`}>
        {shouldShowAIIcon && <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
            <img src={iconPD} alt="Agente de Processos" className="w-full h-full object-cover" loading="eager" />
          </div>}

        <div className="max-w-full break-words">
          {isUser ? <p className="whitespace-pre-wrap leading-relaxed text-gray-900 bg-gray-100 px-4 py-2 rounded-lg">{displayedContent}</p> : <div className="markdown-content text-black bg-gray-50 p-3 rounded-lg border border-gray-200">
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

        {isUser && <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gray-200 border border-gray-300">
            <UserRound className="h-4 w-4 text-gray-700" />
          </div>}
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
        <div className="relative flex items-center rounded-2xl border border-gray-300 shadow-lg hover:shadow-xl transition-shadow bg-white">
          <div className="flex items-center gap-1 p-3">
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:text-gray-900 hover:bg-gray-100" disabled={isLoading}>
              <Paperclip className="h-4 w-4" />
              <span className="sr-only">Anexar arquivo</span>
            </Button>
            <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:text-gray-900 hover:bg-gray-100" disabled={isLoading}>
              <Image className="h-4 w-4" />
              <span className="sr-only">Adicionar imagem</span>
            </Button>
          </div>

          <Textarea ref={textareaRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Pergunte ao Oscar Digital sobre processos..." className="flex-1 min-h-[20px] max-h-[200px] resize-none border-0 bg-transparent px-0 py-3 text-gray-900 placeholder-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0" disabled={isLoading} rows={1} />

          <div className="flex items-center gap-1 p-3">
            {input.trim() ? <Button type="submit" size="icon" className="h-8 w-8 bg-blue-600 hover:bg-blue-700 text-white rounded-lg" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Enviar mensagem</span>
              </Button> : <Button type="button" variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:text-gray-900 hover:bg-gray-100" disabled={isLoading}>
                <Mic className="h-4 w-4" />
                <span className="sr-only">Gravar áudio</span>
              </Button>}
          </div>
        </div>
      </form>
      
      <p className="text-xs text-center mt-2 text-gray-600">
        O Agente de Processos está em desenvolvimento, pode cometer erros. Considere verificar informações importantes.
      </p>
    </div>;
};
export default AgenteIA;
