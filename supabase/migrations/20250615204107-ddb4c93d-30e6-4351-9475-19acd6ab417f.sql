
-- Criar o schema fnc se não existir
CREATE SCHEMA IF NOT EXISTS fnc;

-- Criar a tabela FIN no schema fnc
CREATE TABLE fnc.FIN (
  "Processo_ID" TEXT PRIMARY KEY,
  "Nome_Processo" TEXT NOT NULL,
  "Classificação_Nível_Processo" TEXT NOT NULL,
  "Descrição" TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Inserir os dados de exemplo
INSERT INTO fnc.FIN ("Processo_ID", "Nome_Processo", "Classificação_Nível_Processo", "Descrição") 
VALUES 
  ('1.1', 'Recebimento e controle de despesas a pagar', 'Operacional', 'Processo para controle e gestão de despesas a pagar da organização');

-- Habilitar RLS (Row Level Security) - opcional, mas recomendado
ALTER TABLE fnc.FIN ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir leitura pública (ajuste conforme necessário)
CREATE POLICY "Allow public read access on FIN" ON fnc.FIN FOR SELECT USING (true);
