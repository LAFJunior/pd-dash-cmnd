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
      case 1: return 'bg-gradient-to-r from-purple-600 to-purple-900';
      case 2: return 'bg-gradient-to-r from-amber-600 to-amber-900';
      case 3: return 'bg-gradient-to-r from-emerald-600 to-emerald-900';
      case 4: return 'bg-gradient-to-r from-blue-600 to-blue-900';
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
      <div className="p-8">
        {/* Nível 1 - Gerência */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Márcio Sampaio" 
            cargo="Diretor" 
            setor="Financeiro"
            nivel={1}
            icon={<Star size={24} />}
          />
        </div>
        
        {/* Nível 2 - Coordenação */}
        <div className="flex justify-center gap-1 mb-4">
          <Colaborador nome="Flávia Araujo" cargo="Gerente" setor="Financeiro" nivel={2} icon={<Calculator size={20} />} />
        </div>
        
        {/* Nível 3 - Analistas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          <Colaborador nome="Tainá Leal" cargo="Analista" setor="Financeiro" nivel={3} icon={<FileText size={16} />} />
        </div>
        
        {/* Nível 4 - Auxiliares */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <Colaborador nome="Igor Justino" cargo="Assistente" setor="Financeiro" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Jully Silva" cargo="Assistente" setor="Financeiro" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Milena Oliveira" cargo="Assistente" setor="Financeiro" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Amanda Silva" cargo="Auxiliar" setor="Financeiro" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Carolina Lima" cargo="Auxiliar" setor="Financeiro" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Mateus Garcia" cargo="Auxiliar" setor="Financeiro" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Sabrina Souza" cargo="Auxiliar" setor="Financeiro" nivel={4} icon={<User size={14} />} />
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
            nome="Renan Constantino" 
            cargo="Diretor" 
            setor="E-commerce"
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>

        {/* Nível 2 - Gerência */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <Colaborador nome="Flávia" cargo="Gerente" setor="Consultora Comercial" nivel={2} icon={<ShoppingCart size={18} />} />
        </div>

        {/* Nível 3 - Coordenação */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
          <Colaborador nome="Andrea" cargo="Coordenadora" setor="1P" nivel={3} icon={<Settings size={16} />} />
          <Colaborador nome="Robson" cargo="PM" setor="Produto" nivel={3} icon={<Monitor size={18} />} />
          <Colaborador nome="Vanessa" cargo="Analista Sr." setor="Financeiro" nivel={3} icon={<Settings size={16} />} />
          <Colaborador nome="Priscila" cargo="Analista Sr." setor="3P" nivel={3} icon={<BarChart3 size={16} />} />
          <Colaborador nome="Eduardo" cargo="Coordenador" setor="Logística" nivel={3} icon={<Package size={16} />} />
          <Colaborador nome="Tamires" cargo="Coordenadora" setor="Cadastro" nivel={3} icon={<FileText size={16} />} />
          <Colaborador nome="Ana" cargo="Coordenadora" setor="Visual Merchandising" nivel={3} icon={<Monitor size={16} />} />
          <Colaborador nome="Carolina" cargo="Coordenadora" setor="Venda 3.0" nivel={3} icon={<TrendingUp size={16} />} />
        </div>-

        {/* Nível 4 - Analistas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
          <Colaborador nome="Bruna" cargo="Assistente" setor="Financeiro" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Matheus" cargo="Assistente" setor="1P" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Gian" cargo="Analista" setor="3P" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Felipe" cargo="Analista Pleno" setor="Logística" nivel={4} icon={<Package size={14} />} />
          <Colaborador nome="Adriana" cargo="Assistente" setor="Cadastro" nivel={4} icon={<FileText size={14} />} />
          <Colaborador nome="Rodrigo" cargo="Analista" setor="Visual Merchandising" nivel={4} icon={<FileText size={14} />} />
        </div>

        {/* Nível 5 - Assistentes  */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <Colaborador nome="Gabriella" cargo="Assistente" setor="Comercial" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Maria Fernanda" cargo="Assistente" setor="Comercial" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Luis" cargo="Assistente" setor="Logística" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Elysa" cargo="Assistente" setor="Cadastro" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Segato" cargo="Fotógrafo" setor="Fotos" nivel={5} icon={<User size={12} />} />
        </div>

        {/* Nível 6 - Auxiliares  */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <Colaborador nome="Patricia" cargo="Assistente" setor="Logística" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Patricia" cargo="Assistente" setor="Cadastro" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Edna" cargo="Assistente" setor="Fotos" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Mauricio" cargo="Assistente" setor="Logística" nivel={5} icon={<User size={12} />} />
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
          <Colaborador nome="Edson" cargo="Gestor" setor="Fiscal" nivel={2} icon={<Calculator size={20} />} />
        </div>

        {/* Nível 3 - Analistas */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Aline" cargo="Analista Sr." setor="Fiscal" nivel={3} icon={<FileText size={18} />} />
        </div>

        {/* Nível 4 - Auxiliares */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <Colaborador nome="Gustavo" cargo="Auxiliar" setor="Fiscal" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Juliana Almeida" cargo="Auxiliar" setor="Fiscal" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Cristiane" cargo="Auxiliar" setor="Fiscal" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Bianca" cargo="Auxiliar" setor="Fiscal" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Maria Souza" cargo="Auxiliar" setor="Fiscal" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Luiz Otávio" cargo="Auxiliar" setor="Fiscal" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Barbara" cargo="Auxiliar" setor="Fiscal" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Marcela" cargo="Auxiliar" setor="Fiscal" nivel={4} icon={<User size={14} />} />
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
            setor="Controladoria"
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>

        {/* Nível 2 - Coordenação */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Vilma Santos" cargo="Coordenadora" setor="Controladoria" nivel={2} icon={<Star size={20} />}/>
        </div>
        
       {/* Nível 3 - Analistas */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Alexandra Soares" cargo="Analista Sr." setor="Auditoria de caixa + Apoio Loja" nivel={3} icon={<BarChart3 size={16} />} />
        </div>
        
        {/* Nível 4 - Assistentes */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
          <Colaborador nome="Laise" cargo="Assistente" setor="Auditoria de caixa + Apoio Loja" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Kelly Braga" cargo="Assistente" setor="Auditoria de caixa + Apoio Loja" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Giovanna Gomes" cargo="Assistente" setor="Auditoria de caixa + Apoio Loja" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Alica Carolina" cargo="Assistente" setor="Conciliação Fest Card" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Luana Vicente" cargo="Assistente" setor="Gestão de Contratos + Indenizações Defeitos" nivel={4} icon={<User size={14} />} />
        </div>

        {/* Nível 5 - Auxiliares */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <Colaborador nome="Deborah Santos" cargo="Auxiliar" setor="Conciliação +  Despesas" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Claudia Rodrigues" cargo="Auxiliar" setor="Conciliação" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Patrícia Donda" cargo="Auxiliar" setor="Conciliação" nivel={5} icon={<User size={12} />} />
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
            setor="CD/Operação"
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>

        {/* Nível 2 - Gerência */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Cleber Silva" cargo="Gerente" setor="CD/Operação" nivel={2} icon={<Star size={20} />} />
        </div>

        {/* Nível 3 - Gestão */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Daniel " cargo="Gestor" setor="CD/Operação" nivel={3} icon={<Warehouse size={18} />} />
        </div>

        {/* Nível 4 - Estoquistas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-4">
          <Colaborador nome="Renan" cargo="Estoquista" setor="CD/Operação" nivel={4} icon={<Package size={14} />} />
          <Colaborador nome="Felipe" cargo="Estoquista" setor="CD/Operação" nivel={4} icon={<Package size={14} />} />
          <Colaborador nome="Marcelo" cargo="Estoquista" setor="CD/Operação" nivel={4} icon={<Package size={14} />} />
          <Colaborador nome="Matheus" cargo="Estoquista" setor="CD/Operação" nivel={4} icon={<Package size={14} />} />
          <Colaborador nome="Patrick Julio" cargo="Estoquista" setor="CD/Operação" nivel={4} icon={<Package size={14} />} />
        </div>

        {/* Nível 5 - Motoristas */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <Colaborador nome="Sergio Rosa" cargo="Motorista" setor="CD/Operação" nivel={5} icon={<Truck size={12} />} />
          <Colaborador nome="Sergio Assis" cargo="Motorista" setor="CD/Operação" nivel={5} icon={<Truck size={12} />} />
          <Colaborador nome="Andre Luis" cargo="Motorista" setor="CD/Operação" nivel={5} icon={<Truck size={12} />} />
        </div>
      </div>
    );
  }

  if (departamentoNormalizado.includes('defeito')) {
    return (
      <div className="p-6">
                
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Márcio Sampaio" 
            cargo="Diretor" 
            setor="CD\Operação"
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>

        {/* Nível 1 - Gerência */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Cleber Silva" cargo="Gerente" setor="Defeito" nivel={1} icon={<Crown size={24} />}  />
        </div>

        {/* Nível 2 - Gestão */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Hilquias Rabello" cargo="Gestor" setor="Defeito" nivel={2} icon={<Warehouse size={20} />} />
        </div>

        {/* Nível 3 - Equipe */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Breno" cargo="Estoquista" setor="Defeito" nivel={3} icon={<Settings size={16} />} />
          <Colaborador nome="Peterson Aguiar" cargo="Estoquista" setor="Defeito" nivel={3} icon={<Settings size={16} />} />
          <Colaborador nome="Romulo Moura" cargo="Estoquista" setor="Defeito" nivel={3} icon={<Settings size={16} />}
          />
        </div>
      </div>
    );
  }

  if (departamentoNormalizado.includes('compras')) {
    return (
      <div className="p-6">

        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Naiche Poel" 
            cargo="Diretor" 
            setor="Compras"
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>
        
        {/* Nível 1 - Gerência */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Thomas Ventre" cargo="Gerente" setor="Categoria e Planejamento Comercial" nivel={2} icon={<Crown size={20} />} />
        </div>

        {/* Nível 2 - Gestão */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="William Lima" cargo="Analista" setor="Categoria e Planejamento Comercial" nivel={3} icon={<Warehouse size={18} />} />
          <Colaborador nome="Wesley Mendes" cargo="Coordenador" setor="Visual Merchandising" nivel={3} icon={<Warehouse size={18} />} />
          <Colaborador nome="Cleber Silva" cargo="Gerente" setor="Pedidos" nivel={3} icon={<Warehouse size={18} />} />
        </div>

        {/* Nível 3 - Analistas */}
        <div className="grid grid-cols-1 md:grid-cols-4 mb-4 mx-auto">
          <Colaborador nome="Karen Akemi" cargo="Comprador" setor="Feminio (Oscar - Carioca)" nivel={4} icon={<Settings size={16} />} />
          <Colaborador nome="Alice Bergamaschi" cargo="Comprador" setor="Feminio (Paquetá - Gaston)" nivel={4} icon={<Settings size={16} />} />
          <Colaborador nome="Claudinei" cargo="Comprador" setor="Masculino" nivel={4} icon={<Settings size={16} />} />
          <Colaborador nome="Raphael Tavares" cargo="Comprador" setor="Esportivo (Oscar - Carioca)" nivel={4} icon={<Settings size={16} />} />
          <Colaborador nome="Jose Ferreria" cargo="Comprador" setor="Esportivo  (Paquetá - gaston)" nivel={4} icon={<Settings size={16} />} />
          <Colaborador nome="Carla Viana" cargo="Comprador" setor="Infantil e Bolsas" nivel={4} icon={<Settings size={16} />} />
          <Colaborador nome="Maristela Wollmann" cargo="Comprador" setor="Infantil e Bolsas" nivel={4} icon={<Settings size={16} />} />
          <Colaborador nome="Evandro Ribeiro" cargo="Lider" setor="Pedidos" nivel={4} icon={<Settings size={16} />} />
        </div>
        
        {/* Nível 4 - Equipe */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          <Colaborador nome="Vitoria Oliveira" cargo="-- - --" setor="Feminio (Oscar - Carioca)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Alexya Freitas" cargo="-- - --" setor="Feminio (Oscar - Carioca)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Thaina Honorato" cargo="-- - --" setor="Feminio (Oscar - Carioca)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Suzana Araujo" cargo="-- - --" setor="Feminio (Paquetá - Gaston)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Jeferson Oliveira" cargo="-- - --" setor="Esportivo (Oscar - Carioca)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Larissa Perreira" cargo="-- - --" setor="Esportivo (Oscar - Carioca)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Samanta Azambuja" cargo="-- - --" setor="Esportivo (Paquetá - Gaston)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Jenifer Santos" cargo="-- - --" setor="Infantil e Bolsas" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="João Paulo" cargo="-- - --" setor="Infantil e Bolsas" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Guilherme Cardoso" cargo="-- - --" setor="Infantil e Bolsas" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Whytini Marinho" cargo="-- - --" setor="Masculino" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Angelica Lopes" cargo="-- - --" setor="Têxtil" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Alicia Munhoz" cargo="-- - --" setor="Visual Merchandising (Regional Farias)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Bruna Bruck" cargo="-- - --" setor="Visual Merchandising (Paquetá - Gaston)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Renderson Silva" cargo="-- - --" setor="Visual Merchandising (Paquetá - Gaston)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Andre Santos" cargo="-- - --" setor="Visual Merchandising (Carioca - Paquetá)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Camilla Fontoura" cargo="-- - --" setor="Visual Merchandising (Carioca)" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Matheus Ribeiro" cargo="-- - --" setor="Pedidos" nivel={5} icon={<Settings size={16} />} />
          <Colaborador nome="Caue Silva" cargo="-- - --" setor="Pedidos" nivel={5} icon={<Settings size={16} />} />
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
