# PD Dash CMND - Processos Digitais Grupo Oscar

Sistema de dashboard para visualização e gestão de processos digitais do Grupo Oscar, com chat integrado de IA.

## Estrutura do Projeto

```
pd-dash-cmnd/
├── src/                    # Frontend React/TypeScript
├── backend/               # Backend do sistema
│   └── chat-agent/       # Agente IA de chat
├── public/               # Arquivos estáticos
├── supabase/            # Configurações do banco
└── docs/                # Documentação
```

## Funcionalidades

- 📊 Dashboard de processos por departamento
- 🗺️ Mapa interativo de contexto organizacional
- 🤖 **Agente IA Grupo Oscar** - Chat inteligente para suporte
- 👥 Gestão de usuários e permissões
- 📈 Analytics e relatórios
- 📱 Interface responsiva

## Agente IA Grupo Oscar

O sistema inclui um chat inteligente que conhece os processos do Grupo Oscar:

### Conhecimento Base
- Processos de Auditoria
- Processos Contábeis
- Processos de Controladoria
- Departamento Pessoal
- E-commerce
- Processos Financeiros

### Como usar
1. Inicie o backend: `start-backend.bat`
2. Acesse a aba "Agente IA" no dashboard
3. Faça perguntas sobre processos, procedimentos e estrutura organizacional

## Instalação e Execução

### Frontend
```bash
npm install
npm run dev
```

### Backend do Chat
```bash
# Windows
start-backend.bat

# Ou manualmente:
cd backend/chat-agent
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

### Configuração
1. Configure as variáveis de ambiente no `.env`
2. Configure a chave da OpenAI no backend
3. Configure o Supabase para autenticação

## Tecnologias

- **Frontend**: React, TypeScript, Tailwind CSS, Vite
- **Backend**: Python, Flask, OpenAI API
- **Banco**: Supabase (PostgreSQL)
- **UI**: shadcn/ui, Lucide Icons
- **Charts**: Recharts
- **Maps**: React Flow

## Desenvolvimento

O projeto está organizado para facilitar o desenvolvimento e manutenção:

- Frontend e backend separados
- Chat IA como módulo independente
- Base de conhecimento em JSON
- Interface moderna e responsiva

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request