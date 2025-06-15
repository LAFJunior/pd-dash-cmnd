
-- Permitir ao papel authenticated selecionar dados da tabela FIN no schema fnc
GRANT USAGE ON SCHEMA fnc TO authenticated;
GRANT SELECT ON TABLE fnc."FIN" TO authenticated;

-- Habilitar RLS na tabela
ALTER TABLE fnc."FIN" ENABLE ROW LEVEL SECURITY;

-- Política RLS básica para usuários logados (ajuste conforme desejado):
CREATE POLICY "Authenticated can read FIN" ON fnc."FIN"
FOR SELECT
USING (true);
