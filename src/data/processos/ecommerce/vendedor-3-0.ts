
import { Users, BarChart, Target, UserPlus, Gift, Smartphone, Monitor, ShoppingCart, Search, FileText } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

export const vendaCanalTresPontoZero: ProcessoDetalhado = {
  id: 'VEN-001',
  nome: 'Venda através do Canal 3.0',
  descricao: 'Interesse do cliente em comprar um produto disponível no e-commerce',
  icon: Users,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Interesse do cliente em comprar um produto disponível no e-commerce.',
  saida: 'Venda registrada com código do vendedor e comissão atribuída.',
  sistemas_utilizados: ['Sales App', 'App Oscar'],
  tempo_execucao: '10-20 minutos',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '1.1',
      nome: 'Utilização do Canal de Vendas 3.0',
      nivel: 'Operacional',
      ferramentas: ['Sales App', 'App Oscar'],
      tarefas: [
        {
          id: '1.1.1',
          nome: 'Acesso ao Canal de Vendas',
          passos: [
            'Acessar o Canal 3.0 por um dispositivo da loja (tablet, computador ou smartphone)',
            'Abrir o Sales App ou o App Oscar',
            'Se estiver utilizando o Sales App: Realizar login com o e-mail da loja e a senha padrão Grupo@Oscar0000 (substituindo os 4 dígitos pelo número da loja)',
            'Se estiver utilizando o App Oscar: login não é necessário, salvo se solicitado - Neste caso, usar o login pessoal'
          ]
        },
        {
          id: '1.1.2',
          nome: 'Registro da Venda',
          passos: [
            'No Sales App ou App Oscar, localizar o produto pelo campo de busca utilizando: nome, marca ou código do produto (8x9)',
            'Selecionar a numeração desejada do produto',
            'Informar ao cliente as condições de pagamento: parcelamento mínimo de R$ 80,00 por parcela no cartão',
            'Alterar o CEP: Clicar em "Alterar CEP"',
            'Inserir o CEP do cliente',
            'Clicar em "Atualizar"',
            'Confirmar se houve alteração no valor do frete',
            'Inserir o código de vendas (identificação do vendedor)',
            'Se houver, aplicar um cupom de desconto no campo correspondente',
            'Clicar em "Continuar" para prosseguir'
          ]
        },
        {
          id: '1.1.3',
          nome: 'Preenchimento de Dados do Cliente',
          passos: [
            'Se for a primeira compra do cliente, preencher: Nome completo',
            'Preencher CPF',
            'Preencher endereço completo, número e complemento',
            'Se for cliente recorrente, basta informar o CPF para que o sistema recupere os dados automaticamente',
            'Confirmar o endereço e os demais dados'
          ]
        },
        {
          id: '1.1.4',
          nome: 'Finalização da Venda',
          passos: [
            'Revisar todos os dados na tela de resumo do pedido',
            'Clicar em "Ir para pagamento"',
            'Selecionar a forma de pagamento:',
            '- Crédito/Débito → Pagamento realizado automaticamente na maquininha POS Stone',
            '- Pix → QR Code gerado na tela',
            '- Digitar Cartão → Preencher manualmente os dados do cartão, caso o cliente não esteja com o cartão físico',
            '- Link de Pagamento → Copiar o link e enviar ao cliente',
            'Após a finalização, o cliente receberá confirmação via e-mail e WhatsApp com o resumo e passo a passo do pedido'
          ]
        }
      ]
    }
  ]
};

