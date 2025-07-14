
import { DollarSign, RefreshCw, Users, AlertTriangle, FileCheck, CreditCard, Clock, Receipt } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

export const cadastroDespesasFinanceiras: ProcessoDetalhado = {
  id: 'FIN-001',
  nome: 'Cadastro de Despesas Financeiras',
  descricao: 'Documento fiscal ou solicitação de despesa enviada por e-mail',
  icon: DollarSign,
  cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  nivel: 'Operacional',
  entrada: 'Documento fiscal ou solicitação de despesa enviada por e-mail.',
  saida: 'Despesa registrada no Mega, pendente de aprovação.',
  sistemas_utilizados: ['Mega', 'e-mail', 'planilha de controle de despesas', 'plataformas de fornecedores'],
  tempo_execucao: '15-30 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '1.1',
      nome: 'Validação da Despesa',
      nivel: 'Operacional',
      ferramentas: ['e-mail', 'plataformas de fornecedores'],
      tarefas: [
        {
          id: '1.1.1',
          nome: 'Analisar Origem e Natureza da Despesa',
          passos: [
            'Validar se é despesa recorrente, esporádica, ou relacionada a:',
            '• E-commerce',
            '• Experiência do Cliente (SAC)',
            '• Ponto de Venda (PDV)',
            'Classificar por subgrupo: software, comissão, marketing, prêmio, devolução via Pix etc.',
            'Verificar urgência e vencimento (há limite de 7 dias para cadastro no Mega)'
          ]
        },
        {
          id: '1.1.2',
          nome: 'Validar Valores e Dados do Documento',
          passos: [
            'Conferir boleto, nota fiscal, CNPJ do fornecedor e valores',
            'Em alguns casos, é necessário baixar relatórios em plataformas para verificar cobranças (Omnichat, Criteo, Pagar.me etc.)'
          ]
        }
      ]
    },
    {
      id: '1.2',
      nome: 'Cadastro no Mega',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'planilha de controle de despesas'],
      tarefas: [
        {
          id: '1.2.1',
          nome: 'Preencher Informações no Mega',
          passos: [
            'Selecionar o CNPJ correto (geralmente 600 – Oscar Calçados Comércio Eletrônico)',
            'Informar grupo e subgrupo da despesa',
            'Descrever item, valor, forma de pagamento e autorizadores (incluir dois autorizadores para facilitar aprovação)'
          ]
        },
        {
          id: '1.2.2',
          nome: 'Atualizar Planilha de Controle',
          passos: [
            'Registrar status da despesa:',
            '• Cadastrado',
            '• Aguardando aprovação',
            '• Aprovado',
            'Usar a planilha para rastreio e cobrança de aprovação (compartilhada com Vanessa)'
          ]
        }
      ]
    }
  ]
};

export const cadastroReembolsosPix: ProcessoDetalhado = {
  id: 'FIN-002',
  nome: 'Cadastro e Pagamento de Reembolsos PIX',
  descricao: 'Solicitação de estorno de pedido pago via PIX (cancelado na VTEX)',
  icon: RefreshCw,
  cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  nivel: 'Operacional',
  entrada: 'Solicitação de estorno de pedido pago via PIX (cancelado na VTEX).',
  saida: 'Estorno registrado como despesa no Mega, aguardando pagamento.',
  sistemas_utilizados: ['Mega', 'VTEX', 'e-mail'],
  tempo_execucao: '10-20 minutos',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '2.1',
      nome: 'Análise da Solicitação',
      nivel: 'Operacional',
      ferramentas: ['VTEX', 'GetNet'],
      tarefas: [
        {
          id: '2.1.1',
          nome: 'Verificar Inexistência de Estorno Automático',
          passos: [
            'Validar se a adquirente GetNet realizou o estorno',
            'Caso não tenha ocorrido, iniciar processo manual'
          ]
        }
      ]
    },
    {
      id: '2.2',
      nome: 'Registro Manual no Mega',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '2.2.1',
          nome: 'Cadastro da Devolução como Despesa',
          passos: [
            'Preencher despesa no Mega com subgrupo "Estorno de cliente via PIX"',
            'Informar dados do pedido, cliente e valor',
            'Forma de pagamento: PIX'
          ]
        },
        {
          id: '2.2.2',
          nome: 'Acompanhar Aprovação',
          passos: [
            'Acompanhar status no Mega para garantir pagamento no prazo',
            'Em caso de urgência, solicitar exceção junto ao financeiro'
          ]
        }
      ]
    }
  ]
};

