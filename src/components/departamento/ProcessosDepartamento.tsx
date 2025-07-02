import React from 'react';
import { TrendingUp, DollarSign, FileCheck, BarChart3, Calculator, CreditCard, PieChart, Receipt, 
         Truck, ShoppingCart, Users, Monitor, FileText, Phone, Store, Package, Headphones,
         BarChart2, Repeat, FileSearch, Clock, AlertCircle, ListOrdered, ShoppingBag, Target,
         UserPlus, Gift, LayoutGrid, Search, CalendarCheck, Megaphone, Camera, Edit, Folder,
         Inbox, ClipboardPlus, CheckCircle } from 'lucide-react';

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
        nome: 'Operações no Sistema Aftersale',
        descricao: 'Demanda de atualização cadastral ou necessidade de extração/atualização de dados referentes a devoluções e reversas via plataforma Aftersale',
        icon: Package,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
      {
        id: 'LOG-002',
        nome: 'Chamados Técnicos e Operacionais',
        descricao: 'Processamento e envio de pedidos',
        icon: Headphones,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
       {
        id: 'LOG-003',
        nome: 'Integrações com Correios (CWS)',
        descricao: 'Processamento e envio de pedidos',
        icon: Truck,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
       {
        id: 'LOG-004',
        nome: 'Análise Operacional com Power BI (IFC)',
        descricao: 'Necessidade de analisar indicadores de operação da Infracommerce.',
        icon: BarChart2,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
       {
        id: 'LOG-005',
        nome: 'Exportação e Tratamento de Reversas IFC',
        descricao: 'Demanda de controle de reversas com base na data de solicitação.',
        icon: Repeat,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
       {
        id: 'LOG-006',
        nome: 'Relatórios de Extravio e Ressarcimento – GFL',
        descricao: 'Identificação de pedidos extraviados, necessidade de solicitar ressarcimento e acompanhar pagamento.',
        icon: FileSearch,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
       {
        id: 'LOG-007',
        nome: 'Pendências de Faturamento e Entrega (VTEX e Infracommerce)',
        descricao: 'Extração de pedidos pendentes e necessidade de análise e atualização de status.',
        icon: Clock,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
       {
        id: 'LOG-008',
        nome: 'Gestão de Pedidos Não Conformes (NC)',
        descricao: 'Exportação de pedidos do Metabase e identificação de pedidos com problemas (erro no faturamento, troca de loja, cancelamento etc.).',
        icon: AlertCircle,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
       {
        id: 'LOG-009',
        nome: 'Exportação e Controle de Pedidos na VTEX',
        descricao: 'Necessidade de consolidar os pedidos da VTEX para análise e atualização de status.',
        icon: ListOrdered,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Operacional'
      },
       {
        id: 'LOG-010',
        nome: 'Logística e Estratégias de Frete na VTEX',
        descricao: 'Demanda de cadastro e manutenção de regras logísticas: docas, políticas de envio, pontos de retirada, tabelas de frete, promoções e taxas.',
        icon: Truck,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
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
        nome: 'Venda através do Canal 3.0',
        descricao: 'Interesse do cliente em comprar um produto disponível no e-commerce.',
        icon: ShoppingBag,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Operacional'
      },
      {
        id: 'VEN-002',
        nome: 'Acompanhamento de Desempenho de Vendas',
        descricao: 'Vendas realizadas nos canais físicos e online.',
        icon: TrendingUp,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Operacional'
      },
      {
        id: 'VEN-003',
        nome: 'Gestão de Metas de Vendas 3.0',
        descricao: 'Definição das metas de vendas do Canal 3.0 pela diretoria',
        icon: Target,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Tático'
      },
      {
        id: 'VEN-004',
        nome: 'Cadastro de Loja e Vendedor no Sales App',
        descricao: 'Solicitação de cadastro de nova loja ou novo vendedor para atuação no Canal de Vendas 3.0',
        icon: UserPlus,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Operacional'
      },
      {
        id: 'VEN-005',
        nome: 'Campanhas de Pontuação com o App Receba',
        descricao: 'Disponibilização de valor mensal para campanhas de incentivo.',
        icon: Gift,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Tático'
      },
      {
        id: 'VEN-006',
        nome: 'Troca de Maquininha Stone',
        descricao: 'Identificação de necessidade de troca por defeito ou erro.',
        icon: CreditCard,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Operacional'
      },
      {
        id: 'VEN-007',
        nome: 'Gerenciamento de Vitrines no Sales App',
        descricao: 'Atualizações de promoções e campanhas nos sites.',
        icon: LayoutGrid,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Tático'
      },
      {
        id: 'VEN-008',
        nome: 'Como Vender dentro do Sales App',
        descricao: 'Interesse do cliente em realizar uma compra presencialmente na loja, utilizando o Sales App.',
        icon: ShoppingBag,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Operacional'
      },
      {
        id: 'VEN-009',
        nome: 'Consulta de Desempenho das Lojas',
        descricao: 'Vendas realizadas nas lojas e canais digitais.',
        icon: BarChart2,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Tático'
      },
      {
        id: 'VEN-010',
        nome: 'Identificação de Vendas IFC ou Loja',
        descricao: 'Pedido ou necessidade de identificar a origem da venda: Infracommerce ou Loja Física.',
        icon: Search,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Operacional'
      },
      {
        id: 'VEN-011',
        nome: 'Consulta Detalhada de Pedidos na VTEX',
        descricao: 'Solicitação de consulta de pedido por cliente ou gestão.',
        icon: FileSearch,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
        nivel: 'Operacional'
      }
    ],
    'Visual Merchandising': [
      {
        id: 'VM-001',
        nome: 'Planejamento e Execução de Campanhas no Canal Digital',
        descricao: 'Definição de calendário comercial e proposta de ações promocionais enviadas por Marketing, Cadastro ou Comercial.',
        icon: CalendarCheck,
        cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
        nivel: 'Tático'
      },
      {
        id: 'VM-002',
        nome: ' Criação e Publicação de Campanhas na VTEX e DECO',
        descricao: 'Briefing aprovado com materiais visuais entregues pelo time de design para publicação no site e/ou app',
        icon: Megaphone,
        cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
        nivel: 'Operacional'
      },
      {
        id: 'VM-003',
        nome: 'Solicitação de Produtos para Fotografia no Estúdio ',
        descricao: 'Demanda de produto a ser fotografado, solicitada por setores como: Cadastro, Marketing, Comercial, Visual Merchandising ou Diretoria.',
        icon: Camera,
        cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
        nivel: 'Operacional'
       },
      {
        id: 'VM-004',
        nome: 'Fotografia e Edição de Imagens no Estúdio',
        descricao: 'Produto registrado em planilha e preparado para fotografia, com finalidade de uso em VTEX, marketing, campanhas ou redes sociais.',
        icon: Edit,
        cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
        nivel: 'Operacional'
       },
      {
        id: 'VM-005',
        nome: 'Organização, Renomeação e Armazenamento das Fotos no Drive',
        descricao: 'Fotos editadas e finalizadas, oriundas do processo de fotografia no estúdio.',
        icon: Folder,
        cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
        nivel: 'Operacional'
       },
      {
        id: 'VM-006',
        nome: 'Transferência de Produtos para Lojas Após Fotografia',
        descricao: 'Produtos fotografados e prontos para devolução ou envio a lojas específicas, conforme direcionamento do solicitante ou política de giro de estoque.',
        icon: Package,
        cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
        nivel: 'Operacional'
       },
      {
        id: 'VM-007',
        nome: 'Recebimento e Inclusão de Produtos no Estúdio (Marcas Próprias e Multimarcas)',
        descricao: 'Chegada de novos produtos ao estúdio, enviados por fornecedores, marcas próprias ou time de cadastro para fotografia.',
        icon: Inbox,
        cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
        nivel: 'Operacional'
       }
      ],
    'Cadastro': [
      {
        id: 'CAD-001',
        nome: 'Cadastro de Produto 1P ',
        descricao: 'Produto marcado como "Pronto para cadastro" na planilha de cadastro (Coluna AE).',
        icon: ClipboardPlus,
        cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
        nivel: 'Operacional'
      },
      {
        id: 'CAD-002',
        nome: 'Cadastro de Produto 3P IN',
        descricao: 'Produto cadastrado na plataforma Conecta.Lá, com dados fornecidos pelo time comercial: ID do produto, SKU pai e título base.',
        icon: FileText,
        cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
        nivel: 'Operacional'
      }
    ],
    'SAC': [
      {
        id: 'SAC-001',
        nome: 'Validado',
        descricao: 'Refinamento do processos',
        icon: CheckCircle,
        cor: 'bg-gradient-to-br from-red-500 to-red-600',
        nivel: 'Operacional'
      }
    ],
    'Financeiro': [
      {
        id: 'FIN-EC-001',
        nome: 'Conciliação de Vendas',
        descricao: 'Reconciliação de vendas online',
        icon: CheckCircle,
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
        nome: 'Estruturando...',
        descricao: 'Em coletea dos processos',
        icon: Package,
        cor: 'bg-gradient-to-br from-teal-500 to-teal-600',
        nivel: 'Estratégico'
      }
    ]
  };

  // Função para obter todos os processos do E-commerce
  const obterTodosProcessosEcommerce = () => {
    const todosProcessos: any[] = [];
    Object.values(processosPorPilar).forEach(processos => {
      todosProcessos.push(...processos);
    });
    return todosProcessos;
  };

  // Se é E-commerce, usar a lógica de filtragem por pilar
  if (departamento.toLowerCase().includes('e-commerce')) {
    // Se há um pilar selecionado, mostrar apenas os processos desse pilar
    if (pilarSelecionado) {
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
    } else {
      // Se nenhum pilar está selecionado, mostrar TODOS os processos do E-commerce
      const todosProcessos = obterTodosProcessosEcommerce();
      
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Todos os Processos - E-commerce</h3>
            <p className="text-blue-100">{todosProcessos.length} processos mapeados em todos os pilares</p>
            <p className="text-sm text-blue-200 mt-1">Selecione um pilar acima para filtrar os processos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todosProcessos.map((processo) => {
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
