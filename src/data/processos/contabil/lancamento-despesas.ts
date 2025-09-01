import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

export const lancamentoDespesas: ProcessoDetalhado = {
  id: 'CONT-09.1',
  nome: 'Lançamento de Despesas das Lojas',
  descricao: 'Processo de identificação, organização e lançamento de despesas das lojas Arezzo e Anacapri',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  entrada: 'Comprovantes físicos ou digitais de despesas das lojas Arezzo e Anacapri',
  saida: 'Despesas lançadas corretamente no Excel e comprovantes arquivados',
  sistemas_utilizados: ['Seta', 'Excel', 'Planilha de códigos terceiros', 'Caixa física de arquivos'],
  subprocessos: [
    {
      id: '9.1.1',
      nome: 'Identificação da Loja da Despesa',
      nivel: 'Operacional',
      ferramentas: ['Seta'],
      tarefas: [
        {
          id: '9.1.1.1',
          nome: 'Conferir CNPJ da Loja',
          passos: [
            'Verificar no comprovante qual é o CNPJ da loja responsável pela despesa',
            'Caso não conste diretamente, acessar o sistema Seta',
            'Caminho: Seta > Retaguarda > Financeiro > Títulos a Pagar',
            'Filtros: Situação "Todas", data e valor do comprovante',
            'Editar título e visualizar o campo "empresa" para identificar a loja'
          ]
        }
      ]
    },
    {
      id: '9.1.2',
      nome: 'Organização dos Comprovantes por Loja',
      nivel: 'Operacional',
      ferramentas: [],
      tarefas: [
        {
          id: '9.1.2.1',
          nome: 'Separar comprovantes por loja',
          passos: [
            'Marcar número da loja nos comprovantes',
            'Agrupar todos os comprovantes da mesma loja'
          ]
        }
      ]
    },
    {
      id: '9.1.3',
      nome: 'Importação e Lançamento no Excel',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '9.1.3.1',
          nome: 'Preencher informações no Excel',
          passos: [
            'Inserir data, histórico e valor conforme cada comprovante',
            'Definir conta de débito de acordo com a natureza da despesa:',
            '• Aluguel, energia, encargos, fundo de promoção → 55132',
            '• Fundo de propaganda Arezzo → 55104',
            '• Fundo de propaganda não Arezzo → 55114',
            '• Fornecedores na planilha códigos terceiros → 21401',
            '• Simples Nacional → 21311',
            '• Receita Federal IR s/salários → 21203',
            '• INSS a recolher → 21202',
            '• Retenção de serviço → 21310',
            '• ECAD → 52131',
            '• Despesas com veículos → 55107',
            '• Taxa de licença → 56106',
            '• CIEE → 55212',
            '• FGTS GRF → 21205',
            '• FGTS GRRF → 21219',
            'O crédito é sempre lançado na conta 11101'
          ]
        }
      ]
    },
    {
      id: '9.1.4',
      nome: 'Encaminhamento das Despesas de Pessoal',
      nivel: 'Operacional',
      ferramentas: [],
      tarefas: [
        {
          id: '9.1.4.1',
          nome: 'Separar e encaminhar ao DP',
          passos: [
            'Identificar despesas relacionadas a folha de pagamento, férias, rescisão, pró-labore, pensão, INSS, IRRF, FGTS, contribuição assistencial e patronal',
            'Entregar ao Departamento Pessoal para lançamento específico'
          ]
        }
      ]
    },
    {
      id: '9.1.5',
      nome: 'Arquivamento dos Comprovantes',
      nivel: 'Operacional',
      ferramentas: ['Caixa física de arquivos'],
      tarefas: [
        {
          id: '9.1.5.1',
          nome: 'Guardar os comprovantes',
          passos: [
            'Reunir comprovantes de todas as lojas',
            'Amarrar com elástico',
            'Armazenar na caixa azul de arquivo'
          ]
        }
      ]
    }
  ]
};