export const cadastroRepassesSellers: ProcessoDetalhado = {
  id: 'FIN-003',
  nome: 'Cadastro de Despesa de Repasses aos Sellers',
  descricao: 'Fechamento mensal dos pedidos dos sellers (planilha enviada pela Vanessa)',
  icon: Users,
  cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  nivel: 'Operacional',
  entrada: 'Fechamento mensal dos pedidos dos sellers (planilha enviada pela Vanessa).',
  saida: 'Despesas lançadas no Mega, aguardando aprovação e pagamento.',
  sistemas_utilizados: ['Mega', 'planilha de repasses', 'Seller Center', 'VTEX'],
  tempo_execucao: '2-3 horas',
  frequencia: 'Mensal',
  subprocessos: [
    {
      id: '3.1',
      nome: 'Lançamento no Mega',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'planilha de repasses', 'Seller Center', 'VTEX'],
      tarefas: [
        {
          id: '3.1.1',
          nome: 'Receber Planilha de Fechamento',
          passos: [
            'Conferir se os pedidos foram entregues e faturados',
            'Verificar valores por seller'
          ]
        },
        {
          id: '3.1.2',
          nome: 'Cadastro de Despesas Individuais',
          passos: [
            'Cadastrar despesa por seller:',
            '• Nome e CNPJ do seller',
            '• Valor e dados bancários (incluir se ainda não cadastrados)',
            '• Subgrupo: Repasses de Marketplace (3P)'
          ]
        },
        {
          id: '3.1.3',
          nome: 'Atualizar Planilha de Controle',
          passos: [
            'Marcar cada repasse já cadastrado',
            'Conferir volume (média de 40 repasses por mês)'
          ]
        }
      ]
    }
  ]
};

export const validacaoPendenciasRepasses: ProcessoDetalhado = {
  id: 'FIN-004',
  nome: 'Validação e Ajuste de Pendências em Repasses',
  descricao: 'Divergências de seller ou faturamento em pedidos repassados',
  icon: AlertTriangle,
  cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  nivel: 'Tático',
  entrada: 'Divergências de seller ou faturamento em pedidos repassados.',
  saida: 'Repasses corrigidos, ajustados ou estornados.',
  sistemas_utilizados: ['VTEX', 'Seller Center', 'Mega', 'JIRA', 'planilha de controle'],
  tempo_execucao: '30-60 minutos por caso',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '4.1',
      nome: 'Análise de Erros nos Pedidos',
      nivel: 'Tático',
      ferramentas: ['VTEX', 'Seller Center', 'planilha de controle'],
      tarefas: [
        {
          id: '4.1.1',
          nome: 'Verificar Pedido com Divergência',
          passos: [
            'Consultar VTEX e Seller Center',
            'Confirmar entrega e faturamento',
            'Validar nome correto do seller (usar aba "DE PARA SELLER NAME")'
          ]
        },
        {
          id: '4.1.2',
          nome: 'Corrigir Pendência',
          passos: [
            'Lançar manualmente no Seller Center, se necessário',
            'Solicitar ajuste via JIRA, em caso de seller incorreto'
          ]
        },
        {
          id: '4.1.3',
          nome: 'Estorno de Valor Indevido',
          passos: [
            'Se repasse indevido, lançar despesa negativa no Mega',
            'Dividir proporcionalmente, caso pagamento tenha sido parcelado'
          ]
        }
      ]
    }
  ]
};

