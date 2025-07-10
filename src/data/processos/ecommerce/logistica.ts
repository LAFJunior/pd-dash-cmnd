
import { Package, Headphones, Truck, BarChart2, Repeat, FileSearch, Clock, AlertCircle, ListOrdered } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

export const operacoesAftersale: ProcessoDetalhado = {
  id: 'LOG-001',
  nome: 'Operações no Sistema Aftersale',
  descricao: 'Demanda de atualização cadastral ou necessidade de extração/atualização de dados referentes a devoluções e reversas via plataforma Aftersale',
  icon: Package,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Demanda de atualização cadastral ou necessidade de extração/atualização de dados referentes a devoluções e reversas via plataforma Aftersale.',
  saida: 'Lojas cadastradas/atualizadas corretamente no Aftersale, base de reversas exportada e tratada, planilha e dashboard atualizados, ações tomadas com base nas análises de dados.',
  sistemas_utilizados: ['Aftersale', 'Google Sheets', 'Jira', 'Looker Studio'],
  tempo_execucao: '2-4 horas',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '1.1',
      nome: 'Cadastro e Atualização de Lojas',
      nivel: 'Operacional',
      ferramentas: ['Plataforma Aftersale'],
      tarefas: [
        {
          id: '1.1.1',
          nome: 'Atualizar informações cadastrais das lojas',
          passos: [
            'Acessar: https://admin.troquefacil.com.br/settings',
            'Navegar até: Configurações ➞ Omni ➞ Minhas lojas',
            'Clicar em "Editar"',
            'Atualizar dados da loja',
            'Atualizar endereço',
            'Atualizar detalhes',
            'Atualizar contrato dos Correios',
            'Inserir o cartão postal'
          ],
          urls: ['https://admin.troquefacil.com.br/settings']
        }
      ]
    },
    {
      id: '1.2',
      nome: 'Exportar Base de Dados da Aftersale',
      nivel: 'Operacional',
      ferramentas: ['Plataforma Aftersale'],
      tarefas: [
        {
          id: '1.2.1',
          nome: 'Exportar produtos com entregas realizadas',
          passos: [
            'Acessar: https://admin.troquefacil.com.br/login',
            'Selecionar: Grupo Varejo Sul (IFC) ➞ Oscar Calçados',
            'Navegar até: Reversas ➞ Entrega realizada',
            'Clicar em "Exportar produtos"',
            'Se não houver pedidos: Verificar se há pedidos "Em Trânsito" que ainda não mudaram de status',
            'Verificar pedidos em "Pendência Fiscal"',
            'Em caso de erro, abrir chamado para Infracommerce',
            'Informar o time SAC por planilha, se necessário'
          ],
          urls: ['https://admin.troquefacil.com.br/login']
        }
      ]
    },
    {
      id: '1.3',
      nome: 'Atualizar Base no Google Sheets',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets', 'Jira'],
      tarefas: [
        {
          id: '1.3.1',
          nome: 'Atualizar informações da planilha de devoluções',
          passos: [
            'Acessar planilha compartilhada de devoluções',
            'Verificar e remover duplicidades',
            'Confirmar recebimento (via Jira/IFC)',
            'Atualizar status de recebimento (No prazo / Em atraso)',
            'Atualizar datas (Aprovado Aftersale)',
            'Atualizar status da logística',
            'Se risco de atraso (>4 dias úteis), abrir chamado'
          ]
        }
      ]
    },
    {
      id: '1.4',
      nome: 'Atualizar Dados no Looker Studio',
      nivel: 'Operacional',
      ferramentas: ['Google Looker Studio'],
      tarefas: [
        {
          id: '1.4.1',
          nome: 'Validar indicadores e tomar ações',
          passos: [
            'Acessar: Looker Studio ➞ Relatório IFC',
            'Verificar performance da Infracommerce',
            'Verificar pendências',
            'Se necessário, reabrir chamados e acionar times'
          ]
        }
      ]
    }
  ]
};

