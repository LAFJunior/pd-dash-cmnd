import { ProcessoDetalhado } from '@/types/processo';
import { Search, FileCheck, ClipboardList, AlertTriangle, TrendingUp, Users, FileText, CheckCircle, Eye } from 'lucide-react';

// Processos do pilar Auditor
const auditoriaEstoque: ProcessoDetalhado = {
  id: 'aud-8.1',
  nome: 'Auditoria de Estoque',
  descricao: 'Processo de contagem e verificação de estoque em lojas com análise de divergências',
  nivel: 'Operacional',
  icon: Search,
  cor: '#3B82F6',
  entrada: 'Contato prévio com a loja informando o inventário (geral ou preventivo) e solicitação de abertura de checklist no Topdesk',
  saida: 'Auditoria finalizada com resultado documentado com assinatura dos responsáveis da loja, análises concluídas e ações corretivas iniciadas',
  sistemas_utilizados: ['Coletor Opticon', 'Mega', 'WPS', 'Topdesk', 'QlikView'],
  subprocessos: [
    {
      id: 'aud-8.1.1',
      nome: 'Preparação da Auditoria',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'Excel', 'Coletores'],
      tarefas: [
        {
          id: 'aud-8.1.1.1',
          nome: 'Definir escopo e preparar materiais',
          passos: [
            'Definir departamentos a serem auditados (em caso de preventiva)',
            'Preparar planilhas, relatórios no MEGA e pastas',
            'Verificar borderô da loja e etiquetas disponíveis',
            'Definir a estratégia da contagem e imprimir folhas com lista dos auditados'
          ]
        }
      ]
    },
    {
      id: 'aud-8.1.2',
      nome: 'Visita e Explicação Inicial',
      nivel: 'Operacional',
      ferramentas: ['Reunião'],
      tarefas: [
        {
          id: 'aud-8.1.2.1',
          nome: 'Alinhar a auditoria com a liderança da loja',
          passos: [
            'Reunir-se com o gerente e líder de estoque para explicar o processo e o cronograma da auditoria'
          ]
        }
      ]
    },
    {
      id: 'aud-8.1.3',
      nome: 'Contagem',
      nivel: 'Operacional',
      ferramentas: ['Opticon'],
      tarefas: [
        {
          id: 'aud-8.1.3.1',
          nome: 'Coleta física dos produtos',
          passos: [
            'Coletar produtos com coletores (Opticon)',
            'Separar produtos não cadastrados para checagem posterior',
            'Descarregar os coletores e iniciar comparação entre físico e sistema'
          ]
        }
      ]
    },
    {
      id: 'aud-8.1.4',
      nome: 'Análise de Divergências',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'Excel'],
      tarefas: [
        {
          id: 'aud-8.1.4.1',
          nome: 'Verificação e interpretação das críticas',
          passos: [
            'Gerar relatório com críticas (sobras e faltas)',
            'Verificar vendas, remessas, contagens da loja e possíveis erros de processo',
            'Confirmar relatórios, realizar ajustes no sistema e montar resultado'
          ]
        }
      ]
    },
    {
      id: 'aud-8.1.5',
      nome: 'Finalização e Encerramento',
      nivel: 'Operacional',
      ferramentas: ['Topdesk', 'Excel'],
      tarefas: [
        {
          id: 'aud-8.1.5.1',
          nome: 'Comunicação e registros',
          passos: [
            'Apresentar o resultado para gerente/líder, indicando erros de processo, organização, e suspeitas de furto',
            'Abrir chamado Topdesk com resultado, compartilhando com coordenador, regional e diretoria',
            'Encerrar o inventário no sistema e atualizar planilhas de controle'
          ]
        }
      ]
    }
  ]
};

