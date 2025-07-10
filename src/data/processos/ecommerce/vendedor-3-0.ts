
import { Users, BarChart } from 'lucide-react';
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
        }
      ]
    }
  ]
};

export const processosVendedorTresPontoZero: ProcessoDetalhado[] = [
  vendaCanalTresPontoZero,
  acompanhamentoDesempenhoVendas
];
