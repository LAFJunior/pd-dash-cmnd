
import React from 'react';
import { Store, Search, Scale, FileText, TrendingUp } from 'lucide-react';

interface PilaresControladoriaProps {
  onPilarSelect: (pilar: string) => void;
  pilarSelecionado: string;
}

const PilaresControladoria: React.FC<PilaresControladoriaProps> = ({ onPilarSelect, pilarSelecionado }) => {
  const pilares = [
    { nome: 'Apoio a loja', icon: Store, cor: 'bg-blue-500 hover:bg-blue-600' },
    { nome: 'Auditoria', icon: Search, cor: 'bg-green-500 hover:bg-green-600' },
    { nome: 'Conciliação', icon: Scale, cor: 'bg-purple-500 hover:bg-purple-600' },
    { nome: 'Contrato e despesas', icon: FileText, cor: 'bg-orange-500 hover:bg-orange-600' },
    { nome: 'Recuperação de receitas', icon: TrendingUp, cor: 'bg-red-500 hover:bg-red-600' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

export default PilaresControladoria;
