
import React from 'react';
import { TrendingUp, DollarSign, FileCheck, BarChart3, Calculator, CreditCard, PieChart, Receipt, ShoppingCart, Package, Truck, Building, AlertTriangle, Send, Globe } from 'lucide-react';

interface ProcessosDepartamentoProps {
  departamento: string;
}

const ProcessosDepartamento: React.FC<ProcessosDepartamentoProps> = ({ departamento }) => {
  const deptLower = departamento.toLowerCase();

  if (deptLower.includes('financeiro')) {
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
      },
      {
        id: 'FIN-1.9',
        nome: 'Cancelamento de Notas Fiscais',
        descricao: 'Validação de informações fiscais',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.10',
        nome: 'Controle do Fluxo de Caixa Realizado',
        descricao: 'Monitoramento de KPIs financeiros',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.11',
        nome: 'Utilização do Sistema Seta, OSCAR e ABYS',
        descricao: 'Sistemas externos',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.12',
        nome: 'Pagamentos de despesas das franquias, Arezzo, Ana Capri, Usaflex, Victor Hugo e Democrata',
        descricao: 'Realização de pagamentos dentro dos prazos estimados',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-1.13',
        nome: 'Pagamentos de fornecedores das franquias, Arezzo, Ana Capri, Usaflex, Victor Hugo e Democrata',
        descricao: 'Realização de pagamentos dentro dos prazos estimados',
        icon: PieChart,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      },
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

  if (deptLower.includes('e-commerce') || deptLower.includes('ecommerce')) {
    const processos = [
      {
        id: 'EC-1.1',
        nome: 'Gestão de Catálogo de Produtos',
        descricao: 'Cadastro e atualização de produtos online',
        icon: Package,
        cor: 'bg-gradient-to-br from-orange-500 to-red-600',
        nivel: 'Operacional'
      },
      {
        id: 'EC-1.2',
        nome: 'Gestão de Marketplace',
        descricao: 'Administração de vendas em marketplaces',
        icon: ShoppingCart,
        cor: 'bg-gradient-to-br from-blue-500 to-purple-600',
        nivel: 'Operacional'
      },
      {
        id: 'EC-1.3',
        nome: 'Otimização SEO',
        descricao: 'Melhoria do posicionamento nos buscadores',
        icon: Globe,
        cor: 'bg-gradient-to-br from-green-500 to-teal-600',
        nivel: 'Tático'
      },
      {
        id: 'EC-1.4',
        nome: 'Análise de Performance',
        descricao: 'Monitoramento de KPIs e conversões',
        icon: BarChart3,
        cor: 'bg-gradient-to-br from-purple-500 to-indigo-600',
        nivel: 'Tático'
      },
      {
        id: 'EC-1.5',
        nome: 'Gestão de Pedidos Online',
        descricao: 'Processamento e acompanhamento de pedidos',
        icon: FileCheck,
        cor: 'bg-gradient-to-br from-teal-500 to-cyan-600',
        nivel: 'Operacional'
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-orange-100">Departamento E-Commerce - {processos.length} processos mapeados</p>
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

  if (deptLower.includes('fiscal')) {
    const processos = [
      {
        id: 'FIS-1.1',
        nome: 'Apuração de Impostos',
        descricao: 'Cálculo e apuração de tributos federais e estaduais',
        icon: Calculator,
        cor: 'bg-gradient-to-br from-yellow-500 to-orange-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIS-1.2',
        nome: 'Emissão de Notas Fiscais',
        descricao: 'Geração e envio de documentos fiscais',
        icon: FileCheck,
        cor: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIS-1.3',
        nome: 'Escrituração Fiscal',
        descricao: 'Registro de movimentações nos livros fiscais',
        icon: Receipt,
        cor: 'bg-gradient-to-br from-green-500 to-teal-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIS-1.4',
        nome: 'Entrega de Obrigações Acessórias',
        descricao: 'Envio de declarações aos órgãos fiscais',
        icon: Send,
        cor: 'bg-gradient-to-br from-purple-500 to-pink-600',
        nivel: 'Operacional'
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-yellow-100">Departamento Fiscal - {processos.length} processos mapeados</p>
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

  if (deptLower.includes('controladoria')) {
    const processos = [
      {
        id: 'CTR-1.1',
        nome: 'Análise de Indicadores Financeiros',
        descricao: 'Monitoramento de KPIs e métricas de performance',
        icon: BarChart3,
        cor: 'bg-gradient-to-br from-purple-500 to-indigo-600',
        nivel: 'Tático'
      },
      {
        id: 'CTR-1.2',
        nome: 'Elaboração de Relatórios Gerenciais',
        descricao: 'Criação de dashboards e relatórios executivos',
        icon: FileCheck,
        cor: 'bg-gradient-to-br from-blue-500 to-purple-600',
        nivel: 'Tático'
      },
      {
        id: 'CTR-1.3',
        nome: 'Controle Orçamentário',
        descricao: 'Acompanhamento e análise de desvios orçamentários',
        icon: Calculator,
        cor: 'bg-gradient-to-br from-green-500 to-teal-600',
        nivel: 'Estratégico'
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-purple-100">Departamento Controladoria - {processos.length} processos mapeados</p>
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

  if (deptLower.includes('são josé dos campos') || deptLower.includes('sao jose dos campos')) {
    const processos = [
      {
        id: 'SJC-1.1',
        nome: 'Recebimento de Mercadorias',
        descricao: 'Conferência e entrada de produtos no estoque',
        icon: Package,
        cor: 'bg-gradient-to-br from-teal-500 to-cyan-600',
        nivel: 'Operacional'
      },
      {
        id: 'SJC-1.2',
        nome: 'Controle de Estoque',
        descricao: 'Gestão e monitoramento do inventário',
        icon: Building,
        cor: 'bg-gradient-to-br from-blue-500 to-teal-600',
        nivel: 'Operacional'
      },
      {
        id: 'SJC-1.3',
        nome: 'Separação de Pedidos',
        descricao: 'Picking e preparação de encomendas',
        icon: FileCheck,
        cor: 'bg-gradient-to-br from-green-500 to-blue-600',
        nivel: 'Operacional'
      },
      {
        id: 'SJC-1.4',
        nome: 'Expedição e Entrega',
        descricao: 'Envio e distribuição de produtos',
        icon: Truck,
        cor: 'bg-gradient-to-br from-purple-500 to-pink-600',
        nivel: 'Operacional'
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-teal-100">São José dos Campos (CD/Operações) - {processos.length} processos mapeados</p>
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

  if (deptLower.includes('defeito')) {
    const processos = [
      {
        id: 'DEF-1.1',
        nome: 'Identificação de Não Conformidades',
        descricao: 'Detecção e registro de defeitos em produtos',
        icon: AlertTriangle,
        cor: 'bg-gradient-to-br from-red-500 to-pink-600',
        nivel: 'Operacional'
      },
      {
        id: 'DEF-1.2',
        nome: 'Análise de Causas',
        descricao: 'Investigação das origens dos defeitos',
        icon: BarChart3,
        cor: 'bg-gradient-to-br from-orange-500 to-red-600',
        nivel: 'Tático'
      },
      {
        id: 'DEF-1.3',
        nome: 'Implementação de Ações Corretivas',
        descricao: 'Execução de melhorias e correções',
        icon: FileCheck,
        cor: 'bg-gradient-to-br from-green-500 to-teal-600',
        nivel: 'Tático'
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-red-100">Departamento Defeito - {processos.length} processos mapeados</p>
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
      <p className="text-sm text-gray-500 mt-2">Departamento: {departamento}</p>
    </div>
  );
};

export default ProcessosDepartamento;