export const acompanhamentoDesempenhoVendas: ProcessoDetalhado = {
  id: 'VEN-002',
  nome: 'Acompanhamento de Desempenho de Vendas',
  descricao: 'Vendas realizadas nos canais físicos e online',
  icon: BarChart,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Tático',
  entrada: 'Vendas realizadas nos canais físicos e online.',
  saida: 'Relatórios de desempenho por loja, vendedor, diretoria e regional.',
  sistemas_utilizados: ['Portal KPI'],
  tempo_execucao: '30-60 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '2.1',
      nome: 'Monitoramento via Portal KPI',
      nivel: 'Operacional',
      ferramentas: ['Portal KPI'],
      tarefas: [
        {
          id: '2.1.1',
          nome: 'Acesso ao Portal KPI',
          passos: [
            'Acessar o Portal KPI através do navegador da loja ou dispositivo autorizado',
            'Fazer login utilizando as credenciais da empresa',
            'Aplicar de filtros para visualização',
            'No topo da tela do portal, localizar a seção de filtros',
            'Selecionar conforme necessidade:',
            '- "Somente" → para visualizar apenas as vendas realizadas via APP',
            '- "Canal" → Escolher entre:',
            '  - Marketplace in (para vendas 3P / Seller / Loja parceira)',
            '  - Instore (para vendas realizadas na loja física)',
            'No filtro "Bandeira", selecionar o grupo de lojas que deseja analisar'
          ]
        }
      ]
    },
    {
      id: '2.2',
      nome: 'Relatórios e Indicadores/Métricas',
      nivel: 'Operacional',
      ferramentas: ['Portal KPI'],
      tarefas: [
        {
          id: '2.2.1',
          nome: 'Exportação de Relatórios',
          passos: [
            'Posicionar o cursor sobre a área desejada do relatório',
            'Clicar com o botão direito do mouse e selecionar a opção "Exportar"',
            'Escolher o formato desejado (Excel, CSV, etc.) e salvar o arquivo'
          ]
        },
        {
          id: '2.2.2',
          nome: 'Indicadores/Métricas que devem ser acompanhadas',
          passos: [
            'Meta do mês: valor estabelecido pela diretoria para cada loja',
            'Valor faturado: total efetivamente vendido',
            'Número de pedidos: quantidade de vendas realizadas',
            '% Atingida: percentual da meta alcançada',
            'Resultados por: Loja',
            'Resultados por: Vendedor',
            'Resultados por: Diretor',
            'Resultados por: Regional',
            'Utilizar essas informações para apoiar a tomada de decisão e ajustes nas estratégias de venda'
          ]
        },
      ]
    }
  ]
};

export const gestaoMetasVendas: ProcessoDetalhado = {
  id: 'VEN-003',
  nome: 'Gestão de Metas de Vendas 3.0',
  descricao: 'Definição das metas de vendas do Canal 3.0 pela diretoria',
  icon: Target,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Tático',
  entrada: 'Definição das metas de vendas do Canal 3.0 pela diretoria.',
  saida: 'Metas distribuídas para as lojas e registradas no sistema corporativo.',
  sistemas_utilizados: ['E-mail corporativo', 'Planilha Excel de Metas'],
  tempo_execucao: '60-120 minutos',
  frequencia: 'Mensal',
  subprocessos: [
    {
      id: '3.1',
      nome: 'Distribuição e Registro das Metas',
      nivel: 'Tático',
      ferramentas: ['E-mail corporativo', 'Planilha Excel de Metas'],
      tarefas: [
        {
          id: '3.1.1',
          nome: 'Definição e Distribuição das Metas',
          passos: [
            'A diretoria define o valor total das metas mensais para o Canal de Vendas 3.0',
            'O valor mínimo definido por loja é de R$ 3.000,00',
            'O coordenador 3.0 distribui as metas individualmente conforme histórico de vendas da loja e potencial de faturamento',
            'Consolidar as metas em uma planilha Excel com nome e código da loja, valor da meta e período de validade (ex: junho/2025)'
          ]
        },
        {
          id: '3.1.2',
          nome: 'Envio e Lançamento da Meta no Sistema',
          passos: [
            'Após o preenchimento da planilha, enviar por e-mail para andre.guimaraes@grupooscar.com.br',
            'Assunto do e-mail: "Cadastro de Metas Canal 3.0 – Mês/Ano"',
            'Corpo do e-mail deve conter breve descrição do mês de referência e confirmação de que a planilha segue em anexo',
            'O responsável do time de dados realiza o lançamento das metas no sistema',
            'O envio deve ser feito exclusivamente por planilha excel padrão'
          ]
        }
      ]
    }
  ]
};

