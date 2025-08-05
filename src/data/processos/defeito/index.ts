
import { AlertTriangle, FileSearch, DollarSign } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

export const tratamentoProdutosDefeito: ProcessoDetalhado = {
  id: 'DEF-001',
  nome: 'Tratamento de Produtos com Defeito',
  descricao: 'Produto com defeito recebido da loja via remessa, com ou sem nota fiscal',
  icon: AlertTriangle,
  cor: 'bg-gradient-to-br from-red-500 to-red-600',
  nivel: 'Operacional',
  entrada: 'Produto com defeito recebido da loja via remessa, com ou sem nota fiscal.',
  saida: 'Produtos com defeito devidamente triados, classificados e alocados para indenização, retorno ou descarte.',
  sistemas_utilizados: ['Puxadas organizadas por marca e departamento', 'planilha de controle', 'sistema interno'],
  subprocessos: [
    {
      id: '1.1',
      nome: 'Conferência e Triagem de Produtos com Defeito',
      nivel: 'Operacional',
      ferramentas: ['Puxadas organizadas por marca', 'planilha de controle', 'sistema interno'],
      tarefas: [
        {
          id: '1.1.1',
          nome: 'Conferência Física do Produto Recebido',
          passos: [
            'Verificar a integridade do produto ao recebê-lo:',
            '– Está limpo e em boas condições para manuseio?',
            '– Possui o par correto (esquerdo e direito)?',
            '– Apresenta sinais claros de defeito (rasgo, descolamento, hidrolise etc.)?',
            '– Tem alarme preso? (remover se necessário)'
          ]
        },
        {
          id: '1.1.2',
          nome: 'Avaliação Técnica de Defeito',
          passos: [
            'Conferir itens como:',
            '– Falta de tira, palmilha, cadarço',
            '– Presença de sujeira, mancha, pé queimado ou "gato"',
            'Identificar se o produto pode ser consertado (ex: colar, montar par)',
            'Caso seja reparável, realizar o conserto e realocar para a loja que necessite da grade',
            'Caso não seja defeito, retornar à loja de origem com ressalva'
          ]
        }
      ]
    },
    {
      id: '1.2',
      nome: 'Organização e Armazenamento dos Produtos Defeituosos',
      nivel: 'Operacional',
      ferramentas: ['Prateleiras por marca e categoria'],
      tarefas: [
        {
          id: '1.2.1',
          nome: 'Classificação por Departamento e Marca',
          passos: [
            'Agrupar os produtos conforme seu tipo:',
            '– Feminino / Masculino / Tênis / Infantil / Acessórios (bolsas, cintos, etc.)',
            'Separar por marca e modelo'
          ]
        },
        {
          id: '1.2.2',
          nome: 'Armazenamento nas Puxadas',
          passos: [
            'Alocar os produtos nas prateleiras identificadas por:',
            '– Departamento',
            '– Marca',
            'Garantir fácil rastreabilidade para etapas futuras (indenização ou retorno)'
          ]
        }
      ]
    },
    {
      id: '1.3',
      nome: 'Tratamento de Itens Não Indenizáveis',
      nivel: 'Operacional',
      ferramentas: ['Planilha de ajustes', 'etiquetas', 'estoque virtual "Stock Show"', 'sistema interno'],
      tarefas: [
        {
          id: '1.3.1',
          nome: 'Análise de Produto Fora do Prazo ou Sem Defeito Real',
          passos: [
            'Verificar:',
            '– Se há uso evidente',
            '– Se está fora da política de garantia',
            '– Se o produto foi enviado por erro (sem defeito real)'
          ]
        },
        {
          id: '1.3.2',
          nome: 'Classificação para Destino Final',
          passos: [
            'Opções:',
            '– Transferir para loja mais próxima (completar grade)',
            '– Transferir para Stock Show (venda com desconto)',
            '– Devolver para loja com justificativa',
            '– Reciclar, se estiver sem condições de uso'
          ]
        },
        {
          id: '1.3.3',
          nome: 'Registrar o Ajuste no Sistema',
          passos: [
            'Preencher planilha com número de ajuste e motivo',
            'Executar transferência conforme destino final'
          ]
        }
      ]
    }
  ]
};

