import { useState } from 'react';
import { DashboardTabs } from '@/components/dashboard/DashboardTabs';
import { PainelControle } from '@/components/dashboard/PainelControle';
import { ExplorarCategorias } from '@/components/dashboard/ExplorarCategorias';
import { BuscaGlobal } from '@/components/dashboard/BuscaGlobal';

const Dashboard = () => {
  const [buscaGlobal, setBuscaGlobal] = useState('');

  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold">Dashboard de Processos</h1>
          <p className="text-muted-foreground mt-2">
            Visão unificada de todos os processos corporativos
          </p>
        </div>

        {/* Busca Global */}
        <BuscaGlobal 
          value={buscaGlobal} 
          onChange={setBuscaGlobal}
        />
      </div>

      {/* Tabs Principal */}
      <DashboardTabs>
        {{
          painelControle: <PainelControle buscaGlobal={buscaGlobal} />,
          explorarCategorias: <ExplorarCategorias buscaGlobal={buscaGlobal} />
        }}
      </DashboardTabs>
    </div>
  );
};

export default Dashboard;
