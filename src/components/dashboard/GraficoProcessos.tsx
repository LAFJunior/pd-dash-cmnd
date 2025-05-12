
import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

// Dados fictícios para o gráfico de processos
const data = [
  { nome: 'Jan', estrategicos: 40, taticos: 24, operacionais: 67 },
  { nome: 'Fev', estrategicos: 30, taticos: 45, operacionais: 85 },
  { nome: 'Mar', estrategicos: 20, taticos: 38, operacionais: 72 },
  { nome: 'Abr', estrategicos: 27, taticos: 60, operacionais: 90 },
  { nome: 'Mai', estrategicos: 33, taticos: 52, operacionais: 80 },
  { nome: 'Jun', estrategicos: 45, taticos: 70, operacionais: 95 },
];

const GraficoProcessos = () => {
  const [periodo, setPeriodo] = useState('semestre');
  
  return (
    <div className="grafico-area">
      <div className="flex justify-between items-center mb-4">
        <h3 className="grafico-titulo">Evolução de Processos</h3>
        <select 
          value={periodo} 
          onChange={(e) => setPeriodo(e.target.value)}
          className="text-sm border border-gray-300 rounded px-2 py-1"
        >
          <option value="semestre">Último Semestre</option>
          <option value="ano">Último Ano</option>
        </select>
      </div>
      
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nome" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="estrategicos" 
            name="Estratégicos"
            stackId="1" 
            stroke="#499B54" 
            fill="#499B54" 
          />
          <Area 
            type="monotone" 
            dataKey="taticos" 
            name="Táticos"
            stackId="1" 
            stroke="#E39D25" 
            fill="#E39D25" 
          />
          <Area 
            type="monotone" 
            dataKey="operacionais" 
            name="Operacionais"
            stackId="1" 
            stroke="#E85444" 
            fill="#E85444" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoProcessos;
