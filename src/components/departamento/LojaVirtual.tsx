import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Store, 
  Users, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Package, 
  ShoppingCart, 
  UserCheck,
  Star,
  PlayCircle,
  Award,
  BarChart3,
  MessageSquare,
  CheckCircle,
  Clock,
  Trophy,
  ChevronDown,
  BookOpenCheck,
  UserCog,
  Settings,
  Eye,
  GraduationCap
} from 'lucide-react';

const LojaVirtual = () => {
  const [areaAtiva, setAreaAtiva] = useState('entrada');

  // Dados simulados de performance
  const performanceData = {
    metaVendas: 15000,
    vendaRealizada: 12500,
    satisfacaoCliente: 4.2,
    colaboradoresPresentes: 8,
    colaboradoresTotal: 10
  };

  const progressoVendas = (performanceData.vendaRealizada / performanceData.metaVendas) * 100;

  return (
    <div className="space-y-6">
      {/* Header da Loja Virtual */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <Store className="text-green-600" size={28} />
          Loja Virtual - Ambiente de Processos
        </h2>
        <p className="text-muted-foreground">
          Navegue pela representação digital da loja e explore os processos de cada área
        </p>
      </div>

      {/* Layout da Loja - Grid Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ENTRADA DA LOJA */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'entrada' ? 'ring-2 ring-green-500 bg-green-50' : 'hover:shadow-lg'}`}
              onClick={() => setAreaAtiva('entrada')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Store className="text-green-600" size={20} />
              🏪 Frente da Loja
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Meta vs Realizado</span>
                <Badge variant={progressoVendas >= 80 ? "default" : "secondary"}>
                  {progressoVendas.toFixed(1)}%
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${Math.min(progressoVendas, 100)}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-semibold">R$ {performanceData.vendaRealizada.toLocaleString()}</div>
                  <div className="text-muted-foreground">Realizado</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">{performanceData.colaboradoresPresentes}/{performanceData.colaboradoresTotal}</div>
                  <div className="text-muted-foreground">Colaboradores</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ÁREA DE VENDAS */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'vendas' ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'}`}
              onClick={() => setAreaAtiva('vendas')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShoppingCart className="text-blue-600" size={20} />
              👥 Área de Vendas (PVA)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-500" size={16} />
                <span className="text-sm">Satisfação: {performanceData.satisfacaoCliente}/5.0</span>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-center">
                  Abordagem & Atendimento
                </Badge>
                <Badge variant="outline" className="w-full justify-center">
                  Técnicas de Vendas
                </Badge>
                <Badge variant="outline" className="w-full justify-center">
                  Fechamento
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ÁREA GERENCIAL */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'gerencial' ? 'ring-2 ring-purple-500 bg-purple-50' : 'hover:shadow-lg'}`}
              onClick={() => setAreaAtiva('gerencial')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="text-purple-600" size={20} />
              Programa de Gestão de Lojas - PGL
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-semibold">85%</div>
                  <div className="text-muted-foreground">Metas</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">12</div>
                  <div className="text-muted-foreground">Tarefas</div>
                </div>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-center">
                  Gestão de Equipe
                </Badge>
                <Badge variant="outline" className="w-full justify-center">
                  Indicadores & KPIs
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ÁREA DE TREINAMENTO */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'treinamento' ? 'ring-2 ring-orange-500 bg-orange-50' : 'hover:shadow-lg'}`}
              onClick={() => setAreaAtiva('treinamento')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="text-orange-600" size={20} />
              📚 Área de Treinamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Progresso Geral</span>
                <Badge variant="secondary">73%</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="text-green-500" size={14} />
                  <span>PVA Módulo 1-3</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="text-yellow-500" size={14} />
                  <span>PGL Módulo 2</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ESTOQUE/RETAGUARDA */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'estoque' ? 'ring-2 ring-teal-500 bg-teal-50' : 'hover:shadow-lg'}`}
              onClick={() => setAreaAtiva('estoque')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Package className="text-teal-600" size={20} />
              📦 Estoque & Retaguarda
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-semibold">94%</div>
                  <div className="text-muted-foreground">Disponível</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold">6</div>
                  <div className="text-muted-foreground">Pendências</div>
                </div>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-center">
                  Controle de Inventário
                </Badge>
                <Badge variant="outline" className="w-full justify-center">
                  Visual Merchandising
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GAMIFICAÇÃO */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'gamificacao' ? 'ring-2 ring-yellow-500 bg-yellow-50' : 'hover:shadow-lg'}`}
              onClick={() => setAreaAtiva('gamificacao')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="text-yellow-600" size={20} />
              🏆 Desafios & Conquistas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">1,250</div>
                <div className="text-xs text-muted-foreground">Pontos Acumulados</div>
              </div>
              <div className="space-y-2">
                <Badge className="w-full justify-center bg-yellow-500">
                  🥇 Top Vendedor da Semana
                </Badge>
                <Badge variant="outline" className="w-full justify-center">
                  🎯 Meta de Satisfação
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conteúdo Detalhado da Área Selecionada */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <Tabs value={areaAtiva} onValueChange={setAreaAtiva}>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="entrada">Entrada</TabsTrigger>
              <TabsTrigger value="vendas">Vendas</TabsTrigger>
              <TabsTrigger value="gerencial">Gerencial</TabsTrigger>
              <TabsTrigger value="treinamento">Treinamento</TabsTrigger>
              <TabsTrigger value="estoque">Estoque</TabsTrigger>
              <TabsTrigger value="gamificacao">Conquistas</TabsTrigger>
            </TabsList>

            <TabsContent value="entrada" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Store className="text-green-600" />
                  Dashboard de Entrada - KPIs em Tempo Real
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <Target className="text-blue-500" size={20} />
                        <div>
                          <div className="text-sm text-muted-foreground">Meta do Dia</div>
                          <div className="text-2xl font-bold">R$ {performanceData.metaVendas.toLocaleString()}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="text-green-500" size={20} />
                        <div>
                          <div className="text-sm text-muted-foreground">Realizado</div>
                          <div className="text-2xl font-bold">R$ {performanceData.vendaRealizada.toLocaleString()}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <Users className="text-purple-500" size={20} />
                        <div>
                          <div className="text-sm text-muted-foreground">Equipe Presente</div>
                          <div className="text-2xl font-bold">{performanceData.colaboradoresPresentes}/{performanceData.colaboradoresTotal}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vendas" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <ShoppingCart className="text-blue-600" />
                  PVA - Programa de Vendas e Atendimento
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Jornada do Cliente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                          <UserCheck size={16} className="text-green-600" />
                          <span className="text-sm">1. Recepção e Saudação</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-blue-50 rounded">
                          <MessageSquare size={16} className="text-blue-600" />
                          <span className="text-sm">2. Identificação de Necessidades</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-purple-50 rounded">
                          <Star size={16} className="text-purple-600" />
                          <span className="text-sm">3. Apresentação de Produtos</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-orange-50 rounded">
                          <CheckCircle size={16} className="text-orange-600" />
                          <span className="text-sm">4. Fechamento da Venda</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Técnicas de Vendas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <PlayCircle size={16} className="mr-2" />
                          Curso: Abordagem Efetiva
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <PlayCircle size={16} className="mr-2" />
                          Curso: Objeções e Respostas
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <PlayCircle size={16} className="mr-2" />
                          Curso: Cross-selling
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gerencial" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BarChart3 className="text-purple-600" />
                  Programa de Gestão de Lojas - PGL 
                </h3>
                
                {/* Bloco de Introdução ao PGL */}
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpenCheck className="text-purple-600" size={20} />
                      Introdução ao PGL
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="prose prose-sm max-w-none">
                      <p className="text-sm leading-relaxed">
                        <strong>Você faz parte do Programa de Gestão de Vendas</strong>, desenvolvido com o objetivo de auxiliá-lo no aprimoramento de suas habilidades como profissional de varejo.
                      </p>
                      
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
                        <p className="text-sm font-semibold text-amber-800 mb-2">⚠️ Atenção é fundamental!</p>
                        <p className="text-sm text-amber-700">
                          Esteja sempre atento a todas as informações contidas neste manual, ele será seu companheiro na busca pela excelência em gestão de lojas.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                        <p className="text-sm font-semibold text-blue-800 mb-2">💡 De nada adianta a teoria sem prática.</p>
                        <p className="text-sm text-blue-700">
                          Por isso, realize todas as atividades sugeridas pelo PGL. Elas irão ajudá-lo a extrair o melhor de todo o processo de treinamento.
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed">
                        O PGL é um programa de treinamento que abrange conceitos e técnicas exclusivas para o gestor de lojas. Trata-se de um material desenvolvido por profissionais que atuaram ativamente no varejo e que dominam as diversas dificuldades vivenciadas no dia a dia de qualquer salão de vendas.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Os capítulos a seguir têm, basicamente, o objetivo de contextualizar cada uma das ferramentas apresentadas. É preciso que você, gestor de loja, entenda o porquê de cada ferramenta, bem como suas particularidades. Ao compreender o que está por trás de cada uma, você terá maior facilidade para adaptar as técnicas expostas à sua realidade.
                      </p>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                        <p className="text-sm font-semibold text-green-800 mb-2">🎯 O seu objetivo é aplicar todas as ferramentas, não apenas algumas delas.</p>
                        <p className="text-sm text-green-700">
                          Lembre-se: você tem um papel importante como multiplicador interno, visto que ninguém melhor do que você conhece as rotinas de loja.
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed">
                        A partir de exemplos práticos, sua participação será fundamental para adaptar os conceitos descritos ao seu dia a dia. Nosso maior objetivo é aumentar cada vez mais o conhecimento das equipes e, consequentemente, atuar como facilitadores para o crescimento pessoal e profissional de todos os envolvidos.
                      </p>

                      <p className="text-sm leading-relaxed font-semibold">
                        Prepare-se para ter acesso a verdadeiros "tesouros", que darão o upgrade que sua loja precisa para despontar nas vendas.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-4">
                          <h4 className="font-semibold text-sm text-indigo-800 mb-2">📋 FOP</h4>
                          <p className="text-xs text-indigo-700">"Formulário de Observação de Procedimentos" - ferramenta que vai incentivar sua equipe a ser mais disciplinada.</p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                          <h4 className="font-semibold text-sm text-purple-800 mb-2">📊 FODQ</h4>
                          <p className="text-xs text-purple-700">"Formulário de Orientação de Desempenho Quinzenal" - indica aos vendedores "o que fazer" e "como fazer".</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
                        <p className="text-sm font-semibold text-center mb-3">🚀 Então, mãos à obra!</p>
                        <p className="text-sm text-center text-gray-700">
                          O Programa de Gestão de Loja (PGL) é a melhor ferramenta para coordenar as atividades de um gestor em seu cotidiano na loja.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-300 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 mb-3">📚 Este programa está dividido em 9 capítulos:</h4>
                        <div className="grid grid-cols-1 gap-2 text-xs">
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">1</Badge>
                            <div>
                              <span className="font-semibold">Introdução ao PGL:</span> Requisitos e temas do manual
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">2</Badge>
                            <div>
                              <span className="font-semibold">Você: Gestor:</span> Características do gestor de loja
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">3</Badge>
                            <div>
                              <span className="font-semibold">Gerência Operacional:</span> Práticas de gestão operacional
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">4</Badge>
                            <div>
                              <span className="font-semibold">Seu Time:</span> Aspectos organizacionais e disciplinares
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">5</Badge>
                            <div>
                              <span className="font-semibold">Acompanhamento:</span> Aspectos relacionados ao desempenho
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">6</Badge>
                            <div>
                              <span className="font-semibold">Evolução:</span> Melhores indicadores através da análise
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">7</Badge>
                            <div>
                              <span className="font-semibold">Recrutamento e Seleção:</span> Buscar um time campeão
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">8</Badge>
                            <div>
                              <span className="font-semibold">Treinamento:</span> Como ser um treinador efetivo
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">9</Badge>
                            <div>
                              <span className="font-semibold">Ferramentas:</span> Todos os aspectos de produtividade
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Capítulos do PGL */}
                <div className="space-y-4">
                  
                  {/* Você: Gestor */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow border-blue-200 bg-blue-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <UserCog className="text-blue-600" size={20} />
                              Você: Gestor
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-blue-700">
                            Principais características do gestor de loja, preparando-o para lidar com sua equipe
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mt-2 border-blue-200">
                        <CardContent className="pt-4">
                          <div className="space-y-6">
                            {/* Vídeos do PGL - Gestor */}
                            <div className="space-y-4">
                              <h4 className="font-semibold text-sm border-b pb-2">📚 Módulos de Treinamento</h4>
                              
                              <div className="grid grid-cols-1 gap-4">
                                {/* Gestor-1 */}
                                <div className="border rounded-lg p-4 bg-slate-50">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Badge variant="outline" className="text-xs px-2 py-1">1</Badge>
                                    <h5 className="font-medium">Gestor - Módulo 1</h5>
                                  </div>
                                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                                    <iframe
                                      width="100%"
                                      height="100%"
                                      src="https://www.youtube.com/embed/HksINnLtfPY?rel=0&modestbranding=1&showinfo=0&controls=1&disablekb=1"
                                      title="Gestor - Módulo 1"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/* Gestor-2 */}
                                <div className="border rounded-lg p-4 bg-slate-50">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Badge variant="outline" className="text-xs px-2 py-1">2</Badge>
                                    <h5 className="font-medium">Gestor - Módulo 2</h5>
                                  </div>
                                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                                    <iframe
                                      width="100%"
                                      height="100%"
                                      src="https://www.youtube.com/embed/ghHGDFEeFIA?rel=0&modestbranding=1&showinfo=0&controls=1&disablekb=1"
                                      title="Gestor - Módulo 2"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/* Gestor-3 */}
                                <div className="border rounded-lg p-4 bg-slate-50">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Badge variant="outline" className="text-xs px-2 py-1">3</Badge>
                                    <h5 className="font-medium">Gestor - Módulo 3</h5>
                                  </div>
                                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                                    <iframe
                                      width="100%"
                                      height="100%"
                                      src="https://www.youtube.com/embed/sekQM9ArF4A?rel=0&modestbranding=1&showinfo=0&controls=1&disablekb=1"
                                      title="Gestor - Módulo 3"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/* Gestor-4 */}
                                <div className="border rounded-lg p-4 bg-slate-50">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Badge variant="outline" className="text-xs px-2 py-1">4</Badge>
                                    <h5 className="font-medium">Gestor - Módulo 4</h5>
                                  </div>
                                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                                    <iframe
                                      width="100%"
                                      height="100%"
                                      src="https://www.youtube.com/embed/Rf7T7VUqCOs?rel=0&modestbranding=1&showinfo=0&controls=1&disablekb=1"
                                      title="Gestor - Módulo 4"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    ></iframe>
                                  </div>
                                </div>

                                {/* Gestor-5 */}
                                <div className="border rounded-lg p-4 bg-slate-50">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Badge variant="outline" className="text-xs px-2 py-1">5</Badge>
                                    <h5 className="font-medium">Gestor - Módulo 5</h5>
                                  </div>
                                  <div className="aspect-video rounded-lg overflow-hidden bg-black">
                                    <iframe
                                      width="100%"
                                      height="100%"
                                      src="https://www.youtube.com/embed/wXTzIi1lEpg?rel=0&modestbranding=1&showinfo=0&controls=1&disablekb=1"
                                      title="Gestor - Módulo 5"
                                      frameBorder="0"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                      allowFullScreen
                                    ></iframe>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Competências e Perfil */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-3">
                                <h4 className="font-semibold text-sm">Perfil do Gestor Ideal</h4>
                                <div className="space-y-2">
                                  <Badge variant="outline" className="w-full justify-start">
                                    👥 Liderança Inspiradora
                                  </Badge>
                                  <Badge variant="outline" className="w-full justify-start">
                                    🎯 Foco em Resultados
                                  </Badge>
                                  <Badge variant="outline" className="w-full justify-start">
                                    🗣️ Comunicação Efetiva
                                  </Badge>
                                </div>
                              </div>
                              <div className="space-y-3">
                                <h4 className="font-semibold text-sm">Competências Essenciais</h4>
                                <div className="space-y-2">
                                  <Badge variant="outline" className="w-full justify-start">
                                    📊 Gestão de Equipe
                                  </Badge>
                                  <Badge variant="outline" className="w-full justify-start">
                                    ⚡ Tomada de Decisão
                                  </Badge>
                                  <Badge variant="outline" className="w-full justify-start">
                                    🤝 Resolução de Conflitos
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Gerência Operacional */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow border-green-200 bg-green-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Settings className="text-green-600" size={20} />
                              Gerência Operacional
                            </div>
                            <ChevronDown className="h-4 w-4 text-green-600" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-green-700">
                            Práticas de gestão operacional buscando eficiência e libertação das rotinas que desfocam os gestores do salão de venda
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mt-2 border-green-200">
                        <CardContent className="pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm">Eficiência Operacional</h4>
                              <div className="space-y-2">
                                <Badge variant="outline" className="w-full justify-start">
                                  ⚡ Otimização de Processos
                                </Badge>
                                <Badge variant="outline" className="w-full justify-start">
                                  📊 Controles de Qualidade
                                </Badge>
                                <Badge variant="outline" className="w-full justify-start">
                                  🔄 Melhoria Contínua
                                </Badge>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm">Foco no Salão de Vendas</h4>
                              <div className="space-y-2">
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  Gestão de Tempo
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  Delegação Efetiva
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  Priorização de Atividades
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Seu Time */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow border-orange-200 bg-orange-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Users className="text-orange-600" size={20} />
                              Seu Time
                            </div>
                            <ChevronDown className="h-4 w-4 text-orange-600" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-orange-700">
                            Conteúdo voltado para a forma que o gestor deverá conduzir aspectos organizacionais e disciplinares na loja
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mt-2 border-orange-200">
                        <CardContent className="pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm">Organização da Equipe</h4>
                              <div className="space-y-2">
                                <Badge variant="outline" className="w-full justify-start">
                                  📅 Escalas de Trabalho
                                </Badge>
                                <Badge variant="outline" className="w-full justify-start">
                                  📋 Definição de Papéis
                                </Badge>
                                <Badge variant="outline" className="w-full justify-start">
                                  🎯 Metas Individuais
                                </Badge>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm">Aspectos Disciplinares</h4>
                              <div className="space-y-2">
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  Políticas e Procedimentos
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  Feedback Construtivo
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  Planos de Ação
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Acompanhamento */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow border-teal-200 bg-teal-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Eye className="text-teal-600" size={20} />
                              Acompanhamento
                            </div>
                            <ChevronDown className="h-4 w-4 text-teal-600" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-teal-700">
                            Capítulo dedicado para direcionar o gestor sobre aspectos relacionados ao desempenho
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mt-2 border-teal-200">
                        <CardContent className="pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm">Monitoramento de Performance</h4>
                              <div className="space-y-2">
                                <Badge variant="outline" className="w-full justify-start">
                                  📈 Indicadores de Vendas
                                </Badge>
                                <Badge variant="outline" className="w-full justify-start">
                                  ⭐ Satisfação do Cliente
                                </Badge>
                                <Badge variant="outline" className="w-full justify-start">
                                  🎯 Cumprimento de Metas
                                </Badge>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm">Ferramentas de Acompanhamento</h4>
                              <div className="space-y-2">
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  FOP - Observação de Procedimentos
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  FODQ - Orientação Quinzenal
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  Relatórios de Performance
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Treinamento */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow border-indigo-200 bg-indigo-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="text-indigo-600" size={20} />
                              Treinamento
                            </div>
                            <ChevronDown className="h-4 w-4 text-indigo-600" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-indigo-700">
                            Como ser um treinador e não permitir que os métodos da empresa sejam perdidos
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mt-2 border-indigo-200">
                        <CardContent className="pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm">Papel do Treinador</h4>
                              <div className="space-y-2">
                                <Badge variant="outline" className="w-full justify-start">
                                  🎓 Metodologias de Ensino
                                </Badge>
                                <Badge variant="outline" className="w-full justify-start">
                                  📚 Preservação de Conhecimento
                                </Badge>
                                <Badge variant="outline" className="w-full justify-start">
                                  🔄 Desenvolvimento Contínuo
                                </Badge>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm">Métodos de Treinamento</h4>
                              <div className="space-y-2">
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  Onboarding de Novos Funcionários
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  Capacitação Técnica
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <PlayCircle size={14} className="mr-2" />
                                  Avaliação de Conhecimento
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                </div>
              </div>
            </TabsContent>

            <TabsContent value="treinamento" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BookOpen className="text-orange-600" />
                  Centro de Treinamento - PVA & PGL
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Módulos PVA</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 border rounded">
                          <span className="text-sm">Fundamentos de Vendas</span>
                          <Badge className="bg-green-500">Concluído</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded">
                          <span className="text-sm">Atendimento ao Cliente</span>
                          <Badge className="bg-green-500">Concluído</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded">
                          <span className="text-sm">Técnicas Avançadas</span>
                          <Badge variant="secondary">Em Progresso</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Módulos PGL</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-2 border rounded">
                          <span className="text-sm">Liderança de Equipe</span>
                          <Badge className="bg-green-500">Concluído</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded">
                          <span className="text-sm">Gestão de Performance</span>
                          <Badge variant="secondary">Em Progresso</Badge>
                        </div>
                        <div className="flex items-center justify-between p-2 border rounded">
                          <span className="text-sm">Indicadores e KPIs</span>
                          <Badge variant="outline">Não Iniciado</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="estoque" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Package className="text-teal-600" />
                  Gestão de Estoque e Retaguarda
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Controle de Inventário</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-teal-600">94%</div>
                          <div className="text-sm text-muted-foreground">Disponibilidade</div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span>Produtos em Estoque</span>
                            <span>1,247</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span>Produtos em Falta</span>
                            <span className="text-red-500">23</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Visual Merchandising</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="p-2 bg-green-50 rounded text-sm">
                          ✅ Vitrine Atualizada
                        </div>
                        <div className="p-2 bg-green-50 rounded text-sm">
                          ✅ Preços Conferidos
                        </div>
                        <div className="p-2 bg-yellow-50 rounded text-sm">
                          ⏳ Exposição Sazonal
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Processos Admin</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full">
                          📋 Relatório Diário
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          📊 Análise de Vendas
                        </Button>
                        <Button variant="outline" size="sm" className="w-full">
                          📈 Metas e Resultados
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gamificacao" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Trophy className="text-yellow-600" />
                  Sistema de Gamificação e Conquistas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Conquistas Recentes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                          <Trophy className="text-yellow-600" size={24} />
                          <div>
                            <div className="font-semibold">Top Vendedor da Semana</div>
                            <div className="text-sm text-muted-foreground">+500 pontos</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <Star className="text-blue-600" size={24} />
                          <div>
                            <div className="font-semibold">Meta de Satisfação</div>
                            <div className="text-sm text-muted-foreground">+200 pontos</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <Award className="text-green-600" size={24} />
                          <div>
                            <div className="font-semibold">Curso PVA Completo</div>
                            <div className="text-sm text-muted-foreground">+300 pontos</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ranking da Loja</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🥇</span>
                            <span className="font-semibold">Maria Silva</span>
                          </div>
                          <span className="text-sm">2,150 pts</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🥈</span>
                            <span className="font-semibold">João Santos</span>
                          </div>
                          <span className="text-sm">1,890 pts</span>
                        </div>
                        <div className="flex items-center justify-between p-2 bg-orange-50 rounded">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">🥉</span>
                            <span className="font-semibold">Ana Costa</span>
                          </div>
                          <span className="text-sm">1,650 pts</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LojaVirtual;