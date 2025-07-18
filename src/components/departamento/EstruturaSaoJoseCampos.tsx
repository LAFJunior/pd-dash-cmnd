import React from 'react';
import { 
  User, 
  Users, 
  Crown, 
  Star, 
  Shield, 
  Briefcase,
  Building2,
  Calculator,
  TrendingUp,
  Package,
  Truck,
  Settings,
  ShoppingCart,
  Monitor,
  Phone,
  BarChart3,
  FileText,
  Warehouse,
  MapPin
} from 'lucide-react';

interface ColaboradorProps {
  nome: string;
  cargo: string;
  setor?: string;
  nivel: number;
  icon?: React.ReactNode;
  email?: string;
}

const Colaborador: React.FC<ColaboradorProps> = ({ nome, cargo, setor, nivel, icon, email }) => {
  const getBackgroundColor = (nivel: number) => {
    switch (nivel) {
      case 1: return 'bg-gradient-to-r from-blue-600 to-purple-900';
      case 2: return 'bg-gradient-to-r from-amber-600 to-amber-900';
      case 3: return 'bg-gradient-to-r from-emerald-600 to-emerald-900';
      case 4: return 'bg-gradient-to-r from-pink-600 to-red-900';
      case 5: return 'bg-gradient-to-r from-gray-600 to-gray-800';
      default: return 'bg-gradient-to-r from-gray-400 to-gray-500';
    }
  };

  const getTextSize = (nivel: number) => {
    switch (nivel) {
      case 1: return 'text-lg font-bold';
      case 2: return 'text-base font-semibold';
      case 3: return 'text-sm font-medium';
      default: return 'text-sm';
    }
  };

  const getPadding = (nivel: number) => {
    return 'p-4';
  };

  const getWidth = (nivel: number) => {
    return 'w-72'; // largura igual para todos os níveis
  };

  return ( 
    <div className={`${getBackgroundColor(nivel)} ${getWidth(nivel)} text-white ${getPadding(nivel)} rounded-lg shadow-lg m-2 transition-all hover:scale-105 text-center`}>
      <div className="flex items-center justify-center gap-2 mb-2">
        {icon && <span className="text-white">{icon}</span>}
        <h3 className={getTextSize(nivel)}>{nome}</h3>
      </div>
      <p className="text-sm opacity-90">{cargo}</p>
      {setor && <p className="text-xs opacity-75 mt-1">{setor}</p>}
      {email && <p className="text-xs opacity-75 mt-1">{email}</p>}
    </div>
  );
};

const EstruturaSaoJoseCampos: React.FC = () => {
  return (
    <div className="p-6">
      
      {/* Nível 1 - Diretoria */}
      <div className="flex justify-center mb-4">
        <Colaborador 
          nome="Márcio Sampaio" 
          cargo="Diretor" 
          setor="CD/Operações"
          nivel={1}
          icon={<Crown size={24} />}
        />
      </div>

      {/* Nível 2 - Gerência */}
      <div className="flex justify-center mb-4">
        <Colaborador nome="Cleber Silva" cargo="Gerente" setor="CD/Operações" nivel={2} icon={<Star size={20} />} />
      </div>

      {/* Nível 3 - Gestão */}
      <div className="flex justify-center mb-4">
        <Colaborador nome="Daniel" cargo="Gestor de Estoque" setor="CD/Operações" nivel={3} icon={<Warehouse size={18} />} />
      </div>

      {/* Nível 4 - Estoquistas */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
        <Colaborador nome="Renan" cargo="Estoquista" setor="CD/Operações" nivel={4} icon={<Package size={14} />} />
        <Colaborador nome="Felipe" cargo="Estoquista" setor="CD/Operações" nivel={4} icon={<Package size={14} />} />
        <Colaborador nome="Marcelo" cargo="Estoquista" setor="CD/Operações" nivel={4} icon={<Package size={14} />} />
        <Colaborador nome="Matheus" cargo="Estoquista" setor="CD/Operações" nivel={4} icon={<Package size={14} />} />
        <Colaborador nome="Patrick Julio" cargo="Estoquista" setor="CD/Operações" nivel={4} icon={<Package size={14} />} />
      </div>

      {/* Nível 5 - Motoristas */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        <Colaborador nome="Sergio Rosa" cargo="Motorista" setor="CD/Operações" nivel={5} icon={<Truck size={12} />} />
        <Colaborador nome="Sergio Assis" cargo="Motorista" setor="CD/Operações" nivel={5} icon={<Truck size={12} />} />
        <Colaborador nome="Andre Luis" cargo="Motorista" setor="CD/Operações" nivel={5} icon={<Truck size={12} />} />
      </div>
    </div>
  );
};

export default EstruturaSaoJoseCampos;