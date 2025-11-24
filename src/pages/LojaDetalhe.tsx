import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowLeft, CheckCircle, Clock, Circle, BookOpen, Save, 
  FileText, Video, Award, Target, TrendingUp
} from 'lucide-react';
import { todosOsProcessos } from '@/data/processos';

// Mock de dados da loja
const lojasMock = {
  '1': { codigo: '001', nome: 'Cl2', cidade: 'São José dos Campos', estado: 'SP', responsavel: 'Jully - Sabrina', progresso: 78, processosConcluidos: 156, totalProcessos: 200 }
};

// Mock de progresso por processo
const progressoMock: Record<string, { status: string; progresso?: number; observacoes?: string }> = {
  'orcamento-anual': { status: 'concluido' },
  'conciliacao-bancaria': { status: 'em_progresso', progresso: 65 },
  'gestao-contratos': { status: 'nao_iniciado' },
};

const LojaDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [processoSelecionado, setProcessoSelecionado] = useState<any>(null);
  const [filtroStatus, setFiltroStatus] = useState('todos');

  const loja = lojasMock[id as keyof typeof lojasMock];

  if (!loja) {
    return <div className="p-8">Loja não encontrada</div>;
  }

  // Agrupar processos por departamento
  const processosPorDepartamento = todosOsProcessos.reduce((acc, processo) => {
    const dept = (processo as any).departamento || 'Outros';
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(processo);
    return acc;
  }, {} as Record<string, any[]>);

  const departamentos = Object.entries(processosPorDepartamento).map(([nome, processos]) => {
    const concluidos = processos.filter(p => progressoMock[p.id]?.status === 'concluido').length;
    return { nome, processos, total: processos.length, concluidos };
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'concluido':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'em_progresso':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const filtrarProcessosPorStatus = (processos: any[]) => {
    if (filtroStatus === 'todos') return processos;
    return processos.filter(p => (progressoMock[p.id]?.status || 'nao_iniciado') === filtroStatus);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Fixo */}
      <header className="bg-card border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" onClick={() => navigate('/lojas')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
            <div className="h-6 w-px bg-border" />
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground">
                {loja.codigo} - {loja.nome}
              </h1>
              <p className="text-sm text-muted-foreground">
                {loja.cidade}, {loja.estado} • Resp: {loja.responsavel}
              </p>
            </div>
            
            {/* Progresso Circular */}
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <svg className="transform -rotate-90 w-20 h-20">
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="hsl(var(--muted))"
                    strokeWidth="6"
                    fill="none"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="32"
                    stroke="hsl(var(--primary))"
                    strokeWidth="6"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 32}`}
                    strokeDashoffset={`${2 * Math.PI * 32 * (1 - loja.progresso / 100)}`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">{loja.progresso}%</span>
                </div>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Progresso Geral</p>
                <p className="text-lg font-bold text-foreground">
                  {loja.processosConcluidos}/{loja.totalProcessos} processos
                </p>
              </div>
            </div>
          </div>
          
          {/* Filtros de Status */}
          <div className="flex gap-2">
            <Button 
              variant={filtroStatus === 'todos' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFiltroStatus('todos')}
            >
              Todos
            </Button>
            <Button 
              variant={filtroStatus === 'em_progresso' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFiltroStatus('em_progresso')}
            >
              <Clock className="w-4 h-4 mr-1" />
              Em Progresso
            </Button>
            <Button 
              variant={filtroStatus === 'concluido' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFiltroStatus('concluido')}
            >
              <CheckCircle className="w-4 h-4 mr-1" />
              Concluído
            </Button>
            <Button 
              variant={filtroStatus === 'nao_iniciado' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFiltroStatus('nao_iniciado')}
            >
              <Circle className="w-4 h-4 mr-1" />
              Não Iniciado
            </Button>
          </div>
        </div>
      </header>

      {/* Layout Principal: Sidebar + Content */}
      <div className="flex container mx-auto">
        {/* Sidebar - Currículo (Sticky) */}
        <aside className="w-80 bg-card border-r h-[calc(100vh-200px)] sticky top-[200px] overflow-y-auto">
          <div className="p-4">
            <h3 className="font-bold mb-4 text-foreground">Conteúdo do Currículo</h3>
            
            <Accordion type="single" collapsible className="w-full">
              {departamentos.map((dept, idx) => {
                const processosFiltrados = filtrarProcessosPorStatus(dept.processos);
                if (processosFiltrados.length === 0 && filtroStatus !== 'todos') return null;
                
                return (
                  <AccordionItem key={dept.nome} value={dept.nome}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center justify-between w-full pr-2">
                        <span className="font-medium text-sm text-foreground">
                          Seção {idx + 1}: {dept.nome}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {dept.concluidos}/{dept.total}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent>
                      <ul className="space-y-1">
                        {(filtroStatus === 'todos' ? dept.processos : processosFiltrados).map(processo => {
                          const progresso = progressoMock[processo.id];
                          const status = progresso?.status || 'nao_iniciado';
                          const isSelected = processoSelecionado?.id === processo.id;
                          
                          return (
                            <li
                              key={processo.id}
                              className={`
                                flex items-start gap-2 p-2 rounded cursor-pointer
                                hover:bg-accent transition-colors
                                ${isSelected ? 'bg-primary/10 border-l-4 border-primary' : ''}
                              `}
                              onClick={() => setProcessoSelecionado(processo)}
                            >
                              {getStatusIcon(status)}
                              
                              <div className="flex-1 min-w-0">
                                <p className={`text-sm ${isSelected ? 'font-medium text-primary' : 'text-foreground'} line-clamp-2`}>
                                  {processo.nome}
                                </p>
                                {status === 'em_progresso' && progresso?.progresso && (
                                  <Progress value={progresso.progresso} className="h-1 mt-1" />
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </aside>

        {/* Main Content - Detalhes do Processo */}
        <main className="flex-1 p-8">
          {processoSelecionado ? (
            <div className="max-w-4xl">
              {/* Header do Processo */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline">{processoSelecionado.nivel}</Badge>
                  {(processoSelecionado as any).departamento && (
                    <Badge>{(processoSelecionado as any).departamento}</Badge>
                  )}
                </div>
                
                <h2 className="text-3xl font-bold mb-2 text-foreground">
                  {processoSelecionado.nome}
                </h2>
                
                <p className="text-muted-foreground mb-4">
                  {processoSelecionado.descricao}
                </p>
                
                {/* Status do Processo na Loja */}
                <Card className="mb-6 border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          Status nesta loja
                        </p>
                        <Select defaultValue={progressoMock[processoSelecionado.id]?.status || 'nao_iniciado'}>
                          <SelectTrigger className="w-48">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nao_iniciado">Não Iniciado</SelectItem>
                            <SelectItem value="em_progresso">Em Progresso</SelectItem>
                            <SelectItem value="concluido">Concluído</SelectItem>
                            <SelectItem value="bloqueado">Bloqueado</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      {progressoMock[processoSelecionado.id]?.status === 'em_progresso' && (
                        <div className="flex-1 ml-8">
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            Progresso: {progressoMock[processoSelecionado.id]?.progresso || 0}%
                          </p>
                          <Slider
                            defaultValue={[progressoMock[processoSelecionado.id]?.progresso || 0]}
                            max={100}
                            step={5}
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Tabs com Conteúdo */}
              <Tabs defaultValue="visao-geral" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
                  <TabsTrigger value="subprocessos">Subprocessos</TabsTrigger>
                  <TabsTrigger value="materiais">Materiais</TabsTrigger>
                  <TabsTrigger value="observacoes">Observações</TabsTrigger>
                </TabsList>

                <TabsContent value="visao-geral" className="space-y-4">
                  {/* Fluxo do Processo */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Fluxo do Processo
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            📥 Entrada
                          </p>
                          <p className="text-sm text-foreground">{processoSelecionado.entrada}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground mb-2">
                            📤 Saída
                          </p>
                          <p className="text-sm text-foreground">{processoSelecionado.saida}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sistemas Utilizados */}
                  {processoSelecionado.sistemas_utilizados && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Sistemas Utilizados</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {processoSelecionado.sistemas_utilizados.map((sistema: string) => (
                            <Badge key={sistema} variant="secondary">
                              {sistema}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Tempo e Frequência */}
                  {(processoSelecionado.tempo_execucao || processoSelecionado.frequencia) && (
                    <Card>
                      <CardHeader>
                        <CardTitle>Informações Adicionais</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                          {processoSelecionado.tempo_execucao && (
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-1">
                                ⏱️ Tempo de Execução
                              </p>
                              <p className="text-sm text-foreground">{processoSelecionado.tempo_execucao}</p>
                            </div>
                          )}
                          {processoSelecionado.frequencia && (
                            <div>
                              <p className="text-sm font-medium text-muted-foreground mb-1">
                                🔄 Frequência
                              </p>
                              <p className="text-sm text-foreground">{processoSelecionado.frequencia}</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </TabsContent>

                <TabsContent value="subprocessos">
                  <Card>
                    <CardHeader>
                      <CardTitle>Subprocessos e Tarefas</CardTitle>
                      <CardDescription>
                        Marque as tarefas conforme forem sendo concluídas
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      {processoSelecionado.subprocessos && processoSelecionado.subprocessos.length > 0 ? (
                        <div className="space-y-4">
                          {processoSelecionado.subprocessos.map((sub: any) => (
                            <div key={sub.id} className="border rounded-lg p-4">
                              <h4 className="font-medium mb-3 text-foreground flex items-center gap-2">
                                {sub.nome}
                                <Badge variant="outline" className="text-xs">{sub.nivel}</Badge>
                              </h4>
                              
                              {sub.tarefas && sub.tarefas.length > 0 && (
                                <div className="space-y-2">
                                  {sub.tarefas.map((tarefa: any) => (
                                    <div key={tarefa.id} className="flex items-start gap-2 p-2 hover:bg-accent rounded">
                                      <Checkbox id={tarefa.id} />
                                      <label htmlFor={tarefa.id} className="text-sm cursor-pointer flex-1">
                                        {tarefa.nome}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-sm text-muted-foreground">Nenhum subprocesso cadastrado</p>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="materiais">
                  <div className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          Documentos (PDFs)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Materiais de apoio para este processo serão exibidos aqui
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Video className="w-5 h-5" />
                          Vídeos de Treinamento
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          Vídeos explicativos para este processo serão exibidos aqui
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="observacoes">
                  <Card>
                    <CardHeader>
                      <CardTitle>Observações da Loja</CardTitle>
                      <CardDescription>
                        Notas e comentários específicos desta loja sobre o processo
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Textarea
                        placeholder="Ex: Processo adaptado para nossa realidade, tivemos dificuldade com X, sugestão de melhoria..."
                        rows={6}
                        className="mb-4"
                        defaultValue={progressoMock[processoSelecionado.id]?.observacoes}
                      />
                      <Button>
                        <Save className="w-4 h-4 mr-2" />
                        Salvar Observações
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <div className="flex items-center justify-center h-96">
              <div className="text-center text-muted-foreground">
                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Selecione um processo na lateral para começar</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default LojaDetalhe;
