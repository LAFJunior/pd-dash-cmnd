import { ProcessoDetalhado } from '@/types/processo';
import { Search, CheckCircle, ClipboardCheck, Eye, Settings, AlertTriangle, Users, BarChart3, FileSearch } from 'lucide-react';

// Processos do Pilar Auditor
export const auditoriaEstoque: ProcessoDetalhado = {
  id: 'AUD-08.1',
  nome: 'Auditoria de Estoque',
  descricao: 'Processo de auditoria física de estoque incluindo contagem, análise de divergências e finalização',
  nivel: 'Operacional',
  icon: Search,
  cor: 'bg-blue-600',
  entrada: 'Contato prévio com a loja informando o inventário (geral ou preventivo) e solicitação de abertura de checklist no Topdesk',
  saida: 'Auditoria finalizada com resultado documentado com assinatura dos responsáveis da loja, análises concluídas e ações corretivas iniciadas',
  sistemas_utilizados: ['Coletor Opticon', 'Mega', 'WPS', 'Topdesk', 'QlikView'],
  subprocessos: [
    {
      id: '8.1.1',
      nome: 'Preparação da Auditoria',
      nivel: 'Operacional',
      ferramentas: ['MEGA', 'Excel', 'Planilhas'],
      tarefas: [
        {
          id: '8.1.1.1',
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
      id: '8.1.2',
      nome: 'Visita e Explicação Inicial',
      nivel: 'Operacional',
      ferramentas: ['Reunião presencial'],
      tarefas: [
        {
          id: '8.1.2.1',
          nome: 'Alinhar a auditoria com a liderança da loja',
          passos: [
            'Reunir-se com o gerente e líder de estoque para explicar o processo e o cronograma da auditoria'
          ]
        }
      ]
    },
    {
      id: '8.1.3',
      nome: 'Contagem',
      nivel: 'Operacional',
      ferramentas: ['Opticon', 'MEGA'],
      tarefas: [
        {
          id: '8.1.3.1',
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
      id: '8.1.4',
      nome: 'Análise de Divergências',
      nivel: 'Operacional',
      ferramentas: ['MEGA', 'Excel', 'QlikView'],
      tarefas: [
        {
          id: '8.1.4.1',
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
      id: '8.1.5',
      nome: 'Finalização e Encerramento',
      nivel: 'Operacional',
      ferramentas: ['Topdesk', 'MEGA', 'Excel'],
      tarefas: [
        {
          id: '8.1.5.1',
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

export const auditoriaCaixa: ProcessoDetalhado = {
  id: 'AUD-08.2',
  nome: 'Auditoria de Caixa',
  descricao: 'Processo de auditoria de valores em caixas e cofres da loja',
  nivel: 'Operacional',
  icon: Eye,
  cor: 'bg-blue-600',
  entrada: 'Solicitação da diretoria ou inclusão em agenda periódica de auditorias operacionais',
  saida: 'Auditoria de caixa concluída com resultados registrados e enviados à controladoria',
  sistemas_utilizados: ['Mega', 'Excel', 'Topdesk'],
  subprocessos: [
    {
      id: '8.2.1',
      nome: 'Conferência',
      nivel: 'Operacional',
      ferramentas: ['MEGA', 'Sistema de caixa'],
      tarefas: [
        {
          id: '8.2.1.1',
          nome: 'Análise de valores físicos e sistêmicos',
          passos: [
            'Contar valores em todos os caixas e cofres da loja',
            'Comparar com valores do sistema e identificar sobras/faltas'
          ]
        }
      ]
    },
    {
      id: '8.2.2',
      nome: 'Registro',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Topdesk'],
      tarefas: [
        {
          id: '8.2.2.1',
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

export const atendimentoChamados: ProcessoDetalhado = {
  id: 'AUD-08.3',
  nome: 'Atendimento de Chamados (Topdesk)',
  descricao: 'Atendimento técnico aos chamados da loja via sistema Topdesk',
  nivel: 'Operacional',
  icon: Settings,
  cor: 'bg-blue-600',
  entrada: 'Recebimento de chamados da loja via sistema Topdesk',
  saida: 'Chamado resolvido com estoque ajustado e suporte prestado à loja',
  sistemas_utilizados: ['Mega', 'Excel', 'Topdesk'],
  subprocessos: [
    {
      id: '8.3.1',
      nome: 'Análise e Resolução',
      nivel: 'Operacional',
      ferramentas: ['MEGA', 'Excel', 'Topdesk'],
      tarefas: [
        {
          id: '8.3.1.1',
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

export const planejamentoAuditorias: ProcessoDetalhado = {
  id: 'AUD-08.4',
  nome: 'Planejamento de Auditorias (Coordenador)',
  descricao: 'Elaboração de cronograma e planejamento estratégico das auditorias',
  nivel: 'Tático',
  icon: BarChart3,
  cor: 'bg-blue-600',
  entrada: 'Definição de metas, riscos e prioridades pela coordenação da auditoria',
  saida: 'Cronograma de auditoria publicado e alinhado com metas e riscos',
  sistemas_utilizados: ['Excel'],
  subprocessos: [
    {
      id: '8.4.1',
      nome: 'Elaboração do Cronograma',
      nivel: 'Tático',
      ferramentas: ['Excel', 'Análise de dados'],
      tarefas: [
        {
          id: '8.4.1.1',
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

export const execucaoAuditorias: ProcessoDetalhado = {
  id: 'AUD-08.5',
  nome: 'Execução das Auditorias Internas (Coordenador + Time)',
  descricao: 'Realização e supervisão das auditorias conforme cronograma',
  nivel: 'Tático',
  icon: Users,
  cor: 'bg-blue-600',
  entrada: 'Execução conforme cronograma planejado',
  saida: 'Auditorias executadas com dados completos para análise de conformidade',
  sistemas_utilizados: ['Excel', 'Topdesk', 'Mega'],
  subprocessos: [
    {
      id: '8.5.1',
      nome: 'Realização das Auditorias',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Topdesk', 'MEGA', 'Checklist'],
      tarefas: [
        {
          id: '8.5.1.1',
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

export const identificacaoRiscos: ProcessoDetalhado = {
  id: 'AUD-08.6',
  nome: 'Identificação de Riscos e Não Conformidades',
  descricao: 'Análise e classificação de riscos identificados nas auditorias',
  nivel: 'Tático',
  icon: AlertTriangle,
  cor: 'bg-blue-600',
  entrada: 'Dados coletados nas auditorias',
  saida: 'Riscos mapeados, causas identificadas e relatórios prontos para correção',
  sistemas_utilizados: ['Mega', 'QlikView'],
  subprocessos: [
    {
      id: '8.6.1',
      nome: 'Análise de Dados',
      nivel: 'Tático',
      ferramentas: ['MEGA', 'QlikView', 'Kardex'],
      tarefas: [
        {
          id: '8.6.1.1',
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

export const acompanhamentoRegionais: ProcessoDetalhado = {
  id: 'AUD-08.7',
  nome: 'Acompanhamento com Regionais e Diretores',
  descricao: 'Monitoramento e follow-up das ações corretivas',
  nivel: 'Tático',
  icon: BarChart3,
  cor: 'bg-blue-600',
  entrada: 'Resultados de auditorias anteriores com pendências de resolução',
  saida: 'Ações implementadas ou escaladas; melhoria contínua monitorada',
  sistemas_utilizados: ['Planilhas de controle', 'E-mail', 'Reuniões'],
  subprocessos: [
    {
      id: '8.7.1',
      nome: 'Follow-up',
      nivel: 'Tático',
      ferramentas: ['Planilhas de controle', 'E-mail', 'Reuniões'],
      tarefas: [
        {
          id: '8.7.1.1',
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

export const gestaoEquipe: ProcessoDetalhado = {
  id: 'AUD-08.8',
  nome: 'Gestão da Equipe de Auditoria',
  descricao: 'Coordenação e gestão do time de auditoria',
  nivel: 'Tático',
  icon: Users,
  cor: 'bg-blue-600',
  entrada: 'Definição de metas da área e perfil dos auditores',
  saida: 'Equipe alinhada, motivada e executando auditorias conforme padrão',
  sistemas_utilizados: ['Excel'],
  subprocessos: [
    {
      id: '8.8.1',
      nome: 'Organização da Equipe',
      nivel: 'Tático',
      ferramentas: ['Excel', 'Reuniões', 'Feedback'],
      tarefas: [
        {
          id: '8.9.1.1',
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

// Processos do Pilar Conferente
export const auditoriaEstoqueConferente: ProcessoDetalhado = {
  id: 'AUD-08.9',
  nome: 'Auditoria de Estoque – Conferente de Loja',
  descricao: 'Processo de auditoria de estoque executado pelo conferente de loja',
  nivel: 'Operacional',
  icon: CheckCircle,
  cor: 'bg-green-600',
  entrada: 'Agendamento da auditoria pelo Auditor responsável e disponibilização de relatório de estoque atualizado',
  saida: 'Estoque auditado com divergências corrigidas, relatórios atualizados e estoque com maior acuracidade',
  sistemas_utilizados: ['Coletor Opticon', 'Mega', 'Excel'],
  subprocessos: [
    {
      id: '8.9.1',
      nome: 'Preparação dos Equipamentos',
      nivel: 'Operacional',
      ferramentas: ['Opticon', 'Arquivos de estoque'],
      tarefas: [
        {
          id: '8.10.1.1',
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
      id: '8.9.2',
      nome: 'Contagem de Produtos',
      nivel: 'Operacional',
      ferramentas: ['Opticon'],
      tarefas: [
        {
          id: '8.10.2.1',
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
      id: '8.9.3',
      nome: 'Consolidação e Geração de Relatórios',
      nivel: 'Operacional',
      ferramentas: ['MEGA', 'Relatórios de inventário'],
      tarefas: [
        {
          id: '8.10.3.1',
          nome: 'Processamento das informações',
          passos: [
            'A contagem é processada no sistema Mega e transferida para os relatórios de inventário',
            'Relatórios são gerados com base na comparação entre físico e sistema'
          ]
        }
      ]
    },
    {
      id: '8.9.4',
      nome: 'Análise de Divergências',
      nivel: 'Operacional',
      ferramentas: ['MEGA', 'Kardex'],
      tarefas: [
        {
          id: '8.10.4.1',
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
      id: '8.9.5',
      nome: 'Finalização da Auditoria',
      nivel: 'Operacional',
      ferramentas: ['Mural', 'Documentos'],
      tarefas: [
        {
          id: '8.10.5.1',
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

export const conferenciaDivergencias: ProcessoDetalhado = {
  id: 'AUD-08.10',
  nome: 'Conferência e Correção de Divergências de Estoque',
  descricao: 'Processo de verificação e correção de divergências de estoque',
  nivel: 'Operacional',
  icon: FileSearch,
  cor: 'bg-green-600',
  entrada: 'Identificação de divergências entre estoque físico e sistema, originadas por auditorias, inventários ou sinalizações da operação',
  saida: 'Estoque ajustado com justificativa registrada, eliminando a divergência',
  sistemas_utilizados: ['Opticon', 'Mega'],
  subprocessos: [
    {
      id: '8.10.1',
      nome: 'Verificação Física',
      nivel: 'Operacional',
      ferramentas: ['Opticon', 'Relatório de divergências'],
      tarefas: [
        {
          id: '8.11.1.1',
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
      id: '8.10.2',
      nome: 'Ajuste de Estoque',
      nivel: 'Operacional',
      ferramentas: ['MEGA', 'Sistema de justificativas'],
      tarefas: [
        {
          id: '8.11.2.1',
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

export const suporteAuditoria: ProcessoDetalhado = {
  id: 'AUD-08.11',
  nome: 'Suporte à Auditoria',
  descricao: 'Apoio técnico e operacional durante as auditorias',
  nivel: 'Operacional',
  icon: Users,
  cor: 'bg-green-600',
  entrada: 'Visita de auditoria operacional programada ou extraordinária',
  saida: 'Auditoria realizada com suporte técnico e operacional do conferente; ações corretivas registradas',
  sistemas_utilizados: ['Mega'],
  subprocessos: [
    {
      id: '8.11.1',
      nome: 'Apoio à Auditoria',
      nivel: 'Operacional',
      ferramentas: ['MEGA', 'Kardex', 'Relatórios'],
      tarefas: [
        {
          id: '8.11.1.1',
          nome: 'Acompanhamento dos auditores',
          passos: [
            'Conferente acompanha os auditores na coleta de dados da operação',
            'Fornece informações e documentos quando solicitado (como relatórios de Kardex, inventários, extratos de movimentações etc.)'
          ]
        }
      ]
    },
    {
      id: '8.11.2',
      nome: 'Ação Corretiva',
      nivel: 'Operacional',
      ferramentas: ['MEGA', 'Plano de ação'],
      tarefas: [
        {
          id: '8.12.2.1',
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

export const contagemInventario: ProcessoDetalhado = {
  id: 'AUD-08.12',
  nome: 'Contagem de Estoque para Inventário Rotativo',
  descricao: 'Processo de contagem sistemática para inventário rotativo',
  nivel: 'Operacional',
  icon: ClipboardCheck,
  cor: 'bg-green-600',
  entrada: 'Cronograma de inventário definido pela liderança ou controle interno',
  saida: 'Contagem de estoque realizada e inventário atualizado com base em dados confiáveis',
  sistemas_utilizados: ['Opticon', 'Mega'],
  subprocessos: [
    {
      id: '8.12.1',
      nome: 'Preparação',
      nivel: 'Operacional',
      ferramentas: ['Opticon', 'Cronograma'],
      tarefas: [
        {
          id: '8.12.1.1',
          nome: 'Organização do ambiente e equipamentos',
          passos: [
            'Carregar coletores Opticon',
            'Identificar área a ser contada (por setor ou tipo de produto)'
          ]
        }
      ]
    },
    {
      id: '8.12.2',
      nome: 'Contagem',
      nivel: 'Operacional',
      ferramentas: ['Opticon'],
      tarefas: [
        {
          id: '8.12.2.1',
          nome: 'Coleta de dados físicos',
          passos: [
            'Realizar contagem e registrar no coletor, validando cada item com atenção ao código e quantidade',
            'Entregar os dados ao responsável para importação no sistema'
          ]
        }
      ]
    },
    {
      id: '8.12.3',
      nome: 'Ajuste de Resultados',
      nivel: 'Operacional',
      ferramentas: ['MEGA', 'Relatórios do sistema'],
      tarefas: [
        {
          id: '8.12.3.1',
          nome: 'Análise de diferenças',
          passos: [
            'Corrigir as diferenças encontradas com base na conferência física e relatórios do sistema'
          ]
        }
      ]
    }
  ]
};

// Array de processos do Auditor
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

// Array de processos do Conferente
export const processosConferente = [
  auditoriaEstoqueConferente,
  conferenciaDivergencias,
  suporteAuditoria,
  contagemInventario
];

// Array com todos os processos de auditoria
export const processosAuditoria = [
  ...processosAuditor,
  ...processosConferente
];