const auditoriaCaixa: ProcessoDetalhado = {
  id: 'aud-8.2',
  nome: 'Auditoria de Caixa',
  descricao: 'Conferência de valores físicos e sistêmicos em caixas e cofres',
  nivel: 'Operacional',
  icon: FileCheck,
  cor: '#10B981',
  entrada: 'Solicitação da diretoria ou inclusão em agenda periódica de auditorias operacionais',
  saida: 'Auditoria de caixa concluída com resultados registrados e enviados à controladoria',
  sistemas_utilizados: ['Mega', 'Excel', 'Topdesk'],
  subprocessos: [
    {
      id: 'aud-8.2.1',
      nome: 'Conferência',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: 'aud-8.2.1.1',
          nome: 'Análise de valores físicos e sistêmicos',
          passos: [
            'Contar valores em todos os caixas e cofres da loja',
            'Comparar com valores do sistema e identificar sobras/faltas'
          ]
        }
      ]
    },
    {
      id: 'aud-8.2.2',
      nome: 'Registro',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Topdesk'],
      tarefas: [
        {
          id: 'aud-8.2.2.1',
          nome: 'Comunicação dos resultados',
          passos: [
            'Registrar resultados em relatório',
            'Abrir chamado no Topdesk e enviar para controladoria'
          ]
        }
      ]
    }
  ]
};

const atendimentoChamados: ProcessoDetalhado = {
  id: 'aud-8.3',
  nome: 'Atendimento de Chamados (Topdesk)',
  descricao: 'Análise e resolução de chamados recebidos das lojas',
  nivel: 'Operacional',
  icon: AlertTriangle,
  cor: '#F59E0B',
  entrada: 'Recebimento de chamados da loja via sistema Topdesk',
  saida: 'Chamado resolvido com estoque ajustado e suporte prestado à loja',
  sistemas_utilizados: ['Mega', 'Excel', 'Topdesk'],
  subprocessos: [
    {
      id: 'aud-8.3.1',
      nome: 'Análise e Resolução',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'Excel', 'Topdesk'],
      tarefas: [
        {
          id: 'aud-8.3.1.1',
          nome: 'Atendimento técnico ao chamado',
          passos: [
            'Analisar relatórios enviados pela loja sobre contagens ou divergências',
            'Confirmar necessidade e realizar inclusões ou ajustes no estoque via sistema',
            'Atender dúvidas, revisar documentos e orientar procedimentos conforme necessidade'
          ]
        }
      ]
    }
  ]
};

const planejamentoAuditorias: ProcessoDetalhado = {
  id: 'aud-8.4',
  nome: 'Planejamento de Auditorias (Coordenador)',
  descricao: 'Elaboração de cronograma anual e mensal de auditorias',
  nivel: 'Tático',
  icon: ClipboardList,
  cor: '#8B5CF6',
  entrada: 'Definição de metas, riscos e prioridades pela coordenação da auditoria',
  saida: 'Cronograma de auditoria publicado e alinhado com metas e riscos',
  sistemas_utilizados: ['Excel'],
  subprocessos: [
    {
      id: 'aud-8.4.1',
      nome: 'Elaboração do Cronograma',
      nivel: 'Tático',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: 'aud-8.4.1.1',
          nome: 'Planejar calendário de auditorias',
          passos: [
            'Analisar riscos, desvios, histórico de fraudes e indicadores',
            'Criar cronograma anual e mensal dividido por auditor e por área crítica',
            'Considerar solicitações da diretoria e demandas emergenciais'
          ]
        }
      ]
    }
  ]
};

const execucaoAuditorias: ProcessoDetalhado = {
  id: 'aud-8.5',
  nome: 'Execução das Auditorias Internas (Coordenador + Time)',
  descricao: 'Supervisão e realização de auditorias conforme cronograma',
  nivel: 'Tático',
  icon: Eye,
  cor: '#06B6D4',
  entrada: 'Execução conforme cronograma planejado',
  saida: 'Auditorias executadas com dados completos para análise de conformidade',
  sistemas_utilizados: ['Excel', 'Topdesk', 'Mega'],
  subprocessos: [
    {
      id: 'aud-8.5.1',
      nome: 'Realização das Auditorias',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Topdesk', 'Mega'],
      tarefas: [
        {
          id: 'aud-8.5.1.1',
          nome: 'Supervisão da execução',
          passos: [
            'Equipe realiza visitas, observações, contagens, valida documentos e coleta dados com checklist padronizado',
            'Coordenador acompanha andamento via planilhas e sistema'
          ]
        }
      ]
    }
  ]
};

