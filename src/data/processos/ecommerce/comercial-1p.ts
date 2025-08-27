import { ProcessoDetalhado } from '@/types/processo';
import { TrendingUp, Package, FileCheck, Megaphone, Store, Search, Target, AlertTriangle } from 'lucide-react';

export const analiseResultadosComerciais: ProcessoDetalhado = {
  id: 'COM-4.38',
  nome: 'Análise de Resultados Comerciais',
  descricao: 'Processo de análise e monitoramento dos resultados comerciais para tomada de decisões estratégicas',
  icon: TrendingUp,
  cor: 'bg-green-500',
  nivel: 'Tático',
  entrada: 'Dados de vendas diárias e total, relatórios de vendas e KPIs do Power BI',
  saida: 'Relatórios consolidados com insights acionáveis para decisões estratégicas',
  sistemas_utilizados: ['Power BI', 'Excel', 'VTEX'],
  tempo_execucao: '2-4 horas',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '4.38.1',
      nome: 'Visão Geral das Vendas',
      nivel: 'Operacional',
      ferramentas: ['Power BI', 'VTEX'],
      tarefas: [
        {
          id: '4.38.1.1',
          nome: 'Monitorar desempenho geral de vendas',
          passos: [
            'Acompanhar faturamento diário e total (R$)',
            'Monitorar volume de vendas (unidades)',
            'Comparar com períodos anteriores (mensal/trimestral/anual)',
            'Avaliar desempenho em relação à meta estabelecida'
          ]
        }
      ]
    },
    {
      id: '4.38.2',
      nome: 'Análise por Canal de Venda',
      nivel: 'Operacional',
      ferramentas: ['Power BI', 'Excel'],
      tarefas: [
        {
          id: '4.38.2.1',
          nome: 'Avaliar performance dos canais',
          passos: [
            'Comparar loja física com e-commerce e marketplace',
            'Avaliar faturamento por canal',
            'Avaliar margem por canal',
            'Avaliar ticket médio por canal'
          ]
        }
      ]
    },
    {
      id: '4.38.3',
      nome: 'Análise de Produtos e Categorias',
      nivel: 'Operacional',
      ferramentas: ['Power BI', 'VTEX'],
      tarefas: [
        {
          id: '4.38.3.1',
          nome: 'Análise de performance de itens',
          passos: [
            'Identificar produtos mais vendidos e menos vendidos',
            'Listar produtos com maior margem de lucro',
            'Analisar categorias (crescimento, retração, sazonalidade)',
            'Identificar SKUs com ruptura ou excesso de estoque'
          ]
        }
      ]
    },
    {
      id: '4.38.4',
      nome: 'Monitoramento de Indicadores (KPIs)',
      nivel: 'Operacional',
      ferramentas: ['Power BI', 'Excel'],
      tarefas: [
        {
          id: '4.38.4.1',
          nome: 'Acompanhar indicadores de performance',
          passos: [
            'Monitorar ticket médio',
            'Acompanhar taxa de conversão',
            'Avaliar margem de contribuição',
            'Calcular CMV (Custo da Mercadoria Vendida)',
            'Monitorar giro de estoque'
          ]
        }
      ]
    },
    {
      id: '4.38.5',
      nome: 'Análise de Tendências e Sazonalidade',
      nivel: 'Tático',
      ferramentas: ['Power BI', 'Excel'],
      tarefas: [
        {
          id: '4.38.5.1',
          nome: 'Observar padrões de comportamento',
          passos: [
            'Identificar picos de venda e períodos de baixa',
            'Avaliar impacto de campanhas e promoções',
            'Considerar eventos sazonais (Black Friday, Natal, etc.)'
          ]
        }
      ]
    },
    {
      id: '4.38.6',
      nome: 'Definição de Ações e Estratégias',
      nivel: 'Estratégico',
      ferramentas: ['Power BI', 'Excel'],
      tarefas: [
        {
          id: '4.38.6.1',
          nome: 'Ajustar estratégias comerciais',
          passos: [
            'Analisar o que funcionou e o que não funcionou',
            'Avaliar impacto das campanhas e ações comerciais',
            'Propor melhorias e próximos passos'
          ]
        }
      ]
    },
    {
      id: '4.38.7',
      nome: 'Análise de Resultados Power BI e Excel',
      nivel: 'Operacional',
      ferramentas: ['Power BI'],
      tarefas: [
        {
          id: '4.38.7.1',
          nome: 'Análise de Vendas no Power BI',
          passos: [
            'Acessar Power BI – Workspace Ecommerce',
            'Navegar nos painéis de análise',
            'Visualizar painel 1 – Resumo: acompanhamento do faturamento diário e total',
            'Visualizar painel 2 – Vendas x Metas: avaliação do desempenho frente aos objetivos',
            'Visualizar painel 3 – Performance de Vendas: comparativos entre canais'
          ]
        }
      ]
    },
    {
      id: '4.38.8',
      nome: 'Preenchimento da Planilha Excel',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'VTEX'],
      tarefas: [
        {
          id: '4.38.8.1',
          nome: 'Atualizar a planilha de diarização',
          passos: [
            'Acessar Planilha → Metas E-commerce GO',
            'Preencher com faturamento realizado extraído da VTEX',
            'Calcular % realizado sobre a meta',
            'Avaliar tendência de atingimento',
            'Atualizar vendas acumuladas e taxas de conversão',
            'Classificar status por farol (verde/amarelo/vermelho)'
          ]
        }
      ]
    }
  ]
};

