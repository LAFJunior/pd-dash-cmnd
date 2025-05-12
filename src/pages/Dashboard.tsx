
import React from 'react';
import CardProcesso from '@/components/dashboard/CardProcesso';
import GraficoProcessos from '@/components/dashboard/GraficoProcessos';
import { ChartBarIcon, ChartPieIcon, ClipboardListIcon, UsersIcon } from 'lucide-react';

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
          <h3 className="text-lg font-semibold mb-4">Processos Recentes</h3>
          <div className="space-y-4">
            {[
              { id: 'PRO-1245', nome: 'Planejamento Orçamentário 2025', tipo: 'Estratégico', status: 'Em andamento' },
              { id: 'PRO-1244', nome: 'Contratação de Desenvolvedores', tipo: 'Tático', status: 'Concluído' },
              { id: 'PRO-1243', nome: 'Implantação do Sistema CRM', tipo: 'Operacional', status: 'Atrasado' },
              { id: 'PRO-1242', nome: 'Revisão da Política de RH', tipo: 'Estratégico', status: 'Em andamento' },
            ].map((processo) => (
              <div key={processo.id} className="flex justify-between items-center p-3 border-b last:border-0">
                <div>
                  <div className="font-medium">{processo.nome}</div>
                  <div className="text-sm text-gray-500">{processo.id}</div>
                </div>
                <div className="flex items-center">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      processo.tipo === 'Estratégico' ? 'bg-processo-estrategicos/20 text-processo-estrategicos' :
                      processo.tipo === 'Tático' ? 'bg-processo-taticos/20 text-processo-taticos' :
                      'bg-processo-operacionais/20 text-processo-operacionais'
                    }`}
                  >
                    {processo.tipo}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-blue-600 text-sm font-medium hover:underline">
            Ver todos os processos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