const identificacaoRiscos: ProcessoDetalhado = {
  id: 'aud-8.6',
  nome: 'Identificação de Riscos e Não Conformidades',
  descricao: 'Análise e classificação de riscos identificados nas auditorias',
  nivel: 'Tático',
  icon: AlertTriangle,
  cor: '#EF4444',
  entrada: 'Dados coletados nas auditorias',
  saida: 'Riscos mapeados, causas identificadas e relatórios prontos para correção',
  sistemas_utilizados: ['Mega', 'QlikView'],
  subprocessos: [
    {
      id: 'aud-8.6.1',
      nome: 'Análise de Dados',
      nivel: 'Tático',
      ferramentas: ['Mega', 'QlikView'],
      tarefas: [
        {
          id: 'aud-8.6.1.1',
          nome: 'Classificação dos riscos e desvios',
          passos: [
            'Verificar indícios de fraudes, erros sistêmicos ou falhas de processo',
            'Usar cruzamento de dados, Kardex, análise estatística e documentos',
            'Classificar conforme impacto e urgência'
          ]
        }
      ]
    }
  ]
};

const acompanhamentoRegionais: ProcessoDetalhado = {
  id: 'aud-8.7',
  nome: 'Acompanhamento com Regionais e Diretores',
  descricao: 'Monitoramento de ações corretivas e follow-up de não conformidades',
  nivel: 'Tático',
  icon: TrendingUp,
  cor: '#10B981',
  entrada: 'Resultados de auditorias anteriores com pendências de resolução',
  saida: 'Ações implementadas ou escaladas; melhoria contínua monitorada',
  sistemas_utilizados: ['Planilhas de controle', 'E-mail', 'Reuniões'],
  subprocessos: [
    {
      id: 'aud-8.7.1',
      nome: 'Follow-up',
      nivel: 'Tático',
      ferramentas: ['Planilhas de controle', 'E-mail', 'Reuniões'],
      tarefas: [
        {
          id: 'aud-8.7.1.1',
          nome: 'Monitoramento de ações corretivas',
          passos: [
            'Elaborar plano de ação com prazos e responsáveis',
            'Acompanhar se as melhorias foram implementadas',
            'Escalar casos de não conformidade sem solução para níveis superiores'
          ]
        }
      ]
    }
  ]
};

const gestaoEquipe: ProcessoDetalhado = {
  id: 'aud-8.9',
  nome: 'Gestão da Equipe de Auditoria',
  descricao: 'Coordenação e desenvolvimento da equipe de auditoria',
  nivel: 'Tático',
  icon: Users,
  cor: '#6366F1',
  entrada: 'Definição de metas da área e perfil dos auditores',
  saida: 'Equipe alinhada, motivada e executando auditorias conforme padrão',
  sistemas_utilizados: ['Excel'],
  subprocessos: [
    {
      id: 'aud-8.9.1',
      nome: 'Organização da Equipe',
      nivel: 'Tático',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: 'aud-8.9.1.1',
          nome: 'Coordenação do time',
          passos: [
            'Distribuir tarefas conforme perfil técnico',
            'Estabelecer metas individuais e coletivas',
            'Realizar alinhamentos periódicos, reuniões e feedbacks',
            'Garantir capacitação e padronização dos processos'
          ]
        }
      ]
    }
  ]
};

