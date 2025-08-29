import React from 'react';
import { Search, UserCheck } from 'lucide-react';
interface PilaresAuditoriaProps {
  onPilarSelect?: (pilar: string) => void;
  pilarSelecionado?: string;
}
const PilaresAuditoria: React.FC<PilaresAuditoriaProps> = ({
  onPilarSelect,
  pilarSelecionado
}) => {
  const pilares = [{
    titulo: 'Auditoria',
    descricao: 'Processos de auditoria de caixa, estoque e conformidade das lojas Oscar e franquias',
    icon: Search,
    cor: 'bg-blue-600',
    corHover: 'hover:bg-blue-700',
    processos: ['Auditoria de caixa lojas Oscar', 'Auditoria de franquias', 'Verificações de conformidade']
  }, {
    titulo: 'Conferente',
    descricao: 'Atividades de conferência, validação e apoio às operações das lojas',
    icon: UserCheck,
    cor: 'bg-green-600',
    corHover: 'hover:bg-green-700',
    processos: ['Apoio às lojas', 'Conciliações', 'Gestão de contratos e despesas']
  }];
  const handlePilarClick = (titulo: string) => {
    if (onPilarSelect) {
      onPilarSelect(pilarSelecionado === titulo ? '' : titulo);
    }
  };
  return <div className="space-y-6">
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pilares.map((pilar, index) => {
        const IconComponent = pilar.icon;
        const isSelected = pilarSelecionado === pilar.titulo;
        return <div key={index} className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden ${isSelected ? 'ring-2 ring-blue-500 scale-105' : 'hover:scale-105'}`} onClick={() => handlePilarClick(pilar.titulo)}>
              <div className={`${pilar.cor} ${pilar.corHover} p-6 transition-colors duration-200`}>
                <div className="flex items-center justify-center text-white mb-4">
                  <IconComponent size={32} />
                </div>
                <h4 className="text-lg font-semibold text-white text-center">
                  {pilar.titulo}
                </h4>
              </div>
              
              <div className="p-6">
                
                
                <div className="space-y-2">
                  
                  <ul className="space-y-1">
                    {pilar.processos.map((processo, idx) => {})}
                  </ul>
                </div>
                
                {onPilarSelect && <div className="mt-4 text-center">
                    
                  </div>}
              </div>
            </div>;
      })}
      </div>

      
    </div>;
};
export default PilaresAuditoria;