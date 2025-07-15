
import { DollarSign, FileCheck, CreditCard, FileText, Zap, AlertTriangle, AlertCircle, FileX, Calculator, Monitor, Building2, Truck, Smartphone } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

export const recebimentoControleDespesas: ProcessoDetalhado = {
  id: 'FIN-01.1',
  nome: 'Recebimento e controle de despesas a pagar',
  descricao: 'Recebimento de despesas dos departamentos (T.I, Compras, RH, etc.)',
  icon: DollarSign,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Recebimento de despesas dos departamentos (T.I, Compras, RH, etc.).',
  saida: 'Despesas recebidas, conferidas e preparadas para pagamento.',
  sistemas_utilizados: ['Mega', 'e-mail interno', 'sistema de centro de custo'],
  tempo_execucao: '30-45 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '1.1',
      nome: 'Recebimento e controle de despesas a pagar',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'sistema de centro de custo'],
      tarefas: [
        {
          id: '1.1.1',
          nome: 'Cadastro de despesas pelos departamentos',
          passos: [
            'Cada departamento é responsável por cadastrar suas despesas no Mega',
            'Vincular despesas ao centro de custo correspondente'
          ]
        },
        {
          id: '1.1.2',
          nome: 'Controle de pagamentos pelo Financeiro',
          passos: [
            'O Financeiro recebe essas despesas e faz o controle dos pagamentos'
          ]
        },
        {
          id: '1.1.3',
          nome: 'Fechamentos por períodos',
          passos: [
            'Os fechamentos são realizados por períodos pré-determinados'
          ]
        },
        {
          id: '1.1.4',
          nome: 'Verificação de despesas disponíveis',
          passos: [
            'Verifica-se quais despesas estão disponíveis para pagamento dentro desses períodos'
          ]
        },
        {
          id: '1.1.5',
          nome: 'Exceções de cadastro',
          passos: [
            'O Financeiro não cadastra despesas',
            'Exceções ocorrem em pequenas compras operacionais (como materiais de insumo)'
          ]
        },
        {
          id: '1.1.6',
          nome: 'Regra de antecedência',
          passos: [
            'A regra operacional define que não é permitido cadastrar despesas com menos de 7 dias de antecedência da data de pagamento'
          ]
        },
        {
          id: '1.1.7',
          nome: 'Processo de autorização',
          passos: [
            'As despesas são lançadas, autorizadas pelos gestores e conferidas pelo Financeiro'
          ]
        }
      ]
    }
  ]
};

export const organizacaoAnaliseDespesas: ProcessoDetalhado = {
  id: 'FIN-01.2',
  nome: 'Organização e análise das despesas a pagar',
  descricao: 'Despesas validadas e autorizadas pelos gestores',
  icon: FileCheck,
  cor: 'bg-gradient-to-br from-green-500 to-green-600',
  nivel: 'Operacional',
  entrada: 'Despesas validadas e autorizadas pelos gestores.',
  saida: 'Despesas organizadas em lotes prontos para pagamento.',
  sistemas_utilizados: ['Mega', 'DDA bancário', 'e-mail'],
  tempo_execucao: '45-60 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '2.1',
      nome: 'Organização e análise das despesas',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'DDA bancário'],
      tarefas: [
        {
          id: '2.1.1',
          nome: 'Verificação do tipo de pagamento',
          passos: [
            'Após a validação, verificar no Mega o tipo de pagamento: boleto ou depósito'
          ]
        },
        {
          id: '2.1.2',
          nome: 'Identificação de depósitos',
          passos: [
            'Se a despesa for via depósito, ela será identificada com o status "depósito" no Mega'
          ]
        },
        {
          id: '2.1.3',
          nome: 'Verificação de boletos no DDA',
          passos: [
            'Para boletos, verificar se já constam no DDA bancário',
            'Na data correspondente, verificar se existe o boleto compatível com a despesa'
          ]
        },
        {
          id: '2.1.4',
          nome: 'Conferência DDA x Mega',
          passos: [
            'Checar se os boletos do DDA correspondem aos boletos do Mega'
          ]
        },
        {
          id: '2.1.5',
          nome: 'Validação de boletos sem cadastro',
          passos: [
            'Boletos no DDA sem cadastro no Mega são avaliados',
            'Se conhecidos (como: sindicato, VT), são validados via e-mail com o responsável'
          ]
        },
        {
          id: '2.1.6',
          nome: 'Organização em lotes',
          passos: [
            'Após validar, organizar todas as despesas em lotes de pagamento'
          ]
        }
      ]
    }
  ]
};