export const cadastroLojaVendedor: ProcessoDetalhado = {
  id: 'VEN-004',
  nome: 'Cadastro de Loja e Vendedor no Sales App',
  descricao: 'Solicitação de cadastro de nova loja ou novo vendedor para atuação no Canal de Vendas 3.0',
  icon: UserPlus,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Solicitação de cadastro de nova loja ou novo vendedor para atuação no Canal de Vendas 3.0.',
  saida: 'Loja ou vendedor cadastrado corretamente na VTEX e habilitado para operar no Sales App.',
  sistemas_utilizados: ['VTEX', 'Sales App'],
  tempo_execucao: '15-30 minutos',
  frequencia: 'Sob demanda',
  subprocessos: [
    {
      id: '4.1',
      nome: 'Cadastro de Loja na VTEX',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '4.1.1',
          nome: 'Cadastro da Loja para uso no Sales App',
          passos: [
            'Acessar a VTEX com perfil administrativo',
            'Ir até a seção Configuração da Loja',
            'Navegar até a aba Sales App',
            'Clicar em Loja Física',
            'Preencher os campos obrigatórios: Nome da Loja, CEP',
            'Política Comercial: selecionar sempre "Vendedor 3.0"',
            'Confirmar e salvar o cadastro'
          ]
        }
      ]
    },
    {
      id: '4.2',
      nome: 'Cadastro de Vendedor na VTEX',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '4.2.1',
          nome: 'Cadastrar novo vendedor na plataforma',
          passos: [
            'Acessar a aba "Vendedores" dentro da VTEX',
            'Clicar em Cadastrar Vendedor',
            'Preencher: Nome completo do vendedor, Código de vendas (apenas os números)',
            'E-mail: pode ser o próprio código de vendas (ex: 43428@gmail.com)',
            'Número da loja vinculada ao vendedor',
            'Confirmar e salvar o cadastro'
          ]
        }
      ]
    }
  ]
};

export const campanhasPontuacao: ProcessoDetalhado = {
  id: 'VEN-005',
  nome: 'Campanhas de Pontuação com o App Receba',
  descricao: 'Disponibilização de valor mensal para campanhas de incentivo',
  icon: Gift,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Tático',
  entrada: 'Disponibilização de valor mensal para campanhas de incentivo.',
  saida: 'Pontos cadastrados para vendedores, gerentes e regionais.',
  sistemas_utilizados: ['App Receba'],
  tempo_execucao: '5-10 minutos',
  frequencia: 'Mensal',
  subprocessos: [
    {
      id: '5.1',
      nome: 'Cadastro de Pontos no Receba',
      nivel: 'Operacional',
      ferramentas: ['App Receba'],
      tarefas: [
        {
          id: '5.1.1',
          nome: 'Inserção de Pontos',
          passos: [
            'Acessar o App Receba através do sistema corporativo',
            'No campo "Search", inserir o CPF do colaborador, sem pontos (.) ou traços (-)',
            'Clicar no botão "+" para adicionar pontos',
            'No campo "Enter Points", inserir a quantidade de pontos (apenas valores inteiros, ex.: 100)',
            'No campo de justificativa, explicar o motivo da pontuação',
            'Confirmar a inserção'
          ]
        }
      ]
    }
  ]
};

export const trocaMaquininhaStone: ProcessoDetalhado = {
  id: 'VEN-006',
  nome: 'Troca de Maquininha Stone',
  descricao: 'Identificação de necessidade de troca por defeito ou erro',
  icon: Smartphone,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Identificação de necessidade de troca por defeito ou erro.',
  saida: 'Maquininha nova recebida e configurada.',
  sistemas_utilizados: ['E-mail corporativo', 'Maquininha POS Stone'],
  tempo_execucao: '30-45 minutos',
  frequencia: 'Sob demanda',
  subprocessos: [
    {
      id: '6.1',
      nome: 'Solicitação de Troca',
      nivel: 'Operacional',
      ferramentas: ['E-mail corporativo'],
      tarefas: [
        {
          id: '6.1.1',
          nome: 'Envio de Solicitação',
          passos: [
            'Enviar e-mail para bruna.ariane@grupooscar.com.br e vanessa.souza@grupooscar.com.br',
            'No título do e-mail, informar o número da loja que está solicitando a troca',
            'No corpo do e-mail, informar: Nome do Gestor, Telefone do Gestor, E-mail da loja, CEP, Endereço completo, Cidade',
            'Informar número de série (S/N) da maquininha',
            'Informar horário de funcionamento da loja: Segunda a Sexta, Sábado, Domingo'
          ]
        }
      ]
    },
    {
      id: '6.2',
      nome: 'Configuração da Nova Maquininha',
      nivel: 'Operacional',
      ferramentas: ['Maquininha POS Stone'],
      tarefas: [
        {
          id: '6.2.1',
          nome: 'Inicialização e Configuração',
          passos: [
            'Ao receber a nova maquininha, ligar o equipamento',
            'Configurar a rede: preferencialmente conectar ao Wi-Fi da loja',
            'Caso indisponível, utilizar os dados móveis',
            'Quando solicitado, inserir o Stone Code: 742990657'
          ]
        },
        {
          id: '6.2.2',
          nome: 'Comunicação com o Sales App',
          passos: [
            'Após clicar em "Concluir compra" no Sales App, caso apareça a mensagem de que não está conectado',
            'Clicar em "Digitar código do terminal"',
            'Inserir o S/N (número de série) da maquininha, localizado na parte traseira do equipamento',
            'Confirmar a conexão e realizar um teste de compra'
          ]
        }
      ]
    }
  ]
};

