import { ProcessoDetalhado } from '@/types/processo';
import { Scale } from 'lucide-react';

export const controleProcessosTrabalhistas: ProcessoDetalhado = {
  id: '12.9',
  nome: 'Controle de Processos Trabalhistas',
  descricao: 'Monitoramento e controle de processos trabalhistas com consulta diária no DJE e fornecimento de documentação para defesa',
  nivel: 'Operacional',
  icon: Scale,
  cor: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
  entrada: 'Recebimento de notificações de ações trabalhistas via correspondência física ou sistema eletrônico DJE',
  saida: 'Processos trabalhistas monitorados, prazos cumpridos e informações/documentos enviados ao jurídico para defesa eficaz',
  tempo_execucao: 'Contínuo',
  frequencia: 'Diária',
  sistemas_utilizados: ['Portal DJE', 'Certificado Digital', 'Excel', 'E-mail'],
  subprocessos: [
    {
      id: '12.9.1',
      nome: 'Consulta de Processos no DJE',
      nivel: 'Operacional',
      ferramentas: ['Portal DJE', 'Certificado Digital'],
      tarefas: [
        {
          id: '12.9.1.1',
          nome: 'Verificação diária de novos processos',
          passos: [
            'Acessar o portal DJE',
            'Pesquisar processos pelo CNPJ da matriz, que retorna também as filiais vinculadas',
            'Consultar a agenda do sistema (período semanal) para identificar processos novos',
            'Conferir se o processo já foi registrado na planilha de controle do DJI',
            'Evitar duplicidade no envio ao jurídico'
          ]
        }
      ]
    },
    {
      id: '12.9.2',
      nome: 'Registro e Envio das Notificações ao Jurídico',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'E-mail'],
      tarefas: [
        {
          id: '12.9.2.1',
          nome: 'Encaminhamento das informações',
          passos: [
            'Ao identificar novo processo, registrar na planilha interna o nome do reclamante, data de consulta e status',
            'Enviar dados por e-mail ao escritório jurídico, responsável pela defesa',
            'Manter registro do envio para controle de prazos'
          ]
        }
      ]
    },
    {
      id: '12.9.3',
      nome: 'Fornecimento de Documentação para Defesa',
      nivel: 'Operacional',
      ferramentas: ['E-mail'],
      tarefas: [
        {
          id: '12.9.3.1',
          nome: 'Atender solicitações do jurídico',
          passos: [
            'Receber lista de documentos e informações solicitadas pelo jurídico',
            'Buscar dados em arquivos internos, junto aos regionais ou gerentes de loja, quando necessário',
            'Digitalizar e enviar documentos por e-mail',
            'Responder questionamentos complementares, se solicitado pelo Jurídico'
          ]
        }
      ]
    },
    {
      id: '12.9.4',
      nome: 'Acompanhamento do Andamento Processual',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'E-mail'],
      tarefas: [
        {
          id: '12.9.4.1',
          nome: 'Monitoramento contínuo',
          passos: [
            'Manter contato com o jurídico para atualizações sobre o processo',
            'Receber informações sobre decisões parciais ou finais (improcedente, procedente, condenação ou favorável à empresa)',
            'Registrar o resultado final na planilha de controle',
            'Arquivar a documentação finalizada'
          ]
        }
      ]
    }
  ]
};