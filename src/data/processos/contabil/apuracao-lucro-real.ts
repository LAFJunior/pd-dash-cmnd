import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

export const apuracaoLucroReal: ProcessoDetalhado = {
  id: 'CONT-09.10',
  nome: 'Apuração do Lucro Real Trimestral',
  descricao: 'Processo de apuração trimestral do Lucro Real com cálculo de IRPJ e CSLL',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'border-l-red-500',
  entrada: 'Balancetes mensais encerrados, ECD entregue, plano de contas atualizado, ajustes de adição/exclusão, base de cálculo de IRPJ e CSLL, e documentos fiscais que impactam na apuração do lucro',
  saida: 'Apuração trimestral do Lucro Real realizada, IRPJ e CSLL devidamente calculados, guias emitidas e documentos arquivados conforme exigência fiscal',
  sistemas_utilizados: ['DOMÍNIO', 'Planilha de controle de tributos', 'Relatórios do balancete', 'Certificado digital', 'Servidor interno (Drive G:)'],
  subprocessos: [
    {
      id: '9.10.1',
      nome: 'Consolidação dos Resultados Trimestrais',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO'],
      tarefas: [
        {
          id: '9.10.1.1',
          nome: 'Geração do Balancete Trimestral',
          passos: [
            'Acesse DOMÍNIO > Contábil > Relatórios > Balancete',
            'Selecione o período do trimestre (ex: 01/01 a 31/03)',
            'Exporte o relatório em Excel e salve com o nome: "Balancete_Trimestral_XX.XX.XXXX"'
          ]
        },
        {
          id: '9.10.1.2',
          nome: 'Conferência das contas de resultado',
          passos: [
            'Revise contas de Receita, Custo, Despesas Operacionais e Financeiras',
            'Valide se há movimentações indevidas em contas zeradas ou de uso temporário',
            'Acesse DOMÍNIO > Contábil > Razão Analítico para verificar os lançamentos'
          ]
        }
      ]
    },
    {
      id: '9.10.2',
      nome: 'Cálculo do IRPJ e CSLL com Base no Lucro Real',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO'],
      tarefas: [
        {
          id: '9.10.2.1',
          nome: 'Realizar ajustes de adições e exclusões',
          passos: [
            'Acesse DOMÍNIO > Fiscal > Apuração do IRPJ e CSLL > Lançamentos',
            'Insira os ajustes previstos na legislação: – Adições: despesas não dedutíveis, provisões, multas. – Exclusões: incentivos fiscais, reversões de provisões',
            'Documente os ajustes com base nos relatórios de suporte e normas fiscais'
          ]
        },
        {
          id: '9.10.2.2',
          nome: 'Compensar prejuízos fiscais',
          passos: [
            'Acesse DOMÍNIO > Fiscal > Apuração > Compensações',
            'Insira os saldos de prejuízo fiscal acumulado, limitado a 30% do lucro líquido ajustado',
            'Consulte planilha de controle de prejuízos fiscais e valores disponíveis para compensar'
          ]
        },
        {
          id: '9.10.2.3',
          nome: 'Calcular IRPJ e CSLL a recolher',
          passos: [
            'DOMÍNIO > Fiscal > Apuração do Lucro Real > Cálculo',
            'Após os ajustes, gere o valor de IRPJ (15% e adicional de 10%) e CSLL (9%)',
            'Emita o relatório final e exporte para planilha de controle'
          ]
        }
      ]
    },
    {
      id: '9.10.3',
      nome: 'Geração e Emissão das Guias',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO'],
      tarefas: [
        {
          id: '9.10.3.1',
          nome: 'Emitir DARF de IRPJ e CSLL',
          passos: [
            'Acesse DOMÍNIO > Fiscal > Guias > Emissão de DARFs',
            'Selecione o tributo (IRPJ ou CSLL), período e CNPJ',
            'Gere o DARF com vencimento no último dia útil do mês subsequente ao encerramento do trimestre'
          ]
        },
        {
          id: '9.10.3.2',
          nome: 'Validar código de receita e histórico',
          passos: [
            'Verifique se o código de receita é compatível: – IRPJ: 2171 (Lucro Real Trimestral) – CSLL: 2372 (Lucro Real Trimestral)',
            'Confirme se o valor e período estão corretos antes da impressão'
          ]
        },
        {
          id: '9.10.3.3',
          nome: 'Registrar guias pagas no controle interno',
          passos: [
            'Após pagamento, anexe o comprovante bancário à planilha de controle mensal de tributos',
            'Salve os comprovantes e relatórios em: G:\\Departamento Contábil\\Lucro_Real\\Ano\\Trimestre_XX'
          ]
        }
      ]
    }
  ]
};