export const validacaoDespesasFixas: ProcessoDetalhado = {
  id: 'FIN-005',
  nome: 'Validação de Despesas Fixas e Serviços',
  descricao: 'Cobrança mensal de fornecedores recorrentes',
  icon: FileCheck,
  cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  nivel: 'Tático',
  entrada: 'Cobrança mensal de fornecedores recorrentes.',
  saida: 'Despesas fixas validadas e lançadas no Mega.',
  sistemas_utilizados: ['Mega', 'planilhas de controle', 'plataformas de fornecedores'],
  tempo_execucao: '1-2 horas',
  frequencia: 'Mensal',
  subprocessos: [
    {
      id: '5.1',
      nome: 'Conferência de Valores',
      nivel: 'Tático',
      ferramentas: ['Omnichat', 'After Sale', 'Pagar.me', 'Mundipagg', 'Correios'],
      tarefas: [
        {
          id: '5.1.1',
          nome: 'Acesso aos Relatórios',
          passos: [
            'Entrar nos portais dos fornecedores: Omnichat, After Sale, Pagar.me, Mundipagg, Correios, etc.',
            'Baixar relatórios com filtros por período e tipo de cobrança'
          ]
        },
        {
          id: '5.1.2',
          nome: 'Validar Cobrança com Contrato',
          passos: [
            'Conferir volume (ex: pedidos, acessos, mensagens) x valores contratados',
            'Identificar mensalidades, aluguéis ou cobranças indevidas'
          ]
        }
      ]
    },
    {
      id: '5.2',
      nome: 'Cadastro no Mega',
      nivel: 'Tático',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '5.2.1',
          nome: 'Registrar Despesa com Classificação Correta',
          passos: [
            'Informar grupo e subgrupo de despesa (ex: Marketing, Atendimento)',
            'Justificar o valor e anexar documentos do fornecedor'
          ]
        }
      ]
    }
  ]
};

export const gestaoChargebacks: ProcessoDetalhado = {
  id: 'FIN-006',
  nome: 'Gestão de Chargebacks',
  descricao: 'Notificação de contestação de compra via e-mail ou plataforma da adquirente',
  icon: CreditCard,
  cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  nivel: 'Tático',
  entrada: 'Notificação de contestação de compra via e-mail ou plataforma da adquirente (ex: GetNet, Pagar.me), alertas via sistema antifraude (Signify).',
  saida: 'Contestação respondida e defesa registrada.',
  sistemas_utilizados: ['GetNet', 'Pagar.me', 'CredSystem', 'VTEX', 'Mega', 'Signify'],
  tempo_execucao: '45-90 minutos',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '6.1',
      nome: 'Identificação e Coleta de Evidências',
      nivel: 'Tático',
      ferramentas: ['GetNet', 'Pagar.me', 'CredSystem', 'VTEX', 'Mega'],
      tarefas: [
        {
          id: '6.1.1',
          nome: 'Acessar plataforma da adquirente',
          passos: [
            'Logar na plataforma da GetNet, Pagar.me ou CredSystem',
            'Localizar o pedido contestado com base no número da transação ou notificação recebida'
          ]
        },
        {
          id: '6.1.2',
          nome: 'Localizar dados da venda',
          passos: [
            'Acessar VTEX para consultar o pedido',
            'Validar status (faturado, entregue, cancelado)',
            'Acessar Mega para localizar nota fiscal vinculada'
          ]
        },
        {
          id: '6.1.3',
          nome: 'Coletar documentos comprobatórios',
          passos: [
            'Baixar nota fiscal',
            'Obter comprovante de entrega (normalmente via transportadora ou AfterSale)',
            'Salvar prints ou relatórios que provem a efetivação da venda'
          ]
        }
      ]
    },
    {
      id: '6.2',
      nome: 'Envio de Defesa do Chargeback',
      nivel: 'Tático',
      ferramentas: ['GetNet', 'Pagar.me', 'CredSystem', 'Signify'],
      tarefas: [
        {
          id: '6.2.1',
          nome: 'Submeter defesa na plataforma da adquirente',
          passos: [
            'Preencher formulário ou upload de defesa',
            'Anexar nota fiscal, comprovante de entrega e demais evidências',
            'Registrar justificativa clara e objetiva'
          ]
        },
        {
          id: '6.2.2',
          nome: 'Registrar caso no Signify',
          passos: [
            'Acessar Signify',
            'Localizar transação pelo ID',
            'Anexar evidências da defesa',
            'Atualizar status da contestação para "Defesa enviada"'
          ]
        },
        {
          id: '6.2.3',
          nome: 'Acompanhamento do desfecho',
          passos: [
            'Monitorar retorno da adquirente',
            'Em caso de perda, validar se é necessário lançar como prejuízo'
          ]
        }
      ]
    }
  ]
};

