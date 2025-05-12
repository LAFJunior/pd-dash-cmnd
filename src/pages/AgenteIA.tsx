
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
  const handleUserMessage = () => {
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
    
    // Simula resposta do assistente
    handleAssistantResponse(userMessage);
  };
  
  // Função para simular resposta do assistente
  const handleAssistantResponse = (userMessage: Message) => {
    setIsLoading(true);
    
    // Simula um delay para dar a impressão de processamento
    setTimeout(() => {
      // Respostas pré-definidas baseadas em palavras-chave
      let responseContent = '';
      const userInput = userMessage.content.toLowerCase();
      
      if (userInput.includes('processos estratégicos') || userInput.includes('estratégico')) {
        responseContent = 'Os processos estratégicos são aqueles que definem as diretrizes da organização, como planejamento estratégico, gestão financeira e desenvolvimento de novos negócios.';
      } else if (userInput.includes('processos táticos') || userInput.includes('tático')) {
        responseContent = 'Os processos táticos fazem a ligação entre o estratégico e o operacional, incluindo gestão de departamentos, projetos e equipes.';
      } else if (userInput.includes('processos operacionais') || userInput.includes('operacional')) {
        responseContent = 'Os processos operacionais são aqueles que executam as atividades do dia a dia da organização, como produção, atendimento ao cliente e vendas.';
      } else if (userInput.includes('departamento')) {
        responseContent = 'Temos vários departamentos em nossa estrutura. Você pode consultar a lista completa na guia "Departamentos" do menu lateral.';
      } else if (userInput.includes('ajuda') || userInput.includes('help')) {
        responseContent = 'Posso ajudar com informações sobre processos estratégicos, táticos e operacionais, além de responder dúvidas sobre departamentos e fluxo de trabalho.';
      } else {
        responseContent = 'Obrigado pela sua mensagem. Como assistente virtual especializado em processos, posso ajudar com informações sobre os fluxos de trabalho, departamentos e operações da empresa. Posso detalhar algo específico para você?';
      }
      
      const assistantMessage: Message = {
        id: Date.now().toString(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1500);
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