export const chamadosTecnicos: ProcessoDetalhado = {
  id: 'LOG-002',
  nome: 'Chamados Técnicos e Operacionais',
  descricao: 'Identificação de problemas operacionais, falhas sistémicas ou necessidade de suporte técnico',
  icon: Headphones,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Identificação de problemas operacionais, falhas sistémicas ou necessidade de suporte técnico.',
  saida: 'Chamados registrados corretamente e em acompanhamento contínuo com evidências e histórico.',
  sistemas_utilizados: ['Jira (Infracommerce)', 'Topdesk (Grupo Oscar)'],
  tempo_execucao: '30-60 minutos',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '2.1',
      nome: 'Abertura de Chamados na Infracommerce no Jira',
      nivel: 'Operacional',
      ferramentas: ['Jira (Infracommerce)'],
      tarefas: [
        {
          id: '2.1.1',
          nome: 'Registrar chamado no Jira',
          passos: [
            'Acessar: https://infracommerce.atlassian.net/servicedesk/customer/user/login',
            'Selecionar: Client Success B2C ➞ Outros ➞ Dúvidas gerais',
            'Preencher: Resumo (título do problema)',
            'Preencher: Descrição detalhada',
            'Cadastrar no canal "D2C site próprio/flagship store"',
            'Compartilhar com "Oscar Calçados"'
          ],
          urls: ['https://infracommerce.atlassian.net/servicedesk/customer/user/login']
        }
      ]
    },
    {
      id: '2.2',
      nome: 'Abertura de Chamados no Topdesk',
      nivel: 'Operacional',
      ferramentas: ['Topdesk (Grupo Oscar)'],
      tarefas: [
        {
          id: '2.2.1',
          nome: 'Registrar chamado no Topdesk',
          passos: [
            'Acessar: https://grupooscar.topdesk.net/tas/public/ssp/',
            'Selecionar: Departamento',
            'Selecionar: Assunto',
            'Selecionar: Setor de impacto',
            'Selecionar: Prioridade',
            'Selecionar: Sistema e Tipo',
            'Detalhar o chamado e anexar arquivos',
            'Enviar chamado'
          ],
          urls: ['https://grupooscar.topdesk.net/tas/public/ssp/']
        }
      ]
    },
    {
      id: '2.3',
      nome: 'Acompanhar Retornos e Atualizações',
      nivel: 'Operacional',
      ferramentas: ['Jira (Infracommerce)', 'Topdesk (Grupo Oscar)'],
      tarefas: [
        {
          id: '2.3.1',
          nome: 'Monitorar chamados em aberto',
          passos: [
            'Acessar área "Meus chamados"',
            'Selecionar chamado',
            'Verificar retorno do suporte',
            'Adicionar novas evidências, se necessário'
          ]
        }
      ]
    }
  ]
};

export const integracoesCorreios: ProcessoDetalhado = {
  id: 'LOG-003',
  nome: 'Integrações com Correios (CWS)',
  descricao: 'Necessidade de gerar ou atualizar chave de API dos Correios',
  icon: Truck,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Necessidade de gerar ou atualizar chave de API dos Correios.',
  saida: 'Nova chave gerada e pronta para uso nas integrações com a Aftersale e demais sistemas.',
  sistemas_utilizados: ['Portal CWS Correios'],
  tempo_execucao: '15-30 minutos',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '3.1',
      nome: 'Acessar o Portal CWS dos Correios',
      nivel: 'Operacional',
      ferramentas: ['Portal CWS Correios'],
      tarefas: [
        {
          id: '3.1.1',
          nome: 'Gerar nova chave de acesso',
          passos: [
            'Acessar: https://cws.correios.com.br/',
            'Fazer login com credenciais do contrato (solicitar ao analista)',
            'Ir em: "Gestão de acesso e APIs"',
            'Regerar código de chave',
            'Observação: a chave aparece apenas uma vez, armazenar com segurança. evitar regerar se já em uso em integrações.'
          ],
          urls: ['https://cws.correios.com.br/']
        }
      ]
    }
  ]
};

export const analiseOperacionalPowerBI: ProcessoDetalhado = {
  id: 'LOG-004',
  nome: 'Análise Operacional com Power BI (IFC)',
  descricao: 'Necessidade de analisar indicadores de operação da Infracommerce',
  icon: BarChart2,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Necessidade de analisar indicadores de operação da Infracommerce.',
  saida: 'Visão consolidada de desempenho logístico e operacional.',
  sistemas_utilizados: ['Power BI'],
  tempo_execucao: '30-45 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '4.1',
      nome: 'Acesso e Uso do Dashboard Power BI',
      nivel: 'Operacional',
      ferramentas: ['Power BI'],
      tarefas: [
        {
          id: '4.1.1',
          nome: 'Verificar performance via dashboard',
          passos: [
            'Acessar: Power BI Infracommerce',
            'Ajustar período de análise',
            'Selecionar loja "Oscar Calçados"',
            'Avaliar métricas e tendências'
          ]
        }
      ]
    }
  ]
};

