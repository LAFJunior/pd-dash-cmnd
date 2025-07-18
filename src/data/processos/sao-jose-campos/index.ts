import { Package, Search, Truck, ClipboardList, Archive, CheckCircle, FileText, BarChart3, Users, Warehouse, ShoppingCart, Box, Scan, Layers } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

export const reposicaoArmazenamentoEstoque: ProcessoDetalhado = {
  id: 'CDS-001',
  nome: 'Reposição e Armazenamento de Estoque',
  descricao: 'Produtos recebidos após separações, devoluções ou movimentações internas',
  icon: Package,
  cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
  nivel: 'Operacional',
  entrada: 'Produtos recebidos após separações, devoluções ou movimentações internas.',
  saida: 'Produtos armazenados corretamente no estoque, organizados por marca, referência e numeração.',
  sistemas_utilizados: ['Estrutura física de estoque (prateleiras, caixas)', 'etiquetas'],
  tempo_execucao: '45-60 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '5.1.1',
      nome: 'Organização e Armazenamento por Marca e Referência',
      nivel: 'Operacional',
      ferramentas: ['Prateleiras', 'etiquetas', 'caixas'],
      tarefas: [
        {
          id: '5.1.1.1',
          nome: 'Identificar Produtos para Armazenamento',
          passos: [
            'Separar os produtos que sobraram de processos anteriores como:',
            '– Separação de estoque mínimo',
            '– Pedidos de e-commerce que foram cancelados ou retornaram',
            '– Produtos que chegaram da fábrica ou de outras lojas',
            'Reunir todos os pares próximos ao local de separação',
            'Verificar se os pares estão completos:',
            '– Confirmar se há pé direito e pé esquerdo',
            '– Conferir se os produtos estão limpos, sem manchas, sem defeitos visíveis'
          ]
        },
        {
          id: '5.1.1.2',
          nome: 'Avaliar Local de Armazenamento Existente',
          passos: [
            'Localizar no estoque a prateleira onde estão armazenados produtos da mesma marca',
            'Conferir se já existem produtos da mesma referência (código ou nome do modelo)',
            'Avaliar também se há espaço disponível naquela prateleira',
            'Identificar se a numeração está dentro do padrão da grade (ex: 34 a 39 para feminino)'
          ]
        },
        {
          id: '5.1.1.3',
          nome: 'Armazenar os Produtos nas Prateleiras',
          passos: [
            'Colocar os produtos na prateleira correspondente à marca:',
            '– Exemplo: todos os produtos da marca Diadora ficam juntos',
            'Dentro da marca, agrupar pela referência (modelo)',
            'Dentro da referência, organizar por numeração crescente (ex: 34, 35, 36...)',
            'Se não houver produto da mesma marca, criar novo espaço para iniciar essa marca',
            'Caso a marca tenha poucos itens, pode-se agrupar mais de uma marca semelhante na mesma prateleira, desde que separadas por etiqueta ou espaço visual claro'
          ]
        },
        {
          id: '5.1.1.4',
          nome: 'Garantir Facilidade para Futuras Separações',
          passos: [
            'Posicionar os produtos com os solados visíveis para conferência rápida',
            'Evitar empilhar produtos que dificultem a retirada',
            'Manter organização padronizada:',
            '– Um lado da prateleira para produtos femininos',
            '– Outro lado para masculinos (se houver distinção na loja)'
          ]
        }
      ]
    }
  ]
};

export const separacaoProdutos: ProcessoDetalhado = {
  id: 'CDS-002',
  nome: 'Separação de Produtos',
  descricao: 'Pedido de separação gerado por e-commerce, influenciador, loja ou estoque mínimo',
  icon: Search,
  cor: 'bg-gradient-to-br from-green-500 to-green-600',
  nivel: 'Operacional',
  entrada: 'Pedido de separação gerado por e-commerce, influenciador, loja ou estoque mínimo.',
  saida: 'Produtos separados corretamente para seus destinos (cliente, loja, influenciador), prontos para envio.',
  sistemas_utilizados: ['Mega', 'Relatórios', 'e-mail'],
  tempo_execucao: '30-45 minutos por pedido',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '5.2.1',
      nome: 'Separação para E-commerce',
      nivel: 'Operacional',
      ferramentas: ['Sistema central', 'impressora', 'embalagens'],
      tarefas: [
        {
          id: '5.2.1.1',
          nome: 'Gerar e Imprimir Lista de Separação',
          passos: [
            'Acessar o sistema central ou tela do centro de pedidos',
            'Verificar se há novos pedidos a separar (geralmente listados por prioridade de envio ou canal – ex: Correios, Mercado Livre, loja própria)',
            'Gerar o relatório com:',
            '– Código do produto',
            '– Nome e descrição',
            '– Tamanho',
            '– Número do pedido e data',
            '– Nome do cliente e tipo de envio',
            'Imprimir o relatório completo e levar até a área de estoque'
          ]
        },
        {
          id: '5.2.1.2',
          nome: 'Localizar e Separar os Produtos no Estoque',
          passos: [
            'Buscar o produto no estoque utilizando:',
            '– Código do produto',
            '– Nome e referência visual',
            'Verificar se a numeração confere com o pedido',
            'Separar o par completo:',
            '– Confirmar que há pé esquerdo e pé direito',
            'Avaliar o estado do produto:',
            '– Sem sujeira, sem manchas, sem defeito',
            '– Sem alarme (remover, se houver)'
          ]
        },
        {
          id: '5.2.1.3',
          nome: 'Conferência Final do Produto para Embalagem',
          passos: [
            'Comparar item físico com a descrição impressa no relatório',
            'Verificar novamente tamanho, modelo e condição geral',
            'Caso haja divergência, comunicar o responsável antes de seguir para embalagem'
          ]
        },
        {
          id: '5.2.1.4',
          nome: 'Embalar o Produto',
          passos: [
            'Separar caixa ou embalagem adequada de acordo com o tamanho e volume do produto',
            'Acomodar o calçado corretamente para evitar amassamento',
            'Incluir a nota fiscal (impressa ou já anexada à etiqueta)',
            'Fechar a caixa com fita lacre padrão'
          ]
        },
        {
          id: '5.2.1.5',
          nome: 'Etiquetar para Envio',
          passos: [
            'Escanear o produto no sistema (se aplicável)',
            'Imprimir a etiqueta de envio com os dados do cliente',
            'Colar a etiqueta de forma visível na embalagem',
            'Levar a embalagem à área de despacho para coleta/postagem'
          ]
        }
      ]
    },
    {
      id: '5.2.2',
      nome: 'Separação para Influenciador e Estoque Mínimo',
      nivel: 'Operacional',
      ferramentas: ['e-mail', 'planilhas', 'caixas'],
      tarefas: [
        {
          id: '5.2.2.1',
          nome: 'Conferir Pedido Recebido por E-mail',
          passos: [
            'Abrir e-mail enviado pela compradora ou responsável (ex: Marlene)',
            'Verificar lista anexa com os produtos solicitados para influenciador ou estoque mínimo',
            'Confirmar loja de origem e destino, modelo, cor, tamanho e tipo de item'
          ]
        },
        {
          id: '5.2.2.2',
          nome: 'Separar Produtos de Acordo com a Lista',
          passos: [
            'Buscar os itens no estoque conforme descrito',
            'Para influenciador:',
            '– Conferir par completo',
            '– Verificar se está limpo, sem defeitos e sem alarme',
            'Para estoque mínimo:',
            '– Conferir grade conforme planilha',
            '– Separar por loja (ex: loja 010, 012...)'
          ]
        },
        {
          id: '5.2.2.3',
          nome: 'Embalar e Identificar Caixas',
          passos: [
            'Montar caixas reaproveitadas ou disponíveis para envio interno',
            'Acondicionar os produtos separados',
            'Escrever na caixa (ou fixar etiqueta):',
            '– Loja destino',
            '– Tipo: "Estoque Mínimo" ou "Influenciador"',
            'Levar para a doca de expedição ou área de saída de mercadoria'
          ]
        }
      ]
    }
  ]
};

