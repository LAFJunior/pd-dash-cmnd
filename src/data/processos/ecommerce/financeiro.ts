
import { DollarSign } from 'lucide-react';
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

export const processosFinanceiro: ProcessoDetalhado[] = [
  cadastroDespesasFinanceiras
];
