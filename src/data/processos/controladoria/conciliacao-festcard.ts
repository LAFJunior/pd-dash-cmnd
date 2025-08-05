
import { ProcessoDetalhado } from '@/types/processo';
import { Scale } from 'lucide-react';

export const conciliacaoFestcard: ProcessoDetalhado = {
  id: 'CON-02.4',
  nome: 'Conciliação Financeira FestCard',
  descricao: 'Dados de vendas realizadas via FestCard nas lojas do grupo, relatórios de faturamento, acordos de renegociação e super troco, comissões e valores a repassar às lojas credenciadas.',
  nivel: 'Operacional',
  icon: Scale,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  entrada: 'Dados de vendas realizadas via FestCard nas lojas do grupo, relatórios de faturamento, acordos de renegociação e super troco, comissões e valores a repassar às lojas credenciadas.',
  saida: 'Relatórios de vendas, faturamento, acordos e super troco analisados, validados e valores de repasse às lojas e credenciadas regularizados e prontos para execução financeira.',
  sistemas_utilizados: ['PR Fiabilité', 'Excel', 'Mega', 'Portal FestCard', 'Banco'],
  subprocessos: [
    {
      id: '2.4.1',
      nome: 'Conferência de Ordens de Pagamento - Vendas',
      nivel: 'Operacional',
      ferramentas: ['PR FIABILITE – Módulo de Ordem de Pagamento (Analítico)', 'Planilha - Encontro de Contas', 'Tabela de Código Externo'],
      tarefas: [
        {
          id: '2.4.1.1',
          nome: 'Validar ordens de pagamento',
          passos: [
            'Coletar e validar as ordens de pagamento geradas pelas vendas realizadas nas lojas',
            'Acessar o PR FIABILITE',
            'Selecionar: Módulo de Ordens de Pagamento (Analítico)',
            'Definir o intervalo de datas correspondente ao período de apuração (Data Inicial / Final)',
            'Sempre de Segunda à Domingo',
            'Selecionar todas as lojas para compor o relatório: Lojas do grupo e Lojas credenciadas'
          ]
        },
        {
          id: '2.4.1.2',
          nome: 'Tratar dados no Excel',
          passos: [
            'Exportar a listagem das vendas realizadas nas lojas físicas e credenciadas',
            'Aplicar filtro pelo Código Externo para identificar franquias, grupo "F" e credenciadas:',
            '"0" → Franquias',
            '"1,2,3..." → Grupos F',
            '"Outros" → Lojas Credenciadas',
            'Conciliar dados extraídos com a planilha de "Encontro de Contas"',
            'Validar se todas as vendas realizadas constam no relatório para prosseguir com o repasse'
          ]
        }
      ]
    },
    {
      id: '2.4.2',
      nome: 'Conferência e Conciliação de Faturas Pagas',
      nivel: 'Tático',
      ferramentas: ['PR FIABILITE – Módulo de Pagamento de Faturas', 'Excel'],
      tarefas: [
        {
          id: '2.4.2.1',
          nome: 'Apurar pagamentos de faturas',
          passos: [
            'Apurar, filtrar e conciliar os pagamentos de faturas realizadas nas lojas',
            'Acessar o PR FIABILITE',
            'Selecionar o módulo de Pagamento de Faturas por Data (código 01.05.01)',
            'Definir o período de apuração, mesmo intervalo utilizado em vendas',
            'Status do Pagamento: Ativo',
            'Tipo de Data: Pagamento',
            'Loja Repasse: Excluir PIX, TOTEM, MERCI e LOJA SISTEMA',
            'Exportar o relatório'
          ]
        },
        {
          id: '2.4.2.2',
          nome: 'Filtrar por grupo',
          passos: [
            'Utilizar a tabela de Grupos e realizar comparativo (PROCV) para identificar a qual Grupo "F" pertence cada loja'
          ]
        },
        {
          id: '2.4.2.3',
          nome: 'Conciliar valores',
          passos: [
            'Conciliar os valores de faturamento apurados com o extrato bancário, validando a correção dos valores e a efetividade dos repasses'
          ]
        }
      ]
    },
    {
      id: '2.4.3',
      nome: 'Apuração de Acordos de Renegociação',
      nivel: 'Operacional',
      ferramentas: ['Mega - Relatórios', 'PR FIABILITE', 'Excel'],
      tarefas: [
        {
          id: '2.4.3.1',
          nome: 'Processar acordos no Mega',
          passos: [
            'No Mega:',
            'Acessar o Mega',
            'Acessar Relatórios → Faturamento → Detalhamento → Mensal',
            'Selecionar canal de venda: Loja física e Online',
            'Selecionar grupos: F1, F2, F3, F7, F8',
            'Definir o período de análise',
            'Gerar relatório com a coluna "Recebimento Renegociação Fatura"',
            'Coletar valores de acordo por loja',
            'Registrar valores renegociados na planilha de Encontro de Contas',
            'Identificar deduções aplicáveis a cada loja',
            'Atualizar a planilha de Encontro de Contas, identificando as deduções aplicáveis a cada loja conforme os acordos'
          ]
        }
      ]
    },
    {
      id: '2.4.4',
      nome: 'Apuração de Vendas do Super Troco',
      nivel: 'Operacional',
      ferramentas: ['Mega – Relatórios', 'Excel'],
      tarefas: [
        {
          id: '2.4.4.1',
          nome: 'Gerar relatório de apuração',
          passos: [
            'Gerar o relatório de apuração dos valores',
            'Acessar Mega',
            'Acessar Relatórios → Faturamento → Detalhamento → Mensal',
            'Definir o período de análise',
            'Canal de venda: Produtos Digitais',
            'Selecionar grupo: F1, F2, F3, F7, F8, F9',
            'Gerar relatórios para cada grupo, no mesmo período das vendas',
            'Consolidar manualmente: Somar colunas: "Total" e "Outros Cartões" por loja',
            'Inserir valores na planilha de Encontro de Contas'
          ]
        }
      ]
    },
    {
      id: '2.4.5',
      nome: 'Repasses e Pagamentos',
      nivel: 'Tático',
      ferramentas: ['Portal FestCard', 'Excel', 'Banco', 'Mega'],
      tarefas: [
        {
          id: '2.4.5.1',
          nome: 'Executar rotina semanal',
          passos: [
            'Rotina Semanal de repasses',
            'Segunda-feira: Conferir comissão do Super Troco recebida. O Super Troco é apurado somente na última semana do mês',
            'Terça-feira: Enviar Encontro de Contas com dados consolidados. Acertar faturas, validar com banco e ajustar se necessário. Apuração realizada toda terça-feira, consolidando a semana anterior',
            'Quarta-feira: Realizar conciliações complementares',
            'Quinta-feira: Processar reposição de valores conforme planilha',
            'Sexta-feira: Realizar repasse às lojas credenciadas. Acessar Fiabilite (03.05.03), gerar relatório e validar valores. Emitir NF, lançar valores no Mega e registrar no controle geral'
          ]
        }
      ]
    }
  ]
};