export const pagamentoDespesas: ProcessoDetalhado = {
  id: 'FIN-01.3',
  nome: 'Pagamento das despesas',
  descricao: 'Despesas organizadas para pagamentos',
  icon: CreditCard,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Despesas organizadas para pagamentos.',
  saida: 'Despesas pagas conforme cronograma.',
  sistemas_utilizados: ['Mega', 'sistema bancário', 'e-mail', 'WhatsApp'],
  tempo_execucao: '60-90 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '3.1',
      nome: 'Execução dos pagamentos',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'sistema bancário'],
      tarefas: [
        {
          id: '3.1.1',
          nome: 'Filtrar despesas do dia',
          passos: [
            'Filtrar no Mega as despesas do dia conforme lotes gerados'
          ]
        },
        {
          id: '3.1.2',
          nome: 'Conferir e executar pagamentos',
          passos: [
            'Os valores são conferidos e os pagamentos são executados'
          ]
        },
        {
          id: '3.1.3',
          nome: 'Tratamento de erros',
          passos: [
            'Em caso de erro bancário (dados incorretos, conta inválida)',
            'O responsável é acionado por e-mail ou WhatsApp'
          ]
        },
        {
          id: '3.1.4',
          nome: 'Despesas urgentes',
          passos: [
            'Despesas urgentes ou excepcionais (ex: manutenção, demissão ou cadastrada fora do prazo de 7 dias)',
            'Podem ser antecipadas mediante avaliação'
          ]
        },
        {
          id: '3.1.5',
          nome: 'Controle de exceções',
          passos: [
            'Manter controle rigoroso de exceções',
            'Para não comprometer o cronograma de pagamento das outras despesas'
          ]
        }
      ]
    }
  ]
};

// Novos processos adicionados
export const gestaoDuplicatas: ProcessoDetalhado = {
  id: 'FIN-01.4',
  nome: '1.4 - Gestão das duplicatas (Pagamentos a fornecedores)',
  descricao: 'Controle e gestão das duplicatas de fornecedores para pagamento',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  entrada: 'Pagamentos de títulos (duplicatas), compras para revenda',
  saida: 'Duplicatas conferidas, corrigidas se necessário, e programadas para pagamento',
  sistemas_utilizados: ['Mega'],
  subprocessos: [
    {
      id: '4.1',
      nome: '1.4.1 Controle das duplicatas',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '4.1.1',
          nome: '1.4.1.1 Duplicatas são lançadas automaticamente no Mega',
          passos: ['Duplicatas são lançadas automaticamente no Mega a partir da leitura da nota fiscal']
        },
        {
          id: '4.1.2',
          nome: '1.4.1.2 Lançamento no momento da leitura',
          passos: ['O lançamento ocorre no momento da leitura da nota fiscal recebida pela loja']
        },
        {
          id: '4.1.3',
          nome: '1.4.1.3 Registro de dados da nota',
          passos: ['O sistema registra o fornecedor, valor da nota e a condição de pagamento (quantidade de parcelas e prazos)']
        },
        {
          id: '4.1.4',
          nome: '1.4.1.4 Conferência pelo financeiro',
          passos: ['O financeiro acessa as duplicatas no Mega e confere os valores e prazos se estão corretos']
        },
        {
          id: '4.1.5',
          nome: '1.4.1.5 Prazos conforme negociação',
          passos: ['Os prazos de pagamento são variados, e tipo de pagamentos são conforme negociados com cada fornecedor']
        },
        {
          id: '4.1.6',
          nome: '1.4.1.6 Tratamento de divergências',
          passos: ['Em caso de divergência (como: valores ou prazos), não realiza o pagamento e aciona o fornecedor ou setor de compras']
        }
      ]
    }
  ]
};

