
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface SubprocessoFIN {
  Subprocesso_ID: string | number | null;
  Nome_Subprocesso: string | null;
  Classificação_Nível_Subprocesso: string | null;
}

export function useSubprocessosFIN() {
  return useQuery({
    queryKey: ["fin-subprocessos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("FIN")
        .select("Subprocesso_ID,Nome_Subprocesso,Classificação_Nível_Subprocesso")
        .order("Nome_Subprocesso", { ascending: true })
        .limit(1000)
        .schema("fnc");
      if (error) throw error;
      return data as SubprocessoFIN[];
    },
  });
}
