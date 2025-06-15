
import React from 'react';
import CardProcesso from '@/components/dashboard/CardProcesso';
import GraficoProcessos from '@/components/dashboard/GraficoProcessos';
import { ChartBarIcon, ChartPieIcon, ClipboardListIcon, UsersIcon } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { useFINData } from '@/hooks/useFINData';

const Dashboard = () => {
  const { data: finData, isLoading, error } = useFINData();

  console.log('Dashboard - finData:', finData);
  console.log('Dashboard - isLoading:', isLoading);
  console.log('Dashboard - error:', error);

  // Processar dados para os cards
  const todosProcessos = finData?.length || 0;
  const processosEstrategicos = finData?.filter(item => 
    item['Classificação_Nível_Processo']?.toLowerCase().includes('estratég')
  ).length || 0;
  const processosTaticos = finData?.filter(item => 
    item['Classificação_Nível_Processo']?.toLowerCase().includes('tát')
  ).length || 0;
  const processosOperacionais = finData?.filter(item => 
    item['Classificação_Nível_Processo']?.toLowerCase().includes('operacion')
  ).length || 0;

  if (isLoading) {
    return (
      <div className="animate-fade-in">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-500">Carregando dados dos processos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="animate-fade-in">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-red-500">Erro ao carregar dados: {error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Visão geral dos processos corporativos</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <CardProcesso 
          titulo="Todos os Processos" 
          quantidade={todosProcessos}
          variacao={12}
          className="bg-processo-todos"
          iconRight={<ChartBarIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Estratégicos" 
          quantidade={processosEstrategicos}
          variacao={8}
          className="bg-processo-estrategicos"
          iconRight={<ChartPieIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Táticos" 
          quantidade={processosTaticos}
          variacao={-3}
          className="bg-processo-taticos"
          iconRight={<ClipboardListIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Operacionais" 
          quantidade={processosOperacionais}
          variacao={15}
          className="bg-processo-operacionais"
          iconRight={<UsersIcon size={20} />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <GraficoProcessos finData={finData} />
            
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
                    {finData?.slice(0, 4).map((item, index) => (
                      <TableRow key={`tarefa-${index}`}>
                        <TableCell className="font-medium">TRF-{String(index + 1).padStart(3, '0')}</TableCell>
                        <TableCell>{item.Descrição || item.Nome_Processo}</TableCell>
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
                    {finData?.slice(0, 4).map((item, index) => (
                      <TableRow key={`subprocesso-${index}`}>
                        <TableCell className="font-medium">SUB-{String(index + 101)}</TableCell>
                        <TableCell>{item.Nome_Processo}</TableCell>
                        <TableCell className="text-right">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              item['Classificação_Nível_Processo']?.toLowerCase().includes('estratég') ? 'bg-processo-estrategicos/20 text-processo-estrategicos' :
                              item['Classificação_Nível_Processo']?.toLowerCase().includes('tát') ? 'bg-processo-taticos/20 text-processo-taticos' :
                              'bg-processo-operacionais/20 text-processo-operacionais'
                            }`}
                          >
                            {item['Classificação_Nível_Processo']}
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
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Processos</h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome Processo</TableHead>
                  <TableHead className="w-20 text-center">ID</TableHead>
                  <TableHead className="w-32 text-right">Nível</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {finData?.map((processo, index) => (
                  <TableRow key={`processo-${index}`}>
                    <TableCell>{processo.Nome_Processo}</TableCell>
                    <TableCell className="text-center">{processo.Processo_ID}</TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          processo['Classificação_Nível_Processo']?.toLowerCase().includes('estratég') ? 'bg-processo-estrategicos/20 text-processo-estrategicos' :
                          processo['Classificação_Nível_Processo']?.toLowerCase().includes('tát') ? 'bg-processo-taticos/20 text-processo-taticos' :
                          'bg-processo-operacionais/20 text-processo-operacionais'
                        }`}
                      >
                        {processo['Classificação_Nível_Processo']}
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
  );
};

export default Dashboard;
