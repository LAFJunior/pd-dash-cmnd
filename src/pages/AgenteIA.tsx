
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';
import { toast } from 'sonner';

// Interface para as mensagens
interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

// URL do webhook n8n
const N8N_WEBHOOK_URL = 'https://pmogrupooscar.app.n8n.cloud/webhook-test/test-agent-backend15465';

const AgenteIA = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Olá! Sou o Oscar, seu assistente virtual para processos. Como posso ajudar você hoje?',
      role: 'assistant',
      timestamp: new Date(),
    },
  ]);
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  
  // Função para adicionar uma mensagem do usuário
  const handleUserMessage = async () => {
    if (input.trim() === '') return;
    
    // Adiciona a mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input.trim(),
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    
    // Envia a mensagem para o webhook n8n
    await handleN8nResponse(userMessage);
  };
  
  // Função para enviar mensagem para o n8n e processar a resposta
  const handleN8nResponse = async (userMessage: Message) => {
    setIsLoading(true);
    
    try {
      // Enviar a mensagem para o webhook n8n
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.content,
          userId: 'user-' + Math.random().toString(36).substr(2, 9),
          timestamp: new Date().toISOString(),
        }),
      });
      
      if (!response.ok) {
        throw new Error(`Erro na resposta do webhook: ${response.status}`);
      }
      
      // Processar a resposta do webhook
      const data = await response.json();
      
      // Verificar se há uma resposta no objeto retornado
      let responseContent = '';
      
      // Verificar primeiramente se há um campo output na resposta
      if (data.output) {
        responseContent = data.output;
      }
      // Se o webhook retornou uma resposta específica, use-a
      else if (data.response) {
        responseContent = data.response;
      } 
      // Se o webhook retornou uma mensagem, use-a 
      else if (data.message) {
        responseContent = data.message;
      }
      // Caso contrário, use uma resposta padrão
      else {
        responseContent = 'Recebi sua mensagem e estou processando. Entrarei em contato em breve.';
      }
      
      // Adiciona a resposta do assistente
      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erro ao se comunicar com o webhook:', error);
      
      // Adiciona uma mensagem de erro
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: 'Desculpe, estou enfrentando problemas de conexão. Por favor, tente novamente mais tarde.',
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
      
      toast.error('Falha na comunicação com o servidor', {
        description: 'Não foi possível processar sua mensagem.',
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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Ajusta altura do textarea automaticamente
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  return (
    <div className="animate-fade-in flex flex-col h-[calc(100vh-120px)]">
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Agente IA Oscar</h1>
        <p className="text-gray-500">Assistente de Inteligência Artificial para processos</p>
      </div>
      
      <Card className="flex flex-col flex-1 bg-white rounded-lg shadow-md overflow-hidden">
        {/* Área de mensagens */}
        <ScrollArea className="flex-1 p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-center gap-2 mb-1 text-sm font-medium">
                      <Bot size={16} />
                      <span>Oscar</span>
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <div className="text-xs mt-1 opacity-70 text-right">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Mensagem de carregamento */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg px-4 py-2 bg-gray-100 text-gray-800">
                  <div className="flex items-center gap-2 mb-1 text-sm font-medium">
                    <Bot size={16} />
                    <span>Oscar</span>
                  </div>
                  <p className="text-gray-500">Digitando...</p>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        
        {/* Área de input */}
        <div className="border-t p-4 bg-white">
          <div className="flex gap-2">
            <Textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Digite sua mensagem..."
              className="min-h-[44px] resize-none"
              disabled={isLoading}
              rows={1}
              maxLength={1000}
            />
            <Button 
              onClick={handleUserMessage} 
              disabled={isLoading || input.trim() === ''} 
              className="h-10 aspect-square p-0"
            >
              <Send size={18} />
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            O Agente IA Oscar está em fase de desenvolvimento e tem conhecimento limitado.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default AgenteIA;
