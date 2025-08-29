import { ProcessoDetalhado } from '../../../types/processo';
import { FileText } from 'lucide-react';

// Processos do Departamento Contábil
export const lancamentoDespesas: ProcessoDetalhado = {
  id: 'CONT-09.1',
  nome: 'Lançamento de Despesas das Lojas',
  descricao: 'Processo de identificação, organização e lançamento de despesas das lojas Arezzo e Anacapri',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#3B82F6',
  entrada: 'Comprovantes físicos ou digitais de despesas das lojas Arezzo e Anacapri',
  saida: 'Despesas lançadas corretamente no Excel e comprovantes arquivados',
  sistemas_utilizados: ['Seta', 'Excel', 'Planilha de códigos terceiros', 'Caixa física de arquivos'],
  subprocessos: [
    {
      id: '9.1.1',
      nome: 'Identificação da Loja da Despesa',
      nivel: 'Operacional',
      ferramentas: ['Seta'],
      tarefas: [
        {
          id: '9.1.1.1',
          nome: 'Conferir CNPJ da Loja',
          passos: [
            'Verificar no comprovante qual é o CNPJ da loja responsável pela despesa',
            'Caso não conste diretamente, acessar o sistema Seta',
            'Caminho: Seta > Retaguarda > Financeiro > Títulos a Pagar',
            'Filtros: Situação "Todas", data e valor do comprovante',
            'Editar título e visualizar o campo "empresa" para identificar a loja'
          ]
        }
      ]
    },
    {
      id: '9.1.2',
      nome: 'Organização dos Comprovantes por Loja',
      nivel: 'Operacional',
      ferramentas: [],
      tarefas: [
        {
          id: '9.1.2.1',
          nome: 'Separar comprovantes por loja',
          passos: [
            'Marcar número da loja nos comprovantes',
            'Agrupar todos os comprovantes da mesma loja'
          ]
        }
      ]
    },
    {
      id: '9.1.3',
      nome: 'Importação e Lançamento no Excel',
      nivel: 'Operacional',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '9.1.3.1',
          nome: 'Preencher informações no Excel',
          passos: [
            'Inserir data, histórico e valor conforme cada comprovante',
            'Definir conta de débito de acordo com a natureza da despesa:',
            '• Aluguel, energia, encargos, fundo de promoção → 55132',
            '• Fundo de propaganda Arezzo → 55104',
            '• Fundo de propaganda não Arezzo → 55114',
            '• Fornecedores na planilha códigos terceiros → 21401',
            '• Simples Nacional → 21311',
            '• Receita Federal IR s/salários → 21203',
            '• INSS a recolher → 21202',
            '• Retenção de serviço → 21310',
            '• ECAD → 52131',
            '• Despesas com veículos → 55107',
            '• Taxa de licença → 56106',
            '• CIEE → 55212',
            '• FGTS GRF → 21205',
            '• FGTS GRRF → 21219',
            'O crédito é sempre lançado na conta 11101'
          ]
        }
      ]
    },
    {
      id: '9.1.4',
      nome: 'Encaminhamento das Despesas de Pessoal',
      nivel: 'Operacional',
      ferramentas: [],
      tarefas: [
        {
          id: '9.1.4.1',
          nome: 'Separar e encaminhar ao DP',
          passos: [
            'Identificar despesas relacionadas a folha de pagamento, férias, rescisão, pró-labore, pensão, INSS, IRRF, FGTS, contribuição assistencial e patronal',
            'Entregar ao Departamento Pessoal para lançamento específico'
          ]
        }
      ]
    },
    {
      id: '9.1.5',
      nome: 'Arquivamento dos Comprovantes',
      nivel: 'Operacional',
      ferramentas: ['Caixa física de arquivos'],
      tarefas: [
        {
          id: '9.1.5.1',
          nome: 'Guardar os comprovantes',
          passos: [
            'Reunir comprovantes de todas as lojas',
            'Amarrar com elástico',
            'Armazenar na caixa azul de arquivo'
          ]
        }
      ]
    }
  ]
};

