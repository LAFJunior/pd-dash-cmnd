
import { FileText, Package } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

export const cadastroProdutoUmP: ProcessoDetalhado = {
  id: 'CAD-001',
  nome: 'Cadastro de Produto 1P',
  descricao: 'Produto marcado como "Pronto para cadastro" na planilha de cadastro (Coluna AE)',
  icon: Package,
  cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
  nivel: 'Operacional',
  entrada: 'Produto marcado como "Pronto para cadastro" na planilha de cadastro (Coluna AE).',
  saida: 'Produto cadastrado corretamente na VTEX, com título e descrição otimizados, imagens atribuídas e status "Finalizado" na planilha de controle.',
  sistemas_utilizados: ['Planilha de Cadastro', 'Mega', 'Google Drive', 'VTEX', 'Planilha de Descrição', 'ChatGPT'],
  tempo_execucao: '30-60 minutos',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '1.1',
      nome: 'Consulta da Planilha de Cadastro',
      nivel: 'Operacional',
      ferramentas: ['Planilha de Cadastro (Drive)'],
      tarefas: [
        {
          id: '1.1.1',
          nome: 'Identificação dos Produtos para Cadastro',
          passos: [
            'Abrir a planilha de cadastro',
            'Localizar as linhas em que a Coluna AE está preenchida como "Pronto para cadastro"',
            'Verificar na Coluna V se o campo está com o número "1", o que indica que o cadastro pode ser iniciado',
            'Inserir seu nome na linha para sinalizar que está em andamento (evitando duplicidade com outros colaboradores)'
          ]
        },
        {
          id: '1.1.2',
          nome: 'Preenchimento Inicial da Descrição',
          passos: [
            'Adicionar na planilha: Seu nome (coluna "Responsável")',
            'Adicionar data do início do cadastro',
            'Marcar o produto como "em andamento", conforme o procedimento definido'
          ]
        }
      ]
    },
    {
      id: '1.2',
      nome: 'Consulta no Mega',
      nivel: 'Operacional',
      ferramentas: ['Mega'],
      tarefas: [
        {
          id: '1.2.1',
          nome: 'Localização de Informações do Produto',
          passos: [
            'Buscar o produto no Mega utilizando: Código EAN ou SKU',
            'Verificar: Grade de numeração para determinar o público (Feminino até 40, Masculino acima de 40, Infantil até 30 etc.)'
          ]
        },
        {
          id: '1.2.2',
          nome: 'Resgate do Código de Barras',
          passos: [
            'Acessar o campo "Código de Barras" no Mega',
            'Confirmar e copiar o EAN correto para uso posterior na plataforma VTEX'
          ]
        }
      ]
    },
    {
      id: '1.3',
      nome: 'Verificação de Imagens do Produto',
      nivel: 'Operacional',
      ferramentas: ['Planilha de Cadastro', 'Google Drive', 'link do fornecedor'],
      tarefas: [
        {
          id: '1.3.1',
          nome: 'Checar Link da Foto (Coluna O)',
          passos: [
            'Clicar no link da Coluna O da planilha para visualizar a foto do produto',
            'Se não houver imagem, procurar no site do fornecedor',
            'Confirmar modelo, cor e categoria'
          ]
        },
        {
          id: '1.3.2',
          nome: 'Verificar Link Editado no Drive (Coluna P)',
          passos: [
            'Validar se há imagem final pronta no Drive (foto editada)',
            'Verificar se corresponde ao modelo da planilha'
          ]
        }
      ]
    },
    {
      id: '1.4',
      nome: 'Montagem da Descrição e Título',
      nivel: 'Operacional',
      ferramentas: ['Planilha de Descrição', 'ChatGPT'],
      tarefas: [
        {
          id: '1.4.1',
          nome: 'Montar Descrição do Produto',
          passos: [
            'Com base nas informações do fornecedor, montar a descrição completa do produto',
            'Incluir modelo, tipo, material, cor, linha etc.'
          ]
        },
        {
          id: '1.4.2',
          nome: 'Estruturar Título com SEO',
          passos: [
            'Seguir a regra: Tipo do Produto + Marca + Modelo/Linha + Gênero + Cor',
            'Inserir o título na planilha de descrição'
          ]
        },
        {
          id: '1.4.3',
          nome: 'Aprimorar com ChatGPT (opcional)',
          passos: [
            'Colar a descrição nas colunas da planilha que usam ChatGPT para gerar:',
            '- Meta Tag',
            '- Palavras-chave',
            '- Texto otimizado'
          ]
        }
      ]
    },
    {
      id: '1.5',
      nome: 'Cadastro na Plataforma VTEX',
      nivel: 'Operacional',
      ferramentas: ['VTEX'],
      tarefas: [
        {
          id: '1.5.1',
          nome: 'Buscar o Produto por EAN na VTEX',
          passos: [
            'Inserir o EAN resgatado anteriormente',
            'Abrir o produto para edição ou criação'
          ]
        },
        {
          id: '1.5.2',
          nome: 'Preencher Dados do Produto',
          passos: [
            'Informar: Marca',
            'Informar: Categoria',
            'Informar: Políticas comerciais (3.0 Vendedor)'
          ]
        },
        {
          id: '1.5.3',
          nome: 'Inserir Título, Meta Tag e Palavras-Chave',
          passos: [
            'Copiar o título e metadados da planilha de descrição',
            'Inserir nas respectivas seções da VTEX',
            'Confirmar que "Mostrar no site" está habilitado'
          ]
        },
        {
          id: '1.5.4',
          nome: 'Cadastro de Numeração, Cor e Referência',
          passos: [
            'Acessar aba SKU e preencher: Grade de tamanhos',
            'Preencher: Cor predominante',
            'Preencher: Código do fabricante (campo "Referência")',
            'Cadastrar fotos do produto (usando links do Drive), aplicando para todos os SKUs'
          ]
        },
        {
          id: '1.5.5',
          nome: 'Salvar Cadastro',
          passos: [
            'Após revisão completa, clicar em "Salvar"'
          ]
        }
      ]
    },
    {
      id: '1.6',
      nome: 'Atualização Final na Planilha',
      nivel: 'Operacional',
      ferramentas: ['Planilha de Cadastro'],
      tarefas: [
        {
          id: '1.6.1',
          nome: 'Marcar Cadastro como Finalizado',
          passos: [
            'Voltar à planilha e preencher todos os campos restantes na linha do produto',
            'Atualizar status para "Finalizado"'
          ]
        },
        {
          id: '1.6.2',
          nome: 'Verificação Online',
          passos: [
            'Após indexação da VTEX, validar se o produto está visível no site',
            'Preencher a data de conferência online'
          ]
        }
      ]
    }
  ]
};

