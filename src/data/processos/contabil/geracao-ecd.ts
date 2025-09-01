import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

export const geracaoECD: ProcessoDetalhado = {
  id: 'CONT-09.8',
  nome: 'Geração e Entrega da Escrituração Contábil Digital – ECD',
  descricao: 'Processo de geração, validação e transmissão da ECD para a Receita Federal',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  entrada: 'Lançamentos contábeis encerrados no DOMÍNIO; plano de contas referencial da Receita Federal; livros Diário e Razão; saldos patrimoniais e de resultado',
  saida: 'Arquivo ECD gerado, validado, assinado e transmitido com sucesso. Recibo salvo e documentação organizada para fiscalização e auditoria',
  sistemas_utilizados: ['DOMÍNIO', 'PVA SPED ECD (Receita Federal)', 'Certificado digital', 'Drive Corporativo', 'Pastas contábeis'],
  subprocessos: [
    {
      id: '9.8.1',
      nome: 'Preparação dos Dados para ECD',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO'],
      tarefas: [
        {
          id: '9.8.1.1',
          nome: 'Validar encerramento contábil do período',
          passos: [
            'Acesse DOMÍNIO > Contábil > Encerramento > Trava de Lançamentos',
            'Selecione a empresa e o período (ano vigente)',
            'Marque a opção "Bloquear lançamentos retroativos" e clique em Salvar'
          ]
        },
        {
          id: '9.8.1.2',
          nome: 'Gerar livros contábeis (Razão e Diário)',
          passos: [
            'Acesse DOMÍNIO > Relatórios > Livros Contábeis > Diário Geral e Razão Analítico',
            'Escolha o período de competência e a empresa',
            'Clique em "Gerar" e salve os arquivos em PDF'
          ]
        },
        {
          id: '9.8.1.3',
          nome: 'Validar integridade dos lançamentos',
          passos: [
            'Acesse DOMÍNIO > Contábil > Auditoria > Validador de Estrutura',
            'Execute a rotina de verificação de histórico, centro de custo, duplicidade de lançamentos e contas inválidas',
            'Corrija os apontamentos no módulo de Lançamentos, se necessário'
          ]
        }
      ]
    },
    {
      id: '9.8.2',
      nome: 'Geração do Arquivo .txt para SPED ECD',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO', 'PVA SPED ECD'],
      tarefas: [
        {
          id: '9.8.2.1',
          nome: 'Gerar o arquivo digital da ECD',
          passos: [
            'Acesse DOMÍNIO > SPED > Escrituração Contábil Digital > Nova Escrituração',
            'Selecione a empresa, o ano e o tipo de escrituração (Regular)',
            'Vincule o plano de contas interno ao plano referencial da Receita Federal',
            'Clique em "Gerar Arquivo .txt" e salve localmente'
          ]
        },
        {
          id: '9.8.2.2',
          nome: 'Validar o arquivo no PVA SPED ECD',
          passos: [
            'Acesse o programa validador da Receita Federal (PVA ECD)',
            'Importe o arquivo gerado (.txt)',
            'Analise os erros e advertências. Corrija-os no DOMÍNIO, gere novo arquivo e revalide'
          ]
        }
      ]
    },
    {
      id: '9.8.3',
      nome: 'Assinatura e Transmissão da ECD',
      nivel: 'Operacional',
      ferramentas: ['PVA SPED ECD', 'Certificado digital'],
      tarefas: [
        {
          id: '9.8.3.1',
          nome: 'Assinar o arquivo digitalmente',
          passos: [
            'No PVA SPED ECD, clique em "Assinar Escrituração"',
            'Utilize certificado digital e-CNPJ (ICP-Brasil) vinculado à empresa',
            'Salve a versão assinada com extensão .ass ou .ecd'
          ]
        },
        {
          id: '9.8.3.2',
          nome: 'Transmitir o arquivo à Receita Federal',
          passos: [
            'No PVA, clique em "Transmitir Escrituração"',
            'Aguarde retorno com o número do recibo de entrega e protocolo'
          ]
        },
        {
          id: '9.8.3.3',
          nome: 'Arquivar os documentos da ECD',
          passos: [
            'Salve os arquivos: .txt original, versão assinada, recibo de entrega e relatório de validação',
            'Armazene em: G:\\Departamento Contábil\\ECD\\Ano_Competência\\Empresa'
          ]
        }
      ]
    }
  ]
};