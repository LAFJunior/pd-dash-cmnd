# Sistema de Cursos e Treinamentos

## 📚 Visão Geral

Sistema moderno de cursos e treinamentos inspirado em plataformas como DNC, Alura e Udemy, com funcionalidades de:

- ✅ Listagem de cursos com filtros
- ✅ Progresso individual por aula e curso
- ✅ Diferentes tipos de conteúdo (vídeo, texto, quiz, exercício)
- ✅ Tracking automático de progresso
- ✅ Interface moderna e responsiva
- ✅ Sistema de módulos e aulas

## 🚀 Funcionalidades Implementadas

### 1. Banco de Dados
- **Tabelas criadas:**
  - `courses` - Cursos disponíveis
  - `course_modules` - Módulos/seções dos cursos
  - `course_lessons` - Aulas individuais
  - `user_course_progress` - Progresso do usuário nos cursos
  - `user_lesson_progress` - Progresso do usuário nas aulas

- **Triggers automáticos:**
  - Atualização automática do progresso do curso quando uma aula é concluída
  - Cálculo de porcentagem de conclusão

### 2. Páginas

#### `/cursos` - Listagem de Cursos
- Grid de cards com todos os cursos
- Filtros por:
  - Busca textual
  - Categoria
  - Nível (iniciante, intermediário, avançado)
- Tabs para organizar:
  - Todos os cursos
  - Em andamento
  - Concluídos
  - Disponíveis
- Estatísticas de progresso

#### `/cursos/:id` - Detalhes do Curso
- Informações completas do curso
- Lista de módulos e aulas
- Visualizador de conteúdo
- Barra de progresso
- Botão de inscrição
- Informações do instrutor

### 3. Componentes

#### CourseCard
- Card visual do curso
- Badge de nível e categoria
- Informações do instrutor
- Barra de progresso (se inscrito)

#### ModuleList
- Lista expansível de módulos
- Indicador de progresso por módulo
- Lista de aulas com status
- Duração de cada aula

#### LessonViewer
- Player de vídeo com tracking
- Visualizador de conteúdo textual (Markdown)
- Suporte para quiz e exercícios
- Botão para marcar como concluída
- Salvamento automático de progresso

### 4. Hooks Customizados

#### useCourses
- Busca todos os cursos
- Inclui progresso do usuário
- Cache automático

#### useCourseDetails
- Busca detalhes completos do curso
- Módulos e aulas organizados
- Progresso detalhado

#### useLessonProgress
- Atualiza progresso da aula
- Marca aula como concluída
- Salva posição do vídeo
- Tracking de tempo assistido

#### useEnrollCourse
- Inscreve usuário no curso
- Cria registro de progresso

## 📋 Como Usar

### 1. Aplicar Migrations

Execute as migrations no Supabase:

```bash
# Migration principal (schema)
supabase/migrations/20251125000000_create_courses_system.sql

# Migration de dados de exemplo
supabase/migrations/20251125000001_seed_courses_data.sql
```

### 2. Acessar o Sistema

1. Faça login na plataforma
2. Clique em "Cursos" no menu lateral
3. Navegue pelos cursos disponíveis
4. Clique em um curso para ver detalhes
5. Clique em "Começar Curso" para se inscrever
6. Assista às aulas e marque como concluídas

### 3. Adicionar Novos Cursos

Para adicionar cursos via SQL:

```sql
-- 1. Criar o curso
INSERT INTO public.courses (title, description, category, level, duration_hours, instructor_name, is_published)
VALUES ('Nome do Curso', 'Descrição', 'Categoria', 'iniciante', 10.0, 'Instrutor', true);

-- 2. Adicionar módulos
INSERT INTO public.course_modules (course_id, title, description, order_index)
VALUES ('course_id_aqui', 'Módulo 1', 'Descrição', 1);

-- 3. Adicionar aulas
INSERT INTO public.course_lessons (module_id, title, description, content_type, video_url, video_duration, order_index, is_free)
VALUES ('module_id_aqui', 'Aula 1', 'Descrição', 'video', 'url_do_video', 600, 1, false);
```

## 🎨 Tipos de Conteúdo Suportados

1. **Vídeo** (`video`)
   - Player integrado
   - Tracking de progresso
   - Salvamento de posição
   - Marcação automática ao assistir 90%

2. **Texto** (`text`)
   - Suporte a Markdown
   - Formatação rica
   - Imagens e links

3. **Quiz** (`quiz`)
   - Perguntas e respostas
   - Feedback interativo

4. **Exercício** (`exercise`)
   - Atividades práticas
   - Instruções detalhadas

## 🔒 Permissões

### Usuários Comuns
- Ver cursos publicados
- Se inscrever em cursos
- Assistir aulas
- Marcar progresso

### Administradores
- Todas as permissões de usuários
- Criar/editar/excluir cursos
- Gerenciar módulos e aulas
- Ver estatísticas de todos os usuários

## 📊 Métricas e Analytics

O sistema rastreia automaticamente:
- Tempo de visualização de vídeos
- Última posição assistida
- Data de conclusão de aulas
- Progresso percentual do curso
- Data de inscrição
- Último acesso ao curso

## 🎯 Próximos Passos Sugeridos

1. **Certificados**
   - Gerar certificado ao concluir curso
   - Download em PDF

2. **Avaliações**
   - Sistema de notas
   - Feedback dos alunos

3. **Gamificação**
   - Pontos e badges
   - Ranking de alunos

4. **Notificações**
   - Lembrete de aulas pendentes
   - Novos cursos disponíveis

5. **Relatórios**
   - Dashboard de analytics
   - Relatórios de progresso

## 🛠️ Tecnologias Utilizadas

- **Frontend:** React + TypeScript
- **UI:** Shadcn/ui + Tailwind CSS
- **Backend:** Supabase (PostgreSQL)
- **State Management:** TanStack Query
- **Routing:** React Router
- **Video Player:** VideoPlayer customizado
- **Markdown:** react-markdown + remark-gfm