export const exportacaoReversasIFC: ProcessoDetalhado = {
  id: 'LOG-005',
  nome: 'Exportação e Tratamento de Reversas IFC',
  descricao: 'Demanda de controle de reversas com base na data de solicitação',
  icon: Repeat,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Demanda de controle de reversas com base na data de solicitação.',
  saida: 'Controle de reversas atualizado em todas as ferramentas (Aftersale, Excel, Sheets, Dashboards).',
  sistemas_utilizados: ['Plataforma Aftersale', 'Excel', 'Google Sheets', 'Looker Studio'],
  tempo_execucao: '2-3 horas',
  frequencia: 'Semanal',
  subprocessos: [
    {
      id: '5.1',
      nome: 'Exportar Reversas na Aftersale',
      nivel: 'Operacional',
      ferramentas: ['Plataforma Aftersale'],
      tarefas: [
        {
          id: '5.1.1',
          nome: 'Filtrar e exportar reversas',
          passos: [
            'Acessar: https://admin.troquefacil.com.br/login',
            'Selecionar: Grupo Varejo Sul (IFC) ➞ Oscar Calçados',
            'Navegar até: Reversas',
            'Filtrar período: de "01/09/2024" até a data atual',
            'Exportar: Produtos',
            'Exportar: Reversas'
          ],
          urls: ['https://admin.troquefacil.com.br/login']
        }
      ]
    },
    {
      id: '5.2',
      nome: 'Atualizar Dados no Excel',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Google Sheets'],
      tarefas: [
        {
          id: '5.2.1',
          nome: 'Atualizar planilhas locais',
          passos: [
            'Colar pedidos nas planilhas: Base After',
            'Colar pedidos nas planilhas: Base After Frete',
            'Remover: Pedidos de filiais',
            'Remover: Cancelados',
            'Remover: Duplicados'
          ]
        }
      ]
    },
    {
      id: '5.3',
      nome: 'Atualizar Tabela Dinâmica',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Google Sheets'],
      tarefas: [
        {
          id: '5.3.1',
          nome: 'Atualizar todas as abas dinâmicas',
          passos: [
            'Abrir a planilha',
            'Atualizar todos os dados dinâmicos',
            'Verificar se as fórmulas estão atualizadas'
          ]
        }
      ]
    },
    {
      id: '5.4',
      nome: 'Atualizar Dashboard de Reversas IFC',
      nivel: 'Operacional',
      ferramentas: ['Looker Studio'],
      tarefas: [
        {
          id: '5.4.1',
          nome: 'Consolidar dados',
          passos: [
            'Colar os dados atualizados no report',
            'Analisar pedidos faturados',
            'Preparar o script de report'
          ]
        }
      ]
    },
    {
      id: '5.5',
      nome: 'Atualizar Base no Google Sheets',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '5.5.1',
          nome: 'Subir e tratar planilha no Sheets',
          passos: [
            'Acessar: Planilha Reversas IFC_v3',
            'Ir em: Arquivo ➞ Importar ➞ Upload',
            'Remover colunas/linhas em branco',
            'Ajustar formatações'
          ]
        }
      ]
    },
    {
      id: '5.6',
      nome: 'Atualizar Dinâmicas no Google Sheets',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Google Sheets'],
      tarefas: [
        {
          id: '5.6.1',
          nome: 'Garantir atualizações',
          passos: [
            'Validar se a dinâmica está atualizada',
            'Ajustar formatações, se necessário'
          ]
        }
      ]
    },
    {
      id: '5.7',
      nome: 'Atualizar Looker Studio',
      nivel: 'Operacional',
      ferramentas: ['Looker Studio'],
      tarefas: [
        {
          id: '5.7.1',
          nome: 'Atualizar dados no dashboard',
          passos: [
            'Acessar: https://lookerstudio.google.com/navigation/reporting',
            'Se necessário, clicar em "Mais opções" ➞ Atualizar dados'
          ],
          urls: ['https://lookerstudio.google.com/navigation/reporting']
        }
      ]
    },
    {
      id: '5.8',
      nome: 'Revisar Gráficos',
      nivel: 'Operacional',
      ferramentas: ['Looker Studio'],
      tarefas: [
        {
          id: '5.8.1',
          nome: 'Conferir legibilidade',
          passos: [
            'Validar se os gráficos estão legíveis',
            'Ajustar manualmente se necessário'
          ]
        }
      ]
    }
  ]
};