export const pagamentoDuplicatas: ProcessoDetalhado = {
  id: 'FIN-01.5',
  nome: '1.5 - Pagamento das duplicatas',
  descricao: 'Execução dos pagamentos das duplicatas de fornecedores',
  nivel: 'Operacional',
  icon: CreditCard,
  cor: 'bg-gradient-to-br from-green-500 to-green-600',
  entrada: 'Duplicatas conferidas e autorizadas para pagamento',
  saida: 'Duplicatas pagas, baixadas e registradas',
  sistemas_utilizados: ['Mega', 'Sistema Bancário'],
  subprocessos: [
    {
      id: '5.1',
      nome: '1.5.1 Execução do pagamento das duplicatas',
      nivel: 'Operacional',
      ferramentas: ['Sistema Bancário', 'DDA'],
      tarefas: [
        {
          id: '5.1.1',
          nome: '1.5.1.1 Organização por data de vencimento',
          passos: ['As duplicatas são organizadas por data de vencimento']
        },
        {
          id: '5.1.2',
          nome: '1.5.1.2 Modalidades de pagamento',
          passos: ['Os pagamentos são feitos via TED, PIX e boletos DDA(conforme acordado com o fornecedor)']
        },
        {
          id: '5.1.3',
          nome: '1.5.1.3 Correção de erros bancários',
          passos: ['Erros bancários são corrigidos em contato com fornecedor e reagenda o pagamento']
        },
        {
          id: '5.1.4',
          nome: '1.5.1.4 Renegociações',
          passos: ['Renegociações podem ser feitas por desencaixes no fluxo de caixa, créditos gerados por devoluções de produtos e bonificação por ação ou parceria']
        },
        {
          id: '5.1.5',
          nome: '1.5.1.5 Negociação de prazos',
          passos: ['O financeiro pode negociar nova data de vencimento ou redução no valor a pagar mediante avaliação']
        }
      ]
    }
  ]
};

export const pagamentoDuplicatasCNAB: ProcessoDetalhado = {
  id: 'FIN-01.6',
  nome: '1.6 - Pagamento de duplicatas via CNAB',
  descricao: 'Processamento automatizado de pagamentos via Centro Nacional de Automação Bancária',
  nivel: 'Operacional',
  icon: Zap,
  cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  entrada: 'Duplicatas autorizadas para pagamento automatizado',
  saida: 'Títulos pagos e baixados automaticamente pelo Mega',
  sistemas_utilizados: ['Mega', 'CNAB', 'Sistema Bancário'],
  subprocessos: [
    {
      id: '6.1',
      nome: '1.6.1 Processamento automatizado via CNAB',
      nivel: 'Operacional',
      ferramentas: ['CNAB', 'Mega'],
      tarefas: [
        {
          id: '6.1.1',
          nome: '1.6.1.1 Convênio com fornecedores',
          passos: ['O pagamento via CNAB é utilizado para fornecedores com convênio ativo com o banco, aplicado aos grupos F1, F2, F3 e F4']
        },
        {
          id: '6.1.2',
          nome: '1.6.1.2 Conciliação automática',
          passos: ['O Mega concilia automaticamente os títulos, conforme o que recebe de informações do arquivo bancário']
        },
        {
          id: '6.1.3',
          nome: '1.6.1.3 Organização em lotes',
          passos: ['Essa conciliação é feita mediante a outras ações do usuário, como colocar os títulos conciliados em lote']
        },
        {
          id: '6.1.4',
          nome: '1.6.1.4 Configuração manual',
          passos: ['Escolher a opção do tipo de pagamento "automático", escolher a conta a ser paga, manualmente']
        },
        {
          id: '6.1.5',
          nome: '1.6.1.5 Envio ao banco',
          passos: ['Após essas definições do usuário, o arquivo é criado e enviado ao banco, que processa os pagamentos de forma automatizada']
        },
        {
          id: '6.1.6',
          nome: '1.6.1.6 Retorno bancário',
          passos: ['Após a execução, o banco retorna um arquivo com a confirmação dos títulos pagos']
        },
        {
          id: '6.1.7',
          nome: '1.6.1.7 Baixa automática',
          passos: ['O Mega realiza automaticamente a baixa desses títulos']
        },
        {
          id: '6.1.8',
          nome: '1.6.1.8 Acompanhamento',
          passos: ['O financeiro acompanha a geração, envio e retorno dos arquivos']
        },
        {
          id: '6.1.9',
          nome: '1.6.1.9 Monitoramento',
          passos: ['O processo é monitorado diariamente para garantir que todos os títulos previstos sejam processados corretamente']
        }
      ]
    },
    {
      id: '6.2',
      nome: '1.6.2 Divergência no processamento do CNAB',
      nivel: 'Tático',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '6.2.1',
          nome: '1.6.2.1 Divergência de CNPJ',
          passos: ['Problemas na conciliação podem ocorrer quando o CNPJ da nota fiscal difere do CNPJ usado no boleto (ex: filial vs. matriz), gerando erro de correspondência no Mega']
        },
        {
          id: '6.2.2',
          nome: '1.6.2.2 Múltiplos boletos',
          passos: ['Múltiplos boletos podem se referir a uma única duplicata, exigindo investigação manual']
        },
        {
          id: '6.2.3',
          nome: '1.6.2.3 Limitações de fornecedores',
          passos: ['Alguns fornecedores não conseguem inserir número da nota no boleto, o que limita a conciliação automática ideal']
        },
        {
          id: '6.2.4',
          nome: '1.6.2.4 Identificação ideal',
          passos: ['Ideal é o envio do número da nota como campo identificador no boleto, mas a maioria dos fornecedores não o fazem']
        }
      ]
    }
  ]
};