export const apuracaoPisCofins: ProcessoDetalhado = {
  id: 'CONT-09.2',
  nome: 'Apuração do PIS e COFINS',
  descricao: 'Processo de coleta, cálculo e consolidação dos valores de PIS e COFINS',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#22C55E',
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

export const conferenciaCaixas: ProcessoDetalhado = {
  id: 'CONT-09.3',
  nome: 'Conferência de Caixas',
  descricao: 'Processo de conferência e validação dos movimentos de caixa PDV, Loja e Tesouraria',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#A855F7',
  entrada: 'Relatórios do Mega de faturamento, sangria de caixa, extratos de conta dinheiro, movimentações de transferência entre lojas e financeiro',
  saida: 'Movimentações de caixas (PDV, Loja e Tesouraria) conferidas e saldos validados',
  sistemas_utilizados: ['Sistema Mega', 'Relatórios de faturamento', 'Sangria de caixa', 'Extrato de conta dinheiro', 'Relatórios de lançamentos e movimentações financeiras'],
  subprocessos: [
    {
      id: '9.3.1',
      nome: 'Conferência do Caixa PDV (11101)',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '9.3.1.1',
          nome: 'Calcular o movimento débito do Caixa PDV',
          passos: [
            'Acessar: Mega > Relatórios > Faturamento > Detalhamento',
            'Período: mês inteiro',
            'Filtrar a loja (ou matriz + filiais, se consolidado)',
            'Somar colunas: Valor à Vista + Recebimento Carnê + Recebimento Fatura',
            'Adicionar créditos da conta Diferença de Caixa (66110)'
          ]
        },
        {
          id: '9.3.1.2',
          nome: 'Calcular o movimento crédito do Caixa PDV',
          passos: [
            'Acessar: Mega > Relatórios > Sangria de Caixa',
            'Período: mês inteiro, Status: todos',
            'Filtrar a loja (ou matriz + filiais, se consolidado)',
            'Somar o total da sangria de caixa',
            'Adicionar débitos da conta Diferença de Caixa (66110)'
          ]
        }
      ]
    },
    {
      id: '9.3.2',
      nome: 'Conferência do Caixa Loja (11106)',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '9.3.2.1',
          nome: 'Calcular o movimento débito do Caixa Loja',
          passos: [
            'Utilizar valor total da sangria de caixa (obtido no subprocesso anterior)'
          ]
        },
        {
          id: '9.3.2.2',
          nome: 'Calcular o movimento crédito do Caixa Loja',
          passos: [
            'Acessar: Mega > Financeiro > Contas > Listar',
            'Selecionar a loja > Filtrar extrato da conta Dinheiro > Tipo: Débito',
            'Período: mês inteiro',
            'Somar valores de pagamento de despesas e depósitos para o financeiro'
          ]
        },
        {
          id: '9.3.2.3',
          nome: 'Conferir saldo final do Caixa Loja',
          passos: [
            'Acessar: Mega > Relatórios > Lançamentos Conta',
            'Data: último dia do mês',
            'Filtrar loja',
            'Verificar saldo final registrado'
          ]
        }
      ]
    },
    {
      id: '9.3.3',
      nome: 'Conferência do Caixa Tesouraria (11102)',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '9.3.3.1',
          nome: 'Calcular o movimento débito da Tesouraria',
          passos: [
            'Acessar: Mega > Financeiro > Movimentações > Listar',
            'Conta de origem: conta dinheiro da loja',
            'Conta de destino: financeiro',
            'Período: mês inteiro',
            'Somar todos os depósitos realizados pela loja'
          ]
        },
        {
          id: '9.3.3.2',
          nome: 'Calcular o movimento crédito da Tesouraria',
          passos: [
            'Acessar: Mega > Financeiro > Movimentações > Listar',
            'Conta de origem: financeiro',
            'Conta de destino: contas bancárias da loja (ex.: Safra, Santander, Sicredi)',
            'Período: mês inteiro',
            'Caso haja mais de uma conta bancária, filtrar individualmente e somar os valores'
          ]
        }
      ]
    }
  ]
};