export const gerenciamentoVitrines: ProcessoDetalhado = {
  id: 'VEN-007',
  nome: 'Gerenciamento de Vitrines no Sales App',
  descricao: 'Atualizações de promoções e campanhas nos sites',
  icon: Monitor,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Tático',
  entrada: 'Atualizações de promoções e campanhas nos sites.',
  saida: 'Vitrines e coleções atualizadas no Sales App.',
  sistemas_utilizados: ['VTEX', 'Sales App'],
  tempo_execucao: '30-60 minutos',
  frequencia: 'Semanal',
  subprocessos: [
    {
      id: '7.1',
      nome: 'Atualização das Vitrines',
      nivel: 'Tático',
      ferramentas: ['VTEX', 'Sales App'],
      tarefas: [
        {
          id: '7.1.1',
          nome: 'Levantamento de Campanhas',
          passos: [
            'Acessar o site oficial da empresa',
            'Realizar um checklist das campanhas e promoções ativas',
            'Comparar as campanhas ativas com as vitrines disponíveis no Sales App'
          ]
        },
        {
          id: '7.1.2',
          nome: 'Identificação da Coleção',
          passos: [
            'No site, clicar no banner da campanha ativa',
            'Selecionar algum filtro da coleção',
            'Copiar da URL o número de identificação da coleção (ID)'
          ]
        },
        {
          id: '7.1.3',
          nome: 'Alteração no Sales App via VTEX',
          passos: [
            'Acessar a plataforma VTEX',
            'Navegar até: Storefront → Headless CMS → Vitrine Sales App',
            'Selecionar a vitrine desejada e clicar em "+" para adicionar nova coleção',
            'Selecionar: "Vitrine de Coleção"',
            'Preencher: Título da vitrine, Descrição da vitrine, ID da coleção',
            'Clicar em "Salvar"',
            'Publicar as alterações clicando em "Publicar" e "Publicar agora"'
          ]
        },
        {
          id: '7.1.4',
          nome: 'Validação no Sales App',
          passos: [
            'Acessar o Sales App e confirmar se a nova coleção foi corretamente atualizada'
          ]
        }
      ]
    }
  ]
};

