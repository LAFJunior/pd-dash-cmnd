import { ProcessoDetalhado } from '@/types/processo';
import { UserX } from 'lucide-react';

export const gestaoAfastamentos: ProcessoDetalhado = {
  id: '12.8',
  nome: 'Gestão de Afastamentos',
  descricao: 'Gestão completa dos afastamentos de colaboradores, desde o recebimento até o controle de retorno',
  nivel: 'Operacional',
  icon: UserX,
  cor: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
  entrada: 'Comunicação de afastamento do colaborador enviada pela loja via Topdesk ou atestado médico entregue diretamente',
  saida: 'Afastamento registrado, comunicado ao eSocial, e controle de retorno realizado corretamente',
  tempo_execucao: '1-2 dias úteis',
  frequencia: 'Conforme demanda',
  sistemas_utilizados: ['Senior', 'Mega', 'Topdesk', 'eSocial'],
  subprocessos: [
    {
      id: '12.8.1',
      nome: 'Recebimento e Análise do Atestado',
      nivel: 'Operacional',
      ferramentas: ['Topdesk'],
      tarefas: [
        {
          id: '12.8.1.1',
          nome: 'Receber atestado médico',
          passos: [
            'Acessar chamado no Topdesk ou receber documento físico/digital',
            'Validar legibilidade e dados obrigatórios: nome do colaborador, CID, data e período do afastamento, assinatura e carimbo do médico',
            'Caso o documento esteja incompleto, solicitar correção ou reenvio imediato'
          ]
        },
        {
          id: '12.8.1.2',
          nome: 'Verificar prazo do afastamento',
          passos: [
            'Afastamentos de até 15 dias: responsabilidade da empresa',
            'Afastamentos acima de 15 dias: enviar ao INSS (benefício por incapacidade)'
          ]
        }
      ]
    },
    {
      id: '12.8.2',
      nome: 'Registro do Afastamento no Sistema',
      nivel: 'Operacional',
      ferramentas: ['Senior', 'Mega'],
      tarefas: [
        {
          id: '12.8.2.1',
          nome: 'Registrar no sistema Senior',
          passos: [
            'Acessar Folha > Afastamentos > Novo',
            'Inserir tipo de afastamento (auxílio-doença, acidente, licença maternidade, etc.)',
            'Informar datas de início e fim do afastamento conforme atestado',
            'Salvar registro'
          ]
        },
        {
          id: '12.8.2.2',
          nome: 'Bloquear marcação no ponto eletrônico (Mega)',
          passos: [
            'Inserir evento de afastamento para evitar apontamentos manuais indevidos'
          ]
        }
      ]
    },
    {
      id: '12.8.3',
      nome: 'Comunicação Legal',
      nivel: 'Operacional',
      ferramentas: ['eSocial'],
      tarefas: [
        {
          id: '12.8.3.1',
          nome: 'Enviar evento ao eSocial',
          passos: [
            'Registrar evento S-2230 (Afastamento Temporário)',
            'Aguardar retorno de aceite sem erros'
          ]
        },
        {
          id: '12.8.3.2',
          nome: 'Orientar colaborador',
          passos: [
            'Informar sobre direitos e, se for afastamento superior a 15 dias, orientar sobre agendamento de perícia no INSS'
          ]
        }
      ]
    },
    {
      id: '12.8.4',
      nome: 'Acompanhamento e Retorno',
      nivel: 'Operacional',
      ferramentas: ['Senior', 'Mega'],
      tarefas: [
        {
          id: '12.8.4.1',
          nome: 'Monitorar data de retorno',
          passos: [
            'Entrar em contato com a loja próxima à data de retorno prevista',
            'Caso haja prorrogação do afastamento, repetir subprocesso de registro'
          ]
        },
        {
          id: '12.8.4.2',
          nome: 'Atualizar situação no Senior e ponto',
          passos: [
            'Remover afastamento no sistema no retorno do colaborador',
            'Garantir que a escala e o ponto estejam corretos após o retorno'
          ]
        }
      ]
    }
  ]
};