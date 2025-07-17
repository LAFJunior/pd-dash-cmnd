
import { ProcessoDetalhado } from '@/types/processo';
import { Store } from 'lucide-react';

export const apoioLoja: ProcessoDetalhado = {
  id: 'CON-02.3',
  nome: 'Apoio à Loja',
  descricao: 'Chamados via TopDesk, E-mail, WhatsApp e atendimento telefônico (Headsets), solicitações relacionadas a cadastro, cancelamentos, trocas, estornos ou ajustes de estoque/recebimento.',
  nivel: 'Tático',
  icon: Store,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  entrada: 'Chamados via TopDesk, E-mail, WhatsApp e atendimento telefônico (Headsets), solicitações relacionadas a cadastro, cancelamentos, trocas, estornos ou ajustes de estoque/recebimento.',
  saida: 'Chamados resolvidos com tratativas registradas, trocas, estornos e devoluções processadas com conformidade, estoques corrigidos e clientes atendidos com rastreabilidade e casos reincidentes monitorados com suporte da controladoria e setores decisórios.',
  tempo_execucao: 'Conforme demanda',
  frequencia: 'Diária',
  sistemas_utilizados: ['TopDesk', 'E-mail', 'Mega', 'Fiabilité', 'ZZNet Portal'],
  subprocessos: [
    {
      id: '2.3.1',
      nome: 'Atendimento de Chamados',
      nivel: 'Operacional',
      ferramentas: ['TopDesk', 'E-mail'],
      tarefas: [
        {
          id: '2.3.1.1',
          nome: 'Verificar chamados diários',
          passos: [
            'Verificar diariamente os chamados novos ou pendentes via TopDesk'
          ]
        },
        {
          id: '2.3.1.2',
          nome: 'Avaliar demandas não registradas',
          passos: [
            'Avaliar e organizar demandas enviadas por e-mail ou verbalmente pelas lojas (não registradas)'
          ]
        },
        {
          id: '2.3.1.3',
          nome: 'Priorizar chamados',
          passos: [
            'Priorizar chamados com base em urgência e tipo de problema (ex: reembolso pendente, cancelamento fiscal, falha de estorno)'
          ]
        }
      ]
    },
    {
      id: '2.3.2',
      nome: 'Solução de Chamados',
      nivel: 'Tático',
      ferramentas: ['TopDesk', 'E-mail'],
      tarefas: [
        {
          id: '2.3.2.1',
          nome: 'Análise do problema',
          passos: [
            'Análise do problema relatado pela loja (ex: desistência de cliente, erro de cadastro, troca não resolvida)'
          ]
        },
        {
          id: '2.3.2.2',
          nome: 'Avaliar forma de pagamento',
          passos: [
            'Avaliar a forma de pagamento e define tratativa',
            'Reembolso em dinheiro → preparar recibo manual',
            'Pix ou débito → reembolso direto',
            'Crédito → estorno via adquirente'
          ]
        },
        {
          id: '2.3.2.3',
          nome: 'Atualizar chamado',
          passos: [
            'Atualizar o chamado com as ações tomadas, justificativas e, se aplicável, número de protocolo',
            'Registrar a solução no TopDesk e encerrar o chamado',
            'Instruir a loja sobre contatar com o cliente e atualização cadastral'
          ]
        }
      ]
    },
    {
      id: '2.3.3',
      nome: 'Regularização de Estoque e Recebimentos',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'TopDesk', 'Fiabilité'],
      tarefas: [
        {
          id: '2.3.3.1',
          nome: 'Verificar estorno no sistema',
          passos: [
            'Verificar se o produto devolvido ou cancelado foi corretamente estornado no sistema',
            'Acessar o Mega e/ou sistema da loja para validar se houve devolução física e lançamento correspondente'
          ]
        },
        {
          id: '2.3.3.2',
          nome: 'Tratar orçamentos cancelados',
          passos: [
            'Em caso de orçamentos que foram baixados e posteriormente cancelados',
            'Confirmar se houve baixa indevida (o sistema considerou como venda finalizada)',
            'Reabrir o orçamento e ajustar o status para cancelado, conforme política interna'
          ]
        },
        {
          id: '2.3.3.3',
          nome: 'Validar ressarcimento em dinheiro',
          passos: [
            'Para casos de ressarcimento ao cliente com pagamento em dinheiro (DH)',
            'Validar se o cliente recebeu em espécie com base nos comprovantes e registro do TopDesk',
            'Confirmar se foi gerado recibo manual conforme orientações do treinamento de caixa'
          ]
        },
        {
          id: '2.3.3.4',
          nome: 'Solicitar devolução manual',
          passos: [
            'Se a loja ainda não realizou o estorno no sistema',
            'Solicitar a devolução manual ou abertura de nota de devolução no sistema, conforme o tipo de operação'
          ]
        },
        {
          id: '2.3.3.5',
          nome: 'Validar valores no sistema',
          passos: [
            'Validar se os valores da transação (original e estornada) constam corretamente no Mega e Fiabilité, incluindo:',
            'Valor total da venda, forma de pagamento e data da transação',
            'Valor e data do estorno ou crédito gerado (vale-troca, devolução, reembolso)'
          ]
        },
        {
          id: '2.3.3.6',
          nome: 'Registrar inconsistências',
          passos: [
            'Registrar qualquer inconsistência',
            'Criar apontamento interno para acompanhamento de correção',
            'Garantir que o estoque e os recebimentos estejam consistentes após a regularização'
          ]
        }
      ]
    },
    {
      id: '2.3.4',
      nome: 'Acompanhamento de Casos Complexos',
      nivel: 'Tático',
      ferramentas: ['Planilhas de controle'],
      tarefas: [
        {
          id: '2.3.4.1',
          nome: 'Monitorar casos complexos',
          passos: [
            'Monitoramento de casos complexos ou fora de rotina:',
            'Cliente que não voltou para retirada',
            'Produto ainda em loja sem finalização da devolução'
          ]
        },
        {
          id: '2.3.4.2',
          nome: 'Acompanhar ações da loja',
          passos: [
            'Acompanhar com a loja ações de retorno, contato ou solução'
          ]
        },
        {
          id: '2.3.4.3',
          nome: 'Atualizar planilhas',
          passos: [
            'Atualizar as planilhas internas com status e histórico de contato'
          ]
        },
        {
          id: '2.3.4.4',
          nome: 'Fornecer orientações preventivas',
          passos: [
            'Fornecer orientações preventivas para loja atualizar cadastros para evitar novos casos'
          ]
        }
      ]
    },
    {
      id: '2..5',
      nome: 'Gestão de Trocas com Defeito e Estornos',
      nivel: 'Tático',
      ferramentas: ['ZZNet Portal', 'TopDesk'],
      tarefas: [
        {
          id: '2.3.5.1',
          nome: 'Receber chamado da loja',
          passos: [
            'Recebe o chamado da loja solicitando troca ou estorno por defeito'
          ]
        },
        {
          id: '2.3.5.2',
          nome: 'Verificar aprovação ZZNet',
          passos: [
            'Verifica se a solicitação de troca foi aprovada pelo ZZNet Portal com envio de fotos e descrição do defeito',
            'Caso aprovado pelo ZZNet Portal:',
            'Loja oferece nova mercadoria ao cliente',
            'Se o cliente aceitar, segue-se com troca e emissão de bônus troca'
          ]
        },
        {
          id: '2.3.5.3',
          nome: 'Tratar recusa do cliente',
          passos: [
            'Se o cliente recusar nova mercadoria e solicitar devolução do valor:',
            'A loja abre chamado para a controladoria com os dados completos',
            'A equipe confere reincidência (cliente já fez outras trocas?)'
          ]
        },
        {
          id: '2.3.5.4',
          nome: 'Avaliar reincidência',
          passos: [
            'Se reincidência ou valor alto, acionar a gestora para autorização',
            'A gestora pode autorizar, negar ou solicitar mais análise (ex: cliente reincidente, mau uso)'
          ]
        },
        {
          id: '2.3.5.5',
          nome: 'Processar autorização',
          passos: [
            'Caso autorizado:',
            'Encaminhar o chamado ao "apoio administrativo", com número do cartão, número de autorização e dados completos da venda',
            'O time de apoio administrativo realiza o pedido de estorno junto ao banco e responde à loja com protocolo'
          ]
        },
        {
          id: '2.3.5.6',
          nome: 'Finalizar chamado',
          passos: [
            'Finaliza o chamado no TopDesk e alimentar controles internos com histórico do cliente, loja e decisão'
          ]
        }
      ]
    },
    {
      id: '2.3.6',
      nome: 'Prevenção de infração e Comunicação com Loja',
      nivel: 'Tático',
      ferramentas: ['Comunicação', 'Registro de Incidentes ou Ocorrências'],
      tarefas: [
        {
          id: '2.3.6.1',
          nome: 'Identificar comportamentos suspeitos',
          passos: [
            'Identificar comportamentos suspeitos (cliente que realiza múltiplas trocas dentro de curto prazo)'
          ]
        },
        {
          id: '2.3.6.2',
          nome: 'Comunicar à loja',
          passos: [
            'Comunicar à loja sobre reincidências e orientar postura com o cliente'
          ]
        },
        {
          id: '2.3.6.3',
          nome: 'Alertar setores envolvidos',
          passos: [
            'Alertar setores envolvidos (ex: fiscal, Gestores) sobre clientes ou lojas com volume atípico de devoluções'
          ]
        },
        {
          id: '2.3.6.4',
          nome: 'Avaliar acionamento jurídico',
          passos: [
            'Avaliar, junto à coordenação, quando acionar o jurídico preventivamente'
          ]
        },
        {
          id: '2.3.6.5',
          nome: 'Decidir sobre cancelamento',
          passos: [
            'Decidir, caso a caso, sobre manter ou negar o cancelamento, sempre com autorização formal'
          ]
        }
      ]
    }
  ]
};
