import { ClipboardList, Camera, Upload, Folder, Truck, Box } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';

// Processo 1
export const planejamentoCampanhasDigital: ProcessoDetalhado = {
  id: 'VM-04.32',
  nome: 'Planejamento e Execução de Campanhas no Canal Digital',
  descricao: 'Definir, aprovar e planejar campanhas digitais com base no calendário comercial.',
  icon: ClipboardList,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Tático',
  entrada: 'Calendário comercial e propostas de ações promocionais enviadas.',
  saida: 'Campanhas planejadas e briefings enviados ao time de criação.',
  sistemas_utilizados: ['Google Sheets', 'ClickUp', 'Google Docs', 'Notion'],
  tempo_execucao: 'Variável',
  frequencia: 'Mensal ou sazonal',
  subprocessos: [
    {
      id: '4.32.1',
      nome: 'Levantamento de Oportunidades de Campanha',
      nivel: 'Tático',
      ferramentas: ['Calendário Comercial', 'Google Sheets'],
      tarefas: [
        {
          id: '4.32.1.1',
          nome: 'Identificar Datas-Chave',
          passos: [
            'Analisar calendário de ações comerciais.',
            'Identificar oportunidades (datas comemorativas, lançamentos, liquidações).',
            'Considerar datas concorrenciais (benchmark).'
          ]
        },
        {
          id: '4.32.1.2',
          nome: 'Levantar Produtos e Propostas',
          passos: [
            'Avaliar produtos junto às áreas parceiras (Cadastro, Comercial).',
            'Definir mecânica, públicos-alvo e plataformas envolvidas.'
          ]
        }
      ]
    },
    {
      id: '4.32.2',
      nome: 'Registro e Análise de Propostas',
      nivel: 'Tático',
      ferramentas: ['Google Sheets'],
      tarefas: [
        {
          id: '1.2.1',
          nome: 'Preencher Proposta na Planilha',
          passos: [
            'Inserir nome da campanha, período, mecânica, público, marcas e responsável.'
          ]
        },
        {
          id: '4.32.2.2',
          nome: 'Análise e Aprovação pela Líder de VM',
          passos: [
            'Revisar diariamente as sugestões.',
            'Aprovar ou rejeitar e registrar na planilha.'
          ]
        }
      ]
    },
    {
      id: '4.32.3',
      nome: 'Criação do Briefing para Design',
      nivel: 'Tático',
      ferramentas: ['ClickUp', 'Google Docs'],
      tarefas: [
        {
          id: '1.3.1',
          nome: 'Elaboração do Briefing Visual',
          passos: [
            'Criar briefing com título, produtos, regras, datas e tipo de banner.',
            'Compartilhar no ClickUp.'
          ]
        },
        {
          id: '4.32.3.2',
          nome: 'Registrar Demanda no ClickUp',
          passos: [
            'Criar tarefa com briefing anexado.',
            'Definir responsáveis e prazos.',
            'Acompanhar até finalização.'
          ]
        }
      ]
    }
  ]
};

