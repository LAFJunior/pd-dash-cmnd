import React from 'react';
import CardProcesso from '@/components/dashboard/CardProcesso';
import GraficoProcessos from '@/components/dashboard/GraficoProcessos';
import { ChartBarIcon, ChartPieIcon, ClipboardListIcon, UsersIcon } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { useProcessosFIN } from "@/hooks/useProcessosFIN";
import { useSubprocessosFIN } from "@/hooks/useSubprocessosFIN";
import { useTarefasFIN } from "@/hooks/useTarefasFIN";

const Dashboard = () => {
  const { data: processos, isLoading: loadingProcessos } = useProcessosFIN();
  const { data: subprocessos, isLoading: loadingSub } = useSubprocessosFIN();
  const { data: tarefas, isLoading: loadingTarefas } = useTarefasFIN();

  // Agregando os dados por tipo
  const totalProcessos = processos
    ? new Set(
        processos
          .map((p) => p.Processo_ID)
          .filter((id) => id !== null && id !== undefined)
          .map((id) => id!.toString())
      ).size
    : 0;
  const totalEstrategicos = processos
    ? processos.filter((p) => p.Classificação_Nível_Processo === "Estratégico").length
    : 0;
  const totalTaticos = processos
    ? processos.filter((p) => p.Classificação_Nível_Processo === "Tático").length
    : 0;
  const totalOperacionais = processos
    ? processos.filter((p) => p.Classificação_Nível_Processo === "Operacional").length
    : 0;

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Visão geral dos processos corporativos</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <CardProcesso 
          titulo="Todos os Processos" 
          quantidade={loadingProcessos ? "-" : totalProcessos}
          variacao={undefined}
          className="bg-processo-todos"
          iconRight={<ChartBarIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Estratégicos" 
          quantidade={loadingProcessos ? "-" : totalEstrategicos}
          variacao={undefined}
          className="bg-processo-estrategicos"
          iconRight={<ChartPieIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Táticos" 
          quantidade={loadingProcessos ? "-" : totalTaticos}
          variacao={undefined}
          className="bg-processo-taticos"
          iconRight={<ClipboardListIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Operacionais" 
          quantidade={loadingProcessos ? "-" : totalOperacionais}
          variacao={undefined}
          className="bg-processo-operacionais"
          iconRight={<UsersIcon size={20} />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <GraficoProcessos processos={processos} isLoading={loadingProcessos} />
            
            {/* Seção de Tarefas */}
            <Card className="bg-white p-6">
              <h3 className="text-lg font-semibold mb-4">Tarefas</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-20">ID:</TableHead>
                      <TableHead>Descrição:</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loadingTarefas ? (
                      <TableRow>
                        <TableCell colSpan={2}>Carregando...</TableCell>
                      </TableRow>
                    ) : tarefas && tarefas.length > 0 ? (
                      tarefas.slice(0,6).map((tarefa) => (
                        <TableRow key={String(tarefa.Tarefa_ID)}>
                          <TableCell className="font-medium">{tarefa.Tarefa_ID}</TableCell>
                          <TableCell>{tarefa.Descrição_Tarefa}</TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={2}>Nenhuma tarefa encontrada.</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>
            
            {/* Seção de Subprocessos */}
            <Card className="bg-white p-6">
              <h3 className="text-lg font-semibold mb-4">Subprocessos</h3>
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
                    {loadingSub ? (
                      <TableRow>
                        <TableCell colSpan={3}>Carregando...</TableCell>
                      </TableRow>
                    ) : subprocessos && subprocessos.length > 0 ? (
                      subprocessos.slice(0,6).map((sub) => (
                        <TableRow key={String(sub.Subprocesso_ID)}>
                          <TableCell className="font-medium">{sub.Subprocesso_ID}</TableCell>
                          <TableCell>{sub.Nome_Subprocesso}</TableCell>
                          <TableCell className="text-right">
                            <span
                              className={`px-2 py-1 rounded text-xs font-medium ${
                                sub.Classificação_Nível_Subprocesso === 'Estratégico'
                                  ? 'bg-processo-estrategicos/20 text-processo-estrategicos'
                                  : sub.Classificação_Nível_Subprocesso === 'Tático'
                                    ? 'bg-processo-taticos/20 text-processo-taticos'
                                    : 'bg-processo-operacionais/20 text-processo-operacionais'
                              }`}
                            >
                              {sub.Classificação_Nível_Subprocesso}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={3}>Nenhum subprocesso encontrado.</TableCell>
                      </TableRow>
                    )}
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
                {loadingProcessos ? (
                  <TableRow>
                    <TableCell colSpan={3}>Carregando...</TableCell>
                  </TableRow>
                ) : processos && processos.length > 0 ? (
                  processos.slice(0,10).map((processo) => (
                    <TableRow key={String(processo.Processo_ID)}>
                      <TableCell>{processo.Nome_Processo}</TableCell>
                      <TableCell className="text-center">{processo.Processo_ID}</TableCell>
                      <TableCell className="text-right">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            processo.Classificação_Nível_Processo === 'Estratégico'
                              ? 'bg-processo-estrategicos/20 text-processo-estrategicos'
                              : processo.Classificação_Nível_Processo === 'Tático'
                                ? 'bg-processo-taticos/20 text-processo-taticos'
                                : 'bg-processo-operacionais/20 text-processo-operacionais'
                          }`}
                        >
                          {processo.Classificação_Nível_Processo}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={3}>Nenhum processo encontrado.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
