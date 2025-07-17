
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

// Dados fictícios para o gráfico de processos por nível
const data = [
  { nome: 'Operacionais', quantidade: 87 },
  { nome: 'Táticos', quantidade: 58 },
  { nome: 'Estratégicos', quantidade: 42 },
];

const GraficoProcessos = () => {
  return (
    <div className="grafico-area">
      <div className="mb-4">
        <h3 className="grafico-titulo">Processos por nível</h3>
      </div>
      
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 10,
            right: 30,
            left: 80,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis 
            dataKey="nome" 
            type="category" 
            scale="band" 
            tickLine={false}
            axisLine={true}
          />
          <Tooltip />
          <Legend />
          <Bar 
            dataKey="quantidade" 
            name="Quantidade" 
            fill="#33C3F0"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoProcessos;
