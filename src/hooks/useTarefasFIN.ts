
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface TarefaFIN {
  Tarefa_ID: string | number | null;
  Descrição_Tarefa: string | null;
  Processo_ID: string | number | null;
}

// Busca tarefas via fnc.FIN
export function useTarefasFIN() {
  return useQuery({
    queryKey: ["fin-tarefas"],
    queryFn: async () => {
      // Cast table name as any to avoid TS error (missing supabase types)
      const { data, error } = await (supabase.from as any)("fnc.FIN")
        .select("Tarefa_ID,Descrição_Tarefa,Processo_ID")
        .order("Tarefa_ID", { ascending: true })
        .limit(1000);
      if (error) throw error;
      return data as TarefaFIN[];
    },
  });
}
