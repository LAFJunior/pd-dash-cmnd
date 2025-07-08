
import { ProcessoDetalhado } from '@/types/processo';
import { Receipt } from 'lucide-react';

export const gestaoDespesas: ProcessoDetalhado = {
  id: 'CON-008',
  nome: 'Gestão de Despesas',
  descricao: 'Boletos, faturas mensais, contratos e comprovantes de despesas fixas ou variáveis recebidas por e-mail, site ou meio físico',
  nivel: 'Tático',
  icon: Receipt,
  cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
  entrada: 'Boletos, faturas mensais, contratos e comprovantes de despesas fixas ou variáveis recebidas por e-mail, site ou meio físico',
  saida: 'Despesas corretamente registradas, acompanhadas e quitadas, com rastreabilidade por planilhas e sistemas, garantindo controle financeiro eficiente.',
  tempo_execucao: 'Conforme demanda',
  frequencia: 'Diária',
  sistemas_utilizados: ['E-mail', 'VExpenses', 'Planilha de Controle de Despesas', 'Mega', 'Internet Banking'],
  subprocessos: [
    {
      id: '8.1',
      nome: 'Recebimento e Verificação das Despesas',
      nivel: 'Operacional',
      ferramentas: ['E-mail', 'VExpenses'],
      tarefas: [
        {
          id: '8.1.1',
          nome: 'Verificar e-mails e fornecedores',
          passos: [
            'Via e-mail e VExpenses onde as despesas são disponibilizadas',
            'Baixar os boletos/faturas do dia',
            'Salvar em pastas digitais organizadas por mês e tipo de despesa'
          ]
        },
        {
          id: '8.1.2',
          nome: 'Conferir informações das despesas',
          passos: [
            'Verificar se o valor, vencimento e dados do fornecedor estão corretos',
            'Validar se a despesa corresponde ao contrato ou valor histórico usual',
            'Anotar divergências para correção antes do lançamento'
          ]
        }
      ]
    },
    {
      id: '8.2',
      nome: 'Lançamento das Despesas e Organização de Controle',
      nivel: 'Operacional',
      ferramentas: ['Planilha de Controle de Despesas', 'Mega'],
      tarefas: [
        {
          id: '8.2.1',
          nome: 'Registrar despesa na planilha de controle',
          passos: [
            'Inserir: Nome do fornecedor, Valor, Vencimento, Centro de custo e status de pagamento',
            'Atualizar diariamente a planilha com novas despesas recebidas ou quitadas'
          ]
        },
        {
          id: '8.2.2',
          nome: 'Incluir despesa no sistema Mega Store',
          passos: [
            'Acessar Mega Store → Despesas → Incluir',
            'Preencher os campos manualmente conforme a fatura: fornecedor, valor, data de vencimento, loja e descrição',
            'Confirmar o lançamento para que siga para aprovação'
          ]
        }
      ]
    },
    {
      id: '8.3',
      nome: 'Acompanhamento de Pagamentos',
      nivel: 'Tático',
      ferramentas: ['Internet Banking', 'Planilhas', 'ERP Mega'],
      tarefas: [
        {
          id: '8.3.1',
          nome: 'Verificar pagamentos no extrato bancário',
          passos: [
            'Acessar o Internet Banking',
            'Filtrar por datas e verificar se as despesas lançadas foram quitadas',
            'Conferir valores e beneficiários'
          ]
        },
        {
          id: '8.3.2',
          nome: 'Atualizar status na planilha de controle',
          passos: [
            'Marcar como "Pago" as despesas confirmadas no extrato',
            'Corrigir valores ou status caso haja erro ou pagamento em duplicidade',
            'Notificar responsáveis caso alguma despesa esteja próxima do vencimento e ainda não paga'
          ]
        }
      ]
    },
    {
      id: '8.4',
      nome: 'Revisão e Planejamento',
      nivel: 'Tático',
      ferramentas: ['Planilha de Controle de Despesas'],
      tarefas: [
        {
          id: '8.4.1',
          nome: 'Revisar pendências e organizar prioridades',
          passos: [
            'Identificar despesas vencidas, com erro de valor ou faltando documentação',
            'Fazer contato com fornecedores, se necessário, para reemissão de boletos ou correções'
          ]
        },
        {
          id: '8.4.2',
          nome: 'Planejar ações para o dia seguinte',
          passos: [
            'Listar ações pendentes (ex: envio de boletos para aprovação, dúvidas com valores)',
            'Finalizar o dia com controle limpo e pronto para próxima rotina'
          ]
        }
      ]
    }
  ]
};
