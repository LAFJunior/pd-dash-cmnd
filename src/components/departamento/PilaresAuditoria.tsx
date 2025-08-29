import React from 'react';
import { Search, FileCheck } from 'lucide-react';

interface PilaresAuditoriaProps {
  onPilarSelect: (pilar: string) => void;
  pilarSelecionado: string;
}

const PilaresAuditoria: React.FC<PilaresAuditoriaProps> = ({ onPilarSelect, pilarSelecionado }) => {
  const pilares = [
    { nome: 'Auditor', icon: Search, cor: 'bg-blue-500 hover:bg-blue-600' },
    { nome: 'Conferente', icon: FileCheck, cor: 'bg-green-500 hover:bg-green-600' }
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
              text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 
              flex flex-col items-center gap-3 text-center min-h-[120px] justify-center`}
          >
            <IconComponent size={32} />
            <span className="text-lg font-medium">{pilar.nome}</span>
          </button>
        );
      })}
    </div>
  );
};

export default PilaresAuditoria;