export const vendaSalesApp: ProcessoDetalhado = {
  id: 'VEN-008',
  nome: 'Como Vender dentro do Sales App',
  descricao: 'Interesse do cliente em realizar uma compra presencialmente na loja, utilizando o Sales App',
  icon: ShoppingCart,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Interesse do cliente em realizar uma compra presencialmente na loja, utilizando o Sales App.',
  saida: 'Venda concluída com emissão de pedido e envio de informações ao cliente.',
  sistemas_utilizados: ['Sales App', 'POS Stone'],
  tempo_execucao: '10-20 minutos',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '8.1',
      nome: 'Realização da Venda',
      nivel: 'Operacional',
      ferramentas: ['Sales App', 'POS Stone'],
      tarefas: [
        {
          id: '8.1.1',
          nome: 'Acesso e Navegação',
          passos: [
            'Acessar o Sales App no dispositivo da loja',
            'Realizar o login com e-mail da loja e senha padrão',
            'Na página inicial, visualizar as vitrines com as coleções disponíveis'
          ]
        },
        {
          id: '8.1.2',
          nome: 'Localização do Produto',
          passos: [
            'Utilizar o campo de busca para localizar o produto: nome da marca, nome do produto ou código (8x9)',
            'Utilizar os filtros disponíveis: Categoria, Numeração, Marca'
          ]
        },
        {
          id: '8.1.3',
          nome: 'Apresentação de Condições ao Cliente',
          passos: [
            'Escolher o produto e a numeração desejada',
            'Informar ao cliente as condições de pagamento: parcelamento mínimo de R$ 80,00 por parcela no cartão'
          ]
        },
        {
          id: '8.1.4',
          nome: 'Ajuste de CEP',
          passos: [
            'O CEP padrão estará com o endereço da loja',
            'Clicar em "Alterar CEP"',
            'Inserir o CEP do cliente',
            'Clicar em "Atualizar"',
            'Confirmar se houve alteração no valor do frete'
          ]
        },
        {
          id: '8.1.5',
          nome: 'Aplicação do Código e Cupom',
          passos: [
            'Inserir o código de vendas (identificação do vendedor)',
            'Se aplicável, inserir um cupom de desconto',
            'Clicar em "Continuar" para prosseguir'
          ]
        },
        {
          id: '8.1.6',
          nome: 'Preenchimento dos Dados do Cliente',
          passos: [
            'Se for a primeira compra: preencher nome completo, CPF, endereço, número e complemento',
            'Se for cliente recorrente: inserir o CPF para que o sistema recupere os dados automaticamente',
            'Confirmar o endereço e os demais dados'
          ]
        },
        {
          id: '8.1.7',
          nome: 'Finalização do Pedido',
          passos: [
            'Revisar todos os dados na tela de resumo do pedido',
            'Clicar em "Ir para pagamento"'
          ]
        },
        {
          id: '8.1.8',
          nome: 'Seleção da Forma de Pagamento',
          passos: [
            'Escolher uma das opções:',
            '- Crédito/Débito → Pagamento realizado automaticamente na maquininha POS Stone',
            '- Pix → QR Code gerado na tela',
            '- Digitar Cartão → Preencher manualmente os dados do cartão',
            '- Link de Pagamento → Copiar o link e enviar ao cliente',
            'Se usar o Link de Pagamento: abrir nova aba, colar o link, preencher dados do cartão e finalizar'
          ]
        },
        {
          id: '8.1.9',
          nome: 'Envio de Confirmação ao Cliente',
          passos: [
            'Após a finalização da venda, o cliente receberá confirmação via e-mail e WhatsApp com o resumo e passo a passo do pedido'
          ]
        }
      ]
    }
  ]
};

export const consultaDesempenhoLojas: ProcessoDetalhado = {
  id: 'VEN-009',
  nome: 'Consulta de Desempenho das Lojas',
  descricao: 'Vendas realizadas nas lojas e canais digitais',
  icon: BarChart,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Tático',
  entrada: 'Vendas realizadas nas lojas e canais digitais.',
  saida: 'Relatórios de desempenho por loja e indicadores estratégicos.',
  sistemas_utilizados: ['Portal KPI'],
  tempo_execucao: '30-60 minutos',
  frequencia: 'Diária',
  subprocessos: [
    {
      id: '9.1',
      nome: 'Acompanhamento de Indicadores',
      nivel: 'Tático',
      ferramentas: ['Portal KPI'],
      tarefas: [
        {
          id: '9.1.1',
          nome: 'Acesso ao Portal KPI',
          passos: [
            'Acessar o Portal KPI via navegador autorizado pela empresa',
            'Fazer login com as credenciais da unidade ou regional'
          ]
        },
        {
          id: '9.1.2',
          nome: 'Aplicação de Filtros para Consulta',
          passos: [
            'No topo da tela, utilizar os filtros disponíveis:',
            '- "Somente" → visualizar exclusivamente vendas realizadas via APP',
            '- "Canal" → selecionar "Marketplace in" para visualizar vendas 3P / Seller / Loja parceira',
            '- "Bandeira" → selecionar o grupo de lojas que deseja analisar'
          ]
        },
        {
          id: '9.1.3',
          nome: 'Análise e Exportação de Relatórios',
          passos: [
            'Acompanhar os indicadores: Meta do mês, Valor faturado, Número de pedidos, % atingida da meta',
            'Para exportar o relatório: clicar com o botão direito na área desejada',
            'Selecionar a opção "Exportar"',
            'Salvar o arquivo no formato desejado para análise posterior'
          ]
        }
      ]
    }
  ]
};

