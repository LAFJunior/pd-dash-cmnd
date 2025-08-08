import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Documentacao() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Documentação Técnica</h1>
        <p className="text-muted-foreground">
          Documentação técnica completa do sistema
        </p>
      </div>

      <Tabs defaultValue="codigo" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="codigo">Código</TabsTrigger>
          <TabsTrigger value="dados">Dados</TabsTrigger>
          <TabsTrigger value="uiux">UI/UX</TabsTrigger>
        </TabsList>

        <TabsContent value="codigo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Estrutura do Projeto</CardTitle>
              <CardDescription>Organização de pastas e arquivos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Tecnologias Principais</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge>React 18</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Vite</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>React Router</Badge>
                  <Badge>Shadcn/ui</Badge>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h4 className="font-semibold">Estrutura de Pastas</h4>
                <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`src/
├── components/          # Componentes reutilizáveis
│   ├── ui/             # Componentes base (Shadcn/ui)
│   ├── dashboard/      # Componentes do dashboard
│   ├── departamento/   # Componentes específicos de departamentos
│   └── mapa-contexto/  # Componentes do mapa interativo
├── data/               # Dados dos processos
│   └── processos/      # Processos organizados por departamento
├── hooks/              # Hooks customizados
├── lib/                # Utilitários e configurações
├── pages/              # Páginas da aplicação
└── types/              # Definições de tipos TypeScript`}
                </pre>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Principais Interfaces TypeScript</h4>
                <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`interface ProcessoDetalhado {
  id: string;
  nome: string;
  descricao: string;
  responsavel: string;
  prazo: string;
  status: 'Pendente' | 'Em Andamento' | 'Concluído';
  prioridade: 'Alta' | 'Média' | 'Baixa';
  subprocessos?: ProcessoSubprocesso[];
  documentos?: string[];
  ferramentas?: string[];
}

interface ProcessoSubprocesso {
  id: string;
  nome: string;
  descricao: string;
  responsavel: string;
  prazo: string;
  dependencias?: string[];
}`}
                </pre>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Hooks Customizados</h4>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-muted px-2 py-1 rounded">useProcessosCount</code> - Conta processos por departamento</li>
                  <li><code className="bg-muted px-2 py-1 rounded">use-mobile</code> - Detecta dispositivos móveis</li>
                  <li><code className="bg-muted px-2 py-1 rounded">use-toast</code> - Sistema de notificações</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dados" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Estrutura de Dados</CardTitle>
              <CardDescription>Como os dados são organizados no sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Controladoria</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Apoio Loja</li>
                      <li>• Auditoria Franquias</li>
                      <li>• Auditoria Oscar</li>
                      <li>• Conciliação Bancária</li>
                      <li>• Conciliação Festcard</li>
                      <li>• Gestão Contratos</li>
                      <li>• Gestão Despesas</li>
                      <li>• Indenizações Defeito</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">E-commerce</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Cadastro</li>
                      <li>• Financeiro</li>
                      <li>• Logística</li>
                      <li>• Vendedor 3.0</li>
                      <li>• Visual Merchandising</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Outros Departamentos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm">
                      <li>• Financeiro</li>
                      <li>• Fiscal</li>
                      <li>• São José dos Campos</li>
                      <li>• Defeito</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Estrutura de Arquivos de Dados</h4>
                <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`src/data/processos/
├── controladoria/      # 8 arquivos de processos
├── ecommerce/          # 5 arquivos de processos
├── financeiro/         # Processos financeiros
├── fiscal/             # Processos fiscais
├── sao-jose-campos/    # Processos específicos da unidade
├── defeito/            # Processos de defeito
└── index.ts            # Exportações centralizadas`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="uiux" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Design System</CardTitle>
              <CardDescription>Componentes e padrões visuais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Biblioteca de Componentes</h4>
                <p className="text-sm text-muted-foreground">
                  Baseado no Shadcn/ui com componentes customizados para o projeto
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  <Badge variant="outline">Button</Badge>
                  <Badge variant="outline">Card</Badge>
                  <Badge variant="outline">Table</Badge>
                  <Badge variant="outline">Dialog</Badge>
                  <Badge variant="outline">Tabs</Badge>
                  <Badge variant="outline">Badge</Badge>
                  <Badge variant="outline">Separator</Badge>
                  <Badge variant="outline">Sidebar</Badge>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Componentes Customizados</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <code>CardProcesso</code> - Cards para exibição de processos</li>
                  <li>• <code>GraficoProcessos</code> - Gráficos de métricas</li>
                  <li>• <code>MapaInterativo</code> - Mapa de contexto organizacional</li>
                  <li>• <code>EstruturaDepartamento</code> - Estrutura organizacional</li>
                  <li>• <code>FluxoDepartamento</code> - Fluxos de trabalho</li>
                </ul>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Paleta de Cores</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">Cores Primárias</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-primary"></div>
                        <span className="text-sm">Primary</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-secondary"></div>
                        <span className="text-sm">Secondary</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-accent"></div>
                        <span className="text-sm">Accent</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Cores de Estado</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-green-500"></div>
                        <span className="text-sm">Sucesso</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-yellow-500"></div>
                        <span className="text-sm">Atenção</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-red-500"></div>
                        <span className="text-sm">Erro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <h4 className="font-semibold">Layout e Navegação</h4>
                <ul className="space-y-1 text-sm">
                  <li>• <strong>Sidebar:</strong> Navegação principal com ícones e labels</li>
                  <li>• <strong>Layout Responsivo:</strong> Adaptação automática para mobile/desktop</li>
                  <li>• <strong>Dark/Light Mode:</strong> Suporte a temas claro e escuro</li>
                  <li>• <strong>Breadcrumbs:</strong> Navegação contextual em páginas internas</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}