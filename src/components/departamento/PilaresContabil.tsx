import React from 'react';
import { Calculator, FileBarChart } from 'lucide-react';

interface PilaresContabilProps {
  onPilarSelect: (pilar: string) => void;
  pilarSelecionado: string | null;
}

const PilaresContabil: React.FC<PilaresContabilProps> = ({ onPilarSelect, pilarSelecionado }) => {
  const pilares = [
    { nome: 'Operacional', icon: Calculator, cor: 'bg-blue-500 hover:bg-blue-600' },
    { nome: 'Estratégico', icon: FileBarChart, cor: 'bg-green-500 hover:bg-green-600' }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Pilares do Departamento Contábil
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pilares.map((pilar) => {
          const IconComponent = pilar.icon;
          const isSelected = pilarSelecionado === pilar.nome;
          
          return (
            <div
              key={pilar.nome}
              onClick={() => onPilarSelect(pilar.nome)}
              className={`${pilar.cor} text-white p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                isSelected ? 'ring-4 ring-white ring-opacity-50 scale-105' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                <IconComponent size={48} />
                <div>
                  <h4 className="text-xl font-semibold">{pilar.nome}</h4>
                  <p className="text-sm opacity-90 mt-1">
                    {pilar.nome === 'Operacional' 
                      ? 'Processos rotineiros de lançamentos, conciliações e apurações contábeis'
                      : 'Processos estratégicos de fechamento, obrigações acessórias e análises'
                    }
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PilaresContabil;