export const remanejamentoLojas: ProcessoDetalhado = {
  id: 'CDS-003',
  nome: 'Remanejamento entre Lojas',
  descricao: 'Redistribuição de produtos entre filiais para otimizar vendas e exposição',
  icon: Truck,
  cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
  nivel: 'Operacional',
  entrada: 'Solicitação ou planejamento de redistribuição de produtos entre filiais (ex: por grade reduzida, baixa venda ou estratégia de exposição).',
  saida: 'Produtos redistribuídos para as lojas com maior potencial de venda ou demanda.',
  sistemas_utilizados: ['Mega Relatórios', 'transporte interno'],
  tempo_execucao: 'Variável conforme volume',
  frequencia: 'Conforme necessidade',
  subprocessos: [
    {
      id: '5.3.1',
      nome: 'Planejamento e Geração do Remanejamento',
      nivel: 'Operacional',
      ferramentas: ['Sistema Mega', 'planilha de controle'],
      tarefas: [
        {
          id: '5.3.1.1',
          nome: 'Identificar Necessidade de Remanejamento',
          passos: [
            'Observar produtos parados, com grade incompleta ou com giro baixo em determinada loja',
            'Validar com o comprador ou responsável se os itens podem ser remanejados',
            'Solicitar o cadastro do remanejamento no sistema ou na planilha de controle'
          ]
        },
        {
          id: '5.3.1.2',
          nome: 'Gerar Relatório de Remanejamento',
          passos: [
            'Acessar o sistema (Mega ou outro) na aba de "Remanejamento"',
            'Filtrar os itens cadastrados para remanejar pela loja de origem (ex: loja 010 – CD)',
            'Gerar relatório contendo:',
            '– Produto',
            '– Numeração',
            '– Loja destino',
            '– Quantidade',
            'Imprimir o relatório para execução da separação'
          ]
        }
      ]
    },
    {
      id: '5.3.2',
      nome: 'Separação de Produtos para Remanejamento',
      nivel: 'Operacional',
      ferramentas: ['Relatório impresso', 'prateleiras', 'caixas'],
      tarefas: [
        {
          id: '5.3.2.1',
          nome: 'Localizar Produtos no Estoque',
          passos: [
            'Utilizar o relatório gerado como base',
            'Buscar os produtos por marca, referência e numeração nas prateleiras',
            'Separar os itens de acordo com a loja destino indicada'
          ]
        },
        {
          id: '5.3.2.2',
          nome: 'Conferência Física dos Itens',
          passos: [
            'Verificar se os pares estão completos (pé direito e esquerdo)',
            'Checar se estão limpos, sem avarias, com as numerações corretas conforme o relatório',
            'Confirmar se a quantidade está exata'
          ]
        }
      ]
    },
    {
      id: '5.3.3',
      nome: 'Expedição para Loja de Destino',
      nivel: 'Operacional',
      ferramentas: ['Caixas reaproveitadas', 'etiquetas', 'transporte'],
      tarefas: [
        {
          id: '5.3.3.1',
          nome: 'Embalar e Identificar as Remessas',
          passos: [
            'Utilizar caixas reaproveitadas ou padrão para envio interno',
            'Identificar cada caixa com:',
            '– Loja destino',
            '– "REMANEJAMENTO"',
            '– Quantidade de pares',
            'Garantir que caixas estejam fechadas corretamente'
          ]
        },
        {
          id: '5.3.3.2',
          nome: 'Conferência Final e Envio',
          passos: [
            'Posicionar as caixas na doca de saída ou setor de logística',
            'Validar novamente o número de pares com o relatório',
            'Encaminhar junto ao motorista da frota interna ou responsável pela entrega'
          ]
        }
      ]
    }
  ]
};

