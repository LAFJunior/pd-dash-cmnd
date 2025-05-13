
import React from 'react';
import CardProcesso from '@/components/dashboard/CardProcesso';
import GraficoProcessos from '@/components/dashboard/GraficoProcessos';
import { ChartBarIcon, ChartPieIcon, ClipboardListIcon, UsersIcon } from 'lucide-react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

const Dashboard = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-500">Visão geral dos processos corporativos</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <CardProcesso 
          titulo="Todos os Processos" 
          quantidade={156}
          variacao={12}
          className="bg-processo-todos"
          iconRight={<ChartBarIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Estratégicos" 
          quantidade={42}
          variacao={8}
          className="bg-processo-estrategicos"
          iconRight={<ChartPieIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Táticos" 
          quantidade={58}
          variacao={-3}
          className="bg-processo-taticos"
          iconRight={<ClipboardListIcon size={20} />}
        />
        
        <CardProcesso 
          titulo="Processos Operacionais" 
          quantidade={87}
          variacao={15}
          className="bg-processo-operacionais"
          iconRight={<UsersIcon size={20} />}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GraficoProcessos />
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
                {[
                  { id: 'PRO-1245', nome: 'Planejamento Orçamentário 2025', tipo: 'Estratégico' },
                  { id: 'PRO-1244', nome: 'Contratação de Desenvolvedores', tipo: 'Tático' },
                  { id: 'PRO-1243', nome: 'Implantação do Sistema CRM', tipo: 'Operacional' },
                  { id: 'PRO-1242', nome: 'Revisão da Política de RH', tipo: 'Estratégico' },
                  { id: 'PRO-1241', nome: 'Gestão Financeira de Processos', tipo: 'Operacional' },
                  { id: 'PRO-1240', nome: 'Controle do Fluxo de Despesas', tipo: 'Operacional' },
                ].map((processo) => (
                  <TableRow key={processo.id}>
                    <TableCell>{processo.nome}</TableCell>
                    <TableCell className="text-center">{processo.id.split('-')[1]}</TableCell>
                    <TableCell className="text-right">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          processo.tipo === 'Estratégico' ? 'bg-processo-estrategicos/20 text-processo-estrategicos' :
                          processo.tipo === 'Tático' ? 'bg-processo-taticos/20 text-processo-taticos' :
                          'bg-processo-operacionais/20 text-processo-operacionais'
                        }`}
                      >
                        {processo.tipo}
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
