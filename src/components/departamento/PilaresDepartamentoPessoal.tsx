import React from 'react';
import { Building, Store } from 'lucide-react';

interface PilaresDepartamentoPessoalProps {
  onPilarSelect: (pilar: string) => void;
  pilarSelecionado: string;
}

const PilaresDepartamentoPessoal: React.FC<PilaresDepartamentoPessoalProps> = ({ onPilarSelect, pilarSelecionado }) => {
  const pilares = [
    { 
      nome: 'Azul', 
      icon: Building, 
      cor: 'bg-blue-500 hover:bg-blue-600',
      detalhes: ['F2', 'Jô Calçados Ltda', 'BackOffice', 'ABYS', 'Blumenau - SC']
    },
    { 
      nome: 'Verde', 
      icon: Store, 
      cor: 'bg-green-500 hover:bg-green-600',
      detalhes: ['F1', 'Oscar Calçados Ltda', 'F3', 'Carioca Calçados Ltda']
    },
    { 
      nome: 'Vermelho', 
      icon: Store, 
      cor: 'bg-red-500 hover:bg-red-600',
      detalhes: ['F4', 'VarejoSul Ltda', 'Paquetá + Gaston', 'F9', 'FRANQUIAS']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pilares.map((pilar) => {
          const IconComponent = pilar.icon;
          const isSelected = pilarSelecionado === pilar.nome;
          
          return (
            <button
              key={pilar.nome}
              onClick={() => onPilarSelect(isSelected ? '' : pilar.nome)}
              className={`${pilar.cor} ${isSelected ? 'ring-4 ring-blue-300 scale-105' : ''} 
                text-white p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 
                flex flex-col items-center gap-2 text-center min-h-[100px] justify-center`}
            >
              <IconComponent size={24} />
              <span className="text-sm font-medium">{pilar.nome}</span>
            </button>
          );
        })}
      </div>

      {/* Detalhes do pilar selecionado */}
      {pilarSelecionado && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">
            Detalhes - {pilarSelecionado}
          </h3>
          <div className="space-y-2">
            {pilares
              .find(p => p.nome === pilarSelecionado)
              ?.detalhes.map((detalhe, index) => (
                <div 
                  key={index}
                  className="bg-white p-2 rounded border text-gray-700 text-sm"
                >
                  {detalhe}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PilaresDepartamentoPessoal;