export const recebimentoNotasFiscais: ProcessoDetalhado = {
  id: 'CDS-004',
  nome: 'Recebimento e Inclusão de Notas Fiscais',
  descricao: 'Recebimento físico de produtos e registro de notas fiscais no sistema',
  icon: FileText,
  cor: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
  nivel: 'Operacional',
  entrada: 'Produtos entregues fisicamente via transportadora ou fornecedor, acompanhados de Nota Fiscal.',
  saida: 'Nota fiscal registrada no sistema e produtos prontos para movimentação e controle de estoque.',
  sistemas_utilizados: ['Sistema Mega', 'e-mail', 'WhatsApp', 'planilha de controle', 'impressora'],
  tempo_execucao: '30-60 minutos por nota',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '5.4.1',
      nome: 'Recebimento Físico da Nota Fiscal',
      nivel: 'Operacional',
      ferramentas: ['Comprovante de entrega', 'nota fiscal', 'produtos físicos'],
      tarefas: [
        {
          id: '5.4.1.1',
          nome: 'Retirada da Nota Fiscal na Portaria',
          passos: [
            'Ao ser chamado pela portaria, dirigir-se até o local de recebimento',
            'Assinar o comprovante de entrega apresentado pela transportadora',
            'Trazer os produtos até o setor de conferência de estoque'
          ]
        },
        {
          id: '5.4.1.2',
          nome: 'Conferência Física dos Itens da Nota',
          passos: [
            'Abrir as caixas recebidas e comparar os itens com a nota fiscal',
            'Verificar:',
            '– Quantidade de pares',
            '– Modelos e cores dos produtos',
            '– Numeração e descrição conforme nota',
            'Validar se os produtos estão em condições (limpos, corretos, sem defeitos visuais)',
            'Em caso de divergência, registrar o ocorrido e comunicar o responsável da área de compras'
          ]
        },
        {
          id: '5.4.1.3',
          nome: 'Notificar Comprador',
          passos: [
            'Identificar a marca e o tipo de produto recebido',
            'Tirar foto da referência, se necessário, e enviar por e-mail ou WhatsApp ao comprador responsável para confirmação',
            'Aguardar validação, caso o pedido não esteja totalmente alinhado com o sistema'
          ]
        }
      ]
    },
    {
      id: '5.4.2',
      nome: 'Inclusão da Nota Fiscal no Sistema',
      nivel: 'Operacional',
      ferramentas: ['Sistema Mega', 'chave de acesso', 'pedidos'],
      tarefas: [
        {
          id: '5.4.2.1',
          nome: 'Acesso ao Sistema de Gestão',
          passos: [
            'Abrir o sistema de controle (Mega ou outro utilizado)',
            'Acessar o módulo "Compras" > "Incluir Nota"',
            'Inserir CNPJ da loja que está recebendo os produtos'
          ]
        },
        {
          id: '5.4.2.2',
          nome: 'Digitar ou Escanear Chave de Acesso da Nota Fiscal',
          passos: [
            'Inserir a chave de acesso da nota fiscal para localizar os dados automaticamente',
            'Verificar:',
            '– Número e série da nota',
            '– Data de emissão',
            '– Valor total da nota'
          ]
        },
        {
          id: '5.4.2.3',
          nome: 'Localizar e Vincular Pedido à Nota',
          passos: [
            'Buscar no sistema o pedido correspondente, com base na marca ou fornecedor',
            'Validar se os itens listados na nota estão incluídos no pedido correto',
            'Selecione o pedido e vincule à nota'
          ]
        },
        {
          id: '5.4.2.4',
          nome: 'Conferir Grade, Quantidades e Custo',
          passos: [
            'Verificar se os tamanhos (grade) e a quantidade recebida batem com o pedido',
            'Validar o custo unitário de cada item',
            'Corrigir divergências, se houver, ou comunicar a área responsável'
          ]
        },
        {
          id: '5.4.2.5',
          nome: 'Finalizar Lançamento da Nota',
          passos: [
            'Confirmar que todos os dados foram corretamente inseridos',
            'Concluir o lançamento no sistema',
            'Imprimir uma cópia da nota (se necessário) ou anexar aos controles físicos'
          ]
        }
      ]
    }
  ]
};