// Processos do pilar Conferente
const auditoriaEstoqueConferente: ProcessoDetalhado = {
  id: 'aud-8.10',
  nome: 'Auditoria de Estoque – Conferente de Loja',
  descricao: 'Contagem física de estoque por conferente de loja',
  nivel: 'Operacional',
  icon: FileCheck,
  cor: '#059669',
  entrada: 'Agendamento da auditoria pelo Auditor responsável e disponibilização de relatório de estoque atualizado',
  saida: 'Estoque auditado com divergências corrigidas, relatórios atualizados e estoque com maior acuracidade',
  sistemas_utilizados: ['Coletor Opticon', 'Mega', 'Excel'],
  subprocessos: [
    {
      id: 'aud-8.10.1',
      nome: 'Preparação dos Equipamentos',
      nivel: 'Operacional',
      ferramentas: ['Opticon'],
      tarefas: [
        {
          id: 'aud-8.10.1.1',
          nome: 'Configuração dos coletores',
          passos: [
            'Remover arquivos antigos dos coletores Opticon',
            'Inserir novo arquivo de estoque gerado',
            'Carregar e organizar os coletores e bases para início da coleta'
          ]
        }
      ]
    },
    {
      id: 'aud-8.10.2',
      nome: 'Contagem de Produtos',
      nivel: 'Operacional',
      ferramentas: ['Opticon'],
      tarefas: [
        {
          id: 'aud-8.10.2.1',
          nome: 'Realização da contagem física',
          passos: [
            'Iniciar contagem por departamento (sapataria, esportivos etc.)',
            'Registrar as contagens no coletor Opticon, conforme orientação do auditor',
            'Após a contagem, entregar os coletores ao auditor para descarregar os arquivos'
          ]
        }
      ]
    },
    {
      id: 'aud-8.10.3',
      nome: 'Consolidação e Geração de Relatórios',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: 'aud-8.10.3.1',
          nome: 'Processamento das informações',
          passos: [
            'A contagem é processada no sistema Mega e transferida para os relatórios de inventário',
            'Relatórios são gerados com base na comparação entre físico e sistema'
          ]
        }
      ]
    },
    {
      id: 'aud-8.10.4',
      nome: 'Análise de Divergências',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Mega'],
      tarefas: [
        {
          id: 'aud-8.10.4.1',
          nome: 'Verificação e correção de erros',
          passos: [
            'Identificar produtos com sobras ou faltas no relatório',
            'Procurar fisicamente os itens, revisar prateleiras e abrir caixas para validar a divergência',
            'Realizar o "pente fino" e matar o relatório, verificando possíveis erros no Kardex',
            'Corrigir as divergências no sistema, se necessário'
          ]
        }
      ]
    },
    {
      id: 'aud-8.10.5',
      nome: 'Finalização da Auditoria',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: 'aud-8.10.5.1',
          nome: 'Encerramento do processo',
          passos: [
            'Organizar o estoque após conferência',
            'Colar o resumo da auditoria no mural',
            'Coletar assinaturas dos responsáveis pela loja'
          ]
        }
      ]
    }
  ]
};

const conferenciaDivergencias: ProcessoDetalhado = {
  id: 'aud-8.11',
  nome: 'Conferência e Correção de Divergências de Estoque',
  descricao: 'Verificação e correção de divergências entre estoque físico e sistema',
  nivel: 'Operacional',
  icon: CheckCircle,
  cor: '#10B981',
  entrada: 'Identificação de divergências entre estoque físico e sistema, originadas por auditorias, inventários ou sinalizações da operação',
  saida: 'Estoque ajustado com justificativa registrada, eliminando a divergência',
  sistemas_utilizados: ['Opticon', 'Mega'],
  subprocessos: [
    {
      id: 'aud-8.11.1',
      nome: 'Verificação Física',
      nivel: 'Operacional',
      ferramentas: ['Opticon'],
      tarefas: [
        {
          id: 'aud-8.11.1.1',
          nome: 'Localização e validação da mercadoria',
          passos: [
            'Conferente busca fisicamente os produtos apontados com erro no relatório de divergências',
            'Verifica se o item está alocado em local incorreto, se está em caixa, ou se foi lançado de forma errada',
            'Utiliza o coletor Opticon para conferir códigos e quantidades'
          ]
        }
      ]
    },
    {
      id: 'aud-8.11.2',
      nome: 'Ajuste de Estoque',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: 'aud-8.11.2.1',
          nome: 'Atualização no sistema',
          passos: [
            'Após validação física, realiza ajuste no sistema MEGA',
            'Registra justificativa de forma clara para manter histórico rastreável',
            'Informa a liderança ou auditor em caso de divergências não solucionadas'
          ]
        }
      ]
    }
  ]
};

