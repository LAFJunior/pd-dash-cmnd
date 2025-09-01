import { ProcessoDetalhado } from '@/types/processo';
import { Calendar } from 'lucide-react';

export const planejamentoFerias: ProcessoDetalhado = {
  id: '12.6',
  nome: 'Planejamento de Férias',
  descricao: 'Gestão completa do planejamento e processamento de férias dos colaboradores',
  nivel: 'Operacional',
  icon: Calendar,
  cor: 'bg-gradient-to-br from-teal-500 to-teal-600',
  entrada: 'Controle de períodos aquisitivos de férias extraídos do Senior',
  saida: 'Férias programadas, comunicadas, pagas e registradas corretamente, com retorno do colaborador validado',
  tempo_execucao: '3-5 dias úteis',
  frequencia: 'Conforme programação',
  sistemas_utilizados: ['Senior', 'Mega', 'Topdesk'],
  subprocessos: [
    {
      id: '12.6.1',
      nome: 'Recebimento da programação de férias',
      nivel: 'Operacional',
      ferramentas: ['Topdesk', 'Senior'],
      tarefas: [
        {
          id: '12.6.1.1',
          nome: 'Receber a programação de férias das lojas via Topdesk',
          passos: [
            'Conferir datas solicitadas, garantindo que não haja sobreposição de férias na mesma função essencial',
            'Validar se o colaborador possui período aquisitivo'
          ]
        }
      ]
    },
    {
      id: '12.6.2',
      nome: 'Programação e Registro no Sistema',
      nivel: 'Operacional',
      ferramentas: ['Senior'],
      tarefas: [
        {
          id: '12.6.2.1',
          nome: 'Lançar férias no Senior',
          passos: [
            'Acessar: Administração de pessoal > Colaboradores > Férias > Recibos > Individual',
            'Inserir data de início e término',
            'Confirmar cálculo automático de 1/3 constitucional',
            'Registrar pagamento com antecedência mínima de 2 dias'
          ]
        }
      ]
    },
    {
      id: '12.6.3',
      nome: 'Comunicação e Documentação',
      nivel: 'Operacional',
      ferramentas: ['Senior'],
      tarefas: [
        {
          id: '12.6.3.1',
          nome: 'Emitir aviso e recibo de férias',
          passos: [
            'Gerar aviso de férias via Senior',
            'Acessar: Menu > Colaboradores > Documentos > Sequencia Documentos > Férias sem exame',
            'Enviar ao colaborador com antecedência mínima de 30 dias (por e-mail ou entrega física)'
          ]
        },
        {
          id: '12.6.3.2',
          nome: 'Emitir recibo de férias',
          passos: [
            'Gerar recibo com valores de férias e 1/3 constitucional',
            'Encaminhar ao Financeiro para pagamento antecipado'
          ]
        }
      ]
    }
  ]
};