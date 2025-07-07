
import { ProcessoDetalhado } from '@/types/processo';
import { Calculator, DollarSign, PieChart } from 'lucide-react';

export const processosControladoria: ProcessoDetalhado[] = [
  {
    id: 'CON-001',
    nome: 'Auditoria de caixa, lojas Oscar',
    descricao: 'Processo de auditoria de caixa nas lojas da rede Oscar',
    nivel: 'Operacional',
    icon: Calculator,
    cor: 'bg-blue-600',
    entrada: 'Relatórios de vendas diárias, movimentações de caixa, comprovantes de transações',
    saida: 'Relatório de auditoria, identificação de divergências, plano de ação corretiva',
    tempo_execucao: '2-3 horas por loja',
    frequencia: 'Diária',
    sistemas_utilizados: ['SAP', 'Sistema de PDV', 'Planilhas Excel'],
    arquivos: [
      {
        id: 'CON-001-manual',
        nome: 'Manual de Auditoria de Caixa',
        tipo: 'pdf',
        categoria: 'documentacao',
        url: '/processos/controladoria/documentos/CON-001-manual.pdf',
        tamanho: '2.5MB',
        dataAtualizacao: '15/01/2025'
      },
      {
        id: 'CON-001-fluxo',
        nome: 'Fluxograma do Processo de Auditoria',
        tipo: 'png',
        categoria: 'fluxograma',
        url: '/processos/controladoria/fluxogramas/CON-001-fluxo.png',
        tamanho: '850KB',
        dataAtualizacao: '12/01/2025'
      },
      {
        id: 'CON-001-checklist',
        nome: 'Checklist de Auditoria',
        tipo: 'xlsx',
        categoria: 'checklist',
        url: '/processos/controladoria/templates/CON-001-checklist.xlsx',
        tamanho: '450KB',
        dataAtualizacao: '10/01/2025'
      },
      {
        id: 'CON-001-template',
        nome: 'Template de Relatório de Auditoria',
        tipo: 'docx',
        categoria: 'template',
        url: '/processos/controladoria/templates/CON-001-template.docx',
        tamanho: '1.2MB',
        dataAtualizacao: '08/01/2025'
      }
    ],
    subprocessos: [
      {
        id: 'CON-001.1',
        nome: 'Preparação da Auditoria',
        nivel: 'Operacional',
        ferramentas: ['SAP', 'Excel'],
        tarefas: [
          {
            id: 'CON-001.1.1',
            nome: 'Coleta de Dados Preliminares',
            passos: [
              'Acessar sistema SAP para extrair relatórios de vendas do dia anterior',
              'Verificar movimentações de caixa registradas no sistema de PDV',
              'Coletar comprovantes físicos de transações especiais',
              'Organizar documentação conforme checklist padrão'
            ]
          }
        ]
      },
      {
        id: 'CON-001.2',
        nome: 'Execução da Auditoria',
        nivel: 'Operacional',
        ferramentas: ['Calculadora', 'Sistema PDV', 'Formulários'],
        tarefas: [
          {
            id: 'CON-001.2.1',
            nome: 'Conferência Física do Caixa',
            passos: [
              'Contar fisicamente o dinheiro em espécie',
              'Verificar cartões e vouchers',
              'Conferir cheques e outras formas de pagamento',
              'Comparar com saldo registrado no sistema'
            ]
          },
          {
            id: 'CON-001.2.2',
            nome: 'Análise de Divergências',
            passos: [
              'Identificar diferenças entre físico e sistema',
              'Investigar causas das divergências encontradas',
              'Documentar irregularidades no formulário padrão',
              'Calcular impacto financeiro das diferenças'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'CON-002',
    nome: 'Conciliação Bancária Mensal',
    descricao: 'Processo de conciliação das contas bancárias da empresa',
    nivel: 'Tático',
    icon: DollarSign,
    cor: 'bg-green-600',
    entrada: 'Extratos bancários, registros contábeis, comprovantes de transações',
    saida: 'Relatório de conciliação bancária, ajustes contábeis necessários',
    tempo_execucao: '4-6 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['SAP', 'Internet Banking', 'Excel'],
    arquivos: [
      {
        id: 'CON-002-procedimento',
        nome: 'Procedimento de Conciliação Bancária',
        tipo: 'pdf',
        categoria: 'documentacao',
        url: '/processos/controladoria/documentos/CON-002-procedimento.pdf',
        tamanho: '1.8MB',
        dataAtualizacao: '20/01/2025'
      },
      {
        id: 'CON-002-planilha',
        nome: 'Planilha de Conciliação',
        tipo: 'xlsx',
        categoria: 'template',
        url: '/processos/controladoria/templates/CON-002-planilha.xlsx',
        tamanho: '680KB',
        dataAtualizacao: '18/01/2025'
      }
    ],
    subprocessos: [
      {
        id: 'CON-002.1',
        nome: 'Coleta de Informações Bancárias',
        nivel: 'Operacional',
        ferramentas: ['Internet Banking', 'SAP'],
        tarefas: [
          {
            id: 'CON-002.1.1',
            nome: 'Download de Extratos',
            passos: [
              'Acessar internet banking de todas as contas',
              'Baixar extratos do período em formato digital',
              'Organizar arquivos por banco e conta',
              'Verificar integridade dos dados baixados'
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'CON-003',
    nome: 'Análise de Indicadores Financeiros',
    descricao: 'Análise mensal dos principais indicadores financeiros da empresa',
    nivel: 'Estratégico',
    icon: PieChart,
    cor: 'bg-purple-600',
    entrada: 'Demonstrações financeiras, dados operacionais, orçamento aprovado',
    saida: 'Dashboard de indicadores, relatório gerencial, recomendações estratégicas',
    tempo_execucao: '6-8 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['SAP', 'Power BI', 'Excel'],
    arquivos: [
      {
        id: 'CON-003-metodologia',
        nome: 'Metodologia de Análise de Indicadores',
        tipo: 'pdf',
        categoria: 'documentacao',
        url: '/processos/controladoria/documentos/CON-003-metodologia.pdf',
        tamanho: '3.2MB',
        dataAtualizacao: '25/01/2025'
      },
      {
        id: 'CON-003-dashboard',
        nome: 'Template Dashboard Power BI',
        tipo: 'docx',
        categoria: 'template',
        url: '/processos/controladoria/templates/CON-003-dashboard.pbix',
        tamanho: '4.5MB',
        dataAtualizacao: '22/01/2025'
      },
      {
        id: 'CON-003-fluxo-analise',
        nome: 'Fluxo de Análise de Indicadores',
        tipo: 'png',
        categoria: 'fluxograma',
        url: '/processos/controladoria/fluxogramas/CON-003-fluxo.png',
        tamanho: '1.1MB',
        dataAtualizacao: '20/01/2025'
      }
    ],
    subprocessos: [
      {
        id: 'CON-003.1',
        nome: 'Coleta e Tratamento de Dados',
        nivel: 'Operacional',
        ferramentas: ['SAP', 'Excel'],
        tarefas: [
          {
            id: 'CON-003.1.1',
            nome: 'Extração de Dados Financeiros',
            passos: [
              'Extrair balancete mensal do SAP',
              'Coletar dados de vendas e custos operacionais',
              'Verificar consistência dos dados extraídos',
              'Preparar base de dados para análise'
            ]
          }
        ]
      }
    ]
  }
];
