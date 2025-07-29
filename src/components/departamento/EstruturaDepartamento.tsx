
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
        <div className="flex justify-center gap-1 mb-4">
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

  if (departamentoNormalizado.includes('pessoal') || departamentoNormalizado.includes('dp')) {
    return (
      <div className="p-8 space-y-8">
        
        {/* DIRETOR */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-900 text-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Crown size={24} />
              <h3 className="text-xl font-bold">Marcio Sampaio</h3>
            </div>
            <p className="text-lg opacity-90">DIRETOR</p>
            <p className="text-sm opacity-75 mt-2">marcio.sampaio@GRUPOOSCAR.COM.BR</p>
            <p className="text-sm opacity-75">(12) 97405-0730 - WHATSAPP</p>
          </div>
        </div>

        {/* GERENTE DE DEPARTAMENTO */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-600 to-amber-900 text-white p-5 rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Star size={20} />
              <h3 className="text-lg font-semibold">Maria Macedo</h3>
            </div>
            <p className="text-base opacity-90">Gerente de Departamento</p>
            <p className="text-sm opacity-75 mt-2">maria.macedo@GRUPOOSCAR.COM.BR</p>
            <p className="text-sm opacity-75">(12) 97405-0730 - WHATSAPP</p>
          </div>
        </div>

        {/* LÍDER DE EQUIPE */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-900 text-white p-4 rounded-lg shadow-lg max-w-sm mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users size={18} />
              <h3 className="text-base font-medium">Thalita</h3>
            </div>
            <p className="text-sm opacity-90">Líder de Equipe</p>
            <p className="text-xs opacity-75 mt-2">thalita.reitano@GRUPOOSCAR.COM.BR</p>
            <p className="text-xs opacity-75">(12) 97405-0730 - WHATSAPP</p>
          </div>
        </div>

        {/* GRUPO AZUL */}
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            GRUPO AZUL
          </h3>
          
          {/* Analista do Grupo Azul */}
          <div className="mb-4">
            <div className="bg-blue-100 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800">SIMONE (ANALISTA)</h4>
              <p className="text-sm text-blue-700">simone.reitano@GRUPOOSCAR.COM.BR</p>
              <p className="text-sm text-blue-700">(12) 97405-0730 - WHATSAPP</p>
            </div>
          </div>

          {/* Assistentes do Grupo Azul */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="bg-white p-3 rounded border border-blue-200">
              <h5 className="font-medium">BIA</h5>
              <p className="text-sm text-gray-600">fabiana.silva@grupooscar.com.br</p>
              <p className="text-sm text-gray-600">(12) 99234-0913 - WHATSAPP</p>
            </div>
            <div className="bg-white p-3 rounded border border-blue-200">
              <h5 className="font-medium">RAFAELA</h5>
              <p className="text-sm text-gray-600">rafaleaa.sia@grupooscar.com.br</p>
              <p className="text-sm text-gray-600">(12) 99234-0913 - WHATSAPP</p>
            </div>
          </div>

          {/* Atendimento aos Regionais - Grupo Azul */}
          <div className="bg-blue-100 p-4 rounded-lg">
            <h5 className="font-medium text-blue-800 mb-2">ATENDIMENTO AOS REGIONAIS E BACKOFFICE</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <span className="bg-white p-2 rounded text-center">Aríane</span>
              <span className="bg-white p-2 rounded text-center">Amaro</span>
              <span className="bg-white p-2 rounded text-center">Cláudio</span>
              <span className="bg-white p-2 rounded text-center">Ericson</span>
              <span className="bg-white p-2 rounded text-center">João Paulo</span>
              <span className="bg-white p-2 rounded text-center">Rodrigo</span>
              <span className="bg-white p-2 rounded text-center">BackOffice</span>
            </div>
          </div>
        </div>

        {/* GRUPO VERDE */}
        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            GRUPO VERDE
          </h3>
          
          {/* Analista do Grupo Verde */}
          <div className="mb-4">
            <div className="bg-green-100 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800">ANA CAROLINA (ANALISTA)</h4>
              <p className="text-sm text-green-700">ana.carolina@GRUPOOSCAR.COM.BR</p>
              <p className="text-sm text-green-700">(12) 97405-0730 - WHATSAPP</p>
            </div>
          </div>

          {/* Assistente do Grupo Verde */}
          <div className="mb-4">
            <div className="bg-white p-3 rounded border border-green-200">
              <h5 className="font-medium">NAIMARA</h5>
              <p className="text-sm text-gray-600">naimara.silva@grupooscar.com.br</p>
              <p className="text-sm text-gray-600">(12) 99234-0913 - WHATSAPP</p>
            </div>
          </div>

          {/* Atendimento aos Regionais - Grupo Verde */}
          <div className="bg-green-100 p-4 rounded-lg">
            <h5 className="font-medium text-green-800 mb-2">ATENDIMENTO AOS REGIONAIS</h5>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <span className="bg-white p-2 rounded text-center">Bernardo</span>
              <span className="bg-white p-2 rounded text-center">Estefan</span>
              <span className="bg-white p-2 rounded text-center">Luis Américo</span>
              <span className="bg-white p-2 rounded text-center">Mauricio</span>
              <span className="bg-white p-2 rounded text-center">Peterson</span>
            </div>
          </div>
        </div>

        {/* GRUPO VERMELHO */}
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
          <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            GRUPO VERMELHO
          </h3>
          
          {/* Analista do Grupo Vermelho */}
          <div className="mb-4">
            <div className="bg-red-100 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800">Fabiana (ANALISTA)</h4>
              <p className="text-sm text-red-700">fabiana.micaele@GRUPOOSCAR.COM.BR</p>
              <p className="text-sm text-red-700">(12) 97405-0730 - WHATSAPP</p>
            </div>
          </div>

          {/* Assistentes do Grupo Vermelho */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            <div className="bg-white p-3 rounded border border-red-200">
              <h5 className="font-medium">NICOLLE</h5>
              <p className="text-sm text-gray-600">nicolle.santos@grupooscar.com.br</p>
              <p className="text-sm text-gray-600">(12) 99234-0913 - WHATSAPP</p>
            </div>
            <div className="bg-white p-3 rounded border border-red-200">
              <h5 className="font-medium">CAMILLA</h5>
              <p className="text-sm text-gray-600">camilla.oliver@grupooscar.com.br</p>
              <p className="text-sm text-gray-600">(12) 99234-0913 - WHATSAPP</p>
            </div>
          </div>

          {/* Atendimento aos Regionais - Grupo Vermelho */}
          <div className="bg-red-100 p-4 rounded-lg">
            <h5 className="font-medium text-red-800 mb-2">ATENDIMENTO AOS REGIONAIS</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <span className="bg-white p-2 rounded text-center">Artemis</span>
              <span className="bg-white p-2 rounded text-center">Clovis</span>
              <span className="bg-white p-2 rounded text-center">Elaine</span>
              <span className="bg-white p-2 rounded text-center">Jorge</span>
              <span className="bg-white p-2 rounded text-center">Katiane</span>
              <span className="bg-white p-2 rounded text-center">Patricia</span>
              <span className="bg-white p-2 rounded text-center">Suila</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          <Colaborador nome="Naimara" cargo="Assistente" setor="DP" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Fabiana" cargo="Assistente" setor="DP" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Ana Carolina" cargo="Assistente" setor="DP" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Camila" cargo="Assistente" setor="DP" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Rafaela" cargo="Assistente" setor="DP" nivel={5} icon={<User size={12} />} />
          <Colaborador nome="Nicole" cargo="Assistente" setor="DP" nivel={5} icon={<User size={12} />} />
        </div>
      </div>
    );
  }

  if (departamentoNormalizado.includes('compras')) {
  // Dados estruturados para facilitar manutenção
  const departamentos = {
    feminino: {
      title: "FEMININO",
      subtitle: "(MULTIMARCAS+ MARCAS PRÓPRIAS)",
      sections: [
        {
          brand: "OSCAR - CARIOCA",
          people: [
            { name: "KAREN (COMPRADOR)", email: "KAREN.AKEMI@GRUPOOSCAR.COM.BR", phone: "(12) 97407-5100" },
            { name: "VITÓRIA", email: "VITORIA.OLIVEIRA@GRUPOOSCAR.COM.BR", phone: "(12) 97406-0652" },
            { name: "ALEXYA", email: "ALEXYA.FREITAS@GRUPOOSCAR.COM.BR", phone: "(12) 97411-0200" },
            { name: "LARISSA", email: "LARISSA.RAQUEL@GRUPOOSCAR.COM.BR", phone: "(12) 99234-0825" }
          ]
        },
        {
          brand: "PAQUETÁ - GASTON",
          people: [
            { name: "ALICE(COMPRADOR)", email: "ALICE.BERGAMACHI@GRUPOOSCAR.COM.BR", phone: "(51) 9488-5876" },
            { name: "SUZANA ARAÚJO", email: "SUZANA.SILVA@GRUPOOSCAR.COM.BR", phone: "(51) 99988-6180" }
          ]
        }
      ]
    },
    esportivo: {
      title: "ESPORTIVO",
      subtitle: "(TÊNIS+ MEIAS+ EQUIPAMENTOS)",
      sections: [
        {
          brand: "OSCAR - CARIOCA",
          people: [
            { name: "RAPHAEL (COMPRADOR)", email: "RAPHAEL.TAVARES@GRUPOOSCAR.COM.BR", phone: "(12) 97405-0730" },
            { name: "JEFERSON", email: "JEFERSON.OLIVEIRA@GRUPOOSCAR.COM.BR", phone: "(12) 99234-0913" },
            { name: "LARISSA", email: "LARISSA.PEREIRA@GRUPOOSCAR.COM.BR", phone: "(12) 97403-7540" }
          ]
        },
        {
          brand: "PAQUETÁ - GASTON",
          people: [
            { name: "JOSÉ (COMPRADOR)", email: "JOSE.FERREIRA@GRUPOOSCAR.COM.BR", phone: "(51) 8305-5884" },
            { name: "SAMANTA", email: "SAMANTA.AZAMBUJA@GRUPOOSCAR.COM.BR", phone: "(51) 98912-5337" }
          ]
        }
      ]
    },
    infantil: {
      title: "INFANTIL E BOLSAS",
      subtitle: "(INFANTIL + BOLSAS)",
      sections: [
        {
          brand: "OSCAR - CARIOCA - PAQUETÁ - GASTON",
          people: [
            { name: "CARLA (COMPRADOR)", email: "CARLA.VIANA@GRUPOOSCAR.COM.BR", phone: "(12) 99235-2438" },
            { name: "JENIFER (ANALISTA)", email: "JENIFER.SANTOS@GRUPOOSCAR.COM.BR", phone: "(12) 97890-0735" },
            { name: "JOÃO PAULO", email: "JOAO.MARQUES@GRUPOOSCAR.COM.BR", phone: "(12) 99234-1028" },
            { name: "GUILHERME CARDOSO", email: "GUILHERME.CARDOSO@GRUPOOSCAR.COM.BR", phone: "(12) 9367-2369" }
          ]
        }
      ]
    },
    masculino: {
      title: "MASCULINO",
      subtitle: "(MASCULINO + CHINELOS + ACESSÓRIOS)",
      sections: [
        {
          brand: "OSCAR - CARIOCA - PAQUETÁ - GASTON",
          people: [
            { name: "CLAUDINEI (COMPRADOR)", email: "CLAUDINEI.SIQUEIRA@GRUPOOSCAR.COM.BR", phone: "(12) 99411-3778" },
            { name: "WHYTINI", email: "WHYTINI.MARINHO@GRUPOOSCAR.COM.BR", phone: "(12) 97402-0001" }
          ]
        }
      ]
    },
    textil: {
      title: "TÊXTIL",
      subtitle: "(TÊXTIL + EQUIPAMENTOS + MEIAS)",
      sections: [
        {
          brand: "OSCAR - CARIOCA - PAQUETÁ - GASTON",
          people: [
            { name: "MARISTELA (COMPRADOR)", email: "MARISTELA.WOLLMANN@GRUPOOSCAR.COM.BR", phone: "(51) 99501-4141" },
            { name: "ANGELICA", email: "ANGELICA.LOPES@GRUPOOSCAR.COM.BR", phone: "(51) 98015-0285" }
          ]
        }
      ]
    },
    vm: {
      title: "VM",
      subtitle: "(VISUAL MERCHANDISING)",
      sections: [
        {
          brand: "OSCAR - CARIOCA - PAQUETÁ - GASTON",
          people: [
            { name: "WESLEY (COORDENADOR)", email: "WESLEY.MENDOCA@GRUPOOSCAR.COM.BR", phone: "(12) 99223-2450" },
            { name: "ALICIA", email: "ALICIA.MUNHOZ@GRUPOOSCAR.COM.BR", phone: "(12) 99248-7896", extra: "(SP OSCAR - REGIONAL FARIAS)" },
            { name: "BRUNA", email: "BRUNA.BRUCK@GRUPOOSCAR.COM.BR", phone: "(51) 99390-3443", extra: "(RS - PAQUETÁ E GASTON)" },
            { name: "RENDERSON", email: "RENDERSON.SILVA@GRUPOOSCAR.COM.BR", phone: "(51) 98989-9072", extra: "(RS - PAQUETÁ E GASTON)" },
            { name: "ANDRE", email: "ANDRE.SANTOS@GRUPOOSCAR.COM.BR", phone: "(48) 99982-2629", extra: "(SC - CARIOCA E PAQUETÁ)" },
            { name: "CAMILLA", email: "CAMILLA.FONTOURA@GRUPOOSCAR.COM.BR", phone: "(48) 9982-2629", extra: "(CARIOCA)" }
          ]
        }
      ]
    }
  };

  // Componente para renderizar uma pessoa
  const PersonCard = ({ person, isLast }) => (
    <div className={`mb-4 pb-3 ${!isLast ? 'border-b border-gray-200' : ''}`}>
      <div className="font-bold text-gray-700 text-xs mb-1">{person.name}</div>
      {person.extra && <div className="font-bold text-gray-700 text-xs mb-1">{person.extra}</div>}
      <div className="text-[10px] text-gray-600 leading-snug break-words">
        {person.email}<br />
        {person.phone} - WHATSAPP
      </div>
    </div>
  );

  // Componente para renderizar um card de departamento
  const DepartmentCard = ({ dept }) => (
    <div className="bg-white p-5 shadow-md border border-gray-200 relative text-center min-w-[200px] flex-1"
         style={{
           clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 96%, 0 90%)',
           paddingBottom: '45px'
         }}>
      <h3 className="bg-gray-600 text-white text-center p-2 -m-5 mb-5 text-base font-bold" style={{ letterSpacing: '1px' }}>
        {dept.title}
      </h3>
      <div className="text-base text-gray-600 mb-4 font-bold text-center">
        {dept.subtitle}
      </div>
      
      {dept.sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <div className="text-base font-bold text-gray-700 mb-5 text-center underline">
            {section.brand}
          </div>
          {section.people.map((person, personIndex) => (
            <PersonCard 
              key={personIndex} 
              person={person} 
              isLast={personIndex === section.people.length - 1 && sectionIndex === dept.sections.length - 1}
            />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-[3000px] mx-auto p-5 bg-gray-50 min-h-screen font-sans">
      {/* Diretor */}
      <div className="text-center mb-5">
        <div className="inline-block bg-gradient-to-r from-black to-gray-600 text-white p-3 max-w-[260px] w-full shadow-md relative text-center"
             style={{
               clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
               paddingBottom: '28px'
             }}>
          <h1 className="text-lg font-bold mb-2 tracking-wider">DIRETOR</h1>
          <h2 className="text-sm mb-3 tracking-wide font-semibold">NAICHE POEL</h2>
          <div className="text-[10px] leading-snug break-all">
            NAICHE.POEL@GRUPOOSCAR.COM.BR<br />
            (11) 98070-5041 - WHATSAPP
          </div>
        </div>
      </div>

      {/* Gerente */}
      <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to-br from-red-600 to-red-700 text-white p-3 max-w-[220px] w-full shadow-md relative"
             style={{
               clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 95%, 0 85%)',
               paddingBottom: '30px'
             }}>
          <h3 className="text-sm font-bold mb-3 tracking-wide leading-tight">
            GERENTE DE CATEGORIAS<br />E PLANEJAMENTO<br />COMERCIAL
          </h3>
          
          <div className="mb-4">
            <h4 className="text-xs font-semibold mb-1">THOMAS VENTRE</h4>
            <div className="text-[10px] leading-snug break-all">
              THOMAS.VERTRE@GRUPOOSCAR.COM.BR<br />
              (51) 9239-2687 - WHATSAPP
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold mb-1">WILLIAM (ANALISTA)</h4>
             <div className="text-[10px] leading-snug break-all">
              WILLIAM.LIMA@GRUPOOSCAR.COM.BR<br />
              (51) 99389-3389 - WHATSAPP
            </div>
          </div>
        </div>
      </div>

      {/* Grid de Departamentos - Horizontal */}
      <div className="flex gap-5 overflow-x-auto pb-4 px-2">
        {Object.values(departamentos).map((dept, index) => (
          <DepartmentCard key={index} dept={dept} />
        ))}
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
