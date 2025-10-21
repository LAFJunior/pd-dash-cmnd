import { Sparkles, Zap, BookOpen, Code, LucideIcon } from "lucide-react";

export interface ChatSuggestion {
  icon: LucideIcon;
  title: string;
  description: string;
  prompt: string;
}

type DepartmentSuggestions = {
  [key: string]: ChatSuggestion[];
};

// Mapeamento de sugestões por departamento
export const chatSuggestionsByDepartment: DepartmentSuggestions = {
  'auditoria': [
    {
      icon: Sparkles,
      title: "Auditoria de Estoque",
      description: "Como realizar inventário completo?",
      prompt: "Explique o processo de auditoria de estoque e como realizar inventário completo no sistema"
    },
    {
      icon: BookOpen,
      title: "Auditoria de Caixa",
      description: "Como auditar valores em caixa?",
      prompt: "Como realizar auditoria de caixa e conferência de valores? Quais documentos verificar?"
    },
    {
      icon: Zap,
      title: "Atendimento Topdesk",
      description: "Como resolver chamados da loja?",
      prompt: "Como funciona o atendimento de chamados via Topdesk? Qual o fluxo de atendimento?"
    },
    {
      icon: Code,
      title: "Conferência de Divergências",
      description: "Como corrigir erros de estoque?",
      prompt: "Como identificar e corrigir divergências em auditoria? Qual o procedimento?"
    }
  ],

  'ecommerce': [
    {
      icon: Sparkles,
      title: "Cadastro de Produtos",
      description: "Como cadastrar novos produtos?",
      prompt: "Como realizar o cadastro de produtos no e-commerce? Quais informações são necessárias?"
    },
    {
      icon: BookOpen,
      title: "Logística E-commerce",
      description: "Como funciona o fluxo de separação?",
      prompt: "Explique o processo de separação, embalagem e expedição de pedidos do e-commerce"
    },
    {
      icon: Zap,
      title: "Financeiro 1P/3P",
      description: "Diferença entre vendedor 1P e 3P?",
      prompt: "Qual a diferença entre operações 1P e 3P no e-commerce? Como funciona o financeiro de cada?"
    },
    {
      icon: Code,
      title: "Visual Merchandising",
      description: "Como organizar vitrines digitais?",
      prompt: "Como funciona o visual merchandising no e-commerce? Como organizar produtos e vitrines?"
    }
  ],

  'e-commerce': [
    {
      icon: Sparkles,
      title: "Cadastro de Produtos",
      description: "Como cadastrar novos produtos?",
      prompt: "Como realizar o cadastro de produtos no e-commerce? Quais informações são necessárias?"
    },
    {
      icon: BookOpen,
      title: "Logística E-commerce",
      description: "Como funciona o fluxo de separação?",
      prompt: "Explique o processo de separação, embalagem e expedição de pedidos do e-commerce"
    },
    {
      icon: Zap,
      title: "Financeiro 1P/3P",
      description: "Diferença entre vendedor 1P e 3P?",
      prompt: "Qual a diferença entre operações 1P e 3P no e-commerce? Como funciona o financeiro de cada?"
    },
    {
      icon: Code,
      title: "Visual Merchandising",
      description: "Como organizar vitrines digitais?",
      prompt: "Como funciona o visual merchandising no e-commerce? Como organizar produtos e vitrines?"
    }
  ],

  'compras': [
    {
      icon: Sparkles,
      title: "Processo de Compras",
      description: "Como solicitar uma compra?",
      prompt: "Qual o processo completo para realizar uma solicitação de compra? Quais documentos são necessários?"
    },
    {
      icon: BookOpen,
      title: "Gestão de Fornecedores",
      description: "Como homologar fornecedor?",
      prompt: "Como funciona o processo de homologação e cadastro de fornecedores?"
    },
    {
      icon: Zap,
      title: "Cotação de Preços",
      description: "Processo de cotação?",
      prompt: "Como realizar cotação de preços com fornecedores? Quantas cotações são necessárias?"
    },
    {
      icon: Code,
      title: "Aprovação de Pedidos",
      description: "Fluxo de aprovação de compras?",
      prompt: "Qual o fluxo de aprovação de pedidos de compra? Quem são os aprovadores?"
    }
  ],

  'defeito': [
    {
      icon: Sparkles,
      title: "Registro de Defeito",
      description: "Como registrar produto com defeito?",
      prompt: "Como realizar o registro de produto com defeito no sistema? Qual o procedimento?"
    },
    {
      icon: BookOpen,
      title: "Análise Técnica",
      description: "Como avaliar defeitos?",
      prompt: "Como funciona a análise técnica de produtos com defeito? Quais critérios avaliar?"
    },
    {
      icon: Zap,
      title: "Indenizações",
      description: "Processo de indenização ao cliente?",
      prompt: "Qual o processo para indenização de clientes por produtos com defeito?"
    },
    {
      icon: Code,
      title: "Troca e Devolução",
      description: "Fluxo de devolução de produtos?",
      prompt: "Como funciona o fluxo de troca e devolução de produtos com defeito?"
    }
  ],

  'sao jose dos campos': [
    {
      icon: Sparkles,
      title: "Recebimento de Mercadorias",
      description: "Fluxo de recebimento no CD?",
      prompt: "Como funciona o processo de recebimento de mercadorias no CD de São José dos Campos?"
    },
    {
      icon: BookOpen,
      title: "Separação de Pedidos",
      description: "Como funciona picking?",
      prompt: "Explique o processo de separação (picking) de pedidos no centro de distribuição"
    },
    {
      icon: Zap,
      title: "Expedição",
      description: "Processo de envio para lojas?",
      prompt: "Como funciona o processo de expedição e envio de mercadorias para as lojas?"
    },
    {
      icon: Code,
      title: "Inventário CD",
      description: "Como fazer inventário do CD?",
      prompt: "Como realizar o inventário do centro de distribuição? Qual a periodicidade?"
    }
  ],

  'cd': [
    {
      icon: Sparkles,
      title: "Recebimento de Mercadorias",
      description: "Fluxo de recebimento no CD?",
      prompt: "Como funciona o processo de recebimento de mercadorias no CD de São José dos Campos?"
    },
    {
      icon: BookOpen,
      title: "Separação de Pedidos",
      description: "Como funciona picking?",
      prompt: "Explique o processo de separação (picking) de pedidos no centro de distribuição"
    },
    {
      icon: Zap,
      title: "Expedição",
      description: "Processo de envio para lojas?",
      prompt: "Como funciona o processo de expedição e envio de mercadorias para as lojas?"
    },
    {
      icon: Code,
      title: "Inventário CD",
      description: "Como fazer inventário do CD?",
      prompt: "Como realizar o inventário do centro de distribuição? Qual a periodicidade?"
    }
  ],

  'cd operacoes': [
    {
      icon: Sparkles,
      title: "Recebimento de Mercadorias",
      description: "Fluxo de recebimento no CD?",
      prompt: "Como funciona o processo de recebimento de mercadorias no CD de São José dos Campos?"
    },
    {
      icon: BookOpen,
      title: "Separação de Pedidos",
      description: "Como funciona picking?",
      prompt: "Explique o processo de separação (picking) de pedidos no centro de distribuição"
    },
    {
      icon: Zap,
      title: "Expedição",
      description: "Processo de envio para lojas?",
      prompt: "Como funciona o processo de expedição e envio de mercadorias para as lojas?"
    },
    {
      icon: Code,
      title: "Inventário CD",
      description: "Como fazer inventário do CD?",
      prompt: "Como realizar o inventário do centro de distribuição? Qual a periodicidade?"
    }
  ],

  'fiscal': [
    {
      icon: Sparkles,
      title: "Apuração de ICMS",
      description: "Qual o passo a passo da apuração?",
      prompt: "Explique o processo de apuração do ICMS e como gerar as guias de pagamento"
    },
    {
      icon: BookOpen,
      title: "SPED Fiscal",
      description: "Como gerar e transmitir o SPED?",
      prompt: "Como realizar a geração e entrega do arquivo SPED Fiscal (EFD ICMS/IPI)?"
    },
    {
      icon: Zap,
      title: "Escrituração de Notas",
      description: "Como escriturar notas de entrada?",
      prompt: "Explique o processo de escrituração fiscal de notas de entrada no sistema DOMINIO"
    },
    {
      icon: Code,
      title: "Obrigações Estaduais",
      description: "Como entregar GIA/SP, GIA/RS e DAPI/MG?",
      prompt: "Qual o processo para gerar e entregar as obrigações estaduais (GIA/SP, GIA/RS, DAPI/MG)?"
    }
  ],

  'contabil': [
    {
      icon: Sparkles,
      title: "Fechamento Contábil",
      description: "Como realizar o fechamento mensal?",
      prompt: "Como funciona o processo de fechamento contábil mensal e quais são as etapas principais?"
    },
    {
      icon: BookOpen,
      title: "Apuração PIS/COFINS",
      description: "Como apurar PIS e COFINS?",
      prompt: "Explique o processo de apuração de PIS e COFINS no regime não-cumulativo"
    },
    {
      icon: Zap,
      title: "Lançamento de Despesas",
      description: "Como lançar despesas no sistema?",
      prompt: "Qual é o procedimento para lançamento de despesas e provisões no sistema contábil?"
    },
    {
      icon: Code,
      title: "Geração de ECD/ECF",
      description: "Como gerar as obrigações acessórias?",
      prompt: "Como realizar a geração e transmissão do ECD e ECF?"
    }
  ],

  'contábil': [
    {
      icon: Sparkles,
      title: "Fechamento Contábil",
      description: "Como realizar o fechamento mensal?",
      prompt: "Como funciona o processo de fechamento contábil mensal e quais são as etapas principais?"
    },
    {
      icon: BookOpen,
      title: "Apuração PIS/COFINS",
      description: "Como apurar PIS e COFINS?",
      prompt: "Explique o processo de apuração de PIS e COFINS no regime não-cumulativo"
    },
    {
      icon: Zap,
      title: "Lançamento de Despesas",
      description: "Como lançar despesas no sistema?",
      prompt: "Qual é o procedimento para lançamento de despesas e provisões no sistema contábil?"
    },
    {
      icon: Code,
      title: "Geração de ECD/ECF",
      description: "Como gerar as obrigações acessórias?",
      prompt: "Como realizar a geração e transmissão do ECD e ECF?"
    }
  ],

  'controladoria': [
    {
      icon: Sparkles,
      title: "Conciliação Bancária",
      description: "Como fazer a conciliação?",
      prompt: "Como realizar a conciliação bancária na Controladoria e quais sistemas utilizar?"
    },
    {
      icon: BookOpen,
      title: "Auditoria de Franquias",
      description: "Como auditar franquias?",
      prompt: "Explique o processo de auditoria de franquias e validação de repasses"
    },
    {
      icon: Zap,
      title: "Gestão de Contratos",
      description: "Como gerenciar contratos?",
      prompt: "Qual o fluxo de gestão e controle de contratos na Controladoria?"
    },
    {
      icon: Code,
      title: "Conciliação Festcard",
      description: "Como conciliar Festcard?",
      prompt: "Como realizar a conciliação do Festcard e validar os repasses?"
    }
  ],

  'departamento pessoal': [
    {
      icon: Sparkles,
      title: "Admissão de Colaboradores",
      description: "Quais documentos são necessários?",
      prompt: "Quais são os documentos necessários e etapas para admissão de novos colaboradores?"
    },
    {
      icon: BookOpen,
      title: "Folha de Pagamento",
      description: "Como processar a folha?",
      prompt: "Explique o processo de fechamento e processamento da folha de pagamento mensal"
    },
    {
      icon: Zap,
      title: "Planejamento de Férias",
      description: "Como gerenciar férias?",
      prompt: "Como funciona o planejamento e controle de férias dos colaboradores?"
    },
    {
      icon: Code,
      title: "Gestão de Benefícios",
      description: "Como administrar benefícios?",
      prompt: "Qual o processo de gestão de benefícios (VT, VR, plano de saúde) dos colaboradores?"
    }
  ],

  'dp': [
    {
      icon: Sparkles,
      title: "Admissão de Colaboradores",
      description: "Quais documentos são necessários?",
      prompt: "Quais são os documentos necessários e etapas para admissão de novos colaboradores?"
    },
    {
      icon: BookOpen,
      title: "Folha de Pagamento",
      description: "Como processar a folha?",
      prompt: "Explique o processo de fechamento e processamento da folha de pagamento mensal"
    },
    {
      icon: Zap,
      title: "Planejamento de Férias",
      description: "Como gerenciar férias?",
      prompt: "Como funciona o planejamento e controle de férias dos colaboradores?"
    },
    {
      icon: Code,
      title: "Gestão de Benefícios",
      description: "Como administrar benefícios?",
      prompt: "Qual o processo de gestão de benefícios (VT, VR, plano de saúde) dos colaboradores?"
    }
  ],

  'rh': [
    {
      icon: Sparkles,
      title: "Admissão de Colaboradores",
      description: "Quais documentos são necessários?",
      prompt: "Quais são os documentos necessários e etapas para admissão de novos colaboradores?"
    },
    {
      icon: BookOpen,
      title: "Folha de Pagamento",
      description: "Como processar a folha?",
      prompt: "Explique o processo de fechamento e processamento da folha de pagamento mensal"
    },
    {
      icon: Zap,
      title: "Planejamento de Férias",
      description: "Como gerenciar férias?",
      prompt: "Como funciona o planejamento e controle de férias dos colaboradores?"
    },
    {
      icon: Code,
      title: "Gestão de Benefícios",
      description: "Como administrar benefícios?",
      prompt: "Qual o processo de gestão de benefícios (VT, VR, plano de saúde) dos colaboradores?"
    }
  ],

  'recursos humanos': [
    {
      icon: Sparkles,
      title: "Admissão de Colaboradores",
      description: "Quais documentos são necessários?",
      prompt: "Quais são os documentos necessários e etapas para admissão de novos colaboradores?"
    },
    {
      icon: BookOpen,
      title: "Folha de Pagamento",
      description: "Como processar a folha?",
      prompt: "Explique o processo de fechamento e processamento da folha de pagamento mensal"
    },
    {
      icon: Zap,
      title: "Planejamento de Férias",
      description: "Como gerenciar férias?",
      prompt: "Como funciona o planejamento e controle de férias dos colaboradores?"
    },
    {
      icon: Code,
      title: "Gestão de Benefícios",
      description: "Como administrar benefícios?",
      prompt: "Qual o processo de gestão de benefícios (VT, VR, plano de saúde) dos colaboradores?"
    }
  ],

  'financeiro': [
    {
      icon: Sparkles,
      title: "Contas a Pagar",
      description: "Como processar pagamentos?",
      prompt: "Como funciona o processo de contas a pagar? Qual o fluxo de aprovação?"
    },
    {
      icon: BookOpen,
      title: "Contas a Receber",
      description: "Como gerenciar recebimentos?",
      prompt: "Explique o processo de contas a receber e controle de inadimplência"
    },
    {
      icon: Zap,
      title: "Fluxo de Caixa",
      description: "Como controlar o caixa?",
      prompt: "Como realizar o controle e projeção do fluxo de caixa da empresa?"
    },
    {
      icon: Code,
      title: "Conciliação Cartões",
      description: "Como conciliar vendas?",
      prompt: "Como realizar a conciliação de vendas com cartões de crédito e débito?"
    }
  ],

  // Sugestões genéricas para departamentos não mapeados
  'default': [
    {
      icon: Sparkles,
      title: "Navegação no Sistema",
      description: "Como encontrar processos?",
      prompt: "Como navegar no sistema de Processos Digitais? Como encontro informações do meu departamento?"
    },
    {
      icon: BookOpen,
      title: "Glossário Corporativo",
      description: "Dúvidas sobre termos?",
      prompt: "Onde encontro o glossário corporativo? Como consultar significados de termos e siglas?"
    },
    {
      icon: Zap,
      title: "Sistemas da Empresa",
      description: "Quais sistemas utilizamos?",
      prompt: "Quais são os principais sistemas utilizados na empresa e para que servem?"
    },
    {
      icon: Code,
      title: "Estrutura Organizacional",
      description: "Como funciona a hierarquia?",
      prompt: "Como é a estrutura organizacional da empresa? Quais são os departamentos e suas funções?"
    }
  ]
};