export const gestaoDivergencias: ProcessoDetalhado = {
  id: 'FIN-01.7',
  nome: '1.7 - Gestão de divergências e correções com fornecedores',
  descricao: 'Tratamento de erros e divergências em lançamentos de compras',
  nivel: 'Operacional',
  icon: AlertTriangle,
  cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
  entrada: 'Identificação de erro no lançamento ou necessidade de correção com fornecedores',
  saida: 'Ajustes concluídos e pagamentos regularizados',
  sistemas_utilizados: ['Mega'],
  subprocessos: [
    {
      id: '7.1',
      nome: '1.7.1 Tratamento de divergências em lançamentos de compras a prazo',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '7.1.1',
          nome: '1.7.1.1 Divergências comuns',
          passos: ['As divergências mais comuns ocorrem em compras a prazo de produtos']
        },
        {
          id: '7.1.2',
          nome: '1.7.1.2 Inconsistências de parcelamento',
          passos: ['Inconsistência entre a nota fiscal e os lançamentos no Mega (como: uma nota emitida em três parcelas pode ser lançada por engano como uma única parcela)']
        },
        {
          id: '7.1.3',
          nome: '1.7.1.3 Renegociação técnica',
          passos: ['É realizada uma renegociação técnica no sistema, desmembrando o título lançado de forma incorreta (como: um único título de R$ 1.000,00 é transformado em três parcelas de R$ 333,33)']
        },
        {
          id: '7.1.4',
          nome: '1.7.1.4 Ajuste de vencimentos',
          passos: ['Os vencimentos das novas parcelas são ajustados conforme os boletos reais recebidos, mantendo o valor total da nota inalterado']
        },
        {
          id: '7.1.5',
          nome: '1.7.1.5 Validação com fornecedor',
          passos: ['A validação com o fornecedor é feita para verificar os vencimentos reais']
        },
        {
          id: '7.1.6',
          nome: '1.7.1.6 Gestão de devoluções',
          passos: ['Em casos de devolução de produtos, os créditos gerados são vinculados a faturas futuras']
        },
        {
          id: '7.1.7',
          nome: '1.7.1.7 Correção de notas',
          passos: ['A nota fiscal original pode ser corrigida, conforme a negociação com o fornecedor']
        },
        {
          id: '7.1.8',
          nome: '1.7.1.8 Prorrogação de vencimentos',
          passos: ['Prorrogação dos vencimentos, podem ser negociados, desde que o valor total não seja alterado']
        }
      ]
    }
  ]
};

