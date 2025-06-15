
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

type ProcessoFIN = {
  Classificação_Nível_Processo: string | null;
}

interface GraficoProcessosProps {
  processos?: ProcessoFIN[] | null;
  isLoading?: boolean;
}

const cores: Record<string, string> = {
  Operacional: "#2077c7",
  Tático: "#33C3F0",
  Estratégico: "#37c879",
};

function getContagemPorNivel(processos?: ProcessoFIN[] | null) {
  if (!processos) return [];
  const agrupado: Record<string, number> = { Operacional: 0, Tático: 0, Estratégico: 0 };
  for (const p of processos) {
    const nivel = p.Classificação_Nível_Processo;
    if (!nivel || !(nivel in agrupado)) continue;
    agrupado[nivel]++;
  }
  return [
    { nome: "Operacional", quantidade: agrupado["Operacional"] },
    { nome: "Tático", quantidade: agrupado["Tático"] },
    { nome: "Estratégico", quantidade: agrupado["Estratégico"] },
  ];
}

const GraficoProcessos = ({ processos, isLoading }: GraficoProcessosProps) => {
  const data = getContagemPorNivel(processos);

  return (
    <div className="grafico-area">
      <div className="mb-4">
        <h3 className="grafico-titulo">Processos por nível</h3>
      </div>
      {isLoading ? (
        <div className="text-gray-400 p-8 text-center">Carregando gráfico...</div>
      ) : (
        <ResponsiveContainer width="100%" height={280}>
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
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GraficoProcessos;
