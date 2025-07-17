import { ProcessoDetalhado } from '@/types/processo';
import { FileText, Upload, Calculator, Send, File, Receipt, Database, Scale, CreditCard, Building2, MapPin, Monitor, Zap } from 'lucide-react';

export const processosFiscal: ProcessoDetalhado[] = [
  {
    id: '03.1',
    nome: 'Importação das Notas Fiscais no Sistema Fiscal (DOMINIO)',
    descricao: 'Processo de importação de notas fiscais de fornecedores, emitidas pelas lojas e transferências entre lojas no sistema DOMINIO.',
    nivel: 'Operacional',
    icon: Upload,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Notas fiscais emitidas pelos fornecedores, pelas lojas (diversas naturezas) e entre as lojas, extraídas do sistema MEGA.',
    saida: 'Notas importadas no sistema DOMINIO, separadas por tipo de operação, prontas para conferência e escrituração fiscal.',
    tempo_execucao: '2-3 horas',
    frequencia: 'Diária',
    sistemas_utilizados: ['MEGA ERP', 'DOMINIO', 'NF STOCK'],
    subprocessos: [
      {
        id: '03.1.1',
        nome: 'Importação das Notas Fiscais de Entrada – Fornecedores',
        nivel: 'Operacional',
        ferramentas: ['MEGA ERP', 'DOMINIO'],
        tarefas: [
          {
            id: '03.1.1.1',
            nome: 'Gerar arquivo SPED',
            passos: ['Acessa o sistema MEGA e gera o arquivo SPED com as movimentações da loja']
          },
          {
            id: '03.1.1.2',
            nome: 'Importar SPED no DOMINIO',
            passos: ['No DOMINIO, realiza a importação do SPED gerado, que contém exclusivamente as notas de entrada emitidas pelos fornecedores (ex: CFOP 1102, 2102, 1403, 2403)']
          },
          {
            id: '03.1.1.3',
            nome: 'Validar importação',
            passos: ['Valida se todas as notas de entrada foram importadas corretamente, analisando possíveis mensagens de erro ou rejeição durante a importação']
          }
        ]
      },
      {
        id: '03.1.2',
        nome: 'Importação das Notas Fiscais Eletrônicas Emitidas pela Loja',
        nivel: 'Operacional',
        ferramentas: ['MEGA ERP', 'DOMINIO'],
        tarefas: [
          {
            id: '03.1.2.1',
            nome: 'Acessar módulo de Notas Fiscais',
            passos: ['Acessa o módulo de Notas Fiscais no sistema MEGA']
          },
          {
            id: '03.1.2.2',
            nome: 'Filtrar NFe',
            passos: ['Aplica o filtro por modelo "NFe" para listar todas as notas fiscais eletrônicas emitidas pela loja, incluindo diferentes naturezas de operação (ex: CFOP 5102, 1202, 1949, entre outros)']
          },
          {
            id: '03.1.2.3',
            nome: 'Download XMLs NFe',
            passos: ['Seleciona todas as notas listadas e realiza o download dos arquivos XML em um único arquivo .ZIP']
          },
          {
            id: '03.1.2.4',
            nome: 'Download XMLs NFCe',
            passos: ['Altera o filtro para modelo "NFCe", repetindo o processo de seleção e download dos XMLs emitidos']
          },
          {
            id: '03.1.2.5',
            nome: 'Importar no DOMINIO',
            passos: ['No sistema DOMINIO, realiza a importação dos arquivos ZIP contendo as NFes e NFCes']
          },
          {
            id: '03.1.2.6',
            nome: 'Verificar importação',
            passos: ['Verifica se todos os arquivos foram importados corretamente, conferindo a quantidade de notas e possíveis rejeições']
          }
        ]
      },
      {
        id: '03.1.3',
        nome: 'Importação das Notas de Transferência entre Lojas',
        nivel: 'Operacional',
        ferramentas: ['MEGA ERP', 'DOMINIO'],
        tarefas: [
          {
            id: '03.1.3.1',
            nome: 'Acessar aba Notas Fiscais',
            passos: ['No sistema MEGA, acessa a aba de Notas Fiscais']
          },
          {
            id: '03.1.3.2',
            nome: 'Configurar filtros',
            passos: ['Define o filtro "Modelo: NFe" e Loja: TODOS']
          },
          {
            id: '03.1.3.3',
            nome: 'Filtrar por CNPJ destino',
            passos: ['No campo CNPJ Cliente, informa o CNPJ da loja de destino']
          },
          {
            id: '03.1.3.4',
            nome: 'Listar transferências',
            passos: ['O sistema MEGA lista todas as notas de transferência emitidas para essa loja']
          },
          {
            id: '03.1.3.5',
            nome: 'Download XMLs',
            passos: ['Seleciona todas as notas listadas e realiza o download dos arquivos XML em um arquivo .ZIP']
          },
          {
            id: '03.1.3.6',
            nome: 'Importar transferências',
            passos: ['No sistema DOMINIO, importa os XMLs de transferência para compor as movimentações da loja destino']
          }
        ]
      },
      {
        id: '03.1.4',
        nome: 'Importação Manual de Notas Fiscais de Uso e Consumo',
        nivel: 'Operacional',
        ferramentas: ['NF STOCK', 'DOMINIO'],
        tarefas: [
          {
            id: '03.1.4.1',
            nome: 'Verificar NF Stock',
            passos: ['Acesse o software NF Stock para verificar se algum tipo de nota fiscal, como uso e consumo, outras entradas e outras naturezas que não são de vendas, foi emitida para a empresa']
          },
          {
            id: '03.1.4.2',
            nome: 'Importação manual',
            passos: ['Se for identificado que essas notas não foram registradas no MEGA (como não sendo de venda, mas de consumo ou outras operações), realize a importação manual delas no DOMINIO']
          },
          {
            id: '03.1.4.3',
            nome: 'Adequar dados',
            passos: ['Adeque os dados importados para que as notas estejam corretamente classificadas conforme CFOP e tributos específicos']
          },
          {
            id: '03.1.4.4',
            nome: 'Verificar classificação',
            passos: ['Verifique se as notas de consumo ou outras entradas foram adequadamente importadas no sistema DOMINIO e se os tributos e informações fiscais estão corretamente configurados']
          }
        ]
      }
    ]
  },
  {
    id: '03.2',
    nome: 'Escrituração Fiscal de Notas de Entrada',
    descricao: 'Processo de conferência, ajuste e escrituração das notas fiscais de fornecedores no sistema DOMINIO.',
    nivel: 'Operacional',
    icon: FileText,
    cor: '#10B981',
    entrada: 'Notas fiscais de fornecedores lançadas no sistema MEGA pelas lojas.',
    saida: 'Notas conferidas, ajustadas (quando necessário) e corretamente escrituradas no sistema DOMINIO, prontas para geração de obrigações acessórias.',
    tempo_execucao: '3-4 horas',
    frequencia: 'Diária',
    sistemas_utilizados: ['MEGA ERP', 'DOMINIO', 'NF STOCK'],
    subprocessos: [
      {
        id: '03.2.1',
        nome: 'Geração e Importação do Arquivo SPED',
        nivel: 'Operacional',
        ferramentas: ['MEGA ERP', 'DOMINIO'],
        tarefas: [
          {
            id: '03.2.1.1',
            nome: 'Gerar SPED',
            passos: ['O setor fiscal acessa o sistema MEGA para gerar o arquivo SPED contendo as operações realizadas pelas lojas']
          },
          {
            id: '03.2.1.2',
            nome: 'Importar SPED',
            passos: ['Importa o arquivo SPED no sistema DOMINIO, garantindo que os dados de entrada estejam disponíveis para escrituração']
          }
        ]
      },
      {
        id: '03.2.2',
        nome: 'Conferência e Escrituração das Notas Fiscais de Entrada',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO', 'NF STOCK', 'MEGA ERP'],
        tarefas: [
          {
            id: '03.2.2.1',
            nome: 'Acessar relatório entradas',
            passos: ['Acessa o relatório de entradas no DOMINIO para identificar as notas importadas via SPED']
          },
          {
            id: '03.2.2.2',
            nome: 'Consultar NF STOCK',
            passos: ['Utiliza o software NF STOCK para consultar os dados completos da nota fiscal emitida pelo fornecedor']
          },
          {
            id: '03.2.2.3',
            nome: 'Comparar dados',
            passos: ['Compara os dados importados (valor, quantidade de itens, CFOP, CST, base de cálculo, alíquotas, etc.) com os dados reais da nota']
          },
          {
            id: '03.2.2.4',
            nome: 'Tratar divergências',
            passos: [
              'Se for identificada divergência:',
              'Caso a divergência seja por limitação técnica do sistema MEGA (como arredondamentos ou falha na leitura da nota), o fiscal ajusta os dados manualmente no sistema DOMINIO',
              'Caso a divergência seja por erro de lançamento pela loja, solicita-se o cancelamento da nota no MEGA, e a loja abre um chamado com o financeiro para permitir a reentrada da nota corrigida'
            ]
          },
          {
            id: '03.2.2.5',
            nome: 'Finalizar escrituração',
            passos: ['Com as informações conferidas e ajustadas, a nota é considerada devidamente escriturada dentro do DOMINIO']
          }
        ]
      }
    ]
  },
  {
    id: '03.3',
    nome: 'Conferência da Apuração do ICMS',
    descricao: 'Processo de conferência e validação da apuração do ICMS, com geração de guias quando necessário.',
    nivel: 'Tático',
    icon: Calculator,
    cor: '#F59E0B',
    entrada: 'Notas fiscais de entrada e saída devidamente escrituradas no sistema DOMINIO.',
    saida: 'Apuração do ICMS conferida e validada. Caso haja saldo a pagar, guia gerada para pagamento pelo financeiro. Caso haja saldo credor, o valor será acumulado para períodos futuros.',
    tempo_execucao: '2-3 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['DOMINIO', 'MEGA ERP'],
    subprocessos: [
      {
        id: '03.3.1',
        nome: 'Geração da Apuração no DOMINIO',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO'],
        tarefas: [
          {
            id: '03.3.1.1',
            nome: 'Acessar apuração ICMS',
            passos: ['Após a escrituração de todas as notas fiscais (entradas, saídas e transferências), o fiscal acessa o sistema DOMINIO para realizar a apuração do ICMS do período']
          },
          {
            id: '03.3.1.2',
            nome: 'Calcular débitos e créditos',
            passos: ['O sistema calcula automaticamente os débitos (vendas) e créditos (compras) do ICMS com base nas informações escrituradas']
          }
        ]
      },
      {
        id: '03.3.2',
        nome: 'Conferência dos Valores Apurados',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO', 'MEGA ERP'],
        tarefas: [
          {
            id: '03.3.2.1',
            nome: 'Comparar valores',
            passos: ['Compara os valores apurados no DOMINIO com os valores de movimentação do MEGA']
          },
          {
            id: '03.3.2.2',
            nome: 'Verificar débitos e créditos',
            passos: ['Verifica se os valores de débito e crédito do ICMS conferem com as operações realizadas no mês']
          },
          {
            id: '03.3.2.3',
            nome: 'Cálculos de apoio',
            passos: ['Realiza cálculos manuais ou através de planilhas de apoio, se necessário, para garantir a exatidão da apuração']
          }
        ]
      },
      {
        id: '03.3.3',
        nome: 'Geração de Guia (quando necessário)',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO'],
        tarefas: [
          {
            id: '03.3.3.1',
            nome: 'Verificar saldo',
            passos: ['Se o valor do débito de ICMS for maior que o crédito, o sistema indica saldo a pagar']
          },
          {
            id: '03.3.3.2',
            nome: 'Gerar guia pagamento',
            passos: ['O fiscal gera a guia de ICMS correspondente para que o setor financeiro realize o pagamento']
          },
          {
            id: '03.3.3.3',
            nome: 'Registrar saldo credor',
            passos: ['Caso o crédito seja maior, o sistema indica saldo credor, que será utilizado em apurações futuras']
          }
        ]
      }
    ]
  },
  {
    id: '03.4',
    nome: 'Geração e Entrega do Arquivo SPED Fiscal (EFD ICMS/IPI)',
    descricao: 'Processo de geração, validação e transmissão do arquivo SPED Fiscal à Receita Federal.',
    nivel: 'Operacional',
    icon: Send,
    cor: '#EF4444',
    entrada: 'ICMS devidamente apurado e validado no sistema DOMINIO.',
    saida: 'Arquivo SPED Fiscal (EFD ICMS/IPI) gerado, validado e transmitido à Receita Federal.',
    tempo_execucao: '1-2 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['DOMINIO', 'Programa Validador EFD ICMS IPI'],
    subprocessos: [
      {
        id: '03.4.1',
        nome: 'Geração do Arquivo SPED no DOMINIO',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO'],
        tarefas: [
          {
            id: '03.4.1.1',
            nome: 'Gerar arquivo SPED',
            passos: ['Após a finalização da apuração do ICMS, o fiscal acessa o sistema DOMINIO e gera o arquivo digital SPED contendo toda a escrituração fiscal do período (entradas, saídas, apuração, créditos e débitos)']
          },
          {
            id: '03.4.1.2',
            nome: 'Verificar leiaute',
            passos: ['O sistema DOMINIO gera o arquivo conforme leiaute exigido pelo projeto SPED Fiscal']
          }
        ]
      },
      {
        id: '03.4.2',
        nome: 'Validação e Entrega do Arquivo SPED',
        nivel: 'Operacional',
        ferramentas: ['Programa Validador EFD ICMS IPI'],
        tarefas: [
          {
            id: '03.4.2.1',
            nome: 'Acessar validador',
            passos: ['Acessa o validador oficial EFD ICMS IPI, disponibilizado no site da Receita Federal'],
            urls: ['https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/sped-sistema-publico-de-escrituracao-digital/escrituracao-fiscal-digital-efd/escrituracao-fiscal-digital-efd']
          },
          {
            id: '03.4.2.2',
            nome: 'Importar arquivo',
            passos: ['Importa o arquivo SPED gerado no DOMINIO para o programa validador']
          },
          {
            id: '03.4.2.3',
            nome: 'Validar e corrigir',
            passos: ['Valida a integridade do arquivo e corrige eventuais erros apontados pelo sistema']
          },
          {
            id: '03.4.2.4',
            nome: 'Transmitir arquivo',
            passos: ['Após validado, o arquivo é transmitido à Receita Federal por meio do próprio aplicativo EFD ICMS IPI']
          },
          {
            id: '03.4.2.5',
            nome: 'Salvar recibo',
            passos: ['O recibo de entrega é salvo para controle interno']
          }
        ]
      }
    ]
  },
  {
    id: '03.5',
    nome: 'Entrega das Obrigações Estaduais',
    descricao: 'Processo de geração e envio das obrigações estaduais (GIA/SP, GIA/RS, DAPI/MG) às respectivas Secretarias da Fazenda.',
    nivel: 'Operacional',
    icon: Building2,
    cor: '#8B5CF6',
    entrada: 'Apuração do ICMS finalizada no sistema DOMINIO, contendo informações completas de entradas, saídas, créditos e débitos do período.',
    saida: 'Arquivo gerado, validado e transmitido com sucesso às Secretarias da Fazenda Estaduais (SP, RS e MG), com recibo de entrega salvo para controle interno.',
    tempo_execucao: '2-3 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['DOMINIO', 'Portal Sefaz/SP', 'Portal Sefaz/RS', 'Portal Sefaz/MG'],
    subprocessos: [
      {
        id: '03.5.1',
        nome: 'Geração e Entrega da GIA/SP',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO', 'Portal Sefaz/SP'],
        tarefas: [
          {
            id: '03.5.1.1',
            nome: 'Gerar arquivo GIA/SP',
            passos: ['Acessar o sistema DOMINIO e gerar o arquivo digital GIA/SP contendo toda a escrituração fiscal do período (entradas, saídas, apuração, créditos e débitos)']
          },
          {
            id: '03.5.1.2',
            nome: 'Acessar validador',
            passos: ['Acessar o validador oficial GIA/SP, disponibilizado no site da Secretaria da Fazenda do Estado de São Paulo'],
            urls: ['https://portal.fazenda.sp.gov.br/servicos/gia/Paginas/Downloads.aspx']
          },
          {
            id: '03.5.1.3',
            nome: 'Importar arquivo',
            passos: ['Importar o arquivo GIA gerado no DOMINIO para o programa validador']
          },
          {
            id: '03.5.1.4',
            nome: 'Validar arquivo',
            passos: ['Validar a integridade do arquivo e corrigir eventuais erros apontados pelo sistema']
          },
          {
            id: '03.5.1.5',
            nome: 'Transmitir GIA/SP',
            passos: ['Após validado, transmitir o arquivo à Secretaria da Fazenda do Estado de São Paulo por meio do próprio aplicativo validador']
          },
          {
            id: '03.5.1.6',
            nome: 'Salvar recibo SP',
            passos: ['Salvar o recibo de entrega para controle interno']
          }
        ]
      },
      {
        id: '03.5.2',
        nome: 'Geração e Entrega da GIA/RS',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO', 'Portal Sefaz/RS'],
        tarefas: [
          {
            id: '03.5.2.1',
            nome: 'Gerar arquivo GIA/RS',
            passos: ['Gerar o arquivo GIA/RS no sistema DOMINIO com base na apuração do mês']
          },
          {
            id: '03.5.2.2',
            nome: 'Acessar portal RS',
            passos: ['Acessar o portal oficial do serviço da GIA/RS no site do governo estadual'],
            urls: ['https://www.rs.gov.br/carta-de-servicos/servicos?servico=1750']
          },
          {
            id: '03.5.2.3',
            nome: 'Importar e validar',
            passos: ['Importar e validar o arquivo gerado no sistema específico da GIA/RS (caso aplicável)']
          },
          {
            id: '03.5.2.4',
            nome: 'Transmitir GIA/RS',
            passos: ['Transmitir o arquivo à Sefaz/RS conforme orientações do sistema']
          },
          {
            id: '03.5.2.5',
            nome: 'Salvar recibo RS',
            passos: ['Salvar o recibo de entrega para controle interno']
          }
        ]
      },
      {
        id: '03.5.3',
        nome: 'Geração e Entrega da DAPI/MG',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO', 'Portal Sefaz/MG'],
        tarefas: [
          {
            id: '03.5.3.1',
            nome: 'Gerar arquivo DAPI/MG',
            passos: ['Gerar o arquivo da DAPI/MG no sistema DOMINIO com base na escrituração fiscal do período']
          },
          {
            id: '03.5.3.2',
            nome: 'Acessar portal MG',
            passos: ['Acessar o portal oficial da DAPI/MG'],
            urls: ['https://www.fazenda.mg.gov.br/empresas/declaracoes_demonstrativos/dapi/']
          },
          {
            id: '03.5.3.3',
            nome: 'Importar DAPI/MG',
            passos: ['Importar o arquivo gerado no sistema da DAPI/MG']
          },
          {
            id: '03.5.3.4',
            nome: 'Validar DAPI/MG',
            passos: ['Validar o arquivo e corrigir possíveis inconsistências apontadas']
          },
          {
            id: '03.5.3.5',
            nome: 'Transmitir DAPI/MG',
            passos: ['Transmitir a DAPI à Sefaz/MG conforme instruções do portal']
          },
          {
            id: '03.5.3.6',
            nome: 'Salvar recibo MG',
            passos: ['Salvar o recibo de envio para controle interno']
          }
        ]
      }
    ]
  },
  {
    id: '03.6',
    nome: 'Simples Nacional',
    descricao: 'Processo de apuração e geração das guias de pagamento do Simples Nacional através do portal e-CAC.',
    nivel: 'Operacional',
    icon: Receipt,
    cor: '#10B981',
    entrada: 'Faturamento mensal apurado após o fechamento fiscal das lojas. Planilhas de controle de fechamento fiscal e cálculos baseados na Receita Federal.',
    saida: 'Guias de pagamento (DAS) geradas corretamente no portal do Simples Nacional e encaminhadas ao Departamento Financeiro para quitação dos tributos.',
    tempo_execucao: '1-2 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['Portal e-CAC', 'Planilhas de controle'],
    subprocessos: [
      {
        id: '03.6.1',
        nome: 'Apuração e Geração das Guias do Simples Nacional',
        nivel: 'Operacional',
        ferramentas: ['Portal e-CAC', 'Planilhas de controle'],
        tarefas: [
          {
            id: '03.6.1.1',
            nome: 'Acessar e-CAC',
            passos: ['Acessar o site da Receita Federal do Brasil através do portal e-CAC'],
            urls: ['https://cav.receita.fazenda.gov.br/autenticacao/login']
          },
          {
            id: '03.6.1.2',
            nome: 'Informar faturamento',
            passos: ['Informar os valores de faturamento apurados no mês no módulo de Declaração do Simples Nacional']
          },
          {
            id: '03.6.1.3',
            nome: 'Gerar DAS',
            passos: ['O sistema realiza automaticamente o cálculo do imposto devido e gera as guias de pagamento (DAS – Documento de Arrecadação do Simples Nacional)']
          },
          {
            id: '03.6.1.4',
            nome: 'Conferir valores',
            passos: ['Conferir os valores gerados com base nas planilhas de controle de fechamento fiscal e nas planilhas de cálculo da Receita Federal']
          },
          {
            id: '03.6.1.5',
            nome: 'Encaminhar ao financeiro',
            passos: ['Encaminhar as guias geradas ao Departamento Financeiro para pagamento']
          }
        ]
      }
    ]
  },
  {
    id: '03.7',
    nome: 'Entrega da DESTDA',
    descricao: 'Processo de geração e envio da Declaração de Substituição Tributária, Diferencial de Alíquota e Antecipação para empresas do Simples Nacional.',
    nivel: 'Operacional',
    icon: File,
    cor: '#F59E0B',
    entrada: 'Encerramento da apuração do ICMS do mês, com as informações completas sobre operações sujeitas a Substituição Tributária (ST), Diferencial de Alíquota (DIFAL) e Antecipação Tributária.',
    saida: 'Arquivo da DESTDA gerado, validado e transmitido com sucesso para a Sefaz/SP, com recibo de entrega salvo, e eventuais débitos encaminhados ao setor financeiro para pagamento.',
    tempo_execucao: '1-2 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['DOMINIO', 'Programa validador DESTDA'],
    subprocessos: [
      {
        id: '03.7.1',
        nome: 'Geração da Declaração',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO'],
        tarefas: [
          {
            id: '03.7.1.1',
            nome: 'Gerar arquivo DESTDA',
            passos: ['Acessar o sistema DOMINIO e, dentro do módulo de apuração fiscal, gerar o arquivo da DESTDA com base nos dados apurados do mês']
          },
          {
            id: '03.7.1.2',
            nome: 'Verificar dados',
            passos: ['Selecionar corretamente o período de apuração, o CNPJ da empresa e verificar se todas as informações relativas a ST, DIFAL e antecipação estão devidamente preenchidas']
          }
        ]
      },
      {
        id: '03.7.2',
        nome: 'Validação e Envio da DESTDA',
        nivel: 'Operacional',
        ferramentas: ['Programa validador DESTDA'],
        tarefas: [
          {
            id: '03.7.2.1',
            nome: 'Acessar validador',
            passos: ['Acessar o programa validador da DESTDA disponibilizado pela Sefaz'],
            urls: ['http://www.sedif.pe.gov.br/']
          },
          {
            id: '03.7.2.2',
            nome: 'Importar arquivo',
            passos: ['Importar o arquivo gerado no DOMINIO para o validador']
          },
          {
            id: '03.7.2.3',
            nome: 'Conferir valores',
            passos: ['Realizar a conferência dos valores relacionados à substituição tributária, diferencial de alíquota e antecipação tributária. Verificar divergências e, se necessário, retornar ao sistema DOMINIO para correções']
          },
          {
            id: '03.7.2.4',
            nome: 'Enviar declaração',
            passos: ['Após validação e conferência, realizar o envio da declaração à base da Sefaz/SP']
          },
          {
            id: '03.7.2.5',
            nome: 'Salvar recibo',
            passos: ['Salvar o recibo de entrega para controle interno e encaminhar ao setor responsável caso haja débitos a serem quitados']
          }
        ]
      }
    ]
  },
  {
    id: '03.8',
    nome: 'EFD Reinf – SPED Retenções',
    descricao: 'Processo de identificação, registro e envio das informações de retenções federais através da EFD Reinf.',
    nivel: 'Operacional',
    icon: Database,
    cor: '#8B5CF6',
    entrada: 'Análise de todas as notas fiscais de serviços recebidas pelas empresas do Grupo Oscar, identificando aquelas que possuem retenções federais (PIS, COFINS, Imposto de Renda PJ e PF, CSLL).',
    saida: 'Arquivo gerado com as informações de retenções federais (PIS, COFINS, Imposto de Renda PJ e PF, CSLL) e transmitido via Web Service à Receita Federal, com a conferência dos saldos devedores dentro da EFD Reinf e dados para a DCTF Web.',
    tempo_execucao: '2-3 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['DOMINIO', 'Web Service Receita Federal'],
    subprocessos: [
      {
        id: '03.8.1',
        nome: 'Identificação e Registro das Retenções',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO'],
        tarefas: [
          {
            id: '03.8.1.1',
            nome: 'Analisar notas de serviços',
            passos: ['Analisar todas as notas fiscais de serviços recebidas pelas empresas do Grupo Oscar']
          },
          {
            id: '03.8.1.2',
            nome: 'Identificar retenções',
            passos: ['Identificar as notas que possuem retenções federais, como PIS, COFINS, Imposto de Renda Pessoa Jurídica (PJ) e Pessoa Física (PF), e CSLL']
          },
          {
            id: '03.8.1.3',
            nome: 'Registrar retenções',
            passos: ['Registrar manualmente as informações de retenções no sistema DOMINIO, preenchendo os campos necessários para cada retenção identificada']
          }
        ]
      },
      {
        id: '03.8.2',
        nome: 'Geração e Envio do Arquivo para a Receita Federal',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO', 'Web Service Receita Federal'],
        tarefas: [
          {
            id: '03.8.2.1',
            nome: 'Gerar arquivo EFD Reinf',
            passos: ['Após o registro das retenções no sistema DOMINIO, gerar o arquivo da EFD Reinf']
          },
          {
            id: '03.8.2.2',
            nome: 'Transmitir via Web Service',
            passos: ['Transmitir o arquivo gerado à Receita Federal via Web Service, garantindo que todos os dados sejam corretamente enviados para a base de dados da Receita Federal']
          }
        ]
      },
      {
        id: '03.8.3',
        nome: 'Conferência de Saldos e Relacionamento com DCTF Web',
        nivel: 'Operacional',
        ferramentas: ['Portal Receita Federal'],
        tarefas: [
          {
            id: '03.8.3.1',
            nome: 'Conferir saldos EFD Reinf',
            passos: ['Acessar o site da Receita Federal e conferir os saldos devedores dentro da EFD Reinf']
          },
          {
            id: '03.8.3.2',
            nome: 'Verificar consistência DCTF',
            passos: ['Verificar se as informações da EFD Reinf são consistentes com as informações que serão utilizadas para o preenchimento da DCTF Web']
          },
          {
            id: '03.8.3.3',
            nome: 'Corrigir inconsistências',
            passos: ['Caso existam inconsistências, realizar a correção no sistema DOMINIO e reenviar o arquivo conforme necessário']
          }
        ]
      }
    ]
  },
  {
    id: '03.9',
    nome: 'Apuração de PIS e COFINS',
    descricao: 'Processo de apuração de PIS e COFINS baseado na apuração de ICMS e geração do SPED Contribuições.',
    nivel: 'Tático',
    icon: Scale,
    cor: '#10B981',
    entrada: 'Apuração do ICMS validada. Informações fiscais separadas por CFOP. Planilha interna de PIS e COFINS com base na apuração de ICMS.',
    saida: 'Apuração correta de PIS e COFINS validada. Geração e envio do SPED Contribuições à Receita Federal.',
    tempo_execucao: '3-4 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['DOMINIO', 'Planilha PIS/COFINS', 'Validador SPED Contribuições'],
    subprocessos: [
      {
        id: '03.9.1',
        nome: 'Planejamento e Organização dos Dados',
        nivel: 'Operacional',
        ferramentas: ['Planilha PIS/COFINS'],
        tarefas: [
          {
            id: '03.9.1.1',
            nome: 'Utilizar apuração ICMS',
            passos: ['A equipe fiscal utiliza a apuração de ICMS separada por CFOP como base para o preenchimento da planilha de PIS e COFINS']
          },
          {
            id: '03.9.1.2',
            nome: 'Validar planilha',
            passos: ['A planilha serve para garantir o valor exato da obrigação e guiar as etapas seguintes do processo de apuração']
          }
        ]
      },
      {
        id: '03.9.2',
        nome: 'Atualização da Tributação dos Itens',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO'],
        tarefas: [
          {
            id: '03.9.2.1',
            nome: 'Atualizar cadastro itens',
            passos: ['O cadastro dos itens é atualizado no sistema DOMINIO com as informações corretas de PIS e COFINS']
          },
          {
            id: '03.9.2.2',
            nome: 'Reprocessar movimentações',
            passos: ['Após a atualização, é executado o reprocessamento das movimentações fiscais (entradas, saídas e devoluções), com base na nova tributação. Esse processo é realizado individualmente para cada loja (CNPJ) do grupo']
          }
        ]
      },
      {
        id: '03.9.3',
        nome: 'Consolidação e Geração do Arquivo SPED Contribuições',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO', 'Validador SPED Contribuições'],
        tarefas: [
          {
            id: '03.9.3.1',
            nome: 'Verificar consistência',
            passos: ['Após a finalização do reprocessamento em todas as lojas, a equipe verifica se os valores calculados no sistema DOMINIO estão em conformidade com a planilha de controle']
          },
          {
            id: '03.9.3.2',
            nome: 'Gerar SPED Contribuições',
            passos: ['Confirmada a consistência, é gerado o arquivo SPED Contribuições (EFD Contribuições)']
          },
          {
            id: '03.9.3.3',
            nome: 'Validar arquivo',
            passos: ['O arquivo é importado no validador da Receita Federal']
          },
          {
            id: '03.9.3.4',
            nome: 'Transmitir arquivo',
            passos: ['Após validação sem erros, o arquivo é transmitido à Receita Federal']
          }
        ]
      }
    ]
  },
  {
    id: '03.10',
    nome: 'MIT – Módulo de Inclusão de Tributos Federais',
    descricao: 'Processo de cálculo, geração e envio dos tributos federais (PIS, COFINS, CSLL e IRPJ) para integração com a DCTF Web.',
    nivel: 'Operacional',
    icon: CreditCard,
    cor: '#F59E0B',
    entrada: 'Cálculo e conferência dos impostos federais: PIS, COFINS, CSLL e IRPJ. Informações detalhadas sobre os tributos federais apurados.',
    saida: 'Arquivo gerado contendo os valores dos tributos federais, transmitido à Receita Federal. Débito gerado e registrado na DCTF Web.',
    tempo_execucao: '1-2 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['DOMINIO', 'DCTF Web'],
    subprocessos: [
      {
        id: '03.10.1',
        nome: 'Cálculo e Conferência dos Tributos Federais',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO'],
        tarefas: [
          {
            id: '03.10.1.1',
            nome: 'Calcular tributos federais',
            passos: ['Realizar o cálculo dos tributos federais (PIS, COFINS, CSLL, IRPJ) com base nos dados apurados e informações fiscais']
          },
          {
            id: '03.10.1.2',
            nome: 'Conferir valores',
            passos: ['Conferir os valores calculados, verificando a correta aplicação das alíquotas e dos regimes tributários']
          }
        ]
      },
      {
        id: '03.10.2',
        nome: 'Geração do Arquivo MIT',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO'],
        tarefas: [
          {
            id: '03.10.2.1',
            nome: 'Acessar sistema DOMINIO',
            passos: ['Acessar o sistema DOMINIO e gerar o arquivo de inclusão dos tributos federais (PIS, COFINS, CSLL, IRPJ)']
          },
          {
            id: '03.10.2.2',
            nome: 'Verificar preenchimento',
            passos: ['Certificar-se de que todas as informações de tributos federais estão corretamente preenchidas antes de gerar o arquivo']
          },
          {
            id: '03.10.2.3',
            nome: 'Gerar arquivo MIT',
            passos: ['Gerar o arquivo de forma correta, garantindo que os valores correspondam às apurações fiscais realizadas']
          }
        ]
      },
      {
        id: '03.10.3',
        nome: 'Envio à Receita Federal',
        nivel: 'Operacional',
        ferramentas: ['DCTF Web'],
        tarefas: [
          {
            id: '03.10.3.1',
            nome: 'Acessar DCTF Web',
            passos: ['Acessar o site da Receita Federal para importar o arquivo gerado no sistema DOMINIO']
          },
          {
            id: '03.10.3.2',
            nome: 'Importar arquivo',
            passos: ['Importar o arquivo na plataforma da DCTF Web, que será utilizado para gerar o débito tributário']
          },
          {
            id: '03.10.3.3',
            nome: 'Verificar débito',
            passos: ['Verificar a consistência dos dados e garantir que o débito gerado foi corretamente registrado na DCTF Web']
          },
          {
            id: '03.10.3.4',
            nome: 'Confirmar envio',
            passos: ['Confirmar o envio do arquivo e registrar o recibo de envio para controle interno']
          }
        ]
      }
    ]
  },
  {
    id: '03.11',
    nome: 'DCTF Web – Declaração de Débitos e Créditos Tributários Federais',
    descricao: 'Processo de recebimento de informações do eSocial e geração da DCTF Web para registro dos tributos federais.',
    nivel: 'Operacional',
    icon: Monitor,
    cor: '#EF4444',
    entrada: 'Informações do eSocial enviadas pelo Departamento Pessoal, contendo dados sobre as obrigações trabalhistas e previdenciárias (INSS, IR, etc.). Dados relativos aos tributos federais a serem pagos.',
    saida: 'Arquivo da DCTF Web gerado com os débitos de tributos federais a serem pagos, transmitido à Receita Federal. Comprovante de envio com os débitos registrados.',
    tempo_execucao: '1-2 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['eSocial', 'DCTF Web'],
    subprocessos: [
      {
        id: '03.11.1',
        nome: 'Recebimento das Informações do eSocial',
        nivel: 'Operacional',
        ferramentas: ['eSocial'],
        tarefas: [
          {
            id: '03.11.1.1',
            nome: 'Receber dados eSocial',
            passos: ['Receber as informações do Departamento Pessoal, que contém os dados necessários para a apuração de tributos federais']
          },
          {
            id: '03.11.1.2',
            nome: 'Garantir completude',
            passos: ['Garantir que as informações estejam completas e corretas para alimentar a DCTF Web com os tributos relacionados à folha de pagamento e retenções de impostos']
          }
        ]
      },
      {
        id: '03.11.2',
        nome: 'Geração da DCTF Web',
        nivel: 'Operacional',
        ferramentas: ['DCTF Web'],
        tarefas: [
          {
            id: '03.11.2.1',
            nome: 'Acessar plataforma DCTF',
            passos: ['Acessar a plataforma DCTF Web da Receita Federal para iniciar a declaração dos débitos']
          },
          {
            id: '03.11.2.2',
            nome: 'Importar informações',
            passos: ['Importar as informações do eSocial para a DCTF Web, assegurando que todos os tributos a serem declarados (como INSS, IRPJ, CSLL, entre outros) estejam devidamente registrados']
          },
          {
            id: '03.11.2.3',
            nome: 'Conferir dados',
            passos: ['Realizar a conferência interna para garantir que os dados importados estejam consistentes com os registros do eSocial']
          }
        ]
      },
      {
        id: '03.11.3',
        nome: 'Envio da DCTF Web à Receita Federal',
        nivel: 'Operacional',
        ferramentas: ['DCTF Web'],
        tarefas: [
          {
            id: '03.11.3.1',
            nome: 'Validar DCTF Web',
            passos: ['Validar a DCTF Web dentro da plataforma para verificar se todas as informações estão corretamente preenchidas e sem erros']
          },
          {
            id: '03.11.3.2',
            nome: 'Enviar declaração',
            passos: ['Realizar o envio da DCTF Web à Receita Federal, observando o prazo de envio (até o dia 15 do mês subsequente)']
          },
          {
            id: '03.11.3.3',
            nome: 'Salvar recibo',
            passos: ['Após o envio, garantir que o recibo de entrega da DCTF Web seja salvo para controle interno e arquivamento']
          }
        ]
      }
    ]
  },
  {
    id: '03.12',
    nome: 'Compilação e Envio de MIT, REINF e eSocial para DCTFWeb',
    descricao: 'Processo de consolidação dos dados do MIT, REINF e eSocial para envio à DCTFWeb e geração das guias de pagamento.',
    nivel: 'Tático',
    icon: Zap,
    cor: '#8B5CF6',
    entrada: 'Arquivos contendo as informações do MIT, REINF e eSocial (Senior – Departamento Pessoal), que já foram apurados e validados em processos anteriores.',
    saida: 'Envio consolidado das informações de MIT, REINF e eSocial para a DCTFWeb. Geração das guias dos impostos devidos para pagamento pelo Departamento Financeiro.',
    tempo_execucao: '2-3 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['DOMINIO', 'eSocial Senior', 'REINF', 'DCTFWeb'],
    subprocessos: [
      {
        id: '03.12.1',
        nome: 'Compilação dos Dados Fiscais',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO', 'eSocial Senior', 'REINF'],
        tarefas: [
          {
            id: '03.12.1.1',
            nome: 'Coletar arquivos',
            passos: ['Coletar e organizar os arquivos gerados pelo MIT, REINF e eSocial, que contêm as informações de retenções de tributos federais (PIS, COFINS, IRPJ, CSLL, INSS, etc.)']
          },
          {
            id: '03.12.1.2',
            nome: 'Consolidar dados',
            passos: ['Consolidar os dados de todos os arquivos para garantir que todas as informações necessárias (como valores apurados e retenções) estejam completas e corretas']
          },
          {
            id: '03.12.1.3',
            nome: 'Validar integridade',
            passos: ['Validar a integridade e a consistência das informações antes de enviá-las para a DCTFWeb']
          }
        ]
      },
      {
        id: '03.12.2',
        nome: 'Envio para a DCTFWeb',
        nivel: 'Operacional',
        ferramentas: ['DCTFWeb'],
        tarefas: [
          {
            id: '03.12.2.1',
            nome: 'Acessar DCTFWeb',
            passos: ['Utilizar o sistema da Receita Federal para acessar a plataforma DCTFWeb e realizar o upload dos arquivos consolidados (MIT, REINF e eSocial)']
          },
          {
            id: '03.12.2.2',
            nome: 'Validar formato',
            passos: ['Garantir que todos os dados enviados estejam de acordo com os formatos exigidos pela Receita Federal e que não haja erros na validação do arquivo']
          },
          {
            id: '03.12.2.3',
            nome: 'Transmitir dados',
            passos: ['Após validação sem erros, efetuar a transmissão dos dados para a DCTFWeb, para que a Receita Federal registre os tributos devidos']
          }
        ]
      },
      {
        id: '03.12.3',
        nome: 'Geração da Guia de Pagamento',
        nivel: 'Operacional',
        ferramentas: ['DCTFWeb'],
        tarefas: [
          {
            id: '03.12.3.1',
            nome: 'Gerar guia pagamento',
            passos: ['Após o envio bem-sucedido para a DCTFWeb, a Receita Federal gera a guia de pagamento de cada tributo apurado, devidos e de acordo com os seus vencimentos']
          },
          {
            id: '03.12.3.2',
            nome: 'Conferir guia',
            passos: ['A guia gerada deve ser conferida para garantir que todos os tributos estejam corretos e de acordo com os dados apurados']
          },
          {
            id: '03.12.3.3',
            nome: 'Encaminhar ao financeiro',
            passos: ['Encaminhar a guia de pagamento para o Departamento Financeiro, para que o pagamento seja efetuado conforme o vencimento de cada tributo']
          }
        ]
      }
    ]
  },
  {
    id: '03.13',
    nome: 'Fechamento Fiscal das Empresas em Pernambuco',
    descricao: 'Processo específico para controle de créditos de ICMS e extrato de fronteira das empresas localizadas em Pernambuco.',
    nivel: 'Operacional',
    icon: MapPin,
    cor: '#10B981',
    entrada: 'Competência fiscal encerrada (último dia do mês). Certificado digital da empresa. Notas fiscais com créditos disponíveis. Extrato da SEFAZ-PE da competência vigente.',
    saida: 'Planilha atualizada com os lançamentos de crédito. Créditos lançados corretamente no sistema DOMÍNIO. Guia de pagamento do extrato de fronteira gerada e disponível para o financeiro.',
    tempo_execucao: '2-3 horas',
    frequencia: 'Mensal',
    sistemas_utilizados: ['DOMINIO', 'Portal SEFAZ-PE', 'Planilha de controle'],
    subprocessos: [
      {
        id: '03.13.1',
        nome: 'Fechamento Mensal e Geração de Notas de Transferência de Crédito',
        nivel: 'Operacional',
        ferramentas: ['DOMINIO'],
        tarefas: [
          {
            id: '03.13.1.1',
            nome: 'Realizar fechamento fiscal',
            passos: ['No último dia útil do mês, realizar o fechamento fiscal da empresa no sistema DOMÍNIO']
          },
          {
            id: '03.13.1.2',
            nome: 'Emitir notas transferência',
            passos: ['Emitir as notas fiscais correspondentes à transferência de crédito de ICMS']
          },
          {
            id: '03.13.1.3',
            nome: 'Garantir emissão',
            passos: ['Garantir que todas as notas estejam devidamente emitidas para possibilitar os lançamentos no mês']
          }
        ]
      },
      {
        id: '03.13.2',
        nome: 'Acesso e Consulta à SEFAZ-PE',
        nivel: 'Operacional',
        ferramentas: ['Portal SEFAZ-PE'],
        tarefas: [
          {
            id: '03.13.2.1',
            nome: 'Acessar SEFAZ-PE',
            passos: ['Após a virada do mês, acessar o site da SEFAZ-PE'],
            urls: ['https://www.sefaz.pe.gov.br']
          },
          {
            id: '03.13.2.2',
            nome: 'Login certificado',
            passos: ['Realizar login com o certificado digital da empresa']
          },
          {
            id: '03.13.2.3',
            nome: 'Buscar extrato',
            passos: ['Buscar o extrato da competência correspondente ao mês que está sendo fechado']
          }
        ]
      },
      {
        id: '03.13.3',
        nome: 'Controle e Lançamento de Créditos',
        nivel: 'Operacional',
        ferramentas: ['Portal SEFAZ-PE', 'Planilha de controle', 'DOMINIO'],
        tarefas: [
          {
            id: '03.13.3.1',
            nome: 'Identificar créditos',
            passos: ['Identificar no extrato as notas fiscais em que há crédito de ICMS']
          },
          {
            id: '03.13.3.2',
            nome: 'Lançar em planilha',
            passos: ['Lançar essas notas em uma planilha de controle, informando número da nota, data, valor de crédito e observações pertinentes']
          },
          {
            id: '03.13.3.3',
            nome: 'Registrar no DOMINIO',
            passos: ['Registrar no sistema DOMÍNIO o valor total do crédito apurado para a competência analisada']
          },
          {
            id: '03.13.3.4',
            nome: 'Finalizar importação',
            passos: ['Para finalizar a importação e conferência da empresa, seguir os mesmos processos do 1 ao 4']
          }
        ]
      },
      {
        id: '03.13.4',
        nome: 'Geração da Guia de Fronteira',
        nivel: 'Operacional',
        ferramentas: ['Portal SEFAZ-PE'],
        tarefas: [
          {
            id: '03.13.4.1',
            nome: 'Acessar SEFAZ dia 20',
            passos: ['No dia 20 de cada mês, acessar novamente o site da SEFAZ-PE com o certificado digital']
          },
          {
            id: '03.13.4.2',
            nome: 'Localizar extrato fronteira',
            passos: ['Localizar o extrato de fronteira referente à competência em questão']
          },
          {
            id: '03.13.4.3',
            nome: 'Gerar guia pagamento',
            passos: ['Gerar a guia de pagamento correspondente ao valor do extrato']
          },
          {
            id: '03.13.4.4',
            nome: 'Encaminhar financeiro',
            passos: ['Encaminhar a guia ao Departamento Financeiro para que o pagamento seja efetuado até a data de vencimento']
          }
        ]
      }
    ]
  }
];