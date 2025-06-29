import React from 'react';
import { Users, UserCheck, Building2, MapPin } from 'lucide-react';

interface ColaboradorProps {
  nome: string;
  cargo: string;
  setor?: string;
  nivel: number;
  icon: React.ReactElement;
}

const Colaborador: React.FC<ColaboradorProps> = ({ nome, cargo, setor, nivel, icon }) => {
  return (
    <div className={`flex items-center p-3 bg-white rounded-lg shadow-sm border-l-4 ${
      nivel === 1 ? 'border-blue-500' : nivel === 2 ? 'border-green-500' : 'border-orange-500'
    }`}>
      <div className="mr-3 text-gray-600">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{nome}</h4>
        <p className="text-sm text-gray-600">{cargo}</p>
        {setor && <p className="text-xs text-gray-500">{setor}</p>}
      </div>
      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
        nivel === 1 ? 'bg-blue-100 text-blue-800' : 
        nivel === 2 ? 'bg-green-100 text-green-800' : 
        'bg-orange-100 text-orange-800'
      }`}>
        N{nivel}
      </div>
    </div>
  );
};

const EstruturaDepartamento: React.FC<{ departamento: string }> = ({ departamento }) => {
  const departamentoNormalizado = departamento.toLowerCase();
  
  if (departamentoNormalizado.includes('marketing')) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Estrutura do Departamento de Marketing</h2>
          <p className="opacity-90">Organização hierárquica e responsabilidades do setor de marketing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Building2 className="mr-2 text-pink-600" />
              Gerência de Marketing
            </h3>
            <div className="space-y-3">
              <Colaborador nome="Diretor de Marketing" cargo="Liderança Estratégica" nivel={1} icon={<Users />} />
              <Colaborador nome="Gerente de Marketing" cargo="Gestão de Campanhas" nivel={2} icon={<UserCheck />} />
              <Colaborador nome="Coordenador de Marketing Digital" cargo="Estratégias Online" nivel={2} icon={<UserCheck />} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 text-purple-600" />
              Equipe de Criação
            </h3>
            <div className="space-y-3">
              <Colaborador nome="Designer Gráfico Sênior" cargo="Criação Visual" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Redator Criativo" cargo="Conteúdo de Marketing" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Diretor de Arte" cargo="Conceitos Visuais" nivel={3} icon={<UserCheck />} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 text-blue-600" />
              Equipe de Marketing Digital
            </h3>
            <div className="space-y-3">
              <Colaborador nome="Analista de SEO" cargo="Otimização de Busca" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Especialista em Mídias Sociais" cargo="Engajamento Online" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Analista de Marketing de Conteúdo" cargo="Produção de Conteúdo" nivel={3} icon={<UserCheck />} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 text-orange-600" />
              Equipe de Eventos
            </h3>
            <div className="space-y-3">
              <Colaborador nome="Coordenador de Eventos" cargo="Planejamento de Eventos" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Promotor de Eventos" cargo="Divulgação de Eventos" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Assistente de Eventos" cargo="Suporte Logístico" nivel={3} icon={<UserCheck />} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Building2 className="mr-2 text-teal-600" />
              Equipe de Suporte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Colaborador nome="Analista de Marketing" cargo="Análise de Dados" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Assistente de Marketing" cargo="Suporte Administrativo" nivel={3} icon={<UserCheck />} />
            </div>
          </div>
        </div>

        <div className="bg-pink-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <MapPin className="mr-2 text-pink-600" />
            Informações Gerais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Total de Colaboradores:</strong> 15
            </div>
            <div>
              <strong>Níveis Hierárquicos:</strong> 3
            </div>
            <div>
              <strong>Setores:</strong> 5
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (departamentoNormalizado.includes('financeiro')) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Estrutura do Departamento Financeiro</h2>
          <p className="opacity-90">Organização hierárquica e responsabilidades do setor financeiro</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Building2 className="mr-2 text-blue-600" />
              Gerência
            </h3>
            <div className="space-y-3">
              <Colaborador nome="Gerente Financeiro" cargo="Coordenação Geral" setor="Financeiro" nivel={1} icon={<Users />} />
              <Colaborador nome="Supervisor Contas a Pagar" cargo="Supervisão Operacional" setor="Contas a Pagar" nivel={2} icon={<UserCheck />} />
              <Colaborador nome="Supervisor Tesouraria" cargo="Supervisão Operacional" setor="Tesouraria" nivel={2} icon={<UserCheck />} />
              <Colaborador nome="Supervisor Contas a Receber" cargo="Supervisão Operacional" setor="Contas a Receber" nivel={2} icon={<UserCheck />} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 text-green-600" />
              Equipe Contas a Pagar
            </h3>
            <div className="space-y-3">
              <Colaborador nome="Analista Contas a Pagar Sr" cargo="Análise e Processamento" setor="Contas a Pagar" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Analista Contas a Pagar Pl" cargo="Análise e Processamento" setor="Contas a Pagar" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Auxiliar Administrativo" cargo="Suporte Operacional" setor="Contas a Pagar" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Assistente Administrativo" cargo="Suporte Operacional" setor="Contas a Pagar" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Analista de Impostos" cargo="Gestão Tributária" setor="Fiscal" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Estagiário" cargo="Apoio Administrativo" setor="Contas a Pagar" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Auxiliar de Escritório" cargo="Atividades Administrativas" setor="Contas a Pagar" nivel={3} icon={<UserCheck />} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 text-purple-600" />
              Equipe Tesouraria
            </h3>
            <div className="space-y-3">
              <Colaborador nome="Analista de Tesouraria Sr" cargo="Gestão de Caixa" setor="Tesouraria" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Analista de Tesouraria Pl" cargo="Controle Financeiro" setor="Tesouraria" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Auxiliar de Tesouraria" cargo="Suporte Operacional" setor="Tesouraria" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Analista de Conciliação" cargo="Reconciliação Bancária" setor="Tesouraria" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Assistente de Tesouraria" cargo="Atividades Bancárias" setor="Tesouraria" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Estagiário Tesouraria" cargo="Apoio Administrativo" setor="Tesouraria" nivel={3} icon={<UserCheck />} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="mr-2 text-orange-600" />
              Equipe Contas a Receber
            </h3>
            <div className="space-y-3">
              <Colaborador nome="Analista Contas a Receber Sr" cargo="Gestão de Recebíveis" setor="Contas a Receber" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Analista de Cobrança" cargo="Recuperação de Crédito" setor="Cobrança" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Auxiliar de Cobrança" cargo="Suporte à Cobrança" seto="Cobrança" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Analista de Crédito" cargo="Análise de Risco" setor="Crédito" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Assistente Comercial" cargo="Suporte às Vendas" setor="Comercial" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Estagiário Financeiro" cargo="Apoio Administrativo" setor="Contas a Receber" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Auxiliar Administrativo" cargo="Atividades Gerais" setor="Contas a Receber" nivel={3} icon={<UserCheck />} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Building2 className="mr-2 text-teal-600" />
              Equipe de Suporte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Colaborador nome="Analista de Sistemas Financeiros" cargo="Suporte Tecnológico" setor="TI Financeiro" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Coordenador de Processos" cargo="Melhoria Contínua" setor="Processos" nivel={2} icon={<UserCheck />} />
              <Colaborador nome="Auditor Interno" cargo="Controles Internos" setor="Auditoria" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Analista de Planejamento" cargo="Orçamento e Forecast" setor="Planejamento" nivel={3} icon={<UserCheck />} />
              <Colaborador nome="Assistente de Controladoria" cargo="Suporte Gerencial" setor="Controladoria" nivel={3} icon={<UserCheck />} />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 flex items-center">
            <MapPin className="mr-2 text-blue-600" />
            Informações Gerais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Total de Colaboradores:</strong> 28
            </div>
            <div>
              <strong>Níveis Hierárquicos:</strong> 3
            </div>
            <div>
              <strong>Setores:</strong> 6
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <div className="max-w-md mx-auto">
        <Building2 className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Estrutura não disponível
        </h3>
        <p className="text-gray-500">
          A estrutura para o departamento "{departamento}" ainda não foi configurada.
        </p>
      </div>
    </div>
  );
};

export default EstruturaDepartamento;