export const identificacaoVendasIFC: ProcessoDetalhado = {
  id: 'VEN-010',
  nome: 'Identificação de Vendas IFC ou Loja',
  descricao: 'Pedido ou necessidade de identificar a origem da venda: Infracommerce ou Loja Física',
  icon: Search,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Pedido ou necessidade de identificar a origem da venda: Infracommerce ou Loja Física.',
  saida: 'Classificação correta do canal de venda.',
  sistemas_utilizados: ['VTEX'],
  tempo_execucao: '5-10 minutos',
  frequencia: 'Sob demanda',
  subprocessos: [
    {
      id: '10.1',
      nome: 'Identificação do Canal na VTEX',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '10.1.1',
          nome: 'Acesso ao Sistema',
          passos: [
            'Acessar a plataforma VTEX com credenciais autorizadas'
          ]
        },
        {
          id: '10.1.2',
          nome: 'Abertura de Consulta',
          passos: [
            'Navegar até o menu "Canais"',
            'Selecionar a opção "Seller"'
          ]
        },
        {
          id: '10.1.3',
          nome: 'Classificação da Venda',
          passos: [
            'Se a venda for através de Infracommerce, verificar se está vinculada a: Oscar Calçados, Gaston, Paquetá Calçados, Paquetá Esportes',
            'Se for venda de Loja Física, o filtro será: Nome ou código da loja (ex.: grupooscar0006)'
          ]
        }
      ]
    }
  ]
};

export const consultaPedidosVTEX: ProcessoDetalhado = {
  id: 'VEN-011',
  nome: 'Consulta Detalhada de Pedidos na VTEX',
  descricao: 'Solicitação de consulta de pedido por cliente ou gestão',
  icon: FileText,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Solicitação de consulta de pedido por cliente ou gestão.',
  saida: 'Relatório detalhado do pedido, incluindo status, pagamentos e promoções.',
  sistemas_utilizados: ['VTEX'],
  tempo_execucao: '10-15 minutos',
  frequencia: 'Sob demanda',
  subprocessos: [
    {
      id: '11.1',
      nome: 'Consulta Completa de Pedido',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '11.1.1',
          nome: 'Acesso à VTEX',
          passos: [
            'Acessar a plataforma VTEX utilizando credenciais autorizadas'
          ]
        },
        {
          id: '11.1.2',
          nome: 'Realização da Pesquisa',
          passos: [
            'Consultar o pedido usando: CPF do cliente, Nome do cliente ou Número do pedido'
          ]
        },
        {
          id: '11.1.3',
          nome: 'Análise das Informações',
          passos: [
            'Verificar: Dados completos do cliente e endereço de entrega',
            'Verificar: Valor pago e forma de pagamento',
            'Verificar: Linha do tempo do pedido (desde criação até entrega)',
            'Verificar: Promoções aplicadas no pedido',
            'Verificar: Código do vendedor associado à venda',
            'Verificar: Canal de venda (APP, loja física ou marketplace)',
            'Verificar: Transportadora responsável',
            'Verificar: Código de rastreamento',
            'Verificar: Histórico de e-mails enviados ao cliente'
          ]
        }
      ]
    }
  ]
};

export const processosVendedorTresPontoZero: ProcessoDetalhado[] = [
  vendaCanalTresPontoZero,
  acompanhamentoDesempenhoVendas,
  gestaoMetasVendas,
  cadastroLojaVendedor,
  campanhasPontuacao,
  trocaMaquininhaStone,
  gerenciamentoVitrines,
  vendaSalesApp,
  consultaDesempenhoLojas,
  identificacaoVendasIFC,
  consultaPedidosVTEX
];
