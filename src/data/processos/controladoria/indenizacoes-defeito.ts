
import { ProcessoDetalhado } from '@/types/processo';
import { AlertTriangle } from 'lucide-react';

export const indenizacoesDefeito: ProcessoDetalhado = {
  id: 'CON-02.7',
  nome: 'Indenizações de Defeito',
  descricao: 'Produto com defeito identificado pela loja e comunicado ao departamento responsável',
  nivel: 'Tático',
  icon: AlertTriangle,
  cor: 'bg-gradient-to-br from-red-500 to-red-600',
  entrada: 'Produto com defeito identificado pela loja e comunicado ao departamento responsável',
  saida: 'Produtos defeituosos devidamente devolvidos, recebidos e registrados no estoque de defeito, com indenização concluída e baixa executada no sistema.',
  sistemas_utilizados: ['E-mail corporativo', 'ERP Mega', 'Sistema financeiro'],
  subprocessos: [
    {
      id: '2.7.1',
      nome: 'Acionamento do Fornecedor',
      nivel: 'Operacional',
      ferramentas: ['E-mail corporativo', 'ERP Mega'],
      tarefas: [
        {
          id: '2.7.1.1',
          nome: 'Receber notificação da loja sobre produto com defeito',
          passos: [
            'Verificar e-mail com relatos de defeito, imagens e dados do produto',
            'Confirmar com a loja o motivo da devolução e validar a solicitação'
          ]
        },
        {
          id: '2.7.1.2',
          nome: 'Contatar fornecedor solicitando autorização de devolução',
          passos: [
            'Encaminhar e-mail com as informações do produto e solicitação de devolução',
            'Aguardar retorno com autorização formal para emissão da nota'
          ]
        },
        {
          id: '2.7.1.3',
          nome: 'Emitir nota fiscal de devolução no Mega',
          passos: [
            'Acessar Mega > Nota Fiscal > Emissão',
            'Selecionar a loja de origem e o fornecedor',
            'Preencher dados do produto e motivo da devolução',
            'Gerar a nota e encaminhar à loja'
          ]
        }
      ]
    },
    {
      id: '2.7.2',
      nome: 'Coleta do Produto e Registro',
      nivel: 'Operacional',
      ferramentas: ['ERP Mega', 'E-mail'],
      tarefas: [
        {
          id: '2.7.2.1',
          nome: 'Acompanhar coleta do produto pelo fornecedor',
          passos: [
            'Confirmar com a loja a retirada do produto',
            'Solicitar o envio da nota fiscal assinada (foto por e-mail)'
          ]
        },
        {
          id: '2.7.2.2',
          nome: 'Transferir itens para o estoque de defeito (092)',
          passos: [
            'Acessar Mega → Estoque → Listar Movimentações',
            'Filtrar por data, loja de origem, destino (092) e número da remessa',
            'Registrar a entrada dos produtos no estoque defeito'
          ]
        }
      ]
    },
    {
      id: '2.7.3',
      nome: 'Conferência e Validação da Devolução',
      nivel: 'Operacional',
      ferramentas: ['ERP Mega', 'Planilhas', 'E-mail'],
      tarefas: [
        {
          id: '2.7.3.1',
          nome: 'Conferir nota fiscal e itens da devolução',
          passos: [
            'Acessar Mega → Nota Fiscal → Listar NFe',
            'Comparar os itens da remessa com os registrados na nota',
            'Registrar as conferências em planilha de controle'
          ]
        }
      ]
    },
    {
      id: '2.7.4',
      nome: 'Tratativa da Indenização',
      nivel: 'Tático',
      ferramentas: ['E-mail corporativo', 'Sistema financeiro', 'ERP Mega'],
      tarefas: [
        {
          id: '2.7.4.1',
          nome: 'Confirmar forma de indenização com o fornecedor',
          passos: [
            'Entrar em contato com o fornecedor',
            'Verificar se a indenização será via depósito bancário ou desconto em duplicata'
          ]
        },
        {
          id: '2.7.4.2',
          nome: 'Verificar compensação da indenização recebida',
          passos: [
            'Confirmar no extrato bancário ou relatório de duplicatas se a compensação foi efetivada',
            'Registrar a informação em planilha ou sistema de controle'
          ]
        },
        {
          id: '2.7.4.3',
          nome: 'Baixar produtos do estoque defeito (venda fictícia)',
          passos: [
            'Acessar frente de loja no Mega',
            'Realizar venda fictícia dos produtos já indenizados',
            'Garantir que os itens sejam removidos corretamente do estoque 092'
          ]
        }
      ]
    }
  ]
};
