import React from 'react';
import { Search, UserCheck } from 'lucide-react';

interface PilaresAuditoriaProps {
  onPilarSelect?: (pilar: string) => void;
  pilarSelecionado?: string;
}

const PilaresAuditoria: React.FC<PilaresAuditoriaProps> = ({ onPilarSelect, pilarSelecionado }) => {
  const pilares = [
    {
      titulo: 'Auditoria',
      descricao: 'Processos de auditoria de caixa, estoque e conformidade das lojas Oscar e franquias',
      icon: Search,
      cor: 'bg-blue-600',
      corHover: 'hover:bg-blue-700',
      processos: ['Auditoria de caixa lojas Oscar', 'Auditoria de franquias', 'Verificações de conformidade']
    },
    {
      titulo: 'Conferente',
      descricao: 'Atividades de conferência, validação e apoio às operações das lojas',
      icon: UserCheck,
      cor: 'bg-green-600',
      corHover: 'hover:bg-green-700',
      processos: ['Apoio às lojas', 'Conciliações', 'Gestão de contratos e despesas']
    }
  ];

  const handlePilarClick = (titulo: string) => {
    if (onPilarSelect) {
      onPilarSelect(pilarSelecionado === titulo ? '' : titulo);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-lg text-center">
        <h3 className="text-xl font-bold mb-2">Pilares do Departamento de Auditoria</h3>
        <p className="text-blue-100">Estrutura organizacional baseada em especialidades</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pilares.map((pilar, index) => {
          const IconComponent = pilar.icon;
          const isSelected = pilarSelecionado === pilar.titulo;
          
          return (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                isSelected ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'
              }`}
              onClick={() => handlePilarClick(pilar.titulo)}
            >
              <div className={`${pilar.cor} ${pilar.corHover} p-6 transition-colors duration-200`}>
                <div className="flex items-center justify-center text-white mb-4">
                  <IconComponent size={32} />
                </div>
                <h4 className="text-lg font-semibold text-white text-center">
                  {pilar.titulo}
                </h4>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-4 text-center">
                  {pilar.descricao}
                </p>
                
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800 text-sm">Principais Processos:</h5>
                  <ul className="space-y-1">
                    {pilar.processos.map((processo, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                        {processo}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {onPilarSelect && (
                  <div className="mt-4 text-center">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      isSelected 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {isSelected ? 'Selecionado' : 'Clique para selecionar'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Sobre os Pilares:</h4>
        <p className="text-sm text-gray-600">
          O departamento de Auditoria está estruturado em dois pilares principais que trabalham de forma 
          complementar para garantir a conformidade, qualidade e eficiência das operações. Selecione um 
          pilar para visualizar os processos específicos relacionados.
        </p>
      </div>
    </div>
  );
};

export default PilaresAuditoria;