
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
import { FINData } from '@/hooks/useFINData';

interface GraficoProcessosProps {
  finData?: FINData[];
}

const GraficoProcessos = ({ finData }: GraficoProcessosProps) => {
  console.log('GraficoProcessos - finData recebido:', finData);

  // Processar dados para o gráfico
  const processarDados = () => {
    if (!finData || finData.length === 0) {
      return [
        { nome: 'Operacionais', quantidade: 0 },
        { nome: 'Táticos', quantidade: 0 },
        { nome: 'Estratégicos', quantidade: 0 },
      ];
    }

    const operacionais = finData.filter(item => 
      item['Classificação_Nível_Processo']?.toLowerCase().includes('operacion')
    ).length;
    
    const taticos = finData.filter(item => 
      item['Classificação_Nível_Processo']?.toLowerCase().includes('tát')
    ).length;
    
    const estrategicos = finData.filter(item => 
      item['Classificação_Nível_Processo']?.toLowerCase().includes('estratég')
    ).length;

    return [
      { nome: 'Operacionais', quantidade: operacionais },
      { nome: 'Táticos', quantidade: taticos },
      { nome: 'Estratégicos', quantidade: estrategicos },
    ];
  };

  const data = processarDados();

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