export const gestaoEstoqueCentralizado: ProcessoDetalhado = {
  id: 'COM-4.39',
  nome: 'Gestão do Estoque Centralizado',
  descricao: 'Processo de gestão e otimização do estoque centralizado para maximizar performance comercial',
  icon: Package,
  cor: 'bg-blue-500',
  nivel: 'Tático',
  entrada: 'Dados atualizados de estoque no Mega e Power BI',
  saida: 'Estoque centralizado otimizado e ações comerciais alinhadas para alto desempenho',
  sistemas_utilizados: ['Power BI', 'Excel', 'Mega'],
  tempo_execucao: '1-2 horas',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '4.39.1',
      nome: 'Visão Geral do Estoque',
      nivel: 'Operacional',
      ferramentas: ['Power BI'],
      tarefas: [
        {
          id: '4.39.1.1',
          nome: 'Avaliar capacidade e ocupação',
          passos: [
            'Acessar Power BI "Estoque Centralizado"',
            'Comparar o espaço disponível vs ocupado'
          ]
        }
      ]
    },
    {
      id: '4.39.2',
      nome: 'Indicadores de Estoque',
      nivel: 'Operacional',
      ferramentas: ['Power BI', 'Excel'],
      tarefas: [
        {
          id: '4.39.2.1',
          nome: 'Monitorar giro, cobertura e ruptura de estoque',
          passos: [
            'Avaliar tempo médio de escoamento',
            'Identificar alertas de ruptura de estoque'
          ]
        },
        {
          id: '4.39.2.2',
          nome: 'Análise de Performance do Estoque',
          passos: [
            'Identificar produtos de baixa performance',
            'Localizar produtos com baixa rotatividade e alto estoque',
            'Avaliar impacto em campanhas promocionais'
          ]
        },
        {
          id: '4.39.2.3',
          nome: 'Identificação de Oportunidades e Problemas',
          passos: [
            'Criar kits, combos ou promoções para giro de estoque',
            'Usar Power BI e planilhas do time de compras para mapear estoque parado'
          ]
        }
      ]
    },
    {
      id: '4.39.3',
      nome: 'Planejamento de Compras',
      nivel: 'Tático',
      ferramentas: ['Power BI', 'Excel'],
      tarefas: [
        {
          id: '4.39.3.1',
          nome: 'Feedback para Compras',
          passos: [
            'Sugerir ações como kits, reposição automática e campanhas para giro',
            'Enviar feedback ao setor de compras',
            'Propor expansão de mix bem performado'
          ]
        }
      ]
    }
  ]
};