// Função para normalizar nome do departamento e buscar sugestões
export const getSuggestionsByDepartment = (departmentName: string | null): ChatSuggestion[] => {
  if (!departmentName) {
    return chatSuggestionsByDepartment.default;
  }

  // Normalizar o nome do departamento (lowercase e sem acentos)
  const normalizedDepartment = departmentName
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Remove acentos

  // Buscar sugestões exatas primeiro
  if (chatSuggestionsByDepartment[normalizedDepartment]) {
    return chatSuggestionsByDepartment[normalizedDepartment];
  }

  // Buscar por variações comuns
  const departmentVariations: { [key: string]: string } = {
    'e commerce': 'ecommerce',
    'sao jose campos': 'cd',
    'cd operacoes': 'cd',
    'cd/operacoes': 'cd',
    'recursos humanos': 'rh',
    'recursos humanos (rh)': 'rh',
    'departamento pessoal (dp)': 'dp'
  };

  if (departmentVariations[normalizedDepartment]) {
    const mappedDept = departmentVariations[normalizedDepartment];
    if (chatSuggestionsByDepartment[mappedDept]) {
      return chatSuggestionsByDepartment[mappedDept];
    }
  }

  // Se não encontrou, retorna sugestões genéricas
  return chatSuggestionsByDepartment.default;
};