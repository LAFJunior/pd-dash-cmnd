import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import VideoPlayer from '@/components/VideoPlayer';
import { useAnalytics } from '@/hooks/useAnalytics';
import { 
  CreditCard, 
  HeadphonesIcon, 
  UserCheck, 
  Scale, 
  Building2,
  FileText,
  PlayCircle,
  Download,
  ChevronDown,
  Star,
  ShoppingCart,
  Phone,
  CreditCard as CardIcon,
  TrendingUp,
  Store,
  Computer,
  Globe
} from 'lucide-react';

const Festcard = () => {
  const { trackPDFDownload } = useAnalytics();
  const [pilarSelecionado, setPilarSelecionado] = useState('sac');

  const handlePDFDownload = (url: string, title: string) => {
    trackPDFDownload(title, url, 'Festcard');
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Header do Festcard */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <CreditCard className="text-purple-600" size={28} />
          Festcard - Soluções em Crédito
        </h2>
        <p className="text-muted-foreground">
          O Cartão Festcard nasceu para trazer solução de crédito fácil de maneira prática e econômica aos clientes do Grupo OSCAR.
        </p>
      </div>

      {/* Pilares do Festcard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="text-purple-600" size={20} />
            Pilares do Festcard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={pilarSelecionado} onValueChange={setPilarSelecionado}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="sac">SAC</TabsTrigger>
              <TabsTrigger value="sac-adm">SAC ADM</TabsTrigger>
              <TabsTrigger value="mesa-credito">Mesa de Crédito</TabsTrigger>
              <TabsTrigger value="juridico">Jurídico</TabsTrigger>
              <TabsTrigger value="ra">Departamento RA</TabsTrigger>
            </TabsList>

            <TabsContent value="sac" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HeadphonesIcon className="text-blue-600" size={24} />
                  <h3 className="text-lg font-semibold">SAC - Serviço de Atendimento ao Cliente</h3>
                </div>
                <p className="text-muted-foreground">
                  Central de atendimento especializada em resolver questões dos portadores do Cartão Festcard, 
                  oferecendo suporte completo para dúvidas, solicitações e problemas relacionados ao cartão.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Principais Atividades</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Atendimento ao cliente</li>
                      <li>• Esclarecimento de dúvidas</li>
                      <li>• Suporte técnico</li>
                      <li>• Resolução de problemas</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Canais de Contato</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Central telefônica</li>
                      <li>• Atendimento digital</li>
                      <li>• Chat online</li>
                      <li>• E-mail suporte</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sac-adm" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <UserCheck className="text-green-600" size={24} />
                  <h3 className="text-lg font-semibold">SAC ADM - Administração do SAC</h3>
                </div>
                <p className="text-muted-foreground">
                  Área responsável pela gestão e supervisão das operações do SAC, garantindo qualidade 
                  no atendimento e eficiência nos processos.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Responsabilidades</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Supervisão da equipe</li>
                      <li>• Controle de qualidade</li>
                      <li>• Métricas de atendimento</li>
                      <li>• Treinamento da equipe</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Indicadores</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Tempo médio de atendimento</li>
                      <li>• Satisfação do cliente</li>
                      <li>• Taxa de resolução</li>
                      <li>• Volume de chamadas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mesa-credito" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-600" size={24} />
                  <h3 className="text-lg font-semibold">Mesa de Crédito</h3>
                </div>
                <p className="text-muted-foreground">
                  Responsável pela análise e aprovação de crédito, avaliando o perfil dos clientes 
                  e definindo limites adequados para cada portador.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Análises Realizadas</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Análise de crédito</li>
                      <li>• Avaliação de risco</li>
                      <li>• Definição de limites</li>
                      <li>• Revisão de carteira</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Critérios</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Score de crédito</li>
                      <li>• Histórico financeiro</li>
                      <li>• Capacidade de pagamento</li>
                      <li>• Relacionamento bancário</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="juridico" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Scale className="text-red-600" size={24} />
                  <h3 className="text-lg font-semibold">Jurídico</h3>
                </div>
                <p className="text-muted-foreground">
                  Departamento responsável por questões legais, contratos, recuperação de crédito 
                  e conformidade regulatória do Cartão Festcard.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Atividades Principais</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Contratos e termos</li>
                      <li>• Recuperação de crédito</li>
                      <li>• Compliance regulatório</li>
                      <li>• Assessoria jurídica</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Conformidade</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Normas do Banco Central</li>
                      <li>• Código de Defesa do Consumidor</li>
                      <li>• LGPD</li>
                      <li>• Regulamentações setoriais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ra" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold">Departamento RA</h3>
                </div>
                <p className="text-muted-foreground">
                  Departamento de Relacionamento e Atendimento, focado em manter e fortalecer 
                  o relacionamento com os portadores do Cartão Festcard.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Relacionamento</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Gestão de relacionamento</li>
                      <li>• Programas de fidelidade</li>
                      <li>• Comunicação direcionada</li>
                      <li>• Pesquisas de satisfação</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Benefícios</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Programas de vantagens</li>
                      <li>• Descontos exclusivos</li>
                      <li>• Promoções especiais</li>
                      <li>• Parcerias comerciais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Materiais e Treinamentos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="text-blue-600" size={20} />
            Materiais e Treinamentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Acesse os materiais de apoio e documentação essencial para operação do Festcard.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Manual do Festcard", desc: "Guia completo de operação" },
                { title: "Políticas de Crédito", desc: "Diretrizes e critérios" },
                { title: "Procedimentos SAC", desc: "Protocolos de atendimento" },
                { title: "Compliance e Regulamentações", desc: "Normas e conformidade" },
                { title: "Guia de Produtos", desc: "Catálogo de soluções" },
                { title: "FAQ Festcard", desc: "Perguntas frequentes" }
              ].map((material, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Download className="text-blue-600 mt-1" size={16} />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{material.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{material.desc}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-2 text-xs"
                          onClick={() => handlePDFDownload('#', material.title)}
                        >
                          <Download size={12} className="mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Treinamentos por Categoria */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="text-red-600" size={20} />
            Treinamentos Festcard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="comercial">
            <TabsList className="grid w-full grid-cols-7">
              <TabsTrigger value="comercial">Comercial</TabsTrigger>
              <TabsTrigger value="cobranca">Cobrança</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="vendas">Vendas</TabsTrigger>
              <TabsTrigger value="frente-loja">Frente de Loja</TabsTrigger>
              <TabsTrigger value="ti">T.I</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce 3.0</TabsTrigger>
            </TabsList>

            <TabsContent value="comercial" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingCart className="text-blue-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos Comerciais (12 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 12 }, (_, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-3 flex items-center justify-center">
                          <PlayCircle className="text-white" size={32} />
                        </div>
                        <h4 className="font-medium text-sm mb-1">Comercial {i + 1}</h4>
                        <p className="text-xs text-muted-foreground">Estratégias comerciais Festcard</p>
                        <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                          <PlayCircle size={12} className="mr-1" />
                          Assistir
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cobranca" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="text-red-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos de Cobrança (6 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 6 }, (_, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-gradient-to-br from-red-500 to-orange-600 rounded-lg mb-3 flex items-center justify-center">
                          <PlayCircle className="text-white" size={32} />
                        </div>
                        <h4 className="font-medium text-sm mb-1">Cobrança {i + 1}</h4>
                        <p className="text-xs text-muted-foreground">Técnicas de cobrança eficaz</p>
                        <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                          <PlayCircle size={12} className="mr-1" />
                          Assistir
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cards" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <CardIcon className="text-purple-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos Cards (3 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 3 }, (_, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-3 flex items-center justify-center">
                          <PlayCircle className="text-white" size={32} />
                        </div>
                        <h4 className="font-medium text-sm mb-1">Cards {i + 1}</h4>
                        <p className="text-xs text-muted-foreground">Operação de cartões</p>
                        <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                          <PlayCircle size={12} className="mr-1" />
                          Assistir
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vendas" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="text-green-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos de Vendas (3 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 3 }, (_, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-3 flex items-center justify-center">
                          <PlayCircle className="text-white" size={32} />
                        </div>
                        <h4 className="font-medium text-sm mb-1">Vendas {i + 1}</h4>
                        <p className="text-xs text-muted-foreground">Técnicas de vendas</p>
                        <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                          <PlayCircle size={12} className="mr-1" />
                          Assistir
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="frente-loja" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Store className="text-orange-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos Frente de Loja (5 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 rounded-lg mb-3 flex items-center justify-center">
                          <PlayCircle className="text-white" size={32} />
                        </div>
                        <h4 className="font-medium text-sm mb-1">Frente de Loja {i + 1}</h4>
                        <p className="text-xs text-muted-foreground">Operação na frente de loja</p>
                        <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                          <PlayCircle size={12} className="mr-1" />
                          Assistir
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ti" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Computer className="text-indigo-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos T.I (1 vídeo)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="aspect-video bg-gradient-to-br from-indigo-500 to-blue-600 rounded-lg mb-3 flex items-center justify-center">
                        <PlayCircle className="text-white" size={32} />
                      </div>
                      <h4 className="font-medium text-sm mb-1">T.I Festcard</h4>
                      <p className="text-xs text-muted-foreground">Sistemas e tecnologia</p>
                      <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                        <PlayCircle size={12} className="mr-1" />
                        Assistir
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ecommerce" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="text-teal-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos E-commerce 3.0 (6 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Array.from({ length: 6 }, (_, i) => (
                    <Card key={i} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="aspect-video bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg mb-3 flex items-center justify-center">
                          <PlayCircle className="text-white" size={32} />
                        </div>
                        <h4 className="font-medium text-sm mb-1">E-commerce 3.0 {i + 1}</h4>
                        <p className="text-xs text-muted-foreground">Vendas digitais</p>
                        <Button variant="outline" size="sm" className="w-full mt-2 text-xs">
                          <PlayCircle size={12} className="mr-1" />
                          Assistir
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Mapeamento de Processos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="text-green-600" size={20} />
            Mapeamento de Processos Festcard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Processos mapeados do Festcard para otimização e padronização das operações.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Processo de Aprovação de Crédito",
                  desc: "Fluxo completo desde solicitação até aprovação",
                  icon: Star,
                  color: "text-yellow-600"
                },
                {
                  title: "Processo de Atendimento SAC",
                  desc: "Protocolo de atendimento ao cliente",
                  icon: HeadphonesIcon,
                  color: "text-blue-600"
                },
                {
                  title: "Processo de Cobrança",
                  desc: "Metodologia de recuperação de crédito",
                  icon: Phone,
                  color: "text-red-600"
                },
                {
                  title: "Processo de Relacionamento",
                  desc: "Gestão do relacionamento com clientes",
                  icon: UserCheck,
                  color: "text-green-600"
                }
              ].map((processo, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <processo.icon className={`${processo.color} mt-1`} size={20} />
                      <div className="flex-1">
                        <h4 className="font-medium">{processo.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{processo.desc}</p>
                        <Button variant="outline" size="sm" className="mt-3">
                          Ver Processo Detalhado
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Festcard;