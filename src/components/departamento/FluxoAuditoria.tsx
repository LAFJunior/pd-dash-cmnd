import React from 'react';
import { Settings, Users, AlertTriangle, Search, FileCheck, TrendingUp } from 'lucide-react';

const FluxoAuditoria: React.FC = () => {
  const etapas = [
    {
      numero: '01',
      titulo: 'Planejamento',
      descricao: 'Coordenação das atividades e definição de cronogramas',
      icon: Settings,
      cor: 'bg-blue-500'
    },
    {
      numero: '02',
      titulo: 'Execução',
      descricao: 'Auditores e conferentes executam as verificações',
      icon: Users,
      cor: 'bg-green-500'
    },
    {
      numero: '03',
      titulo: 'Tratamento de Divergências',
      descricao: 'Resolução de questões de estoque/caixa/chamados',
      icon: AlertTriangle,
      cor: 'bg-yellow-500'
    },
    {
      numero: '04',
      titulo: 'Identificação de Riscos',
      descricao: 'Detecção e registro de não conformidades',
      icon: Search,
      cor: 'bg-orange-500'
    },
    {
      numero: '05',
      titulo: 'Encerramento e Reporte',
      descricao: 'Topdesk, relatórios e comunicação dos resultados',
      icon: FileCheck,
      cor: 'bg-purple-500'
    },
    {
      numero: '06',
      titulo: 'Acompanhamento e Melhoria Contínua',
      descricao: 'Monitoramento e otimização dos processos',
      icon: TrendingUp,
      cor: 'bg-indigo-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Fluxo do Departamento de Auditoria</h3>
        <p className="text-blue-100">Processo estruturado de auditoria e conferência</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {etapas.map((etapa, index) => {
          const IconComponent = etapa.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className={`${etapa.cor} p-4`}>
                <div className="flex items-center justify-between text-white">
                  <IconComponent size={24} />
                  <span className="text-xs bg-white/20 px-2 py-1 rounded">
                    {etapa.numero}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h4 className="font-semibold text-gray-800 mb-2">
                  {etapa.titulo}
                </h4>
                <p className="text-sm text-gray-600">
                  {etapa.descricao}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Observações Importantes:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Cada etapa deve ser executada de forma sequencial</li>
          <li>• Documentação completa é obrigatória em todas as fases</li>
          <li>• Comunicação constante entre equipes é fundamental</li>
          <li>• Foco na melhoria contínua dos processos</li>
        </ul>
      </div>
    </div>
  );
};

export default FluxoAuditoria;