export const indenizacaoProdutosDefeito: ProcessoDetalhado = {
  id: 'DEF-002',
  nome: 'Indenização de Produtos com Defeito',
  descricao: 'Produto defeituoso classificado como indenizável, com base em triagem técnica e política de garantia',
  icon: DollarSign,
  cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
  nivel: 'Tático',
  entrada: 'Produto defeituoso classificado como indenizável, com base em triagem técnica e política de garantia.',
  saida: 'Indenização registrada, cobrada e compensada junto ao fornecedor com nota fiscal e controle interno.',
  sistemas_utilizados: ['Planilha de controle de defeitos', 'e-mail', 'nota de débito', 'sistema fiscal interno'],
  subprocessos: [
    {
      id: '2.1',
      nome: 'Levantamento de Dados para Indenização',
      nivel: 'Tático',
      ferramentas: ['Planilha de controle de defeitos', 'sistema interno', 'nota fiscal'],
      tarefas: [
        {
          id: '2.1.1',
          nome: 'Verificar Documentação e Informações do Produto',
          passos: [
            'Confirmar os dados do produto:',
            '– Marca',
            '– Referência',
            '– Defeito apresentado',
            '– Loja de origem',
            'Identificar se o item tem nota fiscal associada (em caso de envio pela loja)',
            'Separar produtos por marca para contabilização mensal de indenizações'
          ]
        },
        {
          id: '2.1.2',
          nome: 'Registrar na Planilha de Controle',
          passos: [
            'Incluir os dados do produto na aba de indenização:',
            '– Código/SKU',
            '– Loja remetente',
            '– Tipo de defeito',
            '– Valor estimado para cobrança',
            '– Responsável pela análise'
          ]
        }
      ]
    },
    {
      id: '2.2',
      nome: 'Elaboração do Orçamento para Fornecedor',
      nivel: 'Tático',
      ferramentas: ['Planilha de orçamento', 'e-mail', 'modelo de tabela de valores por marca'],
      tarefas: [
        {
          id: '2.2.1',
          nome: 'Calcular o Valor Indenizável',
          passos: [
            'Aplicar valor fixo por par ou modelo conforme política por fornecedor (Ex: Diadora: R$ xx,xx por tipo)',
            'Informar se é 1 pé ou o par completo',
            'Marcar com status "Pronto para envio"'
          ]
        },
        {
          id: '2.2.2',
          nome: 'Enviar Orçamento ao Fornecedor para Aprovação',
          passos: [
            'Criar planilha mensal com os produtos daquela marca',
            'Enviar por e-mail para contato do fornecedor:',
            '– Planilha anexa',
            '– Valor total a ser ressarcido',
            '– Prazos e dados de pagamento'
          ]
        }
      ]
    },
    {
      id: '2.3',
      nome: 'Emissão e Controle da Nota de Débito',
      nivel: 'Tático',
      ferramentas: ['Sistema fiscal interno', 'planilha de indenizações', 'modelo de nota'],
      tarefas: [
        {
          id: '2.3.1',
          nome: 'Emitir Nota de Débito ao Fornecedor',
          passos: [
            'Com base na planilha aprovada, gerar nota de débito com valor total',
            'Citar mês de referência, número dos produtos e valores detalhados'
          ]
        },
        {
          id: '2.3.2',
          nome: 'Acompanhar Pagamento ou Compensação',
          passos: [
            'Verificar retorno do fornecedor:',
            '– Pagamento em dinheiro',
            '– Compensação em desconto de próxima remessa',
            'Registrar baixa na planilha com status "Recebido" ou "Compensado"'
          ]
        }
      ]
    }
  ]
};

export const processosDefeito: ProcessoDetalhado[] = [
  tratamentoProdutosDefeito,
  indenizacaoProdutosDefeito
];
