
-- Criar função para acessar dados da tabela fnc.FIN
CREATE OR REPLACE FUNCTION get_fin_data()
RETURNS TABLE (
  "Processo_ID" TEXT,
  "Nome_Processo" TEXT,
  "Classificação_Nível_Processo" TEXT,
  "Descrição" TEXT
)
LANGUAGE sql
SECURITY DEFINER
AS $$
  SELECT 
    "Processo_ID",
    "Nome_Processo", 
    "Classificação_Nível_Processo",
    "Descrição"
  FROM fnc.FIN;
$$;
