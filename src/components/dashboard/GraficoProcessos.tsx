
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
  return (
    <div className="grafico-area">
      <div className="mb-4">
        <h3 className="grafico-titulo">Evolução de Mapeamento</h3>
      </div>
      
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 10,
            right: 30,
            left: 150,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            type="number" 
            domain={[0, 100]} 
            tickFormatter={(value) => `${value}%`}
            tick={{ fontSize: 12, fill: '#666' }}
            axisLine={{ stroke: '#e0e0e0' }}
            tickLine={{ stroke: '#e0e0e0' }}
          />
          <YAxis 
            dataKey="nome" 
            type="category" 
            tick={{ fontSize: 11, fill: '#333' }}
            tickLine={false}
            axisLine={false}
            width={140}
          />
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Progresso']}
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              fontSize: '12px'
            }}
          />
          <Bar 
            dataKey="porcentagem" 
            radius={[0, 3, 3, 0]}
            barSize={20}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoProcessos;
