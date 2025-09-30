Sistema de Gestão de Processos Corporativos Sobre o Projeto

Sistema web desenvolvido para gerenciamento e visualização de processos corporativos. A plataforma oferece uma interface moderna e intuitiva para acompanhar fluxos de trabalho, estruturas departamentais e indicadores de desempenho organizacional. 🚀 Tecnologias Utilizadas

Frontend: React 18 + TypeScript + Vite
UI/UX: Tailwind CSS + Radix UI + shadcn/ui
Backend: Supabase (PostgreSQL + Auth + Edge Functions)
Estado: TanStack React Query
Roteamento: React Router DOM v6
Formulários: React Hook Form + Zod
Gráficos: Recharts
Mapas: React Flow + Leaflet
Temas: next-themes (Dark/Light mode)
✨ Funcionalidades Principais 📊 Dashboard Executivo

Visão geral de processos estratégicos, táticos e operacionais
Gráficos interativos com métricas de performance
Cards com indicadores-chave de cada departamento
Tabelas detalhadas de subprocessos e tarefas
🗺️ Mapa de Contexto

Visualização interativa da estrutura organizacional
Fluxos de trabalho entre departamentos
Mapeamento de responsabilidades e interdependências
🏪 Mapa de Lojas

Geolocalização de todas as unidades do grupo
Informações detalhadas de cada loja
Estrutura regional e hierárquica
🏢 Gestão de Departamentos

Controladoria: Conciliação bancária, gestão de contratos, despesas
E-commerce: Gestão comercial, logística, visual merchandising
Departamento Pessoal: Folha de pagamento, benefícios, rotinas sindicais
Auditoria: Inventários, conferências, controle de qualidade
Compras: Cotações, pedidos, cadastro de produtos
Contábil: Fechamentos mensais, integrações fiscais, relatórios
Financeiro: Fluxo de caixa, contas a pagar/receber
Fiscal: Apurações tributárias, obrigações acessórias
Recursos Humanos: Recrutamento, treinamentos, desenvolvimento
São José dos Campos: Operações do Centro de Distribuição
👥 Gestão de Colaboradores

Perfis detalhados com hierarquia organizacional
Controle de permissões por departamento e função
Sistema de autenticação seguro
🤖 Agente IA Oscar

Assistente virtual para consultas sobre processos
Integração com base de conhecimento corporativa
📚 Centro de Documentação

Biblioteca de processos organizados por departamento
Manuais técnicos e operacionais
Documentação PD (Processos e Desenvolvimento)
⚙️ Painel Administrativo

Gestão completa de usuários (exclusivo para super admin)
Reset de senhas e controle de acessos
Configurações do sistema
🏗️ Arquitetura do Sistema Frontend (React)

src/ ├── componentes/ # Componentes reutilizáveis ​​│ ├── ui/ # Sistema de design (shadcn/ui) │ ├── dashboard/ # Componentes do dashboard │ ├── departamento/ # Componentes departamentais │ └── mapa-contexto/ # Componentes de visualização ├── pages/ # Páginas da aplicação ├── hooks/ # Hooks customizados ├── data/ # Base de dados de processos ├── types/ # Definições TypeScript └── utils/ # Utilitários e helpers

Backend (Supabase)

Autenticação: Sistema seguro com JWT
Base de Dados: PostgreSQL com Row Level Security (RLS)
Edge Functions: Funcionalidades serverless
Políticas de Segurança: Controle granular de acesso
Estrutura de Dados

Processos: Estratégicos, Táticos e Operacionais
Subprocessos: Fluxos detalhados de cada área
Tarefas: Atividades específicas com responsáveis
Perfis: Usuários com permissões departamentais
🔐 Segurança e Permissões

Autenticação obrigatória para todas as funcionalidades
Controle de acesso baseado em departamentos
Níveis de permissão: Usuário, Admin, Super Admin
Row Level Security no banco de dados
Validação de formulários com Zod
🎨 Sistema de Design

Paleta de cores consistente com identidade corporativa
Componentes responsivos para desktop e mobile
Modo escuro/claro disponível
Iconografia com Lucide React
Tipografia otimizada para legibilidade
📱 Responsabilidade

Interface adaptável para dispositivos móveis
Navegação otimizada para touch
Sidebar colapsível em telas menores
Tabelas com scroll horizontal quando necessário
🚦 Como executar pré-requisitos

Node.js 20+
npm ou yarn
Conta no Supabase configurada
Instalação

Clone ou repositório
clone do git [URL_DO_REPOSITORIO]

Entre no diretório
cd [NOME_DO_PROJETO]

Instalar as dependências
instalação npm

Configurar como variáveis ​​de ambiente
cp .env.exemplo .env

Execute em modo desenvolvimento
npm executar dev

Construir para Produção

npm executar compilação

Implantar com Docker

docker build -t sistema-processos. docker run -p 80:80 sistema-processos
