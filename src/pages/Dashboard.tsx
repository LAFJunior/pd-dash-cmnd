
import React from 'react';
import CardProcesso from '@/components/dashboard/CardProcesso';
import GraficoProcessos from '@/components/dashboard/GraficoProcessos';
import { ChartBarIcon, ChartPieIcon, ClipboardListIcon, UsersIcon } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { useProcessosCount } from '@/hooks/useProcessosCount';
import { todosOsProcessos } from '@/data/processos';

const Dashboard = () => {
  const { total, estrategicos, taticos, operacionais } = useProcessosCount();

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
            
            {/* Seção de Tarefas */}
            <Card className="bg-white p-6">
              <h3 className="text-lg font-semibold mb-4">Tarefas:</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-20">ID:</TableHead>
                      <TableHead>Descrição:</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: 'TRF-001', descricao: 'Revisar documentação' },
                      { id: 'TRF-002', descricao: 'Atualizar mapeamento de processos' },
                      { id: 'TRF-003', descricao: 'Implementar melhorias no fluxo' },
                      { id: 'TRF-004', descricao: 'Validar com stakeholders' },
                    ].map((tarefa) => (
                      <TableRow key={tarefa.id}>
                        <TableCell className="font-medium">{tarefa.id}</TableCell>
                        <TableCell>{tarefa.descricao}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
            
            {/* Seção de Subprocessos */}
            <Card className="bg-white p-6">
              <h3 className="text-lg font-semibold mb-4">Subprocessos:</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-20">ID:</TableHead>
                      <TableHead>Nome:</TableHead>
                      <TableHead className="w-32 text-right">Nível:</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { id: 'SUB-101', nome: 'Análise de Requisitos', nivel: 'Tático' },
                      { id: 'SUB-102', nome: 'Gerenciamento de Indicadores', nivel: 'Estratégico' },
                      { id: 'SUB-103', nome: 'Atendimento ao Cliente', nivel: 'Operacional' },
                      { id: 'SUB-104', nome: 'Controle de Qualidade', nivel: 'Operacional' },
                    ].map((subprocesso) => (
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
            </Card>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 max-h-[600px] flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Processos</h3>
          <div className="overflow-x-auto flex-1">
            <div className="max-h-[500px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100/50 [&::-webkit-scrollbar-thumb]:bg-gray-300/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb:hover]:bg-gray-400/50">
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
