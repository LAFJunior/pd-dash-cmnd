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

                                      {/* CHA Formula */}
                                      <div className="bg-gray-100 border-2 border-gray-300 rounded-lg p-6 text-center my-6">
                                        <p className="text-lg font-bold">Competência = C + H + A = CHA</p>
                                      </div>

                                      {/* Knowledge Section */}
                                      <div className="space-y-3">
                                        <h4 className="text-base font-bold text-red-600">Conhecimento = Aprendizado</h4>
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
                                      <div className="space-y-3">
                                        <h4 className="text-base font-bold text-red-600">Habilidade = Prática</h4>
                                        <p className="text-sm leading-relaxed">
                                          Habilidade é característica de quem sabe fazer. É a soma do aprendizado do "o quê" e de "como" fazer com a experiência adquirida. E o bom profissional de vendas sabe colocar na prática tudo aquilo que aprendeu.
                                        </p>
                                        <p className="text-sm leading-relaxed">
                                          O vendedor competente tem a habilidade de identificar o perfil do cliente, o que lhe foi pedido, o que está sendo dito. Ele é capaz de relacionar as informações que estão sendo fornecidas, analisar o problema que está sendo colocado e resumir toda a situação, apresentando os produtos que a loja oferece. É isso que o torna hábil no que faz: colocar em prática o conhecimento adquirido. Porém, para praticar o que aprendeu, ele precisa estar disposto.
                                        </p>
                                      </div>

                                      {/* Attitude Section */}
                                      <div className="space-y-3">
                                        <h4 className="text-base font-bold text-red-600">Atitudes = Querer fazer</h4>
                                        <p className="text-sm leading-relaxed">
                                          Atitude é o comportamento ditado por uma disposição interior. É à vontade, o "querer fazer", é a predisposição para agir. Ter atitude é isso: agir. É uma qualidade que se percebe em todas as áreas do comportamento da pessoa, seja no trabalho, com a família ou com os amigos.
                                        </p>
                                        <p className="text-sm leading-relaxed">
                                          O vendedor competente quer fazer seu trabalho bem-feito, tem disposição para aprender sempre e iniciativa para buscar novas técnicas de vendas. Ele tem foco, motivação, iniciativa e comprometimento. Trabalha a inteligência emocional, o autodesenvolvimento e se adequa ao ritmo do cliente. É criativo, ético e persistente. Essas são as características de um vendedor de atitude.
                                        </p>
                                      </div>

                                      {/* Behavior Table */}
                                      <div className="mt-6">
                                        <h4 className="text-base font-bold mb-4">Tabela de Comportamentos</h4>
                                        <div className="overflow-x-auto">
                                          <table className="w-full border-collapse border border-gray-300">
                                            <thead>
                                              <tr className="bg-gray-100">
                                                <th className="border border-gray-300 p-3 text-left font-bold">COMPORTAMENTO DO CLIENTE</th>
                                                <th className="border border-gray-300 p-3 text-left font-bold">COMPORTAMENTO DO VENDEDOR</th>
                                              </tr>
                                            </thead>
                                            <tbody className="text-sm">
                                              <tr>
                                                <td className="border border-gray-300 p-3">Sabe o que quer. Está concentrado e tem objetivo.</td>
                                                <td className="border border-gray-300 p-3">Seja objetivo. Apresente só o que interessa às necessidades do cliente. Provoque o entusiasmo, apresentando as vantagens.</td>
                                              </tr>
                                              <tr className="bg-gray-50">
                                                <td className="border border-gray-300 p-3">Preocupa-se com qualidade e preço.</td>
                                                <td className="border border-gray-300 p-3">Procure descobrir a necessidade e o gosto. Demonstre segurança, conhecimento e entusiasmo. Conquiste a confiança.</td>
                                              </tr>
                                              <tr>
                                                <td className="border border-gray-300 p-3">Parece indiferente, desconfiado e/ou inibido.</td>
                                                <td className="border border-gray-300 p-3">Deixe o cliente falar. Dê direcionamento à fala, fazendo perguntas ligadas ao produto, dando continuidade à sondagem das necessidades e dos gostos. Resume as vantagens e reforce os benefícios.</td>
                                              </tr>
                                              <tr className="bg-gray-50">
                                                <td className="border border-gray-300 p-3">Não sabe ouvir. Fala bastante. Desvia a atenção para outros assuntos.</td>
                                                <td className="border border-gray-300 p-3">Dê as informações que o cliente quer e guarde um ótimo argumento para o fechamento.</td>
                                              </tr>
                                              <tr>
                                                <td className="border border-gray-300 p-3">Faz muitas perguntas, quer saber tudo.</td>
                                                <td className="border border-gray-300 p-3">Apresente as características do produto, utilizando uma linguagem leve.</td>
                                              </tr>
                                              <tr className="bg-gray-50">
                                                <td className="border border-gray-300 p-3">É moderno, descontraído, sem cerimônias.</td>
                                                <td className="border border-gray-300 p-3">Não intime o cliente. Utilize as mídias sociais a seu favor!</td>
                                              </tr>
                                              <tr>
                                                <td className="border border-gray-300 p-3">Cria muitas objeções e quer vantagem financeira.</td>
                                                <td className="border border-gray-300 p-3">Demonstre o diferencial do produto, plano de pagamento e o quanto a compra vai agregar à vida dele.</td>
                                              </tr>
                                              <tr className="bg-gray-50">
                                                <td className="border border-gray-300 p-3">Ficar se lamentando. Tudo é ruim, é "do contra".</td>
                                                <td className="border border-gray-300 p-3">Seja paciente, mostre respeito.</td>
                                              </tr>
                                              <tr>
                                                <td className="border border-gray-300 p-3">Insatisfação pela empresa ou pelo atendimento. (Nessa situação, o cliente está oferecendo uma oportunidade de melhoria.)</td>
                                                <td className="border border-gray-300 p-3">Escute o cliente e resolva a questão.</td>
                                              </tr>
                                              <tr className="bg-gray-50">
                                                <td className="border border-gray-300 p-3">Demonstra conhecimento e domina o diálogo.</td>
                                                <td className="border border-gray-300 p-3">Elogie sem discutir. Venda o benefício, não o produto.</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                      {/* 5 Pillars */}
                                      <div className="space-y-4 mt-6">
                                        <p className="text-sm leading-relaxed">
                                          O PVA Oscar foi desenvolvido com base nas melhores experiências práticas de nossos vendedores e especialistas. Por isso, além de conhecer as técnicas de vendas, retratadas no chavão Oscar, é importante, desde o primeiro dia de trabalho, conhecer os cinco pilares que sustentam as principais características comportamentais deste profissional. Retratamos estas características dentro de um círculo único, formando 360 graus, unindo cada uma delas.
                                        </p>

                                        <div className="bg-red-600 text-white p-4 rounded-lg">
                                          <h4 className="font-bold mb-2">Gostar de Gente e Foco no Cliente</h4>
                                          <ul className="text-sm space-y-1">
                                            <li>• Ter foco em realizar o desejo do cliente</li>
                                            <li>• Habilidade estruturar</li>
                                            <li>• Satisfazê-lo, falando</li>
                                            <li>• Sempre a verdade e relacionamento pessoas</li>
                                            <li>• Desenvolver a capacidade de empatia</li>
                                          </ul>
                                        </div>

                                        <div className="bg-red-600 text-white p-4 rounded-lg">
                                          <h4 className="font-bold mb-2 text-center">05 PILARES DE UM VENDEDOR DE SUCESSO</h4>
                                          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
                                            <div>
                                              <p className="font-semibold">1. Resolvendo os problemas</p>
                                              <p className="text-xs">Garantir sua fidelização</p>
                                            </div>
                                            <div>
                                              <p className="font-semibold">2. Amar o que faz</p>
                                            </div>
                                            <div>
                                              <p className="font-semibold">3. Objetivos</p>
                                              <p className="text-xs">Ter metas e resultados claros</p>
                                            </div>
                                            <div>
                                              <p className="font-semibold">4. Valorizar a profissão de vendas</p>
                                              <p className="text-xs">motivar-se diante de desafios pessoais para atingir</p>
                                            </div>
                                            <div>
                                              <p className="font-semibold">5. Formular soluções</p>
                                              <p className="text-xs">para alcançar os seus objetivos</p>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="space-y-2">
                                          <p className="text-sm leading-relaxed">
                                            <strong>Persistir e Dominar o PVA e as competências</strong> não desanimar em frente às adversidades.
                                          </p>
                                          <p className="text-sm leading-relaxed">
                                            Dominar os passos da venda contidos no chavão O.S.C.A.R e as competências fundamentais do vendedor.
                                          </p>
                                          <p className="text-sm leading-relaxed font-semibold">
                                            Lembre-se: de nada adiantará a técnica se você não tiver esses pilares.
                                          </p>
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
                          <div className="space-y-4">
                            <div>
                              <VideoPlayer fileName="PVA O.mp4" />
                            </div>
                            <div className="container mx-auto px-4">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição (Em breve)
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
                          <div className="space-y-4">
                            <div>
                              <VideoPlayer fileName="PVA S.mp4" />
                            </div>
                            <div className="container mx-auto px-4">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição (Em breve)
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
                          <div className="space-y-4">
                            <div>
                              <VideoPlayer fileName="PVA C.mp4" />
                            </div>
                            <div className="container mx-auto px-4">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição (Em breve)
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
                          <div className="space-y-4">
                            <div>
                              <VideoPlayer fileName="PVA A.mp4" />
                            </div>
                            <div className="container mx-auto px-4">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição (Em breve)
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
                          <div className="space-y-4">
                            <div>
                              <VideoPlayer fileName="PVA R.mp4" />
                            </div>
                            <div className="container mx-auto px-4">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição (Em breve)
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
    </div>
  );
};

export default LojaVirtual;