export const contagemOrganizacaoEstoque: ProcessoDetalhado = {
  id: 'CDS-005',
  nome: 'Contagem e Organização de Estoque',
  descricao: 'Contagem periódica e organização sistemática do estoque',
  icon: BarChart3,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Solicitação de contagem por auditoria interna, divergência de sistema ou rotina periódica.',
  saida: 'Estoque validado, divergências corrigidas e produtos reorganizados fisicamente.',
  sistemas_utilizados: ['Mega', 'coletor de dados', 'planilha impressa', 'prateleiras organizadas', 'relatórios de inventário'],
  tempo_execucao: '2-4 horas conforme área',
  frequencia: 'Semanal/Mensal',
  subprocessos: [
    {
      id: '5.5.1',
      nome: 'Preparação para Contagem',
      nivel: 'Operacional',
      ferramentas: ['Sistema de estoque', 'coletor de dados', 'planilhas'],
      tarefas: [
        {
          id: '5.5.1.1',
          nome: 'Geração de Arquivo de Contagem no Sistema',
          passos: [
            'Acessar o sistema de estoque e abrir o módulo de "Inventário" ou "Contagem de Estoque"',
            'Selecionar:',
            '– Loja (ex: 010 – CD)',
            '– Tipo de contagem (parcial, por marca, por grupo ou geral)',
            'Gerar o arquivo com os produtos a serem contados',
            'Exportar o arquivo para a pasta vinculada ao coletor de dados (quando aplicável)'
          ]
        },
        {
          id: '5.5.1.2',
          nome: 'Organizar Espaço e Equipe para a Contagem',
          passos: [
            'Designar dois operadores para realizarem a contagem simultânea',
            'Garantir que prateleiras estejam acessíveis e organizadas para início do processo',
            'Disponibilizar os coletores carregados e com os arquivos certos ou planilhas impressas'
          ]
        }
      ]
    },
    {
      id: '5.5.2',
      nome: 'Execução da Contagem Física',
      nivel: 'Operacional',
      ferramentas: ['Coletores', 'planilhas', 'produtos físicos'],
      tarefas: [
        {
          id: '5.5.2.1',
          nome: 'Realizar Contagem Física com Dupla Conferência',
          passos: [
            'Iniciar a contagem com dois operadores em "formato cobrinha":',
            '– Um vai da esquerda para a direita e o outro da direita para a esquerda, conferindo os mesmos locais',
            'Contar apenas os produtos armazenados (desconsiderar itens em trânsito ou em separação)',
            'Em caso de contagem manual, marcar a quantidade diretamente na planilha'
          ]
        },
        {
          id: '5.5.2.2',
          nome: 'Verificar Paridade e Integridade',
          passos: [
            'Garantir que os pares estejam completos (pé direito e esquerdo)',
            'Verificar se o produto está identificado corretamente (por marca, referência e numeração)',
            'Identificar produtos deslocados ou com etiquetas danificadas'
          ]
        }
      ]
    },
    {
      id: '5.5.3',
      nome: 'Consolidação e Análise da Contagem',
      nivel: 'Operacional',
      ferramentas: ['Sistema', 'relatórios', 'controles internos'],
      tarefas: [
        {
          id: '5.5.3.1',
          nome: 'Importar Dados do Coletor ou Planilha no Sistema',
          passos: [
            'Acessar a área de importação de contagem',
            'Carregar o arquivo do coletor ou transcrever os dados da planilha',
            'Validar se todas as leituras foram registradas corretamente'
          ]
        },
        {
          id: '5.5.3.2',
          nome: 'Gerar Relatório de Divergência',
          passos: [
            'Acessar o módulo "Inventário" > "Relatórios"',
            'Selecionar: loja, data e tipo de contagem',
            'Gerar relatório com os seguintes dados:',
            '– Produtos faltantes (quantidade menor que o sistema)',
            '– Produtos excedentes (quantidade maior que o sistema)',
            '– Produtos com erro de localização'
          ]
        },
        {
          id: '5.5.3.3',
          nome: 'Corrigir Divergências e Atualizar Estoque',
          passos: [
            'Recontar os itens com divergência crítica',
            'Atualizar as quantidades no sistema com base nos dados verificados',
            'Justificar ajustes maiores com comentários ou registros internos'
          ]
        }
      ]
    }
  ]
};

export const conferenciaProduto: ProcessoDetalhado = {
  id: 'CDS-006',
  nome: 'Conferência de Produto',
  descricao: 'Verificação da qualidade e condições de produtos recebidos',
  icon: CheckCircle,
  cor: 'bg-gradient-to-br from-teal-500 to-teal-600',
  nivel: 'Operacional',
  entrada: 'Produto enviado por loja (ex: para influenciador, troca, devolução) ou recebido de outro setor.',
  saida: 'Produto devidamente conferido, validado e liberado para o próximo destino (influenciador, loja, troca, devolução).',
  sistemas_utilizados: ['Produto físico', 'área de inspeção visual', 'sistema (caso necessário para baixa ou apontamento)', 'desacalarme'],
  tempo_execucao: '5-10 minutos por produto',
  frequencia: 'Conforme recebimento',
  subprocessos: [
    {
      id: '5.6.1',
      nome: 'Conferência de Produto Recebido de Loja ou Separado para Influenciador',
      nivel: 'Operacional',
      ferramentas: ['Produtos físicos', 'área de inspeção', 'desacalarme'],
      tarefas: [
        {
          id: '5.6.1.1',
          nome: 'Confirmar Condição Física do Produto',
          passos: [
            'Verificar se o produto chegou em embalagem adequada',
            'Remover o calçado e realizar inspeção visual',
            'Avaliar:',
            '– Se é um par completo (pé direito e esquerdo)',
            '– Se não está sujo (sola limpa, cabedal sem poeira)',
            '– Se não está manchado (visualmente perceptível à luz direta)',
            '– Se não possui defeitos aparentes (riscos, colagens soltas, deformações)'
          ]
        },
        {
          id: '5.6.1.2',
          nome: 'Remover Acessórios de Loja, se Existirem',
          passos: [
            'Confirmar se o produto está sem alarme antifurto',
            '– Caso esteja com alarme, remover utilizando o desacalarme disponível',
            '– Importante: influenciadores e clientes finais não possuem ferramenta para remoção de alarme, por isso é fundamental que já saia sem esse item'
          ]
        },
        {
          id: '5.6.1.3',
          nome: 'Validar Prontidão para Envio ou Destinação',
          passos: [
            'Se for para influenciador:',
            '– Validar se está novo, limpo e apresentável para divulgação',
            'Se for para armazenamento ou devolução:',
            '– Garantir que o produto possa ser reutilizado ou processado normalmente'
          ]
        }
      ]
    }
  ]
};

