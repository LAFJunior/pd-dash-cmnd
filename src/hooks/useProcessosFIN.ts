
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface ProcessoFIN {
  Processo_ID: string | number | null;
  Nome_Processo: string | null;
  Classificação_Nível_Processo: string | null;
}

// Busca processos via fnc.FIN e agrupa pelo ID & outros campos
export function useProcessosFIN() {
  return useQuery({
    queryKey: ["fin-processos"],
    queryFn: async () => {
      // Cast table name as any to avoid TS error (missing supabase types)
      const { data, error } = await (supabase.from as any)("fnc.FIN")
        .select("Processo_ID,Nome_Processo,Classificação_Nível_Processo")
        .order("Nome_Processo", { ascending: true })
        .limit(1000);
      if (error) throw error;
      return data as ProcessoFIN[];
    },
  });
}
