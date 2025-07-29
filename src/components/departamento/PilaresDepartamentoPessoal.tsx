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
      detalhes: [
        { codigo: 'F2', empresa: 'Jô Calçados\nLtda' },
        { codigo: '', empresa: 'BackOffice' },
        { codigo: '', empresa: 'ABYS\nO&A' },
        { codigo: 'F7', empresa: '053/052' }
      ]
    },
    { 
      nome: 'Verde', 
      icon: Store, 
      cor: 'bg-green-500 hover:bg-green-600',
      detalhes: [
        { codigo: 'F1', empresa: 'Oscar Calçados\nLtda' },
        { codigo: 'F3', empresa: 'Carioca Calçados\nLtda' },
        { codigo: 'F7', empresa: 'Oscar/Sport' }
      ]
    },
    { 
      nome: 'Vermelho', 
      icon: Store, 
      cor: 'bg-red-500 hover:bg-red-600',
      detalhes: [
        { codigo: 'F4', empresa: 'VarejoSul Ltda\nPaquetá' },
        { codigo: 'F4', empresa: 'VarejoSul Ltda\nGaston' },
        { codigo: 'F9', empresa: 'FRANQUIAS' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Building className="text-orange-500" size={20} />
        <h2 className="text-lg font-semibold text-gray-800">Pilares do Departamento Pessoal</h2>
      </div>
      
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
          <div className="grid grid-cols-1 gap-2">
            {pilares
              .find(p => p.nome === pilarSelecionado)
              ?.detalhes.map((detalhe, index) => (
                <div 
                  key={index}
                  className="bg-white p-3 rounded border text-gray-700 text-sm flex items-start gap-3"
                >
                  {detalhe.codigo && (
                    <span className="font-medium text-gray-600 min-w-[30px]">
                      {detalhe.codigo}
                    </span>
                  )}
                  <span className="whitespace-pre-line leading-tight">
                    {detalhe.empresa}
                  </span>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Componente de demonstração
const App = () => {
  const [pilarSelecionado, setPilarSelecionado] = React.useState('Azul');

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <PilaresDepartamentoPessoal 
        onPilarSelect={setPilarSelecionado}
        pilarSelecionado={pilarSelecionado}
      />
    </div>
  );
};

export default App;