export const importacaoExtratosBancarios: ProcessoDetalhado = {
  id: 'CONT-09.4',
  nome: 'Importação de Extratos Bancários',
  descricao: 'Processo de importação e conciliação de extratos bancários no sistema Prosoft',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#EA580C',
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

export const integracaoFiscal: ProcessoDetalhado = {
  id: 'CONT-09.5',
  nome: 'Integração Fiscal',
  descricao: 'Processo de integração fiscal entre os módulos Fiscal e Contábil do sistema',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#DC2626',
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

export const fechamentoContabilMensal: ProcessoDetalhado = {
  id: 'CONT-09.6',
  nome: 'Fechamento Contábil Mensal',
  descricao: 'Processo completo de fechamento contábil mensal com integrações, conciliações e validações',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#3B82F6',
  entrada: 'Documentos financeiros, extratos bancários (formato OFX), relatórios do Mega, planilhas de despesas, integrações fiscais, lançamentos manuais e automáticos, planilha de receitas por adquirente',
  saida: 'Fechamento contábil mensal concluído com integrações importadas, conciliações bancárias finalizadas, lançamentos complementares registrados, relatórios validados e documentação organizada para auditoria',
  sistemas_utilizados: ['DOMÍNIO', 'Mega', 'GetNet', 'Fiabilité', 'Equals', 'Arquivos OFX', 'Pasta G:'],
  subprocessos: [
    {
      id: '9.6.1',
      nome: 'Integrações e Conciliação Inicial',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO', 'Mega'],
      tarefas: [
        {
          id: '9.6.1.1',
          nome: 'Importação dos lançamentos contábeis oriundos do Mega',
          passos: [
            'Acesse o sistema DOMÍNIO > Contábil > Importações > Importação de Lançamentos',
            'Selecione a empresa e o mês de competência',
            'Clique em "Selecionar Arquivo" e anexe o Excel de integração (gerado pelo Mega)',
            'Verifique se os campos obrigatórios (Data, Conta Débito, Conta Crédito, Histórico, Centro de Custo) estão preenchidos corretamente',
            'Clique em "Validar" para identificar erros de estrutura ou campos inconsistentes',
            'Se validado com sucesso, clique em "Importar" para registrar os lançamentos no sistema contábil'
          ]
        },
        {
          id: '9.6.1.2',
          nome: 'Correção de rejeições na importação contábil',
          passos: [
            'Caso haja erros na importação, clique no ícone de erro "!" na tela de importações',
            'Analise o relatório exibido com os motivos das rejeições (ex: conta contábil inexistente, centro de custo inválido, histórico em branco)',
            'Corrija as informações diretamente na planilha Excel',
            'Retorne à tela DOMÍNIO > Contábil > Importações e realize uma nova tentativa de importação com o arquivo corrigido'
          ]
        },
        {
          id: '9.6.1.3',
          nome: 'Conciliação de taxas de cartões recebidas pelas adquirentes',
          passos: [
            'Acesse os portais da GetNet, Equals e Fiabilité e baixe os relatórios de recebíveis do mês (formato Excel ou PDF)',
            'Compare os valores de receita por data/loja com os lançamentos contabilizados no DOMÍNIO (contas 3.1.x)',
            'Em caso de divergências (como taxa não lançada ou diferença de valor recebido), acesse DOMÍNIO > Contábil > Lançamentos > Inclusão Manual',
            'Crie o lançamento complementar com a conta contábil correta (ex: Despesa com taxas bancárias) e registre o valor exato'
          ]
        },
        {
          id: '9.6.1.4',
          nome: 'Conciliação do Caixa PDV com o relatório Fiabilité',
          passos: [
            'Baixe o relatório Fiabilité de movimentação do PDV por loja e período',
            'Acesse o sistema DOMÍNIO > Contábil > Lançamentos > Consulta por Conta e selecione a conta 11101 (Caixa PDV)',
            'Compare os valores recebidos com os lançamentos registrados',
            'Caso identifique diferenças, registre a diferença como ajuste na conta 66110 (Diferença de Caixa) com lançamento complementar'
          ]
        }
      ]
    },
    {
      id: '9.6.2',
      nome: 'Conciliação Bancária',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO'],
      tarefas: [
        {
          id: '9.6.2.1',
          nome: 'Importação de extratos bancários no DOMÍNIO',
          passos: [
            'Acesse DOMÍNIO > Bancos > Conciliação > Importação de Extrato',
            'Clique em "Selecionar Arquivo" e anexe o arquivo no formato OFX recebido do Financeiro (por banco e por loja)',
            'Escolha o banco correspondente (ex: Santander, Banrisul, Itaú) e o mês de competência',
            'Confirme a importação automática das movimentações para o módulo bancário'
          ]
        },
        {
          id: '9.6.2.2',
          nome: 'Conciliação automática dos lançamentos bancários',
          passos: [
            'Vá em DOMÍNIO > Bancos > Conciliação Automática',
            'Selecione a conta bancária e o período desejado',
            'Clique em "Executar Conciliação" para o sistema cruzar os dados do extrato com os lançamentos contábeis',
            'Caso apareçam lançamentos não reconhecidos, acesse a aba "Pendentes" e clique em "Vincular Manualmente" ou insira o lançamento faltante manualmente'
          ]
        },
        {
          id: '9.6.2.3',
          nome: 'Tratamento de divergências de saldo',
          passos: [
            'Acesse DOMÍNIO > Contábil > Relatórios > Razão Contábil',
            'Filtre por banco, empresa e período',
            'Compare o saldo final com o extrato bancário em PDF',
            'Caso encontre divergência, identifique os dias com diferença e corrija os lançamentos por meio de inclusão manual ou nova importação'
          ]
        }
      ]
    },
    {
      id: '9.6.3',
      nome: 'Lançamentos Complementares',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO', 'Mega'],
      tarefas: [
        {
          id: '9.6.3.1',
          nome: 'Registro do IRRF sobre aluguel',
          passos: [
            'Acesse o sistema Mega > Financeiro > Lançamentos > Contas a Pagar',
            'Filtre o fornecedor e selecione a nota com retenção de IRRF',
            'Anote o valor retido e a conta correspondente',
            'No DOMÍNIO, vá em Contábil > Lançamentos > Inclusão Manual',
            'Lançar como: – Débito: Despesa com Aluguel (conta 511xx) – Crédito: IRRF a Recolher (21203)',
            'Histórico: "Retenção IRRF – aluguel mês/ano – loja XX"'
          ]
        },
        {
          id: '9.6.3.2',
          nome: 'Lançamento da depreciação mensal',
          passos: [
            'Acesse DOMÍNIO > Patrimônio > Depreciação > Executar',
            'Selecione a empresa e o período de competência',
            'Clique em "Calcular Depreciação" e aguarde o processamento',
            'Após conclusão, confira os lançamentos gerados automaticamente no módulo contábil'
          ]
        }
      ]
    },
    {
      id: '9.6.4',
      nome: 'Encerramento e Validação',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO'],
      tarefas: [
        {
          id: '9.6.4.1',
          nome: 'Geração de balancetes do mês',
          passos: [
            'Acesse DOMÍNIO > Contábil > Relatórios > Balancete de Verificação',
            'Selecione: – Tipo: Analítico e Sintético – Período: mês corrente – Exibir: Todos os centros de custo',
            'Clique em "Gerar Relatório" e salve o arquivo em PDF e Excel'
          ]
        },
        {
          id: '9.6.4.2',
          nome: 'Validação cruzada dos saldos',
          passos: [
            'Compare o balancete DOMÍNIO com: – Relatório de centros de custo do Mega – Planilha fiscal consolidada (Google Drive)',
            'Em caso de diferença, validar CFOPs, CSTs ou lançamentos pendentes'
          ]
        },
        {
          id: '9.6.4.3',
          nome: 'Backup da documentação mensal',
          passos: [
            'Salvar: – XMLs de notas fiscais – Planilhas de conciliação – Extratos bancários em PDF',
            'Pasta de destino: G:\\Departamento Fiscal_Contábil\\Contabilidade\\Mensalmente\\2025\\Mês XX',
            'Validar se todos os arquivos estão nominais, por loja e por tipo de documento'
          ]
        }
      ]
    }
  ]
};

export const conciliacaoReceitas: ProcessoDetalhado = {
  id: 'CONT-09.7',
  nome: 'Conciliação Contábil de Receitas e Despesas',
  descricao: 'Processo de conciliação e validação de receitas e despesas operacionais',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#22C55E',
  entrada: 'Receitas e despesas lançadas no Mega; relatórios financeiros; documentos fiscais; extratos bancários; arquivos processados no sistema contábil DOMÍNIO',
  saida: 'Receitas e despesas conciliadas no DOMÍNIO; divergências tratadas com ajustes registrados e documentação salva para auditoria',
  sistemas_utilizados: ['DOMÍNIO', 'Mega', 'Planilhas do Financeiro', 'Equals', 'GetNet', 'Fiabilité', 'Arquivos OFX', 'Drive Corporativo', 'Google Sheets'],
  subprocessos: [
    {
      id: '9.7.1',
      nome: 'Conciliação de Receitas Operacionais',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO', 'GetNet', 'Equals', 'Fiabilité'],
      tarefas: [
        {
          id: '9.7.1.1',
          nome: 'Importação das receitas operacionais para o DOMÍNIO',
          passos: [
            'Acesse DOMÍNIO > Contábil > Importações > Importação de Lançamentos',
            'Selecione a empresa e o período de competência',
            'Anexe o arquivo de receitas gerado no Mega (Excel ou XML)',
            'Clique em "Validar" para revisar a estrutura',
            'Corrija erros, se houver, e clique em "Importar" para concluir'
          ]
        },
        {
          id: '9.7.1.2',
          nome: 'Comparar receitas com relatórios de adquirentes',
          passos: [
            'Baixe os relatórios mensais de vendas e recebimentos das plataformas GetNet, Equals e Fiabilité',
            'Acesse DOMÍNIO > Contábil > Relatórios > Razão Contábil e filtre as contas de receita (ex: 3.1.x)',
            'Confronte os valores por loja e por dia com os recebimentos reais dos extratos e adquirentes'
          ]
        },
        {
          id: '9.7.1.3',
          nome: 'Ajustar divergências de receita',
          passos: [
            'Em caso de diferença por taxa, estorno ou valor não recebido, acesse DOMÍNIO > Contábil > Lançamentos > Inclusão Manual',
            'Crie um lançamento de ajuste: – Conta Débito: Despesa Financeira (Taxas ou Ajustes) – Conta Crédito: Receita Bruta ou conta compensatória',
            'Registre o histórico detalhado (ex: "Estorno venda Cartão Loja 40 - 10/07/2025")'
          ]
        }
      ]
    },
    {
      id: '9.7.2',
      nome: 'Conciliação de Despesas Operacionais',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO', 'Google Sheets'],
      tarefas: [
        {
          id: '9.7.2.1',
          nome: 'Conferência de despesas com base na planilha fiscal',
          passos: [
            'Acesse a planilha consolidada mensal (Google Drive ou servidor interno)',
            'Compare os CFOPs, CSTs e valores com o módulo DOMÍNIO > Contábil > Consulta por Conta',
            'Valide se a classificação contábil está adequada conforme natureza da despesa'
          ]
        },
        {
          id: '9.7.2.2',
          nome: 'Identificar despesas recorrentes não lançadas',
          passos: [
            'No DOMÍNIO, acesse Contábil > Relatórios > Histórico de Despesas',
            'Gere relatório comparativo entre os últimos três meses',
            'Verifique se alguma despesa esperada não está registrada no mês vigente'
          ]
        },
        {
          id: '9.7.2.3',
          nome: 'Correção de lançamentos contábeis incorretos',
          passos: [
            'Acesse DOMÍNIO > Contábil > Lançamentos > Alteração',
            'Localize o lançamento com erro (ex: conta errada, valor incorreto ou data)',
            'Edite os campos necessários com base no plano de contas e centro de custo',
            'Salve a alteração com histórico justificando o ajuste'
          ]
        }
      ]
    },
    {
      id: '9.7.3',
      nome: 'Conciliação Contábil-Bancária Avançada',
      nivel: 'Operacional',
      ferramentas: ['DOMÍNIO'],
      tarefas: [
        {
          id: '9.7.3.1',
          nome: 'Importar extratos OFX e executar conciliação',
          passos: [
            'Acesse DOMÍNIO > Bancos > Conciliação > Importar Extrato',
            'Anexe os arquivos OFX por banco e por loja',
            'Execute a conciliação automática e identifique os itens não vinculados'
          ]
        },
        {
          id: '9.7.3.2',
          nome: 'Tratar lançamentos pendentes',
          passos: [
            'Acesse a aba de pendências e filtre por lançamentos sem correspondência',
            'Analise cada caso (ex: tarifa, estorno, devolução, depósito)',
            'Registre os ajustes no DOMÍNIO > Contábil > Lançamentos > Inclusão Manual, utilizando conta de transição ou "em análise"'
          ]
        },
        {
          id: '9.7.3.3',
          nome: 'Geração de planilha de justificativas',
          passos: [
            'Acesse DOMÍNIO > Relatórios > Conciliação Detalhada',
            'Exporte a planilha com colunas: Data, Valor, Tipo, Situação, Justificativa',
            'Salve no diretório: G:\\Departamento Contábil\\Conciliações\\Mês_Competência'
          ]
        }
      ]
    }
  ]
};

export const geracaoECD: ProcessoDetalhado = {
  id: 'CONT-09.8',
  nome: 'Geração e Entrega da Escrituração Contábil Digital – ECD',
  descricao: 'Processo de geração, validação e transmissão da ECD para a Receita Federal',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#A855F7',
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

export const geracaoECF: ProcessoDetalhado = {
  id: 'CONT-09.9',
  nome: 'Geração e Entrega da Escrituração Contábil Fiscal – ECF',
  descricao: 'Processo de geração e transmissão da ECF com apuração do IRPJ e CSLL',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#EA580C',
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

export const apuracaoLucroReal: ProcessoDetalhado = {
  id: 'CONT-09.10',
  nome: 'Apuração do Lucro Real Trimestral',
  descricao: 'Processo de apuração trimestral do Lucro Real com cálculo de IRPJ e CSLL',
  nivel: 'Operacional',
  icon: FileText,
  cor: '#DC2626',
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

// Lista de todos os processos do departamento Contábil
export const processosContabil: ProcessoDetalhado[] = [
  lancamentoDespesas,
  apuracaoPisCofins,
  conferenciaCaixas,
  importacaoExtratosBancarios,
  integracaoFiscal,
  fechamentoContabilMensal,
  conciliacaoReceitas,
  geracaoECD,
  geracaoECF,
  apuracaoLucroReal
];