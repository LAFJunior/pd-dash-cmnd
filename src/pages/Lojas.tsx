import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronRight, Store, User, Award, Search, Filter } from 'lucide-react';

// Mock de dados de lojas com progresso
const lojasComProgresso = [
  { id: '1', codigo: '001', nome: 'Cl2', cidade: 'São José dos Campos', estado: 'SP', tipo: 'loja', responsavel: 'Jully - Sabrina', progresso: 78, processosConcluidos: 156, totalProcessos: 200, badges: 12 },
  { id: '2', codigo: '002', nome: 'Jp', cidade: 'São José dos Campos', estado: 'SP', tipo: 'loja', responsavel: 'Jully - Sabrina', progresso: 65, processosConcluidos: 130, totalProcessos: 200, badges: 8 },
  { id: '3', codigo: '003', nome: 'Cl 1', cidade: 'São José dos Campos', estado: 'SP', tipo: 'loja', responsavel: 'Jully - Sabrina', progresso: 82, processosConcluidos: 164, totalProcessos: 200, badges: 14 },
  { id: '4', codigo: '004', nome: 'Jc 2', cidade: 'Jacareí', estado: 'SP', tipo: 'loja', responsavel: 'Milena', progresso: 45, processosConcluidos: 90, totalProcessos: 200, badges: 4 },
  { id: '5', codigo: '005', nome: 'Jc 1', cidade: 'Jacareí', estado: 'SP', tipo: 'loja', responsavel: 'Milena', progresso: 52, processosConcluidos: 104, totalProcessos: 200, badges: 6 },
  { id: '6', codigo: '030', nome: 'E-commerce', cidade: 'São José dos Campos', estado: 'SP', tipo: 'loja', responsavel: 'Taína - Mateus', progresso: 88, processosConcluidos: 176, totalProcessos: 200, badges: 18 },
  { id: '7', codigo: '010', nome: 'CD Oscar', cidade: 'São José dos Campos', estado: 'SP', tipo: 'cd', responsavel: 'Igor', progresso: 92, processosConcluidos: 184, totalProcessos: 200, badges: 22 },
  { id: '8', codigo: '031', nome: 'Constantino Mogi', cidade: 'Mogi das Cruzes', estado: 'SP', tipo: 'loja', responsavel: 'Carolina', progresso: 38, processosConcluidos: 76, totalProcessos: 200, badges: 2 },
];

const Lojas = () => {
  const navigate = useNavigate();
  const [busca, setBusca] = useState('');
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [filtroTipo, setFiltroTipo] = useState('todos');
  const [filtroProgresso, setFiltroProgresso] = useState('todos');

  const lojasFiltradas = lojasComProgresso.filter(loja => {
    const matchBusca = loja.nome.toLowerCase().includes(busca.toLowerCase()) || 
                       loja.codigo.includes(busca) ||
                       loja.cidade.toLowerCase().includes(busca.toLowerCase());
    const matchEstado = filtroEstado === 'todos' || loja.estado === filtroEstado;
    const matchTipo = filtroTipo === 'todos' || loja.tipo === filtroTipo;
    const matchProgresso = filtroProgresso === 'todos' || 
      (filtroProgresso === 'baixo' && loja.progresso < 40) ||
      (filtroProgresso === 'medio' && loja.progresso >= 40 && loja.progresso < 70) ||
      (filtroProgresso === 'alto' && loja.progresso >= 70);
    
    return matchBusca && matchEstado && matchTipo && matchProgresso;
  });

  const getProgressColor = (progresso: number) => {
    if (progresso >= 70) return 'bg-green-500';
    if (progresso >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Oscar Academy</h1>
              <p className="text-muted-foreground">Acompanhamento de processos por loja</p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-lg px-4 py-2">
                {lojasFiltradas.length} {lojasFiltradas.length === 1 ? 'loja' : 'lojas'}
              </Badge>
            </div>
          </div>

          {/* Filtros */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar loja, código ou cidade..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={filtroEstado} onValueChange={setFiltroEstado}>
              <SelectTrigger>
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os estados</SelectItem>
                <SelectItem value="SP">São Paulo</SelectItem>
                <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                <SelectItem value="SC">Santa Catarina</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filtroTipo} onValueChange={setFiltroTipo}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os tipos</SelectItem>
                <SelectItem value="loja">Lojas</SelectItem>
                <SelectItem value="cd">Centros de Distribuição</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filtroProgresso} onValueChange={setFiltroProgresso}>
              <SelectTrigger>
                <SelectValue placeholder="Progresso" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todos">Todos os níveis</SelectItem>
                <SelectItem value="baixo">&lt; 40% (Iniciante)</SelectItem>
                <SelectItem value="medio">40-70% (Intermediário)</SelectItem>
                <SelectItem value="alto">&gt; 70% (Avançado)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lojasFiltradas.map((loja) => (
            <Card 
              key={loja.id} 
              className="hover:shadow-xl transition-all duration-300 cursor-pointer border-border hover:border-primary group"
              onClick={() => navigate(`/lojas/${loja.id}`)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <Store className="w-5 h-5 text-primary" />
                    <div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {loja.codigo} - {loja.nome}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {loja.cidade}, {loja.estado}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant={loja.tipo === 'loja' ? 'default' : 'secondary'}>
                    {loja.tipo === 'loja' ? 'Loja' : 'CD'}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Progresso Geral */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-foreground">Progresso Geral</span>
                    <span className="text-muted-foreground">
                      {loja.processosConcluidos}/{loja.totalProcessos}
                    </span>
                  </div>
                  <div className="relative">
                    <Progress value={loja.progresso} className="h-3" />
                    <div className={`absolute inset-0 ${getProgressColor(loja.progresso)} rounded-full opacity-20`} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {loja.progresso}% completo
                  </p>
                </div>

                {/* Mini Badges por Departamento */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs bg-green-50 dark:bg-green-950 border-green-200">
                    ✓ Controladoria 12/15
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-yellow-50 dark:bg-yellow-950 border-yellow-200">
                    ⏱ Financeiro 8/20
                  </Badge>
                  <Badge variant="outline" className="text-xs bg-red-50 dark:bg-red-950 border-red-200">
                    ○ E-commerce 2/10
                  </Badge>
                </div>

                {/* Responsável */}
                <div className="flex items-center text-sm text-muted-foreground pt-2 border-t">
                  <User className="w-4 h-4 mr-2 text-primary" />
                  <span>{loja.responsavel}</span>
                </div>

                {/* Badges Conquistadas */}
                {loja.badges > 0 && (
                  <div className="flex items-center text-sm font-medium text-amber-600 dark:text-amber-400">
                    <Award className="w-4 h-4 mr-2" />
                    <span>{loja.badges} certificações</span>
                  </div>
                )}
              </CardContent>

              <CardFooter>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Ver Currículo
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {lojasFiltradas.length === 0 && (
          <div className="text-center py-12">
            <Store className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg font-medium text-foreground mb-2">Nenhuma loja encontrada</h3>
            <p className="text-muted-foreground">Tente ajustar os filtros de busca</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lojas;
