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
      <div className="max-w-[1400px] mx-auto p-5 bg-gray-50 min-h-screen font-sans">
        {/* Diretor */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-br from-gray-700 to-black text-white p-10 min-w-[200px] shadow-xl relative text-center"
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                 paddingBottom: '28px'
               }}>
            <h1 className="text-2xl font-bold mb-3" style={{ letterSpacing: '8px' }}>DIRETOR</h1>
            <h2 className="text-lg mb-4" style={{ letterSpacing: '2px' }}>NAICHE POEL</h2>
            <div className="text-xs leading-tight">
              NAICHE.POEL@GRUPOOSCAR.COM.BR<br />
              (11) 96070-5041 - WHATSAPP
            </div>
          </div>
        </div>

        {/* Gerente */}
        <div className="text-center mb-8">
          <div className="inline-block bg-gradient-to-br from-red-600 to-red-700 text-white p-5 min-w-[300px] shadow-xl relative"
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
                 paddingBottom: '30px'
               }}>
            <h3 className="text-base font-bold mb-4" style={{ letterSpacing: '2px' }}>
              GERENTE DE CATEGORIA<br />E PLANEJAMENTO<br />COMERCIAL
            </h3>
            
            <div className="mb-4">
              <h4 className="text-sm font-bold mb-1">THOMAS VENTRE</h4>
              <div className="text-xs leading-tight">
                THOMAS.VERTELO@GRUPOOSCAR.COM.BR<br />
                (51) 9239-2687 - WHATSAPP
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold mb-1">WILLIAM (ANALISTA)</h4>
              <div className="text-xs leading-tight">
                WILLIAM.LIMA@GRUPOOSCAR.COM.BR<br />
                (51) 99389-3389 - WHATSAPP
              </div>
            </div>
          </div>
        </div>

        {/* Grid de Departamentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mb-8">
          {/* Feminino */}
          <div className="bg-white p-5 shadow-md border-2 border-gray-200 relative text-center min-w-[280px]"
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                 paddingBottom: '25px'
               }}>
            <h3 className="bg-gray-600 text-white text-center p-4 -m-5 mb-5 text-base font-bold" style={{ letterSpacing: '1px' }}>
              FEMININO
            </h3>
            <div className="text-xs text-gray-600 mb-4 font-bold text-center">
              (MULTIMARCAS+ MARCAS PRÓPRIAS)
            </div>
            <div className="text-sm font-bold text-gray-700 mb-4 text-center underline">
              OSCAR - CARIOCA
            </div>
            
            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">KAREN (COMPRADOR)</div>
              <div className="text-xs text-gray-600 leading-tight">
                KAREN.AZEREDO@GRUPOOSCAR.COM.BR<br />
                (12) 97407-5100 - WHATSAPP
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">VITÓRIA</div>
              <div className="text-xs text-gray-600 leading-tight">
                VITORIA.OLIVEIRA@GRUPOOSCAR.COM.BR<br />
                (12) 97406-0652 - WHATSAPP
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">ALEXYA</div>
              <div className="text-xs text-gray-600 leading-tight">
                ALEXYA.FREITAS@GRUPOOSCAR.COM.BR<br />
                (12) 97411-0200 - WHATSAPP
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">LARISSA</div>
              <div className="text-xs text-gray-600 leading-tight">
                LARISSA.RAQUEL@GRUPOOSCAR.COM.BR<br />
                (12) 99234-0825 - WHATSAPP
              </div>
            </div>

            <div className="text-sm font-bold text-gray-700 mb-4 text-center underline">
              PAQUETÁ - GASTON
            </div>
            
            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">ALICE(COMPRADOR)</div>
              <div className="text-xs text-gray-600 leading-tight">
                ALICE.GERMANO@GRUPOOSCAR.COM.BR<br />
                (51) 9488-5876 - WHATSAPP
              </div>
            </div>

            <div className="mb-0">
              <div className="font-bold text-gray-700 text-sm mb-1">SUZANA ARAÚJO</div>
              <div className="text-xs text-gray-600 leading-tight">
                SUZANA.SILVA@GRUPOOSCAR.COM.BR<br />
                (51) 99968-6180 - WHATSAPP
              </div>
            </div>
          </div>

          {/* Esportivo */}
          <div className="bg-white p-5 shadow-md border-2 border-gray-200 relative text-center min-w-[280px]"
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                 paddingBottom: '25px'
               }}>
            <h3 className="bg-gray-600 text-white text-center p-4 -m-5 mb-5 text-base font-bold" style={{ letterSpacing: '1px' }}>
              ESPORTIVO
            </h3>
            <div className="text-xs text-gray-600 mb-4 font-bold text-center">
              (TÊNIS+ MEIAS+ EQUIPAMENTOS)
            </div>
            <div className="text-sm font-bold text-gray-700 mb-4 text-center underline">
              OSCAR - CARIOCA
            </div>
            
            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">RAPHAEL (COMPRADOR)</div>
              <div className="text-xs text-gray-600 leading-tight">
                RAPHAEL.VERTELO@GRUPOOSCAR.COM.BR<br />
                (12) 97405-0730 - WHATSAPP
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">JEFERSON</div>
              <div className="text-xs text-gray-600 leading-tight">
                JEFERSON.OLIVEIRA@GRUPOOSCAR.COM.BR<br />
                (12) 99234-0915 - WHATSAPP
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">LARISSA</div>
              <div className="text-xs text-gray-600 leading-tight">
                LARISSA.PEREIRA@GRUPOOSCAR.COM.BR<br />
                (12) 97403-7540 - WHATSAPP
              </div>
            </div>

            <div className="text-sm font-bold text-gray-700 mb-4 text-center underline">
              PAQUETÁ - GASTON
            </div>
            
            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">JOSÉ (COMPRADOR)</div>
              <div className="text-xs text-gray-600 leading-tight">
                JOSE.FERREIRA@GRUPOOSCAR.COM.BR<br />
                (51) 8305-5884 - WHATSAPP
              </div>
            </div>

            <div className="mb-0">
              <div className="font-bold text-gray-700 text-sm mb-1">SAMANTA</div>
              <div className="text-xs text-gray-600 leading-tight">
                SAMANTA.AZAMBUJA@GRUPOOSCAR.COM.BR<br />
                (51) 98912-5337 - WHATSAPP
              </div>
            </div>
          </div>

          {/* Infantil e Bolsas */}
          <div className="bg-white p-5 shadow-md border-2 border-gray-200 relative text-center min-w-[280px]"
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                 paddingBottom: '25px'
               }}>
            <h3 className="bg-gray-600 text-white text-center p-4 -m-5 mb-5 text-base font-bold" style={{ letterSpacing: '1px' }}>
              INFANTIL E BOLSAS
            </h3>
            <div className="text-xs text-gray-600 mb-4 font-bold text-center">
              (INFANTIL + BOLSAS)
            </div>
            <div className="text-sm font-bold text-gray-700 mb-4 text-center underline">
              OSCAR - CARIOCA - PAQUETÁ - GASTON
            </div>
            
            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">CARLA (COMPRADOR)</div>
              <div className="text-xs text-gray-600 leading-tight">
                CARLA.VIANA@GRUPOOSCAR.COM.BR<br />
                (11) 99235-2438 - WHATSAPP
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">JENIFER (ANALISTA)</div>
              <div className="text-xs text-gray-600 leading-tight">
                JENIFER.SANTOS@GRUPOOSCAR.COM.BR<br />
                (12) 97890-0735 - WHATSAPP
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">JOÃO PAULO</div>
              <div className="text-xs text-gray-600 leading-tight">
                JOAO.MARQUES@GRUPOOSCAR.COM.BR<br />
                (12) 99234-1028 - WHATSAPP
              </div>
            </div>

            <div className="mb-0">
              <div className="font-bold text-gray-700 text-sm mb-1">GUILHERME CARDOSO</div>
              <div className="text-xs text-gray-600 leading-tight">
                GUILHERME.CARDOSO@GRUPOOSCAR.COM.BR<br />
                (11) 9367-2369 - WHATSAPP
              </div>
            </div>
          </div>

          {/* Masculino */}
          <div className="bg-white p-5 shadow-md border-2 border-gray-200 relative text-center min-w-[280px]"
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                 paddingBottom: '25px'
               }}>
            <h3 className="bg-gray-600 text-white text-center p-4 -m-5 mb-5 text-base font-bold" style={{ letterSpacing: '1px' }}>
              MASCULINO
            </h3>
            <div className="text-xs text-gray-600 mb-4 font-bold text-center">
              (MASCULINO + CHINELOS + ACESSÓRIOS)
            </div>
            <div className="text-sm font-bold text-gray-700 mb-4 text-center underline">
              OSCAR - CARIOCA - PAQUETÁ - GASTON
            </div>
            
            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">CLAUDINEI (COMPRADOR)</div>
              <div className="text-xs text-gray-600 leading-tight">
                CLAUDINEI.MACHADO@GRUPOOSCAR.COM.BR<br />
                (12) 99411-3778 - WHATSAPP
              </div>
            </div>

            <div className="mb-0">
              <div className="font-bold text-gray-700 text-sm mb-1">WHITINI</div>
              <div className="text-xs text-gray-600 leading-tight">
                WHITINI.WARNINGTON@GRUPOOSCAR.COM.BR<br />
                (12) 97402-0001 - WHATSAPP
              </div>
            </div>
          </div>

          {/* Têxtil */}
          <div className="bg-white p-5 shadow-md border-2 border-gray-200 relative text-center min-w-[280px]"
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                 paddingBottom: '25px'
               }}>
            <h3 className="bg-gray-600 text-white text-center p-4 -m-5 mb-5 text-base font-bold" style={{ letterSpacing: '1px' }}>
              TÊXTIL
            </h3>
            <div className="text-xs text-gray-600 mb-4 font-bold text-center">
              (TÊXTIL + EQUIPAMENTOS + MEIAS)
            </div>
            <div className="text-sm font-bold text-gray-700 mb-4 text-center underline">
              OSCAR - CARIOCA - PAQUETÁ - GASTON
            </div>
            
            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">MARISTELA (COMPRADOR)</div>
              <div className="text-xs text-gray-600 leading-tight">
                MARISTELA.GUILHERMINO@GRUPOOSCAR.COM.BR<br />
                (51) 99501-4141 - WHATSAPP
              </div>
            </div>

            <div className="mb-0">
              <div className="font-bold text-gray-700 text-sm mb-1">ANGELICA</div>
              <div className="text-xs text-gray-600 leading-tight">
                ANGELICA.LOPES@GRUPOOSCAR.COM.BR<br />
                (51) 98015-0285 - WHATSAPP
              </div>
            </div>
          </div>

          {/* VM */}
          <div className="bg-white p-5 shadow-md border-2 border-gray-200 relative text-center min-w-[280px]"
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                 paddingBottom: '25px'
               }}>
            <h3 className="bg-gray-600 text-white text-center p-4 -m-5 mb-5 text-base font-bold" style={{ letterSpacing: '1px' }}>
              VM
            </h3>
            <div className="text-xs text-gray-600 mb-4 font-bold text-center">
              (VISUAL MERCHANDISING)
            </div>
            <div className="text-sm font-bold text-gray-700 mb-4 text-center underline">
              OSCAR - CARIOCA - PAQUETÁ - GASTON
            </div>
            
            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">WESLEY (COORDENADOR)</div>
              <div className="text-xs text-gray-600 leading-tight">
                WESLEY.MENDOZA@GRUPOOSCAR.COM.BR<br />
                (12) 99223-2450 - WHATSAPP
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">ALICIA</div>
              <div className="font-bold text-gray-700 text-sm mb-1">(SP OSCAR - REGIONAL FARIAS)</div>
              <div className="text-xs text-gray-600 leading-tight">
                ALICIA.MUNHOZ@GRUPOOSCAR.COM.BR<br />
                (12) 99390-3443 - WHATSAPP
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">BRUNA</div>
              <div className="font-bold text-gray-700 text-sm mb-1">(RS - PAQUETÁ E GASTON)</div>
              <div className="text-xs text-gray-600 leading-tight">
                BRUNA.BRUCK@GRUPOOSCAR.COM.BR<br />
                (51) 99390-3443 - WHATSAPP
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">RENDERSON</div>
              <div className="font-bold text-gray-700 text-sm mb-1">(RS - PAQUETÁ E GASTON)</div>
              <div className="text-xs text-gray-600 leading-tight">
                RENDERSON.SILVA@GRUPOOSCAR.COM.BR<br />
                (51) 98989-9072 - WHATSAPP GERAL
              </div>
            </div>

            <div className="mb-4 pb-3 border-b border-gray-200">
              <div className="font-bold text-gray-700 text-sm mb-1">ANDRE</div>
              <div className="font-bold text-gray-700 text-sm mb-1">(SC - CARIOCA E PAQUETÁ)</div>
              <div className="text-xs text-gray-600 leading-tight">
                ANDRE.SANTOS@GRUPOOSCAR.COM.BR<br />
                (48) 99982-2692 - WHATSAPP
              </div>
            </div>

            <div className="mb-0">
              <div className="font-bold text-gray-700 text-sm mb-1">CAMILLA (CARIOCA)</div>
              <div className="text-xs text-gray-600 leading-tight">
                CAMILLA.FONTOURA@GRUPOOSCAR.COM.BR<br />
                (48) 9982-2629 - WHATSAPP
              </div>
            </div>
          </div>

          {/* Pedidos */}
          <div className="bg-white p-5 shadow-md border-2 border-gray-200 relative text-center min-w-[280px]"
               style={{
                 clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
                 paddingBottom: '25px'
               }}>
            <h3 className="bg-gray-600 text-white text-center p-4 -m-5 mb-5 text-base font-bold" style={{ letterSpacing: '1px' }}>
              PEDIDOS
            </h3>
            <div className="text-sm font-bold text-gray-700 mb-4 text-center underline">
              OSCAR - CARIOCA
            </div>
            
            <div className="mb-0">
              <div className="font-bold text-gray-700 text-sm mb-1">CLEBER (GERENTE)</div>
              <div className="text-xs text-gray-600 leading-tight">
                CLEBER.MENEZES@GRUPOOSCAR.COM.BR<br />
                (12) 99231-0915 - WHATSAPP
              </div>
            </div>
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
