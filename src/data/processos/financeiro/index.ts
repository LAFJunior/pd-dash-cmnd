
import { DollarSign, FileCheck, CreditCard } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

export const recebimentoControleDespesas: ProcessoDetalhado = {
  id: 'FIN-001',
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
  id: 'FIN-002',
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
  id: 'FIN-003',
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

export const processosFinanceiro: ProcessoDetalhado[] = [
  recebimentoControleDespesas,
  organizacaoAnaliseDespesas,
  pagamentoDespesas
];
