import React from 'react';
import { Search, CheckCircle } from 'lucide-react';

interface PilaresAuditoriaProps {
  onPilarSelect: (pilar: string) => void;
  pilarSelecionado: string;
}

const PilaresAuditoria: React.FC<PilaresAuditoriaProps> = ({ onPilarSelect, pilarSelecionado }) => {
  const pilares = [
    { nome: 'Auditor', icon: Search, cor: 'bg-blue-500 hover:bg-blue-600' },
    { nome: 'Conferente', icon: CheckCircle, cor: 'bg-green-500 hover:bg-green-600' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
  );
};

export default PilaresAuditoria;