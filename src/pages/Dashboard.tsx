import React from 'react';
import CardProcesso from '@/components/dashboard/CardProcesso';
import GraficoProcessos from '@/components/dashboard/GraficoProcessos';
import { ChartBarIcon, ChartPieIcon, ClipboardListIcon, UsersIcon } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { useProcessosCount } from '@/hooks/useProcessosCount';
import { todosOsProcessos } from '@/data/processos';
import { ProcessoSubprocesso, ProcessoTarefa } from '@/types/processo';

const Dashboard = () => {
  const { total, estrategicos, taticos, operacionais } = useProcessosCount();

  // Extrair todos os subprocessos e tarefas dos processos
  const todosOsSubprocessos: ProcessoSubprocesso[] = [];
  const todasAsTarefas: ProcessoTarefa[] = [];

  todosOsProcessos.forEach(processo => {
    processo.subprocessos.forEach(subprocesso => {
      todosOsSubprocessos.push(subprocesso);
      subprocesso.tarefas.forEach(tarefa => {
        todasAsTarefas.push(tarefa);
      });
    });
  });

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Visão geral dos processos corporativos</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <CardProcesso 
          titulo="Todos os Processos" 
          quantidade={total}
          variacao={12}
          className="bg-processo-todos"
          iconRight={<ChartBarIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Estratégicos" 
          quantidade={estrategicos}
          variacao={8}
          className="bg-processo-estrategicos"
          iconRight={<ChartPieIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Táticos" 
          quantidade={taticos}
          variacao={-3}
          className="bg-processo-taticos"
          iconRight={<ClipboardListIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Operacionais" 
          quantidade={operacionais}
          variacao={15}
          className="bg-processo-operacionais"
          iconRight={<UsersIcon size={20} />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <GraficoProcessos />
            
            {/* Seção de Subprocessos */}
            <Card className="bg-white p-6 max-h-[400px] flex flex-col">
              <h3 className="text-lg font-semibold mb-4">Subprocessos:</h3>
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
              <h3 className="text-lg font-semibold mb-4">Tarefas:</h3>
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
          <h3 className="text-lg font-semibold mb-4">Processos</h3>
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
                  {todosOsProcessos.map((processo) => (
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
