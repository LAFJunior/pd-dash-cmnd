import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

export const integracaoFiscal: ProcessoDetalhado = {
  id: 'CONT-09.5',
  nome: 'Integração Fiscal',
  descricao: 'Processo de integração fiscal entre os módulos Fiscal e Contábil do sistema',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'border-l-red-500',
  entrada: 'Notas fiscais de entrada e saída do período, acesso aos módulos Fiscal e Contábil do sistema',
  saida: 'Integração fiscal do mês realizada e lançamentos liberados corretamente na contabilidade',
  sistemas_utilizados: ['Módulo Fiscal', 'Módulo Contábil', 'Relatórios de CFOP', 'ECF e CF-e SAT'],
  subprocessos: [
    {
      id: '9.5.1',
      nome: 'Bloqueio da Digitação de Notas',
      nivel: 'Operacional',
      ferramentas: ['Módulo Fiscal'],
      tarefas: [
        {
          id: '9.5.1.1',
          nome: 'Bloquear digitação de notas no módulo Fiscal',
          passos: [
            'Acessar: Fiscal > Rotinas Auxiliares > Bloqueio - Digitação de Notas',
            'Inserir a empresa referente',
            'Fechar o cadeado até o mês que está sendo processado',
            'Salvar alterações (ícone de disquete)'
          ]
        }
      ]
    },
    {
      id: '9.5.2',
      nome: 'Alteração em Lote de CFOP e Código Contábil',
      nivel: 'Operacional',
      ferramentas: ['Módulo Fiscal'],
      tarefas: [
        {
          id: '9.5.2.1',
          nome: 'Ajustar códigos contábeis e CFOPs',
          passos: [
            'Acessar: Fiscal > Rotinas Auxiliares > Alteração em lote cos int e cod CTB',
            'Selecionar a empresa e período completo do mês',
            'Selecionar notas de entrada/saída',
            'Em "opções", selecionar a primeira configuração',
            'Definir CFOP inicial 1102 e CFOP final 6949 → Processar'
          ]
        },
        {
          id: '9.5.2.2',
          nome: 'Conferir mapa resumo ECF / CF-e SAT',
          passos: [
            'Selecionar novamente "opções" primeira',
            'Definir CFOP inicial 5102 e CFOP final 6102 → Processar',
            'Preencher a coluna "CLI CORRETO" e conferir os já preenchidos',
            'Obs.: CFOPs 1949, 2949, 5929, 6915 não precisam ser preenchidos',
            'Conferir também CFOP 1933 (material gráfico e impressos)'
          ]
        }
      ]
    },
    {
      id: '9.5.3',
      nome: 'Geração da Integração Fiscal',
      nivel: 'Operacional',
      ferramentas: ['Módulo Contábil'],
      tarefas: [
        {
          id: '9.5.3.1',
          nome: 'Gerar integração do módulo Fiscal',
          passos: [
            'Acessar: Contábil > Contabilidade > Integração > Módulo Fiscal > Gerar Integração',
            'Selecionar mês/ano e loja desejada',
            'Executar geração da integração',
            'Observar colunas com "!" e o status do SAT ("x" ou "v")',
            'Se aparecer "x", retornar ao bloqueio de notas (Subprocesso 9.5.1) e verificar se o cadeado está fechado'
          ]
        },
        {
          id: '9.5.3.2',
          nome: 'Liberar integração',
          passos: [
            'Acessar: Liberação > Mês/Ano > Loja → Processar'
          ]
        }
      ]
    },
    {
      id: '9.5.4',
      nome: 'Manutenção e Liberação de Lançamentos',
      nivel: 'Operacional',
      ferramentas: ['Módulo Contábil'],
      tarefas: [
        {
          id: '9.5.4.1',
          nome: 'Manutenção de lançamentos',
          passos: [
            'Acessar: Contábil > Contabilidade > Integração > Manutenção de Lançamentos de Integração',
            'Selecionar empresa, sistema: Livros Fiscais, período completo do mês → Processar',
            'Liberar lançamentos (ícone "v" canto superior esquerdo)',
            'Aguardar conclusão (todas as notas devem ficar verdes)'
          ]
        },
        {
          id: '9.5.4.2',
          nome: 'Excluir uma integração fiscal (quando necessário)',
          passos: [
            'Acessar manutenção de lançamentos de integração',
            'Processar loja e período em Livros Fiscais',
            'Clicar no "X" canto superior esquerdo:',
            'Primeiro selecionar Excluir lançamentos da Contabilidade',
            'Depois selecionar novamente o "X" e Remover lançamentos que não foram liberados',
            'Refazer toda a integração desde o Subprocesso 9.5.1'
          ]
        }
      ]
    }
  ]
};