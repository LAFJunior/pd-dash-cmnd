import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, ImageIcon, FileTextIcon, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

// Interface para as mensagens
interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  media?: {
    type: 'image' | 'document';
    url: string;
    fileName: string;
  };
}

// URL do backend local do chat
const CHAT_API_URL = 'http://localhost:5000/chat';

// Chave para armazenar o histórico no sessionStorage
const CHAT_HISTORY_KEY = 'oscar_chat_history';
const AgenteIA = () => {
  // Inicializa o estado com dados do sessionStorage ou mensagem inicial padrão
  const [messages, setMessages] = useState<Message[]>(() => {
    // Tenta recuperar histórico do sessionStorage
    const savedMessages = sessionStorage.getItem(CHAT_HISTORY_KEY);
    if (savedMessages) {
      try {
        // Converte as strings de data de volta para objetos Date
        const parsedMessages = JSON.parse(savedMessages).map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        return parsedMessages;
      } catch (error) {
        console.error("Erro ao carregar histórico de chat:", error);
      }
    }

    // Retorna mensagem inicial padrão se não houver histórico
    return [{
      id: '1',
      content: 'Olá! Sou o assistente virtual dos processos do Grupo Oscar. Como posso ajudar?',
      role: 'assistant',
      timestamp: new Date()
    }];
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'document' | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);

  // Salva mensagens no sessionStorage sempre que o estado mudar (sem mídia para evitar QuotaExceededError)
  useEffect(() => {
    try {
      // Remove mídia das mensagens antes de salvar para evitar exceder a quota
      const messagesWithoutMedia = messages.map(msg => ({
        ...msg,
        media: undefined // Remove conteúdo de mídia do armazenamento
      }));
      
      // Limita a 50 mensagens mais recentes para economizar espaço
      const recentMessages = messagesWithoutMedia.slice(-50);
      
      sessionStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(recentMessages));
    } catch (error) {
      // Se falhar (QuotaExceededError), limpa o histórico e tenta novamente
      console.warn('Erro ao salvar histórico, limpando dados antigos:', error);
      sessionStorage.removeItem(CHAT_HISTORY_KEY);
      try {
        // Salva apenas as 10 mensagens mais recentes sem mídia
        const limitedMessages = messages.slice(-10).map(msg => ({
          ...msg,
          media: undefined
        }));
        sessionStorage.setItem(CHAT_HISTORY_KEY, JSON.stringify(limitedMessages));
      } catch (finalError) {
        console.error('Falha final ao salvar histórico:', finalError);
      }
    }
  }, [messages]);

  // Limpa o histórico quando o componente é desmontado (usuário sai da página)
  useEffect(() => {
    return () => {
      // Não removemos do sessionStorage para manter entre navegações internas
      // Se quiser limpar completamente ao sair do site, usaria:
      // window.addEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Função para adicionar uma mensagem do usuário
  const handleUserMessage = async () => {
    if (input.trim() === '' && !mediaFile) return;

    // Adiciona a mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date()
    };

    // Se tiver um arquivo de mídia, adicione ao objeto de mensagem
    if (mediaFile && mediaPreview) {
      userMessage.media = {
        type: mediaType as 'image' | 'document',
        url: mediaPreview,
        fileName: mediaFile.name
      };
    }
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Limpa a pré-visualização do arquivo
    setMediaFile(null);
    setMediaPreview(null);
    setMediaType(null);

    // Envia a mensagem para o webhook n8n
    await handleN8nResponse(userMessage);
  };

  // Função para limpar o histórico de chat
  const clearChatHistory = () => {
    setMessages([{
      id: '1',
      content: 'Olá! Sou o assistente virtual dos processos do Grupo Oscar. Como posso ajudar?',
      role: 'assistant',
      timestamp: new Date()
    }]);
    sessionStorage.removeItem(CHAT_HISTORY_KEY);
    toast.success('Histórico de conversa limpo');
  };

  // Função para enviar mensagem para o n8n e processar a resposta
  const handleN8nResponse = async (userMessage: Message) => {
    setIsLoading(true);
    try {
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

      // Preparar dados para enviar ao webhook
      const requestData: any = {
        message: userMessage.content,
        userId: user?.id || 'anonymous-' + Math.random().toString(36).substr(2, 9),
        timestamp: new Date().toISOString(),
        full_name: userProfile?.full_name || 'Usuário Anônimo',
        role: userProfile?.role || 'guest',
        department: userProfile?.department || 'Não informado',
        email: userProfile?.email || user?.email || 'Não informado'
      };

      // Se houver um arquivo de mídia, adicione informações do arquivo
      if (userMessage.media) {
        requestData.mediaType = userMessage.media.type;
        requestData.fileName = userMessage.media.fileName;

        // Para imagens ou áudio, podemos enviar a URL base64
        // Nota: Para arquivos grandes, isso pode não ser a melhor abordagem
        // Considere usar um upload para armazenamento em nuvem e enviar o link
        if (userMessage.media.url.startsWith('data:')) {
          requestData.mediaContent = userMessage.media.url;
        }
      }

      // Enviar a mensagem para o backend local
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userMessage.content,
          user_info: {
            name: userProfile?.full_name || 'Usuário Anônimo',
            department: userProfile?.department || 'Não informado',
            role: userProfile?.role || 'guest'
          }
        })
      });
      if (!response.ok) {
        throw new Error(`Erro na resposta do webhook: ${response.status}`);
      }

      // Processar a resposta do webhook
      const data = await response.json();

      // Processar a resposta do backend
      const responseContent = data.response || 'Desculpe, não consegui processar sua mensagem no momento.';

      // Adiciona a resposta do assistente
      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao se comunicar com o backend:', error);

      // Adiciona uma mensagem de erro
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: 'Desculpe, estou enfrentando problemas de conexão. Por favor, tente novamente mais tarde.',
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      toast.error('Falha na comunicação com o servidor', {
        description: 'Não foi possível processar sua mensagem.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Função para lidar com o envio por Enter (mas permite nova linha com Shift+Enter)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserMessage();
    }
  };

  // Scroll para o final quando novas mensagens são adicionadas
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);

  // Ajusta altura do textarea automaticamente
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  // Função para lidar com o upload de imagem
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Verifica se o arquivo é uma imagem
    if (!file.type.startsWith('image/')) {
      toast.error('Arquivo inválido', {
        description: 'Por favor, selecione uma imagem.'
      });
      return;
    }

    // Limite de tamanho (5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error('Arquivo muito grande', {
        description: 'O tamanho máximo permitido é 5MB.'
      });
      return;
    }

    // Cria uma URL para a imagem
    const reader = new FileReader();
    reader.onload = e => {
      const result = e.target?.result as string;
      setMediaPreview(result);
      setMediaType('image');
    };
    reader.readAsDataURL(file);
    setMediaFile(file);
    toast.success('Imagem carregada', {
      description: 'Imagem pronta para ser enviada.'
    });
  };

  // Função para lidar com o upload de documentos
  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Verifica se o arquivo é um documento válido
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain'];
    if (!validTypes.includes(file.type)) {
      toast.error('Arquivo inválido', {
        description: 'Por favor, selecione um PDF, DOC, DOCX ou TXT.'
      });
      return;
    }

    // Limite de tamanho (10MB)
    const maxSize = 10 * 1024 * 1024;
    if (file.size > maxSize) {
      toast.error('Arquivo muito grande', {
        description: 'O tamanho máximo permitido é 10MB.'
      });
      return;
    }

    // Cria uma URL para o documento
    const reader = new FileReader();
    reader.onload = e => {
      const result = e.target?.result as string;
      setMediaPreview(result);
      setMediaType('document');
    };
    reader.readAsDataURL(file);
    setMediaFile(file);
    toast.success('Documento carregado', {
      description: 'Documento pronto para ser enviado.'
    });
  };

  // Função para remover o arquivo de mídia
  const handleRemoveMedia = () => {
    setMediaFile(null);
    setMediaPreview(null);
    setMediaType(null);
  };
  return <div className="animate-fade-in flex flex-col h-[calc(100vh-120px)]">
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Agente IA Grupo Oscar</h1>
          <p className="text-gray-500">Assistente de Inteligência Artificial para processos</p>
        </div>
        <Button variant="outline" onClick={clearChatHistory} className="h-9">
          Limpar Conversa
        </Button>
      </div>
      
      <Card className="flex flex-col flex-1 bg-white rounded-lg shadow-md overflow-hidden">
        {/* Área de mensagens */}
        <ScrollArea className="flex-1 p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map(message => <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg px-4 py-2 ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-gray-100 text-gray-800'}`}>
                  {message.role === 'assistant' && <div className="flex items-center gap-2 mb-1 text-sm font-medium">
                      <Bot size={16} />
                      <span>Oscar</span>
                    </div>}
                  
                  {/* Exibe mídia se existir */}
                  {message.media && message.media.type === 'image' && <div className="mb-2">
                      <img src={message.media.url} alt="Imagem enviada pelo usuário" className="rounded-md max-h-64 w-auto" />
                      <p className="text-xs mt-1 opacity-70">
                        {message.media.fileName}
                      </p>
                    </div>}
                  
                  {message.media && message.media.type === 'document' && <div className="mb-2">
                      <div className="flex items-center gap-2 p-2 bg-gray-200 rounded">
                        <FileTextIcon size={16} />
                        <span className="text-sm">{message.media.fileName}</span>
                      </div>
                    </div>}
                  
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <div className="text-xs mt-1 opacity-70 text-right">
                    {message.timestamp.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
                  </div>
                </div>
              </div>)}
            
            {/* Mensagem de carregamento */}
            {isLoading && <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-100 text-gray-800">
                  <div className="flex items-center gap-2 mb-1 text-sm font-medium">
                    <Bot size={16} />
                    <span>Oscar</span>
                  </div>
                  <p className="text-gray-500">Digitando...</p>
                </div>
              </div>}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        {/* Área de preview da mídia */}
        {mediaPreview && <div className="border-t p-3 bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Arquivo anexado</p>
              <Button variant="ghost" size="sm" onClick={handleRemoveMedia} className="h-8 w-8 p-0">
                <XCircle size={16} />
              </Button>
            </div>
            
            {mediaType === 'image' && <div className="mt-2">
                <img src={mediaPreview} alt="Preview da imagem" className="h-32 rounded-md object-contain" />
              </div>}
            
            {mediaType === 'document' && <div className="mt-2">
                <div className="flex items-center gap-2 p-2 bg-gray-200 rounded">
                  <FileTextIcon size={16} />
                  <span className="text-sm">{mediaFile?.name}</span>
                </div>
              </div>}
          </div>}
        
        {/* Área de input */}
        <div className="border-t p-4 bg-white">
          <div className="flex gap-2">
            <Textarea ref={textareaRef} value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKeyDown} placeholder="Digite sua mensagem..." className="min-h-[44px] resize-none" disabled={isLoading} rows={1} maxLength={1000} />
            
            {/* Botões de upload */}
            <div className="flex gap-1">
              {/* Input invisível para imagens */}
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              
              {/* Botão para acionar o upload de imagem */}
              <Button onClick={() => fileInputRef.current?.click()} variant="outline" className="h-10 aspect-square p-0" title="Enviar imagem" disabled={isLoading || mediaFile !== null}>
                <ImageIcon size={18} />
              </Button>
              
              {/* Input invisível para documentos */}
              <input ref={documentInputRef} type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleDocumentUpload} className="hidden" />
              
              {/* Botão para acionar o upload de documento */}
              <Button onClick={() => documentInputRef.current?.click()} variant="outline" className="h-10 aspect-square p-0" title="Enviar documento" disabled={isLoading || mediaFile !== null}>
                <FileTextIcon size={18} />
              </Button>
              
              {/* Botão de enviar mensagem */}
              <Button onClick={handleUserMessage} disabled={isLoading || input.trim() === '' && !mediaFile} className="h-10 aspect-square p-0">
                <Send size={18} />
              </Button>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            O Agente IA Oscar está em fase de desenvolvimento e tem conhecimento limitado.
          </p>
        </div>
      </Card>
    </div>;
};
export default AgenteIA;
