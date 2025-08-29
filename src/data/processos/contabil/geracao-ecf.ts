import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

export const geracaoECF: ProcessoDetalhado = {
  id: 'CONT-09.9',
  nome: 'Geração e Entrega da Escrituração Contábil Fiscal – ECF',
  descricao: 'Processo de geração e transmissão da ECF com apuração do IRPJ e CSLL',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'border-l-orange-500',
  entrada: 'ECD entregue, plano de contas referencial vinculado, dados contábeis do DOMÍNIO, informações de apuração do IRPJ e CSLL, informações de contas referenciais, e histórico de prejuízos fiscais e compensações',
  saida: 'ECF gerada, validada, assinada e transmitida à Receita Federal com recibo arquivado. Escrituração pronta para auditoria fiscal',
  sistemas_utilizados: ['DOMÍNIO', 'PVA ECF (Receita Federal)', 'Planilhas de controle de IRPJ/CSLL', 'Certificado digital', 'Drive Corporativo', 'Pastas contábeis'],
  subprocessos: [
    {
      id: '9.9.1',
      nome: 'Configuração Inicial da Escrituração',
      nivel: 'Operacional',
      ferramentas: ['PVA ECF', 'DOMÍNIO'],
      tarefas: [
        {
          id: '9.9.1.1',
          nome: 'Importar a ECD no PVA ECF',
          passos: [
            'Acesse o programa PVA ECF',
            'Clique em "Nova Escrituração" e selecione o ano-calendário',
            'Importe o arquivo da ECD entregue previamente (extensão .ecd)',
            'Confirme que todos os dados contábeis foram carregados corretamente (blocos C e J)'
          ]
        },
        {
          id: '9.9.1.2',
          nome: 'Parametrizar a empresa no DOMÍNIO',
          passos: [
            'Acesse DOMÍNIO > Fiscal > Parâmetros > Escrituração ECF',
            'Informe: Regime de Apuração do IRPJ (Lucro Presumido ou Real), periodicidade (trimestral ou anual), e código CNAE',
            'Valide se os campos obrigatórios estão preenchidos corretamente'
          ]
        }
      ]
    },
    {
      id: '9.9.2',
      nome: 'Apuração do IRPJ e CSLL',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO', 'PVA ECF'],
      tarefas: [
        {
          id: '9.9.2.1',
          nome: 'Lançamento de ajustes fiscais',
          passos: [
            'Acesse DOMÍNIO > Fiscal > Lançamentos > Apuração de Resultados',
            'Registre: adições, exclusões, compensações, incentivo fiscal (Lei do Bem, Sudene, etc.), conforme documentos internos',
            'Utilize contas de ajuste para vinculação no Bloco M da ECF'
          ]
        },
        {
          id: '9.9.2.2',
          nome: 'Preencher informações de prejuízos fiscais',
          passos: [
            'Acesse PVA ECF > Bloco N > Registro N500',
            'Informe os valores de prejuízo fiscal a compensar e saldo de compensações anteriores',
            'Baseie-se em planilha controle de prejuízos ou relatório do DOMÍNIO'
          ]
        }
      ]
    },
    {
      id: '9.9.3',
      nome: 'Validação e Transmissão',
      nivel: 'Operacional',
      ferramentas: ['PVA ECF', 'Certificado digital'],
      tarefas: [
        {
          id: '9.9.3.1',
          nome: 'Validar estrutura e consistência dos dados',
          passos: [
            'No PVA ECF, clique em "Verificar Pendências"',
            'Corrija erros de estrutura e advertências (ex: divergência entre Bloco C e Bloco J)',
            'Caso necessário, ajuste no DOMÍNIO e regenere o arquivo'
          ]
        },
        {
          id: '9.9.3.2',
          nome: 'Assinar a escrituração',
          passos: [
            'No PVA ECF, clique em "Assinar Escrituração"',
            'Utilize o certificado digital da empresa (e-CNPJ)',
            'Verifique se todos os blocos foram assinados corretamente'
          ]
        },
        {
          id: '9.9.3.3',
          nome: 'Transmitir a ECF para Receita Federal',
          passos: [
            'Clique em "Transmitir Escrituração" dentro do PVA ECF',
            'Aguarde confirmação com número de recibo e comprovante de entrega'
          ]
        },
        {
          id: '9.9.3.4',
          nome: 'Arquivamento de documentos',
          passos: [
            'Salve os arquivos: .txt da ECF, relatório de pendências, recibo de entrega',
            'Armazene em: G:\\Departamento Contábil\\ECF\\Ano_Competência\\Empresa'
          ]
        }
      ]
    }
  ]
};