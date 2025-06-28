
import React from 'react';
import { TrendingUp, DollarSign, FileCheck, BarChart3, Calculator, CreditCard, PieChart, Receipt } from 'lucide-react';

interface ProcessosDepartamentoProps {
  departamento: string;
}

const ProcessosDepartamento: React.FC<ProcessosDepartamentoProps> = ({ departamento }) => {
  if (departamento.toLowerCase().includes('financeiro')) {
    const processos = [
      {
        id: 'FIN-1.1',
        nome: 'Recebimento e controle de despesas a pagar',
        descricao: 'Controle e monitoramento do fluxo financeiro',
        icon: TrendingUp,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.2', 
        nome: 'Organização e análise das despesas a pagar',
        descricao: 'Gerenciamento de pagamentos a fornecedores',
        icon: DollarSign,
        cor: 'bg-gradient-to-br from-green-500 to-green-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.3',
        nome: 'Pagamento das despesas',
        descricao: 'Controle de recebimentos de clientes',
        icon: Receipt,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600', 
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.4',
        nome: 'Gestão das duplicatas',
        descricao: 'Reconciliação de movimentações bancárias',
        icon: FileCheck,
        cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.5',
        nome: 'Pagamento das duplicatas',
        descricao: 'Geração de indicadores financeiros',
        icon: BarChart3,
        cor: 'bg-gradient-to-br from-teal-500 to-teal-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.6',
        nome: 'Pagamento de duplicatas via CNAB',
        descricao: 'Elaboração e controle do orçamento',
        icon: Calculator,
        cor: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.7',
        nome: 'Gestão de divergências e correções com fornecedores',
        descricao: 'Controle de cartões corporativos',
        icon: CreditCard,
        cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.8',
        nome: 'Gestão de Protestos Financeiros',
        descricao: 'Controle de inadimplências financeiras',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      }
      {
        id: 'FIN-1.9',
        nome: 'Cancelamento de Notas Fiscais',
        descricao: 'Validação de informações fiscais',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      }
      {
        id: 'FIN-1.10',
        nome: 'Controle do Fluxo de Caixa Realizado',
        descricao: 'Monitoramento de KPIs financeiros',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      }
      {
        id: 'FIN-1.11',
        nome: 'Utilização do Sistema Seta, OSCAR e ABYS',
        descricao: 'Sistemas externos',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      }
      {
        id: 'FIN-1.12',
        nome: 'Pagamentos de despesas das franquias, Arezzo, Ana Capri, Usaflex, Victor Hugo e Democrata',
        descricao: 'Realização de pagamentos dentro dos prazos estimados',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      }
      {
        id: 'FIN-1.13',
        nome: 'Pagamentos de fornecedores das franquias, Arezzo, Ana Capri, Usaflex, Victor Hugo e Democrata',
        descricao: 'Realização de pagamentos dentro dos prazos estimados',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      }
      {
        id: 'FIN-1.14',
        nome: 'Gestão Financeira de Licenciada, Diadora',
        descricao: 'Controle de conta a pagar e receber',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
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
