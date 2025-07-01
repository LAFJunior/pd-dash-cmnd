
import React from 'react';
import { ArrowRight, FileText, CheckCircle, AlertCircle, Send, Archive, ShoppingCart, Calculator, Building, Truck, AlertTriangle, Package, CreditCard, BarChart3 } from 'lucide-react';

interface FluxoDepartamentoProps {
  departamento: string;
}

const FluxoDepartamento: React.FC<FluxoDepartamentoProps> = ({ departamento }) => {
  const deptLower = departamento.toLowerCase();

  if (deptLower.includes('financeiro')) {
    return (
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Fluxo de Processos Financeiros</h3>
        
        <div className="space-y-6">
          {/* Linha 1 */}
          <div className="flex items-center justify-between">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <FileText className="text-blue-600" size={20} />
              <div>
                <h4 className="font-medium">Recebimento</h4>
                <p className="text-xs text-gray-600">Documentos/Dados</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <AlertCircle className="text-orange-600" size={20} />
              <div>
                <h4 className="font-medium">Análise</h4>
                <p className="text-xs text-gray-600">Validação/Conferência</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <CheckCircle className="text-green-600" size={20} />
              <div>
                <h4 className="font-medium">Aprovação</h4>
                <p className="text-xs text-gray-600">Decisão/Autorização</p>
              </div>
            </div>
          </div>

          {/* Seta para baixo */}
          <div className="flex justify-center">
            <div className="w-px h-8 bg-gray-300 relative">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-l-transparent border-r-transparent border-t-gray-300"></div>
              </div>
            </div>
          </div>

          {/* Linha 2 */}
          <div className="flex items-center justify-between">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <Send className="text-purple-600" size={20} />
              <div>
                <h4 className="font-medium">Execução</h4>
                <p className="text-xs text-gray-600">Processamento</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <CheckCircle className="text-teal-600" size={20} />
              <div>
                <h4 className="font-medium">Controle</h4>
                <p className="text-xs text-gray-600">Monitoramento</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <Archive className="text-indigo-600" size={20} />
              <div>
                <h4 className="font-medium">Arquivo</h4>
                <p className="text-xs text-gray-600">Documentação</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white/60 rounded-lg p-4">
          <p className="text-sm text-center text-gray-700">
            <strong>Processo BPMN:</strong> Fluxo padronizado para garantir conformidade e controle financeiro
          </p>
        </div>
      </div>
    );
  }

  if (deptLower.includes('e-commerce') || deptLower.includes('ecommerce')) {
    return (
      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Fluxo de Processos E-Commerce</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <ShoppingCart className="text-blue-600" size={20} />
              <div>
                <h4 className="font-medium">Pedido</h4>
                <p className="text-xs text-gray-600">Recebimento</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <CreditCard className="text-green-600" size={20} />
              <div>
                <h4 className="font-medium">Pagamento</h4>
                <p className="text-xs text-gray-600">Validação</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <Package className="text-purple-600" size={20} />
              <div>
                <h4 className="font-medium">Separação</h4>
                <p className="text-xs text-gray-600">Estoque</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <Truck className="text-orange-600" size={20} />
              <div>
                <h4 className="font-medium">Entrega</h4>
                <p className="text-xs text-gray-600">Envio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white/60 rounded-lg p-4">
          <p className="text-sm text-center text-gray-700">
            <strong>Processo E-Commerce:</strong> Fluxo integrado do pedido à entrega
          </p>
        </div>
      </div>
    );
  }

  if (deptLower.includes('fiscal')) {
    return (
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Fluxo de Processos Fiscais</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <FileText className="text-blue-600" size={20} />
              <div>
                <h4 className="font-medium">Documentação</h4>
                <p className="text-xs text-gray-600">Recebimento</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <Calculator className="text-orange-600" size={20} />
              <div>
                <h4 className="font-medium">Cálculo</h4>
                <p className="text-xs text-gray-600">Impostos</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <Send className="text-green-600" size={20} />
              <div>
                <h4 className="font-medium">Envio</h4>
                <p className="text-xs text-gray-600">Órgãos Fiscais</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white/60 rounded-lg p-4">
          <p className="text-sm text-center text-gray-700">
            <strong>Processo Fiscal:</strong> Conformidade tributária e envio de obrigações
          </p>
        </div>
      </div>
    );
  }

  if (deptLower.includes('controladoria')) {
    return (
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Fluxo de Processos de Controladoria</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <BarChart3 className="text-blue-600" size={20} />
              <div>
                <h4 className="font-medium">Coleta</h4>
                <p className="text-xs text-gray-600">Dados</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <AlertCircle className="text-orange-600" size={20} />
              <div>
                <h4 className="font-medium">Análise</h4>
                <p className="text-xs text-gray-600">Indicadores</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <FileText className="text-purple-600" size={20} />
              <div>
                <h4 className="font-medium">Relatório</h4>
                <p className="text-xs text-gray-600">Gerencial</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white/60 rounded-lg p-4">
          <p className="text-sm text-center text-gray-700">
            <strong>Processo Controladoria:</strong> Análise e controle de indicadores de performance
          </p>
        </div>
      </div>
    );
  }

  if (deptLower.includes('são josé dos campos') || deptLower.includes('sao jose dos campos')) {
    return (
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Fluxo de Operações CD - São José dos Campos</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <Package className="text-blue-600" size={20} />
              <div>
                <h4 className="font-medium">Recebimento</h4>
                <p className="text-xs text-gray-600">Mercadorias</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <Building className="text-green-600" size={20} />
              <div>
                <h4 className="font-medium">Armazenagem</h4>
                <p className="text-xs text-gray-600">Estoque</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <AlertCircle className="text-orange-600" size={20} />
              <div>
                <h4 className="font-medium">Separação</h4>
                <p className="text-xs text-gray-600">Pedidos</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <Truck className="text-purple-600" size={20} />
              <div>
                <h4 className="font-medium">Expedição</h4>
                <p className="text-xs text-gray-600">Envio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white/60 rounded-lg p-4">
          <p className="text-sm text-center text-gray-700">
            <strong>Processo CD:</strong> Fluxo logístico completo do centro de distribuição
          </p>
        </div>
      </div>
    );
  }

  if (deptLower.includes('defeito')) {
    return (
      <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Fluxo de Controle de Qualidade</h3>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <AlertTriangle className="text-orange-600" size={20} />
              <div>
                <h4 className="font-medium">Identificação</h4>
                <p className="text-xs text-gray-600">Defeito</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <FileText className="text-blue-600" size={20} />
              <div>
                <h4 className="font-medium">Registro</h4>
                <p className="text-xs text-gray-600">Documentação</p>
              </div>
            </div>
            
            <ArrowRight className="text-gray-400" size={24} />
            
            <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3 min-w-[180px]">
              <CheckCircle className="text-green-600" size={20} />
              <div>
                <h4 className="font-medium">Correção</h4>
                <p className="text-xs text-gray-600">Ação Corretiva</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white/60 rounded-lg p-4">
          <p className="text-sm text-center text-gray-700">
            <strong>Processo Qualidade:</strong> Identificação, registro e correção de não conformidades
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <FileText className="mx-auto mb-4 text-gray-400" size={48} />
      <p className="text-gray-600">Fluxo de processos não disponível para este departamento.</p>
      <p className="text-sm text-gray-500 mt-2">Departamento: {departamento}</p>
    </div>
  );
};

export default FluxoDepartamento;