export const validacaoManutencaoCadastro: ProcessoDetalhado = {
  id: 'COM-4.40',
  nome: 'Validação e Manutenção do Cadastro de Produtos',
  descricao: 'Processo de validação e manutenção do cadastro de produtos para garantir consistência no catálogo',
  icon: FileCheck,
  cor: 'bg-orange-500',
  nivel: 'Operacional',
  entrada: 'Novos SKUs cadastrados e relatórios de divergência',
  saida: 'Cadastro de produtos consistente e pronto para exposição no site',
  sistemas_utilizados: ['Power BI', 'VTEX', 'Google Sheets'],
  tempo_execucao: '30-60 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '4.40.1',
      nome: 'Verificação de Novos Cadastros',
      nivel: 'Operacional',
      ferramentas: ['Power BI', 'VTEX'],
      tarefas: [
        {
          id: '4.40.1.1',
          nome: 'Validar informações dos SKUs',
          passos: [
            'Acessar Power BI "Novos Modelos"',
            'Abrir SKU na VTEX e validar fotos, descrições e preços',
            'Conferir grades completas, códigos EAN e referências',
            'Solicitar correções de divergências identificadas'
          ]
        }
      ]
    },
    {
      id: '4.40.2',
      nome: 'Manutenção Preventiva de Cadastro',
      nivel: 'Operacional',
      ferramentas: ['VTEX', 'Power BI'],
      tarefas: [
        {
          id: '4.40.2.1',
          nome: 'Revisar mensalmente o catálogo',
          passos: [
            'Identificar e retirar produtos com CMV elevado',
            'Corrigir preços e numerações incompletas',
            'Ajustar disponibilidade de estoque'
          ]
        }
      ]
    }
  ]
};

export const criacaoGestaoCampanhas: ProcessoDetalhado = {
  id: 'COM-4.41',
  nome: 'Criação e Gestão de Campanhas Comerciais',
  descricao: 'Processo de criação, configuração e gestão de campanhas comerciais para aumentar vendas',
  icon: Megaphone,
  cor: 'bg-purple-500',
  nivel: 'Tático',
  entrada: 'Calendário comercial, apostas comerciais, materiais de marketing (shooting, key visual)',
  saida: 'Campanhas ativas com alinhamento entre marketing e estoque',
  sistemas_utilizados: ['VTEX', 'Google Sheets', 'Deco Analytics', 'Photoshop'],
  tempo_execucao: '2-4 horas',
  frequencia: 'Semanal',
  subprocessos: [
    {
      id: '4.41.1',
      nome: 'Planejamento de Campanhas',
      nivel: 'Tático',
      ferramentas: ['Google Sheets', 'VTEX'],
      tarefas: [
        {
          id: '4.41.1.1',
          nome: 'Definir ações comerciais',
          passos: [
            'Registrar apostas por site',
            'Coordenar produtos com Visual Merchandising',
            'Preencher planilha do calendário de campanhas'
          ]
        }
      ]
    },
    {
      id: '4.41.2',
      nome: 'Montagem de Coleções e Promoções',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '4.41.2.1',
          nome: 'Configurar na VTEX',
          passos: [
            'Criar coleções temáticas para hotsite',
            'Selecionar itens do estoque centralizado para destaque',
            'Cadastrar promoções e cupons na VTEX conforme a campanha'
          ]
        }
      ]
    },
    {
      id: '4.41.3',
      nome: 'Monitoramento de Resultados',
      nivel: 'Operacional',
      ferramentas: ['Deco Analytics', 'Google Merchant'],
      tarefas: [
        {
          id: '4.41.3.1',
          nome: 'Avaliar desempenho',
          passos: [
            'Monitorar banners e campanhas ativas via Deco Analytics',
            'Analisar performance no Google Merchant',
            'Propor ajustes ao setor de compras'
          ]
        }
      ]
    },
    {
      id: '4.41.4',
      nome: 'Criação e Publicação de Banners',
      nivel: 'Operacional',
      ferramentas: ['Photoshop', 'VTEX', 'Deco Analytics'],
      tarefas: [
        {
          id: '4.41.4.1',
          nome: 'Produzir e disponibilizar banners de campanha',
          passos: [
            'Selecionar imagens (shooting e key visuals) alinhadas à campanha',
            'Solicitar aprovação ao Diretor de Arte da agência',
            'Publicar banners no site, hotsite ou seções específicas',
            'Garantir que links e redirecionamentos estejam corretos',
            'Monitorar performance dos banners via Deco Analytics'
          ]
        }
      ]
    }
  ]
};