// Processo 2
export const publicacaoCampanhasVtexDeco: ProcessoDetalhado = {
  id: 'VM-04.33',
  nome: 'Criação e Publicação de Campanhas na VTEX e Deco',
  descricao: 'Publicar campanhas no site (Deco) e app (CMS VTEX) com os materiais visuais aprovados.',
  icon: Upload,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Briefing aprovado e materiais visuais entregues.',
  saida: 'Campanha publicada no site e app com layout adequado.',
  sistemas_utilizados: ['Deco', 'VTEX CMS', 'ClickUp'],
  tempo_execucao: '1-2 dias',
  frequencia: 'Conforme cronograma de campanhas',
  subprocessos: [
    {
      id: '4.33.1',
      nome: 'Inserção no Site via Deco',
      nivel: 'Operacional',
      ferramentas: ['Deco'],
      tarefas: [
        {
          id: '4.33.1.1',
          nome: 'Acessar a Plataforma Deco',
          passos: [
            'Login administrativo no Deco.',
            'Localizar vitrine ou página alvo.'
          ]
        },
        {
          id: '4.33.1.2',
          nome: 'Inserir Blocos e Imagens',
          passos: [
            'Criar ou reutilizar blocos.',
            'Inserir banners e textos.',
            'Ajustar posicionamento visual.'
          ]
        },
        {
          id: '4.33.1.3',
          nome: 'Configurar Links',
          passos: [
            'Configurar link em cada banner.',
            'Validar se redirecionam corretamente.'
          ]
        }
      ]
    },
    {
      id: '4.33.2',
      nome: 'Publicação no App via CMS VTEX',
      nivel: 'Operacional',
      ferramentas: ['VTEX CMS'],
      tarefas: [
        {
          id: '4.33.2.1',
          nome: 'Acessar o CMS do App',
          passos: [
            'Login no CMS VTEX.',
            'Acessar estrutura do app.'
          ]
        },
        {
          id: '4.33.2.2',
          nome: 'Criar Componentes da Campanha',
          passos: [
            'Criar banner com layout definido.',
            'Ajustar posição no app.'
          ]
        },
        {
          id: '4.33.2.3',
          nome: 'Validar Visualização Mobile',
          passos: [
            'Simular visualização em telas diversas.',
            'Garantir legibilidade e corrigir erros.'
          ]
        }
      ]
    }
  ]
};

// Processo 3
export const solicitacaoProdutoFotografia: ProcessoDetalhado = {
  id: 'EST-04.34',
  nome: 'Solicitação de Produtos para Fotografia no Estúdio',
  descricao: 'Receber e registrar solicitações de produtos a serem fotografados.',
  icon: Camera,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Demanda de produtos para fotografia vinda de outras áreas.',
  saida: 'Produto registrado e pronto para fotografia.',
  sistemas_utilizados: ['Planilha de controle', 'WhatsApp', 'E-mail'],
  tempo_execucao: '1 dia',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '4.34.1',
      nome: 'Recebimento e Registro',
      nivel: 'Operacional',
      ferramentas: ['Planilha de controle'],
      tarefas: [
        {
          id: '4.34.1.1',
          nome: 'Receber Demanda',
          passos: [
            'Receber solicitação com descrição, código, motivo.',
            'Confirmar necessidade específica (ângulos, quantidade).'
          ]
        },
        {
          id: '4.34.1.2',
          nome: 'Registrar Solicitação',
          passos: [
            'Inserir dados na planilha de controle.',
            'Definir status como “Solicitado”.'
          ]
        }
      ]
    },
    {
      id: '4.34.2',
      nome: 'Coleta Física do Produto',
      nivel: 'Operacional',
      ferramentas: ['Estoque físico'],
      tarefas: [
        {
          id: '4.34.2.1',
          nome: 'Verificar Disponibilidade',
          passos: [
            'Buscar produto ou requisitar envio.',
            'Verificar condições físicas.'
          ]
        },
        {
          id: '4.34.2.2',
          nome: 'Identificar Produto',
          passos: [
            'Etiquetar com nome do solicitante e protocolo.',
            'Posicionar na fila de fotografia.'
          ]
        }
      ]
    }
  ]
};

