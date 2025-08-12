import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
  Trophy
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
              💼 Área Gerencial (PGL)
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
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BarChart3 className="text-purple-600" />
                  PGL - Programa de Gestão de Lojas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Gestão de Equipe</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-semibold text-sm">Escalas e Horários</h4>
                          <p className="text-xs text-muted-foreground">Planejamento semanal da equipe</p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-semibold text-sm">Avaliação de Performance</h4>
                          <p className="text-xs text-muted-foreground">Feedback e desenvolvimento</p>
                        </div>
                        <div className="p-3 border rounded-lg">
                          <h4 className="font-semibold text-sm">Reuniões de Briefing</h4>
                          <p className="text-xs text-muted-foreground">Comunicação diária</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Controles Operacionais</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                          <span className="text-sm">Abertura da Loja</span>
                          <CheckCircle size={16} className="text-green-600" />
                        </div>
                        <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                          <span className="text-sm">Conferência de Caixa</span>
                          <CheckCircle size={16} className="text-green-600" />
                        </div>
                        <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                          <span className="text-sm">Limpeza e Organização</span>
                          <Clock size={16} className="text-yellow-600" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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