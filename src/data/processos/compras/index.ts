import { ProcessoDetalhado } from '@/types/processo';
import { 
  ShoppingCart, 
  Calendar, 
  FileText, 
  Package, 
  Truck, 
  ArrowLeftRight, 
  DollarSign, 
  RotateCcw, 
  AlertTriangle, 
  Receipt, 
  Megaphone, 
  Camera, 
  BarChart3, 
  FileCheck, 
  Handshake, 
  RefreshCw, 
  TrendingUp, 
  Users, 
  Eye, 
  Target, 
  ClipboardList, 
  Presentation,
  Layers, 
  Palette, 
  Search, 
  MapPin
} from 'lucide-react';

export const processosCompras: ProcessoDetalhado[] = [
  {
    id: "COM-07.1",
    nome: "Planejamento de Compras",
    descricao: "Planejamento semestral e anual de compras baseado em análises de vendas, estoque e metas comerciais",
    nivel: "Tático",
    icon: Calendar,
    cor: "bg-blue-500",
    entrada: "Relatórios de vendas por loja, marca e categoria (Power BI), estoque atual por família, cluster e loja, Metas comerciais e orçamento por bandeira e com histórico de compras anteriores",
    saida: "Planejamento validado por marca e categoria, com verba alocada, previsão de pedidos e metas comerciais por loja",
    sistemas_utilizados: ["Power BI", "Excel", "E-mail"],
    subprocessos: [
      {
        id: "7.1.1",
        nome: "Coleta e análise de dados para planejamento",
        nivel: "Tático",
        ferramentas: ["Power BI", "Excel"],
        tarefas: [
          {
            id: "7.1.1.1",
            nome: "Coleta de informações para planejamento semestral e anual",
            passos: [
              "Baixar relatórios de venda por loja e por marca no Power BI",
              "Separar dados por semestre e por bandeira",
              "Consolidar vendas realizadas, estoques e metas em planilhas comparativas"
            ]
          },
          {
            id: "7.1.1.2",
            nome: "Cálculo da previsão de compra",
            passos: [
              "Calcular representatividade da marca por loja e aplicar sobre as metas",
              "Preencher planilha com previsão de compra por marca, família e categoria",
              "Estimar compra em valor e pares"
            ]
          }
        ]
      },
      {
        id: "7.1.2",
        nome: "Definição de sortimento e categorias",
        nivel: "Tático",
        ferramentas: ["Excel"],
        tarefas: [
          {
            id: "7.1.2.1",
            nome: "Análise de portfólio e proposta de sortimento",
            passos: [
              "Avaliar mix de produtos por família, histórico de giro e cobertura ideal",
              "Propor exclusões ou inclusões de produtos com base na performance e na sazonalidade"
            ]
          },
          {
            id: "7.1.2.2",
            nome: "Atribuição por loja/cluster",
            passos: [
              "Distribuir metas e sortimento entre lojas e clusters, conforme o perfil de vendas",
              "Aplicar crescimento proporcional por loja e definir foco por categoria"
            ]
          }
        ]
      },
      {
        id: "7.1.3",
        nome: "Planejamento de pedidos por fornecedor",
        nivel: "Tático",
        ferramentas: ["Excel"],
        tarefas: [
          {
            id: "7.1.3.1",
            nome: "Elaboração do planejamento por marca",
            passos: [
              "Identificar coleções disponíveis pelos fornecedores",
              "Planejar pedidos baseados em verba disponível e prioridades definidas",
              "Inserir informações de valor, número de pares, modelos, famílias, coleções e prazos em planilha de controle"
            ]
          }
        ]
      },
      {
        id: "7.1.4",
        nome: "Validação e aprovação do planejamento",
        nivel: "Tático",
        ferramentas: ["E-mail"],
        tarefas: [
          {
            id: "7.1.4.1",
            nome: "Revisão e alinhamento interno",
            passos: [
              "Apresentar o planejamento em reunião com time de compras, gerência e financeiro",
              "Ajustar valores e combinações conforme feedbacks"
            ]
          },
          {
            id: "7.1.4.2",
            nome: "Compartilhamento do planejamento com áreas correlatas",
            passos: [
              "Enviar versão final do planejamento para equipes de marketing, VM, estúdio e operações"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.2",
    nome: "Programação de Pedidos",
    descricao: "Programação e montagem de pedidos baseados no planejamento de compras",
    nivel: "Tático",
    icon: ShoppingCart,
    cor: "bg-green-500",
    entrada: "Planejamento de compras por marca, categoria e verba disponível, calendário de lançamentos e coleções dos fornecedores, informações de cluster e necessidade de reposição por loja",
    saida: "Pedido programado, distribuído por loja e enviado ao fornecedor com registro completo na planilha de controle",
    sistemas_utilizados: ["Excel", "Power BI", "E-mail", "Portal do Fornecedor"],
    subprocessos: [
      {
        id: "7.2.1",
        nome: "Seleção de produtos para o pedido",
        nivel: "Tático",
        ferramentas: ["Portal do Fornecedor", "Excel"],
        tarefas: [
          {
            id: "7.2.1.1",
            nome: "Análise de coleção e escolha de produtos",
            passos: [
              "Acessar os catálogos ou sites das marcas e visualizar as coleções disponíveis",
              "Selecionar os modelos com base na estratégia comercial, cobertura e metas da categoria",
              "Definir a grade de numeração, quantidade por modelo e valores estimados"
            ]
          }
        ]
      },
      {
        id: "7.2.2",
        nome: "Distribuição e composição do pedido",
        nivel: "Tático",
        ferramentas: ["Excel", "Power BI"],
        tarefas: [
          {
            id: "7.2.2.1",
            nome: "Montagem da distribuição por loja",
            passos: [
              "Analisar histórico de venda, giro e representatividade por loja",
              "Realizar distribuição dos pares de acordo com os clusters definidos",
              "Preencher planilha com informações de modelo, quantidade, custo, loja e prazo"
            ]
          }
        ]
      },
      {
        id: "7.2.3",
        nome: "Envio e controle do pedido",
        nivel: "Operacional",
        ferramentas: ["E-mail", "Excel"],
        tarefas: [
          {
            id: "7.2.3.1",
            nome: "Envio do pedido ao fornecedor",
            passos: [
              "Enviar planilha preenchida para o fornecedor via e-mail ou portal específico",
              "Solicitar retorno com confirmação dos modelos, valores e prazos"
            ]
          },
          {
            id: "7.2.3.2",
            nome: "Registro e controle interno do pedido",
            passos: [
              "Registrar o pedido na planilha de planejamento geral",
              "Incluir marca, modelo, valor, pares, ordem de compra, prazo de entrega e status",
              "Incluir solicitação de amostras (se necessário) no mesmo processo"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.3",
    nome: "Emissão e Envio de Pedido de Compras",
    descricao: "Emissão formal e envio de pedidos de compras no sistema",
    nivel: "Operacional",
    icon: FileText,
    cor: "bg-purple-500",
    entrada: "Pedido aprovado e formatado em planilha, dados de produtos e condições comerciais definidas",
    saida: "Pedido registrado no sistema Mega, com planilha de apoio validada e fornecedor ciente da entrega",
    sistemas_utilizados: ["Mega", "Excel", "E-mail"],
    subprocessos: [
      {
        id: "7.3.1",
        nome: "Cadastro do pedido no sistema",
        nivel: "Operacional",
        ferramentas: ["Mega"],
        tarefas: [
          {
            id: "7.3.1.1",
            nome: "Lançamento manual ou via planilha no Mega",
            passos: [
              "Realizar digitação do pedido no sistema Mega, um a um, devido a falhas na importação automatizada",
              "Caso a planilha esteja correta, importar via módulo de compras no Mega (em fase de correção pela TI)",
              "Verificar se os produtos estão cadastrados no sistema antes de incluir os itens"
            ]
          }
        ]
      },
      {
        id: "7.3.2",
        nome: "Acompanhamento e correções",
        nivel: "Operacional",
        ferramentas: ["Mega", "Excel"],
        tarefas: [
          {
            id: "7.3.2.1",
            nome: "Ajustes de pedido e erros no sistema",
            passos: [
              "Monitorar o status de aceite do pedido no sistema",
              "Caso o fornecedor não envie a planilha de cadastro corretamente, realizar correções",
              "Conversão para CSV e reimportação manual",
              "Corrigir erros de digitação, cadastro incompleto ou divergências"
            ]
          }
        ]
      },
      {
        id: "7.3.3",
        nome: "Envio e confirmação com fornecedor",
        nivel: "Operacional",
        ferramentas: ["E-mail"],
        tarefas: [
          {
            id: "7.3.3.1",
            nome: "Comunicação e validação do pedido",
            passos: [
              "Confirmar com o fornecedor via e-mail o envio e aceite do pedido",
              "Enviar planilha com resumo da distribuição e acompanhar retorno com prazos",
              "Acompanhar possível envio de amostras"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.4",
    nome: "Cadastro de Produto",
    descricao: "Cadastro de novos produtos no sistema após confirmação do pedido",
    nivel: "Operacional",
    icon: Package,
    cor: "bg-orange-500",
    entrada: "Pedido fechado e confirmado com fornecedor, planilha de cadastro enviada pela marca (modelo, cor, grade, códigos, EAN, etc.)",
    saida: "Produtos cadastrados no Mega, aptos para recebimento e faturamento",
    sistemas_utilizados: ["Excel", "E-mail", "Mega"],
    subprocessos: [
      {
        id: "7.4.1",
        nome: "Verificação e preparação da planilha",
        nivel: "Operacional",
        ferramentas: ["Excel"],
        tarefas: [
          {
            id: "7.4.1.1",
            nome: "Conferência e ajuste do cadastro",
            passos: [
              "Conferir se os produtos da planilha já existem no sistema",
              "Corrigir formatação (colunas obrigatórias, padrão de preenchimento)",
              "Converter planilha para CSV e salvar com nome adequado"
            ]
          }
        ]
      },
      {
        id: "7.4.2",
        nome: "Envio para cadastro no sistema",
        nivel: "Operacional",
        ferramentas: ["E-mail", "Mega"],
        tarefas: [
          {
            id: "7.4.2.1",
            nome: "Cadastro via Mega",
            passos: [
              "Enviar a planilha para o time de cadastro do e-commerce (para produtos do site)",
              "Caso o produto seja para loja física, lançar diretamente no Mega ou via time responsável",
              "Aguardar confirmação do cadastro para liberar o pedido"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.5",
    nome: "Agendamento e Recebimento de Mercadorias",
    descricao: "Controle de agendamento e recebimento de mercadorias nos centros de distribuição",
    nivel: "Operacional",
    icon: Truck,
    cor: "bg-cyan-500",
    entrada: "Notas fiscais enviadas pelos fornecedores via e-mail, pedidos aprovados e lançados no sistema e controle de datas e janelas de recebimento por CD",
    saida: "Agendamentos realizados, fornecedores orientados e entregas programadas conforme a capacidade dos CDs",
    sistemas_utilizados: ["Excel", "E-mail", "Mega"],
    subprocessos: [
      {
        id: "7.5.1",
        nome: "Solicitação e controle de agendamento",
        nivel: "Operacional",
        ferramentas: ["E-mail", "Excel"],
        tarefas: [
          {
            id: "7.5.1.1",
            nome: "Recebimento de e-mails dos fornecedores com notas fiscais",
            passos: [
              "Fornecedor envia as NFs por e-mail solicitando agendamento de entrega",
              "Planilha de controle e agendamentos é atualizada com data, marca, número da NF e volume de caixas"
            ]
          },
          {
            id: "7.5.1.2",
            nome: "Verificação de disponibilidade e agendamento",
            passos: [
              "Verificar janelas disponíveis no CD (São José - 010, Carioca, Paquetá e Gaston - 301)",
              "Preencher planilha com as informações do agendamento",
              "Enviar confirmação por e-mail ao fornecedor com a data autorizada"
            ]
          }
        ]
      },
      {
        id: "7.5.2",
        nome: "Acompanhamento da entrega",
        nivel: "Operacional",
        ferramentas: ["Excel", "E-mail"],
        tarefas: [
          {
            id: "7.5.2.1",
            nome: "Controle de entregas previstas",
            passos: [
              "Acompanhar a entrega conforme o cronograma",
              "Verificar divergências entre o agendado e o efetivamente entregue",
              "Reportar falhas ou atrasos ao fornecedor e/ou ao time logístico"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.6",
    nome: "Distribuição de Produtos aos CDs",
    descricao: "Planejamento e execução da distribuição de produtos recebidos para os centros de distribuição",
    nivel: "Operacional",
    icon: ArrowLeftRight,
    cor: "bg-red-500",
    entrada: "Produtos recebidos ou agendados para entrega, planejamento de distribuição por loja, cluster e venda histórica",
    saida: "Produtos recebidos corretamente e encaminhados aos destinos (lojas) conforme planejamento logístico",
    sistemas_utilizados: ["Excel", "E-mail", "Power BI", "Mega"],
    subprocessos: [
      {
        id: "7.6.1",
        nome: "Planejamento de distribuição",
        nivel: "Operacional",
        ferramentas: ["Power BI", "Excel"],
        tarefas: [
          {
            id: "7.6.1.1",
            nome: "Análise de sortimento e giro",
            passos: [
              "Verificar dados de venda (sell-out), histórico e cluster de lojas",
              "Validar grade e modelo dos produtos recebidos",
              "Montar a planilha de distribuição conforme cross-docking ou sólido"
            ]
          }
        ]
      },
      {
        id: "7.6.2",
        nome: "Envio da distribuição ao CD",
        nivel: "Operacional",
        ferramentas: ["E-mail"],
        tarefas: [
          {
            id: "7.6.2.1",
            nome: "Compartilhamento com o CD para separação",
            passos: [
              "Enviar planilha de distribuição para o CD via e-mail",
              "Instruir o CD sobre a separação e envio conforme lojas e prazos definidos"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.7",
    nome: "Remanejamento de Produtos entre Lojas",
    descricao: "Redistribuição de produtos entre lojas baseada em análises de giro e cobertura",
    nivel: "Tático",
    icon: RefreshCw,
    cor: "bg-indigo-500",
    entrada: "Relatórios de giro de estoque, cobertura e performance por loja, chamados via TopDesk e análises de cobertura",
    saida: "Produtos redistribuídos entre lojas conforme análise de giro e cobertura",
    sistemas_utilizados: ["Power BI", "Excel", "TopDesk", "Mega"],
    subprocessos: [
      {
        id: "7.7.1",
        nome: "Análise de necessidade de remanejamento",
        nivel: "Tático",
        ferramentas: ["Power BI", "TopDesk"],
        tarefas: [
          {
            id: "7.7.1.1",
            nome: "Levantamento de lojas com giro zero ou grade furada",
            passos: [
              "Acessar Power BI e identificar produtos com baixo giro",
              "Consultar chamados das lojas (TopDesk) e validar necessidades"
            ]
          },
          {
            id: "7.7.1.2",
            nome: "Planejamento do remanejo",
            passos: [
              "Elaborar plano de remanejamento por SKU: loja de origem, loja de destino, quantidade",
              "Validar com os gerentes das lojas envolvidas"
            ]
          }
        ]
      },
      {
        id: "7.7.2",
        nome: "Execução do remanejo",
        nivel: "Operacional",
        ferramentas: ["Mega"],
        tarefas: [
          {
            id: "7.7.2.1",
            nome: "Lançamento no sistema Mega",
            passos: [
              "Inserir os remanejamentos manualmente no Mega, loja por loja",
              "Acompanhar status de execução do remanejo com as lojas"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.8",
    nome: "Remarcação de Preço",
    descricao: "Alteração de preços de produtos conforme estratégia comercial ou correções de custo",
    nivel: "Operacional",
    icon: DollarSign,
    cor: "bg-yellow-500",
    entrada: "Solicitação do comprador ou estratégia comercial e as divergências de preço com fornecedor ou alteração de mercado",
    saida: "Preços atualizados no sistema conforme estratégia comercial ou correções de custo",
    sistemas_utilizados: ["Mega", "Excel", "E-mail"],
    subprocessos: [
      {
        id: "7.8.1",
        nome: "Preparação e simulação de remarcação",
        nivel: "Operacional",
        ferramentas: ["Mega", "Excel"],
        tarefas: [
          {
            id: "7.8.1.1",
            nome: "Exportação da planilha de preços",
            passos: [
              "Exportar planilha no Mega com os produtos a serem alterados",
              "Aplicar fórmulas no Excel (ex: PROCV) para simular os novos preços"
            ]
          },
          {
            id: "7.8.1.2",
            nome: "Validação da nova precificação",
            passos: [
              "Validar margem, impacto de CMV e competitividade com a equipe",
              "Aprovação do gestor responsável"
            ]
          }
        ]
      },
      {
        id: "7.8.2",
        nome: "Execução da remarcação",
        nivel: "Operacional",
        ferramentas: ["Mega"],
        tarefas: [
          {
            id: "7.8.2.1",
            nome: "Reimportação da planilha no sistema",
            passos: [
              "Importar a planilha no Mega com os novos preços",
              "Atribuição de novos STATUS aos produtos (FL, FL2, NORMAL)",
              "Verificar se os preços foram atualizados corretamente nos PDVs e no e-commerce"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.9",
    nome: "Devolução e Indenização de Produtos",
    descricao: "Tratamento de produtos com defeito através de devoluções ou indenizações",
    nivel: "Operacional",
    icon: RotateCcw,
    cor: "bg-pink-500",
    entrada: "Produtos com defeito identificados por loja ou CD, acordo comercial ou erro no pedido/faturamento",
    saida: "Produtos defeituosos devidamente devolvidos ou indenizados, com acordo registrado e tratativas finalizadas",
    sistemas_utilizados: ["E-mail", "Excel", "TopDesk", "Mega"],
    subprocessos: [
      {
        id: "7.9.1",
        nome: "Avaliação e autorização de devolução",
        nivel: "Operacional",
        ferramentas: ["E-mail", "TopDesk"],
        tarefas: [
          {
            id: "7.9.1.1",
            nome: "Solicitação via e-mail ou task",
            passos: [
              "Loja ou CD notifica o time de Compras por e-mail/task sobre o produto com defeito",
              "Compras avalia se o item será descartado, indenizado ou devolvido"
            ]
          },
          {
            id: "7.9.1.2",
            nome: "Aprovação e comunicação com o fornecedor",
            passos: [
              "Enviar e-mail com detalhes do defeito para o fornecedor",
              "Aguardar aprovação para indenização ou coleta",
              "Solicitar emissão de NF de devolução pela loja"
            ]
          }
        ]
      },
      {
        id: "7.9.2",
        nome: "Logística de devolução e registro",
        nivel: "Operacional",
        ferramentas: ["Excel", "E-mail"],
        tarefas: [
          {
            id: "7.9.2.1",
            nome: "Consolidação e envio para coleta (quando necessário)",
            passos: [
              "Acompanhar o envio de pares defeituosos para o CD (ex: Cubera Rio)",
              "Consolidar volumes e autorizar coleta para devoluções maiores"
            ]
          },
          {
            id: "7.9.2.2",
            nome: "Registro e compensação financeira",
            passos: [
              "Controlar valores de indenização ou trocas",
              "Acordar forma de compensação: desconto em próximas compras ou reembolso"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.10",
    nome: "Gestão de Despesas",
    descricao: "Controle e aprovação de despesas relacionadas ao departamento de compras",
    nivel: "Operacional",
    icon: Receipt,
    cor: "bg-teal-500",
    entrada: "Notas fiscais e boletos recebidos por e-mail de fornecedores e planilha de controle de despesas",
    saida: "Despesas cadastradas, aprovadas e pagas conforme fluxo de autorização",
    sistemas_utilizados: ["E-mail", "Excel", "Mega"],
    subprocessos: [
      {
        id: "7.10.1",
        nome: "Controle e registro da despesa",
        nivel: "Operacional",
        ferramentas: ["E-mail", "Excel", "Mega"],
        tarefas: [
          {
            id: "7.10.1.1",
            nome: "Recebimento e organização dos documentos",
            passos: [
              "Notas e boletos chegam por e-mail e são arquivados em pastas específicas",
              "Informações são inseridas manualmente em planilha de controle individual"
            ]
          },
          {
            id: "7.10.1.2",
            nome: "Cadastro da despesa no Mega",
            passos: [
              "Lançamento da despesa no Mega com os dados: fornecedor, valor, vencimento, natureza da despesa",
              "Despesa é visualizada pelo financeiro diretamente no sistema"
            ]
          }
        ]
      },
      {
        id: "7.10.2",
        nome: "Validação e encaminhamento para pagamento",
        nivel: "Operacional",
        ferramentas: ["E-mail", "Mega"],
        tarefas: [
          {
            id: "7.10.2.1",
            nome: "Aprovação pelo diretor responsável",
            passos: [
              "Envio de print ou planilha por e-mail ou sistema interno para validação do gestor (ex: Night)",
              "Acompanhamento até aprovação da despesa"
            ]
          },
          {
            id: "7.10.2.2",
            nome: "Pagamento via financeiro",
            passos: [
              "Após validação, o financeiro realiza o pagamento da despesa e efetua baixa no sistema"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.11",
    nome: "Gestão de Campanhas e Ações de Marketing",
    descricao: "Planejamento e execução de campanhas comerciais em datas sazonais",
    nivel: "Tático",
    icon: Megaphone,
    cor: "bg-emerald-500",
    entrada: "Calendário de datas comerciais (ex: Dia das Mães, Namorados), propostas de marketing e verbas disponíveis",
    saida: "Campanha de vendas ativada com produtos definidos, preços validados e comunicação realizada",
    sistemas_utilizados: ["E-mail", "Excel", "Mega", "TopDesk"],
    subprocessos: [
      {
        id: "7.11.1",
        nome: "Aprovação de campanhas",
        nivel: "Tático",
        ferramentas: ["E-mail"],
        tarefas: [
          {
            id: "7.11.1.1",
            nome: "Análise e validação da proposta de marketing",
            passos: [
              "Recebimento da proposta de campanha do time de marketing",
              "Avaliação de mecânica, produtos envolvidos e impacto financeiro",
              "Aprovação ou solicitação de ajustes"
            ]
          }
        ]
      },
      {
        id: "7.11.2",
        nome: "Planejamento de execução",
        nivel: "Tático",
        ferramentas: ["Excel", "Mega", "TopDesk"],
        tarefas: [
          {
            id: "7.11.2.1",
            nome: "Seleção e liberação de produtos da campanha",
            passos: [
              "Escolha dos produtos (saldos, lançamentos ou destaques)",
              "Inclusão de informações em planilhas (valor, grade, pares, distribuição)"
            ]
          },
          {
            id: "7.11.2.2",
            nome: "Ativação da campanha",
            passos: [
              "Comunicação com lojas e CDs sobre os produtos e estratégias da campanha",
              "Lançamento de promoções no sistema (combo, FL, FL2)",
              "Acompanhamento do início da campanha e ajustes conforme desempenho"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.12",
    nome: "Gestão de Produtos para Shooting e Influenciadores",
    descricao: "Seleção e controle de produtos destinados a campanhas de marketing e influenciadores",
    nivel: "Tático",
    icon: Camera,
    cor: "bg-violet-500",
    entrada: "Briefing do marketing com demanda de produtos para campanhas ou influenciadores, planejamento visual (KV, cronograma de produção)",
    saida: "Produtos recebidos, utilizados em ações de marketing e devolvidos ou direcionados conforme necessidade",
    sistemas_utilizados: ["Excel", "E-mail", "Mega"],
    subprocessos: [
      {
        id: "7.12.1",
        nome: "Seleção e remanejo de produtos",
        nivel: "Tático",
        ferramentas: ["Excel", "E-mail"],
        tarefas: [
          {
            id: "7.12.1.1",
            nome: "Escolha dos produtos para shooting/influência",
            passos: [
              "Recebimento de link ou planilha do marketing com prazos e especificações",
              "Seleção de produtos e consulta de disponibilidade por grade e numeração (ex: numeração 37 feminina)",
              "Solicitação de remanejamento da loja para o CD"
            ]
          }
        ]
      },
      {
        id: "7.12.2",
        nome: "Controle e retorno dos produtos",
        nivel: "Operacional",
        ferramentas: ["Mega"],
        tarefas: [
          {
            id: "7.12.2.1",
            nome: "Recebimento e preparação para o shooting",
            passos: [
              "Produtos são conferidos no CD e separados para uso",
              "Montagem do kit conforme estratégia e briefing",
              "Após uso, retorno das amostras para estoque ou destinação específica"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.13",
    nome: "Cobertura Mensal e Análise de Estoque",
    descricao: "Análise mensal da cobertura de estoque por família e loja",
    nivel: "Tático",
    icon: BarChart3,
    cor: "bg-slate-500",
    entrada: "Relatórios de estoque, vendas e pedidos por loja, marca e família, metas de cobertura por tipo de produto",
    saida: "Relatório de cobertura mensal por família e loja, com base para tomada de decisões de reposição, remanejamento e campanha",
    sistemas_utilizados: ["Power BI", "Excel"],
    subprocessos: [
      {
        id: "7.13.1",
        nome: "Coleta e consolidação de dados",
        nivel: "Tático",
        ferramentas: ["Power BI"],
        tarefas: [
          {
            id: "7.13.1.1",
            nome: "Puxar relatórios no Power BI e sistemas internos",
            passos: [
              "Relatórios de estoque atual, vendas do mês, pedidos programados e famílias compradas",
              "Consolidação por loja, por marca e por família"
            ]
          }
        ]
      },
      {
        id: "7.13.2",
        nome: "Cálculo da cobertura",
        nivel: "Tático",
        ferramentas: ["Excel"],
        tarefas: [
          {
            id: "7.13.2.1",
            nome: "Análise da relação estoque + compra vs. venda prevista",
            passos: [
              "Soma de estoque atual + compras futuras e divisão pela projeção de venda do mês",
              "Análise por família e por loja (meta ideal: ex. 3.3x)",
              "Identificação de desvios e necessidade de ação"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.14",
    nome: "Fechamento de Consignados",
    descricao: "Apuração e fechamento mensal de vendas consignadas",
    nivel: "Operacional",
    icon: FileCheck,
    cor: "bg-rose-500",
    entrada: "Relatórios de vendas por loja e por grupo (Power BI), mapas de notas e faturamentos recebidos via sistema",
    saida: "Planilha de fechamento de consignados preenchida e enviada ao financeiro com base em vendas do período",
    sistemas_utilizados: ["Power BI", "Excel", "Mega"],
    subprocessos: [
      {
        id: "7.14.1",
        nome: "Coleta de dados do período",
        nivel: "Operacional",
        ferramentas: ["Power BI"],
        tarefas: [
          {
            id: "7.14.1.1",
            nome: "Extração de dados via Power BI",
            passos: [
              "Acessar mapa de vendas de consignados",
              "Baixar relatórios filtrando por mês, loja e grupo de produtos"
            ]
          }
        ]
      },
      {
        id: "7.14.2",
        nome: "Apuração e repasse ao financeiro",
        nivel: "Operacional",
        ferramentas: ["Excel"],
        tarefas: [
          {
            id: "7.14.2.1",
            nome: "Cálculo e preenchimento da planilha de repasse",
            passos: [
              "Consolidação dos dados em planilha de fechamento (criada pelo financeiro)",
              "Agrupamento por marca, loja, grupo e bandeira",
              "Envio ao financeiro com valores a serem pagos"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.15",
    nome: "Negociação Financeira com Fornecedores",
    descricao: "Negociação de ajustes financeiros e resolução de divergências com fornecedores",
    nivel: "Tático",
    icon: Handshake,
    cor: "bg-amber-500",
    entrada: "Divergências de preço ou cobrança identificadas em pedidos ou notas fiscais, acordos comerciais pendentes de formalização, indicadores de margem, volume e metas por fornecedor",
    saida: "Ajustes financeiros formalizados e divergências resolvidas, com impactos controlados",
    sistemas_utilizados: ["E-mail", "Excel", "Mega"],
    subprocessos: [
      {
        id: "7.15.1",
        nome: "Identificação da divergência ou oportunidade",
        nivel: "Tático",
        ferramentas: ["Excel", "Mega"],
        tarefas: [
          {
            id: "7.15.1.1",
            nome: "Verificação de inconsistências",
            passos: [
              "Verificação de notas com valores incorretos, ausência de desconto ou erro de cobrança",
              "Identificação de boletos com valores acima do acordado ou sem os ajustes esperados"
            ]
          },
          {
            id: "7.15.1.2",
            nome: "Levantamento de argumentos e histórico de compra",
            passos: [
              "Analisar volume comprado, margem obtida, prazo e performance do fornecedor",
              "Preparar justificativa comercial e financeira para negociação"
            ]
          }
        ]
      },
      {
        id: "7.15.2",
        nome: "Negociação com fornecedor",
        nivel: "Tático",
        ferramentas: ["E-mail", "Excel"],
        tarefas: [
          {
            id: "7.15.2.1",
            nome: "Proposição de ajuste",
            passos: [
              "Envio de e-mail com detalhamento da divergência e proposta de desconto, reembolso ou compensação",
              "Registro das tratativas e acordos via planilha ou sistema"
            ]
          },
          {
            id: "7.15.2.2",
            nome: "Alinhamento com financeiro e áreas impactadas",
            passos: [
              "Informar o time financeiro sobre os acordos fechados para compensações futuras",
              "Garantir que os pagamentos estejam alinhados ao que foi renegociado"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.16",
    nome: "Gestão de Sortimento e Reposição de Produtos",
    descricao: "Gerenciamento contínuo do sortimento e reposição baseada em performance de vendas",
    nivel: "Tático",
    icon: TrendingUp,
    cor: "bg-sky-500",
    entrada: "Relatórios de giro de estoque, vendas e cobertura por loja; Feedbacks operacionais e metas comerciais",
    saida: "Sortimento atualizado, com estoque adequado por loja e reposições alinhadas à demanda",
    sistemas_utilizados: ["Power BI", "Excel", "Mega", "E-mail"],
    subprocessos: [
      {
        id: "7.16.1",
        nome: "Análise de performance por SKU e loja",
        nivel: "Tático",
        ferramentas: ["Power BI", "Excel"],
        tarefas: [
          {
            id: "7.16.1.1",
            nome: "Avaliação da cobertura e ruptura",
            passos: [
              "Acesso ao Power BI para analisar vendas, estoque e cobertura por SKU",
              "Identificação de produtos com ruptura ou estoque crítico"
            ]
          },
          {
            id: "7.16.1.2",
            nome: "Recomendação de ajustes no sortimento",
            passos: [
              "Propor reposição ou retirada de produtos conforme performance",
              "Atualizar planilhas de sortimento por cluster e loja"
            ]
          }
        ]
      },
      {
        id: "7.16.2",
        nome: "Reposição e acompanhamento",
        nivel: "Operacional",
        ferramentas: ["Excel", "E-mail"],
        tarefas: [
          {
            id: "7.16.2.1",
            nome: "Geração de pedidos de reposição",
            passos: [
              "Montar pedido de reposição com base na cobertura e curva de giro",
              "Preencher planilha com dados: SKU, quantidade, destino, fornecedor"
            ]
          },
          {
            id: "7.16.2.2",
            nome: "Monitoramento das entregas e follow-up",
            passos: [
              "Acompanhar status dos pedidos em aberto",
              "Contatar fornecedores em caso de atraso"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.17",
    nome: "Gestão de Performance por Categoria",
    descricao: "Monitoramento e ações corretivas baseadas na performance de categorias de produtos",
    nivel: "Tático",
    icon: Target,
    cor: "bg-lime-500",
    entrada: "Indicadores de vendas, margem, estoque e sell-thru; Calendário comercial e metas da empresa",
    saida: "Ações implantadas por categoria, com performance monitorada e decisões embasadas",
    sistemas_utilizados: ["Power BI", "Excel", "E-mail", "Mega"],
    subprocessos: [
      {
        id: "7.17.1",
        nome: "Monitoramento de indicadores",
        nivel: "Tático",
        ferramentas: ["Power BI"],
        tarefas: [
          {
            id: "7.17.1.1",
            nome: "Avaliação de KPIs por categoria e família",
            passos: [
              "Analisar via Power BI os indicadores de performance (venda, margem, cobertura, ruptura)",
              "Comparar com períodos anteriores e metas projetadas"
            ]
          },
          {
            id: "7.17.1.2",
            nome: "Diagnóstico de oportunidades e riscos",
            passos: [
              "Identificar produtos de baixa performance ou ruptura frequente",
              "Analisar causas (preço, sortimento, exposição, logística, etc.)"
            ]
          }
        ]
      },
      {
        id: "7.17.2",
        nome: "Ações corretivas e alinhamento estratégico",
        nivel: "Tático",
        ferramentas: ["Excel", "E-mail", "Mega"],
        tarefas: [
          {
            id: "7.17.2.1",
            nome: "Proposição de ações por categoria",
            passos: [
              "Elaboração de planos de remarcação, reforço promocional ou exclusão de SKUs",
              "Compartilhar insights com marketing, VM, lojas e fornecedores"
            ]
          },
          {
            id: "7.17.2.2",
            nome: "Execução e monitoramento",
            passos: [
              "Acompanhar os impactos das ações implantadas e ajustar rapidamente se necessário"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.18",
    nome: "Apoio às Lojas e Gestão de Estoque da Loja",
    descricao: "Suporte operacional para resolução de problemas de estoque e divergências nas lojas",
    nivel: "Operacional",
    icon: Users,
    cor: "bg-gray-500",
    entrada: "Chamados via TopDesk ou e-mail; Notas fiscais divergentes, produtos com defeito ou remanejamento pendente",
    saida: "Estoque corrigido, produtos com nota regularizada e problemas operacionais solucionados",
    sistemas_utilizados: ["Mega", "TopDesk", "E-mail", "Excel"],
    subprocessos: [
      {
        id: "7.18.1",
        nome: "Atendimento a chamados e correções",
        nivel: "Operacional",
        ferramentas: ["Mega", "TopDesk", "E-mail"],
        tarefas: [
          {
            id: "7.18.1.1",
            nome: "Apoio em divergências de nota e produto",
            passos: [
              "Verificar produtos com nota divergente no sistema Mega",
              "Avaliar e solicitar ao fornecedor a correção da nota ou emissão de indenização"
            ]
          },
          {
            id: "7.18.1.2",
            nome: "Suporte a problemas de estoque físico",
            passos: [
              "Auxiliar lojas em casos de sobra, falta, produto danificado, extravio ou erro de remanejamento",
              "Validar com fornecedor ou operação e acionar correções"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.19",
    nome: "Suporte a Eventos, Vitrines e Visual Merchandising",
    descricao: "Coordenação de produtos e materiais para eventos, vitrines e ações de visual merchandising",
    nivel: "Tático",
    icon: Eye,
    cor: "bg-fuchsia-500",
    entrada: "Calendário de ações comerciais, campanhas e lançamentos; briefings de marketing e planejamento de VM",
    saida: "Eventos e vitrines implementados conforme briefing, com impacto comercial e visual controlado",
    sistemas_utilizados: ["Excel", "Mega", "WhatsApp"],
    subprocessos: [
      {
        id: "7.19.1",
        nome: "Planejamento de vitrines e eventos",
        nivel: "Tático",
        ferramentas: ["Excel"],
        tarefas: [
          {
            id: "7.19.1.1",
            nome: "Alinhamento com Time de Compras MKT e VM",
            passos: [
              "Receber briefing de eventos e vitrines sazonais",
              "Selecionar produtos estratégicos para exposição"
            ]
          },
          {
            id: "7.19.1.2",
            nome: "Coordenação com lojas e CD",
            passos: [
              "Enviar instruções e materiais de ponto de venda (ex: manuais, cartazes, brindes)"
            ]
          }
        ]
      },
      {
        id: "7.19.2",
        nome: "Execução e validação",
        nivel: "Operacional",
        ferramentas: ["WhatsApp"],
        tarefas: [
          {
            id: "7.19.2.1",
            nome: "Acompanhamento da montagem e execução",
            passos: [
              "Confirmar com lojas a montagem conforme diretrizes",
              "Realização de gravação de workshops",
              "Separação de produtos e a produção de vídeos para apresentação da novas coleções (Inverno ou Primavera/Verão) às lojas",
              "Efetuar os fechamentos dos consignados na primeira semana do mês subsequente",
              "Acompanhar retorno dos produtos e desmontagem"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.20",
    nome: "Controle de OTB e Verba de Compras",
    descricao: "Controle estratégico do orçamento e verba disponível para compras (Open-to-Buy)",
    nivel: "Tático",
    icon: ClipboardList,
    cor: "bg-neutral-500",
    entrada: "Orçamento anual/semestral por departamento, bandeira e categoria, planejamento de compras e pedidos em andamento e valores já utilizados",
    saida: "Verba de compras controlada, com visibilidade por bandeira, fornecedor e data de entrega",
    sistemas_utilizados: ["Excel", "Planilha de Controle OTB", "E-mail"],
    subprocessos: [
      {
        id: "7.20.1",
        nome: "Montagem e atualização do controle de verba",
        nivel: "Tático",
        ferramentas: ["Excel"],
        tarefas: [
          {
            id: "7.20.1.1",
            nome: "Construção da planilha de OTB",
            passos: [
              "Estruturação de planilha com colunas: verba por categoria, valor comprado, saldo restante, pedidos por quinzena",
              "Separação por departamento, bandeira, marca e fornecedor"
            ]
          },
          {
            id: "7.20.1.2",
            nome: "Atualização periódica dos pedidos realizados",
            passos: [
              "A cada novo pedido, inserir informações: valor, quantidade de pares, data de entrega, ordem de compra e status",
              "Atualização semanal com valores comprados vs. saldo da verba"
            ]
          }
        ]
      },
      {
        id: "7.20.2",
        nome: "Alinhamento com financeiro e aprovação de compras",
        nivel: "Tático",
        ferramentas: ["E-mail"],
        tarefas: [
          {
            id: "7.20.2.1",
            nome: "Compartilhamento com diretoria/financeiro",
            passos: [
              "Enviar planilha com status atualizado de compras e OTB",
              "Apresentar saldo disponível e prioridades de uso da verba"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.21",
    nome: "Controle de Ordem de Compra e Planejamento de Entregas",
    descricao: "Organização e acompanhamento das ordens de compra e cronograma de entregas",
    nivel: "Tático",
    icon: Presentation,
    cor: "bg-zinc-500",
    entrada: "Pedidos lançados no sistema; Calendário de recebimentos e prazos acordados com fornecedores",
    saida: "Ordens de compra rastreáveis, organizadas por período e prontas para acompanhamento logístico",
    sistemas_utilizados: ["Excel", "Mega", "E-mail"],
    subprocessos: [
      {
        id: "7.21.1",
        nome: "Organização e controle das ordens de compra",
        nivel: "Tático",
        ferramentas: ["Excel", "Mega"],
        tarefas: [
          {
            id: "7.21.1.1",
            nome: "Registro completo das ordens",
            passos: [
              "Preencher planilha com dados: ordem de compra, prazo de entrega, família, valor, modelo, quantidade e status",
              "Separação por quinzena e bandeira"
            ]
          },
          {
            id: "7.21.1.2",
            nome: "Acompanhamento de entregas por quinzena",
            passos: [
              "Conferência das ordens previstas para cada quinzena do mês",
              "Alinhamento com agendamento e distribuição"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.22",
    nome: "Projetos e Indicadores Estratégicos (OKR, IA, CMV, PEG)",
    descricao: "Acompanhamento de indicadores estratégicos e projetos do departamento",
    nivel: "Tático",
    icon: Layers,
    cor: "bg-stone-500",
    entrada: "Metas da empresa por departamento e bandeira, Indicadores extraídos via Power BI",
    saida: "Indicadores estratégicos atualizados e reportados à liderança, base para decisões táticas e ajustes de planejamento",
    sistemas_utilizados: ["Power BI", "Excel", "E-mail"],
    subprocessos: [
      {
        id: "7.22.1",
        nome: "Atualização de indicadores estratégicos",
        nivel: "Tático",
        ferramentas: ["Power BI", "Excel"],
        tarefas: [
          {
            id: "7.22.1.1",
            nome: "Preenchimento de relatórios mensais",
            passos: [
              "Puxar dados de IA (Índice de Aproveitamento), CMV (Custo de Mercadoria Vendida), PEG (Planejamento Estratégico de Giro)",
              "Preencher planilha com indicadores por bandeira e categoria"
            ]
          },
          {
            id: "7.22.1.2",
            nome: "Comparação com metas e análise de variações",
            passos: [
              "Comparar resultados com metas definidas no planejamento",
              "Identificar variações e justificar desvios"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.23",
    nome: "Participação em Workshops e Desenvolvimento de Conteúdo",
    descricao: "Criação e execução de workshops para apresentação de coleções e estratégias",
    nivel: "Tático",
    icon: Users,
    cor: "bg-red-600",
    entrada: "Cronograma de workshops da empresa, lançamentos de coleção e campanhas comerciais",
    saida: "Workshops realizados com conteúdo estratégico sobre coleção, metas e direcionamentos comerciais",
    sistemas_utilizados: ["PowerPoint", "Roteiro de Workshop", "Estúdio de Gravação"],
    subprocessos: [
      {
        id: "7.23.1",
        nome: "Planejamento do conteúdo",
        nivel: "Tático",
        ferramentas: ["PowerPoint"],
        tarefas: [
          {
            id: "7.23.1.1",
            nome: "Criação do roteiro de apresentação",
            passos: [
              "Montar estratégia da coleção, destaques e metas",
              "Elaborar roteiro para gravação ou apresentação ao time"
            ]
          },
          {
            id: "7.23.1.2",
            nome: "Gravação e entrega do workshop",
            passos: [
              "Realizar gravação com apoio da equipe de marketing ou estúdio",
              "Compartilhar o material com times de loja, gerentes e representantes"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.24",
    nome: "Integração com Infra (Infracommerce e Vtex)",
    descricao: "Controle e acompanhamento de pedidos destinados ao canal digital",
    nivel: "Operacional",
    icon: Layers,
    cor: "bg-blue-600",
    entrada: "Pedidos destinados ao canal digital e planilhas de cadastro e status de entrega",
    saida: "Pedidos do e-commerce controlados com status atualizado e chamados registrados junto à Infra",
    sistemas_utilizados: ["Excel", "Vtex", "E-mail"],
    subprocessos: [
      {
        id: "7.24.1",
        nome: "Acompanhamento de pedidos e chamados",
        nivel: "Operacional",
        ferramentas: ["Excel", "E-mail"],
        tarefas: [
          {
            id: "7.24.1.1",
            nome: "Registro e controle por pedido",
            passos: [
              "Preencher planilha com status dos pedidos por FSD, prazos, entregas e notas fiscais",
              "Atualizar campos como status atual, pendências, chamados abertos e responsável"
            ]
          },
          {
            id: "7.24.1.2",
            nome: "Abertura e monitoramento de chamados com a Infra",
            passos: [
              "Abrir chamados para ajustes, pendências ou divergências na Infracommerce",
              "Acompanhar evolução dos chamados e manter histórico atualizado"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.25",
    nome: "Gestão de Amostras",
    descricao: "Controle de recebimento, destinação e retorno de amostras de produtos",
    nivel: "Operacional",
    icon: Package,
    cor: "bg-green-600",
    entrada: "Pedidos com solicitação de amostras, requisições de marketing, influenciadores ou time comercial",
    saida: "Amostras recebidas, rastreadas e vinculadas ao pedido ou ação de marketing",
    sistemas_utilizados: ["Excel", "E-mail"],
    subprocessos: [
      {
        id: "7.25.1",
        nome: "Recebimento e controle de amostras",
        nivel: "Operacional",
        ferramentas: ["Excel", "E-mail"],
        tarefas: [
          {
            id: "7.25.1.1",
            nome: "Solicitação e registro da amostra",
            passos: [
              "Incluir a solicitação de amostras na planilha de pedido e solicitar ao fornecedor",
              "Ao receber, cadastrar número da amostra, tipo de produto, destino e status"
            ]
          },
          {
            id: "7.25.1.2",
            nome: "Destinação e retorno das amostras",
            passos: [
              "Se for campanha sazonal, controlar o retorno da amostra após uso",
              "Se for para influenciador, registrar como despesa da marca"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.26",
    nome: "Planejamento Mensal Visual (PDF para Lojas)",
    descricao: "Criação de material visual mensal para orientação das lojas",
    nivel: "Tático",
    icon: FileText,
    cor: "bg-purple-600",
    entrada: "Planejamento de entregas do mês, destaques de produtos e coleções",
    saida: "Lojas com planejamento visual claro para exposição e destaque de produtos conforme calendário",
    sistemas_utilizados: ["PowerPoint", "E-mail", "PDF"],
    subprocessos: [
      {
        id: "7.26.1",
        nome: "Montagem do material visual",
        nivel: "Tático",
        ferramentas: ["PowerPoint"],
        tarefas: [
          {
            id: "7.26.1.1",
            nome: "Criação do planejamento em formato visual",
            passos: [
              "Criar apresentação (PowerPoint ou PDF) com: produtos da quinzena, destaques, produtos de banca, sugestões de exposição, mudanças de vitrine",
              "Separar por quinzena e por categoria"
            ]
          },
          {
            id: "7.26.1.2",
            nome: "Envio às lojas",
            passos: [
              "Encaminhar o material para gerentes e equipes de loja via e-mail",
              "Acompanhar aplicação e retorno"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.27",
    nome: "Vitrine Piloto",
    descricao: "Montagem de vitrine modelo para padronização nas lojas",
    nivel: "Operacional",
    icon: Eye,
    cor: "bg-orange-600",
    entrada: "Lipe definido, vitrine previamente limpa",
    saida: "Vitrine piloto e mesa organizadas com a campanha vigente, servindo de modelo padrão empresa",
    sistemas_utilizados: ["LIPE"],
    subprocessos: [
      {
        id: "7.27.1",
        nome: "Montagem do esqueleto de vitrine definido pelo Compras",
        nivel: "Operacional",
        ferramentas: ["LIPE"],
        tarefas: [
          {
            id: "7.27.1.1",
            nome: "Destacar produtos estratégicos",
            passos: [
              "Trazer os produtos de maior valor e lançamentos para a parte da vitrine próxima à porta",
              "Posicionar calçados de maior destaque na bandeja de visualização mais acessível"
            ]
          },
          {
            id: "7.27.1.2",
            nome: "Aplicar simetria na vitrine toda",
            passos: [
              "Garantir Simetria",
              "Organizar frente e lateral em sentido horizontal e vertical"
            ]
          },
          {
            id: "7.27.1.3",
            nome: "Exposição de pares de calçados",
            passos: [
              "Dobrar pés na vitrine",
              "Em lojas de vidro: expor os pares completos",
              "Em lojas Touch: expor apenas um pé por numeração, evitando riscos de furto"
            ]
          },
          {
            id: "7.27.1.4",
            nome: "Montar mesa",
            passos: [
              "Destacar produtos especiais",
              "Organizar conforme esqueleto de vitrine definido pelo Compras",
              "Aplicar simetria modelo espelho",
              "Dobrar os pés da mesa conforme padrão"
            ]
          }
        ]
      },
      {
        id: "7.27.2",
        nome: "Aplicar material de VM",
        nivel: "Operacional",
        ferramentas: ["LIPE"],
        tarefas: [
          {
            id: "7.27.2.1",
            nome: "Instalação de materiais",
            passos: [
              "Abrir caixas com cuidado e aplicar cada item em seu devido espaço na vitrine e mesa"
            ]
          },
          {
            id: "7.27.2.2",
            nome: "Registro para manuais",
            passos: [
              "Tirar fotos de painéis de vitrine e mesa para montagem do manual"
            ]
          },
          {
            id: "7.27.2.3",
            nome: "Produção de vídeos",
            passos: [
              "Filmar todo o processo de montagem para orientar as lojas"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.28",
    nome: "Confecção de Manual",
    descricao: "Criação de manuais de vitrine e VM baseados na vitrine piloto",
    nivel: "Operacional",
    icon: FileText,
    cor: "bg-cyan-600",
    entrada: "Fotos e registros da vitrine piloto executada",
    saida: "Todas as lojas com acesso ao manual atualizado da última campanha",
    sistemas_utilizados: ["Google Sheets", "Google Drive"],
    subprocessos: [
      {
        id: "7.28.1",
        nome: "Criação e execução da base do manual",
        nivel: "Operacional",
        ferramentas: ["Google Sheets", "Google Drive"],
        tarefas: [
          {
            id: "7.28.1.1",
            nome: "Criação",
            passos: [
              "Duplicar o manual mais recente do departamento",
              "Salvar no drive na pasta correta dentro da campanha que estamos montando"
            ]
          },
          {
            id: "7.28.1.2",
            nome: "Executar o corpo do manual",
            passos: [
              "Aplicando as fotos e as instruções de acordo com a campanha que será aplicada",
              "Disponibilizar o manual para as lojas",
              "Enviar o manual no grupo do Whatsapp do VM e subir o mesmo no drive de VM"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.29",
    nome: "Correção de Campanha",
    descricao: "Validação e correção da aplicação de campanhas nas lojas",
    nivel: "Operacional",
    icon: AlertTriangle,
    cor: "bg-red-600",
    entrada: "Lojas com o manual da campanha aplicado em loja",
    saida: "Lojas com a campanha vigente aplicada e padrão de VM",
    sistemas_utilizados: ["WhatsApp", "Google Sheets"],
    subprocessos: [
      {
        id: "7.29.1",
        nome: "Validação de aplicação",
        nivel: "Operacional",
        ferramentas: ["WhatsApp", "Google Sheets"],
        tarefas: [
          {
            id: "7.29.1.1",
            nome: "Conferencia",
            passos: [
              "Corrigir as fotos tendo como base as fotos e instruções do manual e retornar o feedback para as lojas",
              "Entender com as lojas as adaptações que são necessárias",
              "Garantir que todas as lojas tenham enviado fotos para a correção",
              "Cobrar das lojas via mensagem, as fotos que não forem enviadas dentro do prazo",
              "Preencher checklist de campanha para controle e colocar observações sobre as correções individualmente"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.30",
    nome: "Análise de Concorrência",
    descricao: "Pesquisa e análise de ações comerciais e visuais da concorrência",
    nivel: "Operacional",
    icon: Search,
    cor: "bg-teal-600",
    entrada: "Necessidade de campanha grande ativa nas lojas concorrentes para ser analisada",
    saida: "VM, marketing e compras alinhados nas ações de vendas dos concorrentes",
    sistemas_utilizados: ["Web Pesquisa", "E-mail"],
    subprocessos: [
      {
        id: "7.30.1",
        nome: "Levantamento em campo",
        nivel: "Operacional",
        ferramentas: ["Web Pesquisa"],
        tarefas: [
          {
            id: "7.30.1.1",
            nome: "Pesquisa e coleta de informações",
            passos: [
              "Analise visual de partes relevantes para a exposição de uma campanha específica",
              "Buscar online imagens de concorrentes mais distantes que não permitem visita presencial"
            ]
          },
          {
            id: "7.30.1.2",
            nome: "Montar análise",
            passos: [
              "Montagem de apresentação com as informações obtidas",
              "Duplicar arquivo anterior de apresentação e atualizar todos os dados e imagens",
              "Enviar o arquivo atualizado para os outros VMs, compradores e marketing"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.31",
    nome: "Planilhamento de Peças de VM",
    descricao: "Planejamento e solicitação de peças de visual merchandising para campanhas",
    nivel: "Operacional",
    icon: Palette,
    cor: "bg-indigo-600",
    entrada: "Campanha aprovada pelo Marketing, com Shooting concluído, e peças aprovadas",
    saida: "Iasa com as quantidades de peças e as lojas destinadas",
    sistemas_utilizados: ["Google Sheets", "WhatsApp", "E-mail"],
    subprocessos: [
      {
        id: "7.31.1",
        nome: "Criação de planilha base",
        nivel: "Operacional",
        ferramentas: ["Google Sheets", "WhatsApp", "E-mail"],
        tarefas: [
          {
            id: "7.31.1.1",
            nome: "Ajuste e validação",
            passos: [
              "Copiar planilha mais recente de peças de vm em um arquivo novo, substituir as fotos da campanha antiga com as fotos novas e adequar as quantidades de peças",
              "Desdobrar planilha para todas as bandeiras e repetir as tarefas",
              "Avaliar as quantidades junto aos VMs",
              "Enviar a planilha para Iasa confeccionar as peças via email"
            ]
          }
        ]
      }
    ]
  },
  {
    id: "COM-07.32",
    nome: "Visitas às Lojas e Apoio Operacional Presencial",
    descricao: "Visitas técnicas às lojas para diagnóstico e correção de problemas operacionais",
    nivel: "Tático",
    icon: MapPin,
    cor: "bg-emerald-600",
    entrada: "Problemas operacionais, baixo desempenho ou análise de exposição e agenda de acompanhamento do time de compras",
    saida: "Diagnóstico presencial das lojas com plano de ação ou correção implantado",
    sistemas_utilizados: ["Google Sheets", "Booking", "WhatsApp", "Vexpenses"],
    subprocessos: [
      {
        id: "7.32.1",
        nome: "Planejamento da visita",
        nivel: "Tático",
        ferramentas: ["Google Sheets", "Booking", "Vexpenses"],
        tarefas: [
          {
            id: "7.32.1.1",
            nome: "Seleção de lojas e definição de foco",
            passos: [
              "Escolher lojas com performance crítica ou com problemas recorrentes",
              "Alinhar objetivos da visita: estoque, exposição, recebimento, campanha, VM"
            ]
          },
          {
            id: "7.32.1.2",
            nome: "Logística de transporte",
            passos: [
              "Avaliar distância das lojas e possível trajeto que passe por todas elas",
              "Avaliar os horários de partida, chegada e tempo de percurso para cada",
              "Avaliar disponibilidade de crédito no Vexpenses e se não for o suficiente, solicitar mais para o coordenador ou diminuir o orçamento conforme for possível"
            ]
          },
          {
            id: "7.32.1.3",
            nome: "Realização da visita e análise presencial",
            passos: [
              "Verificar vitrines, exposição de produtos, organização de estoque",
              "Fazer checklist do VM, fazer correções pessoais",
              "Todas as correções que forem feitas devem ter fotos do antes e depois",
              "Repassar todos os pontos com o gerente da loja, para entendimento de desafios e coleta de feedbacks"
            ]
          }
        ]
      }
    ]
  }
];
