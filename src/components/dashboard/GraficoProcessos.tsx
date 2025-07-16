
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
  const CustomBar = (props: any) => {
    const { payload, x, y, width, height } = props;
    const fill = payload.fill;
    
    return (
      <g>
        {/* Barra */}
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={fill}
          rx={0}
          ry={0}
          style={{ borderRadius: '0 4px 4px 0' }}
        />
        {/* Nome do departamento */}
        <text
          x={x + width + 10}
          y={y + height / 2}
          fill="#333"
          fontSize="12"
          fontWeight="500"
          textAnchor="start"
          dominantBaseline="middle"
        >
          {payload.nome}
        </text>
        {/* Porcentagem */}
        <text
          x={x + width + 10}
          y={y + height / 2 + 15}
          fill="#666"
          fontSize="11"
          textAnchor="start"
          dominantBaseline="middle"
        >
          {payload.porcentagem}%
        </text>
      </g>
    );
  };

  return (
    <div className="grafico-area">
      <div className="mb-6">
        <h3 className="grafico-titulo text-xl font-semibold text-gray-800">
          Evolução de Mapeamento
        </h3>
      </div>
      
      <div className="overflow-y-auto max-h-[350px] border border-gray-100 rounded-lg bg-white">
        <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 350,
            left: 20,
            bottom: 20,
          }}
        >
          <XAxis 
            type="number" 
            domain={[0, 100]} 
            hide
          />
          <YAxis 
            type="category"
            hide
          />
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Progresso']}
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '12px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
          />
          <Bar 
            dataKey="porcentagem" 
            shape={<CustomBar />}
            barSize={16}
          />
        </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraficoProcessos;
