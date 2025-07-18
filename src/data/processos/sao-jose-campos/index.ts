
import { Package, Search } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

export const reposicaoArmazenamentoEstoque: ProcessoDetalhado = {
  id: 'SJC-001',
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
      id: '1.1',
      nome: 'Organização e Armazenamento por Marca e Referência',
      nivel: 'Operacional',
      ferramentas: ['Prateleiras', 'etiquetas', 'caixas'],
      tarefas: [
        {
          id: '1.1.1',
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
          id: '1.1.2',
          nome: 'Avaliar Local de Armazenamento Existente',
          passos: [
            'Localizar no estoque a prateleira onde estão armazenados produtos da mesma marca',
            'Conferir se já existem produtos da mesma referência (código ou nome do modelo)',
            'Avaliar também se há espaço disponível naquela prateleira',
            'Identificar se a numeração está dentro do padrão da grade (ex: 34 a 39 para feminino)'
          ]
        },
        {
          id: '1.1.3',
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
          id: '1.1.4',
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
  id: 'SJC-002',
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
      id: '2.1',
      nome: 'Separação para E-commerce',
      nivel: 'Operacional',
      ferramentas: ['Sistema central', 'impressora', 'embalagens'],
      tarefas: [
        {
          id: '2.1.1',
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
          id: '2.1.2',
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
          id: '2.1.3',
          nome: 'Conferência Final do Produto para Embalagem',
          passos: [
            'Comparar item físico com a descrição impressa no relatório',
            'Verificar novamente tamanho, modelo e condição geral',
            'Caso haja divergência, comunicar o responsável antes de seguir para embalagem'
          ]
        },
        {
          id: '2.1.4',
          nome: 'Embalar o Produto',
          passos: [
            'Separar caixa ou embalagem adequada de acordo com o tamanho e volume do produto',
            'Acomodar o calçado corretamente para evitar amassamento',
            'Incluir a nota fiscal (impressa ou já anexada à etiqueta)',
            'Fechar a caixa com fita lacre padrão'
          ]
        },
        {
          id: '2.1.5',
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
      id: '2.2',
      nome: 'Separação para Influenciador e Estoque Mínimo',
      nivel: 'Operacional',
      ferramentas: ['e-mail', 'planilhas', 'caixas'],
      tarefas: [
        {
          id: '2.2.1',
          nome: 'Conferir Pedido Recebido por E-mail',
          passos: [
            'Abrir e-mail enviado pela compradora ou responsável (ex: Marlene)',
            'Verificar lista anexa com os produtos solicitados para influenciador ou estoque mínimo',
            'Confirmar loja de origem e destino, modelo, cor, tamanho e tipo de item'
          ]
        },
        {
          id: '2.2.2',
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
          id: '2.2.3',
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

// Processo 5.3 - Remanejamento entre Lojas
const remanejamentoLojas: ProcessoDetalhado = {
  id: '5.3',
  nome: 'Remanejamento entre Lojas',
  descricao: 'Redistribuição de produtos entre filiais para otimizar vendas e exposição',
  icon: Package,
  cor: 'bg-gray-500',
  nivel: 'Operacional',
  entrada: 'Solicitação ou planejamento de redistribuição de produtos entre filiais',
  saida: 'Produtos redistribuídos para as lojas com maior potencial de venda ou demanda',
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
          passos: ['Observar produtos parados, com grade incompleta ou com giro baixo', 'Validar com comprador se itens podem ser remanejados', 'Solicitar cadastro no sistema ou planilha de controle']
        },
        {
          id: '5.3.1.2',
          nome: 'Gerar Relatório de Remanejamento',
          passos: ['Acessar sistema Mega na aba Remanejamento', 'Filtrar itens por loja de origem', 'Gerar relatório com produto, numeração, loja destino e quantidade', 'Imprimir relatório para execução']
        }
      ]
    }
  ]
};

// Processo 5.4 - Recebimento e Inclusão de Notas Fiscais
const recebimentoNotasFiscais: ProcessoDetalhado = {
  id: '5.4',
  nome: 'Recebimento e Inclusão de Notas Fiscais',
  descricao: 'Recebimento físico de produtos e registro de notas fiscais no sistema',
  icon: Package,
  cor: 'bg-indigo-500',
  nivel: 'Operacional',
  entrada: 'Produtos entregues fisicamente via transportadora ou fornecedor, acompanhados de Nota Fiscal',
  saida: 'Nota fiscal registrada no sistema e produtos prontos para movimentação e controle de estoque',
  sistemas_utilizados: ['Sistema Mega', 'e-mail', 'WhatsApp'],
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
          passos: ['Dirigir-se à portaria quando chamado', 'Assinar comprovante de entrega da transportadora', 'Trazer produtos ao setor de conferência de estoque']
        },
        {
          id: '5.4.1.2',
          nome: 'Conferência Física dos Itens da Nota',
          passos: ['Abrir caixas recebidas', 'Comparar itens com nota fiscal (quantidade, modelos, cores, numeração)', 'Validar condições dos produtos (limpos, corretos, sem defeitos)', 'Registrar divergências e comunicar responsável se necessário']
        }
      ]
    }
  ]
};

// Processo 5.9 - E-commerce
const ecommerce: ProcessoDetalhado = {
  id: '5.9',
  nome: 'E-commerce',
  descricao: 'Processamento de pedidos de venda via site, marketplaces ou canal digital',
  icon: Search,
  cor: 'bg-purple-500',
  nivel: 'Operacional',
  entrada: 'Pedido de venda gerado via site, marketplaces ou canal digital (VTEX, Mercado Livre, etc.)',
  saida: 'Pedido embalado, etiquetado e disponível para coleta ou postagem dentro do prazo',
  sistemas_utilizados: ['VTEX', 'Mercado Livre', 'sistema de e-commerce'],
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
          nome: 'Acessar Sistema de Pedidos',
          passos: ['Entrar no sistema onde pedidos caem (painel verde, VTEX)', 'Verificar lista de pedidos pendentes', 'Priorizar por vencimento próximo e status pronto para separar']
        },
        {
          id: '5.9.1.2',
          nome: 'Imprimir Lista de Separação',
          passos: ['Gerar relatório com código, nome, numeração do produto', 'Incluir nome do cliente, data do pedido e canal de venda', 'Imprimir para uso físico na área de estoque']
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
  ecommerce,
];
