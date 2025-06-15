
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface SubprocessoFIN {
  Subprocesso_ID: string | number | null;
  Nome_Subprocesso: string | null;
  Classificação_Nível_Subprocesso: string | null;
}

// Busca subprocessos via fnc.FIN e agrupa pelo ID & outros campos
export function useSubprocessosFIN() {
  return useQuery({
    queryKey: ["fin-subprocessos"],
    queryFn: async () => {
      // Cast table name as any to avoid TS error (missing supabase types)
      const { data, error } = await (supabase.from as any)("fnc.FIN")
        .select(
          "Subprocesso_ID,Nome_Subprocesso,Classificação_Nível_Subprocesso"
        )
        .order("Nome_Subprocesso", { ascending: true })
        .limit(1000);
      if (error) throw error;
      return data as SubprocessoFIN[];
    },
  });
}
