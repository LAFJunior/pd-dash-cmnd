import { useState, useEffect } from 'react';

const data = [
  { nome: 'Financeiro', percentage: 100 },
  { nome: 'Controladoria', percentage: 100 },
  { nome: 'Fiscal', percentage: 100 },
  { nome: 'CD/Operações', percentage: 100 },
  { nome: 'Defeito', percentage: 100 },
  { nome: 'E-commerce', percentage: 95 },
  { nome: 'Compras', percentage: 40 },
  { nome: 'Auditoria', percentage: 20 },
  { nome: 'Recursos Humanos (RH)', percentage: 20 },
  { nome: 'Lojas', percentage: 10 },
  { nome: 'Departamento Pessoal (DP)', percentage: 0 },
  { nome: 'Festcard', percentage: 0 },
  { nome: 'Marketing', percentage: 0 },
  { nome: 'T.I', percentage: 0 }
];

const GraficoProcessos = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getBarClass = (percentage) => {
    if (percentage === 100) return 'bg-gradient-to-r from-green-500 to-green-400';
    if (percentage >= 95) return 'bg-gradient-to-r from-blue-500 to-blue-400';
    if (percentage >= 20) return 'bg-gradient-to-r from-yellow-500 to-yellow-400';
    if (percentage >= 10) return 'bg-gradient-to-r from-red-500 to-red-400';
    return 'bg-gradient-to-r from-gray-500 to-gray-400';
  };

  const getTextColor = (percentage) => {
    return percentage < 30 ? 'text-gray-700' : 'text-white';
  };

  return (
    <div className="grafico-area">
      <div className="mb-4">
        <h3 className="grafico-titulo">Evolução de Mapeamento</h3>
      </div>
      
      <div className="h-80 overflow-y-auto pr-2">
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={item.nome} className="flex items-center gap-4 min-h-10">
              <div className="w-40 text-sm font-medium text-gray-700 text-right pr-2 flex-shrink-0">
                {item.nome}
              </div>
              <div className="flex-1 h-8 bg-gray-200 rounded-full overflow-hidden relative">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${getBarClass(item.percentage)}`}
                  style={{
                    width: animate ? `${item.percentage}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-xs font-semibold ${getTextColor(item.percentage)}`}>
                    {item.percentage}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></div>
          <span>100%</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
          <span>95%</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full"></div>
          <span>20-40%</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
          <span>10%</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-4 h-4 bg-gradient-to-r from-gray-500 to-gray-400 rounded-full"></div>
          <span>0%</span>
        </div>
      </div>
    </div>
  );
};

export default GraficoProcessos;