export const gestaoPontoSenior: ProcessoDetalhado = {
  id: 'FIN-007',
  nome: 'Gestão de Ponto no Sistema Senior',
  descricao: 'Solicitações e acompanhamento de ponto de colaboradores específicos do e-commerce',
  icon: Clock,
  cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  nivel: 'Operacional',
  entrada: 'Solicitações e acompanhamento de ponto de colaboradores específicos do e-commerce.',
  saida: 'Ponto atualizado corretamente no sistema.',
  sistemas_utilizados: ['Sistema Senior', 'e-mail interno', 'registros de justificativas'],
  tempo_execucao: '20-40 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '7.1',
      nome: 'Monitoramento e Ajustes de Ponto',
      nivel: 'Operacional',
      ferramentas: ['Sistema Senior', 'e-mail interno'],
      tarefas: [
        {
          id: '7.1.1',
          nome: 'Acessar o sistema Senior',
          passos: [
            'Logar com perfil de gestor ou apoio',
            'Filtrar equipe sob sua responsabilidade (usuários do e-commerce)',
            'Verificar se existem inconsistências de ponto:',
            '– Falta de marcação',
            '– Horário incorreto',
            '– Horas negativas ou excedentes'
          ]
        },
        {
          id: '7.1.2',
          nome: 'Realizar correções necessárias',
          passos: [
            'Validar justificativas enviadas pelos colaboradores',
            'Ajustar entradas/saídas de acordo com regras da empresa',
            'Registrar observações justificando as alterações'
          ]
        },
        {
          id: '7.1.3',
          nome: 'Apoiar colaboradores em dúvidas ou correções',
          passos: [
            'Explicar inconsistências',
            'Informar se ajuste foi aplicado ou recusado',
            'Manter histórico pessoal de ajustes frequentes'
          ]
        }
      ]
    }
  ]
};

export const emissaoNotasRepasses: ProcessoDetalhado = {
  id: 'FIN-008',
  nome: 'Emissão de Notas para Repasses – Sellers 3P IN',
  descricao: 'Fechamento mensal de vendas dos sellers integrados ao modelo 3P IN',
  icon: Receipt,
  cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  nivel: 'Tático',
  entrada: 'Fechamento mensal de vendas dos sellers integrados ao modelo 3P IN (venda ocorre no Oscar, nota emitida pelo Oscar).',
  saida: 'Nota fiscal emitida e enviada ao seller.',
  sistemas_utilizados: ['VTEX', 'Mega', 'Sistema Fiscal', 'e-mail', 'planilha de controle de repasse'],
  tempo_execucao: '1-2 horas',
  frequencia: 'Mensal',
  subprocessos: [
    {
      id: '8.1',
      nome: 'Verificação dos Pedidos Entregues',
      nivel: 'Tático',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '8.1.1',
          nome: 'Validar pedidos faturados',
          passos: [
            'Acessar VTEX',
            'Filtrar pedidos 3P IN (Oscar como intermediador fiscal)',
            'Validar status de entrega e faturamento'
          ]
        },
        {
          id: '8.1.2',
          nome: 'Conferência de valores e comissão',
          passos: [
            'Verificar o valor total do pedido',
            'Aplicar percentual de comissão (se aplicável)',
            'Calcular o valor líquido a repassar ao seller'
          ]
        }
      ]
    },
    {
      id: '8.2',
      nome: 'Emissão e Envio da Nota Fiscal',
      nivel: 'Tático',
      ferramentas: ['Mega', 'Sistema Fiscal', 'e-mail'],
      tarefas: [
        {
          id: '8.2.1',
          nome: 'Emitir nota no sistema fiscal',
          passos: [
            'Acessar sistema de emissão de nota fiscal (Mega ou ERP fiscal)',
            'Cadastrar nota com:',
            '– CNPJ do seller',
            '– Valor líquido',
            '– Dados do pedido (número, cliente, SKU)',
            '– Natureza de operação: Repasse de venda 3P IN'
          ]
        },
        {
          id: '8.2.2',
          nome: 'Validar e salvar nota',
          passos: [
            'Conferir dados antes de finalizar emissão',
            'Baixar PDF/XML',
            'Salvar cópia no controle de repasses (planilha ou sistema)'
          ]
        },
        {
          id: '8.2.3',
          nome: 'Enviar nota ao seller',
          passos: [
            'Encaminhar nota fiscal por e-mail',
            'Anexar junto ao demonstrativo de repasse do período'
          ]
        }
      ]
    }
  ]
};

export const processosFinanceiro: ProcessoDetalhado[] = [
  cadastroDespesasFinanceiras,
  cadastroReembolsosPix,
  cadastroRepassesSellers,
  validacaoPendenciasRepasses,
  validacaoDespesasFixas,
  gestaoChargebacks,
  gestaoPontoSenior,
  emissaoNotasRepasses
];
