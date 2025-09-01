import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

export const importacaoExtratosBancarios: ProcessoDetalhado = {
  id: 'CONT-09.4',
  nome: 'Importação de Extratos Bancários',
  descricao: 'Processo de importação e conciliação de extratos bancários no sistema Prosoft',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
  entrada: 'Extratos bancários em Excel enviados pelo Financeiro, acesso ao Sistema Prosoft',
  saida: 'Extratos bancários importados corretamente no sistema Prosoft e saldos conciliados',
  sistemas_utilizados: ['Sistema Prosoft (balancete, razão, importação Excel)', 'Pasta compartilhada de extratos bancários (G:)'],
  subprocessos: [
    {
      id: '9.4.1',
      nome: 'Identificação das Contas Bancárias',
      nivel: 'Operacional',
      ferramentas: ['Prosoft'],
      tarefas: [
        {
          id: '9.4.1.1',
          nome: 'Abrir balancete no Prosoft',
          passos: [
            'Caminho: Contábil > Contabilidade > Processamentos > Relatórios > Balancete de Verificação Mod. I',
            'Identificar os bancos cadastrados para a loja (ex.: Santander, Sicredi)'
          ]
        }
      ]
    },
    {
      id: '9.4.2',
      nome: 'Conferência de Saldos no Razão Contábil',
      nivel: 'Operacional',
      ferramentas: ['Prosoft'],
      tarefas: [
        {
          id: '9.4.2.1',
          nome: 'Consultar razão contábil',
          passos: [
            'Caminho: Contábil > Contabilidade > Processamentos > Relatórios > Razão Contábil',
            'Selecionar loja, mês e código da conta (ex.: 11203 – Banco Santander)',
            'Comparar saldo anterior do razão com o saldo anterior do extrato bancário'
          ]
        }
      ]
    },
    {
      id: '9.4.3',
      nome: 'Preparação do Extrato para Importação',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '9.4.3.1',
          nome: 'Criar cópia do extrato original',
          passos: [
            'Localizar arquivo: (G) > Departamento Fiscal_Contábil > Contabilidade > Mensalmente > Extratos Bancários > [Ano] > [Banco] > [Mês] > Extrato Excel da Loja',
            'Criar cópia em novo Excel para edição, preservando o original'
          ]
        },
        {
          id: '9.4.3.2',
          nome: 'Ajustar lançamentos ausentes',
          passos: [
            'Verificar lançamentos existentes no extrato, mas não no razão contábil',
            'Preencher corretamente as colunas Débito/Crédito para os lançamentos faltantes',
            'Manter apenas os lançamentos que precisam ser inseridos na contabilidade'
          ]
        }
      ]
    },
    {
      id: '9.4.4',
      nome: 'Importação da Planilha no Prosoft',
      nivel: 'Operacional',
      ferramentas: ['Prosoft'],
      tarefas: [
        {
          id: '9.4.4.1',
          nome: 'Abrir rotina de importação no Prosoft',
          passos: [
            'Caminho: Contábil > Contabilidade > Processamentos > Importação de EXCEL',
            'Selecionar modelo Recebimentos',
            'Confirmar empresa selecionada (alterar se necessário)'
          ]
        },
        {
          id: '9.4.4.2',
          nome: 'Importar planilha ajustada',
          passos: [
            'Selecionar arquivo salvo',
            'Executar a importação e liberar para CTB',
            'Corrigir eventuais erros de parametrização e repetir se necessário'
          ]
        }
      ]
    },
    {
      id: '9.4.5',
      nome: 'Validação da Importação',
      nivel: 'Operacional',
      ferramentas: ['Prosoft'],
      tarefas: [
        {
          id: '9.4.5.1',
          nome: 'Verificar saldo final no Razão Contábil',
          passos: [
            'Abrir razão contábil e confirmar que o saldo final confere com o extrato bancário em PDF',
            'Caso haja divergências, revisar lançamentos dia a dia e repetir processo'
          ]
        }
      ]
    }
  ]
};