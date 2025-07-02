
import React from 'react';
import { TrendingUp, DollarSign, FileCheck, BarChart3, Calculator, CreditCard, PieChart, Receipt, 
         Truck, ShoppingCart, Users, Monitor, FileText, Phone, Store, Package } from 'lucide-react';

interface ProcessosDepartamentoProps {
  departamento: string;
  pilarSelecionado?: string;
}

const ProcessosDepartamento: React.FC<ProcessosDepartamentoProps> = ({ departamento, pilarSelecionado }) => {
  // Processos específicos por pilar do E-commerce
  const processosPorPilar: {[key: string]: any[]} = {
    'Logística': [
      {
        id: 'LOG-001',
        nome: 'Gestão de Estoque',
        descricao: 'Controle e monitoramento do estoque',
        icon: Package,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
      {
        id: 'LOG-002',
        nome: 'Expedição de Pedidos',
        descricao: 'Processamento e envio de pedidos',
        icon: Truck,
        cor: 'bg-gradient-to-br from-green-500 to-green-600',
        nivel: 'Operacional'
      }
    ],
    'Comercial 1P': [
      {
        id: 'COM-001',
        nome: 'Gestão de Produtos',
        descricao: 'Planejamento e gestão do portfólio 1P',
        icon: ShoppingCart,
        cor: 'bg-gradient-to-br from-green-500 to-green-600',
        nivel: 'Estratégico'
      },
      {
        id: 'COM-002',
        nome: 'Precificação',
        descricao: 'Definição de preços competitivos',
        icon: DollarSign,
        cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
        nivel: 'Tático'
      }
    ],
    'Vendedor 3.0': [
      {
        id: 'VEN-001',
        nome: 'Atendimento Consultivo',
        descricao: 'Consultoria especializada aos clientes',
        icon: Users,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Operacional'
      }
    ],
    'Visual Merchandising': [
      {
        id: 'VM-001',
        nome: 'Layout da Loja Online',
        descricao: 'Criação e otimização do layout',
        icon: Monitor,
        cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
        nivel: 'Tático'
      }
    ],
    'Cadastro': [
      {
        id: 'CAD-001',
        nome: 'Cadastro de Produtos',
        descricao: 'Inclusão e atualização de produtos',
        icon: FileText,
        cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
        nivel: 'Operacional'
      }
    ],
    'SAC': [
      {
        id: 'SAC-001',
        nome: 'Atendimento ao Cliente',
        descricao: 'Suporte e resolução de dúvidas',
        icon: Phone,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      }
    ],
    'Financeiro': [
      {
        id: 'FIN-EC-001',
        nome: 'Conciliação de Vendas',
        descricao: 'Reconciliação de vendas online',
        icon: DollarSign,
        cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
        nivel: 'Operacional'
      }
    ],
    'Marketplace': [
      {
        id: 'MKT-001',
        nome: 'Gestão de Marketplaces',
        descricao: 'Operação em plataformas externas',
        icon: Store,
        cor: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
        nivel: 'Estratégico'
      }
    ],
    'Produto': [
      {
        id: 'PRD-001',
        nome: 'Desenvolvimento de Produto',
        descricao: 'Criação e melhoria de produtos',
        icon: Package,
        cor: 'bg-gradient-to-br from-teal-500 to-teal-600',
        nivel: 'Estratégico'
      }
    ]
  };

  // Se há um pilar selecionado e é E-commerce, mostrar processos específicos
  if (pilarSelecionado && departamento.toLowerCase().includes('e-commerce')) {
    const processosPilar = processosPorPilar[pilarSelecionado] || [];
    
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-600 to-purple-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Processos - {pilarSelecionado}</h3>
          <p className="text-orange-100">{processosPilar.length} processos mapeados</p>
        </div>

        {processosPilar.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processosPilar.map((processo) => {
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
        ) : (
          <div className="bg-gray-50 p-6 rounded-lg text-center">
            <FileCheck className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600">Processos em desenvolvimento para este pilar.</p>
          </div>
        )}
      </div>
    );
  }

  // Processos originais do Financeiro
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
