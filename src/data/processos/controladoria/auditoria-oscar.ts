
import { ProcessoDetalhado } from '@/types/processo';
import { Search } from 'lucide-react';

export const auditoriaOscar: ProcessoDetalhado = {
  id: 'CON-001',
  nome: 'Auditoria de caixa, lojas Oscar',
  descricao: 'Dados dos caixas, registros de vendas, pagamentos realizados.',
  nivel: 'Operacional e Tático',
  icon: Search,
  cor: 'bg-gradient-to-br from-green-500 to-green-600',
  entrada: 'Dados dos caixas, registros de vendas, pagamentos realizados.',
  saida: 'Caixas fechados e auditados sem pendências. Recebíveis conferidos (PIX, Cartão, Festcard). Despesas corretamente validadas. Divergências corrigidas ou tratadas. Monitoramento de eficiência atualizado.',
  tempo_execucao: '2-4 horas por dia',
  frequencia: 'Diária',
  sistemas_utilizados: ['Mega', 'SITEF', 'Fiabilité', 'Equals', 'GetNet', 'QlikView'],
  subprocessos: [
    {
      id: '1.1',
      nome: 'Fechamento de Caixa',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'SITEF', 'Tabela de Erros'],
      tarefas: [
        {
          id: '1.1.1',
          nome: 'Acessar o sistema Mega',
          passos: [
            'Ir em: "Vendas" ➞ "Listar parcial"',
            'Listar os caixas que permanecem abertos do dia anterior'
          ]
        },
        {
          id: '1.1.2',
          nome: 'Identificar as pendências',
          passos: [
            'Consultar aba de trocas no Mega',
            'Localizar produtos não devolvidos que impedem o fechamento',
            'Verificar orçamentos ativos e vendas pendentes'
          ]
        },
        {
          id: '1.1.3',
          nome: 'Contatar a loja',
          passos: [
            'Informar sobre pendências (trocas ou orçamentos)',
            'Orientar sobre necessidade de devolução e fechamento no sistema'
          ]
        },
        {
          id: '1.1.4',
          nome: 'Aplicar controle',
          passos: [
            'Consultar Tabela de Erros, verificar se existem casos de abertura indevida de caixa vendedor ou produtos não devolvidos'
          ]
        }
      ]
    },
    {
      id: '1.2',
      nome: 'Geração de Relatórios de Faturamento e Orçamentos Ativos',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'Fiabilité'],
      tarefas: [
        {
          id: '1.2.1',
          nome: 'Gerar relatório de faturamento',
          passos: [
            'No Mega, gerar relatório filtrando por lojas físicas e digital'
          ]
        },
        {
          id: '1.2.2',
          nome: 'Imprimir relatórios com detalhamento',
          passos: [
            'Imprimir resumo de vendas destacando formas de pagamento (PIX, cartão, Festcard)'
          ]
        },
        {
          id: '1.2.3',
          nome: 'Gerar outro relatório no Fiabilité',
          passos: [
            'Selecionar "Relatório de Vendas Detalhado" com situação ativa'
          ]
        },
        {
          id: '1.2.4',
          nome: 'Comparar relatórios e auditar pelo sistema',
          passos: [
            'Conferir se valores de venda, faturas e Festcard batem entre Mega e Fiabilité',
            'Anotar divergências no campo Observações'
          ]
        }
      ]
    },
    {
      id: '1.3',
      nome: 'Conferência de Pagamentos',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'SITEF', 'Fiabilité', 'Equals'],
      tarefas: [
        {
          id: '1.3.1',
          nome: 'Verificar valores recebidos',
          passos: [
            'Conferir os valores recebidos em PIX, cartões e Festcard no Mega'
          ]
        },
        {
          id: '1.3.2',
          nome: 'Conferir relatórios SITEF',
          passos: [
            'Acessar relatório SITEF',
            'Filtrar por valor',
            'Identificar tipo de cartão',
            'GetNet "cartão pessoal"',
            'Marketpay "Festcard"',
            'Cards "PIX"'
          ]
        },
        {
          id: '1.3.3',
          nome: 'Validar recebíveis',
          passos: [
            'Conferir se transações foram efetuadas ou estornadas',
            'Confirmar na Equals/GetNet',
            'Na Equals pesquisar "Relatório de Vendas/Transações"',
            'Na GetNet pesquisar "Relatório de Transações"'
          ]
        },
        {
          id: '1.3.4',
          nome: 'Identificar falhas',
          passos: [
            'Erros mais comuns: Estorno não finalizado; Duplicidade de pagamento; Time Out (demora na resposta)',
            'Caso detectado erro, preparar baixa manual ou baixa em contingência',
            'Time Out ➞ Baixar manualmente usando dados da transação',
            'Estorno não concluído ➞ Baixar manual como venda normal ou cancelar formalmente',
            'Duplicidade de pagamento ➞ Baixar apenas uma, justificar outra'
          ]
        },
        {
          id: '1.3.5',
          nome: 'Conferir lançamentos POS',
          passos: [
            'Verificar as vendas manuais (POS) não baixadas',
            'Validar usando o campo "Meio de Captura" (TEF ou POS) no SITEF',
            'Conferir se os valores POS foram baixados corretamente no Mega',
            'Se aparecer venda POS e não constar no Mega, isso gera erro (ex.: Código 10 da Tabela de Erros, "não conferência SITEF, POS, PIX e CARDS")'
          ]
        }
      ]
    },
    {
      id: '1.4',
      nome: 'Resolução de Divergências',
      nivel: 'Tático',
      ferramentas: ['Mega', 'Tabela de Erros', 'Planilhas de Controle'],
      tarefas: [
        {
          id: '1.4.1',
          nome: 'Identificar diferenças',
          passos: [
            'Analisar relatórios de fechamento',
            'Procurar sobras ou faltas'
          ]
        },
        {
          id: '1.4.2',
          nome: 'Verificar diferenças por colaborador',
          passos: [
            'Se a diferença é devida a erro manual, falta de sangria ou erro de lançamento',
            'Como: sobra de R$0,50, falta de R$120'
          ]
        },
        {
          id: '1.4.3',
          nome: 'Aplicar classificação',
          passos: [
            'Usar a tabela de erros para codificar falha (ex.: Código 1 – Fundo incorreto; Código 10 – Não conferência SITEF)'
          ]
        },
        {
          id: '1.4.4',
          nome: 'Contatar loja',
          passos: [
            'Solicitar justificativa documentada'
          ]
        },
        {
          id: '1.4.5',
          nome: 'Registrar regularização',
          passos: [
            'Confirmar se no dia seguinte a diferença foi ajustada'
          ]
        },
        {
          id: '1.4.6',
          nome: 'Monitorar reincidências',
          passos: [
            'Monitora os casos recorrentes e aplica plano corretivo',
            'Plano corretivo: correção + acompanhamento + reforço (treinamento ou advertência)'
          ]
        }
      ]
    },
    {
      id: '1.5',
      nome: 'Monitoramento de Eficiência de Caixa',
      nivel: 'Tático',
      ferramentas: ['QlikView', 'Tabela de Erros'],
      tarefas: [
        {
          id: '1.5.1',
          nome: 'Acessar painel QlikView',
          passos: [
            'Filtrar período, loja e status de auditoria para análise dos caixas'
          ]
        },
        {
          id: '1.5.2',
          nome: 'Verificar eficiência',
          passos: [
            'Meta mínima de 85% de caixas aprovados'
          ]
        },
        {
          id: '1.5.3',
          nome: 'Marcar resultado',
          passos: [
            'Classificar caixas como "Auditado" ou "Pendente"'
          ]
        },
        {
          id: '1.5.4',
          nome: 'Aplicar códigos de erro',
          passos: [
            'Para divergências, codificar conforme "Tabela de Erros 2025"'
          ]
        }
      ]
    },
    {
      id: '1.6',
      nome: 'Validação de Despesas lojas Oscar',
      nivel: 'Tático',
      ferramentas: ['Mega', 'Subgrupo de Despesas 2024'],
      tarefas: [
        {
          id: '1.6.1',
          nome: 'Listar despesas',
          passos: [
            'Consultar despesas registradas no Mega',
            'Validar o Recibo padrão (eventuais) ou Nota Fiscal (demais)'
          ]
        },
        {
          id: '1.6.2',
          nome: 'Classificar despesas',
          passos: [
            'Conferir Subgrupo correto: Alimentação, Custos Extras, Manutenção etc...',
            'Validar fornecedor (ex: Temporários, Marlene)'
          ]
        },
        {
          id: '1.6.3',
          nome: 'Conferir autorização',
          passos: [
            'Verificar se quem aprovou tem alçada suficiente: Loja "até R$200", Regional "até R$800" e Diretor "acima de R$1.000"'
          ]
        },
        {
          id: '1.6.4',
          nome: 'Reprovar despesas inconsistentes',
          passos: [
            'Sem comprovante, valores altos, subgrupo errado'
          ]
        },
        {
          id: '1.6.5',
          nome: 'Basear lançamentos na tabela de subgrupo',
          passos: [
            'Utilizar a Tabela de Subgrupo de Despesas como referência',
            'Identificar corretamente o subgrupo da despesa (ex: alimentação, manutenção, custos extras)',
            'Selecionar o fornecedor adequado (ex: temporários, Marlene, controladoria)',
            'Determinar quem pode autorizar (Caixa Líder, Gerente, Regional, Diretoria)'
          ]
        }
      ]
    }
  ]
};
