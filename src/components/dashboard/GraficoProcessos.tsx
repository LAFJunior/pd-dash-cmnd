import { useState, useEffect } from 'react';

const data = [
  { nome: 'Financeiro', percentage: 100 },
  { nome: 'Controladoria', percentage: 100 },
  { nome: 'Fiscal', percentage: 100 },
  { nome: 'CD/Operações', percentage: 100 },
  { nome: 'Defeito', percentage: 100 },
  { nome: 'E-commerce', percentage: 100 },
  { nome: 'Compras', percentage: 100 },
  { nome: 'Auditoria', percentage: 100 },
  { nome: 'Recursos Humanos (RH)', percentage: 100 },
  { nome: 'Lojas', percentage: 99 },
  { nome: 'Departamento Pessoal (DP)', percentage: 100 },
  { nome: 'Festcard', percentage: 0 },
  { nome: 'Marketing', percentage: 90 },
  { nome: 'T.I', percentage: 90 }
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
      
      <div className="h-full overflow-y-auto overflow-x-hidden pr-1" style={{ height: '80%' }}>
        <div className="space-y-1">
          {data.map((item, index) => (
            <div key={item.nome} className="flex items-center gap-2 min-h-10">
              <div className="w-32 text-xs font-medium text-gray-700 text-right pr-1 flex-shrink-0 leading-tight">
                {item.nome}
              </div>
              <div className="flex-1 h-7 bg-gray-200 rounded-full overflow-hidden relative min-w-0">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${getBarClass(item.percentage)}`}
                  style={{
                    width: animate ? `${item.percentage}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  {item.percentage > 0 && (
                    <div className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-semibold ${getTextColor(item.percentage)}`}>
                      {item.percentage}%
                    </div>
                  )}
                </div>
                {item.percentage === 0 && (
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-semibold text-gray-600">
                    0%
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default GraficoProcessos;