export const manutencaoLojaVirtual: ProcessoDetalhado = {
  id: 'COM-4.42',
  nome: 'Manutenção da Loja Virtual',
  descricao: 'Processo de manutenção e otimização da loja virtual para maximizar conversão',
  icon: Store,
  cor: 'bg-indigo-500',
  nivel: 'Operacional',
  entrada: 'Produtos cadastrados, campanhas ativas, relatórios de vendas',
  saida: 'Loja virtual organizada, atualizada e otimizada para conversão',
  sistemas_utilizados: ['VTEX', 'Google Analytics', 'Deco'],
  tempo_execucao: '1-2 horas',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '4.42.1',
      nome: 'Verificação Diária do Site',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '4.42.1.1',
          nome: 'Conferir páginas e banners',
          passos: [
            'Validar funcionamento das vitrines, banners e mecânicas promocionais',
            'Checar links e evitar erros 404'
          ]
        }
      ]
    },
    {
      id: '4.42.2',
      nome: 'Atualização de Hotsites e Coleções',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '4.42.2.1',
          nome: 'Substituir itens de baixo giro',
          passos: [
            'Usar ranking de vendas para priorizar produtos de alta performance',
            'Atualizar coleções semanalmente'
          ]
        }
      ]
    },
    {
      id: '4.42.3',
      nome: 'Antecipação de Datas Comerciais',
      nivel: 'Tático',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '4.42.3.1',
          nome: 'Preparar vitrines sazonais',
          passos: [
            'Ajustar vitrines com antecedência para eventos comerciais'
          ]
        }
      ]
    },
    {
      id: '4.42.4',
      nome: 'Organização e Merchandising',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '4.42.4.1',
          nome: 'Ajustar ordenação e exibição',
          passos: [
            'Aplicar boas práticas de merchandising na VTEX',
            'Destacar produtos estratégicos nas buscas'
          ]
        }
      ]
    },
    {
      id: '4.42.5',
      nome: 'Testes de Busca e Categorias',
      nivel: 'Operacional',
      ferramentas: ['VTEX', 'Google Analytics'],
      tarefas: [
        {
          id: '4.42.5.1',
          nome: 'Monitorar termos buscados',
          passos: [
            'Testar pesquisa e verificar organização dos menus',
            'Solicitar correções quando necessário'
          ]
        }
      ]
    }
  ]
};

export const analiseConcorrencia: ProcessoDetalhado = {
  id: 'COM-4.43',
  nome: 'Análise da Concorrência',
  descricao: 'Processo de monitoramento e análise da concorrência para identificar oportunidades competitivas',
  icon: Search,
  cor: 'bg-red-500',
  nivel: 'Tático',
  entrada: 'Acesso aos sites concorrentes, relatórios de preços e sortimento',
  saida: 'Relatório de inteligência competitiva para decisões comerciais',
  sistemas_utilizados: ['Excel', 'Google Drive'],
  tempo_execucao: '1-2 horas',
  frequencia: 'Semanal',
  subprocessos: [
    {
      id: '4.43.1',
      nome: 'Monitoramento de Concorrentes',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Google Drive'],
      tarefas: [
        {
          id: '4.43.1.1',
          nome: 'Acompanhar ações do mercado',
          passos: [
            'Verificar promoções, novidades e produtos em destaque semanalmente',
            'Capturar prints de banners, preços e sortimento'
          ]
        }
      ]
    },
    {
      id: '4.43.2',
      nome: 'Comparação Estratégica',
      nivel: 'Tático',
      ferramentas: ['Excel'],
      tarefas: [
        {
          id: '4.43.2.1',
          nome: 'Avaliar competitividade',
          passos: [
            'Comparar preços, estoque e mix de produtos com os da Oscar',
            'Identificar oportunidades de ajuste de preços ou mix'
          ]
        }
      ]
    },
    {
      id: '4.43.3',
      nome: 'Comunicação Interna',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'Google Drive'],
      tarefas: [
        {
          id: '4.43.3.1',
          nome: 'Compartilhar resultados',
          passos: [
            'Consolidar dados e enviar relatório ao setor de compras'
          ]
        }
      ]
    }
  ]
};

