import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import VideoPlayer from '@/components/VideoPlayer';
import { Store, Users, Target, TrendingUp, BookOpen, Package, ShoppingCart, UserCheck, Star, PlayCircle, Award, BarChart3, MessageSquare, CheckCircle, Clock, Trophy, ChevronDown, BookOpenCheck, UserCog, Settings, Eye, GraduationCap, CheckSquare, Download, CreditCard, Building } from 'lucide-react';

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

  return (
    <div className="space-y-6">
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
              Frente da Loja
            </CardTitle>
          </CardHeader>
        </Card>

        {/* ÁREA DE VENDAS */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'vendas' ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('vendas')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShoppingCart className="text-blue-600" size={20} />
              Área de Vendas (PVA)
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
              Check-Lists (Lojas)
            </CardTitle>
          </CardHeader>
        </Card>

        {/* ESTOQUE/RETAGUARDA */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'estoque' ? 'ring-2 ring-teal-500 bg-teal-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('estoque')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Package className="text-teal-600" size={20} />
              Estoque & Retaguarda
            </CardTitle>
          </CardHeader>
        </Card>

        {/* GAMIFICAÇÃO */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'gamificacao' ? 'ring-2 ring-yellow-500 bg-yellow-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('gamificacao')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="text-yellow-600" size={20} />
              Metas
            </CardTitle>
          </CardHeader>
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
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Meta de Vendas</p>
                          <p className="text-2xl font-bold">R$ {performanceData.metaVendas.toLocaleString()}</p>
                        </div>
                        <Target className="h-8 w-8 text-green-600" />
                      </div>
                      <div className="mt-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-600 h-2 rounded-full" 
                            style={{ width: `${progressoVendas}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {progressoVendas.toFixed(1)}% da meta atingida
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Satisfação do Cliente</p>
                          <p className="text-2xl font-bold flex items-center gap-1">
                            {performanceData.satisfacaoCliente}
                            <Star className="h-5 w-5 text-yellow-500 fill-current" />
                          </p>
                        </div>
                        <UserCheck className="h-8 w-8 text-blue-600" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Baseado em 127 avaliações
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Equipe Presente</p>
                          <p className="text-2xl font-bold">
                            {performanceData.colaboradoresPresentes}/{performanceData.colaboradoresTotal}
                          </p>
                        </div>
                        <Users className="h-8 w-8 text-purple-600" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        {((performanceData.colaboradoresPresentes / performanceData.colaboradoresTotal) * 100).toFixed(0)}% da equipe
                      </p>
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
                          <div className="space-y-4">
                            <div>
                              <VideoPlayer fileName="PVA Introducao.mp4" />
                            </div>
                            <div className="container mx-auto px-4">
                              <Collapsible>
                                <CollapsibleTrigger asChild>
                                  <Button variant="outline" className="flex items-center gap-2">
                                    <Eye size={16} />
                                    Ver Descrição
                                  </Button>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="mt-4">
                                  <Card className="border">
                                    <CardContent className="p-6">
                                      <div className="space-y-6">
                                        {/* Quote */}
                                        <div className="text-center mb-6">
                                          <blockquote className="text-lg italic font-semibold text-gray-700 mb-2">
                                            "E sem saber que era impossível, ele foi lá e fez"
                                          </blockquote>
                                          <cite className="text-sm text-gray-500">(Jean Cocteau)</cite>
                                        </div>

                                        {/* Company History */}
                                        <div className="prose prose-sm max-w-none space-y-4">
                                          <p className="text-sm leading-relaxed">
                                            Em 1982, quando a primeira loja Oscar Calçados foi inaugurada, teve início uma história de sucesso. Hoje, todos carregam com orgulho o nome da empresa que cresce a cada dia no mercado de varejo, sempre obtendo novas conquistas.
                                          </p>
                                          
                                          <p className="text-sm leading-relaxed">
                                            E se o negócio da Oscar Calçados é vender, sua força motriz é o profissional de vendas. Por essa razão, o papel do vendedor é de grande responsabilidade. Quando esse profissional não está comprometido com o aumento de suas vendas, ele contribui para o enfraquecimento dos resultados e o fracasso da empresa, prejudicando a todos.
                                          </p>
                                          
                                          <p className="text-sm leading-relaxed">
                                            Como toda empresa bem-sucedida, o Grupo Oscar Calçados busca o aprimoramento contínuo para superar seus próprios resultados, dando condições para que seus vendedores possam se destacar e atingir uma carreira de sucesso em vendas. Assim, o vendedor torna-se capaz de obter novos patamares, o que, além de garantir uma vida tranquila para si e sua família, impulsiona novas conquistas a sua empresa.
                                          </p>
                                          
                                          <p className="text-sm leading-relaxed">
                                            Mas, para crescer, é preciso estar disposto a ampliar sua zona de conforto, isto é, as ações que já se tem por hábito fazer. Profissionais que se mantêm vendendo do mesmo modo por anos, sem experimentar novas abordagens ou formas de satisfazer o cliente, podem prosperar apenas uma parte do que poderiam caso arriscam mais.
                                          </p>
                                          
                                          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 my-6">
                                            <p className="text-sm font-semibold text-blue-800">
                                              Nossa missão é proporcionar moda aos clientes e a satisfação de estar bem a cada passo.
                                            </p>
                                          </div>
                                          
                                          <p className="text-sm leading-relaxed">
                                            Pensando nesse propósito a Oscar disponibilizou este guia completo sobre como atender os clientes em sua loja e cumprir essa tarefa com perfeição. Esse manual foi desenvolvido para que você, vendedor, possa se preparar totalmente para aumentar seu desempenho profissional, alcançar os melhores resultados em sua loja e dar continuidade ao sucesso dessa história.
                                          </p>
                                        </div>

                                        {/* Welcome Box */}
                                        <div className="bg-blue-800 text-white p-6 rounded-lg text-center my-6">
                                          <p className="font-semibold">Seja bem-vindo ao Programa de Vendas e Atendimento - PVA.</p>
                                        </div>

                                        {/* Learning Process */}
                                        <div className="space-y-4">
                                          <h3 className="text-lg font-bold text-red-600">Como é o processo de Aprendizado?</h3>
                                          
                                          <p className="text-sm leading-relaxed">
                                            Competência é resultado de um conjunto de fatores. Uma pessoa competente conhece sua área de atuação, aplica o que aprendeu em seu dia a dia e quer sempre fazer o seu melhor. Assim é, também, no processo de venda.
                                          </p>
                                          
                                          <p className="text-sm leading-relaxed">
                                            Para ser um bom profissional de vendas, é preciso ser competente no que faz. O bom vendedor conhece o produto que vende, é hábil ao lidar com o cliente e tem predisposição para agir. Competência é isso, é a união do conhecimento com as habilidades e a atitude.
                                          </p>

                                          {/* CHA Formula Box */}
                                          <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 my-6 text-center">
                                            <p className="font-bold text-blue-800">Competência = C + H + A = CHA</p>
                                          </div>

                                          {/* Knowledge Section */}
                                          <div className="space-y-2">
                                            <h4 className="text-base font-bold text-blue-600">Conhecimento = Aprendizado</h4>
                                            <p className="text-sm leading-relaxed">
                                              Conhecimento vai além da informação pura e simples. É a compreensão de todas as informações adquiridas na convivência com as pessoas, na escola, na empresa em que se trabalha, nos livros, nos treinamentos e nas experiências do dia a dia.
                                            </p>
                                            <p className="text-sm leading-relaxed">
                                              O vendedor competente tem grandes conhecimentos sobre o produto que trabalha, pois isso é fundamental para a argumentação de vendas. Ele não apenas recebe as informações sobre o produto, mas compreende os processos, as características, os diferenciais. O profissional de vendas também conhece o espaço em que trabalha, a disposição dos produtos, o estoque, a arrumação da loja. Tudo isso engloba seu conhecimento sobre o que vende.
                                            </p>
                                            <p className="text-sm leading-relaxed italic">
                                              Mas de que adianta o conhecimento sem a prática?
                                            </p>
                                          </div>

                                          {/* Skills Section */}
                                          <div className="space-y-2">
                                            <h4 className="text-base font-bold text-green-600">Habilidade = Prática</h4>
                                            <p className="text-sm leading-relaxed">
                                              Habilidade é característica de quem sabe fazer. É a soma do aprendizado do "o quê" e de "como" fazer com a experiência adquirida. E o bom profissional de vendas sabe colocar na prática tudo aquilo que aprendeu.
                                            </p>
                                            <p className="text-sm leading-relaxed">
                                              O vendedor competente tem a habilidade de identificar o perfil do cliente, o que lhe foi pedido, o que está sendo dito. Ele é capaz de relacionar as informações que estão sendo fornecidas, analisar o problema que está sendo colocado e resumir toda a situação, apresentando os produtos que a loja oferece. É isso que o torna hábil no que faz: colocar em prática o conhecimento adquirido. Porém, para praticar o que aprendeu, ele precisa estar disposto.
                                            </p>
                                          </div>

                                          {/* Attitude Section */}
                                          <div className="space-y-2">
                                            <h4 className="text-base font-bold text-orange-600">Atitudes = Querer fazer</h4>
                                            <p className="text-sm leading-relaxed">
                                              Atitude é o comportamento ditado por uma disposição interior. É à vontade, o "querer fazer", é a predisposição para agir. Ter atitude é isso: agir. É uma qualidade que se percebe em todas as áreas do comportamento da pessoa, seja no trabalho, com a família ou com os amigos.
                                            </p>
                                            <p className="text-sm leading-relaxed">
                                              O vendedor competente quer fazer seu trabalho bem-feito, tem disposição para aprender sempre e iniciativa para buscar novas técnicas de vendas. Ele tem foco, motivação, iniciativa e comprometimento. Trabalha a inteligência emocional, o autodesenvolvimento e se adequa ao ritmo do cliente. É criativo, ético e persistente. Essas são as características de um vendedor de atitude.
                                            </p>
                                          </div>

                                          {/* Behavior Table */}
                                          <div className="space-y-4">
                                            <h4 className="text-base font-bold">Tabela de Comportamentos</h4>
                                            <div className="overflow-x-auto">
                                              <table className="w-full border-collapse border border-gray-300 text-xs">
                                                <thead>
                                                  <tr className="bg-gray-100">
                                                    <th className="border border-gray-300 p-2 text-left font-semibold">Conhecimento</th>
                                                    <th className="border border-gray-300 p-2 text-left font-semibold">Habilidade</th>
                                                    <th className="border border-gray-300 p-2 text-left font-semibold">Atitude</th>
                                                    <th className="border border-gray-300 p-2 text-left font-semibold">Resultado</th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  <tr>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2 bg-green-100 font-semibold">COMPETENTE</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2 bg-yellow-100">HABILIDOSO</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2 bg-blue-100">CONHECEDOR</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2 bg-orange-100">POTENCIAL</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2 bg-red-100">BOA VONTADE</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2 bg-gray-100">ROBÔ</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border border-gray-300 p-2">TEM</td>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2 bg-gray-100">ARQUIVO</td>
                                                  </tr>
                                                  <tr>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2">NÃO TEM</td>
                                                    <td className="border border-gray-300 p-2 bg-red-200">INCOMPETENTE</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </div>
                                          </div>

                                          {/* 5 Pillars Section */}
                                          <div className="space-y-4">
                                            <p className="text-sm leading-relaxed">
                                              O PVA Oscar foi desenvolvido com base nas melhores experiências práticas de nossos vendedores e especialistas. Por isso, além de conhecer as técnicas de vendas, retratadas no chavão Oscar, é importante, desde o primeiro dia de trabalho, conhecer os cinco pilares que sustentam as principais características comportamentais deste profissional. Retratamos estas características dentro de um círculo único, formando 360 graus, unindo cada uma delas.
                                            </p>
                                            
                                            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 text-center">
                                              <h4 className="text-lg font-bold text-yellow-800 mb-4">05 PILARES DE UM VENDEDOR DE SUCESSO</h4>
                                              
                                              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
                                                <div className="space-y-2">
                                                  <h5 className="font-bold text-blue-700">Gostar de Gente e Foco no Cliente</h5>
                                                  <ul className="text-xs space-y-1">
                                                    <li>Ter foco em realizar o desejo do cliente</li>
                                                    <li>Habilidade estruturar</li>
                                                    <li>Satisfazê-lo, falando sempre a verdade</li>
                                                    <li>Desenvolver a capacidade de empatia</li>
                                                  </ul>
                                                </div>
                                                
                                                <div className="space-y-2">
                                                  <h5 className="font-bold text-green-700">Amar o que faz</h5>
                                                  <ul className="text-xs space-y-1">
                                                    <li>Valorizar a profissão de vendas</li>
                                                    <li>Motivar-se diante de desafios</li>
                                                    <li>Resolvendo os problemas</li>
                                                    <li>Garantir sua fidelização</li>
                                                  </ul>
                                                </div>
                                                
                                                <div className="space-y-2">
                                                  <h5 className="font-bold text-purple-700">Objetivos</h5>
                                                  <ul className="text-xs space-y-1">
                                                    <li>Ter metas e resultados claros</li>
                                                    <li>Formular soluções para alcançar objetivos</li>
                                                  </ul>
                                                </div>
                                                
                                                <div className="space-y-2">
                                                  <h5 className="font-bold text-red-700">Persistir</h5>
                                                  <ul className="text-xs space-y-1">
                                                    <li>Não desanimar em frente às adversidades</li>
                                                  </ul>
                                                </div>
                                                
                                                <div className="space-y-2">
                                                  <h5 className="font-bold text-orange-700">Dominar o PVA</h5>
                                                  <ul className="text-xs space-y-1">
                                                    <li>Dominar os passos da venda contidos no chavão O.S.C.A.R</li>
                                                    <li>As competências fundamentais do vendedor</li>
                                                  </ul>
                                                </div>
                                              </div>
                                              
                                              <p className="text-sm font-semibold text-yellow-800 mt-4">
                                                Lembre-se: de nada adiantará a técnica se você não tiver esses pilares.
                                              </p>
                                            </div>
                                          </div>

                                          {/* Fundamental Competencies */}
                                          <div className="space-y-3">
                                            <h4 className="text-base font-bold">Entendido o conceito, vamos ver as competências fundamentais do vendedor:</h4>
                                            
                                            <div className="space-y-3 text-sm">
                                              <p><strong>Receptividade:</strong> capacidade de ouvir opiniões, críticas e sugestões dos demais, analisando as contribuições dos outros.</p>
                                              <p><strong>Afetividade:</strong> capacidade para estabelecer laços de afetividade e simpatia, por meio de postura pessoal participativa e amável.</p>
                                              <p><strong>Capacidade de comunicação:</strong> capacidade de se comunicar de forma objetiva, clara e eficaz e de captar o pensamento dos demais de forma coerente.</p>
                                              <p><strong>Facilidade de argumentação/persuasão:</strong> habilidade para convencer os demais por meio da argumentação e representatividade lógica e objetiva.</p>
                                              <p><strong>Autoconfiança:</strong> capacidade de acreditar nos próprios recursos e demonstrar segurança nas relações com pessoas e situações novas.</p>
                                              <p><strong>Flexibilidade e disposição de rever posições:</strong> capacidade de não temer o novo e mostrar-se aberto a receber informações; disposição pessoal para adaptar-se em diferentes contextos de trabalho, encontrando soluções apropriadas.</p>
                                              <p><strong>Comprometimento:</strong> estar envolvido com os prazos e metas da empresa e perceber suas responsabilidades e os impactos do seu trabalho.</p>
                                              <p><strong>Proatividade:</strong> capacidade de agir autonomamente, antecipando decisões, criando condições favoráveis e tomando providências que visem à prevenção ou à resolução de problemas.</p>
                                              <p><strong>Trabalho em equipe e cooperação:</strong> facilidade de engajamento pessoal e capacidade de manter-se acessível e disponível à equipe, demonstrando interesse, num clima de interdependência e confiança mútua.</p>
                                              <p><strong>Tato e observação:</strong> capacidade de saber observar, abordar e tratar os clientes de gostos e necessidades próprias, considerando suas diferenças e peculiaridades.</p>
                                              <p><strong>Habilidade de relacionamento interpessoal:</strong> capacidade de estabelecer com facilidade relações de amizade, apresentando empatia, disposição para aceitar e entender as diferenças pessoais, partilhando situações favoráveis ou não, sem deixar de respeitar os limites dos demais.</p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                </CollapsibleContent>
                              </Collapsible>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Other PVA modules with "Em breve" status */}
                  {[
                    { letra: "O", titulo: "ORGANIZE SEU DIA", file: "PVA O.mp4" },
                    { letra: "S", titulo: "SEJA BEM VINDO A OSCAR", file: "PVA S.mp4" },
                    { letra: "C", titulo: "CONSTRUA O PERFIL DO CLIENTE", file: "PVA C.mp4" },
                    { letra: "A", titulo: "APRESENTE E ADICIONE", file: "PVA A.mp4" },
                    { letra: "R", titulo: "RETORNE O FECHAMENTO E PÓS VENDA", file: "PVA R.mp4" }
                  ].map((item) => (
                    <Collapsible key={item.letra}>
                      <CollapsibleTrigger asChild>
                        <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                          <CardHeader>
                            <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                              <div className="flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={20} />
                                PVA - LETRA {item.letra} ({item.titulo})
                              </div>
                              <ChevronDown className="h-4 w-4 text-blue-600" />
                            </CardTitle>
                          </CardHeader>
                        </Card>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2">
                        <Card className="border-blue-200 bg-blue-50">
                          <CardContent className="pt-6 space-y-4">
                            <div className="space-y-4">
                              <div>
                                <VideoPlayer fileName={item.file} />
                              </div>
                              <div className="container mx-auto px-4">
                                <Button variant="outline" className="flex items-center gap-2" disabled>
                                  <Eye size={16} />
                                  Ver Descrição (Em breve)
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </CollapsibleContent>
                    </Collapsible>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Other tabs content placeholders */}
            <TabsContent value="gerencial" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BarChart3 className="text-purple-600" />
                  Programa de Gestão de Lojas - PGL
                </h3>
                
                <div className="space-y-4">
                  {/* Gestor - Curso */}
                  <Collapsible defaultOpen>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <UserCog className="text-blue-600" size={20} />
                              Gestor - Curso
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-2">
                            Principais características do gestor de loja, preparando-o para lidar com sua equipe
                          </p>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 mt-4">
                      {/* Primeira linha - Módulos 1 e 2 */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* PGL MÓDULO 1 */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">VOCE-GESTOR-1: Fundamentos da Gestão</h4>
                          <div className="w-full">
                            <VideoPlayer fileName="VOCE-GESTOR-1.mp4" />
                          </div>
                        </div>

                        {/* PGL MÓDULO 2 */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">VOCE-GESTOR-2: Liderança de Equipe</h4>
                          <div className="w-full">
                            <VideoPlayer fileName="VOCE-GESTOR-2.mp4" />
                          </div>
                        </div>
                      </div>

                      {/* Segunda linha - Módulos 3 e 4 */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* PGL MÓDULO 3 */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">VOCE-GESTOR-3: Gestão de Performance</h4>
                          <div className="w-full">
                            <VideoPlayer fileName="VOCE-GESTOR-3.mp4" />
                          </div>
                        </div>

                        {/* PGL MÓDULO 4 */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-muted-foreground">VOCE-GESTOR-4: Tomada de Decisão</h4>
                          <div className="w-full">
                            <VideoPlayer fileName="VOCE-GESTOR-4.mp4" />
                          </div>
                        </div>
                      </div>

                      {/* Terceira linha - Módulo 5 centralizado */}
                      <div className="flex justify-center">
                        <div className="w-full lg:w-1/2">
                          <div className="space-y-2">
                            <h4 className="text-sm font-medium text-muted-foreground">VOCE-GESTOR-5: Desenvolvimento de Equipe</h4>
                            <div className="w-full">
                              <VideoPlayer fileName="VOCE-GESTOR-5.mp4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Gerência Operacional */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-green-200 bg-green-50 cursor-pointer hover:bg-green-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <Settings className="text-green-600" size={20} />
                              Gerência Operacional
                            </div>
                            <ChevronDown className="h-4 w-4 text-green-600" />
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-2">
                            Práticas de gestão operacional buscando eficiência e libertação das rotinas que desfocam os gestores do salão de venda
                          </p>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 mt-4">
                      <div className="text-center py-8">
                        <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">Conteúdo em breve</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Seu Time */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-orange-200 bg-orange-50 cursor-pointer hover:bg-orange-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <Users className="text-orange-600" size={20} />
                              Seu Time
                            </div>
                            <ChevronDown className="h-4 w-4 text-orange-600" />
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-2">
                            Conteúdo voltado para a forma que o gestor deverá conduzir aspectos organizacionais e disciplinares na loja
                          </p>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 mt-4">
                      <div className="text-center py-8">
                        <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">Conteúdo em breve</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Acompanhamento */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-cyan-200 bg-cyan-50 cursor-pointer hover:bg-cyan-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <Eye className="text-cyan-600" size={20} />
                              Acompanhamento
                            </div>
                            <ChevronDown className="h-4 w-4 text-cyan-600" />
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-2">
                            Capítulo dedicado para direcionar o gestor sobre aspectos relacionados ao desempenho
                          </p>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 mt-4">
                      <div className="text-center py-8">
                        <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">Conteúdo em breve</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Treinamento */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-purple-200 bg-purple-50 cursor-pointer hover:bg-purple-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <GraduationCap className="text-purple-600" size={20} />
                              Treinamento
                            </div>
                            <ChevronDown className="h-4 w-4 text-purple-600" />
                          </CardTitle>
                          <p className="text-sm text-muted-foreground mt-2">
                            Como ser um treinador e não permitir que os métodos da empresa sejam perdidos
                          </p>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-4 mt-4">
                      <div className="text-center py-8">
                        <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">Conteúdo em breve</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="treinamento" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BookOpen className="text-orange-600" />
                  Check-Lists (Lojas)
                </h3>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Um check-list em uma loja de varejo serve para garantir que todas as tarefas importantes sejam realizadas de maneira eficiente e consistente. Ele ajuda a manter a organização, a qualidade do atendimento ao cliente, o controle de estoque e a eficiência e organização dos processos. Além disso, um checklist pode assegurar que as normas de segurança sejam seguidas e que todas as áreas da loja estejam limpas e bem apresentadas. Em resumo, é uma ferramenta fundamental para garantir que a loja funcione de maneira organizada e eficaz.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckSquare className="text-blue-600 h-5 w-5" />
                        <h4 className="font-medium text-sm">Encarregado de Vendas</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">Check-list para coordenação da equipe de vendas</p>
                      <Button 
                        size="sm" 
                        className="w-full" 
                        onClick={() => window.open('/CHECK LIST ENCARREGADO DE VENDAS 2025.pdf', '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Users className="text-purple-600 h-5 w-5" />
                        <h4 className="font-medium text-sm">Gestor 3.0</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">Check-list para gestão moderna de loja</p>
                      <Button 
                        size="sm" 
                        className="w-full" 
                        onClick={() => window.open('/CHECK LIST GESTOR 3.0 2025.pdf', '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CreditCard className="text-green-600 h-5 w-5" />
                        <h4 className="font-medium text-sm">Líder de Caixa 3.0</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">Check-list para operações de caixa</p>
                      <Button 
                        size="sm" 
                        className="w-full" 
                        onClick={() => window.open('/CHECK LIST LIDER CAIXA 3.0 2025.pdf', '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Package className="text-teal-600 h-5 w-5" />
                        <h4 className="font-medium text-sm">Líder de Estoque 3.0</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">Check-list para gestão de estoque</p>
                      <Button 
                        size="sm" 
                        className="w-full" 
                        onClick={() => window.open('/CHECK LIST LÍDER DE ESTOQUE 3.0 2025.pdf', '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Building className="text-red-600 h-5 w-5" />
                        <h4 className="font-medium text-sm">Gerente Regional</h4>
                      </div>
                      <p className="text-xs text-muted-foreground">Check-list para gestão regional</p>
                      <Button 
                        size="sm" 
                        className="w-full" 
                        onClick={() => window.open('/Check List Gerente Regional 2025.pdf', '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar PDF
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="estoque" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Package className="text-teal-600" />
                  Estoque & Retaguarda
                </h3>
                <p className="text-muted-foreground">Conteúdo em desenvolvimento...</p>
              </div>
            </TabsContent>

            <TabsContent value="gamificacao" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Trophy className="text-yellow-600" />
                  Desafios & Conquistas
                </h3>
                <p className="text-muted-foreground">Conteúdo em desenvolvimento...</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LojaVirtual;
