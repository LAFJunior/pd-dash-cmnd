import { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// Dados para o gráfico de evolução de mapeamento - ordem conforme especificado
const data = [
  { nome: 'Financeiro Varejo', porcentagem: 95, fill: '#10B981' },
  { nome: 'Controladoria', porcentagem: 100, fill: '#10B981' },
  { nome: 'Fiscal', porcentagem: 100, fill: '#10B981' },
  { nome: 'E-commerce', porcentagem: 95, fill: '#10B981' },
  { nome: 'CD/Operação (São José dos Campos)', porcentagem: 95, fill: '#10B981' },
  { nome: 'Defeito', porcentagem: 100, fill: '#10B981' },
  { nome: 'Compras', porcentagem: 20, fill: '#EF4444' },
  { nome: 'Contábil', porcentagem: 100, fill: '#10B981' },
  { nome: 'Auditoria', porcentagem: 10, fill: '#EF4444' },
  { nome: 'Lojas', porcentagem: 40, fill: '#F97316' },
  { nome: 'Recursos Humanos (RH)', porcentagem: 25, fill: '#EF4444' },
  { nome: 'Departamento Pessoal (DP)', porcentagem: 0, fill: '#EF4444' },
  { nome: 'Festcard', porcentagem: 0, fill: '#EF4444' },
  { nome: 'Marketing', porcentagem: 0, fill: '#EF4444' },
  { nome: 'T.I Desenvolvimento', porcentagem: 0, fill: '#EF4444' },
  { nome: 'T.I Operações', porcentagem: 0, fill: '#EF4444' },
  { nome: 'T.I Projetos e Inovações', porcentagem: 0, fill: '#EF4444' },
];

const GraficoProcessos = () => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-gray-200 rounded-lg p-3 shadow-lg">
          <p className="font-medium text-gray-800">{payload[0].payload.nome}</p>
          <p className="text-sm text-gray-600">{`${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Evolução de Mapeamento
        </h3>
      </div>
      
      <div className="w-full border border-gray-200 rounded-lg bg-white p-4">
        <div className="w-full">
          {data.map((item, index) => (
            <div key={index} className="flex items-center mb-3 last:mb-0">
              {/* Barra de progresso */}
              <div className="flex-1 flex items-center">
                <div className="w-full bg-gray-100 rounded-sm h-4 mr-3 relative overflow-hidden">
                  <div
                    className="h-full rounded-sm transition-all duration-300"
                    style={{
                      width: `${item.porcentagem}%`,
                      backgroundColor: item.fill
                    }}
                  />
                </div>
                
                {/* Nome do departamento */}
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {item.nome}
                  </p>
                  <p className="text-xs text-gray-600">
                    {item.porcentagem}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Legenda */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
              <span>Concluído (≥90%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
              <span>Em Progresso (25-89%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
              <span>Iniciado (0-24%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraficoProcessos;