export const separacaoInsumos: ProcessoDetalhado = {
  id: 'CDS-007',
  nome: 'Separação de Insumos',
  descricao: 'Preparação e envio de materiais e insumos para as lojas',
  icon: Box,
  cor: 'bg-gradient-to-br from-amber-500 to-amber-600',
  nivel: 'Operacional',
  entrada: 'Lista de insumos enviada por e-mail pela gestora responsável (ex: Marlene), com pedidos feitos pelas lojas.',
  saida: 'Insumos separados e embalados corretamente, prontos para envio interno a cada loja.',
  sistemas_utilizados: ['E-mail', 'planilha impressa', 'estoque de insumos', 'caixas reutilizadas', 'etiquetas manuais ou impressas'],
  tempo_execucao: '30-60 minutos',
  frequencia: 'Semanal ou conforme solicitação',
  subprocessos: [
    {
      id: '5.7.1',
      nome: 'Recebimento da Lista de Insumos',
      nivel: 'Operacional',
      ferramentas: ['E-mail corporativo', 'planilhas', 'impressora'],
      tarefas: [
        {
          id: '5.7.1.1',
          nome: 'Receber e Validar a Lista de Separação',
          passos: [
            'Acessar o e-mail corporativo e localizar a mensagem da responsável pelos insumos',
            'Abrir o arquivo anexo (planilha) com a lista de itens solicitados por cada loja',
            'Validar os campos da planilha:',
            '– Loja solicitante',
            '– Tipo de insumo (ex: etiquetas, fitas, suportes)',
            '– Quantidade e cor (ex: duas carreiras, branca/vermelha)'
          ]
        },
        {
          id: '5.7.1.2',
          nome: 'Imprimir a Lista de Separação',
          passos: [
            'Imprimir a planilha para facilitar a separação física dos insumos',
            'Organizar a lista de forma que permita separar loja por loja'
          ]
        }
      ]
    },
    {
      id: '5.7.2',
      nome: 'Separação Física dos Insumos',
      nivel: 'Operacional',
      ferramentas: ['Estoque de insumos', 'caixas', 'etiquetas'],
      tarefas: [
        {
          id: '5.7.2.1',
          nome: 'Localizar e Separar os Insumos por Loja',
          passos: [
            'Buscar os insumos no estoque destinado (separado da área de calçados)',
            'Separar conforme solicitado:',
            '– Tipo do item',
            '– Quantidade exata',
            '– Cor ou variação, se houver',
            'Agrupar os itens por loja solicitante'
          ]
        },
        {
          id: '5.7.2.2',
          nome: 'Montar Caixas para Expedição Interna',
          passos: [
            'Reaproveitar caixas vazias e montar conforme necessidade',
            'Acondicionar os insumos de forma organizada',
            'Identificar cada caixa com:',
            '– Nome da loja',
            '– Palavra-chave: "INSUMO"',
            '– Eventualmente, conteúdo principal (ex: "ETIQUETA BRANCA")'
          ]
        },
        {
          id: '5.7.2.3',
          nome: 'Organizar na Área de Saída',
          passos: [
            'Levar as caixas identificadas até a doca ou local de saída interna',
            'Deixar agrupadas por rota, caso haja carregamento múltiplo no dia'
          ]
        }
      ]
    }
  ]
};

export const separacaoProdutoGeral: ProcessoDetalhado = {
  id: 'CDS-008',
  nome: 'Separação de Produto (Geral)',
  descricao: 'Processo geral de separação de produtos para diversos destinos',
  icon: Layers,
  cor: 'bg-gradient-to-br from-rose-500 to-rose-600',
  nivel: 'Operacional',
  entrada: 'Pedido interno ou externo solicitando produto do estoque (para remanejo, influenciador, e-commerce, estoque mínimo, etc.)',
  saida: 'Produto corretamente separado, conferido e preparado para envio ao destino solicitado.',
  sistemas_utilizados: ['Sistema ou planilha de controle', 'etiquetas', 'embalagem', 'caixas', 'controle físico (visual/manual)'],
  tempo_execucao: '15-30 minutos por pedido',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '5.8.1',
      nome: 'Preparação para Separação',
      nivel: 'Operacional',
      ferramentas: ['Sistema', 'impressora', 'caixas', 'etiquetas'],
      tarefas: [
        {
          id: '5.8.1.1',
          nome: 'Identificar Pedido ou Solicitação',
          passos: [
            'Verificar o tipo de solicitação:',
            '– Pedido do e-commerce',
            '– Solicitação da loja',
            '– Pedido para influenciador',
            '– Estoque mínimo',
            'Acesso via sistema (relatório ou tela), e-mail ou planilha enviada por responsável',
            'Analisar as informações do pedido:',
            '– Código e descrição do produto',
            '– Numeração e cor',
            '– Loja destino ou cliente',
            '– Data de solicitação e tipo de envio'
          ]
        },
        {
          id: '5.8.1.2',
          nome: 'Organizar Pedido Fisicamente',
          passos: [
            'Imprimir o pedido (se necessário)',
            'Agrupar os pedidos a serem atendidos na mesma separação',
            'Preparar caixas vazias e etiquetas para identificação dos produtos separados'
          ]
        }
      ]
    },
    {
      id: '5.8.2',
      nome: 'Execução da Separação',
      nivel: 'Operacional',
      ferramentas: ['Estoque físico', 'produtos', 'embalagens'],
      tarefas: [
        {
          id: '5.8.2.1',
          nome: 'Localizar Produto no Estoque',
          passos: [
            'Buscar o produto com base em:',
            '– Marca',
            '– Referência',
            '– Numeração',
            'Verificar se está na prateleira correta (por marca e grade)'
          ]
        },
        {
          id: '5.8.2.2',
          nome: 'Conferir Produto Separado',
          passos: [
            'Validar:',
            '– Se o par está completo (pé esquerdo e direito)',
            '– Se não há sujeira, mancha ou defeito',
            '– Se está sem alarme (remover se necessário)',
            'Garantir que o produto está em condição de envio'
          ]
        },
        {
          id: '5.8.2.3',
          nome: 'Embalar ou Agrupar para Expedição',
          passos: [
            'Caso o destino seja e-commerce:',
            '– Acondicionar corretamente em caixa com etiqueta e nota fiscal',
            'Caso o destino seja loja ou influenciador:',
            '– Acomodar em caixa reaproveitada, com etiqueta de identificação (loja e tipo de separação)'
          ]
        },
        {
          id: '5.8.2.4',
          nome: 'Marcar o Produto como Separado (Controle Visual ou Planilha)',
          passos: [
            'Atualizar status na planilha (caso usada)',
            'Sinalizar fisicamente (ex: com etiqueta ou anotação) que o produto já está separado',
            'Levar até a área de envio, separando por rota ou tipo de entrega'
          ]
        }
      ]
    }
  ]
};