export const gestaoProtestos: ProcessoDetalhado = {
  id: 'FIN-01.8',
  nome: '1.8 - Gestão de Protestos Financeiros',
  descricao: 'Controle e resolução de protestos em CNPJs do Grupo',
  nivel: 'Operacional',
  icon: AlertCircle,
  cor: 'bg-gradient-to-br from-red-500 to-red-600',
  entrada: 'Identificação de protestos em CNPJs do Grupo',
  saida: 'Situações de protesto tratadas, com documentos regularizados e CNPJs limpos',
  sistemas_utilizados: ['DDA', 'Cartório'],
  subprocessos: [
    {
      id: '8.1',
      nome: '1.8.1 Notificação de recebimento de protestos',
      nivel: 'Operacional',
      ferramentas: ['DDA'],
      tarefas: [
        {
          id: '8.1.1',
          nome: '1.8.1.1 Fatores imprevisíveis',
          passos: ['Embora o controle financeiro seja rigoroso, protestos ocorrem por fatores imprevisíveis(como: falência de fornecedores ou falhas de comunicação)']
        },
        {
          id: '8.1.2',
          nome: '1.8.1.2 Formas de recebimento',
          passos: ['O protesto pode ser recebido por notificação direta pelo fornecedor, receber carta física na lojas, recusa de crédito bancário, ou análise de risco durante negociação com fornecedores']
        },
        {
          id: '8.1.3',
          nome: '1.8.1.3 Identificação no DDA',
          passos: ['Protestos podem aparecer no DDA, mas com informações limitadas, exigindo verificação adicional']
        },
        {
          id: '8.1.4',
          nome: '1.8.1.4 Detecção por impacto',
          passos: ['São detectados também após impacto prático como negativa de crédito, compra bloqueada ou alerta em abertura de nova loja']
        }
      ]
    },
    {
      id: '8.2',
      nome: '1.8.2 Investigação e regularização de protestos',
      nivel: 'Tático',
      ferramentas: ['Cartório'],
      tarefas: [
        {
          id: '8.2.1',
          nome: '1.8.2.1 Identificação da origem',
          passos: ['Ao ser notificado, identifica a origem do protesto(como: nota não recebida, devolução não registrada, imposto não lançado)']
        },
        {
          id: '8.2.2',
          nome: '1.8.2.2 Contato com fornecedor',
          passos: ['Inicia o contato com o fornecedor para apuração e negociação da retirada do protesto']
        },
        {
          id: '8.2.3',
          nome: '1.8.2.3 Processo de baixa',
          passos: ['Se houver acordo, é solicitada carta de anuência para baixa no cartório, arcando com as taxas cartoriais']
        }
      ]
    },
    {
      id: '8.3',
      nome: '1.8.3 Monitoramento de protestos',
      nivel: 'Operacional',
      ferramentas: [],
      tarefas: [
        {
          id: '8.3.1',
          nome: '1.8.3.1 Ausência de rotina',
          passos: ['Não há rotina definida para esse processo']
        },
        {
          id: '8.3.2',
          nome: '1.8.3.2 Atenção constante',
          passos: ['O financeiro mantém-se em atenção constante para evitar novos protestos']
        },
        {
          id: '8.3.3',
          nome: '1.8.3.3 Tratamento prioritário',
          passos: ['Trata os casos com prioridade para evitar impactos operacionais']
        }
      ]
    }
  ]
};

export const cancelamentoNotasFiscais: ProcessoDetalhado = {
  id: 'FIN-01.9',
  nome: '1.9 - Cancelamento de Notas Fiscais',
  descricao: 'Processo de cancelamento formal de notas fiscais',
  nivel: 'Operacional',
  icon: FileX,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  entrada: 'Solicitação formal de cancelamento de nota fiscal via chamado',
  saida: 'Nota fiscal cancelada (ou corrigida por ajuste), com justificativa formal, baixa tratada corretamente e histórico documentado',
  sistemas_utilizados: ['Sistema Fiscal', 'Controladoria'],
  subprocessos: [
    {
      id: '9.1',
      nome: '1.9.1 Solicitação e Triagem do Cancelamento Fiscal',
      nivel: 'Operacional',
      ferramentas: ['Sistema Fiscal'],
      tarefas: [
        {
          id: '9.1.1',
          nome: '1.9.1.1 Solicitação pelas lojas',
          passos: ['O cancelamento é solicitado por lojas, informando o número da nota e o motivo do cancelamento']
        },
        {
          id: '9.1.2',
          nome: '1.9.1.2 Análise de motivos',
          passos: ['Analisa o motivo do cancelamento, mais comuns são: erro de referência, cor ou quantidade do produto, nota emitida por engano ou venda devolvida pelo cliente']
        },
        {
          id: '9.1.3',
          nome: '1.9.1.3 Verificação da situação',
          passos: ['Verificar a situação da nota, se a nota ainda está ativa, já teve baixa automática ou foi processada como "vaga" no sistema']
        },
        {
          id: '9.1.4',
          nome: '1.9.1.4 Tratamento de nota paga',
          passos: ['Nota paga, é necessário estornar a baixa do pagamento no sistema, reabrindo a nota para permitir o cancelamento']
        }
      ]
    },
    {
      id: '9.2',
      nome: '1.9.2 Avaliação e Execução do Cancelamento',
      nivel: 'Tático',
      ferramentas: ['Sistema Fiscal', 'Controladoria'],
      tarefas: [
        {
          id: '9.2.1',
          nome: '1.9.2.1 Validação de possibilidade',
          passos: ['Validar possibilidade de cancelamento direto']
        },
        {
          id: '9.2.2',
          nome: '1.9.2.2 Cancelamento direto',
          passos: ['Se a nota ainda estiver ativa, realizar o cancelamento diretamente no sistema e preenchendo o motivo (ex: erro de referência, devolução, etc)']
        },
        {
          id: '9.2.3',
          nome: '1.9.2.3 Nota com baixa automática',
          passos: ['Se a nota já tiver baixa automática (vaga), não será possível cancelamento direto']
        },
        {
          id: '9.2.4',
          nome: '1.9.2.4 Ajuste manual',
          passos: ['Realizar ajuste manual no sistema com apoio da controladoria']
        },
        {
          id: '9.2.5',
          nome: '1.9.2.5 Documentação da justificativa',
          passos: ['Documentar a justificativa da correção']
        },
        {
          id: '9.2.6',
          nome: '1.9.2.6 Verificação de prazo legal',
          passos: ['Garantir que o prazo legal para cancelamento esteja vigente, se ultrapassado, aplicar procedimento alternativo (como emissão de nota de devolução)']
        },
        {
          id: '9.2.7',
          nome: '1.9.2.7 Comunicação aos setores',
          passos: ['Comunicar setores envolvidos, a loja, compras, auditoria e fiscal sobre o cancelamento e eventuais correções necessárias']
        },
        {
          id: '9.2.8',
          nome: '1.9.2.8 Registro e documentação',
          passos: ['Documentar, registrar o chamado, a justificativa e a ação tomada em repositório interno para controle e auditoria futura']
        }
      ]
    }
  ]
};

