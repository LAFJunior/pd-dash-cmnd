import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

export const conciliacaoReceitas: ProcessoDetalhado = {
  id: 'CONT-09.7',
  nome: 'Conciliação Contábil de Receitas e Despesas',
  descricao: 'Processo de conciliação e validação de receitas e despesas operacionais',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'border-l-green-500',
  entrada: 'Receitas e despesas lançadas no Mega; relatórios financeiros; documentos fiscais; extratos bancários; arquivos processados no sistema contábil DOMÍNIO',
  saida: 'Receitas e despesas conciliadas no DOMÍNIO; divergências tratadas com ajustes registrados e documentação salva para auditoria',
  sistemas_utilizados: ['DOMÍNIO', 'Mega', 'Planilhas do Financeiro', 'Equals', 'GetNet', 'Fiabilité', 'Arquivos OFX', 'Drive Corporativo', 'Google Sheets'],
  subprocessos: [
    {
      id: '9.7.1',
      nome: 'Conciliação de Receitas Operacionais',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO', 'GetNet', 'Equals', 'Fiabilité'],
      tarefas: [
        {
          id: '9.7.1.1',
          nome: 'Importação das receitas operacionais para o DOMÍNIO',
          passos: [
            'Acesse DOMÍNIO > Contábil > Importações > Importação de Lançamentos',
            'Selecione a empresa e o período de competência',
            'Anexe o arquivo de receitas gerado no Mega (Excel ou XML)',
            'Clique em "Validar" para revisar a estrutura',
            'Corrija erros, se houver, e clique em "Importar" para concluir'
          ]
        },
        {
          id: '9.7.1.2',
          nome: 'Comparar receitas com relatórios de adquirentes',
          passos: [
            'Baixe os relatórios mensais de vendas e recebimentos das plataformas GetNet, Equals e Fiabilité',
            'Acesse DOMÍNIO > Contábil > Relatórios > Razão Contábil e filtre as contas de receita (ex: 3.1.x)',
            'Confronte os valores por loja e por dia com os recebimentos reais dos extratos e adquirentes'
          ]
        },
        {
          id: '9.7.1.3',
          nome: 'Ajustar divergências de receita',
          passos: [
            'Em caso de diferença por taxa, estorno ou valor não recebido, acesse DOMÍNIO > Contábil > Lançamentos > Inclusão Manual',
            'Crie um lançamento de ajuste: – Conta Débito: Despesa Financeira (Taxas ou Ajustes) – Conta Crédito: Receita Bruta ou conta compensatória',
            'Registre o histórico detalhado (ex: "Estorno venda Cartão Loja 40 - 10/07/2025")'
          ]
        }
      ]
    },
    {
      id: '9.7.2',
      nome: 'Conciliação de Despesas Operacionais',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO', 'Google Sheets'],
      tarefas: [
        {
          id: '9.7.2.1',
          nome: 'Conferência de despesas com base na planilha fiscal',
          passos: [
            'Acesse a planilha consolidada mensal (Google Drive ou servidor interno)',
            'Compare os CFOPs, CSTs e valores com o módulo DOMÍNIO > Contábil > Consulta por Conta',
            'Valide se a classificação contábil está adequada conforme natureza da despesa'
          ]
        },
        {
          id: '9.7.2.2',
          nome: 'Identificar despesas recorrentes não lançadas',
          passos: [
            'No DOMÍNIO, acesse Contábil > Relatórios > Histórico de Despesas',
            'Gere relatório comparativo entre os últimos três meses',
            'Verifique se alguma despesa esperada não está registrada no mês vigente'
          ]
        },
        {
          id: '9.7.2.3',
          nome: 'Correção de lançamentos contábeis incorretos',
          passos: [
            'Acesse DOMÍNIO > Contábil > Lançamentos > Alteração',
            'Localize o lançamento com erro (ex: conta errada, valor incorreto ou data)',
            'Edite os campos necessários com base no plano de contas e centro de custo',
            'Salve a alteração com histórico justificando o ajuste'
          ]
        }
      ]
    },
    {
      id: '9.7.3',
      nome: 'Conciliação Contábil-Bancária Avançada',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO'],
      tarefas: [
        {
          id: '9.7.3.1',
          nome: 'Importar extratos OFX e executar conciliação',
          passos: [
            'Acesse DOMÍNIO > Bancos > Conciliação > Importar Extrato',
            'Anexe os arquivos OFX por banco e por loja',
            'Execute a conciliação automática e identifique os itens não vinculados'
          ]
        },
        {
          id: '9.7.3.2',
          nome: 'Tratar lançamentos pendentes',
          passos: [
            'Acesse a aba de pendências e filtre por lançamentos sem correspondência',
            'Analise cada caso (ex: tarifa, estorno, devolução, depósito)',
            'Registre os ajustes no DOMÍNIO > Contábil > Lançamentos > Inclusão Manual, utilizando conta de transição ou "em análise"'
          ]
        },
        {
          id: '9.7.3.3',
          nome: 'Geração de planilha de justificativas',
          passos: [
            'Acesse DOMÍNIO > Relatórios > Conciliação Detalhada',
            'Exporte a planilha com colunas: Data, Valor, Tipo, Situação, Justificativa',
            'Salve no diretório: G:\\Departamento Contábil\\Conciliações\\Mês_Competência'
          ]
        }
      ]
    }
  ]
};