export const ecommerce: ProcessoDetalhado = {
  id: 'CDS-009',
  nome: 'E-commerce',
  descricao: 'Processamento de pedidos de venda via site, marketplaces ou canal digital',
  icon: ShoppingCart,
  cor: 'bg-gradient-to-br from-violet-500 to-violet-600',
  nivel: 'Operacional',
  entrada: 'Pedido de venda gerado via site, marketplaces ou canal digital (VTEX, Mercado Livre, etc.).',
  saida: 'Pedido embalado, etiquetado e disponível para coleta ou postagem dentro do prazo.',
  sistemas_utilizados: ['VTEX ou sistema de e-commerce', 'impressora', 'etiqueta de envio', 'embalagem', 'nota fiscal'],
  tempo_execucao: '15-30 minutos por pedido',
  frequencia: 'Contínua durante horário comercial',
  subprocessos: [
    {
      id: '5.9.1',
      nome: 'Geração e Impressão de Pedidos',
      nivel: 'Operacional',
      ferramentas: ['VTEX', 'dashboard do e-commerce', 'impressora'],
      tarefas: [
        {
          id: '5.9.1.1',
          nome: 'Acessar o Sistema de Pedidos do E-commerce',
          passos: [
            'Entrar no sistema onde os pedidos caem (ex: painel verde, sistema VTEX ou dashboard do e-commerce)',
            'Verificar a lista de pedidos pendentes para separação, priorizando:',
            '– Pedidos com vencimento próximo',
            '– Status "pronto para separar" ou similar',
            '– Tipo de canal (Correios, Mercado Livre, loja própria)'
          ]
        },
        {
          id: '5.9.1.2',
          nome: 'Imprimir a Lista de Separação',
          passos: [
            'Gerar o relatório com as seguintes informações:',
            '– Código do produto',
            '– Nome e referência',
            '– Numeração',
            '– Nome do cliente',
            '– Data do pedido',
            '– Canal de venda',
            'Imprimir o relatório para uso físico na área de estoque'
          ]
        }
      ]
    },
    {
      id: '5.9.2',
      nome: 'Separação do Pedido',
      nivel: 'Operacional',
      ferramentas: ['Estoque físico', 'produtos', 'lista impressa'],
      tarefas: [
        {
          id: '5.9.2.1',
          nome: 'Localizar Produto no Estoque',
          passos: [
            'Utilizar o código ou nome do produto para buscar nas prateleiras',
            'Confirmar:',
            '– Marca',
            '– Referência',
            '– Numeração',
            'Verificar se está armazenado de forma correta, dentro do grupo e numeração'
          ]
        },
        {
          id: '5.9.2.2',
          nome: 'Conferir Condição do Produto',
          passos: [
            'Validar se o par está completo (pé esquerdo e pé direito)',
            'Confirmar que o produto está:',
            '– Limpo',
            '– Sem manchas',
            '– Sem alarme',
            '– Sem defeitos aparentes'
          ]
        }
      ]
    },
    {
      id: '5.9.3',
      nome: 'Embalagem e Expedição',
      nivel: 'Operacional',
      ferramentas: ['Embalagem', 'etiquetas', 'fita adesiva', 'nota fiscal'],
      tarefas: [
        {
          id: '5.9.3.1',
          nome: 'Embalar Produto',
          passos: [
            'Escolher embalagem apropriada para o tamanho do calçado',
            'Acomodar o calçado de forma a evitar amassamento ou danos durante o transporte',
            'Incluir a nota fiscal impressa e fixar do lado de fora do pacote, se exigido',
            'Fechar com fita adesiva de segurança'
          ]
        },
        {
          id: '5.9.3.2',
          nome: 'Gerar e Imprimir Etiqueta de Envio',
          passos: [
            'Escanear ou digitar o pedido no sistema',
            'Imprimir a etiqueta de envio com os dados do cliente',
            'Colar a etiqueta na embalagem, em local visível e plano'
          ]
        },
        {
          id: '5.9.3.3',
          nome: 'Organizar Pedido para Coleta',
          passos: [
            'Separar o pedido conforme canal (ex: Correios, transportadora, Mercado Livre)',
            'Agrupar os pacotes prontos na área de coleta correspondente',
            'Priorizar pedidos com prazo de envio mais curto'
          ]
        }
      ]
    }
  ]
};

export const organizacaoEstoque: ProcessoDetalhado = {
  id: 'CDS-010',
  nome: 'Organização do Estoque',
  descricao: 'Organização sistemática de produtos recebidos no estoque',
  icon: Warehouse,
  cor: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
  nivel: 'Operacional',
  entrada: 'Produtos recebidos de outras lojas, devoluções, sobras de separações ou novos cadastros.',
  saida: 'Produtos organizados de forma padronizada, otimizando tempo nas futuras separações.',
  sistemas_utilizados: ['Prateleiras físicas', 'etiquetas (manuais ou impressas)', 'espaço do estoque', 'planilha ou controle interno (se houver)'],
  tempo_execucao: '60-90 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '5.10.1',
      nome: 'Preparação para Organização',
      nivel: 'Operacional',
      ferramentas: ['Produtos', 'etiquetas', 'marcador'],
      tarefas: [
        {
          id: '5.10.1.1',
          nome: 'Reunir Produtos para Armazenamento',
          passos: [
            'Coletar produtos que chegaram e estão aguardando organização, como:',
            '– Itens recebidos por remanejamento',
            '– Devoluções de pedidos',
            '– Produtos que sobraram de processos de separação',
            'Verificar se estão:',
            '– Com par completo',
            '– Em boas condições',
            '– Sem alarme'
          ]
        },
        {
          id: '5.10.1.2',
          nome: 'Verificar Etiquetagem e Referência',
          passos: [
            'Conferir se cada produto possui identificação clara (marca, referência e numeração)',
            'Caso falte etiqueta, utilizar marcador ou etiqueta provisória para organização visual'
          ]
        }
      ]
    },
    {
      id: '5.10.2',
      nome: 'Armazenamento por Marca, Referência e Numeração',
      nivel: 'Operacional',
      ferramentas: ['Prateleiras', 'produtos', 'controle visual'],
      tarefas: [
        {
          id: '5.10.2.1',
          nome: 'Agrupar por Marca',
          passos: [
            'Levar os produtos até a prateleira correspondente à marca do calçado',
            'Exemplo: Diadora, Mizuno, Usaflex – cada uma em seção separada',
            'Se a marca possuir poucos itens, agrupar com outra pequena marca, mantendo separação visível'
          ]
        },
        {
          id: '5.10.2.2',
          nome: 'Separar por Referência (Modelo)',
          passos: [
            'Dentro da marca, separar por referência (modelo ou código do produto)',
            'Garantir que os produtos de mesma referência fiquem agrupados lado a lado'
          ]
        },
        {
          id: '5.10.2.3',
          nome: 'Organizar por Numeração Crescente',
          passos: [
            'Alinhar os produtos da referência por tamanho, em ordem crescente (ex: 34, 35, 36...)',
            'Caso a referência possua poucos tamanhos, deixar espaço para futuras entradas'
          ]
        },
        {
          id: '5.10.2.4',
          nome: 'Ajustar Prateleiras e Espaçamento',
          passos: [
            'Ajustar posicionamento dos pares para evitar sobreposição ou mistura',
            'Posicionar os produtos com os solados virados para fora (visibilidade rápida da numeração)',
            'Manter os pares juntos (pé esquerdo + direito) e não soltos na prateleira'
          ]
        },
        {
          id: '5.10.2.5',
          nome: 'Sinalizar Organização Concluída',
          passos: [
            'Se houver controle visual (etiquetas ou cartelas de localização), atualizar a sinalização',
            'Caso use planilha, atualizar o local de armazenamento de cada produto'
          ]
        }
      ]
    }
  ]
};