export const controleFluxoCaixa: ProcessoDetalhado = {
  id: 'FIN-01.10',
  nome: '1.10 - Controle do Fluxo de Caixa Realizado',
  descricao: 'Controle diário das movimentações financeiras realizadas',
  nivel: 'Operacional',
  icon: Calculator,
  cor: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
  entrada: 'Informações de pagamentos realizados e entradas financeiras',
  saida: 'Fluxo de caixa conferido e atualizado, com saldo diário validado junto ao extrato bancário',
  sistemas_utilizados: ['Excel', 'Sistema Bancário'],
  subprocessos: [
    {
      id: '10.1',
      nome: '1.10.1 Registro e validação do fluxo diário',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Sistema Bancário'],
      tarefas: [
        {
          id: '10.1.1',
          nome: '1.10.1.1 Conferência diária',
          passos: ['A conferência do fluxo é feita diariamente, foco no controle interno das movimentações do dia']
        },
        {
          id: '10.1.2',
          nome: '1.10.1.2 Controle via planilha',
          passos: ['O controle não é realizado no Mega, feito por meio de planilha (Excel)']
        },
        {
          id: '10.1.3',
          nome: '1.10.1.3 Registro de entradas',
          passos: ['Na planilha são registradas todas as entradas, classificadas por tipo (depósito, PIX e transferências), também classificadas por recebíveis de cartão de crédito e débito, e faturas festcard']
        },
        {
          id: '10.1.4',
          nome: '1.10.1.4 Registro de pagamentos',
          passos: ['São lançados todos os pagamentos realizados, vinculando categorias e centros de custo']
        },
        {
          id: '10.1.5',
          nome: '1.10.1.5 Fechamento diário',
          passos: ['Ao final de cada dia, é realizado o fechamento, conferência entre o saldo final registrado e o saldo em conta bancária']
        },
        {
          id: '10.1.6',
          nome: '1.10.1.6 Alinhamento de previsões',
          passos: ['O processo garante que as previsões estejam alinhadas com os valores efetivamente realizados']
        },
        {
          id: '10.1.7',
          nome: '1.10.1.7 Identificação de falhas',
          passos: ['Esse fluxo permite a identificação de falhas de lançamento, pagamentos indevidos ou não processados']
        }
      ]
    }
  ]
};