export const relatoriosExtravioGFL: ProcessoDetalhado = {
  id: 'LOG-006',
  nome: 'Relatórios de Extravio e Ressarcimento – GFL',
  descricao: 'Identificação de pedidos extraviados, necessidade de solicitar ressarcimento e acompanhar pagamento',
  icon: FileSearch,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Identificação de pedidos extraviados, necessidade de solicitar ressarcimento e acompanhar pagamento.',
  saida: 'Solicitações de ressarcimento enviadas e registradas com status atualizado e valores controlados.',
  sistemas_utilizados: ['Portal GFL', 'Planilha Google Sheets', 'E-mail Corporativo'],
  tempo_execucao: '1-2 horas',
  frequencia: 'Semanal',
  subprocessos: [
    {
      id: '6.1',
      nome: 'Exportar Pedidos no Portal GFL',
      nivel: 'Operacional',
      ferramentas: ['Portal GFL'],
      tarefas: [
        {
          id: '6.1.1',
          nome: 'Exportar pedidos com status "A indenizar"',
          passos: [
            'Acessar: https://gfl.sinclog.com.br/EntregasRelatorios/RelatorioGeralEntregas',
            'Navegar até: Relatórios ➞ Entregas',
            'Filtrar: Cliente: Paquetá',
            'Filtrar: Filial Embarcadora: Todos',
            'Filtrar: Status: A indenizar',
            'Filtrar: Data de cadastro: verificar data da última ocorrência'
          ],
          urls: ['https://gfl.sinclog.com.br/EntregasRelatorios/RelatorioGeralEntregas']
        }
      ]
    },
    {
      id: '6.2',
      nome: 'Verificar Valor de Frete no Portal GFL',
      nivel: 'Operacional',
      ferramentas: ['Portal GFL'],
      tarefas: [
        {
          id: '6.2.1',
          nome: 'Consultar valor de frete por pedido',
          passos: [
            'Acessar: https://gfl.sinclog.com.br/Financeiro/PreFaturaCTe',
            'Ir até: Fretes ➞ Cobrança ➞ Pré-fatura CTe',
            'Preencher: Número do pedido',
            'Em "Faturas": marcar "Sim"',
            'Modo de exibição: Nota fiscal',
            'Buscar'
          ],
          urls: ['https://gfl.sinclog.com.br/Financeiro/PreFaturaCTe']
        }
      ]
    },
    {
      id: '6.3',
      nome: 'Preencher a Nota de Débito – Valor do Pedido',
      nivel: 'Operacional',
      ferramentas: ['Planilha Google Sheets'],
      tarefas: [
        {
          id: '6.3.1',
          nome: 'Inserir valores do pedido e nota fiscal',
          passos: [
            'Atualizar: Valor dos produtos',
            'Atualizar: Valor do frete',
            'Atualizar: Número do pedido',
            'Atualizar: Número da nota fiscal',
            'Atualizar: Indenização de frete'
          ]
        }
      ]
    },
    {
      id: '6.4',
      nome: 'Preencher a Nota de Débito – Valor do Frete',
      nivel: 'Operacional',
      ferramentas: ['Planilha Google Sheets'],
      tarefas: [
        {
          id: '6.4.1',
          nome: 'Inserir valores do frete e nota fiscal',
          passos: [
            'Repetir preenchimento com foco nos dados da cobrança de frete'
          ]
        }
      ]
    },
    {
      id: '6.5',
      nome: 'Enviar Solicitação de Ressarcimento por E-mail',
      nivel: 'Operacional',
      ferramentas: ['E-mail Corporativo'],
      tarefas: [
        {
          id: '6.5.1',
          nome: 'Preparar e enviar a solicitação',
          passos: [
            'Salvar arquivos da ND em .xlsx e .pdf',
            'Anexar ao e-mail de solicitação'
          ]
        }
      ]
    },
    {
      id: '6.6',
      nome: 'Registrar Pedidos no Google Sheets',
      nivel: 'Operacional',
      ferramentas: ['Planilha Google Sheets'],
      tarefas: [
        {
          id: '6.6.1',
          nome: 'Atualizar planilha de controle',
          passos: [
            'Acessar: Planilha GFL Extravios',
            'Atualizar: Status para "Solicitado ressarcimento"',
            'Após recebimento do comprovante, alterar para "Finalizado"',
            'Atualizar: Valores na aba "Resumo"'
          ]
        }
      ]
    },
    {
      id: '6.7',
      nome: 'Solicitar Comprovante de Pagamento',
      nivel: 'Operacional',
      ferramentas: ['Portal GFL'],
      tarefas: [
        {
          id: '6.7.1',
          nome: 'Acompanhar e cobrar GFL',
          passos: [
            'Verificar prazo de resposta',
            'Caso esteja vencido, solicitar comprovante de pagamento'
          ]
        }
      ]
    }
  ]
};

export const pendenciasFaturamentoVTEX: ProcessoDetalhado = {
  id: 'LOG-007',
  nome: 'Pendências de Faturamento e Entrega (VTEX e Infracommerce)',
  descricao: 'Extração de pedidos pendentes e necessidade de análise e atualização de status',
  icon: Clock,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Extração de pedidos pendentes e necessidade de análise e atualização de status.',
  saida: 'Pendências organizadas por status, com planilhas e dashboards atualizados, prontos para follow-up técnico.',
  sistemas_utilizados: ['Excel', 'Google Sheets', 'Jira'],
  tempo_execucao: '2-3 horas',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '7.1',
      nome: 'Filtrar Pedidos Pendentes de Faturamento no Excel',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '7.1.1',
          nome: 'Identificar pedidos não faturados',
          passos: [
            'Abrir planilha do IFC',
            'Filtrar: Remover status "Faturado"',
            'Selecionar pedidos com data de criação antes dos últimos 2 dias úteis',
            'Ordenar do mais antigo ao mais novo'
          ]
        }
      ]
    },
    {
      id: '7.2',
      nome: 'Atualizar Base de Dados no Google Sheets 1',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '7.2.1',
          nome: 'Copiar e colar dados',
          passos: [
            'Acessar: Pendências Vtex – Sheets 1',
            'Colar dados extraídos do Excel'
          ]
        }
      ]
    },
    {
      id: '7.3',
      nome: 'Verificar Duplicidade no Google Sheets 1',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '7.3.1',
          nome: 'Validar alterações de status',
          passos: [
            'Analisar o que não duplicou',
            'Verificar retorno dos chamados no Jira',
            'Excluir duplicidades',
            'Avaliar novos pedidos'
          ]
        }
      ]
    },
    {
      id: '7.4',
      nome: 'Filtrar Pedidos Pendentes de Entrega',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '7.4.1',
          nome: 'Identificar pedidos sem entrega',
          passos: [
            'No Excel: Status de pedido: "Faturado"',
            'Status de entrega: "Pendente de entrega"',
            'Data prevista de entrega anterior à atual',
            'Ordenar do mais antigo ao mais novo'
          ]
        }
      ]
    },
    {
      id: '7.5',
      nome: 'Atualizar Base de Dados no Google Sheets 2',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '7.5.1',
          nome: 'Copiar dados da etapa anterior',
          passos: [
            'Acessar: Sheets 2 ➞ Pendências VTEX',
            'Colar dados'
          ]
        }
      ]
    },
    {
      id: '7.6',
      nome: 'Verificar Duplicidade no Google Sheets 2',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '7.6.1',
          nome: 'Repetir validação',
          passos: [
            'Identificar dados não duplicados',
            'Verificar retorno de chamados',
            'Excluir duplicidades',
            'Analisar novos pedidos'
          ]
        }
      ]
    },
    {
      id: '7.7',
      nome: 'Analisar Tabela Dinâmica',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '7.7.1',
          nome: 'Consolidar informações',
          passos: [
            'Revisar retorno de chamados',
            'Verificar status atualizados',
            'Atualizar base conforme necessidade',
            'Se necessário, reabrir chamados'
          ]
        }
      ]
    }
  ]
};

