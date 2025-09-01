import { ProcessoDetalhado } from '@/types/processo';
import { CreditCard } from 'lucide-react';

export const folhaAdiantamento: ProcessoDetalhado = {
  id: 'DP-012.3',
  nome: 'Folha de Adiantamento',
  descricao: 'Processamento simplificado da folha de adiantamento com base no cadastro de colaboradores ativos',
  nivel: 'Operacional',
  icon: CreditCard,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  entrada: 'Cadastro atualizado de colaboradores ativos do calendário de pagamento',
  saida: 'Adiantamento processado, arquivo bancário enviado ao Financeiro e valores liberados para pagamento',
  tempo_execucao: '1-2 dias úteis',
  frequencia: 'Quinzenal',
  sistemas_utilizados: ['Senior'],
  subprocessos: [
    {
      id: '12.3.1',
      nome: 'Processamento Simplificado',
      nivel: 'Operacional',
      ferramentas: ['Senior'],
      tarefas: [
        {
          id: '12.3.1.1',
          nome: 'Preparar base de cálculo do adiantamento',
          passos: [
            'Acessar Senior > Folha > Processamento > Cálculo de Adiantamento',
            'Verificar se todos os colaboradores ativos estão com salário atualizado',
            'Confirmar afastamentos, admissões recentes e férias (para evitar pagamentos indevidos)'
          ]
        },
        {
          id: '12.3.1.2',
          nome: 'Calcular adiantamento',
          passos: [
            'Executar processamento do adiantamento (geralmente 40% do salário base)',
            'Conferir relatórios de adiantamento por loja e consolidado geral',
            'Corrigir possíveis inconsistências (colaborador com afastamento registrado errado)'
          ]
        }
      ]
    },
    {
      id: '12.3.2',
      nome: 'Geração de Pagamento',
      nivel: 'Operacional',
      ferramentas: ['Senior'],
      tarefas: [
        {
          id: '12.3.2.1',
          nome: 'Gerar arquivo de pagamento',
          passos: [
            'Acessar Senior > Integração Bancária > Geração de Arquivo',
            'Selecionar banco padrão da empresa',
            'Gerar arquivo .REM (ou formato exigido pelo banco)'
          ]
        },
        {
          id: '12.3.2.2',
          nome: 'Enviar arquivo ao Financeiro',
          passos: [
            'Encaminhar arquivo bancário via e-mail ou integração interna',
            'Confirmar recebimento pelo Financeiro'
          ]
        }
      ]
    }
  ]
};
