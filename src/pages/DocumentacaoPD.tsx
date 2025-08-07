import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Code, 
  Database, 
  Users, 
  Monitor,
  Settings,
  GitBranch,
  Folder,
  FileText,
  Component,
  Palette,
  Layout
} from 'lucide-react';

const DocumentacaoPD = () => {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Documentação - Processos Digitais</h1>
        <p className="text-muted-foreground text-lg">
          Documentação completa do sistema de mapeamento de processos organizacionais
        </p>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <BookOpen size={16} />
            Visão Geral
          </TabsTrigger>
          <TabsTrigger value="code" className="flex items-center gap-2">
            <Code size={16} />
            Código
          </TabsTrigger>
          <TabsTrigger value="data" className="flex items-center gap-2">
            <Database size={16} />
            Dados
          </TabsTrigger>
          <TabsTrigger value="user-guide" className="flex items-center gap-2">
            <Users size={16} />
            Usuário
          </TabsTrigger>
          <TabsTrigger value="ui" className="flex items-center gap-2">
            <Palette size={16} />
            UI/UX
          </TabsTrigger>
        </TabsList>

        {/* Tab 1: Visão Geral do Projeto */}
        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor size={20} />
                Sistema Processos Digitais
              </CardTitle>
              <CardDescription>
                Plataforma para mapeamento e visualização de processos organizacionais
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Objetivo</h3>
                <p className="text-muted-foreground">
                  Digitalizar e mapear todos os processos do Grupo Oscar, facilitando a navegação, 
                  compreensão e gestão dos fluxos de trabalho organizacionais.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Tecnologias</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React 18.3.1</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Vite</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">Shadcn/ui</Badge>
                  <Badge variant="secondary">React Router</Badge>
                  <Badge variant="secondary">Lucide Icons</Badge>
                  <Badge variant="secondary">React Flow</Badge>
                  <Badge variant="secondary">Leaflet Maps</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Arquitetura</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Frontend SPA (Single Page Application)</li>
                  <li>Componentes modulares e reutilizáveis</li>
                  <li>Design system baseado em Shadcn/ui</li>
                  <li>Roteamento client-side</li>
                  <li>Estado local com React hooks</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 2: Documentação de Código */}
        <TabsContent value="code" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Folder size={20} />
                  Estrutura de Pastas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="src">
                    <AccordionTrigger>src/</AccordionTrigger>
                    <AccordionContent>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li><code>components/</code> - Componentes React reutilizáveis</li>
                        <li><code>pages/</code> - Páginas da aplicação</li>
                        <li><code>data/</code> - Dados estáticos dos processos</li>
                        <li><code>hooks/</code> - Hooks customizados</li>
                        <li><code>lib/</code> - Utilitários e helpers</li>
                        <li><code>types/</code> - Definições TypeScript</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="components">
                    <AccordionTrigger>components/</AccordionTrigger>
                    <AccordionContent>
                      <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                        <li><code>ui/</code> - Componentes base do Shadcn/ui</li>
                        <li><code>dashboard/</code> - Componentes do dashboard</li>
                        <li><code>departamento/</code> - Componentes específicos de departamentos</li>
                        <li><code>mapa-contexto/</code> - Componentes do mapa interativo</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText size={20} />
                  Interfaces TypeScript
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">ProcessoDetalhado</h4>
                    <pre className="text-xs bg-muted p-2 rounded mt-1">
{`interface ProcessoDetalhado {
  nome: string;
  responsavel: string;
  prazo: string;
  complexidade: "baixa" | "média" | "alta";
  status: "ativo" | "em_revisao" | "suspenso";
  descricao: string;
  subprocessos: ProcessoSubprocesso[];
  observacoes?: string;
}`}
                    </pre>
                  </div>
                  <div>
                    <h4 className="font-medium">ProcessoSubprocesso</h4>
                    <pre className="text-xs bg-muted p-2 rounded mt-1">
{`interface ProcessoSubprocesso {
  id: string;
  nome: string;
  responsavel: string;
  prazo: string;
  descricao: string;
}`}
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Component size={20} />
                Componentes Principais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Layout & Navegação</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><code>Layout.tsx</code> - Layout principal da aplicação</li>
                    <li><code>Sidebar.tsx</code> - Barra lateral de navegação</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Dashboard</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><code>CardProcesso.tsx</code> - Cards de processos</li>
                    <li><code>GraficoProcessos.tsx</code> - Gráficos estatísticos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Departamentos</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><code>EstruturaDepartamento.tsx</code> - Organograma</li>
                    <li><code>ProcessosDepartamento.tsx</code> - Lista de processos</li>
                    <li><code>FluxoDepartamento.tsx</code> - Fluxos específicos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Mapa Interativo</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><code>MapaInterativo.tsx</code> - Mapa de lojas</li>
                    <li><code>MapaContextoReactFlow.tsx</code> - Mapa de processos</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings size={20} />
                Hooks Customizados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <code className="bg-muted px-2 py-1 rounded">useProcessosCount</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hook para contagem de processos por departamento
                  </p>
                </div>
                <div>
                  <code className="bg-muted px-2 py-1 rounded">use-mobile</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hook para detecção de dispositivos móveis
                  </p>
                </div>
                <div>
                  <code className="bg-muted px-2 py-1 rounded">use-toast</code>
                  <p className="text-sm text-muted-foreground mt-1">
                    Hook para exibição de notificações toast
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 3: Dados e Processos */}
        <TabsContent value="data" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database size={20} />
                Estrutura de Dados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Os dados dos processos são organizados em arquivos TypeScript estáticos na pasta <code>src/data/processos/</code>
              </p>
              
              <Accordion type="single" collapsible>
                <AccordionItem value="controladoria">
                  <AccordionTrigger>Controladoria (9 processos)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm space-y-1">
                      <li>• Apoio à Loja</li>
                      <li>• Auditoria de Franquias</li>
                      <li>• Auditoria Oscar</li>
                      <li>• Conciliação Bancária</li>
                      <li>• Conciliação FestCard</li>
                      <li>• Gestão de Contratos</li>
                      <li>• Gestão de Despesas</li>
                      <li>• Indenizações de Defeito</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="ecommerce">
                  <AccordionTrigger>E-commerce (5 pilares)</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm space-y-1">
                      <li>• Cadastro de Produtos</li>
                      <li>• Financeiro E-commerce</li>
                      <li>• Logística Digital</li>
                      <li>• Vendedor 3.0</li>
                      <li>• Visual Merchandising</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="outros">
                  <AccordionTrigger>Outros Departamentos</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm space-y-1">
                      <li>• Financeiro Varejo</li>
                      <li>• Fiscal</li>
                      <li>• São José dos Campos</li>
                      <li>• Defeito</li>
                      <li>• Departamento Pessoal</li>
                      <li>• Auditoria</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GitBranch size={20} />
                Fluxos de Trabalho
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Tipos de Fluxo</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fluxos Departamentais</li>
                    <li>• Fluxos Financeiros</li>
                    <li>• Fluxos de Controladoria</li>
                    <li>• Fluxos de E-commerce</li>
                    <li>• Fluxos Fiscais</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Características</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Responsáveis definidos</li>
                    <li>• Prazos estabelecidos</li>
                    <li>• Complexidade mapeada</li>
                    <li>• Status atualizável</li>
                    <li>• Subprocessos detalhados</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 4: Guia do Usuário */}
        <TabsContent value="user-guide" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users size={20} />
                Guia de Navegação
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                <AccordionItem value="dashboard">
                  <AccordionTrigger>Dashboard</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Visão Geral:</strong> Métricas gerais do sistema</li>
                      <li>• <strong>Cards de Processos:</strong> Contadores por departamento</li>
                      <li>• <strong>Gráficos:</strong> Distribuição de processos e complexidade</li>
                      <li>• <strong>Status:</strong> Acompanhamento em tempo real</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="mapa-contexto">
                  <AccordionTrigger>Mapa de Contexto</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Visualização Interativa:</strong> Mapa de processos organizacionais</li>
                      <li>• <strong>Nodes Departamentais:</strong> Clique para expandir detalhes</li>
                      <li>• <strong>Conexões:</strong> Relacionamentos entre departamentos</li>
                      <li>• <strong>Filtros:</strong> Visualização por categoria ou status</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="departamentos">
                  <AccordionTrigger>Departamentos</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Lista Completa:</strong> Todos os departamentos mapeados</li>
                      <li>• <strong>Detalhes:</strong> Clique em um departamento para ver detalhes</li>
                      <li>• <strong>Processos:</strong> Lista de processos por departamento</li>
                      <li>• <strong>Organograma:</strong> Estrutura hierárquica da equipe</li>
                      <li>• <strong>Fluxos:</strong> Fluxos de trabalho específicos</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="colaboradores">
                  <AccordionTrigger>Colaboradores</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Busca:</strong> Encontre colaboradores por nome ou cargo</li>
                      <li>• <strong>Contatos:</strong> Informações de contato e email</li>
                      <li>• <strong>Hierarquia:</strong> Posição na estrutura organizacional</li>
                      <li>• <strong>Responsabilidades:</strong> Processos sob responsabilidade</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="agente-ia">
                  <AccordionTrigger>Agente IA Oscar</AccordionTrigger>
                  <AccordionContent>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• <strong>Assistente Virtual:</strong> Tire dúvidas sobre processos</li>
                      <li>• <strong>Busca Inteligente:</strong> Encontre informações rapidamente</li>
                      <li>• <strong>Sugestões:</strong> Melhorias e otimizações de processos</li>
                      <li>• <strong>Histórico:</strong> Consulte conversas anteriores</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Dicas de Uso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm"><strong>💡 Dica:</strong> Use o menu lateral para navegação rápida entre seções</p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                  <p className="text-sm"><strong>🎯 Foco:</strong> Use filtros no dashboard para visualizar processos específicos</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <p className="text-sm"><strong>🔍 Busca:</strong> O Agente IA Oscar pode ajudar a encontrar qualquer informação</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab 5: UI/UX */}
        <TabsContent value="ui" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette size={20} />
                Design System
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Shadcn/ui Components</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Sistema de componentes baseado em Radix UI com design moderno e acessível
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <Badge variant="outline">Button</Badge>
                    <Badge variant="outline">Card</Badge>
                    <Badge variant="outline">Dialog</Badge>
                    <Badge variant="outline">Tabs</Badge>
                    <Badge variant="outline">Accordion</Badge>
                    <Badge variant="outline">Badge</Badge>
                    <Badge variant="outline">Input</Badge>
                    <Badge variant="outline">Table</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Paleta de Cores</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-primary rounded"></div>
                      <span className="text-sm">Primary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-secondary rounded"></div>
                      <span className="text-sm">Secondary</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-muted rounded"></div>
                      <span className="text-sm">Muted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-accent rounded"></div>
                      <span className="text-sm">Accent</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Tipografia</h4>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold">Heading 1</p>
                    <p className="text-xl font-semibold">Heading 2</p>
                    <p className="text-base">Body text regular</p>
                    <p className="text-sm text-muted-foreground">Caption text</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout size={20} />
                Padrões de Interface
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Layout Responsivo</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Grid system flexível</li>
                    <li>• Breakpoints Tailwind CSS</li>
                    <li>• Sidebar colapsível</li>
                    <li>• Componentes adaptativos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Navegação</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Menu lateral fixo</li>
                    <li>• Breadcrumbs contextuais</li>
                    <li>• Estados ativos destacados</li>
                    <li>• Navegação por tabs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Feedback Visual</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Loading states</li>
                    <li>• Toast notifications</li>
                    <li>• Hover effects</li>
                    <li>• Status indicators</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DocumentacaoPD;