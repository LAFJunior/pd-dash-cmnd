import React from 'react';
import { User, Users, Crown, Star, Shield, Briefcase, Building2, Calculator, TrendingUp, Package, Truck, Settings, ShoppingCart, Monitor, Phone, BarChart3, FileText, Warehouse, MapPin } from 'lucide-react';
interface ColaboradorProps {
  nome: string;
  cargo: string;
  setor?: string;
  nivel: number;
  icon?: React.ReactNode;
  contato?: number;
  email?: string;
}
const Colaborador: React.FC<ColaboradorProps> = ({
  nome,
  cargo,
  setor,
  nivel,
  icon,
  contato,
  email
}) => {
  const getBackgroundColor = (nivel: number) => {
    switch (nivel) {
      case 1:
        return 'bg-gradient-to-r from-blue-600 to-purple-900';
      case 2:
        return 'bg-gradient-to-r from-amber-600 to-amber-900';
      case 3:
        return 'bg-gradient-to-r from-emerald-600 to-emerald-900';
      case 4:
        return 'bg-gradient-to-r from-pink-600 to-red-900';
      case 5:
        return 'bg-gradient-to-r from-gray-600 to-gray-800';
      default:
        return 'bg-gradient-to-r from-gray-400 to-gray-500';
    }
  };
  const getTextSize = (nivel: number) => {
    switch (nivel) {
      case 1:
        return 'text-lg font-bold';
      case 2:
        return 'text-base font-semibold';
      case 3:
        return 'text-sm font-medium';
      default:
        return 'text-sm';
    }
  };
  const getPadding = (nivel: number) => {
    return 'p-4';
  };
  const getWidth = (nivel: number) => {
    return 'w-72'; // largura igual para todos os níveis
  };
  return <div className={`${getBackgroundColor(nivel)} ${getWidth(nivel)} text-white ${getPadding(nivel)} rounded-lg shadow-lg m-2 transition-all hover:scale-105 text-center`}>
      <div className="flex items-center justify-center gap-2 mb-2">
        {icon && <span className="text-white">{icon}</span>}
        <h3 className={getTextSize(nivel)}>{nome}</h3>
      </div>
      <p className="text-sm opacity-90">{cargo}</p>
      {setor && <p className="text-xs opacity-75 mt-1">{setor}</p>}
      {email && <p className="text-xs opacity-75 mt-1">{email}</p>}
    </div>;
};
const EstruturaDepartamento: React.FC<{
  departamento: string;
}> = ({
  departamento
}) => {
  // Função para normalizar nomes de departamentos
  const normalizarNome = (nome: string) => {
    return nome.toLowerCase().replace(/\([^)]*\)/g, '') // Remove parênteses e conteúdo
    .replace(/\s+/g, ' ') // Normaliza espaços
    .trim();
  };
  const departamentoNormalizado = normalizarNome(departamento);
  console.log('Departamento recebido:', departamento);
  console.log('Departamento normalizado:', departamentoNormalizado);
  if (departamentoNormalizado.includes('financeiro')) {
    return <div className="p-8">
        {/* Nível 1 - Gerência */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Márcio Sampaio" cargo="Diretor" setor="" nivel={1} icon={<Star size={24} />} />
        </div>
        
        {/* Nível 2 - Coordenação */}
        <div className="flex justify-center gap-1 mb-4">
          <Colaborador nome="Flávia Araujo" cargo="Gerente" email="flavia.araujo@grupooscar.com.br" nivel={2} icon={<Calculator size={20} />} />
        </div>
        
        {/* Nível 3 - Analistas */}
        <div className="flex justify-center gap-1 mb-4">
          <Colaborador nome="Tainá Leal" cargo="Analista" email="taina.leal@grupooscar.com.br" nivel={3} icon={<FileText size={16} />} />
        </div>
        
        {/* Nível 4 - Auxiliares */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          <Colaborador nome="Igor Justino" cargo="Assistente" email="igor.jesuino@grupooscar.com.br" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Jully Silva" cargo="Assistente" email="jully.silva@grupooscar.com.br" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Milena Oliveira" cargo="Assistente" email="milena.oliveira@grupooscar.com.br" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Amanda Silva" cargo="Assistente" email="amanda.silva@grupooscar.com.br" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Carolina Lima" cargo="Auxiliar" email="carolina.lima@grupooscar.com.br" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Mateus Garcia" cargo="Auxiliar" email="mateus.garcia@grupooscar.com.br" nivel={4} icon={<User size={14} />} />
          <Colaborador nome="Sabrina Souza" cargo="Auxiliar" email="sabrina.souza@grupooscar.com.br" nivel={4} icon={<User size={14} />} />
        </div>
      </div>;
  }
  if (departamentoNormalizado.includes('e-commerce') || departamentoNormalizado.includes('E-commerce')) {
    return <div className="p-6">
        
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Renan Constantino" cargo="Diretor" setor="E-commerce" nivel={1} icon={<Crown size={24} />} />
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
      </div>;
  }
  if (departamentoNormalizado.includes('fiscal')) {
    return <div className="p-6">
        
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Márcio Sampaio" cargo="Diretor" setor="Fiscal" nivel={1} icon={<Crown size={24} />} />
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
      </div>;
  }
  if (departamentoNormalizado.includes('controladoria')) {
    return <div className="p-6">
        
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Márcio Sampaio" cargo="Diretor" setor="Controladoria" nivel={1} icon={<Crown size={24} />} />
        </div>

        {/* Nível 2 - Coordenação */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Vilma Santos" cargo="Coordenadora" setor="Controladoria" nivel={2} icon={<Star size={20} />} />
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
      </div>;
  }
  if (departamentoNormalizado.includes('t.i projetos') || departamentoNormalizado.includes('ti projetos') || departamentoNormalizado.includes('pmo')) {
    return <div className="p-6">
        
        {/* Head - PMO */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#545454] text-white rounded-[25px] px-8 py-3 text-center shadow-lg min-w-[280px] max-w-[380px]">
            <h2 className="text-xl font-bold mb-0.5 tracking-wide">Sérgio Nascimento</h2>
            <div className="text-base font-normal mb-1.5 tracking-wide">Head | PMO</div>
            <div className="text-xs underline mb-0.5">sergio.nascimento@grupooscar.com.br</div>
            <div className="text-xs font-bold tracking-wide">(12) 98147-3270</div>
          </div>
        </div>

        {/* Equipe */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-[#737373] text-white rounded-[25px] px-8 py-3 text-center shadow-lg min-w-[280px] max-w-[380px]">
            <h2 className="text-xl font-bold mb-0.5 tracking-wide">Geraldo Netto</h2>
            <div className="text-base font-normal mb-1.5 tracking-wide">Analista de Projetos</div>
            <div className="text-xs underline mb-0.5">geraldo.netto@grupooscar.com.br</div>
            <div className="text-xs font-bold tracking-wide">(12) 997407-6667</div>
          </div>

          <div className="bg-[#737373] text-white rounded-[25px] px-8 py-3 text-center shadow-lg min-w-[280px] max-w-[380px]">
            <h2 className="text-xl font-bold mb-0.5 tracking-wide">Luiz Junior</h2>
            <div className="text-base font-normal mb-1.5 tracking-wide">Aux. Processos</div>
            <div className="text-xs underline mb-0.5">luiz.ferreira@grupooscar.com.br</div>
            <div className="text-xs font-bold tracking-wide">(12) 99228-5691</div>
          </div>
        </div>
      </div>;
  }

  // T.I Desenvolvimento
  if (departamento === "T.I Desenvolvimento" || departamento === "TI Desenvolvimento") {
    return (
      <div className="w-full max-w-[800px] mx-auto py-10 px-4 space-y-5">
        {/* Gerência */}
        <div className="bg-[#D3D3D3] rounded-[20px] px-[30px] py-[25px] relative">
          <div className="absolute top-[15px] left-[25px] text-sm font-bold text-gray-800">
            Gerencia
          </div>
          <div className="flex justify-center items-center min-h-[80px] mt-[15px]">
            <div className="bg-white rounded-[15px] px-6 py-[15px] text-center shadow-md min-w-[200px]">
              <h3 className="text-base font-bold text-gray-800 mb-[3px]">Rafael Fernandes</h3>
              <div className="text-[13px] text-gray-700 mb-2">Head</div>
              <div className="text-[11px] text-gray-800 mb-[3px]">rafael.fernandes@giraffasoff.com.br</div>
              <div className="text-xs font-bold text-gray-800">(12) 98147-3270</div>
            </div>
          </div>
        </div>

        {/* Portfólio de projetos */}
        <div className="bg-[#FFB84D] rounded-[20px] px-[30px] py-[25px] relative">
          <div className="absolute top-[15px] left-[25px] text-sm font-bold text-gray-800">
            Portfólio de projetos
          </div>
          <div className="flex justify-center items-center min-h-[80px] mt-[15px]">
            <div className="bg-white rounded-[15px] px-6 py-[15px] text-center shadow-md min-w-[200px]">
              <h3 className="text-base font-bold text-gray-800 mb-[3px]">Marcos Santos</h3>
              <div className="text-[13px] text-gray-700 mb-2">Product Manager</div>
              <div className="text-[11px] text-gray-800 mb-[3px]">marcos.santos@giraffasoff.com.br</div>
              <div className="text-xs font-bold text-gray-800">(12) 98874-7444</div>
            </div>
          </div>
        </div>

        {/* Arquitetura */}
        <div className="bg-[#D4A5D8] rounded-[20px] px-[30px] py-[25px] relative">
          <div className="absolute top-[15px] left-[25px] text-sm font-bold text-gray-800">
            Arquetetura
          </div>
          <div className="flex justify-center items-center min-h-[80px] mt-[15px]">
            <div className="bg-white rounded-[15px] px-6 py-[15px] text-center shadow-md min-w-[200px]">
              <h3 className="text-base font-bold text-gray-800 mb-[3px]">Fagner Cardoso</h3>
              <div className="text-[13px] text-gray-700 mb-2">SPE</div>
              <div className="text-[11px] text-gray-800 mb-[3px]">fagner.cardoso@giraffasoff.com.br</div>
              <div className="text-xs font-bold text-gray-800">(12) 98738-8413</div>
            </div>
          </div>
        </div>

        {/* PO */}
        <div className="bg-[#90EE90] rounded-[20px] px-[30px] py-[25px] relative">
          <div className="absolute top-[15px] left-[25px] text-sm font-bold text-gray-800">
            PO
          </div>
          <div className="flex justify-center items-center min-h-[80px] mt-[15px]">
            <div className="bg-white rounded-[15px] px-6 py-[15px] text-center shadow-md min-w-[200px]">
              <h3 className="text-base font-bold text-gray-800 mb-[3px]">Joao Constantino</h3>
              <div className="text-[13px] text-gray-700 mb-2">Product Owner</div>
              <div className="text-[11px] text-gray-800 mb-[3px]">joao.constantino@giraffasoff.com.br</div>
              <div className="text-xs font-bold text-gray-800">(12) 98197-9257</div>
            </div>
          </div>
        </div>

        {/* Liderança Técnica */}
        <div className="bg-[#87CEEB] rounded-[20px] px-[30px] py-[25px] relative">
          <div className="absolute top-[15px] left-[25px] text-sm font-bold text-gray-800">
            Liderança Tecnica
          </div>
          <div className="flex justify-center items-center min-h-[80px] mt-[15px]">
            <div className="bg-white rounded-[15px] px-6 py-[15px] text-center shadow-md min-w-[200px]">
              <h3 className="text-base font-bold text-gray-800 mb-[3px]">Victor Migoto</h3>
              <div className="text-[13px] text-gray-700 mb-2">Tech Leader</div>
              <div className="text-[11px] text-gray-800 mb-[3px]">victor.gomes@giraffasoff.com.br</div>
              <div className="text-xs font-bold text-gray-800">(12) 00000-00000</div>
            </div>
          </div>
        </div>

        {/* Desenvolvedores */}
        <div className="bg-[#FFD966] rounded-[20px] px-[30px] py-[25px] relative">
          <div className="absolute top-[15px] left-[25px] text-sm font-bold text-gray-800">
            Desenvolvedores
          </div>
          <div className="flex flex-wrap justify-center items-center gap-[15px] min-h-[80px] mt-[15px]">
            <div className="bg-white rounded-[15px] px-6 py-[15px] text-center shadow-md min-w-[200px] max-w-[200px]">
              <h3 className="text-base font-bold text-gray-800 mb-[3px]">Mateus Oliveira</h3>
              <div className="text-[13px] text-gray-700 mb-2">Developer</div>
              <div className="text-[11px] text-gray-800 mb-[3px]">mateus.oliveira@giraffasoff.com.br</div>
              <div className="text-xs font-bold text-gray-800">(12) 00000-00000</div>
            </div>
            <div className="bg-white rounded-[15px] px-6 py-[15px] text-center shadow-md min-w-[200px] max-w-[200px]">
              <h3 className="text-base font-bold text-gray-800 mb-[3px]">Alysonn Araújo</h3>
              <div className="text-[13px] text-gray-700 mb-2">Developer</div>
              <div className="text-[11px] text-gray-800 mb-[3px]">alysonn.araujo@giraffasoff.com.br</div>
              <div className="text-xs font-bold text-gray-800">(12) 00000-00000</div>
            </div>
            <div className="bg-white rounded-[15px] px-6 py-[15px] text-center shadow-md min-w-[200px] max-w-[200px]">
              <h3 className="text-base font-bold text-gray-800 mb-[3px]">Rodolfo Pelarin</h3>
              <div className="text-[13px] text-gray-700 mb-2">Developer</div>
              <div className="text-[11px] text-gray-800 mb-[3px]">rodolfo.pelarin@giraffasoff.com.br</div>
              <div className="text-xs font-bold text-gray-800">(12) 00000-00000</div>
            </div>
            <div className="bg-white rounded-[15px] px-6 py-[15px] text-center shadow-md min-w-[200px] max-w-[200px]">
              <h3 className="text-base font-bold text-gray-800 mb-[3px]">Joao Paulo</h3>
              <div className="text-[13px] text-gray-700 mb-2">Developer</div>
              <div className="text-[11px] text-gray-800 mb-[3px]">joao.tochoze@giraffasoff.com.br</div>
              <div className="text-xs font-bold text-gray-800">(12) 00000-00000</div>
            </div>
          </div>
        </div>

        {/* Qualidade */}
        <div className="bg-[#FF8C42] rounded-[20px] px-[30px] py-[25px] relative">
          <div className="absolute top-[15px] left-[25px] text-sm font-bold text-gray-800">
            Qualidade
          </div>
          <div className="flex justify-center items-center min-h-[80px] mt-[15px]">
            <div className="bg-white rounded-[15px] px-6 py-[15px] text-center shadow-md min-w-[200px] max-w-[200px]">
              <h3 className="text-base font-bold text-gray-800 mb-[3px]">Thiago Nascimento</h3>
              <div className="text-[13px] text-gray-700 mb-2">Tester</div>
              <div className="text-[11px] text-gray-800 mb-[3px]">thiago.nascimento@giraffasoff.com.br</div>
              <div className="text-xs font-bold text-gray-800">(12) 00000-00000</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (departamentoNormalizado.includes('são josé dos campos') || departamentoNormalizado.includes('sao jose dos campos')) {
    return <div className="p-6">
        
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Márcio Sampaio" cargo="Diretor" setor="CD/Operação" nivel={1} icon={<Crown size={24} />} />
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
      </div>;
  }
  if (departamentoNormalizado.includes('defeito')) {
    return <div className="p-6">
                
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Márcio Sampaio" cargo="Diretor" setor="CD\Operação" nivel={1} icon={<Crown size={24} />} />
        </div>

        {/* Nível 1 - Gerência */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Cleber Silva" cargo="Gerente" setor="Defeito" nivel={1} icon={<Crown size={24} />} />
        </div>

        {/* Nível 2 - Gestão */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Hilquias Rabello" cargo="Gestor" setor="Defeito" nivel={2} icon={<Warehouse size={20} />} />
        </div>

        {/* Nível 3 - Equipe */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Breno" cargo="Estoquista" setor="Defeito" nivel={3} icon={<Settings size={16} />} />
          <Colaborador nome="Peterson Aguiar" cargo="Estoquista" setor="Defeito" nivel={3} icon={<Settings size={16} />} />
          <Colaborador nome="Romulo Moura" cargo="Estoquista" setor="Defeito" nivel={3} icon={<Settings size={16} />} />
        </div>
      </div>;
  }
  if (departamentoNormalizado.includes('pessoal') || departamentoNormalizado.includes('dp')) {
    return <div className="min-h-screen bg-gray-50 p-6">
        {/* Estrutura Organizacional */}
        <div className="space-y-6">
          {/* Diretor */}
          <div className="flex justify-center">
            <div className="bg-gray-800 text-white p-6 rounded-lg text-center min-w-[300px]">
              <div className="font-bold text-lg mb-2">MÁRCIO SAMPAIO</div>
              <div className="font-semibold mb-2">DIRETOR</div>
              <div className="text-sm opacity-90 mb-1">MARCIO.SAMPAIO@GRUPOOSCAR.COM.BR</div>
              <div className="text-sm opacity-90">
            </div>
            </div>
          </div>

          {/* Gerente */}
          <div className="flex justify-center">
            <div className="bg-emerald-600 text-white p-6 rounded-lg text-center min-w-[300px]">
              <div className="font-bold text-lg mb-2">MARIA MACEDO</div>
              <div className="font-semibold mb-2">GERENTE DO DEPARTAMENTO</div>
              <div className="text-sm opacity-90 mb-1">MARIA.MACEDO@GRUPOOSCAR.COM.BR</div>
              <div className="text-sm opacity-90">(12) 99193-1537 - WHATSAPP</div>
            </div>
          </div>

          {/* Líder de Equipe */}
          <div className="flex justify-center">
            <div className="bg-pink-600 text-white p-6 rounded-lg text-center min-w-[300px]">
              <div className="font-bold text-lg mb-2">TALITHA OLIVEIRA</div>
              <div className="font-semibold mb-2">LÍDER DO TIME</div>
              <div className="text-sm opacity-90 mb-1">TALITHA.SOUSA@GRUPOOSCAR.COM.BR</div>
              <div className="text-sm opacity-90">4232 - RAMAL</div>
            </div>
          </div>

          {/* Grupos de Trabalho */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Grupo Azul */}
            <div className="bg-blue-500 text-white rounded-lg">
              <div className="bg-blue-600 p-4 rounded-t-lg text-center font-bold">
                GRUPO AZUL
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-blue-400 p-3 rounded text-center">
                  <div className="font-semibold">SIMONE REITANO(ANALISTA)</div>
                  <div className="text-sm opacity-90">SIMONE.REITANO@GRUPOOSCAR.COM.BR</div>
                  <div className="text-sm opacity-90">XXX  - RAMAL</div>
                </div>
                <div className="bg-blue-400 p-3 rounded text-center">
                  <div className="font-semibold">FABIANA (BIA)</div>
                  <div className="text-sm opacity-90">FABIANA.SILVA@GRUPOOSCAR.COM.BR</div>
                  <div className="text-sm opacity-90"> XXX - RAMAL</div>
                </div>
                <div className="bg-blue-400 p-3 rounded text-center">
                  <div className="font-semibold">RAFAELA</div>
                  <div className="text-sm opacity-90">RAFAELA.FERREIRA@GRUPOOSCAR.COM.BR</div>
                  <div className="text-sm opacity-90">XXX  - RAMAL</div>
                </div>
                <div className="bg-blue-300 p-3 rounded">
                  <div className="font-semibold text-center mb-3">ATENDIMENTO AOS REGIONAIS E BACKOFFICE</div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">Aríane</div>
                    <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">Amaro</div>
                    <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">Cláudio</div>
                    <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">Ericson</div>
                    <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">João Paulo</div>
                    <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">Rodrigo</div>
                  </div>
                  <div className="mt-2">
                    <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">BackOffice</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grupo Verde */}
            <div className="bg-green-500 text-white rounded-lg">
              <div className="bg-green-600 p-4 rounded-t-lg text-center font-bold">
                GRUPO VERDE
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-green-400 p-3 rounded text-center">
                  <div className="font-semibold">ANA CAROLINA</div>
                  <div className="text-sm opacity-90">ANA.VELOSO@GRUPOOSCAR.COM.BR</div>
                  <div className="text-sm opacity-90">XXX- RAMAL</div>
                </div>
                <div className="bg-green-400 p-3 rounded text-center">
                  <div className="font-semibold">NAIMARA</div>
                  <div className="text-sm opacity-90">NAIMARA.CAMARGO@GRUPOOSCAR.COM.BR</div>
                  <div className="text-sm opacity-90">-XXX- RAMAL</div>
                </div>
                <div className="bg-green-300 p-3 rounded">
                  <div className="font-semibold text-center mb-3">ATENDIMENTO AOS REGIONAIS</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Bernardo</div>
                    <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Estefan</div>
                    <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Luis Américo</div>
                    <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Mauricio</div>
                    <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Thiago Miglioli</div>
                  </div>
                  <div className="mt-2">
                    <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Peterson</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grupo Vermelho */}
            <div className="bg-red-500 text-white rounded-lg">
              <div className="bg-red-600 p-4 rounded-t-lg text-center font-bold">
                GRUPO VERMELHO
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-red-400 p-3 rounded text-center">
                  <div className="font-semibold">FABIANA (ANALISTA)</div>
                  <div className="text-sm opacity-90">FABIANA.FERREIRA@GRUPOOSCAR.COM.BR</div>
                  <div className="text-sm opacity-90">XXX - RAMAL</div>
                </div>
                <div className="bg-red-400 p-3 rounded text-center">
                  <div className="font-semibold">NICOLLE</div>
                  <div className="text-sm opacity-90">NICOLLE.OLIVEIRA@GRUPOOSCAR.COM.BR</div>
                  <div className="text-sm opacity-90">XXX - RAMAL</div>
                </div>
                <div className="bg-red-400 p-3 rounded text-center">
                  <div className="font-semibold">CAMILLA</div>
                  <div className="text-sm opacity-90">CAMILLA.SILVA@GRUPOOSCAR.COM.BR</div>
                  <div className="text-sm opacity-90">(XXX - RAMAL</div>
                </div>
                <div className="bg-red-300 p-3 rounded">
                  <div className="font-semibold text-center mb-3">ATENDIMENTO AOS REGIONAIS</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Artemis</div>
                    <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Clovis</div>
                    <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Viviane</div>
                    <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Jorge</div>
                    <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Katiane</div>
                    <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Patricia</div>
                  </div>
                  <div className="mt-2">
                    <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Suila</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
  if (departamentoNormalizado.includes('auditoria')) {
    return <div className="min-h-screen bg-gray-50 p-6">
        {/* Estrutura Organizacional */}
        <div className="space-y-6">
          {/* CEO */}
          <div className="flex justify-center">
            <div className="bg-gray-800 text-white p-6 rounded-lg text-center min-w-[300px]">
              <div className="font-bold text-lg mb-2">BRUNO CONSTANTINO</div>
              <div className="font-semibold mb-2">CEO GRUPO OSCAR</div>
            </div>
          </div>

          {/* COORDENADOR */}
          <div className="flex justify-center">
            <div className="bg-emerald-600 text-white p-6 rounded-lg text-center min-w-[300px]">
              <div className="font-bold text-lg mb-2">KLEBERSON SOARES</div>
              <div className="font-semibold mb-2">COORDENADOR</div>
              <div className="text-sm opacity-90 mb-1">KLEBERSON.SOARES@GRUPOOSCAR.COM.BR</div>
              <div className="text-sm opacity-90">(16) 98202-1247 - WHATSAPP</div>
            </div>
          </div>

          {/* Equipes de Trabalho */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* BAURU (16 LOJAS) - GRUPO AZUL */}
            <div className="bg-blue-500 text-white rounded-lg">
              <div className="bg-blue-600 p-4 rounded-t-lg text-center font-bold">
                BAURU (16 LOJAS)
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-blue-400 p-3 rounded text-center">
                  <div className="font-semibold">DANIEL CARVALHO (AUDITOR)</div>
                  <div className="text-xs opacity-90">DANIEL.CARVALHO@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) 97405-0730 - WHATSAPP</div>
                </div>
                <div className="bg-blue-400 p-3 rounded text-center">
                  <div className="font-semibold">GUILHERME ESTORINO (CONFERENTE)</div>
                  <div className="text-xs opacity-90">GUILHERME.ESTORINO@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) 99234-0913 - WHATSAPP</div>
                </div>
              </div>
            </div>

            {/* ARARAQUARA (14 LOJAS) - GRUPO VERDE */}
            <div className="bg-green-500 text-white rounded-lg">
              <div className="bg-green-600 p-4 rounded-t-lg text-center font-bold">
                ARARAQUARA (14 LOJAS)
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-green-400 p-3 rounded text-center">
                  <div className="font-semibold">WALDEIR CABRERA (AUDITOR)</div>
                  <div className="text-xs opacity-90">WALDEIR.CABRERA@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) 97405-0730 - WHATSAPP</div>
                </div>
                <div className="bg-green-400 p-3 rounded text-center">
                  <div className="font-semibold">FABIO RIBEIRO (CONFERENTE)</div>
                  <div className="text-xs opacity-90">FABIO.RIBEIRO@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) 99234-0913 - WHATSAPP</div>
                </div>
              </div>
            </div>

            {/* S. J. DOS CAMPOS (19 LOJAS) - GRUPO VERMELHO */}
            <div className="bg-red-500 text-white rounded-lg">
              <div className="bg-red-600 p-4 rounded-t-lg text-center font-bold">
                S. J. DOS CAMPOS (19 LOJAS)
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-red-400 p-3 rounded text-center">
                  <div className="font-semibold">CLEVERSON RIBEIRO (AUDITOR)</div>
                  <div className="text-xs opacity-90">CLEVERSON.RIBEIRO@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
                <div className="bg-red-400 p-3 rounded text-center">
                  <div className="font-semibold">PEDRO AUGUSTO (CONFERENTE)</div>
                  <div className="text-xs opacity-90">PEDRO.AUGUSTO@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
              </div>
            </div>

            {/* S. J. DOS CAMPOS (15 LOJAS) - GRUPO VERMELHO */}
            <div className="bg-red-500 text-white rounded-lg">
              <div className="bg-red-600 p-4 rounded-t-lg text-center font-bold">
                S. J. DOS CAMPOS (15 LOJAS)
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-red-400 p-3 rounded text-center">
                  <div className="font-semibold">GABRIEL ELIAS (AUDITOR)</div>
                  <div className="text-xs opacity-90">GABRIEL.ELIAS@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
                <div className="bg-red-400 p-3 rounded text-center">
                  <div className="font-semibold">EMELLYN THACIANE (CONFERENTE)</div>
                  <div className="text-xs opacity-90">EMELLYN.THACIANE@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
              </div>
            </div>

            {/* MOGI DAS CRUZES (25 LOJAS) - GRUPO VERMELHO */}
            <div className="bg-gray-500 text-white rounded-lg">
              <div className="bg-gray-600 p-4 rounded-t-lg text-center font-bold">
                MOGI DAS CRUZES (25 LOJAS)
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-gray-400 p-3 rounded text-center">
                  <div className="font-semibold">LUCAS FARIAS (AUDITOR)</div>
                  <div className="text-xs opacity-90">LUCAS.FARIAS@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
                <div className="bg-gray-400 p-3 rounded text-center">
                  <div className="font-semibold">JEAN PEREIRA (CONFERENTE)</div>
                  <div className="text-xs opacity-90">JEAN.PEREIRA@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
              </div>
            </div>

            {/* FLORIANÓPOLIS (27 LOJAS) - GRUPO VERMELHO */}
            <div className="bg-orange-500 text-white rounded-lg">
              <div className="bg-orange-600 p-4 rounded-t-lg text-center font-bold">
                FLORIANÓPOLIS (27 LOJAS)
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-orange-400 p-3 rounded text-center">
                  <div className="font-semibold">JHOANY JOSE (AUDITOR)</div>
                  <div className="text-xs opacity-90">JHOANY.JOSE@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
                <div className="bg-orange-400 p-3 rounded text-center">
                  <div className="font-semibold">PABLO DANIEL (CONFERENTE)</div>
                  <div className="text-xs opacity-90">PABLO.DANIEL@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
              </div>
            </div>

            {/* PORTO ALEGRE (20 LOJAS) - GRUPO VERMELHO */}
            <div className="bg-violet-500 text-white rounded-lg">
              <div className="bg-violet-600 p-4 rounded-t-lg text-center font-bold">
                PORTO ALEGRE (20 LOJAS)
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-violet-400 p-3 rounded text-center">
                  <div className="font-semibold">MARCELINO RODRIGUES (AUDITOR)</div>
                  <div className="text-xs opacity-90">MARCELINO.RODRIGUES@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
                <div className="bg-violet-400 p-3 rounded text-center">
                  <div className="font-semibold"> MURILO (CONFERENTE)</div>
                  <div className="text-xs opacity-90"> MURILO@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
              </div>
            </div>

            {/* PORTO ALEGRE (19 LOJAS) - GRUPO VERMELHO */}
            <div className="bg-violet-500 text-white rounded-lg">
              <div className="bg-violet-600 p-4 rounded-t-lg text-center font-bold">
                PORTO ALEGRE (19 LOJAS)
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-violet-400 p-3 rounded text-center">
                  <div className="font-semibold">YURI SANTOS (AUDITOR)</div>
                  <div className="text-xs opacity-90">YURI.SANTOS@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
                <div className="bg-violet-400 p-3 rounded text-center">
                  <div className="font-semibold">RODRIGO VAREIRA (CONFERENTE)</div>
                  <div className="text-xs opacity-90">RODRIGO.VAREIRA@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
              </div>
            </div>

            {/* PORTO ALEGRE (17 LOJAS) - GRUPO VERMELHO */}
            <div className="bg-violet-500 text-white rounded-lg">
              <div className="bg-violet-600 p-4 rounded-t-lg text-center font-bold">
                PORTO ALEGRE (17 LOJAS)
              </div>
              <div className="p-4 space-y-4">
                <div className="bg-violet-400 p-3 rounded text-center">
                  <div className="font-semibold">CRISTIANO FREITAS (AUDITOR)</div>
                  <div className="text-xs opacity-90">CRISTIANO.FREITAS@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
                <div className="bg-violet-400 p-3 rounded text-center">
                  <div className="font-semibold">ISAC ALVES (CONFERENTE)</div>
                  <div className="text-xs opacity-90">ISAC.ALVES@GRUPOOSCAR.COM.BR</div>
                  <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
  if (departamentoNormalizado.includes('marketing')) {
    const lideranca = [{
      name: "Renan Constantino",
      role: "CMO",
      icon: <Crown size={20} />
    }, {
      name: "Helena Alves",
      role: "Diretora",
      icon: <Star size={18} />
    }];
    const departamentos = [{
      title: "Atendimento",
      people: [{
        name: "Amanda Monique",
        role: "Executiva de Contas",
        icon: <Phone size={16} />
      }, {
        name: "Giulia Moreira",
        role: "Executiva de Contas",
        icon: <Phone size={16} />
      }, {
        name: "Leticia Aguiar",
        role: "Executiva de Contas",
        icon: <Phone size={16} />
      }]
    }, {
      title: "Redes Sociais",
      people: [{
        name: "Priscila Oliveira",
        role: "Head Social Media, Influenciadores e Campanhas",
        icon: <Users size={16} />
      }, {
        name: "Mateus Moreira",
        role: "Analista de Influenciadores",
        icon: <User size={16} />
      }, {
        name: "Lucas Dantas",
        role: "Analista de Mídias Sociais | Estrategista",
        icon: <TrendingUp size={16} />
      }, {
        name: "Caio Dutra",
        role: "Analista de Mídias Sociais | Estrategista",
        icon: <TrendingUp size={16} />
      }, {
        name: "Marina Selbach",
        role: "Analista de Mídias Sociais | Estrategista",
        icon: <TrendingUp size={16} />
      }, {
        name: "Jefferson Carlos",
        role: "Analista de Mídias Sociais | Produção de Vídeos",
        icon: <Monitor size={16} />
      }, {
        name: "Natalie Bordignon",
        role: "Assistente de Marketing e Produção",
        icon: <User size={16} />
      }, {
        name: "Isabela Constantino",
        role: "Auxiliar de Marketing",
        icon: <User size={16} />
      }]
    }, {
      title: "Criação",
      people: [{
        name: "Raul Pacheco",
        role: "Diretor de Criação",
        icon: <Star size={16} />
      }, {
        name: "Mariana Teodoro",
        role: "Diretora de Arte",
        icon: <Monitor size={16} />
      }, {
        name: "Alvaro Reitman",
        role: "Diretor de Arte",
        icon: <Monitor size={16} />
      }, {
        name: "Raphael Takamatsu",
        role: "Diretor de Arte",
        icon: <Monitor size={16} />
      }, {
        name: "Gabriella Lemes",
        role: "Designer E-commerce",
        icon: <Monitor size={16} />
      }, {
        name: "Tiago Coronas",
        role: "Designer E-commerce",
        icon: <Monitor size={16} />
      }, {
        name: "Rodrigo Oliveira",
        role: "Motion Designer e Diretor de Arte",
        icon: <Monitor size={16} />
      }, {
        name: "Priscila Martins",
        role: "Redatora",
        icon: <FileText size={16} />
      }, {
        name: "Jorge Abel",
        role: "Redator",
        icon: <FileText size={16} />
      }, {
        name: "Anderson Sousa",
        role: "Diretor de Arte",
        icon: <Monitor size={16} />
      }]
    }, {
      title: "Performance",
      people: [{
        name: "Lais Calabreze",
        role: "Head de Growth",
        icon: <TrendingUp size={16} />
      }, {
        name: "Leticia Calabreze",
        role: "Analista de SEO",
        icon: <BarChart3 size={16} />
      }, {
        name: "Caio Guimarães",
        role: "Analista de Tráfego Pago",
        icon: <BarChart3 size={16} />
      }, {
        name: "Pedro Cruz",
        role: "Analista de Tráfego Pago",
        icon: <BarChart3 size={16} />
      }, {
        name: "Vitor Prado",
        role: "Analista de CRM",
        icon: <User size={16} />
      }, {
        name: "Maisa Gonçalves",
        role: "Assistente de CRM",
        icon: <User size={16} />
      }]
    }];
    return <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-900 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <h1 className="text-5xl md:text-6xl font-black text-yellow-400 text-center mb-4 tracking-wider drop-shadow-lg">
            QUEM FAZ ACONTECER
          </h1>
          
          {/* Liderança */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-yellow-400 mb-8">LIDERANÇA</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {lideranca.map((person, index) => <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    {person.icon}
                    <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                  </div>
                  <p className="text-purple-200 text-lg italic">{person.role}</p>
                </div>)}
            </div>
          </div>
          
          {/* Departamentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {departamentos.map((dept, index) => <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center uppercase tracking-wide border-b-2 border-yellow-400 pb-3">
                  {dept.title}
                </h3>
                <div className="space-y-4">
                  {dept.people.map((person, personIndex) => <div key={personIndex} className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        {person.icon && <span className="text-yellow-400">{person.icon}</span>}
                        <h4 className="font-semibold text-white text-lg">{person.name}</h4>
                      </div>
                      <p className="text-purple-200 text-sm leading-relaxed">{person.role}</p>
                    </div>)}
                </div>
              </div>)}
          </div>
        </div>
      </div>;
  }
  if (departamentoNormalizado.includes('compras')) {
    // Dados estruturados para facilitar manutenção
    const departamentos = {
      feminino: {
        title: "FEMININO",
        subtitle: "(MULTIMARCAS+ MARCAS PRÓPRIAS)",
        sections: [{
          brand: "OSCAR - CARIOCA",
          people: [{
            name: "KAREN (COMPRADOR)",
            email: "KAREN.AKEMI@GRUPOOSCAR.COM.BR",
            phone: "(12) 97407-5100"
          }, {
            name: "VITÓRIA",
            email: "VITORIA.OLIVEIRA@GRUPOOSCAR.COM.BR",
            phone: "(12) 97406-0652"
          }, {
            name: "ALEXYA",
            email: "ALEXYA.FREITAS@GRUPOOSCAR.COM.BR",
            phone: "(12) 97411-0200"
          }, {
            name: "LARISSA",
            email: "LARISSA.RAQUEL@GRUPOOSCAR.COM.BR",
            phone: "(12) 99234-0825"
          }]
        }, {
          brand: "PAQUETÁ - GASTON",
          people: [{
            name: "ALICE(COMPRADOR)",
            email: "ALICE.BERGAMACHI@GRUPOOSCAR.COM.BR",
            phone: "(51) 9488-5876"
          }, {
            name: "SUZANA ARAÚJO",
            email: "SUZANA.SILVA@GRUPOOSCAR.COM.BR",
            phone: "(51) 99988-6180"
          }]
        }]
      },
      esportivo: {
        title: "ESPORTIVO",
        subtitle: "(TÊNIS+ MEIAS+ EQUIPAMENTOS)",
        sections: [{
          brand: "OSCAR - CARIOCA",
          people: [{
            name: "RAPHAEL (COMPRADOR)",
            email: "RAPHAEL.TAVARES@GRUPOOSCAR.COM.BR",
            phone: "(12) 97405-0730"
          }, {
            name: "JEFERSON",
            email: "JEFERSON.OLIVEIRA@GRUPOOSCAR.COM.BR",
            phone: "(12) 99234-0913"
          }, {
            name: "LARISSA",
            email: "LARISSA.PEREIRA@GRUPOOSCAR.COM.BR",
            phone: "(12) 97403-7540"
          }]
        }, {
          brand: "PAQUETÁ - GASTON",
          people: [{
            name: "JOSÉ (COMPRADOR)",
            email: "JOSE.FERREIRA@GRUPOOSCAR.COM.BR",
            phone: "(51) 8305-5884"
          }, {
            name: "SAMANTA",
            email: "SAMANTA.AZAMBUJA@GRUPOOSCAR.COM.BR",
            phone: "(51) 98912-5337"
          }]
        }]
      },
      infantil: {
        title: "INFANTIL E BOLSAS",
        subtitle: "(INFANTIL + BOLSAS)",
        sections: [{
          brand: "OSCAR - CARIOCA - PAQUETÁ - GASTON",
          people: [{
            name: "CARLA (COMPRADOR)",
            email: "CARLA.VIANA@GRUPOOSCAR.COM.BR",
            phone: "(12) 99235-2438"
          }, {
            name: "JENIFER (ANALISTA)",
            email: "JENIFER.SANTOS@GRUPOOSCAR.COM.BR",
            phone: "(12) 97890-0735"
          }, {
            name: "JOÃO PAULO",
            email: "JOAO.MARQUES@GRUPOOSCAR.COM.BR",
            phone: "(12) 99234-1028"
          }, {
            name: "GUILHERME CARDOSO",
            email: "GUILHERME.CARDOSO@GRUPOOSCAR.COM.BR",
            phone: "(12) 9367-2369"
          }]
        }]
      },
      masculino: {
        title: "MASCULINO",
        subtitle: "(MASCULINO + CHINELOS + ACESSÓRIOS)",
        sections: [{
          brand: "OSCAR - CARIOCA - PAQUETÁ - GASTON",
          people: [{
            name: "CLAUDINEI (COMPRADOR)",
            email: "CLAUDINEI.SIQUEIRA@GRUPOOSCAR.COM.BR",
            phone: "(12) 99411-3778"
          }, {
            name: "WHYTINI",
            email: "WHYTINI.MARINHO@GRUPOOSCAR.COM.BR",
            phone: "(12) 97402-0001"
          }]
        }]
      },
      textil: {
        title: "TÊXTIL",
        subtitle: "(TÊXTIL + EQUIPAMENTOS + MEIAS)",
        sections: [{
          brand: "OSCAR - CARIOCA - PAQUETÁ - GASTON",
          people: [{
            name: "MARISTELA (COMPRADOR)",
            email: "MARISTELA.WOLLMANN@GRUPOOSCAR.COM.BR",
            phone: "(51) 99501-4141"
          }, {
            name: "ANGELICA",
            email: "ANGELICA.LOPES@GRUPOOSCAR.COM.BR",
            phone: "(51) 98015-0285"
          }]
        }]
      },
      vm: {
        title: "VM",
        subtitle: "(VISUAL MERCHANDISING)",
        sections: [{
          brand: "OSCAR - CARIOCA - PAQUETÁ - GASTON",
          people: [{
            name: "WESLEY (COORDENADOR)",
            email: "WESLEY.MENDOCA@GRUPOOSCAR.COM.BR",
            phone: "(12) 99223-2450"
          }, {
            name: "ALICIA",
            email: "ALICIA.MUNHOZ@GRUPOOSCAR.COM.BR",
            phone: "(12) 99248-7896",
            extra: "(SP OSCAR - REGIONAL FARIAS)"
          }, {
            name: "BRUNA",
            email: "BRUNA.BRUCK@GRUPOOSCAR.COM.BR",
            phone: "(51) 99390-3443",
            extra: "(RS - PAQUETÁ E GASTON)"
          }, {
            name: "RENDERSON",
            email: "RENDERSON.SILVA@GRUPOOSCAR.COM.BR",
            phone: "(51) 98989-9072",
            extra: "(RS - PAQUETÁ E GASTON)"
          }, {
            name: "ANDRE",
            email: "ANDRE.SANTOS@GRUPOOSCAR.COM.BR",
            phone: "(48) 99982-2629",
            extra: "(SC - CARIOCA E PAQUETÁ)"
          }, {
            name: "CAMILLA",
            email: "CAMILLA.FONTOURA@GRUPOOSCAR.COM.BR",
            phone: "(48) 9982-2629",
            extra: "(CARIOCA)"
          }]
        }]
      }
    };

    // Componente para renderizar uma pessoa
    const PersonCard = ({
      person,
      isLast
    }) => <div className={`mb-4 pb-3 ${!isLast ? 'border-b border-gray-200' : ''}`}>
      <div className="font-bold text-gray-700 text-xs mb-1">{person.name}</div>
      {person.extra && <div className="font-bold text-gray-700 text-xs mb-1">{person.extra}</div>}
      <div className="text-[10px] text-gray-600 leading-snug break-words">
        {person.email}<br />
        {person.phone} - WHATSAPP
      </div>
    </div>;

    // Componente para renderizar um card de departamento
    const DepartmentCard = ({
      dept
    }) => <div className="bg-white p-5 shadow-md border border-gray-200 relative text-center min-w-[200px] flex-1" style={{
      clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 96%, 0 90%)',
      paddingBottom: '45px'
    }}>
      <h3 className="bg-gray-600 text-white text-center p-2 -m-5 mb-5 text-base font-bold" style={{
        letterSpacing: '1px'
      }}>
        {dept.title}
      </h3>
      <div className="text-base text-gray-600 mb-4 font-bold text-center">
        {dept.subtitle}
      </div>
      
      {dept.sections.map((section, sectionIndex) => <div key={sectionIndex}>
          <div className="text-base font-bold text-gray-700 mb-5 text-center underline">
            {section.brand}
          </div>
          {section.people.map((person, personIndex) => <PersonCard key={personIndex} person={person} isLast={personIndex === section.people.length - 1 && sectionIndex === dept.sections.length - 1} />)}
        </div>)}
    </div>;
    return <div className="max-w-[3000px] mx-auto p-5 bg-gray-50 min-h-screen font-sans">
      {/* Diretor */}
      <div className="text-center mb-5">
        <div className="inline-block bg-gradient-to-r from-black to-gray-600 text-white p-3 max-w-[260px] w-full shadow-md relative text-center" style={{
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
        <div className="inline-block bg-gradient-to-br from-red-600 to-red-700 text-white p-3 max-w-[220px] w-full shadow-md relative" style={{
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
        {Object.values(departamentos).map((dept, index) => <DepartmentCard key={index} dept={dept} />)}
      </div>
    </div>;
  }
  if (departamentoNormalizado.includes('contábil') || departamentoNormalizado.includes('contabil')) {
    return <div className="p-6">
        
        {/* Nível 1 - Diretoria */}
        <div className="flex justify-center mb-4">
          <Colaborador nome="Márcio Sampaio" cargo="Diretor" setor="Contábil" nivel={1} icon={<Crown size={24} />} />
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
      </div>;
  }

  // Recursos Humanos / RH
  if (departamentoNormalizado.includes('recursos-humanos') || departamentoNormalizado.includes('recursos humanos') || departamentoNormalizado.includes('rh')) {
    return (
      <div className="p-8 bg-muted/30 min-h-screen">
        {/* Estrutura do RH */}
        <div className="max-w-6xl mx-auto">
          
          {/* Primeira linha - Gestora e Coordenadora */}
          <div className="flex flex-col items-center gap-8 mb-12">
            {/* Gestora RH */}
            <div className="bg-gradient-to-br from-red-800 to-red-900 text-white rounded-3xl p-8 text-center shadow-lg min-w-[280px] max-w-[320px]">
              <h2 className="text-2xl font-bold mb-2 tracking-wider">MARIA MACEDO</h2>
              <div className="text-lg mb-4 font-medium tracking-wide">GESTORA RH</div>
              <div className="text-sm mb-2">maria.macedo@grupooscar.com.br</div>
              <div className="text-sm">(12) 99193-1537</div>
            </div>

            {/* Coordenadora */}
            <div className="bg-gradient-to-br from-red-800 to-red-900 text-white rounded-3xl p-8 text-center shadow-lg min-w-[280px] max-w-[320px]">
              <h2 className="text-2xl font-bold mb-2 tracking-wider">VIVIAN MARTINS</h2>
              <div className="text-lg mb-4 font-medium tracking-wide">COORDENADORA</div>
              <div className="text-sm mb-2">vivian.martins@grupooscar.com.br</div>
              <div className="text-sm">Ramal: 4250</div>
            </div>
          </div>

          {/* Segunda linha - Analistas e Assistente */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {/* Samara Silva */}
            <div className="bg-gradient-to-br from-red-800 to-red-900 text-white rounded-3xl p-8 text-center shadow-lg min-w-[280px] max-w-[320px] w-full">
              <h2 className="text-xl font-bold mb-2 tracking-wide">SAMARA SILVA</h2>
              <div className="text-base mb-4 font-medium tracking-wide">ANALISTA</div>
              <div className="text-sm mb-2">samara.silva@grupooscar.com.br</div>
              <div className="text-sm">Ramal: 4252</div>
            </div>

            {/* Helen Ramos */}
            <div className="bg-gradient-to-br from-red-800 to-red-900 text-white rounded-3xl p-8 text-center shadow-lg min-w-[280px] max-w-[320px] w-full">
              <h2 className="text-xl font-bold mb-2 tracking-wide">HELEN RAMOS</h2>
              <div className="text-base mb-4 font-medium tracking-wide">ANALISTA</div>
              <div className="text-sm mb-2">helen.ramos@grupooscar.com.br</div>
              <div className="text-sm">(51) 8050-0755</div>
            </div>

            {/* Ana Clara */}
            <div className="bg-gradient-to-br from-red-800 to-red-900 text-white rounded-3xl p-8 text-center shadow-lg min-w-[280px] max-w-[320px] w-full">
              <h2 className="text-xl font-bold mb-2 tracking-wide">ANA CLARA</h2>
              <div className="text-base mb-4 font-medium tracking-wide">ANALISTA</div>
              <div className="text-sm mb-2">ana.clara@grupooscar.com.br</div>
              <div className="text-sm">Ramal: 4717</div>
            </div>

            {/* Giovana Medeiros */}
            <div className="bg-gradient-to-br from-red-800 to-red-900 text-white rounded-3xl p-8 text-center shadow-lg min-w-[280px] max-w-[320px] w-full">
              <h2 className="text-xl font-bold mb-2 tracking-wide">GIOVANA MEDEIROS</h2>
              <div className="text-base mb-4 font-medium tracking-wide">ASSISTENTE</div>
              <div className="text-sm mb-2">rh@grupooscar.com.br</div>
              <div className="text-sm">Ramal: 4236</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">Departamento: {departamento}</h2>
      <p className="text-gray-600 mb-4">Estrutura organizacional não disponível para este departamento.</p>
      <p className="text-sm text-gray-500">Debug: Departamento normalizado = "{departamentoNormalizado}"</p>
    </div>;
};
export default EstruturaDepartamento;