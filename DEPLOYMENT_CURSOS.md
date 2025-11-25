# 🚀 Guia de Deployment - Sistema de Cursos

## ✅ Checklist de Implementação

### 1. Banco de Dados (Supabase)

- [ ] Aplicar migration principal:
  ```bash
  # No Supabase Dashboard > SQL Editor
  # Executar: supabase/migrations/20251125000000_create_courses_system.sql
  ```

- [ ] Aplicar migration de dados de exemplo:
  ```bash
  # No Supabase Dashboard > SQL Editor
  # Executar: supabase/migrations/20251125000001_seed_courses_data.sql
  ```

- [ ] Verificar tabelas criadas:
  - `courses`
  - `course_modules`
  - `course_lessons`
  - `user_course_progress`
  - `user_lesson_progress`

- [ ] Verificar políticas RLS ativas
- [ ] Verificar trigger `trigger_update_course_progress`

### 2. Frontend

- [ ] Instalar dependências (se necessário):
  ```bash
  cd pd-dash-cmnd
  npm install
  # ou
  bun install
  ```

- [ ] Verificar arquivos criados:
  - ✅ `src/types/course.ts`
  - ✅ `src/hooks/useCourses.tsx`
  - ✅ `src/hooks/useLessonProgress.tsx`
  - ✅ `src/components/courses/CourseCard.tsx`
  - ✅ `src/components/courses/ModuleList.tsx`
  - ✅ `src/components/courses/LessonViewer.tsx`
  - ✅ `src/pages/Cursos.tsx`
  - ✅ `src/pages/CursoDetalhes.tsx`

- [ ] Verificar rotas em `App.tsx`:
  - ✅ `/cursos` → Cursos
  - ✅ `/cursos/:id` → CursoDetalhes

- [ ] Verificar menu lateral atualizado (Sidebar.tsx)

### 3. Build e Deploy

- [ ] Executar build local para testar:
  ```bash
  npm run build
  # ou
  bun run build
  ```

- [ ] Verificar se não há erros de TypeScript
- [ ] Testar localmente:
  ```bash
  npm run dev
  # ou
  bun run dev
  ```

- [ ] Deploy para produção:
  ```bash
  # Se usando Vercel, Netlify, etc.
  npm run build
  # Fazer deploy do diretório dist/
  ```

## 🧪 Testes Manuais

### Teste 1: Visualizar Cursos
1. Fazer login na plataforma
2. Clicar em "Cursos" no menu lateral
3. Verificar se os cursos aparecem
4. Testar filtros:
   - Busca por texto
   - Filtro por categoria
   - Filtro por nível
5. Testar tabs:
   - Todos
   - Em Andamento
   - Concluídos
   - Disponíveis

### Teste 2: Inscrever em Curso
1. Clicar em um curso não inscrito
2. Verificar informações do curso
3. Clicar em "Começar Curso"
4. Verificar se a inscrição foi realizada
5. Verificar se a primeira aula aparece

### Teste 3: Assistir Aula
1. Selecionar uma aula de vídeo
2. Verificar se o player carrega
3. Assistir alguns segundos
4. Verificar se o progresso é salvo
5. Marcar como concluída
6. Verificar se o status muda

### Teste 4: Progresso do Curso
1. Completar várias aulas
2. Verificar se a barra de progresso atualiza
3. Verificar se a porcentagem está correta
4. Completar todas as aulas
5. Verificar se o curso é marcado como 100%

### Teste 5: Tipos de Conteúdo
1. Testar aula de vídeo
2. Testar aula de texto (Markdown)
3. Testar quiz
4. Testar exercício
5. Verificar se todos renderizam corretamente

## 📊 Monitoramento

### Métricas para Acompanhar

1. **Engajamento:**
   - Número de inscrições por curso
   - Taxa de conclusão de aulas
   - Taxa de conclusão de cursos
   - Tempo médio de visualização

2. **Performance:**
   - Tempo de carregamento da página de cursos
   - Tempo de carregamento de vídeos
   - Tempo de resposta das queries

3. **Erros:**
   - Erros ao carregar cursos
   - Erros ao salvar progresso
   - Erros no player de vídeo

### Queries Úteis para Analytics

```sql
-- Cursos mais populares
SELECT c.title, COUNT(ucp.id) as inscricoes
FROM courses c
LEFT JOIN user_course_progress ucp ON c.id = ucp.course_id
GROUP BY c.id, c.title
ORDER BY inscricoes DESC;

-- Taxa de conclusão por curso
SELECT 
  c.title,
  COUNT(DISTINCT ucp.user_id) as total_usuarios,
  COUNT(DISTINCT CASE WHEN ucp.progress_percentage >= 100 THEN ucp.user_id END) as usuarios_concluiram,
  ROUND(COUNT(DISTINCT CASE WHEN ucp.progress_percentage >= 100 THEN ucp.user_id END)::numeric / 
        NULLIF(COUNT(DISTINCT ucp.user_id), 0) * 100, 2) as taxa_conclusao
FROM courses c
LEFT JOIN user_course_progress ucp ON c.id = ucp.course_id
GROUP BY c.id, c.title;

-- Progresso médio por curso
SELECT 
  c.title,
  ROUND(AVG(ucp.progress_percentage), 2) as progresso_medio
FROM courses c
LEFT JOIN user_course_progress ucp ON c.id = ucp.course_id
WHERE ucp.id IS NOT NULL
GROUP BY c.id, c.title
ORDER BY progresso_medio DESC;
```

## 🔧 Troubleshooting

### Problema: Cursos não aparecem
**Solução:**
1. Verificar se as migrations foram aplicadas
2. Verificar se `is_published = true`
3. Verificar políticas RLS
4. Verificar console do navegador para erros

### Problema: Progresso não atualiza
**Solução:**
1. Verificar se o trigger está ativo
2. Verificar logs do Supabase
3. Verificar se o usuário está autenticado
4. Verificar políticas RLS de update

### Problema: Vídeo não carrega
**Solução:**
1. Verificar URL do vídeo
2. Verificar CORS
3. Verificar formato do vídeo
4. Verificar componente VideoPlayer

### Problema: Erro de permissão
**Solução:**
1. Verificar se o usuário está autenticado
2. Verificar políticas RLS
3. Verificar role do usuário
4. Verificar se a tabela profiles existe

## 📝 Próximos Passos

1. **Adicionar URLs de vídeo reais** aos cursos de exemplo
2. **Criar conteúdo textual** para as aulas
3. **Implementar sistema de certificados**
4. **Adicionar avaliações e feedback**
5. **Criar dashboard de analytics** para administradores
6. **Implementar notificações** de novos cursos
7. **Adicionar gamificação** (badges, pontos)
8. **Criar sistema de comentários** nas aulas
9. **Implementar busca avançada**
10. **Adicionar recomendações** de cursos

## 🎉 Conclusão

O sistema de cursos está pronto para uso! Todos os componentes foram implementados seguindo as melhores práticas e inspirados nas plataformas DNC, Alura e Udemy.

**Arquivos de Documentação:**
- `CURSOS_README.md` - Documentação completa do sistema
- `CURSOS_INTERFACE_GUIDE.md` - Guia visual da interface
- `DEPLOYMENT_CURSOS.md` - Este arquivo

**Suporte:**
Para dúvidas ou problemas, consulte a documentação ou entre em contato com a equipe de desenvolvimento.