// Processo 4
export const fotografiaEdicaoImagens: ProcessoDetalhado = {
  id: 'EST-04.35',
  nome: 'Fotografia e Edição de Imagens no Estúdio',
  descricao: 'Preparar, fotografar e editar imagens para uso em campanhas, VTEX ou redes sociais.',
  icon: Camera,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Produto registrado e pronto para fotografia.',
  saida: 'Imagens editadas e prontas para uso.',
  sistemas_utilizados: ['Lightroom', 'Photoshop', 'Planilha de controle'],
  tempo_execucao: '1-2 dias',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '4.35.1',
      nome: 'Preparação para Fotografia',
      nivel: 'Operacional',
      ferramentas: ['Câmera', 'Iluminação'],
      tarefas: [
        {
          id: '4.35.1.1',
          nome: 'Organizar Produtos do Dia',
          passos: [
            'Listar produtos na planilha.',
            'Separar por prioridade.',
            'Verificar condições físicas.'
          ]
        },
        {
          id: '4.35.1.2',
          nome: 'Preparar Ambiente e Equipamentos',
          passos: [
            'Regular iluminação e fundo.',
            'Preparar câmera e software.'
          ]
        }
      ]
    },
    {
      id: '4.35.2',
      nome: 'Execução da Fotografia',
      nivel: 'Operacional',
      ferramentas: ['Câmera', 'Lightroom'],
      tarefas: [
        {
          id: '4.35.2.1',
          nome: 'Fotografar Produto',
          passos: [
            'Capturar ângulos diversos.',
            'Garantir foco e centralização.',
            'Validar imagens durante a sessão.'
          ]
        }
      ]
    },
    {
      id: '4.35.3',
      nome: 'Edição e Finalização',
      nivel: 'Operacional',
      ferramentas: ['Photoshop', 'Lightroom'],
      tarefas: [
        {
          id: '4.35.3.1',
          nome: 'Selecionar e Editar Fotos',
          passos: [
            'Importar e aplicar ajustes.',
            'Ajustar brilho, corte, contraste.'
          ]
        },
        {
          id: '4.35.3.2',
          nome: 'Exportar e Nomear Arquivos',
          passos: [
            'Salvar em alta resolução.',
            'Seguir padrão de nomenclatura.'
          ]
        }
      ]
    }
  ]
};

// Processo 5
export const organizacaoDriveFotos: ProcessoDetalhado = {
  id: 'EST-04.36',
  nome: 'Organização e Armazenamento das Fotos no Drive',
  descricao: 'Organizar, renomear e armazenar fotos no Drive para disponibilização.',
  icon: Folder,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Fotos editadas e finalizadas.',
  saida: 'Imagens organizadas e compartilhadas.',
  sistemas_utilizados: ['Google Drive', 'Planilha de controle'],
  tempo_execucao: '1 dia',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '4.36.1',
      nome: 'Organização das Imagens',
      nivel: 'Operacional',
      ferramentas: ['Google Drive'],
      tarefas: [
        {
          id: '4.36.1.1',
          nome: 'Criar Pasta no Drive',
          passos: [
            'Criar pasta com padrão de nome.',
            'Separar subpastas por finalidade.'
          ]
        }
      ]
    },
    {
      id: '4.36.2',
      nome: 'Renomeação dos Arquivos',
      nivel: 'Operacional',
      ferramentas: ['Explorador de Arquivos'],
      tarefas: [
        {
          id: '4.36.2.1',
          nome: 'Renomear Arquivos',
          passos: [
            'Seguir padrão visual definido.',
            'Conferir consistência nos nomes.'
          ]
        }
      ]
    },
    {
      id: '4.36.3',
      nome: 'Compartilhamento e Atualização',
      nivel: 'Operacional',
      ferramentas: ['Google Drive', 'Planilha de controle'],
      tarefas: [
        {
          id: '4.36.3.1',
          nome: 'Gerar Link e Compartilhar',
          passos: [
            'Gerar link compartilhável.',
            'Atualizar planilha e notificar solicitante.'
          ]
        }
      ]
    }
  ]
};