export const armazenamentoMercadoria: ProcessoDetalhado = {
  id: 'CDS-011',
  nome: 'Armazenamento de Mercadoria no Estoque',
  descricao: 'Processo de armazenamento de mercadorias recebidas de fornecedores',
  icon: Archive,
  cor: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
  nivel: 'Operacional',
  entrada: 'Mercadorias recebidas de fornecedores, remanejamentos ou devoluções que precisam ser guardadas no estoque.',
  saida: 'Mercadoria armazenada corretamente, acessível e pronta para separações futuras.',
  sistemas_utilizados: ['Prateleiras', 'etiquetas', 'planilha ou sistema de controle', 'espaço físico do estoque'],
  tempo_execucao: '30-60 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '5.11.1',
      nome: 'Preparação para Armazenamento',
      nivel: 'Operacional',
      ferramentas: ['Mercadorias', 'área de triagem'],
      tarefas: [
        {
          id: '5.11.1.1',
          nome: 'Conferir Condição da Mercadoria Recebida',
          passos: [
            'Separar a mercadoria recebida por tipo:',
            '– Calçado, insumo, produto promocional ou especial',
            'Verificar:',
            '– Se os pares estão completos',
            '– Se há defeitos visíveis (riscos, sujeira, alarme)',
            'Em caso de mercadoria com problemas, direcionar para o fluxo de devolução ou triagem'
          ]
        },
        {
          id: '5.11.1.2',
          nome: 'Classificar a Mercadoria por Tipo e Destino',
          passos: [
            'Definir se o produto será guardado como:',
            '– Estoque normal (venda comum)',
            '– Estoque promocional ou de ponta',
            '– Estoque influenciador',
            '– Insumo',
            'Separar fisicamente os tipos antes de armazenar'
          ]
        }
      ]
    },
    {
      id: '5.11.2',
      nome: 'Alocação da Mercadoria no Estoque',
      nivel: 'Operacional',
      ferramentas: ['Prateleiras', 'etiquetas', 'sistema de controle'],
      tarefas: [
        {
          id: '5.11.2.1',
          nome: 'Identificar a Área Correta para Armazenamento',
          passos: [
            'Seguir a lógica já existente no estoque:',
            '– Divisão por marca',
            '– Dentro da marca, por referência (modelo)',
            '– Dentro da referência, por numeração',
            'Se a marca não tiver ainda local fixo, criar novo espaço e sinalizar'
          ]
        },
        {
          id: '5.11.2.2',
          nome: 'Posicionar a Mercadoria nas Prateleiras',
          passos: [
            'Organizar os pares nas prateleiras:',
            '– Com os dois pés juntos',
            '– Com solado virado para fora (facilita visualização)',
            '– Mantendo a sequência por numeração',
            'Garantir que as caixas estejam íntegras, se for o caso, e os produtos bem apoiados'
          ]
        },
        {
          id: '5.11.2.3',
          nome: 'Atualizar Controle de Armazenamento',
          passos: [
            'Se houver planilha ou sistema de controle, atualizar o local onde cada referência foi armazenada',
            'Caso o estoque use organização visual/manual, atualizar etiquetas ou plaquinhas indicando nova inclusão'
          ]
        }
      ]
    }
  ]
};

