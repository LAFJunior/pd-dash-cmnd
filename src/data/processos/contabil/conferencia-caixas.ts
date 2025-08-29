import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

export const conferenciaCaixas: ProcessoDetalhado = {
  id: 'CONT-09.3',
  nome: 'Conferência de Caixas',
  descricao: 'Processo de conferência e validação dos movimentos de caixa PDV, Loja e Tesouraria',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'border-l-purple-500',
  entrada: 'Relatórios do Mega de faturamento, sangria de caixa, extratos de conta dinheiro, movimentações de transferência entre lojas e financeiro',
  saida: 'Movimentações de caixas (PDV, Loja e Tesouraria) conferidas e saldos validados',
  sistemas_utilizados: ['Sistema Mega', 'Relatórios de faturamento', 'Sangria de caixa', 'Extrato de conta dinheiro', 'Relatórios de lançamentos e movimentações financeiras'],
  subprocessos: [
    {
      id: '9.3.1',
      nome: 'Conferência do Caixa PDV (11101)',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '9.3.1.1',
          nome: 'Calcular o movimento débito do Caixa PDV',
          passos: [
            'Acessar: Mega > Relatórios > Faturamento > Detalhamento',
            'Período: mês inteiro',
            'Filtrar a loja (ou matriz + filiais, se consolidado)',
            'Somar colunas: Valor à Vista + Recebimento Carnê + Recebimento Fatura',
            'Adicionar créditos da conta Diferença de Caixa (66110)'
          ]
        },
        {
          id: '9.3.1.2',
          nome: 'Calcular o movimento crédito do Caixa PDV',
          passos: [
            'Acessar: Mega > Relatórios > Sangria de Caixa',
            'Período: mês inteiro, Status: todos',
            'Filtrar a loja (ou matriz + filiais, se consolidado)',
            'Somar o total da sangria de caixa',
            'Adicionar débitos da conta Diferença de Caixa (66110)'
          ]
        }
      ]
    },
    {
      id: '9.3.2',
      nome: 'Conferência do Caixa Loja (11106)',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '9.3.2.1',
          nome: 'Calcular o movimento débito do Caixa Loja',
          passos: [
            'Utilizar valor total da sangria de caixa (obtido no subprocesso anterior)'
          ]
        },
        {
          id: '9.3.2.2',
          nome: 'Calcular o movimento crédito do Caixa Loja',
          passos: [
            'Acessar: Mega > Financeiro > Contas > Listar',
            'Selecionar a loja > Filtrar extrato da conta Dinheiro > Tipo: Débito',
            'Período: mês inteiro',
            'Somar valores de pagamento de despesas e depósitos para o financeiro'
          ]
        },
        {
          id: '9.3.2.3',
          nome: 'Conferir saldo final do Caixa Loja',
          passos: [
            'Acessar: Mega > Relatórios > Lançamentos Conta',
            'Data: último dia do mês',
            'Filtrar loja',
            'Verificar saldo final registrado'
          ]
        }
      ]
    },
    {
      id: '9.3.3',
      nome: 'Conferência do Caixa Tesouraria (11102)',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '9.3.3.1',
          nome: 'Calcular o movimento débito da Tesouraria',
          passos: [
            'Acessar: Mega > Financeiro > Movimentações > Listar',
            'Conta de origem: conta dinheiro da loja',
            'Conta de destino: financeiro',
            'Período: mês inteiro',
            'Somar todos os depósitos realizados pela loja'
          ]
        },
        {
          id: '9.3.3.2',
          nome: 'Calcular o movimento crédito da Tesouraria',
          passos: [
            'Acessar: Mega > Financeiro > Movimentações > Listar',
            'Conta de origem: financeiro',
            'Conta de destino: contas bancárias da loja (ex.: Safra, Santander, Sicredi)',
            'Período: mês inteiro',
            'Caso haja mais de uma conta bancária, filtrar individualmente e somar os valores'
          ]
        }
      ]
    }
  ]
};