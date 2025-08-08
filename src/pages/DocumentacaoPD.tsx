import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DocumentacaoPD() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Sistema Processos Digitais</h1>
        <p className="text-lg text-muted-foreground">
          Plataforma para mapeamento e visualização de processos organizacionais
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Objetivo</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Digitalizar e mapear todos os processos do Grupo Oscar, facilitando a navegação, 
            compreensão e gestão dos fluxos de trabalho organizacionais.
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="visao-geral" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="visao-geral">Visão Geral</TabsTrigger>
          <TabsTrigger value="usuario">Usuário</TabsTrigger>
        </TabsList>

        <TabsContent value="visao-geral" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tecnologias Principais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="p-2 bg-muted rounded text-center text-sm">React 18</div>
                <div className="p-2 bg-muted rounded text-center text-sm">TypeScript</div>
                <div className="p-2 bg-muted rounded text-center text-sm">Vite</div>
                <div className="p-2 bg-muted rounded text-center text-sm">Tailwind CSS</div>
                <div className="p-2 bg-muted rounded text-center text-sm">React Router</div>
                <div className="p-2 bg-muted rounded text-center text-sm">Shadcn/ui</div>
                <div className="p-2 bg-muted rounded text-center text-sm">React Flow</div>
                <div className="p-2 bg-muted rounded text-center text-sm">Leaflet Maps</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Departamentos Mapeados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Principais</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Controladoria (9 processos)</li>
                    <li>• E-commerce (5 pilares)</li>
                    <li>• Financeiro Varejo</li>
                    <li>• Fiscal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Outros</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• São José dos Campos</li>
                    <li>• Defeito</li>
                    <li>• Departamento Pessoal</li>
                    <li>• Auditoria</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usuario" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Guia de Navegação</CardTitle>
              <CardDescription>Como utilizar o sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Dashboard</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Visão geral de métricas do sistema</li>
                  <li>• Cards com contadores de processos por departamento</li>
                  <li>• Gráficos de distribuição e complexidade</li>
                  <li>• Status em tempo real dos processos</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Mapa de Contexto</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Visualização interativa dos processos organizacionais</li>
                  <li>• Clique nos departamentos para expandir detalhes</li>
                  <li>• Visualize conexões entre departamentos</li>
                  <li>• Use filtros para focar em categorias específicas</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Departamentos</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Lista completa de todos os departamentos mapeados</li>
                  <li>• Clique em um departamento para ver detalhes completos</li>
                  <li>• Visualize processos, organograma e fluxos de trabalho</li>
                  <li>• Acesse informações de responsáveis e prazos</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Colaboradores</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Busque colaboradores por nome ou cargo</li>
                  <li>• Visualize informações de contato e responsabilidades</li>
                  <li>• Encontre quem é responsável por cada processo</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Agente IA Oscar</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Assistente virtual para navegação no sistema</li>
                  <li>• Faça perguntas sobre processos específicos</li>
                  <li>• Obtenha ajuda para encontrar informações</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}