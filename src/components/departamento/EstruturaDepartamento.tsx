
import React from 'react';
import { User, Crown, Shield, Star, FileText, Calculator } from 'lucide-react';

interface EstruturaDepartamentoProps {
  departamento: string;
}

const EstruturaDepartamento: React.FC<EstruturaDepartamentoProps> = ({ departamento }) => {
  if (departamento.toLowerCase().includes('financeiro')) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Organograma - Departamento Financeiro</h3>
        
        {/* Diretor */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600 text-center min-w-[200px]">
            <Crown className="mx-auto mb-2 text-blue-600" size={24} />
            <h4 className="font-semibold text-gray-800">Diretor Financeiro</h4>
            <p className="text-sm text-gray-600">Nível Estratégico</p>
          </div>
        </div>

        {/* Linha conectora */}
        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Gerente */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600 text-center min-w-[200px]">
            <Shield className="mx-auto mb-2 text-green-600" size={24} />
            <h4 className="font-semibold text-gray-800">Gerente Financeiro</h4>
            <p className="text-sm text-gray-600">Nível Tático</p>
          </div>
        </div>

        {/* Linha conectora */}
        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Analistas e Assistentes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600 text-center">
            <Star className="mx-auto mb-2 text-purple-600" size={20} />
            <h4 className="font-semibold text-gray-800">Analista Financeiro Sr.</h4>
            <p className="text-sm text-gray-600">Nível Operacional</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Assistente Financeiro</h4>
            <p className="text-sm text-gray-600">Nível Operacional</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliar Financeiro</h4>
            <p className="text-sm text-gray-600">Nível Operacional</p>
          </div>
        </div>

        {/* Conectores para o nível operacional */}
        <div className="flex justify-center">
          <div className="flex items-center">
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="w-32 h-px bg-gray-300"></div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <User className="mx-auto mb-4 text-gray-400" size={48} />
      <p className="text-gray-600">Estrutura organizacional não disponível para este departamento.</p>
    </div>
  );
};

export default EstruturaDepartamento;
