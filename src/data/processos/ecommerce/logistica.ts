
import { Package, Headphones, Truck, BarChart2, Repeat, FileSearch, Clock, AlertCircle, ListOrdered } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

export const operacoesAftersale: ProcessoDetalhado = {
  id: 'LOG-001',
  nome: 'Operações no Sistema Aftersale',
  descricao: 'Demanda de atualização cadastral ou necessidade de extração/atualização de dados referentes a devoluções e reversas via plataforma Aftersale',
  icon: Package,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Demanda de atualização cadastral ou necessidade de extração/atualização de dados referentes a devoluções e reversas via plataforma Aftersale.',
  saida: 'Lojas cadastradas/atualizadas corretamente no Aftersale, base de reversas exportada e tratada, planilha e dashboard atualizados, ações tomadas com base nas análises de dados.',
  sistemas_utilizados: ['Aftersale', 'Google Sheets', 'Jira', 'Looker Studio'],
  tempo_execucao: '2-4 horas',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '1.1',
      nome: 'Cadastro e Atualização de Lojas',
      nivel: 'Operacional',
      ferramentas: ['Plataforma Aftersale'],
      tarefas: [
        {
          id: '1.1.1',
          nome: 'Atualizar informações cadastrais das lojas',
          passos: [
            'Acessar: https://admin.troquefacil.com.br/settings',
            'Navegar até: Configurações ➞ Omni ➞ Minhas lojas',
            'Clicar em "Editar"',
            'Atualizar dados da loja',
            'Atualizar endereço',
            'Atualizar detalhes',
            'Atualizar contrato dos Correios',
            'Inserir o cartão postal'
          ],
          urls: ['https://admin.troquefacil.com.br/settings']
        }
      ]
    },
    {
      id: '1.2',
      nome: 'Exportar Base de Dados da Aftersale',
      nivel: 'Operacional',
      ferramentas: ['Plataforma Aftersale'],
      tarefas: [
        {
          id: '1.2.1',
          nome: 'Exportar produtos com entregas realizadas',
          passos: [
            'Acessar: https://admin.troquefacil.com.br/login',
            'Selecionar: Grupo Varejo Sul (IFC) ➞ Oscar Calçados',
            'Navegar até: Reversas ➞ Entrega realizada',
            'Clicar em "Exportar produtos"',
            'Se não houver pedidos: Verificar se há pedidos "Em Trânsito" que ainda não mudaram de status',
            'Verificar pedidos em "Pendência Fiscal"',
            'Em caso de erro, abrir chamado para Infracommerce',
            'Informar o time SAC por planilha, se necessário'
          ],
          urls: ['https://admin.troquefacil.com.br/login']
        }
      ]
    },
    {
      id: '1.3',
      nome: 'Atualizar Base no Google Sheets',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets', 'Jira'],
      tarefas: [
        {
          id: '1.3.1',
          nome: 'Atualizar informações da planilha de devoluções',
          passos: [
            'Acessar planilha compartilhada de devoluções',
            'Verificar e remover duplicidades',
            'Confirmar recebimento (via Jira/IFC)',
            'Atualizar status de recebimento (No prazo / Em atraso)',
            'Atualizar datas (Aprovado Aftersale)',
            'Atualizar status da logística',
            'Se risco de atraso (>4 dias úteis), abrir chamado'
          ]
        }
      ]
    },
    {
      id: '1.4',
      nome: 'Atualizar Dados no Looker Studio',
      nivel: 'Operacional',
      ferramentas: ['Google Looker Studio'],
      tarefas: [
        {
          id: '1.4.1',
          nome: 'Validar indicadores e tomar ações',
          passos: [
            'Acessar: Looker Studio ➞ Relatório IFC',
            'Verificar performance da Infracommerce',
            'Verificar pendências',
            'Se necessário, reabrir chamados e acionar times'
          ]
        }
      ]
    }
  ]
};

export const processosLogisticaDetalhados: ProcessoDetalhado[] = [
  operacoesAftersale,
  // Outros processos podem ser adicionados aqui
];