const suporteAuditoria: ProcessoDetalhado = {
  id: 'aud-8.12',
  nome: 'Suporte à Auditoria',
  descricao: 'Apoio técnico e operacional durante visitas de auditoria',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#3B82F6',
  entrada: 'Visita de auditoria operacional programada ou extraordinária',
  saida: 'Auditoria realizada com suporte técnico e operacional do conferente; ações corretivas registradas',
  sistemas_utilizados: ['Mega'],
  subprocessos: [
    {
      id: 'aud-8.12.1',
      nome: 'Apoio à Auditoria',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: 'aud-8.12.1.1',
          nome: 'Acompanhamento dos auditores',
          passos: [
            'Conferente acompanha os auditores na coleta de dados da operação',
            'Fornece informações e documentos quando solicitado (como relatórios de Kardex, inventários, extratos de movimentações etc.)'
          ]
        }
      ]
    },
    {
      id: 'aud-8.12.2',
      nome: 'Ação Corretiva',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: 'aud-8.12.2.1',
          nome: 'Correção imediata de falhas',
          passos: [
            'Quando identificadas falhas ou incoerências, realiza ajustes pontuais no estoque',
            'Comunica a liderança e colabora na construção de plano de ação'
          ]
        }
      ]
    }
  ]
};

const contagemRotativa: ProcessoDetalhado = {
  id: 'aud-8.13',
  nome: 'Contagem de Estoque para Inventário Rotativo',
  descricao: 'Contagem periódica de estoque por setor ou tipo de produto',
  nivel: 'Operacional',
  icon: Search,
  cor: '#8B5CF6',
  entrada: 'Cronograma de inventário definido pela liderança ou controle interno',
  saida: 'Contagem de estoque realizada e inventário atualizado com base em dados confiáveis',
  sistemas_utilizados: ['Opticon', 'Mega'],
  subprocessos: [
    {
      id: 'aud-8.13.1',
      nome: 'Preparação',
      nivel: 'Operacional',
      ferramentas: ['Opticon'],
      tarefas: [
        {
          id: 'aud-8.13.1.1',
          nome: 'Organização do ambiente e equipamentos',
          passos: [
            'Carregar coletores Opticon',
            'Identificar área a ser contada (por setor ou tipo de produto)'
          ]
        }
      ]
    },
    {
      id: 'aud-8.13.2',
      nome: 'Contagem',
      nivel: 'Operacional',
      ferramentas: ['Opticon'],
      tarefas: [
        {
          id: 'aud-8.13.2.1',
          nome: 'Coleta de dados físicos',
          passos: [
            'Realizar contagem e registrar no coletor, validando cada item com atenção ao código e quantidade',
            'Entregar os dados ao responsável para importação no sistema'
          ]
        }
      ]
    },
    {
      id: 'aud-8.13.3',
      nome: 'Ajuste de Resultados',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: 'aud-8.13.3.1',
          nome: 'Análise de diferenças',
          passos: [
            'Corrigir as diferenças encontradas com base na conferência física e relatórios do sistema'
          ]
        }
      ]
    }
  ]
};

// Processos do pilar Auditor
export const processosAuditor = [
  auditoriaEstoque,
  auditoriaCaixa,
  atendimentoChamados,
  planejamentoAuditorias,
  execucaoAuditorias,
  identificacaoRiscos,
  acompanhamentoRegionais,
  gestaoEquipe
];

// Processos do pilar Conferente
export const processosConferente = [
  auditoriaEstoqueConferente,
  conferenciaDivergencias,
  suporteAuditoria,
  contagemRotativa
];

// Todos os processos de Auditoria
export const processosAuditoria = [
  ...processosAuditor,
  ...processosConferente
];