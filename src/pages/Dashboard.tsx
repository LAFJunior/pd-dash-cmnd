import React, { useState, useMemo } from 'react';
import CardProcesso from '@/components/dashboard/CardProcesso';
import { ChartBarIcon, ChartPieIcon, ClipboardListIcon, UsersIcon, Building2, Filter } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProcessosCount } from '@/hooks/useProcessosCount';
import { todosOsProcessos } from '@/data/processos';
import { ProcessoSubprocesso, ProcessoTarefa } from '@/types/processo';
import { DepartamentosDrawer } from '@/components/dashboard/DepartamentosDrawer';

type FiltroNivel = 'todos' | 'Estratégico' | 'Tático' | 'Operacional';
type FiltroDepartamento = 'todos' | string;

const Dashboard = () => {
  const { total, estrategicos, taticos, operacionais } = useProcessosCount();
  const [filtroNivel, setFiltroNivel] = useState<FiltroNivel>('todos');
  const [filtroDepartamento, setFiltroDepartamento] = useState<FiltroDepartamento>('todos');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSelectDepartamento = (dept: string) => {
    setFiltroDepartamento(dept);
  };

  // Mapear departamento baseado no ID do processo
  const obterDepartamento = (processoId: string): string => {
    if (processoId.startsWith('CTRL')) return 'Controladoria';
    if (processoId.startsWith('EC')) return 'E-commerce';
    if (processoId.startsWith('FIN')) return 'Financeiro';
    if (processoId.startsWith('DEF')) return 'Defeito';
    if (processoId.startsWith('SJC')) return 'São José Campos';
    if (processoId.startsWith('FISC')) return 'Fiscal';
    if (processoId.startsWith('COMP')) return 'Compras';
    if (processoId.startsWith('AUD')) return 'Auditoria';
    if (processoId.startsWith('CONT')) return 'Contábil';
    if (processoId.startsWith('DP')) return 'Departamento Pessoal';
    if (processoId.startsWith('RH')) return 'Recursos Humanos';
    if (processoId.startsWith('FEST')) return 'Festcard';
    if (processoId.startsWith('MKT')) return 'Marketing';
    if (processoId.startsWith('TI')) return 'T.I';
    if (processoId.startsWith('LJ')) return 'Lojas';
    return 'Outros';
  };

  // Filtrar processos baseado nos filtros ativos
  const processosFiltrados = useMemo(() => {
    return todosOsProcessos.filter(processo => {
      const passaNivel = filtroNivel === 'todos' || processo.nivel === filtroNivel;
      const departamentoProcesso = obterDepartamento(processo.id);
      const passaDepartamento = filtroDepartamento === 'todos' || departamentoProcesso === filtroDepartamento;
      return passaNivel && passaDepartamento;
    });
  }, [filtroNivel, filtroDepartamento]);

  // Extrair subprocessos e tarefas filtrados
  const todosOsSubprocessos: ProcessoSubprocesso[] = [];
  const todasAsTarefas: ProcessoTarefa[] = [];

  processosFiltrados.forEach(processo => {
    processo.subprocessos.forEach(subprocesso => {
      todosOsSubprocessos.push(subprocesso);
      subprocesso.tarefas.forEach(tarefa => {
        todasAsTarefas.push(tarefa);
      });
    });
  });

  // Contar processos filtrados por nível
  const contadorFiltrado = {
    total: processosFiltrados.length,
    estrategicos: processosFiltrados.filter(p => p.nivel === 'Estratégico').length,
    taticos: processosFiltrados.filter(p => p.nivel === 'Tático').length,
    operacionais: processosFiltrados.filter(p => p.nivel === 'Operacional').length
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Visão geral dos processos corporativos</p>
        </div>
        
        <Button
          onClick={() => setDrawerOpen(true)}
          variant="outline"
          className="gap-2"
        >
          <Building2 className="w-4 h-4" />
          Explorar Departamentos
          {filtroDepartamento !== 'todos' && (
            <Badge variant="secondary" className="ml-1">
              {filtroDepartamento}
            </Badge>
          )}
        </Button>
      </div>
      
      <DepartamentosDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        filtroDepartamento={filtroDepartamento}
        onSelectDepartamento={handleSelectDepartamento}
      />
      
      {/* Filtros de Nível - Estilo Power BI */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div 
          onClick={() => setFiltroNivel('todos')}
          className={`cursor-pointer transition-all duration-200 transform hover:scale-105 ${
            filtroNivel === 'todos' ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
          }`}
        >
          <CardProcesso 
            titulo="Todos os Processos" 
            quantidade={contadorFiltrado.total}
            className={`bg-processo-todos ${filtroNivel === 'todos' ? 'border-blue-500' : ''}`}
            iconRight={<ChartBarIcon size={20} />}
          />
        </div>
        
        <div 
          onClick={() => setFiltroNivel('Estratégico')}
          className={`cursor-pointer transition-all duration-200 transform hover:scale-105 ${
            filtroNivel === 'Estratégico' ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
          }`}
        >
          <CardProcesso 
            titulo="Processos Estratégicos" 
            quantidade={contadorFiltrado.estrategicos}
            className={`bg-processo-estrategicos ${filtroNivel === 'Estratégico' ? 'border-blue-500' : ''}`}
            iconRight={<ChartPieIcon size={20} />}
          />
        </div>
        
        <div 
          onClick={() => setFiltroNivel('Tático')}
          className={`cursor-pointer transition-all duration-200 transform hover:scale-105 ${
            filtroNivel === 'Tático' ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
          }`}
        >
          <CardProcesso 
            titulo="Processos Táticos" 
            quantidade={contadorFiltrado.taticos}
            className={`bg-processo-taticos ${filtroNivel === 'Tático' ? 'border-blue-500' : ''}`}
            iconRight={<ClipboardListIcon size={20} />}
          />
        </div>
        
        <div 
          onClick={() => setFiltroNivel('Operacional')}
          className={`cursor-pointer transition-all duration-200 transform hover:scale-105 ${
            filtroNivel === 'Operacional' ? 'ring-2 ring-blue-500 shadow-lg' : 'hover:shadow-md'
          }`}
        >
          <CardProcesso 
            titulo="Processos Operacionais" 
            quantidade={contadorFiltrado.operacionais}
            className={`bg-processo-operacionais ${filtroNivel === 'Operacional' ? 'border-blue-500' : ''}`}
            iconRight={<UsersIcon size={20} />}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            
            {/* Seção de Subprocessos */}
            <Card className="bg-white p-6 max-h-[400px] flex flex-col">
              <h3 className="text-lg font-semibold mb-4">
                Subprocessos: 
                {filtroNivel !== 'todos' && (
                  <span className="text-sm text-gray-500">({filtroNivel})</span>
                )}
                {filtroDepartamento !== 'todos' && (
                  <span className="text-sm text-gray-500">- {filtroDepartamento}</span>
                )}
              </h3>
              <div className="overflow-x-auto flex-1">
                <div className="max-h-[320px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100/50 [&::-webkit-scrollbar-thumb]:bg-gray-300/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-400/50">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">ID:</TableHead>
                        <TableHead>Nome:</TableHead>
                        <TableHead className="w-32 text-right">Nível:</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {todosOsSubprocessos.map((subprocesso) => (
                        <TableRow key={subprocesso.id}>
                          <TableCell className="font-medium">{subprocesso.id}</TableCell>
                          <TableCell>{subprocesso.nome}</TableCell>
                          <TableCell className="text-right">
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                subprocesso.nivel === 'Estratégico' ? 'bg-processo-estrategicos/20 text-processo-estrategicos' :
                                subprocesso.nivel === 'Tático' ? 'bg-processo-taticos/20 text-processo-taticos' :
                                'bg-processo-operacionais/20 text-processo-operacionais'
                              }`}
                            >
                              {subprocesso.nivel}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
            
            {/* Seção de Tarefas */}
            <Card className="bg-white p-6 max-h-[400px] flex flex-col">
              <h3 className="text-lg font-semibold mb-4">
                Tarefas: 
                {filtroNivel !== 'todos' && (
                  <span className="text-sm text-gray-500">({filtroNivel})</span>
                )}
                {filtroDepartamento !== 'todos' && (
                  <span className="text-sm text-gray-500">- {filtroDepartamento}</span>
                )}
              </h3>
              <div className="overflow-x-auto flex-1">
                <div className="max-h-[320px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100/50 [&::-webkit-scrollbar-thumb]:bg-gray-300/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-400/50">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-20">ID:</TableHead>
                        <TableHead>Nome:</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {todasAsTarefas.map((tarefa) => (
                        <TableRow key={tarefa.id}>
                          <TableCell className="font-medium">{tarefa.id}</TableCell>
                          <TableCell>{tarefa.nome}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col max-h-[1248px]">
          <h3 className="text-lg font-semibold mb-4">
            Processos 
            {filtroNivel !== 'todos' && (
              <span className="text-sm text-gray-500">({filtroNivel})</span>
            )}
            {filtroDepartamento !== 'todos' && (
              <span className="text-sm text-gray-500">- {filtroDepartamento}</span>
            )}
          </h3>
          <div className="overflow-x-auto flex-1">
            <div className="max-h-[1168px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100/50 [&::-webkit-scrollbar-thumb]:bg-gray-300/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-400/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">ID</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead className="w-32 text-right">Nível</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {processosFiltrados.map((processo) => (
                    <TableRow key={processo.id}>
                      <TableCell className="font-medium">{processo.id}</TableCell>
                      <TableCell>{processo.nome}</TableCell>
                      <TableCell className="text-right">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            processo.nivel === 'Estratégico' ? 'bg-processo-estrategicos/20 text-processo-estrategicos' :
                            processo.nivel === 'Tático' ? 'bg-processo-taticos/20 text-processo-taticos' :
                            'bg-processo-operacionais/20 text-processo-operacionais'
                          }`}
                        >
                          {processo.nivel}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
