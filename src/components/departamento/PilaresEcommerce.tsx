
import React from 'react';
import { Truck, ShoppingCart, Users, Monitor, FileText, Phone, DollarSign, Store, Package } from 'lucide-react';

interface PilaresEcommerceProps {
  onPilarSelect: (pilar: string) => void;
  pilarSelecionado: string;
}

const PilaresEcommerce: React.FC<PilaresEcommerceProps> = ({ onPilarSelect, pilarSelecionado }) => {
  const pilares = [
    { nome: 'Logística', icon: Truck, cor: 'bg-blue-500 hover:bg-blue-600' },
    { nome: 'Comercial 1P', icon: ShoppingCart, cor: 'bg-green-500 hover:bg-green-600' },
    { nome: 'Vendedor 3.0', icon: Users, cor: 'bg-purple-500 hover:bg-purple-600' },
    { nome: 'Visual Merchandising', icon: Monitor, cor: 'bg-pink-500 hover:bg-pink-600' },
    { nome: 'Cadastro', icon: FileText, cor: 'bg-orange-500 hover:bg-orange-600' },
    { nome: 'Financeiro', icon: DollarSign, cor: 'bg-yellow-500 hover:bg-yellow-600' },
    { nome: 'Marketplace', icon: Store, cor: 'bg-indigo-500 hover:bg-indigo-600' }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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

export default PilaresEcommerce;