export const ativacoesRedesSociais: ProcessoDetalhado = {
  id: 'COM-4.45',
  nome: 'Ativações com Redes Sociais, App e Vendas 3.0',
  descricao: 'Processo de integração e ativação de campanhas através de múltiplos canais digitais',
  icon: Target,
  cor: 'bg-pink-500',
  nivel: 'Tático',
  entrada: 'Novidades, campanhas e produtos estratégicos',
  saida: 'Produtos e campanhas divulgadas por múltiplos canais, com aumento de alcance',
  sistemas_utilizados: ['E-mail', 'WhatsApp', 'VTEX', 'Excel'],
  tempo_execucao: '1-2 horas',
  frequencia: 'Semanal',
  subprocessos: [
    {
      id: '4.45.1',
      nome: 'Integração com Vendas 3.0',
      nivel: 'Operacional',
      ferramentas: ['E-mail', 'WhatsApp'],
      tarefas: [
        {
          id: '4.45.1.1',
          nome: 'Enviar informações para lojas',
          passos: [
            'Informar semanalmente o Líder 3.0 sobre novidades e campanhas'
          ]
        }
      ]
    },
    {
      id: '4.45.2',
      nome: 'CRM e Ads',
      nivel: 'Operacional',
      ferramentas: ['Excel', 'VTEX'],
      tarefas: [
        {
          id: '4.45.2.1',
          nome: 'Selecionar SKUs para marketing',
          passos: [
            'Repassar à equipe de Ads produtos para push e e-mail marketing'
          ]
        }
      ]
    },
    {
      id: '4.45.3',
      nome: 'Ativações no App',
      nivel: 'Operacional',
      ferramentas: ['VTEX', 'Excel'],
      tarefas: [
        {
          id: '4.45.3.1',
          nome: 'Criar campanhas exclusivas',
          passos: [
            'Planejar ações no app com foco em engajamento e conversão'
          ]
        }
      ]
    },
    {
      id: '4.45.4',
      nome: 'Marketing e Influenciadores',
      nivel: 'Operacional',
      ferramentas: ['E-mail', 'WhatsApp'],
      tarefas: [
        {
          id: '4.45.4.1',
          nome: 'Fornecer conteúdo',
          passos: [
            'Compartilhar campanhas e cupons exclusivos com marketing e Haus Creators'
          ]
        }
      ]
    }
  ]
};

export const prevencaoCorrecaoErros: ProcessoDetalhado = {
  id: 'COM-4.46',
  nome: 'Prevenção e Correção de Erros',
  descricao: 'Processo de identificação, prevenção e correção de erros técnicos e de integração',
  icon: AlertTriangle,
  cor: 'bg-yellow-500',
  nivel: 'Operacional',
  entrada: 'Ocorrências de erros técnicos e de integração',
  saida: 'Plataforma funcionando sem erros e com dados consistentes',
  sistemas_utilizados: ['VTEX', 'Mega'],
  tempo_execucao: '30-60 minutos',
  frequencia: 'Conforme necessário',
  subprocessos: [
    {
      id: '4.46.1',
      nome: 'Verificação de Erros Técnicos',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '4.46.1.1',
          nome: 'Corrigir ou acionar suporte',
          passos: [
            'Resolver falhas no site VTEX',
            'Acionar suporte quando necessário'
          ]
        }
      ]
    },
    {
      id: '4.46.2',
      nome: 'Falhas de Integração',
      nivel: 'Operacional',
      ferramentas: ['VTEX', 'Mega'],
      tarefas: [
        {
          id: '4.46.2.1',
          nome: 'Validar preços e estoque',
          passos: [
            'Garantir consistência entre ERP e VTEX',
            'Reprocessar dados em caso de divergência'
          ]
        }
      ]
    }
  ]
};

export const processosComercialUmP = [
  analiseResultadosComerciais,
  gestaoEstoqueCentralizado,
  validacaoManutencaoCadastro,
  criacaoGestaoCampanhas,
  manutencaoLojaVirtual,
  analiseConcorrencia,
  ativacoesRedesSociais,
  prevencaoCorrecaoErros
];
