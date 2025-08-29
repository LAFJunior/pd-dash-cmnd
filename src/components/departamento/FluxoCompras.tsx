import React from 'react';
import { ArrowRight, ClipboardList, Package, Calendar, Warehouse, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const FluxoCompras = () => {
  const etapas = [
    {
      id: 1,
      titulo: "Planejamento",
      subtitulo: "Planejamento de Compras",
      descricao: "Análise de dados, definição de sortimento e planejamento de pedidos por fornecedor",
      icon: ClipboardList,
      cor: "bg-blue-100 text-blue-700",
      processos: ["7.1 - Planejamento de Compras", "7.20 - Controle de OTB e Verba"]
    },
    {
      id: 2,
      titulo: "Pedidos",
      subtitulo: "Programação de Pedido",
      descricao: "Seleção de produtos, distribuição por loja e envio de pedidos aos fornecedores",
      icon: Package,
      cor: "bg-green-100 text-green-700",
      processos: ["7.2 - Programação de Pedidos", "7.3 - Emissão e Envio de Pedidos"]
    },
    {
      id: 3,
      titulo: "Cadastro e Recebimento",
      subtitulo: "Agendamento e Recebimento",
      descricao: "Cadastro de produtos, agendamento de entregas e recebimento de mercadorias",
      icon: Calendar,
      cor: "bg-purple-100 text-purple-700",
      processos: ["7.4 - Cadastro de Produto", "7.5 - Agendamento e Recebimento"]
    },
    {
      id: 4,
      titulo: "Gestão de Estoque e Produtos",
      subtitulo: "Apoio às Lojas e Estoque",
      descricao: "Distribuição, remanejamento e controle de estoque entre lojas e CDs",
      icon: Warehouse,
      cor: "bg-orange-100 text-orange-700",
      processos: ["7.6 - Distribuição aos CDs", "7.7 - Remanejamento", "7.18 - Apoio às Lojas"]
    },
    {
      id: 5,
      titulo: "Campanhas e Performance",
      subtitulo: "VM e Workshops e Conteúdo",
      descricao: "Gestão de campanhas, visual merchandising e análise de performance",
      icon: TrendingUp,
      cor: "bg-pink-100 text-pink-700",
      processos: ["7.11 - Campanhas de Marketing", "7.23 - Workshops", "7.17 - Performance por Categoria"]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Fluxo do Departamento de Compras
        </h2>
        <p className="text-gray-600">
          Processo completo desde o planejamento até a gestão de performance
        </p>
      </div>

      <div className="relative">
        {/* Linha conectora */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 hidden lg:block" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {etapas.map((etapa, index) => (
            <div key={etapa.id} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-3">
                  <div className={`w-16 h-16 rounded-full ${etapa.cor} flex items-center justify-center mx-auto mb-4`}>
                    <etapa.icon size={32} />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-800">
                    {etapa.titulo}
                  </CardTitle>
                  <p className="text-sm text-gray-600 font-medium">
                    {etapa.subtitulo}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-gray-600 mb-4 text-center">
                    {etapa.descricao}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                      Processos Principais:
                    </h4>
                    <ul className="space-y-1">
                      {etapa.processos.map((processo, idx) => (
                        <li key={idx} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded">
                          {processo}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Seta conectora - apenas em telas grandes */}
              {index < etapas.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-200">
                    <ArrowRight size={14} className="text-gray-500" />
                  </div>
                </div>
              )}
              
              {/* Seta para mobile/tablet */}
              {index < etapas.length - 1 && (
                <div className="flex lg:hidden justify-center py-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-200">
                    <ArrowRight size={16} className="text-gray-500 rotate-90" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="bg-gray-50 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Informações do Fluxo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
          <div>
            <strong>Frequência:</strong> Contínuo com ciclos sazonais
          </div>
          <div>
            <strong>Sistemas:</strong> Mega, Power BI, Excel, E-mail
          </div>
          <div>
            <strong>Stakeholders:</strong> Fornecedores, Lojas, CD, Marketing, VM
          </div>
        </div>
      </div>
    </div>
  );
};

export default FluxoCompras;