export const utilizacaoSistemas: ProcessoDetalhado = {
  id: 'FIN-01.11',
  nome: '1.11 - Utilização do Sistema Seta, OSCAR e ABYS',
  descricao: 'Operações e movimentações nos sistemas Seta, OSCAR e ABYS',
  nivel: 'Operacional',
  icon: Monitor,
  cor: 'bg-gradient-to-br from-teal-500 to-teal-600',
  entrada: 'Movimentações operacionais e gerenciais inseridas ou recebidas pelas empresas OSCAR e ABYS no Seta',
  saida: 'Informações registradas, relatórios emitidos e movimentações processadas corretamente no sistema Seta',
  sistemas_utilizados: ['Seta', 'OSCAR', 'ABYS'],
  subprocessos: [
    {
      id: '11.1',
      nome: '1.11.1 Registro do Aporte no Sistema',
      nivel: 'Tático',
      ferramentas: ['Seta'],
      tarefas: [
        {
          id: '11.1.1',
          nome: '1.11.1.1 Verificação bancária',
          passos: ['Verificar na conta bancária se o valor do aporte foi realmente creditado']
        },
        {
          id: '11.1.2',
          nome: '1.11.1.2 Acesso ao sistema',
          passos: ['No sistema, acessar a área de lançamentos de crédito']
        },
        {
          id: '11.1.3',
          nome: '1.11.1.3 Configuração padrão',
          passos: ['Usar o nome padrão "APORTE FINANCEIRO" já cadastrado no campo "Pessoa"']
        },
        {
          id: '11.1.4',
          nome: '1.11.1.4 Definição da operação',
          passos: ['Escolher o tipo de operação: "Crédito - Aporte" e definir a conta que recebeu o valor']
        },
        {
          id: '11.1.5',
          nome: '1.11.1.5 Preenchimento de dados',
          passos: ['Informar a data do depósito, valor exato e adicionar uma descrição clara (ex: "Aporte realizado por sócio para reforço de caixa")']
        },
        {
          id: '11.1.6',
          nome: '1.11.1.6 Finalização',
          passos: ['Finalizar clicando em Salvar']
        }
      ]
    }
  ]
};

export const pagamentoFranquiasDespesas: ProcessoDetalhado = {
  id: 'FIN-01.12',
  nome: '1.12 - Pagamentos de despesas das franquias',
  descricao: 'Gestão de pagamentos de despesas das franquias Arezzo, Ana Capri, Usaflex, Victor Hugo e Democrata',
  nivel: 'Operacional',
  icon: Building2,
  cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
  entrada: 'Recebimento e organização das despesas das franquias',
  saida: 'Despesas conferidas, autorizadas e pagas conforme os sistemas de cada marca',
  sistemas_utilizados: ['Seta', 'Mega', 'Microvix'],
  subprocessos: [
    {
      id: '12.1',
      nome: '1.12.1 Pagamento das Despesas – Arezzo e Ana Capri',
      nivel: 'Operacional',
      ferramentas: ['Seta'],
      tarefas: [
        {
          id: '12.1.1',
          nome: '1.12.1.1 Sistema utilizado',
          passos: ['Utiliza-se o sistema Seta']
        },
        {
          id: '12.1.2',
          nome: '1.12.1.2 Compras da loja',
          passos: ['Na compra de produtos (sacolas, frete, eventos, cafeteira e adesivagem), a loja recebe a nota fiscal e solicita a secretária a inclusão no sistema']
        },
        {
          id: '12.1.3',
          nome: '1.12.1.3 Autorização do gerente',
          passos: ['O gerente autoriza a despesa no sistema']
        },
        {
          id: '12.1.4',
          nome: '1.12.1.4 Processamento financeiro',
          passos: ['A despesa é recebida, o financeiro confere, coloca em lote, efetua o pagamento e baixa no sistema']
        }
      ]
    }
  ]
};

