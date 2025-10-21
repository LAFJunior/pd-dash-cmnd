import { CategoriaGlossario } from '@/types/glossario';

export const glossarioCorporativo: CategoriaGlossario[] = [
  {
    id: 'sistemas',
    nome: 'Sistemas e Ferramentas',
    descricao: 'Plataformas e softwares utilizados no Grupo Oscar',
    icone: 'Computer',
    termos: [
      {
        termo: 'TOTVS',
        definicao: 'Sistema integrado de gestão empresarial (ERP) utilizado para diversos processos administrativos, contábeis e financeiros.',
        categoria: 'sistemas',
        relacionados: ['ERP', 'Protheus']
      },
      {
        termo: 'Protheus',
        definicao: 'Plataforma ERP da TOTVS, responsável pela gestão de processos de negócio como financeiro, controladoria, compras e fiscal.',
        categoria: 'sistemas',
        relacionados: ['TOTVS', 'ERP']
      },
      {
        termo: 'Linx',
        definicao: 'Sistema de gestão de varejo utilizado para operações de lojas, controle de estoque e ponto de venda (PDV).',
        categoria: 'sistemas',
        relacionados: ['PDV', 'Varejo']
      },
      {
        termo: 'Festcard',
        definicao: 'Sistema de gestão de vale-compras e cartões de benefícios usado pelo Grupo Oscar.',
        categoria: 'sistemas',
        relacionados: ['Benefícios', 'Controladoria']
      },
      {
        termo: 'Power BI',
        definicao: 'Ferramenta de business intelligence da Microsoft utilizada para criação de dashboards e análise de dados.',
        categoria: 'sistemas',
        relacionados: ['BI', 'Dashboards', 'Análise de Dados']
      },
      {
        termo: 'Oracle',
        definicao: 'Sistema de banco de dados e gestão utilizado em diversos processos do Grupo Oscar.',
        categoria: 'sistemas'
      },
      {
        termo: 'VTEX',
        definicao: 'Plataforma de e-commerce utilizada para gerenciar a loja virtual e operações de comércio eletrônico.',
        categoria: 'sistemas',
        relacionados: ['E-commerce', 'Loja Virtual']
      },
      {
        termo: 'WMS',
        definicao: 'Sistema de Gerenciamento de Armazém (Warehouse Management System) utilizado no Centro de Distribuição.',
        categoria: 'sistemas',
        relacionados: ['CD', 'Logística']
      },
      {
        termo: 'SAP',
        definicao: 'Sistema de gestão empresarial utilizado em processos específicos do Grupo Oscar.',
        categoria: 'sistemas',
        relacionados: ['ERP']
      }
    ]
  },
  {
    id: 'processos',
    nome: 'Processos e Metodologias',
    descricao: 'Conceitos relacionados aos processos corporativos',
    icone: 'GitBranch',
    termos: [
      {
        termo: 'Processo Estratégico',
        definicao: 'Processos de alto nível que definem diretrizes, metas e estratégias da organização. Envolvem decisões de longo prazo e impactam toda a empresa.',
        categoria: 'processos',
        relacionados: ['Processo Tático', 'Processo Operacional']
      },
      {
        termo: 'Processo Tático',
        definicao: 'Processos de nível intermediário que traduzem as estratégias em planos de ação. Focam em coordenação e controle de médio prazo.',
        categoria: 'processos',
        relacionados: ['Processo Estratégico', 'Processo Operacional']
      },
      {
        termo: 'Processo Operacional',
        definicao: 'Processos de execução diária que realizam as atividades rotineiras da organização. Focam na eficiência das operações do dia a dia.',
        categoria: 'processos',
        relacionados: ['Processo Estratégico', 'Processo Tático']
      },
      {
        termo: 'Subprocesso',
        definicao: 'Subdivisão de um processo maior, representando uma etapa específica ou um conjunto de atividades relacionadas dentro do processo principal.',
        categoria: 'processos',
        relacionados: ['Tarefa', 'Processo']
      },
      {
        termo: 'Tarefa',
        definicao: 'Menor unidade de trabalho dentro de um subprocesso, representando uma ação específica a ser executada.',
        categoria: 'processos',
        relacionados: ['Subprocesso']
      },
      {
        termo: 'Fluxo de Processo',
        definicao: 'Sequência ordenada de atividades que descrevem como um processo é executado do início ao fim.',
        categoria: 'processos'
      },
      {
        termo: 'RLS (Row Level Security)',
        definicao: 'Política de segurança em nível de linha que controla o acesso aos dados com base em regras específicas.',
        categoria: 'processos',
        relacionados: ['Segurança', 'Banco de Dados']
      }
    ]
  },
  {
    id: 'financeiro',
    nome: 'Financeiro e Contábil',
    descricao: 'Termos relacionados às áreas financeira e contábil',
    icone: 'DollarSign',
    termos: [
      {
        termo: 'Conciliação Bancária',
        definicao: 'Processo de verificação e ajuste entre os registros contábeis da empresa e os extratos bancários.',
        categoria: 'financeiro',
        relacionados: ['Controladoria', 'Contas a Pagar']
      },
      {
        termo: 'Contas a Pagar',
        definicao: 'Obrigações financeiras da empresa com fornecedores, prestadores de serviços e outros credores.',
        categoria: 'financeiro',
        relacionados: ['Contas a Receber', 'Fluxo de Caixa']
      },
      {
        termo: 'Contas a Receber',
        definicao: 'Valores que a empresa tem a receber de clientes por vendas realizadas a prazo.',
        categoria: 'financeiro',
        relacionados: ['Contas a Pagar', 'Fluxo de Caixa']
      },
      {
        termo: 'Fluxo de Caixa',
        definicao: 'Controle de entradas e saídas de recursos financeiros da empresa em um determinado período.',
        categoria: 'financeiro',
        relacionados: ['Contas a Pagar', 'Contas a Receber']
      },
      {
        termo: 'ECD',
        definicao: 'Escrituração Contábil Digital - obrigação acessória que transmite registros contábeis ao SPED.',
        categoria: 'financeiro',
        relacionados: ['ECF', 'SPED', 'Contábil']
      },
      {
        termo: 'ECF',
        definicao: 'Escrituração Contábil Fiscal - declaração que substitui a DIPJ com informações sobre apuração do IRPJ e CSLL.',
        categoria: 'financeiro',
        relacionados: ['ECD', 'SPED', 'Contábil']
      },
      {
        termo: 'SPED',
        definicao: 'Sistema Público de Escrituração Digital - moderniza a forma de cumprimento das obrigações acessórias.',
        categoria: 'financeiro',
        relacionados: ['ECD', 'ECF', 'Fiscal']
      },
      {
        termo: 'PIS/COFINS',
        definicao: 'Contribuições sociais federais incidentes sobre o faturamento das empresas.',
        categoria: 'financeiro',
        relacionados: ['Tributação', 'Fiscal']
      },
      {
        termo: 'Lucro Real',
        definicao: 'Regime de tributação onde o IRPJ e CSLL são calculados sobre o lucro contábil ajustado.',
        categoria: 'financeiro',
        relacionados: ['IRPJ', 'CSLL', 'Tributação']
      }
    ]
  },
  {
    id: 'rh',
    nome: 'Recursos Humanos',
    descricao: 'Conceitos da área de gestão de pessoas',
    icone: 'Users',
    termos: [
      {
        termo: 'Folha de Pagamento',
        definicao: 'Documento que discrimina todos os valores devidos aos colaboradores, incluindo salários, benefícios e descontos.',
        categoria: 'rh',
        relacionados: ['Departamento Pessoal', 'Adiantamento Salarial']
      },
      {
        termo: 'Adiantamento Salarial',
        definicao: 'Pagamento antecipado de parte do salário do colaborador, geralmente realizado na primeira quinzena do mês.',
        categoria: 'rh',
        relacionados: ['Folha de Pagamento']
      },
      {
        termo: 'Admissão',
        definicao: 'Processo de contratação e registro formal de um novo colaborador na empresa.',
        categoria: 'rh',
        relacionados: ['Rescisão', 'Onboarding']
      },
      {
        termo: 'Rescisão',
        definicao: 'Processo de encerramento do contrato de trabalho entre empresa e colaborador.',
        categoria: 'rh',
        relacionados: ['Admissão', 'Demissão']
      },
      {
        termo: 'Afastamento',
        definicao: 'Período em que o colaborador não presta serviços por motivos diversos (doença, licença, etc.).',
        categoria: 'rh',
        relacionados: ['Atestado Médico', 'INSS']
      },
      {
        termo: 'Férias',
        definicao: 'Período de descanso remunerado a que o colaborador tem direito após 12 meses de trabalho.',
        categoria: 'rh',
        relacionados: ['Planejamento de Férias']
      },
      {
        termo: 'Processo Trabalhista',
        definicao: 'Ação judicial movida por colaborador ou ex-colaborador contra a empresa por questões relacionadas ao contrato de trabalho.',
        categoria: 'rh',
        relacionados: ['Rescisão', 'Departamento Pessoal']
      }
    ]
  },
  {
    id: 'operacoes',
    nome: 'Operações e Logística',
    descricao: 'Termos das áreas operacionais e logísticas',
    icone: 'Truck',
    termos: [
      {
        termo: 'CD',
        definicao: 'Centro de Distribuição - instalação logística responsável por armazenagem e distribuição de produtos.',
        categoria: 'operacoes',
        relacionados: ['WMS', 'Logística', 'Estoque']
      },
      {
        termo: 'SKU',
        definicao: 'Stock Keeping Unit - código único de identificação de cada item do estoque.',
        categoria: 'operacoes',
        relacionados: ['Estoque', 'Produto']
      },
      {
        termo: 'NF-e',
        definicao: 'Nota Fiscal Eletrônica - documento fiscal digital que registra operações de compra e venda.',
        categoria: 'operacoes',
        relacionados: ['Fiscal', 'SEFAZ']
      },
      {
        termo: 'DANFE',
        definicao: 'Documento Auxiliar da Nota Fiscal Eletrônica - representação gráfica simplificada da NF-e.',
        categoria: 'operacoes',
        relacionados: ['NF-e', 'Fiscal']
      },
      {
        termo: 'Compras',
        definicao: 'Área responsável pela aquisição de produtos, materiais e serviços necessários para a operação.',
        categoria: 'operacoes',
        relacionados: ['Fornecedor', 'Ordem de Compra']
      },
      {
        termo: 'Defeito',
        definicao: 'Área responsável pelo tratamento de produtos com problemas de qualidade e gestão de devoluções.',
        categoria: 'operacoes',
        relacionados: ['Qualidade', 'Devolução']
      }
    ]
  },
  {
    id: 'ecommerce',
    nome: 'E-commerce',
    descricao: 'Termos relacionados ao comércio eletrônico',
    icone: 'ShoppingCart',
    termos: [
      {
        termo: '1P (First Party)',
        definicao: 'Modelo de venda direta onde a empresa vende seus próprios produtos através de sua plataforma.',
        categoria: 'ecommerce',
        relacionados: ['3P', 'Marketplace']
      },
      {
        termo: '3P (Third Party)',
        definicao: 'Modelo marketplace onde terceiros vendem produtos através da plataforma da empresa.',
        categoria: 'ecommerce',
        relacionados: ['1P', 'Marketplace', 'Seller']
      },
      {
        termo: 'Visual Merchandising',
        definicao: 'Estratégias visuais para apresentação de produtos no ambiente digital, otimizando a experiência de compra.',
        categoria: 'ecommerce',
        relacionados: ['Vitrine', 'Layout']
      },
      {
        termo: 'SAC',
        definicao: 'Serviço de Atendimento ao Cliente - canal de comunicação para suporte e resolução de problemas.',
        categoria: 'ecommerce',
        relacionados: ['Atendimento', 'Pós-venda']
      },
      {
        termo: 'Marketplace',
        definicao: 'Plataforma que conecta múltiplos vendedores com compradores.',
        categoria: 'ecommerce',
        relacionados: ['1P', '3P', 'Seller']
      },
      {
        termo: 'Fulfillment',
        definicao: 'Processo completo de armazenagem, separação, embalagem e envio de pedidos do e-commerce.',
        categoria: 'ecommerce',
        relacionados: ['Logística', 'CD']
      }
    ]
  },
  {
    id: 'auditoria',
    nome: 'Auditoria e Compliance',
    descricao: 'Conceitos de auditoria e conformidade',
    icone: 'Shield',
    termos: [
      {
        termo: 'Auditoria',
        definicao: 'Processo sistemático de avaliação e verificação de procedimentos, controles e conformidade.',
        categoria: 'auditoria',
        relacionados: ['Compliance', 'Controles Internos']
      },
      {
        termo: 'Compliance',
        definicao: 'Conformidade com leis, regulamentos, políticas e procedimentos estabelecidos.',
        categoria: 'auditoria',
        relacionados: ['Auditoria', 'Governança']
      },
      {
        termo: 'Controles Internos',
        definicao: 'Processos e procedimentos implementados para garantir a integridade das operações e conformidade.',
        categoria: 'auditoria',
        relacionados: ['Auditoria', 'Governança']
      },
      {
        termo: 'Rastreabilidade',
        definicao: 'Capacidade de rastrear o histórico de uma transação ou processo através de registros documentados.',
        categoria: 'auditoria',
        relacionados: ['Auditoria', 'Controles']
      }
    ]
  }
];