// Processo 6
export const transferenciaProdutosLojas: ProcessoDetalhado = {
  id: 'EST-04.37',
  nome: 'Transferência de Produtos para Lojas Após Fotografia',
  descricao: 'Preparar e enviar produtos fotografados de volta para as lojas.',
  icon: Truck,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Produtos fotografados e prontos para devolução.',
  saida: 'Produtos enviados e registrados.',
  sistemas_utilizados: ['Planilha de controle'],
  tempo_execucao: '1 dia',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '4.37.1',
      nome: 'Separação dos Produtos',
      nivel: 'Operacional',
      ferramentas: ['Planilha de controle'],
      tarefas: [
        {
          id: '4.37.1.1',
          nome: 'Identificar Produtos Finalizados',
          passos: [
            'Conferir planilha.',
            'Separar por loja ou coleção.'
          ]
        },
        {
          id: '4.37.1.2',
          nome: 'Etiquetar Produtos',
          passos: [
            'Anexar etiqueta com loja e código.',
            'Organizar para envio.'
          ]
        }
      ]
    },
    {
      id: '4.37.2',
      nome: 'Organização para Envio',
      nivel: 'Operacional',
      ferramentas: ['Caixas', 'Etiquetas'],
      tarefas: [
        {
          id: '4.37.2.1',
          nome: 'Embalar Produtos',
          passos: [
            'Utilizar caixas reaproveitáveis.',
            'Conferir itens na remessa.'
          ]
        },
        {
          id: '4.37.2.2',
          nome: 'Identificar e Lacrar Volumes',
          passos: [
            'Colar etiqueta externa.',
            'Lacrar caixas.'
          ]
        }
      ]
    },
    {
      id: '4.37.3',
      nome: 'Liberação e Atualização',
      nivel: 'Operacional',
      ferramentas: ['Planilha de controle'],
      tarefas: [
        {
          id: '4.37.3.1',
          nome: 'Confirmar Envio',
          passos: [
            'Avisar responsável da loja.',
            'Registrar data e status na planilha.'
          ]
        }
      ]
    }
  ]
};

// Processo 7
export const recebimentoProdutosEstudio: ProcessoDetalhado = {
  id: 'EST-04.39',
  nome: 'Recebimento e Inclusão de Produtos no Estúdio',
  descricao: 'Receber e registrar novos produtos no estúdio para fotografia.',
  icon: Box,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  nivel: 'Operacional',
  entrada: 'Chegada de novos produtos para fotografia.',
  saida: 'Produto registrado e armazenado para fotografia.',
  sistemas_utilizados: ['Planilha de controle'],
  tempo_execucao: '1 dia',
  frequencia: 'Conforme demanda',
  subprocessos: [
    {
      id: '4.39.1',
      nome: 'Recebimento Físico',
      nivel: 'Operacional',
      ferramentas: ['Planilha de controle'],
      tarefas: [
        {
          id: '4.39.1.1',
          nome: 'Conferir Produtos',
          passos: [
            'Verificar condições físicas.',
            'Validar lista ou confirmar com solicitante.'
          ]
        },
        {
          id: '4.39.1.2',
          nome: 'Registrar Entrada',
          passos: [
            'Inserir dados na planilha.',
            'Definir status inicial.'
          ]
        }
      ]
    },
    {
      id: '4.39.2',
      nome: 'Organização Interna',
      nivel: 'Operacional',
      ferramentas: ['Etiquetas', 'Prateleiras'],
      tarefas: [
        {
          id: '4.39.2.1',
          nome: 'Etiquetar Produtos',
          passos: [
            'Gerar etiqueta com código, origem e destino.',
            'Fixar no produto.'
          ]
        },
        {
          id: '4.39.2.2',
          nome: 'Armazenar por Prioridade',
          passos: [
            'Separar por tipo de demanda.',
            'Organizar no local correto.'
          ]
        }
      ]
    }
  ]
};

export const processosVmEstudio: ProcessoDetalhado[] = [
  planejamentoCampanhasDigital,
  publicacaoCampanhasVtexDeco,
  solicitacaoProdutoFotografia,
  fotografiaEdicaoImagens,
  organizacaoDriveFotos,
  transferenciaProdutosLojas,
  recebimentoProdutosEstudio
];