export const pagamentoFranquiasFornecedores: ProcessoDetalhado = {
  id: 'FIN-01.13',
  nome: '1.13 - Pagamentos de fornecedores das franquias',
  descricao: 'Gestão de pagamentos de fornecedores das franquias Arezzo, Ana Capri, Usaflex, Victor Hugo e Democrata',
  nivel: 'Operacional',
  icon: Truck,
  cor: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
  entrada: 'Recebimento das duplicatas de fornecedores para pagamento conforme vencimento',
  saida: 'Fornecedores pagos corretamente e consolidação das informações nos relatórios e planilhas',
  sistemas_utilizados: ['Seta', 'Bshop', 'Cigam', 'Microvix', 'ZZNet'],
  subprocessos: [
    {
      id: '13.1',
      nome: '1.13.1 Pagamento dos Fornecedores – Arezzo e Ana Capri',
      nivel: 'Operacional',
      ferramentas: ['Seta', 'ZZNet'],
      tarefas: [
        {
          id: '13.1.1',
          nome: '1.13.1.1 Sistema utilizado',
          passos: ['Utiliza-se o sistema Seta']
        },
        {
          id: '13.1.2',
          nome: '1.13.1.2 Inclusão da nota',
          passos: ['A loja recebe a nota fiscal e inclui no sistema']
        },
        {
          id: '13.1.3',
          nome: '1.13.1.3 Conferência com ZZNet',
          passos: ['O Financeiro realiza a conferência das notas e parcelas com o portal ZZNet (portal da Arezzo e Ana Capri)']
        },
        {
          id: '13.1.4',
          nome: '1.13.1.4 Atualização de observações',
          passos: ['Caso haja observações no ZZNet (parcela bloqueada ou prorrogada), o Financeiro atualiza a informação no sistema antes do pagamento']
        },
        {
          id: '13.1.5',
          nome: '1.13.1.5 Execução do pagamento',
          passos: ['O Financeiro realiza o pagamento conforme o vencimento e efetua a baixa no Seta']
        }
      ]
    }
  ]
};

export const gestaoFinanceiraDiadora: ProcessoDetalhado = {
  id: 'FIN-01.14',
  nome: '1.14 - Gestão Financeira de Licenciada, Diadora',
  descricao: 'Gestão completa dos processos financeiros da licenciada Diadora',
  nivel: 'Operacional',
  icon: Smartphone,
  cor: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
  entrada: 'Boletos recebidos, Solicitações de ajustes, prorrogações, ou renegociações. Notas fiscais de devoluções e controle diário de contas bancárias (Diadora e Oscar & Abys)',
  saida: 'Boletos enviados corretamente, pagamentos diários realizados, planilhas financeiras e de cobrança atualizadas e inadimplências controladas e fluxos financeiros organizados',
  sistemas_utilizados: ['Boleto Cloud', 'WhatsApp', 'E-mail', 'Mega', 'Seta'],
  subprocessos: [
    {
      id: '14.1',
      nome: '1.14.1 Gestão de Boletos da Diadora',
      nivel: 'Operacional',
      ferramentas: ['Boleto Cloud', 'WhatsApp', 'E-mail'],
      tarefas: [
        {
          id: '14.1.1',
          nome: '1.14.1.1 Monitoramento diário',
          passos: ['Acessar o WhatsApp da Diadora e os e-mails diariamente']
        },
        {
          id: '14.1.2',
          nome: '1.14.1.2 Resposta a solicitações',
          passos: ['Responder solicitações de envio de boletos, prorrogações, reemissão ou acordos']
        },
        {
          id: '14.1.3',
          nome: '1.14.1.3 Solicitação de boletos',
          passos: ['Solicitar boletos atualizados ao time financeiro via WhatsApp da Diadora']
        },
        {
          id: '14.1.4',
          nome: '1.14.1.4 Consulta no sistema',
          passos: ['Acessar o sistema Boleto Cloud para consultar a situação dos boletos']
        },
        {
          id: '14.1.5',
          nome: '1.14.1.5 Verificação de status',
          passos: ['Verificar vencimentos, necessidade de reemissão ou segunda via']
        },
        {
          id: '14.1.6',
          nome: '1.14.1.6 Avaliação de situação',
          passos: ['Avaliar se o boleto está vencido, prestes a vencer ou se precisa de ajuste']
        },
        {
          id: '14.1.7',
          nome: '1.14.1.7 Envio aos clientes',
          passos: ['Enviar boletos atualizados aos clientes via WhatsApp ou E-mail']
        }
      ]
    }
  ]
};

export const processosFinanceiro: ProcessoDetalhado[] = [
  recebimentoControleDespesas,
  organizacaoAnaliseDespesas,
  pagamentoDespesas,
  gestaoDuplicatas,
  pagamentoDuplicatas,
  pagamentoDuplicatasCNAB,
  gestaoDivergencias,
  gestaoProtestos,
  cancelamentoNotasFiscais,
  controleFluxoCaixa,
  utilizacaoSistemas,
  pagamentoFranquiasDespesas,
  pagamentoFranquiasFornecedores,
  gestaoFinanceiraDiadora
];
