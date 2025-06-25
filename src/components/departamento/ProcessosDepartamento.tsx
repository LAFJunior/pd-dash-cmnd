
import React from 'react';
import { TrendingUp, DollarSign, FileCheck, BarChart3, Calculator, CreditCard, PieChart, Receipt } from 'lucide-react';

interface ProcessosDepartamentoProps {
  departamento: string;
}

const ProcessosDepartamento: React.FC<ProcessosDepartamentoProps> = ({ departamento }) => {
  if (departamento.toLowerCase().includes('financeiro')) {
    const processos = [
      {
        id: 'FIN-001',
        nome: 'Gestão de Fluxo de Caixa',
        descricao: 'Controle e monitoramento do fluxo financeiro',
        icon: TrendingUp,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Estratégico'
      },
      {
        id: 'FIN-002', 
        nome: 'Contas a Pagar',
        descricao: 'Gerenciamento de pagamentos a fornecedores',
        icon: DollarSign,
        cor: 'bg-gradient-to-br from-green-500 to-green-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-003',
        nome: 'Contas a Receber',
        descricao: 'Controle de recebimentos de clientes',
        icon: Receipt,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600', 
        nivel: 'Operacional'
      },
      {
        id: 'FIN-004',
        nome: 'Conciliação Bancária',
        descricao: 'Reconciliação de movimentações bancárias',
        icon: FileCheck,
        cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-005',
        nome: 'Relatórios Gerenciais',
        descricao: 'Geração de indicadores financeiros',
        icon: BarChart3,
        cor: 'bg-gradient-to-br from-teal-500 to-teal-600',
        nivel: 'Tático'
      },
      {
        id: 'FIN-006',
        nome: 'Planejamento Orçamentário',
        descricao: 'Elaboração e controle do orçamento',
        icon: Calculator,
        cor: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
        nivel: 'Estratégico'
      },
      {
        id: 'FIN-007',
        nome: 'Gestão de Cartões',
        descricao: 'Controle de cartões corporativos',
        icon: CreditCard,
        cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-008',
        nome: 'Análise de Indicadores',
        descricao: 'Monitoramento de KPIs financeiros',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Tático'
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-blue-100">Departamento Financeiro - {processos.length} processos mapeados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processos.map((processo) => {
            const IconComponent = processo.icon;
            return (
              <div
                key={processo.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className={`${processo.cor} p-4`}>
                  <div className="flex items-center justify-between text-white">
                    <IconComponent size={24} />
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">
                      {processo.id}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {processo.nome}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {processo.descricao}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                        processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {processo.nivel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <FileCheck className="mx-auto mb-4 text-gray-400" size={48} />
      <p className="text-gray-600">Processos não disponíveis para este departamento.</p>
    </div>
  );
};

export default ProcessosDepartamento;
