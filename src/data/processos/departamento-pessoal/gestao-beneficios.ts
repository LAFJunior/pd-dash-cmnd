import { ProcessoDetalhado } from '@/types/processo';
import { Heart } from 'lucide-react';

export const gestaoBeneficios: ProcessoDetalhado = {
  id: 'DP-012.7',
  nome: 'Gestão de Benefícios e Convênios',
  descricao: 'Gestão completa dos benefícios e convênios dos colaboradores, incluindo inclusões, alterações e cancelamentos',
  nivel: 'Operacional',
  icon: Heart,
  cor: 'bg-gradient-to-br from-pink-500 to-pink-600',
  entrada: 'Cadastro de colaboradores ativos e solicitações de inclusão ou alteração de benefícios enviadas pelas lojas via Topdesk',
  saida: 'Benefícios e convênios cadastrados, alterados ou cancelados corretamente, refletindo na folha de pagamento',
  tempo_execucao: '2-3 dias úteis',
  frequencia: 'Conforme demanda',
  sistemas_utilizados: ['Senior', 'Topdesk'],
  subprocessos: [
    {
      id: '12.7.1',
      nome: 'Vale-Transporte (VT)',
      nivel: 'Operacional',
      ferramentas: ['Topdesk', 'Senior'],
      tarefas: [
        {
          id: '12.7.1.1',
          nome: 'Receber solicitação de inclusão ou alteração de VT',
          passos: [
            'Acessar chamado no Topdesk aberto pela loja',
            'Conferir informações: linhas de transporte, valor informado pelo colaborador, endereço atualizado'
          ]
        },
        {
          id: '12.7.1.2',
          nome: 'Registrar VT no sistema Senior',
          passos: [
            'Acessar Folha > Benefícios > Vale-Transporte',
            'Incluir número de passagens/dia e valor correspondente',
            'Salvar alterações'
          ]
        },
        {
          id: '12.7.1.3',
          nome: 'Ajustar descontos de VT na folha',
          passos: [
            'Conferir se desconto automático foi gerado corretamente (até 6% do salário)'
          ]
        }
      ]
    },
    {
      id: '12.7.2',
      nome: 'Planos de Saúde e Odontológicos',
      nivel: 'Operacional',
      ferramentas: ['Senior'],
      tarefas: [
        {
          id: '12.7.2.1',
          nome: 'Solicitar documentação do colaborador',
          passos: [
            'RG, CPF, dependentes (se houver) e formulário de adesão assinado'
          ]
        },
        {
          id: '12.7.2.2',
          nome: 'Enviar inclusão ao convênio',
          passos: [
            'Registrar solicitação na plataforma do plano (portal do prestador) ou enviar por e-mail autorizado',
            'Aguardar confirmação de inclusão (código de beneficiário)'
          ]
        },
        {
          id: '12.7.2.3',
          nome: 'Atualizar desconto em folha',
          passos: [
            'Registrar no Senior o valor de contribuição do colaborador'
          ]
        }
      ]
    },
    {
      id: '12.7.3',
      nome: 'Outros Benefícios (quando aplicável)',
      nivel: 'Operacional',
      ferramentas: ['Senior'],
      tarefas: [
        {
          id: '12.7.3.1',
          nome: 'Convênios de farmácia, academia ou parcerias',
          passos: [
            'Receber solicitação de adesão do colaborador',
            'Incluir no sistema conforme tabela de convênios vigente',
            'Registrar valor de desconto em folha, quando previsto'
          ]
        }
      ]
    },
    {
      id: '12.7.4',
      nome: 'Cancelamento de Benefícios',
      nivel: 'Operacional',
      ferramentas: ['Senior'],
      tarefas: [
        {
          id: '12.7.4.1',
          nome: 'Receber pedido de cancelamento',
          passos: [
            'Validar prazo mínimo de permanência (quando aplicável)',
            'Excluir benefício do cadastro do colaborador no Senior',
            'Enviar e-mail ao convênio solicitando a exclusão do plano ou benefício'
          ]
        }
      ]
    }
  ]
};
