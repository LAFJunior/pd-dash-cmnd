import { ProcessoDetalhado } from '@/types/processo';
import { UserMinus } from 'lucide-react';

export const demissoesRescisoes: ProcessoDetalhado = {
  id: 'DP-012.5',
  nome: 'Demissões e Rescisões',
  descricao: 'Processo completo de desligamento de colaboradores com cálculo de verbas rescisórias e documentação legal',
  nivel: 'Operacional',
  icon: UserMinus,
  cor: 'bg-gradient-to-br from-red-500 to-red-600',
  entrada: 'Solicitação de desligamento enviada pela loja (via Topdesk) ou fim de contrato',
  saida: 'Colaborador desligado, verbas rescisórias pagas e documentos entregues dentro do prazo legal',
  tempo_execucao: '3-5 dias úteis',
  frequencia: 'Conforme demanda',
  sistemas_utilizados: ['Senior', 'eSocial', 'Conectividade Social', 'Topdesk'],
  subprocessos: [
    {
      id: '12.5.1',
      nome: 'Análise e Validação Inicial',
      nivel: 'Operacional',
      ferramentas: ['Topdesk', 'Senior'],
      tarefas: [
        {
          id: '12.5.1.1',
          nome: 'Receber e analisar a solicitação de desligamento',
          passos: [
            'Verificar tipo de desligamento: pedido de demissão, dispensa sem justa causa, justa causa ou fim de contrato de experiência',
            'Consultar histórico do colaborador no Senior: afastamentos, férias pendentes, adiantamentos, empréstimos consignados, convênios ativos',
            'Confirmar data de desligamento com a loja solicitante'
          ]
        }
      ]
    },
    {
      id: '12.5.2',
      nome: 'Cálculo da Rescisão',
      nivel: 'Operacional',
      ferramentas: ['Senior'],
      tarefas: [
        {
          id: '12.5.2.1',
          nome: 'Calcular verbas rescisórias no Senior',
          passos: [
            'Acessar Administração de Pessoal: Menu Colaboradores > Rescisão > Calcular',
            'Inserir data de desligamento e motivo',
            'Confirmar cálculo automático de verbas (saldo de salário, aviso prévio, férias proporcionais, 13º proporcional, descontos)',
            'Validar valores e corrigir se necessário'
          ]
        },
        {
          id: '12.5.2.2',
          nome: 'Conferir FGTS e INSS',
          passos: [
            'Validar saldo de FGTS na Caixa Econômica (Conectividade Social)'
          ]
        }
      ]
    },
    {
      id: '12.5.3',
      nome: 'Geração de Documentos Rescisórios',
      nivel: 'Operacional',
      ferramentas: ['Senior', 'eSocial', 'Conectividade Social'],
      tarefas: [
        {
          id: '12.5.3.1',
          nome: 'Emitir guia de FGTS DIGITAL (GFD)',
          passos: [
            'Gerar Termo de Rescisão do Contrato de Trabalho (TRCT)',
            'Emitir Guia de Recolhimento Rescisório do FGTS (GRRF)',
            'Registrar desligamento no eSocial (evento S-2299)',
            'Gerar requerimento de seguro-desemprego'
          ]
        }
      ]
    },
    {
      id: '12.5.4',
      nome: 'Pagamento e Entrega de Documentos',
      nivel: 'Operacional',
      ferramentas: ['Topdesk', 'Senior'],
      tarefas: [
        {
          id: '12.5.4.1',
          nome: 'Enviar documentos ao colaborador e loja',
          passos: [
            'Encaminhar TRCT e demais documentos via Topdesk ou entrega física',
            'Orientar colaborador sobre prazos de saque de FGTS e seguro-desemprego (quando aplicável)'
          ]
        },
        {
          id: '12.5.4.2',
          nome: 'Liberar pagamento da rescisão',
          passos: [
            'Gerar arquivo bancário no Senior',
            'Enviar ao Financeiro garantindo prazo legal de 10 dias corridos'
          ]
        }
      ]
    }
  ]
};