export const gestaoPedidosNC: ProcessoDetalhado = {
  id: 'LOG-008',
  nome: 'Gestão de Pedidos Não Conformes (NC)',
  descricao: 'Exportação de pedidos do Metabase e identificação de pedidos com problemas (erro no faturamento, troca de loja, cancelamento etc.)',
  icon: AlertCircle,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Exportação de pedidos do Metabase e identificação de pedidos com problemas (erro no faturamento, troca de loja, cancelamento etc.).',
  saida: 'Pedidos NC tratados, classificados e atualizados nas planilhas e sistemas; chamados abertos ou pedidos encerrados conforme o tipo de não conformidade.',
  sistemas_utilizados: ['Metabase Sentry', 'Google Sheets', 'Sentry', 'Topdesk', 'VTEX'],
  tempo_execucao: '2-4 horas',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '8.1',
      nome: 'Exportar Base de Dados no Metabase',
      nivel: 'Operacional',
      ferramentas: ['Metabase Sentry'],
      tarefas: [
        {
          id: '8.1.1',
          nome: 'Baixar relatório de pedidos',
          passos: [
            'Acessar: Metabase ➞ Painel NC',
            'Visualizar o relatório "Pedidos Sentry"',
            'Exportar dados nos formatos .CSV ou .XLSX'
          ]
        }
      ]
    },
    {
      id: '8.2',
      nome: 'Atualizar Base de Dados no Google Sheets',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '8.2.1',
          nome: 'Subir arquivo no Google Sheets',
          passos: [
            'Acessar: KPI - Produtos NC_GO_v8',
            'Ir em: Arquivo ➞ Importar ➞ Fazer upload ➞ Procurar arquivo exportado',
            'Remover colunas e linhas em branco',
            'Aplicar formatação adequada'
          ]
        }
      ]
    },
    {
      id: '8.3',
      nome: 'Analisar Pedidos Pendentes',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '8.3.1',
          nome: 'Avaliar status críticos',
          passos: [
            'Filtrar pedidos com status: Aguardando resolução',
            'Filtrar pedidos com status: Em aberto',
            'Filtrar pedidos com status: Conferido',
            'Filtrar pedidos com status: Etiqueta gerada',
            'Colar os pedidos na base NC',
            'Verificar duplicidade',
            'Validar alteração de status',
            'Classificar por tipo de problema: Erro de faturamento',
            'Classificar por tipo de problema: Troca de loja',
            'Encaminhar chamados no Topdesk ou encerrar na VTEX conforme o caso'
          ]
        }
      ]
    },
    {
      id: '8.4',
      nome: 'Atualizar Planilha NC',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '8.4.1',
          nome: 'Consolidar informações',
          passos: [
            'Preencher dados dos pedidos e histórico de tratativas',
            'Formatar planilha',
            'Atualizar status: Motivo do problema',
            'Atualizar status: Chamado Topdesk',
            'Atualizar status: Situação final (Finalizado, Em análise etc.)'
          ]
        }
      ]
    },
    {
      id: '8.5',
      nome: 'Analisar Pedidos no Sentry',
      nivel: 'Operacional',
      ferramentas: ['Sentry'],
      tarefas: [
        {
          id: '8.5.1',
          nome: 'Conferir logística e movimentação',
          passos: [
            'Acessar: https://sentryhub.com.br/shipment',
            'Comparar status com planilha de controle',
            'Validar movimentação e eventos'
          ],
          urls: ['https://sentryhub.com.br/shipment']
        }
      ]
    },
    {
      id: '8.6',
      nome: 'Adicionar aos Chamados Topdesk',
      nivel: 'Operacional',
      ferramentas: ['Topdesk'],
      tarefas: [
        {
          id: '8.6.1',
          nome: 'Reportar problemas de faturamento',
          passos: [
            'Acessar: https://grupooscar.topdesk.net/tas/public/login/form',
            'Criar chamados com evidências sobre erro de faturamento'
          ],
          urls: ['https://grupooscar.topdesk.net/tas/public/login/form']
        }
      ]
    },
    {
      id: '8.7',
      nome: 'Finalizar Cancelamento na VTEX',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '8.7.1',
          nome: 'Encerrar pedidos com troca de loja',
          passos: [
            'Acessar: https://grupooscar.myvtex.com/admin/orders',
            'Localizar pedido',
            'Executar processo de cancelamento'
          ],
          urls: ['https://grupooscar.myvtex.com/admin/orders']
        }
      ]
    }
  ]
};

export const exportacaoPedidosVTEX: ProcessoDetalhado = {
  id: 'LOG-009',
  nome: 'Exportação e Controle de Pedidos na VTEX',
  descricao: 'Necessidade de consolidar os pedidos da VTEX para análise e atualização de status',
  icon: ListOrdered,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Necessidade de consolidar os pedidos da VTEX para análise e atualização de status.',
  saida: 'Relatórios de pedidos VTEX atualizados e integrados aos dashboards e planilhas para análise e report.',
  sistemas_utilizados: ['VTEX', 'Excel', 'Google Sheets', 'Looker Studio'],
  tempo_execucao: '2-3 horas',
  frequencia: 'Semanal',
  subprocessos: [
    {
      id: '9.1',
      nome: 'Exportar Pedidos na VTEX',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '9.1.1',
          nome: 'Baixar pedidos filtrados',
          passos: [
            'Acessar: https://grupooscar.myvtex.com/admin/orders',
            'Aplicar filtros: IFC – Data do pedido: "01/09/2024" até "Data Atual"',
            'Seller: "Oscar", "Paquetá", "Esportes", "Gaston"',
            'Excluir status "Cancelado"',
            'Exportar relatório',
            'Repetir exportação para filiais com Seller "Diadora - 501", "Grupo Oscar - 010, 006, 356"',
            'Observação: A VTEX limita exportação em até 6 meses por filtro'
          ],
          urls: ['https://grupooscar.myvtex.com/admin/orders']
        }
      ]
    },
    {
      id: '9.2',
      nome: 'Atualizar Base de Dados no Excel',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '9.2.1',
          nome: 'Preparar dados para análise',
          passos: [
            'Acessar e-mail e baixar arquivos exportados',
            'Manter base histórica (contas antigas)',
            'Atualizar: Pedidos',
            'Atualizar: Fórmulas',
            'Atualizar: Tabelas dinâmicas',
            'Remover: Duplicados',
            'Remover: Pedidos inválidos',
            'Enviar relatório no grupo "Time - Operações Digital"'
          ]
        }
      ]
    },
    {
      id: '9.3',
      nome: 'Atualizar Dados no Google Sheets',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '9.3.1',
          nome: 'Subir base no Google Sheets',
          passos: [
            'Acessar: Faturamento ➞ Ecommerce_v5',
            'Importar nova base',
            'Excluir colunas/linhas em branco',
            'Formatar planilha'
          ]
        }
      ]
    },
    {
      id: '9.4',
      nome: 'Atualizar Tabelas Dinâmicas',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '9.4.1',
          nome: 'Validar dinamismo e fórmulas',
          passos: [
            'Abrir aba de tabelas dinâmicas',
            'Validar atualizações automáticas',
            'Corrigir eventuais falhas de formatação'
          ]
        }
      ]
    },
    {
      id: '9.5',
      nome: 'Atualizar Dados no Looker Studio',
      nivel: 'Operacional',
      ferramentas: ['Looker Studio'],
      tarefas: [
        {
          id: '9.5.1',
          nome: 'Atualizar visualizações de pedidos',
          passos: [
            'Acessar: https://lookerstudio.google.com/reporting/cfdea30a-5338-472a-80b8-6f3769c9ab63/page/FakIF/edit',
            'Se necessário, forçar atualização manual'
          ],
          urls: ['https://lookerstudio.google.com/reporting/cfdea30a-5338-472a-80b8-6f3769c9ab63/page/FakIF/edit']
        }
      ]
    },
    {
      id: '9.6',
      nome: 'Revisar Gráficos no Looker Studio',
      nivel: 'Operacional',
      ferramentas: ['Looker Studio'],
      tarefas: [
        {
          id: '9.6.1',
          nome: 'Conferir exibição dos gráficos',
          passos: [
            'Verificar legibilidade e precisão visual',
            'Realizar ajustes, se necessário'
          ]
        }
      ]
    }
  ]
};

