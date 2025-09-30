import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface FilterTabsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  postCounts: {
    todos: number;
    comunicacao: number;
    celebracao: number;
    evento: number;
    campanha: number;
  };
}

const FilterTabs = ({ activeFilter, onFilterChange, postCounts }: FilterTabsProps) => {
  return (
    <Tabs value={activeFilter} onValueChange={onFilterChange}>
      <TabsList className="w-full justify-start overflow-x-auto">
        <TabsTrigger value="todos">
          Todos ({postCounts.todos})
        </TabsTrigger>
        <TabsTrigger value="comunicacao">
          Comunicação ({postCounts.comunicacao})
        </TabsTrigger>
        <TabsTrigger value="celebracao">
          Celebração ({postCounts.celebracao})
        </TabsTrigger>
        <TabsTrigger value="evento">
          Evento ({postCounts.evento})
        </TabsTrigger>
        <TabsTrigger value="campanha">
          Campanha ({postCounts.campanha})
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default FilterTabs;
