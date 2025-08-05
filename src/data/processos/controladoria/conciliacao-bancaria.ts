
import { ProcessoDetalhado } from '@/types/processo';
import { CreditCard } from 'lucide-react';

export const conciliacaoBancaria: ProcessoDetalhado = {
  id: 'CON-02.5',
  nome: 'Conciliação Financeira e Bancária',
  descricao: 'Extratos bancários, relatórios de vendas com cartões e Pix, lançamentos financeiros no sistema Mega',
  nivel: 'Tático',
  icon: CreditCard,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  entrada: 'Extratos bancários, relatórios de vendas com cartões e Pix, lançamentos financeiros no sistema Mega',
  saida: 'Conciliação bancária e de recebíveis concluída, com registros financeiros consistentes no sistema, pendências tratadas e dados prontos para fechamento contábil.',
  sistemas_utilizados: ['ERP Mega', 'Internet Banking', 'Conciliador', 'Equals'],
  subprocessos: [
    {
      id: '2.5.1',
      nome: 'Inclusão de Lançamentos no Sistema',
      nivel: 'Operacional',
      ferramentas: ['ERP Mega'],
      tarefas: [
        {
          id: '2.5.1.1',
          nome: 'Registrar créditos e débitos',
          passos: [
            'Registrar créditos e débitos no Mega',
            'Acessar o Mega',
            'Ir na área de "lançamentos financeiros"',
            'Lançar todas as entradas (recebimentos) e saídas (pagamentos) do período',
            'Confirmar: datas, valores, descrições',
            'Correspondentes aos extratos bancários'
          ]
        }
      ]
    },
    {
      id: '2.5.2',
      nome: 'Conciliação Bancária',
      nivel: 'Operacional',
      ferramentas: ['Internet Banking', 'Conciliador', 'Mega'],
      tarefas: [
        {
          id: '2.5.2.1',
          nome: 'Gerar extratos bancários',
          passos: [
            'Gerar e baixar extratos bancários',
            'Acessar o internet banking das instituições',
            'Selecionar por: Conta e o período a ser conciliado',
            'Baixar os extratos em formato OFX',
            'Salvar os arquivos no conciliador interno'
          ]
        },
        {
          id: '2.5.2.2',
          nome: 'Validar lançamentos',
          passos: [
            'Validar lançamentos no Mega com extratos bancários',
            'Acessar o conciliador',
            'Importar extrato baixado',
            'Comparar: Valores, Datas, Descrições',
            'Com os lançamentos do Mega',
            'Identificar divergências ou lançamentos ausentes'
          ]
        },
        {
          id: '2.5.2.3',
          nome: 'Acionar equipe para ajustes',
          passos: [
            'Acionar equipe financeira para ajustes',
            'Registrar divergências em planilha',
            'Enviar e-mail para o responsável da conta com evidências',
            'Aguardar correção e realizar nova validação'
          ]
        }
      ]
    },
    {
      id: '2.5.3',
      nome: 'Conferência de Recebimentos de Cartões e Pix',
      nivel: 'Operacional',
      ferramentas: ['Conciliador Equals', 'ERP Mega', 'Planilhas'],
      tarefas: [
        {
          id: '2.5.3.1',
          nome: 'Validar recebimentos',
          passos: [
            'Validar recebimentos com cartões e Pix',
            'Acessar o Equals',
            'Selecionar: Período e lojas a serem conciliadas',
            'Comparar recebimentos com os valores registrados no Mega',
            'Verificar divergências, descontos e taxas aplicadas'
          ]
        },
        {
          id: '2.5.3.2',
          nome: 'Tratar divergências',
          passos: [
            'Tratar divergências com suporte Equals ou financeiro',
            'Registrar valores divergentes',
            'Abrir chamado com o suporte Equals ou contatar financeiro',
            'Aguardar posicionamento e realizar correção no Mega'
          ]
        },
        {
          id: '2.5.3.3',
          nome: 'Registrar taxas',
          passos: [
            'Registrar taxas de recebimento no Mega',
            'Acessar o Mega: Lançamentos de despesas',
            'Incluir valores de taxas de Pix e cartões como despesas operacionais',
            'Validar valores com base em faturas dos adquirentes'
          ]
        }
      ]
    },
    {
      id: '2.5.4',
      nome: 'Finalização e Controle',
      nivel: 'Tático',
      ferramentas: ['Planilhas de conciliação', 'ERP Mega', 'Conciliador'],
      tarefas: [
        {
          id: '2.5.4.1',
          nome: 'Atualizar controles',
          passos: [
            'Atualizar planilhas e controles internos',
            'Registrar status de conciliação por loja, conta e período',
            'Identificar pendências e chamados abertos',
            'Preparar ambiente para próxima conciliação diária ou semanal'
          ]
        },
        {
          id: '2.5.4.2',
          nome: 'Consolidar e travar período',
          passos: [
            'Consolidar mês e travar período no sistema',
            'Acessar sistema e aplicar data de corte (ex: 30/04)',
            'Verificar se todos os saldos estão corretos e sem pendências',
            'Realizar o bloqueio do período no sistema (trava do mês)'
          ]
        }
      ]
    }
  ]
};
