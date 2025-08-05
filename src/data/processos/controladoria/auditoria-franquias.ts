
import { ProcessoDetalhado } from '@/types/processo';
import { Building } from 'lucide-react';

export const auditoriaFranquias: ProcessoDetalhado = {
  id: 'CON-02.2',
  nome: 'Auditoria de caixa das franquias',
  descricao: 'Registros dos fechamentos de caixa das franquias nos sistemas: Seta, Cigan e BShop., informações financeiras no Fiabilité, Equals, GetNet e VExpenses.',
  nivel: 'Operacional',
  icon: Building,
  cor: 'bg-gradient-to-br from-green-500 to-green-600',
  entrada: 'Registros dos fechamentos de caixa das franquias nos sistemas: Seta, Cigan e BShop., informações financeiras no Fiabilité, Equals, GetNet e VExpenses.',
  saida: 'Caixas auditados com valores conciliados, despesas conferidas, validadas e aprovadas, saldo de fundo de caixa dentro do limite, pendências comunicadas à loja e registros atualizados com evidências (comprovantes, e-mail, registo em planilha).',
  sistemas_utilizados: ['Seta', 'Cigan', 'BShop', 'Fiabilité', 'Equals', 'GetNet', 'VExpenses', 'Microvix'],
  subprocessos: [
    {
      id: '2.2.1',
      nome: 'Auditar de caixa da Arezzo e Anacapri',
      nivel: 'Operacional',
      ferramentas: ['Seta', 'Fiabilité', 'Retire & Entrega', 'Equals'],
      tarefas: [
        {
          id: '2.2.1.1',
          nome: 'Acessar o sistema Seta e entrar em "Auditoria de Caixas"',
          passos: [
            'Selecionar a franquia Ana Capri 60, o período de auditoria',
            'Aplicar o filtro "não auditados"'
          ]
        },
        {
          id: '2.2.1.2',
          nome: 'Conferir os valores da Festcard',
          passos: [
            'Acessar o Equals ou Fiabilité',
            'Filtrar o mesmo período e a loja',
            'Comparar o valor de Festcard exibido no Fiabilité com o valor registrado no Seta'
          ]
        },
        {
          id: '2.2.1.3',
          nome: 'Conferir pagamentos de fatura',
          passos: [
            'No Fiabilité, Acessar: "Pagamento de Fatura"',
            'Selecionar o mesmo período e loja',
            'Validar se o pagamento está ausente ou lançado corretamente'
          ]
        },
        {
          id: '2.2.1.4',
          nome: 'Validar vendas por retirada e entrega',
          passos: [
            'Acessar o portal Retire & Entrega',
            'Consultar as transações por data',
            'Comparar valores (produto + frete) com os registros do Seta',
            'Ajustar diferenças causadas por vendas após meia-noite'
          ]
        },
        {
          id: '2.2.1.5',
          nome: 'Validar valor de cartões com Equals',
          passos: [
            'Verificar se os valores recebidos no banco correspondem ao total informado pela loja',
            'Conferir entradas e saídas no caixa',
            'Validar troco inicial, vendas em dinheiro e valores de troca',
            'Conferir se as entradas e saídas resultam em saldo zerado',
            'Marcar como auditado no sistema Seta'
          ]
        }
      ]
    },
    {
      id: '2.2.2',
      nome: 'Auditar caixa da Victor Hugo',
      nivel: 'Operacional',
      ferramentas: ['Cigan', 'Equals', 'Planilha Interna'],
      tarefas: [
        {
          id: '2.2.2.1',
          nome: 'Acessar o sistema: Cigan',
          passos: [
            'Ir em "Relatórios Diversos" → "Fechamento de Caixa"',
            'Selecionar a loja (ex: Colinas) e o período (pode ser semanal)',
            'Visualizar o relatório de fechamento na tela (sem imprimir)'
          ]
        },
        {
          id: '2.2.2.2',
          nome: 'Validar valores de cartão',
          passos: [
            'Conferir o valor total de cartão recebido na Equals',
            'Comparar com o valor do fechamento no Cigan'
          ]
        },
        {
          id: '2.2.2.3',
          nome: 'Analisar resumo de caixa',
          passos: [
            'Verificar fundo de caixa, entradas em dinheiro e saídas com despesas',
            'Identificar sobras ou faltas e lançar em planilha interna'
          ]
        },
        {
          id: '2.2.2.4',
          nome: 'Confirmar conciliação',
          passos: [
            'Verificar no ICOS os recebimentos bancários',
            'Garantir que os valores batem com os lançados no Cigan',
            'Finalizar auditoria e marcar como auditado'
          ]
        }
      ]
    },
    {
      id: '2.2.3',
      nome: 'Auditar caixa da Usaflex',
      nivel: 'Operacional',
      ferramentas: ['BShop', 'Borderô', 'Mega', 'Equals/GetNet', 'Planilha Usaflex'],
      tarefas: [
        {
          id: '2.2.3.1',
          nome: 'Acessar o sistema BShop',
          passos: [
            'Gerar o relatório em "Relatório de Faturamento" (diário ou semanal)',
            'Imprimir relatório resumido com vendas por cartão, débito e crédito'
          ]
        },
        {
          id: '2.2.3.2',
          nome: 'Consultar o Borderô da loja',
          passos: [
            'Conferir valores recebidos, devoluções e fundo de caixa',
            'Verificar se o total informado pela loja bate com o resumo do faturamento'
          ]
        },
        {
          id: '2.2.3.3',
          nome: 'Validar recebimentos bancários',
          passos: [
            'Consultar Equals ou GetNet e conferir os valores por data',
            'Se necessário, filtrar por meio de captura (ex: TEF ou POS)'
          ]
        },
        {
          id: '2.2.3.4',
          nome: 'Registrar conferência na planilha interna da Usaflex',
          passos: [
            'Incluir valores auditados e observações'
          ]
        },
        {
          id: '2.2.3.5',
          nome: 'Caso haja valores recebidos em dinheiro',
          passos: [
            'Acessar o Mega → Módulo Financeiro',
            'Incluir ajuste manual como "Crédito" com observação "Dinheiro recebido no BShop"',
            'Isso garante visibilidade para o financeiro autorizar pagamentos'
          ]
        }
      ]
    },
    {
      id: '2.2.4',
      nome: 'Auditar Caixa da Democrata',
      nivel: 'Operacional',
      ferramentas: ['Microvix', 'GetNet', 'Planilha Compartilhada', 'Santander', 'E-mail', 'VExpenses', 'Equals', 'Caixa', 'Itaú'],
      tarefas: [
        {
          id: '2.2.4.1',
          nome: 'Acessar o sistema Microvix',
          passos: [
            'Selecionar a loja (ex: Democrata - RCM (Rio Mar) ou Democrata - WP (Recife)) e o período de apuração'
          ]
        },
        {
          id: '2.2.4.2',
          nome: 'Gerar relatório de faturamento diário no Microvix',
          passos: [
            'Menu Favoritos → Faturamento Diário',
            'Separar os valores de cartão, dinheiro e vale-contas'
          ]
        },
        {
          id: '2.2.4.3',
          nome: 'Acessar a GetNet e extrair valores recebidos via cartão e PIX',
          passos: [
            'Comparar com os valores declarados no Microvix',
            'Preencher os dados na planilha compartilhada (PIX, cartão, dinheiro, depósito, despesas)'
          ]
        },
        {
          id: '2.2.4.4',
          nome: 'Validar depósito diário',
          passos: [
            'Verificar valor de sobra no caixa (recebimento em dinheiro – despesas)',
            'Confirmar se o valor foi depositado no banco',
            'Receber comprovante por e-mail da loja e inserir na planilha com data e valor do depósito'
          ]
        },
        {
          id: '2.2.4.5',
          nome: 'Realizar conferência no banco (Santander, Caixa ou Itaú)',
          passos: [
            'Acessar extrato online, filtrar data e valor esperado',
            'Confirmar que o valor do depósito com o informado'
          ]
        },
        {
          id: '2.2.4.6',
          nome: 'Realizar movimentação no Microvix',
          passos: [
            'Menu: Conferência entre contas > transferência de valores',
            'Informar data real de compensação, valor do depósito, histórico (ex: "Referente ao caixa 29/04")',
            'Selecionar conta de saída (caixa loja) e conta de entrada (banco)'
          ]
        },
        {
          id: '2.2.4.7',
          nome: 'Conferir sangrias registradas',
          passos: [
            'Acessar módulo de conferência de caixa',
            'Validar sangrias e despesas (retiradas de dinheiro para o cofre)',
            'Conferir se valores lançados estão na planilha interna e batem com o sistema'
          ]
        },
        {
          id: '2.2.4.8',
          nome: 'Preencher e atualizar a planilha de controle',
          passos: [
            'Marcar valores validados com destaque',
            'Atualizar status diário (valor movimentado, diferença, pendência)'
          ]
        },
        {
          id: '2.2.4.9',
          nome: 'Em caso de divergência',
          passos: [
            'Contatar a loja para solicitar comprovantes ou explicações',
            'Se valor não depositado for confirmado, solicitar que a loja regularize no próximo depósito'
          ]
        }
      ]
    },
    {
      id: '2.2.5',
      nome: 'Conferência de despesas das franquias, Arezzo e Anacapri, Victor Hugo, Usaflex e Democrata',
      nivel: 'Operacional',
      ferramentas: ['VExpenses', 'Seta', 'Mega'],
      tarefas: [
        {
          id: '2.2.5.1',
          nome: 'Acessar o VExpenses',
          passos: [
            'Filtrar o período (ex: 14 a 20 de abril) e loja (ex: Ana Capri 73)'
          ]
        },
        {
          id: '2.2.5.2',
          nome: 'Verificar se as despesas lançadas no VExpenses batem com as baixas no caixa do sistema Seta',
          passos: [
            'As despesas da Usaflex, faz pelo Mega',
            'As despesas baixadas no Seta, a loja comprova no Vexpense',
            'A loja tem que mandar por período (Segunda a Domingo)',
            'Confirmar valores e datas para validar pagamento real'
          ]
        },
        {
          id: '2.2.5.3',
          nome: 'Analisar os documentos',
          passos: [
            'Abrir cada despesa',
            'Verifica o nome do gestor',
            'Verifica a justificativa (ex: prêmio de gestor)',
            'Validar dados do comprovante enviado (ex: valor e descrição do gasto)'
          ]
        },
        {
          id: '2.2.5.4',
          nome: 'Aprovar a despesa no sistema',
          passos: [
            'Clicar na despesa e alterar status de "Enviado" para "Aprovado"',
            'O registro muda de cor de Azul para Verde que indica aprovação'
          ]
        },
        {
          id: '2.2.5.5',
          nome: 'Despesas acima de R$500',
          passos: [
            'Consultar o controle de fundo de caixa',
            'Verificar autorização do financeiro antes de validar a baixa'
          ]
        }
      ]
    }
  ]
};