export const cadastroProdutoTresPIn: ProcessoDetalhado = {
  id: 'CAD-002',
  nome: 'Cadastro de Produto 3P IN',
  descricao: 'Produto cadastrado na plataforma Conecta.Lá, com dados fornecidos pelo time comercial: ID do produto, SKU pai e título base',
  icon: FileText,
  cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
  nivel: 'Operacional',
  entrada: 'Produto cadastrado na plataforma Conecta.Lá, com dados fornecidos pelo time comercial: ID do produto, SKU pai e título base.',
  saida: 'Produto publicado e disponível para venda com informações completas, imagens otimizadas e descrição HTML estruturada.',
  sistemas_utilizados: ['Conecta.Lá', 'VTEX', 'Planilha de Descrição', 'ChatGPT'],
  tempo_execucao: '45-90 minutos',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '2.1',
      nome: 'Categorização do Produto na Conecta.Lá',
      nivel: 'Operacional',
      ferramentas: ['Conecta.Lá'],
      tarefas: [
        {
          id: '2.1.1',
          nome: 'Identificar Produtos Incompletos',
          passos: [
            'Acessar a plataforma Conecta.Lá',
            'Ir para o menu: Produtos → Administrar Produtos → Listar Produtos',
            'Aplicar os filtros: Ativo',
            'Aplicar filtro: Com estoque',
            'Aplicar filtro: Incompleto',
            'Aplicar filtro: Loja (Seller) correspondente'
          ]
        },
        {
          id: '2.1.2',
          nome: 'Editar Produto e Escolher Categoria Correta',
          passos: [
            'Pesquisar o produto pelo ID',
            'Acessar os itens com status "INCOMPLETO"',
            'Selecionar a categoria mais adequada ao tipo de produto (ex: calçado, acessório, etc.)'
          ]
        },
        {
          id: '2.1.3',
          nome: 'Preencher Atributos Obrigatórios',
          passos: [
            'Informar dados obrigatórios da ficha técnica: Cor',
            'Informar: Gênero',
            'Informar: Tipo',
            'Salvar alterações para mudar o status de "incompleto" para "completo"'
          ]
        }
      ]
    },
    {
      id: '2.2',
      nome: 'Publicação para Canal de Venda',
      nivel: 'Operacional',
      ferramentas: ['Conecta.Lá'],
      tarefas: [
        {
          id: '2.2.1',
          nome: 'Selecionar Produto para Publicação',
          passos: [
            'Ir ao menu: Produtos → Gerenciar Publicação → Publicação de Produto',
            'Aplicar filtros: Ativo',
            'Aplicar filtro: Com estoque',
            'Aplicar filtro: Completo',
            'Aplicar filtro: Loja (Seller)'
          ]
        },
        {
          id: '2.2.2',
          nome: 'Publicar Produto para o Canal GRUPO OSCAR',
          passos: [
            'Na coluna lateral, clicar em PUBLICAR',
            'Selecionar o canal "Grupo Oscar" e confirmar a ação',
            'Produto será enviado automaticamente para curadoria'
          ]
        }
      ]
    },
    {
      id: '2.3',
      nome: 'Curadoria e Aprovação',
      nivel: 'Operacional',
      ferramentas: ['Conecta.Lá'],
      tarefas: [
        {
          id: '2.3.1',
          nome: 'Acessar Tela de Curadoria',
          passos: [
            'Ir ao menu: Produtos → Gerenciar Publicação → Curadoria → Aprovação de Produtos',
            'Aplicar filtros: Estoque disponível',
            'Aplicar filtro: Canal: Grupo Oscar',
            'Aplicar filtro: Loja (Seller)'
          ]
        },
        {
          id: '2.3.2',
          nome: 'Conferir Informações do Produto',
          passos: [
            'Conferir se os seguintes dados estão corretos: Título',
            'Conferir: Grade de estoque',
            'Conferir: Categoria',
            'Conferir: Marca',
            'Conferir: Fotos',
            'Conferir: Atributos obrigatórios'
          ]
        },
        {
          id: '2.3.3',
          nome: 'Aprovar Produto para Publicação Final',
          passos: [
            'Clicar em "Aprovar" para validar',
            'Após aprovado, o status mudará de "EM APROVAÇÃO" para "APROVADO"',
            'Produto será refletido automaticamente na VTEX e receberá um novo ID'
          ]
        }
      ]
    },
    {
      id: '2.4',
      nome: 'Geração e Otimização de Descrição',
      nivel: 'Operacional',
      ferramentas: ['Planilha de Descrição', 'ChatGPT'],
      tarefas: [
        {
          id: '2.4.1',
          nome: 'Preencher Informações na Planilha',
          passos: [
            'Preencher na planilha de descrição: ID do Produto',
            'Preencher: SKU Pai',
            'Preencher: Nome/Título base'
          ]
        },
        {
          id: '2.4.2',
          nome: 'Estruturar Título com SEO',
          passos: [
            'Estruturar o título conforme padrão: Tipo do produto + Marca + Modelo/Linha + Gênero + Cor principal'
          ]
        },
        {
          id: '2.4.3',
          nome: 'Aprimorar Texto com ChatGPT',
          passos: [
            'Colar a descrição da planilha no ChatGPT e gerar versões otimizadas',
            'Colar o resultado nas colunas apropriadas (Meta Tag, palavras-chave, etc.)'
          ]
        },
        {
          id: '2.4.4',
          nome: 'Gerar Descrição HTML Automática',
          passos: [
            'Planilha gera automaticamente a descrição HTML na coluna AC após preenchimento dos campos anteriores'
          ]
        }
      ]
    },
    {
      id: '2.5',
      nome: 'Inserção na VTEX e Ajustes Finais',
      nivel: 'Operacional',
      ferramentas: ['VTEX', 'Planilha de Descrição'],
      tarefas: [
        {
          id: '2.5.1',
          nome: 'Inserir Descrição no Produto VTEX',
          passos: [
            'Copiar o conteúdo HTML da coluna AC da planilha',
            'Na VTEX, editar o campo de descrição em HTML e colar o código (remover aspas iniciais e finais)',
            'Salvar'
          ]
        },
        {
          id: '2.5.2',
          nome: 'Preencher Campos de SEO e Palavras Similares',
          passos: [
            'Título da Página: colar o título do produto',
            'Meta Tag: colar o conteúdo da coluna X',
            'Palavras Similares: colar a coluna Y',
            'Categorias Similares: adicionar categorias adicionais aplicáveis',
            'Confirmar que "Mostrar no site" está ativado'
          ]
        },
        {
          id: '2.5.3',
          nome: 'Ajustar Imagens e Replicar para SKUs',
          passos: [
            'Verificar imagens trazidas pela Conecta.Lá',
            'Ajustar a ordem (ex: 1ª imagem virada para a direita ou em modelo)',
            'Replicar imagens para SKUs via botão "Selecionar tudo > Aplicar"',
            'Salvar'
          ]
        }
      ]
    }
  ]
};

export const processosCadastro: ProcessoDetalhado[] = [
  cadastroProdutoUmP,
  cadastroProdutoTresPIn
];
