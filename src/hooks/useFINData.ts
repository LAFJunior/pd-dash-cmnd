
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface FINData {
  Processo_ID: string;
  Nome_Processo: string;
  'Classificação_Nível_Processo': string;
  Descrição?: string;
}

export const useFINData = () => {
  return useQuery({
    queryKey: ['fin-data'],
    queryFn: async () => {
      console.log('Buscando dados da tabela fnc.FIN...');

      // The type returned by supabase.rpc is not properly known, so cast explicitly:
      const { data, error } = await supabase.rpc('get_fin_data') as {
        data: FINData[] | null;
        error: any;
      };

      if (error) {
        console.error('Erro ao buscar dados FIN:', error);
        throw error;
      }

      console.log('Dados FIN encontrados:', data);
      return data ?? [];
    },
  });
};
