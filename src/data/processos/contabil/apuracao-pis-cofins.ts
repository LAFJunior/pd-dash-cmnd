import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

export const apuracaoPisCofins: ProcessoDetalhado = {
  id: 'CONT-09.2',
  nome: 'Apuração do PIS e COFINS',
  descricao: 'Processo de coleta, cálculo e consolidação dos valores de PIS e COFINS',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'border-l-green-500',
  entrada: 'Dados de compras, entradas, vendas e saídas obtidos da Consulta de Apuração do Sistema Fiscal e planilha fiscal consolidada',
  saida: 'Valores de PIS e COFINS apurados e registrados conforme legislação vigente',
  sistemas_utilizados: ['Sistema Fiscal (Consulta da Apuração)', 'Planilha Fiscal (Google Sheets)', 'Excel'],
  subprocessos: [
    {
      id: '9.2.1',
      nome: 'Coleta de Informações Fiscais',
      nivel: 'Operacional',
      ferramentas: ['Sistema Fiscal'],
      tarefas: [
        {
          id: '9.2.1.1',
          nome: 'Acessar o sistema Fiscal',
          passos: [
            'Navegar em: Fiscal > Apuração > Consulta da Apuração > PIS/COFINS',
            'Selecionar o período desejado',
            'Baixar ou visualizar os valores consolidados de base de cálculo e receitas'
          ]
        }
      ]
    },
    {
      id: '9.2.2',
      nome: 'Acesso à Planilha Fiscal Consolidada',
      nivel: 'Operacional',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '9.2.2.1',
          nome: 'Abrir planilha fiscal',
          passos: [
            'Utilizar o link disponibilizado: Planilha Fiscal (Google Sheets)',
            'Caso não tenha acesso, solicitar autorização ao setor Fiscal'
          ]
        }
      ]
    },
    {
      id: '9.2.3',
      nome: 'Importação de Dados de Compras e Entradas',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '9.2.3.1',
          nome: 'Registrar informações de entrada',
          passos: [
            'Copiar dados de compras/entradas (Códigos 1102, 2102, 5202, 6202 etc.)',
            'Verificar valores de receita, ICMS e base de cálculo'
          ]
        }
      ]
    },
    {
      id: '9.2.4',
      nome: 'Importação de Dados de Vendas e Saídas',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '9.2.4.1',
          nome: 'Registrar informações de saída',
          passos: [
            'Copiar dados de vendas/saídas (Códigos 1202, 2202 etc.)',
            'Verificar valores de receita, ICMS e base de cálculo'
          ]
        }
      ]
    },
    {
      id: '9.2.5',
      nome: 'Cálculo do PIS e COFINS',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '9.2.5.1',
          nome: 'Aplicar alíquotas',
          passos: [
            'Aplicar alíquota de PIS conforme base de cálculo (exemplo: 0,0165)',
            'Aplicar alíquota de COFINS conforme base de cálculo (exemplo: 0,0760)',
            'Registrar valores apurados (PIS e COFINS)'
          ]
        }
      ]
    },
    {
      id: '9.2.6',
      nome: 'Consolidação Final',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '9.2.6.1',
          nome: 'Validar totais',
          passos: [
            'Conferir valores totais de PIS e COFINS apurados',
            'Comparar com créditos existentes (quando aplicável)'
          ]
        }
      ]
    }
  ]
};