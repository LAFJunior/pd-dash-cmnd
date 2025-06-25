
import React from 'react';
import { ArrowRight, FileText, CheckCircle, AlertCircle, Send, Archive } from 'lucide-react';

interface FluxoDepartamentoProps {
  departamento: string;
}

const FluxoDepartamento: React.FC<FluxoDepartamentoProps> = ({ departamento }) => {
  if (departamento.toLowerCase().includes('financeiro')) {
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

  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <FileText className="mx-auto mb-4 text-gray-400" size={48} />
      <p className="text-gray-600">Fluxo de processos não disponível para este departamento.</p>
    </div>
  );
};

export default FluxoDepartamento;
