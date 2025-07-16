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
          <Colaborador nome="Flávia Araujo" cargo="Gerente" setor="Financeiro Varejo" nivel={2} icon={<Calculator size={20} />} />
        </div>
        
        {/* Nível 3 - Analistas */}
        <div className="flex justify-center gap-1 mb-4">
          <Colaborador nome="Tainá Leal" cargo="Analista" setor="Financeiro Varejo" nivel={3} icon={<FileText size={16} />} />
        </div>
        
        {/* Nível 4 - Auxiliares */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <Colaborador nome="Igor Justino" cargo="Assistente" setor="Financeiro Varejo" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Jully Silva" cargo="Assistente" setor="Financeiro Varejo" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Milena Oliveira" cargo="Assistente" setor="Financeiro Varejo" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Debora Miyamoto" cargo="Assistente" setor="Financeiro Varejo" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Amanda Silva" cargo="Auxiliar" setor="Financeiro Varejo" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Carolina Lima" cargo="Auxiliar" setor="Financeiro Varejo" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Mateus Garcia" cargo="Auxiliar" setor="Financeiro Varejo" nivel={4} icon={<User size={14} />} />
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
          <Colaborador nome="Gustavo Luiz" cargo="Auxiliar" setor="Fiscal" nivel={4} icon={<User size={14} />} />
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
          <Colaborador nome="Laise" cargo="Assistente Administrativo" setor="Auditoria de caixa + Apoio Loja" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Kelly Braga" cargo="Assistente Administrativo" setor="Auditoria de caixa + Apoio Loja" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Giovanna Gomes" cargo="Assistente Administrativo" setor="Auditoria de caixa + Apoio Loja" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Gabriela Almeida" cargo="Assistente Administrativo" setor="Auditoria de caixa + Apoio Loja" nivel={4} icon={<User size={14} />} />          
          <Colaborador nome="Alica Carolina" cargo="Assistente Administrativo" setor="Conciliação Fest Card" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Luana Vicente" cargo="Assistente Administrativo" setor="Gestão de Contratos + Indenizações Defeitos" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Tailane Morais" cargo="Assistente Administrativo" setor="Conciliação Fest Card" nivel={4} icon={<User size={14} />} />
        </div>

        {/* Nível 5 - Auxiliares */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <Colaborador nome="Deborah Santos" cargo="Auxiliar Administrativo" setor="Conciliação +  Despesas" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Claudia Rodrigues" cargo="Auxiliar Administrativo" setor="Conciliação" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Patrícia Donda" cargo="Auxiliar Administrativo" setor="Conciliação" nivel={5} icon={<User size={12} />} />
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

        {/* Nível 1 - DIRETOR */}
        <div className="flex justify-center mb-6">
          <div className="bg-black text-white p-6 rounded-lg shadow-lg w-80 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown size={24} />
              <h3 className="text-xl font-bold">Naiche</h3>
            </div>
            <p className="text-sm">Diretor</p>
          </div>
        </div>
        
        {/* Nível 2 - GERENTE DE CATEGORIA */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-600 text-white p-5 rounded-lg shadow-lg w-96 text-center">
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Star size={20} />
                  <h3 className="text-lg font-semibold">Thomas</h3>
                </div>
                <p className="text-sm">Gerente de Categoria e Planejamento Comercial</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <User size={16} />
                  <h3 className="text-base font-medium">William</h3>
                </div>
                <p className="text-xs">Analista</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nível 3 - SETORES/CATEGORIAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          
          {/* FEMININO */}
          <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-center mb-3 text-lg">FEMININO</h3>
            <p className="text-xs text-center mb-3 opacity-80">Multimarcas + Marcas Próprias</p>
            <div className="space-y-2">
              <div className="text-center">
                <p className="text-xs font-medium">Oscar - Carioca</p>
                <p className="text-sm font-semibold">Karen</p>
                <p className="text-xs">Comprador</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium">Paquetá - Gaston</p>
                <p className="text-sm font-semibold">Alice</p>
                <p className="text-xs">Comprador</p>
              </div>
            </div>
          </div>

          {/* ESPORTIVO */}
          <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-center mb-3 text-lg">ESPORTIVO</h3>
            <p className="text-xs text-center mb-3 opacity-80">Tênis + Meias + Equipamentos</p>
            <div className="space-y-2">
              <div className="text-center">
                <p className="text-xs font-medium">Oscar - Carioca</p>
                <p className="text-sm font-semibold">Raphael</p>
                <p className="text-xs">Comprador</p>
              </div>
              <div className="text-center">
                <p className="text-xs font-medium">Paquetá - Gaston</p>
                <p className="text-sm font-semibold">José</p>
                <p className="text-xs">Comprador</p>
              </div>
            </div>
          </div>

          {/* INFANTIL E BOLSAS */}
          <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-center mb-3 text-lg">INFANTIL E BOLSAS</h3>
            <p className="text-xs text-center mb-3 opacity-80">Infantil + Bolsas</p>
            <div className="space-y-2">
              <div className="text-center">
                <p className="text-xs font-medium">Oscar - Carioca - Paquetá - Gaston</p>
                <p className="text-sm font-semibold">Carla</p>
                <p className="text-xs">Comprador</p>
              </div>
            </div>
          </div>

          {/* MASCULINO */}
          <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-center mb-3 text-lg">MASCULINO</h3>
            <p className="text-xs text-center mb-3 opacity-80">Masculino + Chinelos + Acessórios</p>
            <div className="space-y-2">
              <div className="text-center">
                <p className="text-xs font-medium">Oscar - Carioca - Paquetá - Gaston</p>
                <p className="text-sm font-semibold">Claudinei</p>
                <p className="text-xs">Comprador</p>
              </div>
            </div>
          </div>

          {/* TÊXTIL */}
          <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-center mb-3 text-lg">TÊXTIL</h3>
            <p className="text-xs text-center mb-3 opacity-80">Têxtil + Equipamentos + Meias</p>
            <div className="space-y-2">
              <div className="text-center">
                <p className="text-xs font-medium">Oscar - Carioca - Paquetá - Gaston</p>
                <p className="text-sm font-semibold">Maristela</p>
                <p className="text-xs">Comprador</p>
              </div>
            </div>
          </div>

          {/* VM */}
          <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-center mb-3 text-lg">VM</h3>
            <p className="text-xs text-center mb-3 opacity-80">Visual Merchandising</p>
            <div className="space-y-2">
              <div className="text-center">
                <p className="text-xs font-medium">Oscar - Carioca - Paquetá - Gaston</p>
                <p className="text-sm font-semibold">Wesley</p>
                <p className="text-xs">Coordenador</p>
              </div>
            </div>
          </div>

          {/* PEDIDOS */}
          <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg">
            <h3 className="font-semibold text-center mb-3 text-lg">PEDIDOS</h3>
            <p className="text-xs text-center mb-3 opacity-80"></p>
            <div className="space-y-2">
              <div className="text-center">
                <p className="text-xs font-medium">Oscar - Carioca</p>
                <p className="text-sm font-semibold">Cleber</p>
                <p className="text-xs">Gerente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Nível 4 - ASSISTENTES E ANALISTAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <div className="bg-gray-400 text-white p-3 rounded-lg shadow text-center">
            <h4 className="text-sm font-medium">Bruna</h4>
            <p className="text-xs">Assistente</p>
            <p className="text-xs opacity-75">Feminino</p>
          </div>
          <div className="bg-gray-400 text-white p-3 rounded-lg shadow text-center">
            <h4 className="text-sm font-medium">Leticia</h4>
            <p className="text-xs">Assistente</p>
            <p className="text-xs opacity-75">Esportivo</p>
          </div>
          <div className="bg-gray-400 text-white p-3 rounded-lg shadow text-center">
            <h4 className="text-sm font-medium">Ana</h4>
            <p className="text-xs">Assistente</p>
            <p className="text-xs opacity-75">Infantil</p>
          </div>
          <div className="bg-gray-400 text-white p-3 rounded-lg shadow text-center">
            <h4 className="text-sm font-medium">Patricia</h4>
            <p className="text-xs">Assistente</p>
            <p className="text-xs opacity-75">Masculino</p>
          </div>
          <div className="bg-gray-400 text-white p-3 rounded-lg shadow text-center">
            <h4 className="text-sm font-medium">Julia</h4>
            <p className="text-xs">Assistente</p>
            <p className="text-xs opacity-75">Têxtil</p>
          </div>
          <div className="bg-gray-400 text-white p-3 rounded-lg shadow text-center">
            <h4 className="text-sm font-medium">Carlos</h4>
            <p className="text-xs">Analista</p>
            <p className="text-xs opacity-75">Planejamento</p>
          </div>
        </div>
      </div>
    );
  }

  if (departamentoNormalizado.includes('contábil') || departamentoNormalizado.includes('contabil')) {
    return (
      <div className="p-6">
        
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador 
            nome="Márcio Sampaio" 
            cargo="Diretor" 
            setor="Contábil"
            nivel={1}
            icon={<Crown size={24} />}
          />
        </div>

        {/* Nível 2 - Gestão */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Edson" cargo="Gestor" setor="Contábil" nivel={2} icon={<Calculator size={20} />} />
        </div>

        {/* Nível 3 - Coordenação */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Rodolfo" cargo="Coordenador" setor="Contábil" nivel={3} icon={<BarChart3 size={18} />} />
        </div>

        {/* Nível 4 - Assistentes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
          <Colaborador nome="Layra" cargo="Assistente" setor="Contábil" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Gabriela" cargo="Assistente" setor="Contábil" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Camila" cargo="Assistente" setor="Contábil" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Vitoria" cargo="Assistente" setor="Contábil" nivel={4} icon={<User size={14} />} />
        </div>

        {/* Nível 5 - Auxiliares */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          <Colaborador nome="João" cargo="Auxiliar" setor="Contábil" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Nicole" cargo="Auxiliar" setor="Contábil" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Maria Eduarda" cargo="Auxiliar" setor="Contábil" nivel={5} icon={<User size={12} />} />
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
