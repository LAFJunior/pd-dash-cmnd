import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart3, Building2 } from 'lucide-react';

interface DashboardTabsProps {
  children: {
    painelControle: React.ReactNode;
    explorarCategorias: React.ReactNode;
  };
}

export const DashboardTabs = ({ children }: DashboardTabsProps) => {
  return (
    <Tabs defaultValue="painel" className="w-full">
      <TabsList className="grid w-full max-w-md grid-cols-2">
        <TabsTrigger value="painel" className="flex items-center gap-2">
          <BarChart3 className="h-4 w-4" />
          <span>Painel de Controle</span>
        </TabsTrigger>
        <TabsTrigger value="explorar" className="flex items-center gap-2">
          <Building2 className="h-4 w-4" />
          <span>Explorar por Categoria</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="painel" className="mt-6">
        {children.painelControle}
      </TabsContent>

      <TabsContent value="explorar" className="mt-6">
        {children.explorarCategorias}
      </TabsContent>
    </Tabs>
  );
};
