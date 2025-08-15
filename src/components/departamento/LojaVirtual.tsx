import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import VideoPlayer from '@/components/VideoPlayer';
import { Store, Users, Target, TrendingUp, BookOpen, Package, ShoppingCart, UserCheck, Star, PlayCircle, Award, BarChart3, MessageSquare, CheckCircle, Clock, Trophy, ChevronDown, BookOpenCheck, UserCog, Settings, Eye, GraduationCap } from 'lucide-react';
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
  const progressoVendas = performanceData.vendaRealizada / performanceData.metaVendas * 100;
  return <div className="space-y-6">
      {/* Header da Loja Virtual */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <Store className="text-green-600" size={28} />
          Ambiente de Processos - Lojas
        </h2>
        <p className="text-muted-foreground">
          Navegue pela representação digital da loja e explore os processos de cada área
        </p>
      </div>

      {/* Layout da Loja - Grid Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ENTRADA DA LOJA */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'entrada' ? 'ring-2 ring-green-500 bg-green-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('entrada')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Store className="text-green-600" size={20} />
              🏪 Frente da Loja
            </CardTitle>
          </CardHeader>
          
        </Card>

        {/* ÁREA DE VENDAS */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'vendas' ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('vendas')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShoppingCart className="text-blue-600" size={20} />
              👥 Área de Vendas (PVA)
            </CardTitle>
          </CardHeader>
          
        </Card>

        {/* ÁREA GERENCIAL */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'gerencial' ? 'ring-2 ring-purple-500 bg-purple-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('gerencial')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="text-purple-600" size={20} />
              Programa de Gestão de Lojas - PGL
            </CardTitle>
          </CardHeader>
          
        </Card>

        {/* ÁREA DE TREINAMENTO */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'treinamento' ? 'ring-2 ring-orange-500 bg-orange-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('treinamento')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="text-orange-600" size={20} />
              📚 Área de Treinamento
            </CardTitle>
          </CardHeader>
          
        </Card>

        {/* ESTOQUE/RETAGUARDA */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'estoque' ? 'ring-2 ring-teal-500 bg-teal-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('estoque')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Package className="text-teal-600" size={20} />
              📦 Estoque & Retaguarda
            </CardTitle>
          </CardHeader>
          
        </Card>

        {/* GAMIFICAÇÃO */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'gamificacao' ? 'ring-2 ring-yellow-500 bg-yellow-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('gamificacao')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="text-yellow-600" size={20} />
              🏆 Desafios & Conquistas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-center">
                
                
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
                      
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vendas" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <ShoppingCart className="text-blue-600" />
                  PVA - Programa de Vendas e Atendimento
                </h3>
                
                {/* Roteiro de Aplicação do Treinamento */}
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpenCheck className="text-blue-600" size={20} />
                      Roteiro de Aplicação do Treinamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="prose prose-sm max-w-none">
                      <p className="text-sm leading-relaxed">
                        Nesse roteiro vamos trazer algumas importantes orientações e organização sobre como aplicar o treinamento, para que ele seja aproveitado da melhor maneira possível.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Esse onboarding foi planejado para ser aplicado ao longo de 5 dias, e sugerimos que as agendas sejam de no máximo 3 horas por dia, garantindo o foco sem sobrecarregar.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Reserve sempre um local adequado, silencioso e reservado, onde o nosso novo vendedor possa ter foco e acima de tudo assimile todo o conteúdo.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Esteja com o material de apoio, apostila, em mãos e garante que o novo colaborador também esteja com o material.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Alterne a teoria com demonstrações e exemplos práticos, mostrando produto e simulando os diálogos, além de trazer exemplos do dia a dia da loja.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Estimule a participação do novo vendedor.
                      </p>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                        <p className="text-sm font-semibold text-blue-800 mb-2">🎯 Objetivo</p>
                        <p className="text-sm text-blue-700">
                          O objetivo aqui é desenvolver o potencial de vendas do novo contratado e prepará-lo para que atinja os melhores resultados ao iniciar as atividades em nossa loja, oferecendo uma experiência incrível aos nossos clientes e aumentando as chances de sucesso em sua trajetória conosco.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs px-2 py-1">Dia 1</Badge>
                          <div>
                            <span className="font-semibold">Boas-Vindas ao novo Colaborador e Introdução ao PVA e Chavão Oscar</span><br />
                            <span className="text-muted-foreground">Passo 1 – Organize o seu dia + Avaliação do Conhecimento</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs px-2 py-1">Dia 2</Badge>
                          <div>
                            <span className="font-semibold">Passo 2 – Seja Bem-Vindo à Oscar + Avaliação</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs px-2 py-1">Dia 3</Badge>
                          <div>
                            <span className="font-semibold">Passo 3 – Construa o Perfil do Cliente + Avaliação</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs px-2 py-1">Dia 4</Badge>
                          <div>
                            <span className="font-semibold">Passo 4 – Apresente, Adicione e Contorne objeções + Avaliação</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs px-2 py-1">Dia 5</Badge>
                          <div>
                            <span className="font-semibold">Passo 5 – Retome com o Fechamento e Pós-venda + Avaliação</span><br />
                            <span className="text-muted-foreground">Fechamento do Programa</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Blocos de Vídeos PVA */}
                <div className="space-y-4">
                  
                  {/* PVA INTRODUÇÃO */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA INTRODUÇÃO
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA Introducao.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* PVA - LETRA O */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA - LETRA O (ORGANIZE SEU DIA)
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA O.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* PVA - LETRA S */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA - LETRA S (SEJA BEM VINDO A OSCAR)
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA S.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* PVA - LETRA C */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA - LETRA C (CONSTRUA O PERFIL DO CLIENTE)
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA C.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* PVA - LETRA A */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA - LETRA A (APRESENTE E ADICIONE)
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA A.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* PVA - LETRA R */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA - LETRA R (RETORNE O FECHAMENTO E PÓS VENDA)
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA R.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>
                  
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
                              Gestor - Curso
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
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Primeira linha */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={16} />
                                Você Gestor: Pré-requisitos do Líder 
                              </h4>
                              <VideoPlayer fileName="VOCE-GESTOR-1.mp4" />
                            </div>

                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={16} />
                                Você Gestor: 10 Competências do Gestor
                              </h4>
                              <VideoPlayer fileName="VOCE-GESTOR-2.mp4" />
                            </div>

                            {/* Segunda linha */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={16} />
                                Você Gestor: Competência na prática 
                              </h4>
                              <VideoPlayer fileName="VOCE-GESTOR-3.mp4" />
                            </div>

                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={16} />
                                Você Gestor: Liderança 
                              </h4>
                              <VideoPlayer fileName="VOCE-GESTOR-4.mp4" />
                            </div>

                            {/* Terceira linha - vídeo único */}
                            <div className="space-y-3 md:col-span-1">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={16} />
                                Você Gestor: Administração do tempo
                              </h4>
                              <VideoPlayer fileName="VOCE-GESTOR-5.mp4" />
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
                          {/* Videos da Gerência Operacional */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <VideoPlayer fileName="Gerencia-Operacional-1.mp4" />
                            <VideoPlayer fileName="Gerencia-Operacional-2.mp4" />
                            <VideoPlayer fileName="Gerencia-Operacional-3.mp4" />
                            <VideoPlayer fileName="Gerencia-Operacional-4.mp4" />
                            <VideoPlayer fileName="Gerencia-Operacional-5.mp4" />
                            <VideoPlayer fileName="Gerencia-Operacional-6.mp4" />
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
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: Estrutura de Loja</h4>
                                 <VideoPlayer fileName="Seu-Time-1.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: Funções De Seu Time </h4>
                                 <VideoPlayer fileName="Seu-Time-3.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: Analisando Seu Time </h4>
                                 <VideoPlayer fileName="Seu-Time-5.mp4" />
                               </div>
                             </div>
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: F.O.P's</h4>
                                 <VideoPlayer fileName="Seu-Time-2.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: Sem Falhas</h4>
                                 <VideoPlayer fileName="Seu-Time-4.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: Cumprir Normas</h4>
                                 <VideoPlayer fileName="Seu-Time-6.mp4" />
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
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Acompanhamento - Módulo 1</h4>
                                 <VideoPlayer fileName="Acompanhamento-1.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Acompanhamento - Módulo 3</h4>
                                 <VideoPlayer fileName="Acompanhamento-3.mp4" />
                               </div>
                             </div>
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Acompanhamento - Módulo 2</h4>
                                 <VideoPlayer fileName="Acompanhamento-2.mp4" />
                               </div>
                             </div>
                           </div>
                         </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                   {/* Evolução */}
                   <Collapsible>
                     <CollapsibleTrigger asChild>
                       <Card className="cursor-pointer hover:shadow-md transition-shadow border-purple-200 bg-purple-50">
                         <CardHeader className="pb-3">
                           <CardTitle className="text-lg flex items-center justify-between">
                             <div className="flex items-center gap-2">
                               <TrendingUp className="text-purple-600" size={20} />
                               Evolução
                             </div>
                             <ChevronDown className="h-4 w-4 text-purple-600" />
                           </CardTitle>
                         </CardHeader>
                         <CardContent>
                           <p className="text-sm text-purple-700">
                             Ferramentas para acompanhar evolução e crescimento da equipe e resultados
                           </p>
                         </CardContent>
                       </Card>
                     </CollapsibleTrigger>
                     <CollapsibleContent>
                       <Card className="mt-2 border-purple-200">
                         <CardContent className="pt-4">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Evolução - Módulo 1</h4>
                                 <VideoPlayer fileName="Evolucao-1.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Evolução - Módulo 3</h4>
                                 <VideoPlayer fileName="Evolucao-3.mp4" />
                               </div>
                             </div>
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Evolução - Módulo 2</h4>
                                 <VideoPlayer fileName="Evolucao-2.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Evolução - Módulo 4</h4>
                                 <VideoPlayer fileName="Evolucao-4.mp4" />
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
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Treinamento - Módulo 1</h4>
                                 <VideoPlayer fileName="Treinamento-1.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Treinamento - Módulo 3</h4>
                                 <VideoPlayer fileName="Treinamento-3.mp4" />
                               </div>
                             </div>
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Treinamento - Módulo 2</h4>
                                 <VideoPlayer fileName="Treinamento-2.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Treinamento - Módulo 4</h4>
                                 <VideoPlayer fileName="Treinamento-4.mp4" />
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
                    
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Módulos PGL</CardTitle>
                    </CardHeader>
                    
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
                      <CardTitle className="text-lg">Inventário</CardTitle>
                    </CardHeader>
                    
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Visual Merchandising</CardTitle>
                    </CardHeader>
                    
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Processos Admin</CardTitle>
                    </CardHeader>
                    
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
                    
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ranking da Loja</CardTitle>
                    </CardHeader>
                    
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>;
};
export default LojaVirtual;