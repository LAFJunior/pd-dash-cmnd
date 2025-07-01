
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
  nivel: number;
  icon?: React.ReactNode;
  email?: string;
}

const Colaborador: React.FC<ColaboradorProps> = ({ nome, cargo, nivel, icon, email }) => {
  const getBackgroundColor = (nivel: number) => {
    switch (nivel) {
      case 1: return 'bg-gradient-to-r from-purple-600 to-purple-800';
      case 2: return 'bg-gradient-to-r from-blue-500 to-blue-700';
      case 3: return 'bg-gradient-to-r from-green-500 to-green-700';
      case 4: return 'bg-gradient-to-r from-yellow-500 to-yellow-600';
      case 5: return 'bg-gradient-to-r from-gray-500 to-gray-600';
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

  return (
    <div className={`${getBackgroundColor(nivel)} text-white p-4 rounded-lg shadow-lg m-2 transition-all hover:scale-105`}>
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-white">{icon}</span>}
        <h3 className={getTextSize(nivel)}>{nome}</h3>
      </div>
      <p className="text-sm opacity-90">{cargo}</p>
      {email && <p className="text-xs opacity-75 mt-1">{email}</p>}
    </div>
  );
};

const EstruturaDepartamento: React.FC<{ departamento: string }> = ({ departamento }) => {
  // Função para normalizar nomes de departamentos
  const normalizarNome = (nome: string) => {
    return nome
      .toLowerCase()
      .replace(/\([^)]*\)/g, '') // Remove parênteses e conteúdo
      .replace(/\s+/g, ' ') // Normaliza espaços
      .trim();
  };

  const departamentoNormalizado = normalizarNome(departamento);
  console.log('Departamento recebido:', departamento);
  console.log('Departamento normalizado:', departamentoNormalizado);

  if (departamentoNormalizado.includes('financeiro')) {
    return (
      <div className="p-6">

        {/* Nível 1 - Gerência */}
        <div className="flex justify-center gap-4 mb-4">
          <Colaborador 
            nome="Márcio Sampaio" 
            cargo="Diretor" 
            nivel={2}
            icon={<Star size={20} />}
          />
        </div>

        {/* Nível 2 - Coordenação */}
        <div className="flex justify-center gap-4 mb-4">
          <Colaborador 
            nome="Flávia Araujo" 
            cargo="Gerente" 
            nivel={3}
            icon={<Calculator size={18} />}
          />
        </div>

        {/* Nível 3 - Analistas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          <Colaborador nome="Tainá Leal" cargo="Analista" nivel={4} icon={<FileText size={16} />} />

        </div>

        {/* Nível 4 - Auxiliares */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Colaborador nome="Igor Justino" cargo="Assitente" nivel={5} icon={<User size={14} />} />
          <Colaborador nome="Jully Silva" cargo="Assitente" nivel={5} icon={<User size={14} />} />
          <Colaborador nome="Milena Oliveira" cargo="Assitente" nivel={5} icon={<User size={14} />} />
          <Colaborador nome="Amanda Silva" cargo="Auxiliar" nivel={5} icon={<User size={14} />} />
          <Colaborador nome="Carolina Lima" cargo="Auxiliar" nivel={5} icon={<User size={14} />} />
          <Colaborador nome="Mateus Garcia" cargo="Auxiliar" nivel={5} icon={<User size={14} />} />
          <Colaborador nome="Savrina Souza" cargo="Auxiliar" nivel={5} icon={<User size={14} />} />
        </div>
      </div>
    );
  }

  if (departamentoNormalizado.includes('e-commerce') || departamentoNormalizado.includes('E-commerce')) {
    return (
      <div className="p-6">
        
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Renan" 
            cargo="Diretor" 
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>

        {/* Nível 2 - Gerência */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <Colaborador nome="Helen" cargo="Analista Sr." setor="Customer Experience" nivel={2} icon={<Phone size={18} />} />
          <Colaborador nome="Flávia" cargo="Consultora" setor="Comercial" nivel={2} icon={<ShoppingCart size={18} />} />
          <Colaborador nome="Robson" cargo="PO" setor="Produto" nivel={2} icon={<Monitor size={18} />} />
          <Colaborador nome="Viviane" cargo="Coordenadora" setor="SAC" nivel={2} icon={<Phone size={18} />} />
        </div>

        {/* Nível 3 - Coordenação */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-4">
          <Colaborador nome="Andrea" cargo="Coordenadora" setor="1P" nivel={3} icon={<Settings size={16} />} />
          <Colaborador nome="Vanessa" cargo="Analista Sr." setor="Financeiro" nivel={3} icon={<Settings size={16} />} />
          <Colaborador nome="Priscila" cargo="Analista Sr." setor="3P" nivel={3} icon={<BarChart3 size={16} />} />
          <Colaborador nome="Eduardo" cargo="Coordenador" setor="Logistica" nivel={3} icon={<Package size={16} />} />
          <Colaborador nome="Tamires" cargo="Coordenadora" setor="Cadastro" nivel={3} icon={<FileText size={16} />} />
          <Colaborador nome="Ana" cargo="Analista" setor="Visual Merchandising" nivel={3} icon={<Monitor size={16} />} />
          <Colaborador nome="Carolina" cargo="Coordenadora" setor="Vendedor 3.0" nivel={3} icon={<TrendingUp size={16} />} />
        </div>

        {/* Nível 4 - Analistas */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-4">
          <Colaborador nome="Bruna" cargo="Assistente" setor="Financeiro" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Matheus" cargo="Assistente" setor="1P" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Gian" cargo="Analista" setor="3P" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Felipe" cargo="Analista Pleno" setor="Logistica" nivel={4} icon={<Package size={14} />} />
          <Colaborador nome="Adriana" cargo="Analista" setor="Cadastro" nivel={4} icon={<FileText size={14} />} />
          <Colaborador nome="Rodrigo?" cargo="Analista" setor="Visual Merchandising" nivel={4} icon={<FileText size={14} />} />
        </div>

        {/* Nível 5 - Assistentes  */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          <Colaborador nome="Gabriella" cargo="Assistente" setor="Comercial" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Maria Fernanda" cargo="Assistente" setor="Comercial" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Luis" cargo="Assistente" setor="Logistica" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Elysa" cargo="Assistente" setor="Cadastro" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Segato" cargo="Fotografo" setor="Fotos" nivel={5} icon={<User size={12} />} />
        </div>

        {/* Nível 6 - Auxiliares  */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          <Colaborador nome="Patricia" cargo="Assistente" setor="Logistica" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Patricia" cargo="Assistente" setor="Cadastro" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Edna" cargo="Assistente" seto="Fotos" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Mauricio" cargo="Assistente" setor="Logidtica" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Sofia" cargo="Assistente" setor="Cadastro" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Silvana" cargo="Assistente" setor="Fotos" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Julia" cargo="Assistente" setor="Cadastro" nivel={5} icon={<User size={12} />} />
        </div> 
      </div>
    );
  }

  if (departamentoNormalizado.includes('fiscal')) {
    return (
      <div className="p-6">
        
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Márcio Sampaio" 
            cargo="Diretor" 
            setor="Fiscal"
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>

        {/* Nível 2 - Gerência */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Edson" 
            cargo="Gestor" 
            nivel={2}
            icon={<Calculator size={20} />}
          />
        </div>

        {/* Nível 3 - Analistas */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Aline" 
            cargo="Analista Sr."
            nivel={3}
            icon={<FileText size={18} />}
          />
        </div>

        {/* Nível 4 - Auxiliares */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Colaborador nome="Novo?" cargo="Auxiliar" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Juliana Almeida" cargo="Auxiliar" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Cristiane" cargo="Auxiliar" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Bianca" cargo="Auxiliar" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Maria Souza" cargo="Auxiliar" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Luiz Otávio" cargo="Auxiliar" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Barbara" cargo="Auxiliar" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Marcela" cargo="Auxiliar" nivel={4} icon={<User size={14} />} />
        </div>
      </div>
    );
  }

  if (departamentoNormalizado.includes('controladoria')) {
    return (
      <div className="p-6">
        
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Márcio Sampaio" 
            cargo="Diretor" 
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>

        {/* Nível 2 - Coordenação */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Vilma" 
            cargo="Coordenadora" 
            nivel={2}
            icon={<Star size={20} />}
          />
        </div>

        {/* Nível 3 - Analistas */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Alexandra Soares" 
            cargo="Analista Sr." 
            nivel={3}
            icon={<BarChart3 size={18} />}
          />
        </div>

        {/* Nível 4 - Assistentes */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          <Colaborador nome="Laise" cargo="Assistente" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Kelly Braga" cargo="Assistente" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Giovanna Gomes" cargo="Assistente" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Alica Carolina" cargo="Assistente" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Luana Vicente" cargo="Assistente" nivel={4} icon={<User size={14} />} />
        </div>

        {/* Nível 5 - Auxiliares */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <Colaborador nome="Deborah Santos" cargo="Auxiliar" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Claudia Rodrigues" cargo="Auxiliar" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Patrícia Donda" cargo="Auxiliar" nivel={5} icon={<User size={12} />} />
        </div>
      </div>
    );
  }

  if (departamentoNormalizado.includes('são josé dos campos') || departamentoNormalizado.includes('sao jose dos campos')) {
    return (
      <div className="p-6">
        
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Márcio Sampaio" 
            cargo="Diretor" 
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>

        {/* Nível 2 - Gerência */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Cleber" 
            cargo="Gerente" 
            nivel={2}
            icon={<Star size={20} />}
            email="cleber.silva@grupooscar.com.br"
          />
        </div>

        {/* Nível 3 - Gestão */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Daniel" 
            cargo="Gestor" 
            nivel={3}
            icon={<Warehouse size={18} />}
            email="cd@grupooscar.com.br"
          />
        </div>

        {/* Nível 4 - Estoquistas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          <Colaborador nome="Renan" cargo="Estoquista" nivel={4} icon={<Package size={14} />} />
          <Colaborador nome="Felipe" cargo="Estoquista" nivel={4} icon={<Package size={14} />} />
          <Colaborador nome="Marcelo" cargo="Estoquista" nivel={4} icon={<Package size={14} />} />
          <Colaborador nome="Matheus" cargo="Estoquista" nivel={4} icon={<Package size={14} />} />
          <Colaborador nome="Patrick Julio" cargo="Estoquista" nivel={4} icon={<Package size={14} />} />
        </div>

        {/* Nível 5 - Motoristas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <Colaborador nome="Sergio Rosa" cargo="Motorista" nivel={5} icon={<Truck size={12} />} />
          <Colaborador nome="Sergio Assis" cargo="Motorista" nivel={5} icon={<Truck size={12} />} />
          <Colaborador nome="Andre Luis" cargo="Motorista" nivel={5} icon={<Truck size={12} />} />
        </div>
      </div>
    );
  }

  if (departamentoNormalizado.includes('defeito')) {
    return (
      <div className="p-6">
        
        {/* Nível 1 - Gerência */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Cleber" 
            cargo="Gerente" 
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>

        {/* Nível 2 - Gestão */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Hilquias" 
            cargo="Gestor" 
            nivel={2}
            icon={<Warehouse size={20} />}
          />
        </div>

        {/* Nível 3 - Equipe */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Colaborador 
            nome="Hilquias" 
            cargo="Responsável Técnico" 
            nivel={3} 
            icon={<Settings size={16} />}
            email="hilquias.rabello@grupooscar.com.br - RAMAL 4114"
          />
          <Colaborador 
            nome="Peterson" 
            cargo="Técnico em Defeitos" 
            nivel={3} 
            icon={<Settings size={16} />}
            email="peterson.aguiar@grupooscar.com - RAMAL 4114"
          />
          <Colaborador 
            nome="Romulo" 
            cargo="Técnico em Defeitos" 
            nivel={3} 
            icon={<Settings size={16} />}
            email="romulo.moura@grupooscar.com - RAMAL 4114"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Departamento: {departamento}</h2>
      <p className="text-gray-600 mb-4">Estrutura organizacional não disponível para este departamento.</p>
      <p className="text-sm text-gray-500">Debug: Departamento normalizado = "{departamentoNormalizado}"</p>
    </div>
  );
};

export default EstruturaDepartamento;
