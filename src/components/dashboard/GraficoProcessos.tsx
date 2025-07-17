
import { useMemo } from 'react';
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
import { contarProcessosPorDepartamento } from '@/data/processos';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold">{label}</p>
        <p className="text-sm">
          <span className="text-blue-600">Quantidade: {data.quantidade}</span>
        </p>
        <p className="text-sm">
          <span className="text-green-600">Porcentagem: {data.porcentagem.toFixed(1)}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const GraficoProcessos = () => {
  const dadosDepartamentos = useMemo(() => {
    return contarProcessosPorDepartamento();
  }, []);

  return (
    <div className="grafico-area">
      <div className="mb-4">
        <h3 className="grafico-titulo">Evolução do Mapeamento de Processos</h3>
      </div>
      
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          data={dadosDepartamentos}
          layout="vertical"
          margin={{
            top: 10,
            right: 30,
            left: 120,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            type="number" 
            domain={[0, 100]}
            tickFormatter={(value) => `${value}%`}
          />
          <YAxis 
            dataKey="nome" 
            type="category" 
            scale="band" 
            tickLine={false}
            axisLine={true}
            width={110}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar 
            dataKey="porcentagem" 
            name="Porcentagem (%)" 
            fill="#33C3F0"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoProcessos;
