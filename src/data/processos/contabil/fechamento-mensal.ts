import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

export const fechamentoContabilMensal: ProcessoDetalhado = {
  id: 'CONT-09.6',
  nome: 'Fechamento Contábil Mensal',
  descricao: 'Processo completo de fechamento contábil mensal com integrações, conciliações e validações',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  entrada: 'Documentos financeiros, extratos bancários (formato OFX), relatórios do Mega, planilhas de despesas, integrações fiscais, lançamentos manuais e automáticos, planilha de receitas por adquirente',
  saida: 'Fechamento contábil mensal concluído com integrações importadas, conciliações bancárias finalizadas, lançamentos complementares registrados, relatórios validados e documentação organizada para auditoria',
  sistemas_utilizados: ['DOMÍNIO', 'Mega', 'GetNet', 'Fiabilité', 'Equals', 'Arquivos OFX', 'Pasta G:'],
  subprocessos: [
    {
      id: '9.6.1',
      nome: 'Integrações e Conciliação Inicial',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO', 'Mega'],
      tarefas: [
        {
          id: '9.6.1.1',
          nome: 'Importação dos lançamentos contábeis oriundos do Mega',
          passos: [
            'Acesse o sistema DOMÍNIO > Contábil > Importações > Importação de Lançamentos',
            'Selecione a empresa e o mês de competência',
            'Clique em "Selecionar Arquivo" e anexe o Excel de integração (gerado pelo Mega)',
            'Verifique se os campos obrigatórios (Data, Conta Débito, Conta Crédito, Histórico, Centro de Custo) estão preenchidos corretamente',
            'Clique em "Validar" para identificar erros de estrutura ou campos inconsistentes',
            'Se validado com sucesso, clique em "Importar" para registrar os lançamentos no sistema contábil'
          ]
        },
        {
          id: '9.6.1.2',
          nome: 'Correção de rejeições na importação contábil',
          passos: [
            'Caso haja erros na importação, clique no ícone de erro "!" na tela de importações',
            'Analise o relatório exibido com os motivos das rejeições (ex: conta contábil inexistente, centro de custo inválido, histórico em branco)',
            'Corrija as informações diretamente na planilha Excel',
            'Retorne à tela DOMÍNIO > Contábil > Importações e realize uma nova tentativa de importação com o arquivo corrigido'
          ]
        },
        {
          id: '9.6.1.3',
          nome: 'Conciliação de taxas de cartões recebidas pelas adquirentes',
          passos: [
            'Acesse os portais da GetNet, Equals e Fiabilité e baixe os relatórios de recebíveis do mês (formato Excel ou PDF)',
            'Compare os valores de receita por data/loja com os lançamentos contabilizados no DOMÍNIO (contas 3.1.x)',
            'Em caso de divergências (como taxa não lançada ou diferença de valor recebido), acesse DOMÍNIO > Contábil > Lançamentos > Inclusão Manual',
            'Crie o lançamento complementar com a conta contábil correta (ex: Despesa com taxas bancárias) e registre o valor exato'
          ]
        },
        {
          id: '9.6.1.4',
          nome: 'Conciliação do Caixa PDV com o relatório Fiabilité',
          passos: [
            'Baixe o relatório Fiabilité de movimentação do PDV por loja e período',
            'Acesse o sistema DOMÍNIO > Contábil > Lançamentos > Consulta por Conta e selecione a conta 11101 (Caixa PDV)',
            'Compare os valores recebidos com os lançamentos registrados',
            'Caso identifique diferenças, registre a diferença como ajuste na conta 66110 (Diferença de Caixa) com lançamento complementar'
          ]
        }
      ]
    },
    {
      id: '9.6.2',
      nome: 'Conciliação Bancária',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO'],
      tarefas: [
        {
          id: '9.6.2.1',
          nome: 'Importação de extratos bancários no DOMÍNIO',
          passos: [
            'Acesse DOMÍNIO > Bancos > Conciliação > Importação de Extrato',
            'Clique em "Selecionar Arquivo" e anexe o arquivo no formato OFX recebido do Financeiro (por banco e por loja)',
            'Escolha o banco correspondente (ex: Santander, Banrisul, Itaú) e o mês de competência',
            'Confirme a importação automática das movimentações para o módulo bancário'
          ]
        },
        {
          id: '9.6.2.2',
          nome: 'Conciliação automática dos lançamentos bancários',
          passos: [
            'Vá em DOMÍNIO > Bancos > Conciliação Automática',
            'Selecione a conta bancária e o período desejado',
            'Clique em "Executar Conciliação" para o sistema cruzar os dados do extrato com os lançamentos contábeis',
            'Caso apareçam lançamentos não reconhecidos, acesse a aba "Pendentes" e clique em "Vincular Manualmente" ou insira o lançamento faltante manualmente'
          ]
        },
        {
          id: '9.6.2.3',
          nome: 'Tratamento de divergências de saldo',
          passos: [
            'Acesse DOMÍNIO > Contábil > Relatórios > Razão Contábil',
            'Filtre por banco, empresa e período',
            'Compare o saldo final com o extrato bancário em PDF',
            'Caso encontre divergência, identifique os dias com diferença e corrija os lançamentos por meio de inclusão manual ou nova importação'
          ]
        }
      ]
    },
    {
      id: '9.6.3',
      nome: 'Lançamentos Complementares',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO', 'Mega'],
      tarefas: [
        {
          id: '9.6.3.1',
          nome: 'Registro do IRRF sobre aluguel',
          passos: [
            'Acesse o sistema Mega > Financeiro > Lançamentos > Contas a Pagar',
            'Filtre o fornecedor e selecione a nota com retenção de IRRF',
            'Anote o valor retido e a conta correspondente',
            'No DOMÍNIO, vá em Contábil > Lançamentos > Inclusão Manual',
            'Lançar como: – Débito: Despesa com Aluguel (conta 511xx) – Crédito: IRRF a Recolher (21203)',
            'Histórico: "Retenção IRRF – aluguel mês/ano – loja XX"'
          ]
        },
        {
          id: '9.6.3.2',
          nome: 'Lançamento da depreciação mensal',
          passos: [
            'Acesse DOMÍNIO > Patrimônio > Depreciação > Executar',
            'Selecione a empresa e o período de competência',
            'Clique em "Calcular Depreciação" e aguarde o processamento',
            'Após conclusão, confira os lançamentos gerados automaticamente no módulo contábil'
          ]
        }
      ]
    },
    {
      id: '9.6.4',
      nome: 'Encerramento e Validação',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO'],
      tarefas: [
        {
          id: '9.6.4.1',
          nome: 'Geração de balancetes do mês',
          passos: [
            'Acesse DOMÍNIO > Contábil > Relatórios > Balancete de Verificação',
            'Selecione: – Tipo: Analítico e Sintético – Período: mês corrente – Exibir: Todos os centros de custo',
            'Clique em "Gerar Relatório" e salve o arquivo em PDF e Excel'
          ]
        },
        {
          id: '9.6.4.2',
          nome: 'Validação cruzada dos saldos',
          passos: [
            'Compare o balancete DOMÍNIO com: – Relatório de centros de custo do Mega – Planilha fiscal consolidada (Google Drive)',
            'Em caso de diferença, validar CFOPs, CSTs ou lançamentos pendentes'
          ]
        },
        {
          id: '9.6.4.3',
          nome: 'Backup da documentação mensal',
          passos: [
            'Salvar: – XMLs de notas fiscais – Planilhas de conciliação – Extratos bancários em PDF',
            'Pasta de destino: G:\\Departamento Fiscal_Contábil\\Contabilidade\\Mensalmente\\2025\\Mês XX',
            'Validar se todos os arquivos estão nominais, por loja e por tipo de documento'
          ]
        }
      ]
    }
  ]
};