export const logisticaFreteVTEX: ProcessoDetalhado = {
  id: 'LOG-010',
  nome: 'Logística e Estratégias de Frete na VTEX',
  descricao: 'Demanda de cadastro e manutenção de regras logísticas: docas, políticas de envio, pontos de retirada, tabelas de frete, promoções e taxas',
  icon: Truck,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Demanda de cadastro e manutenção de regras logísticas: docas, políticas de envio, pontos de retirada, tabelas de frete, promoções e taxas.',
  saida: 'Estratégias logísticas configuradas e em produção, garantindo integração de docas, tabelas de frete, políticas e promoções na VTEX.',
  sistemas_utilizados: ['Plataforma VTEX', 'Google Drive', 'Excel'],
  tempo_execucao: '3-5 horas',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '10.1',
      nome: 'Cadastro de Estratégias de Envio – Docas',
      nivel: 'Operacional',
      ferramentas: ['Plataforma VTEX'],
      tarefas: [
        {
          id: '10.1.1',
          nome: 'Criar nova doca',
          passos: [
            'Acessar: https://grupooscar0001.myvtex.com/admin/shipping-strategy/beta/docks',
            'Clicar em "Criar Doca"',
            'Preencher: Nome da doca',
            'Preencher: Políticas de envio associadas',
            'Preencher: Política comercial',
            'Preencher: Prioridade de envio (se aplicável)'
          ],
          urls: ['https://grupooscar0001.myvtex.com/admin/shipping-strategy/beta/docks']
        }
      ]
    },
    {
      id: '10.2',
      nome: 'Cadastro de Feriados',
      nivel: 'Operacional',
      ferramentas: ['Plataforma VTEX'],
      tarefas: [
        {
          id: '10.2.1',
          nome: 'Incluir feriados no sistema',
          passos: [
            'Acessar: https://grupooscar0006.myvtex.com/admin/logistics#/holidays',
            'Navegar até: Envio ➞ Feriados',
            'Utilizar referência de feriados: https://www.feriados.com.br',
            'Cadastrar: Nome e data dos feriados nacionais',
            'Ignorar feriados facultativos'
          ],
          urls: ['https://grupooscar0006.myvtex.com/admin/logistics#/holidays', 'https://www.feriados.com.br']
        }
      ]
    },
    {
      id: '10.3',
      nome: 'Cadastro de Políticas de Envio',
      nivel: 'Operacional',
      ferramentas: ['Plataforma VTEX'],
      tarefas: [
        {
          id: '10.3.1',
          nome: 'Criar nova política de envio',
          passos: [
            'Acessar: https://grupooscar0001.myvtex.com/admin/shipping-strategy/beta',
            'Clicar em "Nova Política"',
            'Definir: Nome e método de envio',
            'Definir: Pontos de retirada (se necessário)'
          ],
          urls: ['https://grupooscar0001.myvtex.com/admin/shipping-strategy/beta']
        }
      ]
    },
    {
      id: '10.4',
      nome: 'Cadastro/Atualização de Pontos de Retirada',
      nivel: 'Operacional',
      ferramentas: ['Plataforma VTEX'],
      tarefas: [
        {
          id: '10.4.1',
          nome: 'Cadastrar ponto de retirada',
          passos: [
            'Acessar: https://grupooscar0001.myvtex.com/admin/pickup-points',
            'Navegar até: Envio ➞ Pontos de retirada ➞ Adicionar',
            'Informar: Nome',
            'Informar: Endereço',
            'Informar: Horário de funcionamento'
          ],
          urls: ['https://grupooscar0001.myvtex.com/admin/pickup-points']
        }
      ]
    },
    {
      id: '10.5',
      nome: 'Cadastro de Promoções na VTEX',
      nivel: 'Operacional',
      ferramentas: ['Plataforma VTEX'],
      tarefas: [
        {
          id: '10.5.1',
          nome: 'Criar nova promoção',
          passos: [
            'Acessar: https://grupooscar.myvtex.com/admin/promotions',
            'Clicar em: Criar Promoção ➞ Regular',
            'Preencher: Nome da promoção',
            'Preencher: Data de início e fim',
            'Preencher: Sellers participantes',
            'Preencher: Política comercial',
            'Preencher: Tipo de promoção (ex: frete grátis)',
            'Preencher: Regras por SKU/categoria/marca',
            'Preencher: Valor mínimo do pedido',
            'Preencher: Região de frete (via range de CEP)',
            'Preencher: Acúmulo permitido com outras promoções'
          ],
          urls: ['https://grupooscar.myvtex.com/admin/promotions']
        }
      ]
    },
    {
      id: '10.6',
      nome: 'Download das Tabelas de Frete',
      nivel: 'Operacional',
      ferramentas: ['Google Drive'],
      tarefas: [
        {
          id: '10.6.1',
          nome: 'Baixar e organizar tabelas',
          passos: [
            'Acessar: Google Drive - Tabelas de Frete',
            'Organizar por: Ano',
            'Organizar por: Estado',
            'Organizar por: Cidade',
            'Verificar recebimento com transportadora'
          ]
        }
      ]
    },
    {
      id: '10.7',
      nome: 'Ajustes nas Tabelas de Frete (Excel)',
      nivel: 'Operacional',
      ferramentas: ['Plataforma VTEX', 'Excel'],
      tarefas: [
        {
          id: '10.7.1',
          nome: 'Preparar tabela conforme padrão VTEX',
          passos: [
            'Verificar número de linhas (< 65.000)',
            'Se necessário, dividir em várias planilhas',
            'Ajustar formato padrão VTEX',
            'Salvar em: formato .xls (97-2003)',
            'Compactar em .zip',
            'Verificar tamanho final do arquivo',
            'Remover faixas de peso não utilizadas'
          ]
        }
      ]
    },
    {
      id: '10.8',
      nome: 'Upload da Tabela na VTEX',
      nivel: 'Operacional',
      ferramentas: ['Plataforma VTEX', 'Excel'],
      tarefas: [
        {
          id: '10.8.1',
          nome: 'Subir tabela compactada na política de envio',
          passos: [
            'Acessar: https://grupooscar0001.myvtex.com/admin/shipping-strategy/beta',
            'Navegar até: Envio ➞ Estratégia de envio ➞ Política de envio',
            'Clicar em "Editar"',
            'Fazer upload da tabela .zip',
            'Configurar: Fator de peso cúbico',
            'Configurar: Horário de coleta'
          ],
          urls: ['https://grupooscar0001.myvtex.com/admin/shipping-strategy/beta']
        }
      ]
    },
    {
      id: '10.9',
      nome: 'Ajustar Taxa de Frete Adicional',
      nivel: 'Operacional',
      ferramentas: ['Plataforma VTEX'],
      tarefas: [
        {
          id: '10.9.1',
          nome: 'Editar taxa de frete global',
          passos: [
            'Acessar: https://grupooscar0001.myvtex.com/admin/logistics#/config',
            'Navegar até: Envio ➞ Configurações ➞ Taxa de frete adicional',
            'Ajustar percentual conforme orientação da diretoria (ex: 20%)'
          ],
          urls: ['https://grupooscar0001.myvtex.com/admin/logistics#/config']
        }
      ]
    }
  ]
};

export const processosLogisticaDetalhados: ProcessoDetalhado[] = [
  operacoesAftersale,
  chamadosTecnicos,
  integracoesCorreios,
  analiseOperacionalPowerBI,
  exportacaoReversasIFC,
  relatoriosExtravioGFL,
  pendenciasFaturamentoVTEX,
  gestaoPedidosNC,
  exportacaoPedidosVTEX,
  logisticaFreteVTEX
];
