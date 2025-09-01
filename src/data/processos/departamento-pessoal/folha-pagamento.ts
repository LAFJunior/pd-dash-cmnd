import { ProcessoDetalhado } from '@/types/processo';
import { Calculator } from 'lucide-react';

export const folhaPagamento: ProcessoDetalhado = {
  id: 'DP-012.2',
  nome: 'Folha de Pagamento',
  descricao: 'Processamento completo da folha de pagamento com consolidação de informações, integração de dados e conferência final',
  nivel: 'Operacional',
  icon: Calculator,
  cor: 'bg-gradient-to-br from-green-500 to-green-600',
  entrada: 'Ponto eletrônico fechado, comissões, benefícios e variáveis do mês',
  saida: 'Folha de pagamento processada, conferida, validada e enviada para pagamento',
  tempo_execucao: '5-7 dias úteis',
  frequencia: 'Mensal',
  sistemas_utilizados: ['Senior', 'Mega', 'Seta', 'BShop', 'Topdesk', 'Excel'],
  subprocessos: [
    {
      id: '12.2.1',
      nome: 'Consolidação de Informações',
      nivel: 'Operacional',
      ferramentas: ['Mega', 'Oscar', 'Seta', 'Cigam', 'Bshop'],
      tarefas: [
        {
          id: '12.2.1.1',
          nome: 'Coletar dados de ponto',
          passos: [
            'Acessar sistema Mega – Controle de Ponto',
            'Selecionar o período de fechamento',
            'Bloquear o ponto (primeiro dia útil do mês seguinte)',
            'Exportar relatório consolidado: horas, faltas, horas extras'
          ]
        },
        {
          id: '12.2.1.2',
          nome: 'Coletar dados variáveis (comissões, premiações, descontos)',
          passos: [
            'Gerar arquivos de comissões conforme rede/sistema: Mega (Oscar, Jô, Scarlen, Paquetá, Carioca), Seta (Arezzo, Abys, Usaflex), Cigam (Victor Hugo), Bshop (Usaflex)',
            'Salvar os arquivos em pasta local',
            'Validar os relatórios conforme a política de cada rede',
            'Obter premiações de campanhas, metas, VR via Bishop ou e-mail',
            'Conferir planilhas auxiliares de VT, convênios médicos, consultas excedentes',
            'Validar se o cálculo do mês está ativo no sistema de benefícios'
          ]
        },
        {
          id: '12.2.1.3',
          nome: 'Validar envio completo pelas lojas',
          passos: [
            'Verificar recebimento de arquivos via Topdesk ou e-mail',
            'Conferir se todas as lojas enviaram seus dados',
            'Utilizar planilha de controle de recebimento'
          ]
        }
      ]
    },
    {
      id: '12.2.2',
      nome: 'Integração e Processamento',
      nivel: 'Operacional',
      ferramentas: ['Senior'],
      tarefas: [
        {
          id: '12.2.2.1',
          nome: 'Importar dados nos sistemas',
          passos: [
            'Importar benefícios: Sistema Benefícios/Tarefeiros → Integração, selecionar mês e opções "Mensalidades" e "Despesas"',
            'Importar comissões e premiações: Acessar módulo Administração de Pessoal > Implementações > Executar, Código da rotina: 601',
            'Importar ponto: Sistema Controle de Ponto > Integrações, validar cálculo do mês e empresa grupo 3'
          ]
        },
        {
          id: '12.2.2.2',
          nome: 'Processar ou recalcular folha',
          passos: [
            'Sistema: Administração de Pessoal > Cálculos > Efetuar Cálculo',
            'Selecionar grupo de empresas e competência',
            'Processar para gerar valores de folha com variáveis integradas'
          ]
        }
      ]
    },
    {
      id: '12.2.3',
      nome: 'Conferência e Validação',
      nivel: 'Operacional',
      ferramentas: ['Senior'],
      tarefas: [
        {
          id: '12.2.3.1',
          nome: 'Gerar relatórios para conferência',
          passos: [
            'Gerar relatórios totalizadores: 007 – Comissão e Premiação, 008 – Base VT, 010 – Horas Faltas, 013 – Líquido da folha, 014 – Quebra de caixa',
            'Gerar relatórios comparativos com mês anterior',
            'Validar variações anormais por loja'
          ]
        },
        {
          id: '12.2.3.2',
          nome: 'Validar colaboradores com erros',
          passos: [
            'Analisar arquivo de log da importação',
            'Verificar CPF e situação cadastral no Senior: múltiplos vínculos, colaborador desligado no período, reintegrações'
          ]
        },
        {
          id: '12.2.3.3',
          nome: 'Correções e reprocessamento',
          passos: [
            'Corrigir inconsistências diretamente no sistema',
            'Reprocessar folha parcial se necessário'
          ]
        }
      ]
    },
    {
      id: '12.2.4',
      nome: 'Fechamento e Pagamento',
      nivel: 'Operacional',
      ferramentas: ['Senior', 'Google Sheets'],
      tarefas: [
        {
          id: '12.2.4.1',
          nome: 'Fechar folha no sistema',
          passos: [
            'Confirmar fechamento da folha no Senior',
            'Verificar se todos os eventos foram processados corretamente'
          ]
        },
        {
          id: '12.2.4.2',
          nome: 'Enviar para o Financeiro',
          passos: [
            'Gerar arquivo bancário de pagamento',
            'Encaminhar ao setor financeiro',
            'Arquivar backups e logs em diretórios definidos'
          ]
        },
        {
          id: '12.2.4.3',
          nome: 'Checklist final',
          passos: [
            'Utilizar o checklist oficial da folha no Google Sheets',
            'Garantir que todas as etapas (ponto, benefícios, comissões, premiações) foram consideradas'
          ],
          urls: ['https://docs.google.com/spreadsheets/d/1T-gPeBTDnKmPGA2yhHg8pr5_bxwSr85LGFZkvsyRSa8/edit?gid=1193242346#gid=1193242346']
        }
      ]
    }
  ]
};