export const recebimentoMercadoriaLoja: ProcessoDetalhado = {
  id: 'CDS-012',
  nome: 'Recebimento de Mercadoria de Loja',
  descricao: 'Recebimento e tratamento de produtos enviados pelas lojas',
  icon: Users,
  cor: 'bg-gradient-to-br from-red-500 to-red-600',
  nivel: 'Operacional',
  entrada: 'Produtos enviados pelas lojas por motivo de devolução, defeito, troca, acerto de grade ou envio para influenciador.',
  saida: 'Mercadoria recebida da loja corretamente tratada, registrada e direcionada.',
  sistemas_utilizados: ['Fitil da remessa', 'caixas', 'sistema ou planilha', 'área de triagem do estoque'],
  tempo_execucao: '20-40 minutos por remessa',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '5.12.1',
      nome: 'Recebimento Físico da Remessa',
      nivel: 'Operacional',
      ferramentas: ['Fitil', 'produtos', 'área de recebimento'],
      tarefas: [
        {
          id: '5.12.1.1',
          nome: 'Conferência de Volume Recebido',
          passos: [
            'Verificar a remessa no momento da chegada:',
            '– Identificar a loja de origem',
            '– Contar o número de pares declarados na etiqueta ou fitil',
            'Conferir se a quantidade física bate com a remessa',
            'Em caso de divergência, sinalizar ao responsável e anotar para retorno à loja'
          ]
        },
        {
          id: '5.12.1.2',
          nome: 'Abrir e Classificar a Remessa',
          passos: [
            'Abrir as caixas com cuidado, separando os produtos por tipo de retorno:',
            '– Produto novo (remanescente de grade, envio normal)',
            '– Produto com defeito leve',
            '– Produto inutilizável (ponta, descarte)',
            '– Produto para influenciador',
            'Separar os pares com problema dos pares em boa condição'
          ]
        }
      ]
    },
    {
      id: '5.12.2',
      nome: 'Tratativa da Mercadoria Recebida',
      nivel: 'Operacional',
      ferramentas: ['Sistema', 'planilha', 'área de triagem'],
      tarefas: [
        {
          id: '5.12.2.1',
          nome: 'Triagem e Encaminhamento',
          passos: [
            'Para produtos em boas condições:',
            '– Conferir paridade (pé direito e esquerdo), limpeza, integridade',
            '– Enviar para armazenamento (ver Processo 11)',
            'Para produtos com defeito ou desgaste leve:',
            '– Encaminhar para o setor de defeitos ou loja descarte',
            'Para produtos sem condições de venda (ex: "pé queimado", hidrolisado):',
            '– Marcar como sucata e encaminhar para reciclagem ou descarte final'
          ]
        },
        {
          id: '5.12.2.2',
          nome: 'Registrar no Controle Interno',
          passos: [
            'Atualizar planilha ou sistema com o recebimento da remessa:',
            '– Loja de origem',
            '– Quantidade de pares',
            '– Tipo de tratativa (ex: armazenado, defeito, descartado)',
            'Se necessário, enviar confirmação de recebimento por e-mail ao gestor responsável'
          ]
        }
      ]
    }
  ]
};

export const cargaDescargaCaminhao: ProcessoDetalhado = {
  id: 'CDS-013',
  nome: 'Carga e Descarga de Caminhão',
  descricao: 'Operações de carga e descarga de mercadorias via transporte interno',
  icon: Truck,
  cor: 'bg-gradient-to-br from-slate-500 to-slate-600',
  nivel: 'Operacional',
  entrada: 'Chegada ou saída de mercadoria transportada por caminhão próprio (interno) com remessas entre lojas, centro de distribuição e fornecedores.',
  saida: 'Mercadoria carregada ou descarregada corretamente, com volumes conferidos e encaminhados ao destino final.',
  sistemas_utilizados: ['Fitil de remessa', 'caixas', 'relatórios impressos', 'carrinhos de carga', 'empilhadeira (se disponível)', 'controle interno'],
  tempo_execucao: '30-90 minutos conforme volume',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '5.13.1',
      nome: 'Descarga de Mercadoria Recebida',
      nivel: 'Operacional',
      ferramentas: ['Caminhão', 'caixas', 'fitil', 'área de recebimento'],
      tarefas: [
        {
          id: '5.13.1.1',
          nome: 'Apoiar o Motorista na Descarga',
          passos: [
            'Identificar se o motorista chegou sozinho com grande volume',
            'Acionar os colaboradores disponíveis para apoiar a descarga de forma ágil e segura',
            'Organizar uma fila de caixas na área de recebimento'
          ]
        },
        {
          id: '5.13.1.2',
          nome: 'Conferência de Volumes e Fitil',
          passos: [
            'Conferir o fitil de remessa (ou etiqueta) de cada caixa',
            'Verificar:',
            '– Loja de origem',
            '– Quantidade de pares declarada',
            '– Número da remessa',
            'Contar os pares da caixa e comparar com a quantidade informada',
            'Se estiver tudo correto, encaminhar a caixa para triagem ou estoque'
          ]
        },
        {
          id: '5.13.1.3',
          nome: 'Registrar Ocorrências',
          passos: [
            'Caso haja divergência (ex: número de pares incorreto, remessa trocada):',
            '– Informar imediatamente ao responsável',
            '– Registrar por foto ou anotação',
            '– Comunicar a loja de origem, se necessário'
          ]
        }
      ]
    },
    {
      id: '5.13.2',
      nome: 'Carga de Mercadorias para Distribuição',
      nivel: 'Operacional',
      ferramentas: ['Caminhão', 'caixas', 'relatórios', 'checklist'],
      tarefas: [
        {
          id: '5.13.2.1',
          nome: 'Organizar os Volumes por Rota',
          passos: [
            'Separar as caixas a serem entregues no dia, agrupando por loja destino',
            'Conferir se todas as caixas estão corretamente identificadas:',
            '– Loja destino',
            '– Tipo de material (remanejamento, insumo, produto, etc.)'
          ]
        },
        {
          id: '5.13.2.2',
          nome: 'Carregar o Caminhão com Cuidado',
          passos: [
            'Auxiliar o motorista durante a carga',
            'Posicionar os volumes de forma que as últimas entregas fiquem no fundo do caminhão',
            'Garantir que a carga esteja estável e segura para transporte'
          ]
        },
        {
          id: '5.13.2.3',
          nome: 'Confirmar Checklist de Envio',
          passos: [
            'Conferir com o motorista se todos os volumes da lista foram embarcados',
            'Entregar uma cópia do relatório ou etiqueta da remessa para conferência no destino',
            'Registrar a saída da carga no controle interno, se houver'
          ]
        }
      ]
    }
  ]
};

export const processosSaoJoseCampos: ProcessoDetalhado[] = [
  reposicaoArmazenamentoEstoque,
  separacaoProdutos,
  remanejamentoLojas,
  recebimentoNotasFiscais,
  contagemOrganizacaoEstoque,
  conferenciaProduto,
  separacaoInsumos,
  separacaoProdutoGeral,
  ecommerce,
  organizacaoEstoque,
  armazenamentoMercadoria,
  recebimentoMercadoriaLoja,
  cargaDescargaCaminhao,
];