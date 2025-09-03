import { ProcessoDetalhado } from '@/types/processo';
import { Users, Target, GraduationCap, FileText, BarChart3, Award, Calendar, MessageSquare, UserPlus, UserCheck, Building2, Gift, TrendingUp, PieChart, Clock, Star, DollarSign, Shield, Briefcase, Phone, Mail, ChevronRight, CheckCircle, AlertCircle, Settings, MapPin, Camera, Megaphone, PartyPopper, Globe, Video, Zap } from 'lucide-react';

export const processosRecursosHumanos: ProcessoDetalhado[] = [
  {
    id: 'RH-11.1',
    nome: 'Promoção (RH)',
    descricao: 'Processo de análise, aprovação e formalização de promoções de colaboradores',
    nivel: 'Tático',
    icon: TrendingUp,
    cor: 'bg-gradient-to-r from-purple-500 to-violet-600',
    entrada: 'Solicitação de promoção via chamado no TopDesk',
    saida: 'Colaborador promovido com alterações salariais e registro em carteira, carta formal recebida e treinamento aplicado quando aplicável',
    subprocessos: [
      {
        id: '11.1.1',
        nome: 'Análise de RH – Promoção',
        nivel: 'Operacional',
        ferramentas: ['Senior', 'TopDesk'],
        tarefas: [
          {
            id: '11.1.1.1',
            nome: 'Recebimento e análise inicial',
            passos: [
              'Receber todos os pedidos de promoção no prazo de 01 a 10 de cada mês',
              'Avaliar no sistema Senior os dados do colaborador (admissão, centro de custo, salário atual e proposto, faltas, atestados e quadro de vagas)',
              'Reprovar promoções quando não atender critérios',
              'Registrar reprovação no chamado TopDesk e notificar gestor quando necessário'
            ]
          },
          {
            id: '11.1.1.2',
            nome: 'Documentação e testes (promoções aprovadas)',
            passos: [
              'Solicitar preenchimento dos templates conforme cargo',
              'Reunir todos os documentos em um único PDF até dia 20 do mês',
              'Ler e interpretar o resultado do teste Profile',
              'Anexar ao chamado no TopDesk e salvar no repositório do RH'
            ]
          },
          {
            id: '11.1.1.3',
            nome: 'Aprovação final',
            passos: [
              'Enviar o processo completo para validação da coordenadora de RH'
            ]
          },
          {
            id: '11.1.1.4',
            nome: 'Criação da carta de promoção',
            passos: [
              'Gerar a carta de promoção (template do RH) e anexar no chamado',
              'Encaminhar ao gestor solicitando entrega formal ao colaborador'
            ]
          }
        ]
      },
      {
        id: '11.1.2',
        nome: 'Comunicação ao DP',
        nivel: 'Operacional',
        ferramentas: ['Excel'],
        tarefas: [
          {
            id: '11.1.2.1',
            nome: 'Atualização de dados cadastrais',
            passos: [
              'Preencher planilha compartilhada com os dados de todos os promovidos para atualização de folha e registro em carteira'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Senior', 'TopDesk', 'Drive', 'Excel', 'Sólides', 'E-mail', 'WhatsApp'],
    tempo_execucao: '15-20 dias',
    frequencia: 'Mensal'
  },

  {
    id: 'RH-11.2',
    nome: 'Pedido de Recrutamento e Seleção – RH',
    descricao: 'Processo completo de recrutamento e seleção de candidatos para vagas',
    nivel: 'Tático',
    icon: Target,
    cor: 'bg-gradient-to-r from-purple-500 to-violet-600',
    entrada: 'Solicitação de contratação recebida via chamado no TopDesk (aba "Contratação")',
    saida: 'Vaga divulgada, candidatos avaliados e aprovados, documentação enviada ao DP e integração organizada para o início do novo colaborador',
    subprocessos: [
      {
        id: '11.2.1',
        nome: 'Estruturação do Job Description da Vaga',
        nivel: 'Operacional',
        ferramentas: ['Canva', 'Sólides', 'LinkedIn', 'Facebook', 'WhatsApp'],
        tarefas: [
          {
            id: '11.2.1.1',
            nome: 'Divulgação da vaga',
            passos: [
              'Definir requisitos, responsabilidades e salário conforme política de cargos',
              'Criar imagem do template de vaga no Canva',
              'Publicar a vaga nos canais oficiais (Sólides, LinkedIn, Facebook, WhatsApp e mural interno via e-mail para lojas)'
            ]
          }
        ]
      },
      {
        id: '11.2.2',
        nome: 'Triagem e Seleção',
        nivel: 'Operacional',
        ferramentas: ['E-mail', 'WhatsApp', 'Sólides'],
        tarefas: [
          {
            id: '11.2.2.1',
            nome: 'Triagem de currículos',
            passos: [
              'Realizar triagem de currículos recebidos via e-mail, WhatsApp e Sólides',
              'Selecionar candidatos com base em critérios técnicos e comportamentais definidos',
              'Encaminhar candidatos pré-selecionados à liderança via e-mail para validação'
            ]
          },
          {
            id: '11.2.2.2',
            nome: 'Entrevistas e seleção final',
            passos: [
              'Agendar entrevistas com gestores e aplicar testes (quando necessário)',
              'Conduzir entrevistas online ou presenciais e elaborar parecer técnico',
              'Validar com o gestor o candidato aprovado',
              'Dar retorno negativo aos candidatos reprovados'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk', 'Sólides', 'Canva', 'E-mail', 'WhatsApp', 'LinkedIn', 'Facebook'],
    tempo_execucao: '7-15 dias',
    frequencia: 'Conforme demanda'
  },

  {
    id: 'RH-11.3',
    nome: 'Divulgação de Vagas Loja',
    descricao: 'Processo de divulgação de vagas específicas para lojas',
    nivel: 'Operacional',
    icon: Megaphone,
    cor: 'bg-gradient-to-r from-purple-500 to-violet-600',
    entrada: 'Solicitação de divulgação de vaga recebida via chamado no TopDesk',
    saida: 'Vaga divulgada conforme solicitação; a captação de currículos é responsabilidade da loja',
    subprocessos: [
      {
        id: '11.3.1',
        nome: 'Estruturação do Job Description da Vaga',
        nivel: 'Operacional',
        ferramentas: ['TopDesk', 'Sólides', 'Canva', 'E-mail', 'WhatsApp', 'LinkedIn', 'Facebook'],
        tarefas: [
          {
            id: '11.3.1.1',
            nome: 'Divulgação da vaga',
            passos: [
              'Definir requisitos, responsabilidades e salário conforme política de cargos',
              'Criar imagem do template de vaga no Canva',
              'Publicar a vaga nos canais oficiais (Sólides, LinkedIn, Facebook, WhatsApp e mural interno via e-mail para lojas)'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk', 'Sólides', 'Canva', 'E-mail', 'WhatsApp', 'LinkedIn', 'Facebook'],
    tempo_execucao: '1-2 dias',
    frequencia: 'Conforme demanda'
  },

  {
    id: 'RH-11.4',
    nome: 'Entrevista de Desligamento',
    descricao: 'Aplicação de entrevista de desligamento para coleta de feedback',
    nivel: 'Operacional',
    icon: MessageSquare,
    cor: 'bg-gradient-to-r from-purple-500 to-violet-600',
    entrada: 'Solicitação de entrevista de desligamento recebida via e-mail ou chamado no TopDesk',
    saida: 'Entrevista de desligamento aplicada e registrada para análise de dados',
    subprocessos: [
      {
        id: '11.4.1',
        nome: 'Acompanhamento de desligamento',
        nivel: 'Operacional',
        ferramentas: ['TopDesk', 'Formulário Google', 'E-mail', 'WhatsApp'],
        tarefas: [
          {
            id: '11.4.1.1',
            nome: 'Aplicação da entrevista de desligamento',
            passos: [
              'Reservar sala de reunião para aplicação da entrevista, conforme data e horário informados pelo gestor',
              'Realizar a entrevista de desligamento utilizando formulário específico (Formulário Google), acolhendo o colaborador e registrando suas respostas'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk', 'Formulário Google', 'E-mail', 'WhatsApp'],
    tempo_execucao: '30-45 minutos',
    frequencia: 'Conforme demanda'
  },

  {
    id: 'RH-11.5',
    nome: 'Elaboração de Indicadores Mensais',
    descricao: 'Consolidação de indicadores de desligamento, turnover e absenteísmo',
    nivel: 'Tático',
    icon: BarChart3,
    cor: 'bg-gradient-to-r from-purple-500 to-violet-600',
    entrada: 'Solicitação da diretoria (atividade mensal)',
    saida: 'Indicadores de desligamento, turnover e absenteísmo consolidados e enviados à diretoria',
    subprocessos: [
      {
        id: '11.5.1',
        nome: 'Entrevista de desligamento (cobrança e registro)',
        nivel: 'Operacional',
        ferramentas: ['Google Forms'],
        tarefas: [
          {
            id: '11.5.1.1',
            nome: 'Transformar dados de entrevistas de desligamento em indicadores',
            passos: [
              'Cobrar regionais das lojas que não aplicaram entrevistas de desligamento',
              'Consolidar dados obtidos em planilhas e gráficos',
              'Enviar relatórios para a diretoria'
            ]
          }
        ]
      },
      {
        id: '11.5.2',
        nome: 'Turnover e absenteísmo',
        nivel: 'Operacional',
        ferramentas: ['Senior', 'Power BI', 'Canva'],
        tarefas: [
          {
            id: '11.5.2.1',
            nome: 'Transformação de dados da Senior e Power BI',
            passos: [
              'Criar relatório no Canva com base nos dados da Senior e Power BI',
              'Gerar gráficos e planilhas comparativas',
              'Enviar relatório consolidado para a diretoria'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Google Forms', 'Senior', 'Power BI', 'Canva'],
    tempo_execucao: '3-5 dias',
    frequencia: 'Mensal'
  },

  {
    id: 'RH-11.6',
    nome: 'Avaliação de Desempenho Anual',
    descricao: 'Estruturação e aplicação da avaliação de desempenho anual dos colaboradores',
    nivel: 'Tático',
    icon: Award,
    cor: 'bg-gradient-to-r from-purple-500 to-violet-600',
    entrada: 'Solicitação da diretoria (atividade anual)',
    saida: 'Avaliação de desempenho estruturada, aplicada e acompanhada, com dados disponíveis para análises e planos de desenvolvimento',
    subprocessos: [
      {
        id: '11.6.1',
        nome: 'Estrutura de Avaliação de Desempenho',
        nivel: 'Tático',
        ferramentas: ['Sólides'],
        tarefas: [
          {
            id: '11.6.1.1',
            nome: 'Configuração da estrutura na plataforma Sólides',
            passos: [
              'Configurar a estrutura de avaliação com base nas competências pré-determinadas pela gerência de RH e diretoria'
            ]
          },
          {
            id: '11.6.1.2',
            nome: 'Configuração de avaliadores e avaliados',
            passos: [
              'Configurar os avaliadores e avaliados na plataforma',
              'Cadastrar colaboradores que ainda não possuem registro no sistema',
              'Estruturar hierarquia: Diretoria → regionais, Regionais → autoavaliação e avaliação de gerentes, Gerentes → autoavaliação'
            ]
          },
          {
            id: '11.6.1.3',
            nome: 'Treinamento dos participantes',
            passos: [
              'Definir datas e horários para treinamento dos colaboradores e gestores',
              'Aplicar treinamento para garantir correta utilização da avaliação de desempenho'
            ]
          },
          {
            id: '11.6.1.4',
            nome: 'Disparo da Avaliação de Desempenho',
            passos: [
              'Enviar avaliação aos colaboradores e gestores',
              'Acompanhar andamento das respostas, garantindo conclusão dentro do prazo estabelecido'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Sólides'],
    tempo_execucao: '30-45 dias',
    frequencia: 'Anual'
  },

  {
    id: 'RH-11.7',
    nome: '9BOX',
    descricao: 'Elaboração da matriz 9BOX para categorização de colaboradores por performance e comportamento',
    nivel: 'Tático',
    icon: PieChart,
    cor: 'bg-gradient-to-r from-purple-500 to-violet-600',
    entrada: 'Dados consolidados da Avaliação de Desempenho',
    saida: 'Relatórios 9BOX elaborados por diretoria e regional, subsidiando planos de sucessão e desenvolvimento de talentos',
    subprocessos: [
      {
        id: '11.7.1',
        nome: 'Elaboração do 9BOX',
        nivel: 'Tático',
        ferramentas: ['Sólides', 'Excel', 'Canva'],
        tarefas: [
          {
            id: '11.7.1.1',
            nome: 'Aplicação da matriz 9BOX',
            passos: [
              'Aplicar matriz 9BOX com os gestores, utilizando os resultados da avaliação de desempenho',
              'Categorizar colaboradores conforme eixos de Performance (PEG) e Comportamento',
              'Realizar calibragem por banca avaliadora com gestores de diferentes departamentos para análise ampla e imparcial'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Sólides', 'Excel', 'Canva'],
    tempo_execucao: '7-10 dias',
    frequencia: 'Anual'
  },

  {
    id: 'RH-11.8',
    nome: 'Treinamento para Gerência de Loja',
    descricao: 'Capacitação de gerentes em temas de RH e DP',
    nivel: 'Tático',
    icon: GraduationCap,
    cor: 'bg-gradient-to-r from-purple-500 to-violet-600',
    entrada: 'Necessidade de capacitação em temas de RH e DP',
    saida: 'Treinamentos elaborados e aplicados, com indicadores de presença e aproveitamento consolidados',
    subprocessos: [
      {
        id: '11.8.1',
        nome: 'Gestão de treinamentos de RH e DP aplicados nas lojas',
        nivel: 'Operacional',
        ferramentas: ['Excel', 'PowerPoint', 'Canva', 'WhatsApp', 'Google Meet'],
        tarefas: [
          {
            id: '11.8.1.1',
            nome: 'Organização e aplicação de treinamentos',
            passos: [
              'Elaborar conteúdos de treinamento relacionados aos processos e sistemas de RH e Departamento Pessoal',
              'Criar e gerir cronograma de treinamentos, incluindo datas, horários e turmas',
              'Configurar salas no Google Meet',
              'Agendar participação individual com cada colaborador via WhatsApp e e-mail',
              'Controlar presença e gerar indicadores de participação e aproveitamento'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Excel', 'PowerPoint', 'Canva', 'WhatsApp', 'Google Meet'],
    tempo_execucao: '2-4 horas por treinamento',
    frequencia: 'Trimestral'
  },

  {
    id: 'RH-11.9',
    nome: 'Admissão Jovem Aprendiz – SENAC',
    descricao: 'Processo de admissão de jovens aprendizes via SENAC',
    nivel: 'Operacional',
    icon: UserPlus,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Necessidade de reposição de aprendiz, identificada por meio da planilha mensal de controle de cotas de jovens aprendizes',
    saida: 'Jovem aprendiz contratado, matriculado, documentado, registrado no sistema e integrado à equipe da loja',
    subprocessos: [
      {
        id: '11.9.1',
        nome: 'Verificação de Turmas',
        nivel: 'Operacional',
        ferramentas: ['E-mail'],
        tarefas: [
          {
            id: '11.9.1.1',
            nome: 'Verificação de disponibilidade no SENAC',
            passos: [
              'Entrar em contato com o SENAC por e-mail',
              'Solicitar listagem de turmas e cronograma de aulas'
            ]
          }
        ]
      },
      {
        id: '11.9.2',
        nome: 'Acionamento do Gestor da Loja',
        nivel: 'Operacional',
        ferramentas: ['E-mail', 'WhatsApp'],
        tarefas: [
          {
            id: '11.9.2.1',
            nome: 'Comunicação com o gestor para iniciar seleção',
            passos: [
              'Informar gestor sobre turmas disponíveis',
              'Reforçar preferência por jovens que estudem no período noturno'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Planilha de cotas', 'E-mail', 'TopDesk', 'Banco Santander', 'SENAC'],
    tempo_execucao: '15-20 dias',
    frequencia: 'Conforme necessidade'
  },

  {
    id: 'RH-11.10',
    nome: 'Admissão Jovem Aprendiz – CIEE',
    descricao: 'Processo de admissão de jovens aprendizes via CIEE',
    nivel: 'Operacional',
    icon: UserPlus,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Necessidade de reposição de aprendiz, identificada por meio da planilha de controle de cotas atualizada',
    saida: 'Jovem aprendiz contratado formalmente, matriculado, com contrato assinado, documentação registrada e integrado à equipe da loja',
    subprocessos: [
      {
        id: '11.10.1',
        nome: 'Verificação de Turmas',
        nivel: 'Operacional',
        ferramentas: ['CIEE'],
        tarefas: [
          {
            id: '11.10.1.1',
            nome: 'Contato com o CIEE',
            passos: [
              'Entrar em contato com o CIEE para verificar a disponibilidade de turmas',
              'Solicitar listagem de turmas e cronograma de aulas'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Planilha de cotas', 'E-mail', 'TopDesk', 'Banco Santander', 'CIEE'],
    tempo_execucao: '15-20 dias',
    frequencia: 'Conforme necessidade'
  },

  {
    id: 'RH-11.11',
    nome: 'Admissão Jovem Aprendiz – FUNDHAS',
    descricao: 'Processo de admissão de jovens aprendizes via FUNDHAS',
    nivel: 'Operacional',
    icon: UserPlus,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Identificação de vaga aberta para aprendiz na loja',
    saida: 'Jovem aprendiz contratado, com matrícula confirmada, documentação assinada e integrado à loja',
    subprocessos: [
      {
        id: '11.11.1',
        nome: 'Sinalização de Vaga',
        nivel: 'Operacional',
        ferramentas: ['Formulário online da FUNDHAS'],
        tarefas: [
          {
            id: '11.11.1.1',
            nome: 'Comunicação com a FUNDHAS',
            passos: [
              'RH sinaliza a vaga por meio de formulário eletrônico disponibilizado pela instituição'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Formulário online da FUNDHAS', 'E-mail'],
    tempo_execucao: '10-15 dias',
    frequencia: 'Conforme necessidade'
  },

  {
    id: 'RH-11.12',
    nome: 'Contratação de Estagiários',
    descricao: 'Processo de contratação de estagiários via CIEE',
    nivel: 'Operacional',
    icon: Briefcase,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Solicitação de contratação feita pelo gestor/loja via chamado na plataforma TopDesk',
    saida: 'Estagiário contratado, contrato assinado e arquivado, e comunicação concluída com todas as áreas envolvidas',
    subprocessos: [
      {
        id: '11.12.1',
        nome: 'Abertura e condução do processo seletivo ou formalização do contrato',
        nivel: 'Operacional',
        ferramentas: ['TopDesk', 'Portal do CIEE', 'E-mail'],
        tarefas: [
          {
            id: '11.12.1.1',
            nome: 'Gestão do processo de contratação do estagiário',
            passos: [
              'Receber chamado via TopDesk com dados da vaga (atividades, carga horária, data de início)',
              'Se não houver candidato indicado, abrir processo de recrutamento e seleção',
              'Se houver candidato, solicitar documentação e conferir se está correta',
              'Acessar o portal do CIEE e abrir chamado com os dados do estagiário e da vaga',
              'Aguardar retorno da instituição com o contrato e realizar correções, se necessário',
              'Enviar o contrato para coleta de assinaturas na loja ou departamento'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk', 'Portal do CIEE', 'E-mail'],
    tempo_execucao: '7-10 dias',
    frequencia: 'Conforme demanda'
  },

  {
    id: 'RH-11.13',
    nome: 'Onboarding de Novos Colaboradores',
    descricao: 'Integração institucional de novos colaboradores',
    nivel: 'Tático',
    icon: UserCheck,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Confirmação de nova admissão, identificada por meio da atualização da planilha de colaboradores ativos, com indicação da data de início',
    saida: 'Colaboradores integrados institucionalmente, com conhecimento da cultura e políticas da empresa e documentação arquivada',
    subprocessos: [
      {
        id: '11.13.1',
        nome: 'Planejamento e execução da integração institucional',
        nivel: 'Operacional',
        ferramentas: ['Google Meet', 'PowerPoint', 'E-mail'],
        tarefas: [
          {
            id: '11.13.1.1',
            nome: 'Condução da integração institucional',
            passos: [
              'Consultar a planilha de colaboradores ativos para identificar os recém-admitidos e datas de início',
              'Organizar grupos de integração quinzenais ou mensais, conforme demanda',
              'Enviar convite por e-mail com data, horários e link de acesso à videoconferência (via Google Meet)',
              'Realizar integração online (duração entre 1h e 1h30), abordando história, cultura, código de conduta e benefícios',
              'Disponibilizar link para assinatura do Termo de Ciência do Código de Conduta',
              'Registrar presença com base nos termos assinados'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Google Meet', 'PowerPoint', 'E-mail'],
    tempo_execucao: '1h30',
    frequencia: 'Quinzenal/Mensal'
  },

  {
    id: 'RH-11.14',
    nome: 'Integração de Novos Gestores',
    descricao: 'Integração específica para novos gestores com foco em processos administrativos',
    nivel: 'Tático',
    icon: Users,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Atualização da planilha de novos gestores, com nomes e datas de início',
    saida: 'Gestores integrados, com compreensão dos processos administrativos da loja, documentos assinados e arquivados',
    subprocessos: [
      {
        id: '11.14.1',
        nome: 'Planejamento e execução da integração para novos gestores',
        nivel: 'Operacional',
        ferramentas: ['E-mail', 'Google Meet', 'Google Forms', 'WhatsApp'],
        tarefas: [
          {
            id: '11.14.1.1',
            nome: 'Condução da integração',
            passos: [
              'Consultar planilha de novos gestores para verificar datas de início',
              'Organizar integração com 4 a 5 gestores, com duração de 3 dias consecutivos (preferencialmente pela manhã)',
              'Enviar e-mail aos gestores do backoffice para alinhamento de agendas',
              'Confirmar disponibilidade com regionais dos gestores de loja',
              'Conduzir a integração online, apresentando os valores da empresa e cada departamento'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['E-mail', 'Google Meet', 'Google Forms', 'WhatsApp'],
    tempo_execucao: '3 dias consecutivos',
    frequencia: 'Conforme demanda'
  },

  {
    id: 'RH-11.15',
    nome: 'Cadastro de Biometria para Acesso ao Prédio – Backoffice',
    descricao: 'Cadastro de biometria para controle de acesso de colaboradores do backoffice',
    nivel: 'Operacional',
    icon: Shield,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Início do colaborador no backoffice, com dados disponíveis para registro no sistema de acesso',
    saida: 'Biometria cadastrada com sucesso, colaborador com acesso autorizado ao prédio',
    subprocessos: [
      {
        id: '11.15.1',
        nome: 'Registro e coleta de biometria',
        nivel: 'Operacional',
        ferramentas: ['Sistema de controle de acesso', 'Leitor biométrico'],
        tarefas: [
          {
            id: '11.15.1.1',
            nome: 'Realização do cadastro',
            passos: [
              'Acessar o sistema de controle de acesso',
              'Preencher dados cadastrais do colaborador (nome, CPF, cargo, setor)',
              'Realizar coleta da biometria no leitor conectado ao sistema',
              'Finalizar o registro e liberar o acesso'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Sistema de controle de acesso', 'Leitor biométrico'],
    tempo_execucao: '10-15 minutos',
    frequencia: 'Conforme admissões'
  },

  {
    id: 'RH-11.16',
    nome: 'Checklist do Gestor – Treinamentos em Loja',
    descricao: 'Acompanhamento dos treinamentos práticos executados pelo gestor com novo colaborador',
    nivel: 'Operacional',
    icon: CheckCircle,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Conclusão da integração institucional e início do colaborador na loja',
    saida: 'Checklist preenchido e arquivado, comprovando a execução dos treinamentos em loja',
    subprocessos: [
      {
        id: '11.16.1',
        nome: 'Acompanhamento dos treinamentos práticos',
        nivel: 'Operacional',
        ferramentas: ['E-mail', 'WhatsApp'],
        tarefas: [
          {
            id: '11.16.1.1',
            nome: 'Execução do checklist de treinamentos',
            passos: [
              'Regional entrega checklist ao gestor da loja após integração',
              'Gestor realiza os treinamentos com o novo colaborador durante os 3 primeiros meses',
              'Cada etapa é assinada pelo gestor e colaborador',
              'Ao final, gestor tira foto do checklist assinado e envia ao RH',
              'RH arquiva imagem na pasta digital do colaborador'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['E-mail', 'WhatsApp'],
    tempo_execucao: '3 meses',
    frequencia: 'Para cada novo colaborador'
  },

  {
    id: 'RH-11.17',
    nome: 'Gestão de Uniforme',
    descricao: 'Planejamento, cotação e distribuição de uniformes corporativos',
    nivel: 'Tático',
    icon: Settings,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Início do planejamento da troca de coleção de uniformes',
    saida: 'Uniformes entregues, com data de início definida e comunicação efetuada',
    subprocessos: [
      {
        id: '11.17.1',
        nome: 'Planejamento, cotação e distribuição',
        nivel: 'Operacional',
        ferramentas: ['Excel', 'E-mail', 'Sistema Mega'],
        tarefas: [
          {
            id: '11.17.1.1',
            nome: 'Coordenação da troca de uniforme',
            passos: [
              'Iniciar planejamento 3 meses antes, enviando planilha para preenchimento nas lojas (nome, cargo, tamanho)',
              'Receber planilhas preenchidas e verificar observações',
              'Iniciar cotações com fornecedores, verificando preços e condições',
              'Selecionar fornecedor e buscar patrocinadores para custeio parcial',
              'Com apoio do marketing, elaborar layout e submeter à aprovação da diretoria',
              'Preparar planilha final com multiplicação por 2 (uniformes por colaborador) e acréscimo de 30% para estoque'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Excel', 'E-mail', 'Sistema Mega'],
    tempo_execucao: '90-120 dias',
    frequencia: 'Anual/Semestral'
  },

  {
    id: 'RH-11.18',
    nome: 'Avaliação de Experiência de Novos Gestores e Colaboradores do BackOffice',
    descricao: 'Acompanhamento e avaliação de colaboradores em período de experiência',
    nivel: 'Tático',
    icon: Clock,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Identificação de novos colaboradores e gestores via planilha de ativos e controle de datas de admissão',
    saida: 'Avaliações registradas, documentadas e utilizadas como base para monitoramento do desempenho inicial',
    subprocessos: [
      {
        id: '11.18.1',
        nome: 'Coleta e registro das avaliações',
        nivel: 'Operacional',
        ferramentas: ['Google Forms', 'Excel', 'E-mail'],
        tarefas: [
          {
            id: '11.18.1.1',
            nome: 'Acompanhamento dos períodos de 45 e 90 dias',
            passos: [
              'Consultar planilha de ativos para identificar colaboradores/gestores em experiência',
              'Para colaboradores do backoffice, enviar e-mail aos gestores solicitando avaliação (via Google Forms)',
              'Para gestores, enviar planilha Excel aos responsáveis regionais para preenchimento e devolução por e-mail',
              'Estipular prazo de 15 dias antes do fim de cada período para retorno da avaliação',
              'Registrar respostas no Forms (colaboradores) e arquivar planilhas (gestores)'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Google Forms', 'Excel', 'E-mail'],
    tempo_execucao: '2-3 dias',
    frequencia: 'Aos 45 e 90 dias de experiência'
  },

  {
    id: 'RH-11.19',
    nome: 'Atualização de Planilhas Internas do RH',
    descricao: 'Manutenção e atualização periódica das planilhas internas com dados dos colaboradores',
    nivel: 'Operacional',
    icon: FileText,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Necessidade de manter dados atualizados dos colaboradores do Grupo Oscar',
    saida: 'Planilha RH atualizada e padronizada, servindo de base para outros processos internos e demandas de outros departamentos',
    subprocessos: [
      {
        id: '11.19.1',
        nome: 'Coleta e atualização das informações',
        nivel: 'Operacional',
        ferramentas: ['Sistema Senior', 'Excel'],
        tarefas: [
          {
            id: '11.19.1.1',
            nome: 'Atualização periódica da planilha RH',
            passos: [
              'Acessar o sistema Senior e gerar relatório por centro de custo (nº 118), filtrando por empresa (09, 101, 1200, 5000)',
              'Ajustar formatação dos dados gerados',
              'Acessar a planilha "Consulta de Ex-Colaborador" e aplicar filtro avançado ("SITAFA<>7")',
              'Baixar e organizar a nova planilha',
              'Usar PROCV para cruzar dados na planilha base (data nascimento, sexo, CPF, etc.)',
              'Incluir informações como regional e "F" de identificação'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Sistema Senior', 'Excel'],
    tempo_execucao: '2-3 horas',
    frequencia: 'Mensal'
  },

  {
    id: 'RH-11.20',
    nome: 'Cotas de Jovem Aprendiz',
    descricao: 'Controle e manutenção das cotas de jovens aprendizes por loja',
    nivel: 'Operacional',
    icon: Users,
    cor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    entrada: 'Dados atualizados sobre aprendizes e necessidades de reposição por loja',
    saida: 'Diagnóstico atualizado das necessidades de reposição de jovens aprendizes por loja',
    subprocessos: [
      {
        id: '11.20.1',
        nome: 'Manutenção e análise mensal da planilha',
        nivel: 'Operacional',
        ferramentas: ['Planilha de Cotas (Excel)'],
        tarefas: [
          {
            id: '11.20.1.1',
            nome: 'Atualização e uso da planilha de cotas',
            passos: [
              'Atualizar mensalmente a planilha com as informações das lojas e quantidade de aprendizes a repor',
              'Utilizar a planilha como base para acionar SENAC, CIEE ou FUNDHAS e iniciar processos de contratação'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Planilha de Cotas (Excel)'],
    tempo_execucao: '1 hora',
    frequencia: 'Mensal'
  },

  {
    id: 'RH-11.21',
    nome: 'Autorização de Promoção',
    descricao: 'Análise e autorização formal de promoções solicitadas',
    nivel: 'Tático',
    icon: TrendingUp,
    cor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    entrada: 'Recebimento de solicitações de promoção via chamado no sistema TopDesk',
    saida: 'Promoção autorizada, formalizada e comunicada à loja',
    subprocessos: [
      {
        id: '11.21.1',
        nome: 'Análise da Documentação',
        nivel: 'Operacional',
        ferramentas: ['TopDesk'],
        tarefas: [
          {
            id: '11.21.1.1',
            nome: 'Conferência dos documentos obrigatórios',
            passos: [
              'Verificar anexos do chamado: Ficha Curricular, Fale um Pouco Sobre Você, Redação, MP – Movimentação de Pessoal e Histórico Escolar'
            ]
          }
        ]
      },
      {
        id: '11.21.2',
        nome: 'Validação dos Requisitos',
        nivel: 'Operacional',
        ferramentas: ['TopDesk'],
        tarefas: [
          {
            id: '11.21.2.1',
            nome: 'Avaliação da elegibilidade',
            passos: [
              'Analisar a adequação salarial conforme política interna',
              'Verificar critérios de elegibilidade: experiência, desempenho e formação'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk', 'Excel'],
    tempo_execucao: '2-3 dias',
    frequencia: 'Conforme demanda'
  },

  {
    id: 'RH-11.22',
    nome: 'Envio de Comunicado de Desligamento',
    descricao: 'Comunicação formal de desligamentos para colaboradores com acesso estratégico',
    nivel: 'Operacional',
    icon: Mail,
    cor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    entrada: 'Solicitação recebida via chamado TopDesk para colaborador com acesso estratégico',
    saida: 'Comunicado de desligamento enviado, continuidade operacional garantida',
    subprocessos: [
      {
        id: '11.22.1',
        nome: 'Avaliação da Situação',
        nivel: 'Operacional',
        ferramentas: ['TopDesk'],
        tarefas: [
          {
            id: '11.22.1.1',
            nome: 'Verificação dos dados no chamado',
            passos: [
              'Conferir: nome completo, função, data do desligamento, responsável temporário e e-mail do substituto'
            ]
          }
        ]
      },
      {
        id: '11.22.2',
        nome: 'Elaboração e Envio',
        nivel: 'Operacional',
        ferramentas: ['E-mail'],
        tarefas: [
          {
            id: '11.22.2.1',
            nome: 'Comunicação formal de desligamento',
            passos: [
              'Redigir e enviar o comunicado para: diretoria, regionais, gerentes de loja e gestores do backoffice'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk', 'E-mail'],
    tempo_execucao: '1-2 horas',
    frequencia: 'Conforme necessidade'
  },

  {
    id: 'RH-11.23',
    nome: 'Promoção Salarial',
    descricao: 'Processamento de alterações salariais no sistema',
    nivel: 'Operacional',
    icon: DollarSign,
    cor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    entrada: 'Solicitação de diretores ou gerentes via chamado no TopDesk',
    saida: 'Salário atualizado no sistema, com registro rastreável e conforme políticas da empresa',
    subprocessos: [
      {
        id: '11.23.1',
        nome: 'Validação de Informações',
        nivel: 'Operacional',
        ferramentas: ['TopDesk', 'Senior'],
        tarefas: [
          {
            id: '11.23.1.1',
            nome: 'Conferência dos dados no chamado',
            passos: [
              'Verificar: nome, registro, funções atual e nova, novo salário, e data de início da vigência'
            ]
          },
          {
            id: '11.23.1.2',
            nome: 'Atualização no Sistema',
            passos: [
              'Acessar módulo de Administração de Pessoal, buscar colaborador e atualizar salário com motivo e vigência'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk', 'Senior'],
    tempo_execucao: '30-60 minutos',
    frequencia: 'Conforme demanda'
  },

  {
    id: 'RH-11.24',
    nome: 'Transferência de Centro de Custo',
    descricao: 'Processamento de transferências de colaboradores entre centros de custo',
    nivel: 'Operacional',
    icon: MapPin,
    cor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    entrada: 'Solicitação feita por gerente regional ou diretor via chamado no TopDesk',
    saida: 'Transferência efetivada com rastreabilidade, sem impacto contábil imprevisto',
    subprocessos: [
      {
        id: '11.24.1',
        nome: 'Validação da Solicitação',
        nivel: 'Operacional',
        ferramentas: ['TopDesk', 'Senior', 'Mega', 'Excel'],
        tarefas: [
          {
            id: '11.24.1.1',
            nome: 'Conferência de dados e prazo',
            passos: [
              'Verificar nome, ponto, função, loja de origem e destino, cargo e prazo (preferencialmente até dia 30 ou 17)',
              'Validar se a loja destino possui orçamento aprovado no módulo de Vagas e Orçamento',
              'Registrar solicitação em planilha interna RH/DP e programar alteração para o 1º dia útil do mês seguinte',
              'Realizar alteração no Senior e Mega no 1º dia útil do mês'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk', 'Senior', 'Mega', 'Excel'],
    tempo_execucao: '1-2 dias',
    frequencia: 'Conforme demanda'
  },

  {
    id: 'RH-11.25',
    nome: 'Treinamento de Gestores',
    descricao: 'Capacitação de gestores em temas técnicos e comportamentais',
    nivel: 'Tático',
    icon: GraduationCap,
    cor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    entrada: 'Identificação de necessidade por RH e gestores',
    saida: 'Gestores treinados, registros arquivados e feedback consolidado para melhorias contínuas',
    subprocessos: [
      {
        id: '11.25.1',
        nome: 'Planejamento',
        nivel: 'Tático',
        ferramentas: ['E-mail', 'Google Forms'],
        tarefas: [
          {
            id: '11.25.1.1',
            nome: 'Definição dos temas e público',
            passos: [
              'Definir temas técnicos (ex: seleção, promoção, desligamento) e comportamentais (ex: liderança, escuta ativa)',
              'Definir formato (online ou presencial), elaborar convite e preparar conteúdo',
              'Ministrar o conteúdo com troca de experiências e espaço para dúvidas',
              'Aplicar formulário de avaliação e checklist de presença'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['E-mail', 'Google Forms'],
    tempo_execucao: '2-4 horas',
    frequencia: 'Trimestral'
  },

  {
    id: 'RH-11.26',
    nome: 'Visita às Lojas',
    descricao: 'Acompanhamento presencial das operações e fortalecimento do vínculo com equipes',
    nivel: 'Tático',
    icon: MapPin,
    cor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    entrada: 'Planejamento estratégico conforme necessidade local',
    saida: 'Vínculo fortalecido com a operação, escuta ativa e ajustes baseados nas visitas',
    subprocessos: [
      {
        id: '11.26.1',
        nome: 'Acolhimento e Observação',
        nivel: 'Operacional',
        ferramentas: ['Comunicação verbal', 'anotações internas'],
        tarefas: [
          {
            id: '11.26.1.1',
            nome: 'Chegada e observação do ambiente',
            passos: [
              'Apresentação à equipe, observação não invasiva de uniforme, aparência, quadro de avisos',
              'Conversa com o tripé de liderança',
              'Reforçar boas práticas, tirar dúvidas e orientar sobre RH',
              'Reforçar apoio do RH e registrar informalmente percepções e demandas'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Comunicação verbal', 'anotações internas'],
    tempo_execucao: '2-3 horas',
    frequencia: 'Conforme necessidade'
  },

  {
    id: 'RH-11.27',
    nome: 'Promoção para Encarregado de Loja',
    descricao: 'Processo específico de promoção para função de encarregado com avaliação técnica e comportamental',
    nivel: 'Tático',
    icon: TrendingUp,
    cor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    entrada: 'Solicitação via chamado no TopDesk feita pelo gestor direto',
    saida: 'Promoção formalizada com análise técnica e comportamental, e plano de desenvolvimento definido',
    subprocessos: [
      {
        id: '11.27.1',
        nome: 'Entrevista e Avaliação',
        nivel: 'Tático',
        ferramentas: ['TopDesk', 'Matcher', 'Excel'],
        tarefas: [
          {
            id: '11.27.1.1',
            nome: 'Processo de avaliação completo',
            passos: [
              'Conduzir entrevista técnica e comportamental presencial ou online',
              'Gerar e analisar profiler com relatório Matcher e enviar apostila de PDI',
              'Encaminhar para validação do Diretor Operacional e Gerente Regional',
              'Devolutiva ao candidato feita pelo gestor direto, com foco construtivo',
              'RH envia carta de promoção, atualiza planilha RH/DP e encerra o chamado'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk', 'Matcher', 'Excel'],
    tempo_execucao: '7-10 dias',
    frequencia: 'Conforme demanda'
  },

  {
    id: 'RH-11.28',
    nome: 'Evento Diretrizes',
    descricao: 'Organização do evento anual de diretrizes corporativas',
    nivel: 'Estratégico',
    icon: Calendar,
    cor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    entrada: 'Início do planejamento em agosto para realização no início do ano seguinte',
    saida: 'Evento institucional realizado com alinhamento estratégico e reconhecimento de colaboradores',
    subprocessos: [
      {
        id: '11.28.1',
        nome: 'Planejamento e Execução',
        nivel: 'Estratégico',
        ferramentas: ['E-mail', 'Eventos presenciais'],
        tarefas: [
          {
            id: '11.28.1.1',
            nome: 'Organização completa do evento',
            passos: [
              'Cotações de espaço, palestrantes, estúdio, alimentação, kits, premiações',
              'Logística de viagem e alimentação; Participação de 120 pessoas presencialmente; demais online',
              'Palestra, metas, premiação, encerramento com integração',
              'Agradecimentos, compartilhamento de gravações, feedback, relatório de melhorias'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['E-mail', 'Eventos presenciais'],
    tempo_execucao: '4-5 meses',
    frequencia: 'Anual'
  },

  {
    id: 'RH-11.29',
    nome: 'Evento Trilhamento SENAC',
    descricao: 'Programa de desenvolvimento de lideranças em parceria com SENAC',
    nivel: 'Estratégico',
    icon: GraduationCap,
    cor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    entrada: 'Planejamento em setembro do ano anterior',
    saida: 'Programa concluído com alto índice de participação, desenvolvimento de lideranças e continuidade garantida',
    subprocessos: [
      {
        id: '11.29.1',
        nome: 'Estruturação do Programa',
        nivel: 'Estratégico',
        ferramentas: ['WhatsApp', 'Google Drive', 'E-mail'],
        tarefas: [
          {
            id: '11.29.1.1',
            nome: 'Organização completa do programa',
            passos: [
              'Gerentes, encarregados, líderes; temas sobre liderança e inteligência emocional',
              'Máximo de 35 pessoas por turma, criação de calendário, exclusão de datas críticas',
              'Grupos de WhatsApp por turma, avaliações ao final dos módulos, controle de presença',
              'Exigência de 100% de presença, envio por e-mail, registro no Drive e continuidade anual'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['WhatsApp', 'Google Drive', 'E-mail'],
    tempo_execucao: '6-8 meses',
    frequencia: 'Anual'
  },

  {
    id: 'RH-11.30',
    nome: 'Despesas – Cadastro e Aprovação no Sistema Mega',
    descricao: 'Gestão de despesas do departamento de RH no sistema corporativo',
    nivel: 'Operacional',
    icon: DollarSign,
    cor: 'bg-gradient-to-r from-yellow-500 to-amber-600',
    entrada: 'Recebimento mensal dos boletos do departamento',
    saida: 'Despesas cadastradas corretamente, com aprovação segura e dentro do prazo',
    subprocessos: [
      {
        id: '11.30.1',
        nome: 'Cadastro no Sistema',
        nivel: 'Operacional',
        ferramentas: ['Mega', 'E-mail'],
        tarefas: [
          {
            id: '11.30.1.1',
            nome: 'Registro e aprovação',
            passos: [
              'Cadastro individual com dados corretos: centro de custo, vencimento, tipo de despesa',
              'Enviar print do sistema e informações por e-mail para aprovação',
              'Lançar com nota fiscal, respeitando o prazo mínimo de 7 dias',
              'Validação do gerente e da controladoria no sistema'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Mega', 'E-mail'],
    tempo_execucao: '1-2 horas',
    frequencia: 'Mensal'
  },

  {
    id: 'RH-11.31',
    nome: 'PIT – Programa de Inovação Aplicada e Transformação',
    descricao: 'Coordenação do programa anual de inovação e transformação',
    nivel: 'Estratégico',
    icon: Zap,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Início do ciclo anual do programa com definição do calendário e revisão do regulamento',
    saida: 'Projeto vencedor premiado e encaminhado para implementação; ciclo encerrado com registro completo',
    subprocessos: [
      {
        id: '11.31.1',
        nome: 'Ciclo Completo do Programa',
        nivel: 'Estratégico',
        ferramentas: ['WhatsApp', 'Formulários', 'Drive', 'Recursos logísticos'],
        tarefas: [
          {
            id: '11.31.1.1',
            nome: 'Gestão do programa completo',
            passos: [
              'Ajuste do calendário e planejamento da estrutura; Alinhamento com líderes e definição de coordenadores',
              'Apresentação de temas dos projetos e abertura de inscrições; Seleção dos participantes',
              'Apresentação dos grupos, entrega de kits e início dos encontros semanais',
              'Condução dos projetos com apoio especializado; Levantamento e solicitação de uniformes',
              'Apresentação preliminar e coleta de sugestões para ajustes finais',
              'Apresentação dos projetos à banca; Escolha do projeto vencedor',
              'Reunião de avaliação com equipe organizadora e fechamento da edição'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['WhatsApp', 'Formulários', 'Drive', 'Recursos logísticos'],
    tempo_execucao: '6-8 meses',
    frequencia: 'Anual'
  },

  {
    id: 'RH-11.32',
    nome: 'PEG – Programa de Excelência e Gestão',
    descricao: 'Gestão do programa de excelência com indicadores de performance',
    nivel: 'Estratégico',
    icon: Star,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Início do ciclo semestral com definição de indicadores',
    saida: 'Premiação distribuída conforme desempenho e critérios definidos',
    subprocessos: [
      {
        id: '11.32.1',
        nome: 'Gestão do Programa',
        nivel: 'Estratégico',
        ferramentas: ['Power BI', 'E-mail'],
        tarefas: [
          {
            id: '11.32.1.1',
            nome: 'Ciclo completo do programa',
            passos: [
              'Direção define os indicadores e envia manuais atualizados às regionais',
              'Regionais acompanham os resultados no Power BI; Apuração mensal ou semestral',
              'RH envia consolidação à Regional para validação; Dados encaminhados à Diretoria Financeira',
              'Valor de 30% a 100% do salário conforme pontuação; Pagamento até o 20º dia útil',
              'Resultados disponíveis no BI com filtros por loja, regional e período'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Power BI', 'E-mail'],
    tempo_execucao: '6 meses',
    frequencia: 'Semestral'
  },

  {
    id: 'RH-11.33',
    nome: 'PES – Padrão de Excelência nos Serviços',
    descricao: 'Gestão do programa de excelência em serviços',
    nivel: 'Tático',
    icon: Award,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Início de ciclo com definição de indicadores',
    saida: 'Resultado validado, registrado e compartilhado internamente com reconhecimento à equipe',
    subprocessos: [
      {
        id: '11.33.1',
        nome: 'Definição e Execução',
        nivel: 'Tático',
        ferramentas: ['Power BI', 'Excel', 'E-mail'],
        tarefas: [
          {
            id: '11.33.1.1',
            nome: 'Gestão do programa',
            passos: [
              'Atualização dos indicadores e manuais; Envio para as Regionais',
              'RH registra dados na planilha oficial com base no Power BI',
              'Resultados enviados para validação com a loja e Regional',
              'Loja reúne a equipe para celebrar resultado; Foto do momento enviada ao RH'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Power BI', 'Excel', 'E-mail'],
    tempo_execucao: '2-3 dias',
    frequencia: 'Mensal/Trimestral'
  },

  {
    id: 'RH-11.34',
    nome: 'Prêmio Tempo de Empresa',
    descricao: 'Reconhecimento de colaboradores por tempo de serviço',
    nivel: 'Tático',
    icon: Gift,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Colaboradores completando múltiplos de 5 anos de empresa',
    saida: 'Colaboradores homenageados com entrega simbólica e/ou financeira',
    subprocessos: [
      {
        id: '11.34.1',
        nome: 'Levantamento e Premiação',
        nivel: 'Tático',
        ferramentas: ['Planilhas de homenagens', 'PIX', 'Drive'],
        tarefas: [
          {
            id: '11.34.1.1',
            nome: 'Processo completo de reconhecimento',
            passos: [
              'RH cruza base de dados atual com planilhas anteriores e envia às Regionais para validação',
              'Cotação e validação dos itens pela Diretoria e Gestão de RH',
              'Envio das lembranças às unidades antes ou durante o evento de fim de ano',
              'Cadastro das despesas após validação da Diretoria Financeira; Pagamento via PIX',
              'Cerimônia durante a confraternização de Natal'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Planilhas de homenagens', 'PIX', 'Drive'],
    tempo_execucao: '30-45 dias',
    frequencia: 'Anual'
  },

  {
    id: 'RH-11.35',
    nome: 'Prêmio Indique 1 Amigo',
    descricao: 'Programa de incentivo à indicação de colaboradores',
    nivel: 'Operacional',
    icon: Users,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Indicação bem-sucedida de novo colaborador',
    saida: 'Bonificação liberada ao colaborador após aprovação da indicação',
    subprocessos: [
      {
        id: '11.35.1',
        nome: 'Verificação de Elegibilidade',
        nivel: 'Operacional',
        ferramentas: ['TopDesk'],
        tarefas: [
          {
            id: '11.35.1.1',
            nome: 'Validação e pagamento',
            passos: [
              'Nome do colaborador indicado deve constar na ficha curricular do indicado',
              'Indicado deve ser aprovado no processo e período de experiência',
              'Após 2 meses, abrir chamado no TopDesk com formulário, ficha e documentação',
              'Verificar documentos; Cadastrar despesa e enviar para aprovação'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk'],
    tempo_execucao: '2-3 dias',
    frequencia: 'Conforme indicações'
  },

  {
    id: 'RH-11.36',
    nome: 'Quadro de Vagas',
    descricao: 'Gestão do quadro de vagas conforme orçamento anual',
    nivel: 'Operacional',
    icon: Building2,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Definição orçamentária anual da Diretoria',
    saida: 'Quadro de vagas registrado, respeitando o orçamento anual',
    subprocessos: [
      {
        id: '11.36.1',
        nome: 'Lançamento no Sistema',
        nivel: 'Operacional',
        ferramentas: ['Sistema Senior', 'Planilha Orçamentária'],
        tarefas: [
          {
            id: '11.36.1.1',
            nome: 'Cadastro no Senior',
            passos: [
              'Acessar módulo Quadro de Vagas',
              'Selecionar empresa e centro de custo',
              'Registrar cargo conforme planilha orçamentária'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Sistema Senior', 'Planilha Orçamentária'],
    tempo_execucao: '2-3 horas',
    frequencia: 'Anual'
  },

  {
    id: 'RH-11.37',
    nome: 'Alteração de Centro de Custo',
    descricao: 'Processamento de alterações de centro de custo via sistema',
    nivel: 'Operacional',
    icon: Settings,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Solicitação via chamado TopDesk pelo Gerente Regional',
    saida: 'Alteração formalizada, respeitando o quadro e orçamento vigente',
    subprocessos: [
      {
        id: '11.37.1',
        nome: 'Validação',
        nivel: 'Operacional',
        ferramentas: ['TopDesk', 'Planilhas no Drive'],
        tarefas: [
          {
            id: '11.37.1.1',
            nome: 'Checagem de vaga',
            passos: [
              'Verificar se há vaga no destino',
              'Se houver: registrar na planilha PROMOÇÕES E MUDANÇAS DE CENTRO DE CUSTO',
              'Se não houver: requerer autorização da diretoria e registrar exceção',
              'RH realiza a alteração no dia 01 do mês seguinte'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['TopDesk', 'Planilhas no Drive'],
    tempo_execucao: '1-2 dias',
    frequencia: 'Conforme demanda'
  },

  {
    id: 'RH-11.38',
    nome: 'Endomarketing – Datas Sazonais e Aniversariantes',
    descricao: 'Gestão de ações de endomarketing e eventos comemorativos',
    nivel: 'Tático',
    icon: PartyPopper,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Definição das datas comemorativas e aniversariantes do trimestre',
    saida: 'Ações comemorativas executadas com engajamento e feedback dos colaboradores',
    subprocessos: [
      {
        id: '11.38.1',
        nome: 'Datas Sazonais e Eventos',
        nivel: 'Tático',
        ferramentas: ['Planilhas Drive', 'E-mail'],
        tarefas: [
          {
            id: '11.38.1.1',
            nome: 'Planejamento e execução',
            passos: [
              'Cotar e aprovar brindes com antecedência',
              'Alinhar entrega com fornecedores e enviar às lojas',
              'Aplicar pesquisa de satisfação pós-ação',
              'Validar lista com gestores; Cotações, roteiro e execução do evento comemorativo'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Planilhas Drive', 'E-mail'],
    tempo_execucao: '7-10 dias',
    frequencia: 'Trimestral'
  },

  {
    id: 'RH-11.39',
    nome: 'Squad de Comunicação',
    descricao: 'Gestão dos canais internos de comunicação corporativa',
    nivel: 'Tático',
    icon: Globe,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Necessidade de organizar os canais internos com foco em vendas e loja',
    saida: 'Comunicação alinhada, ativa e segmentada por canal e público',
    subprocessos: [
      {
        id: '11.39.1',
        nome: 'Gestão de Canais',
        nivel: 'Tático',
        ferramentas: ['Audax', 'Google Drive', 'LinkedIn'],
        tarefas: [
          {
            id: '11.39.1.1',
            nome: 'Gestão de conteúdo',
            passos: [
              'Definir calendário editorial',
              'Criar conteúdo para stories com base nas demandas das áreas',
              'RH monitora atualizações e acessos com e-mail secundário; Departamentos alimentam suas pastas',
              'RH planeja conteúdo com Marketing; Validação e publicação nas datas definidas'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Audax', 'Google Drive', 'LinkedIn'],
    tempo_execucao: 'Contínuo',
    frequencia: 'Diário'
  },

  {
    id: 'RH-11.40',
    nome: 'Evento Trimestral',
    descricao: 'Organização de eventos trimestrais corporativos',
    nivel: 'Tático',
    icon: Calendar,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Recebimento das diretrizes do Diretor Operacional',
    saida: 'Evento realizado conforme diretrizes e orçamento aprovado',
    subprocessos: [
      {
        id: '11.40.1',
        nome: 'Planejamento e Execução',
        nivel: 'Tático',
        ferramentas: ['Sistema de pagamentos', 'E-mail'],
        tarefas: [
          {
            id: '11.40.1.1',
            nome: 'Organização do evento',
            passos: [
              'Cotação e reserva de local, alimentação e hospedagem',
              'Gestão de demandas complementares',
              'Garantir que toda a estrutura esteja montada e validada no dia do evento',
              'RH cadastra as despesas e submete à aprovação da Diretoria Operacional'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Sistema de pagamentos', 'E-mail'],
    tempo_execucao: '15-20 dias',
    frequencia: 'Trimestral'
  },

  {
    id: 'RH-11.41',
    nome: 'Gestão de Benefícios',
    descricao: 'Coordenação e atualização dos benefícios corporativos',
    nivel: 'Tático',
    icon: Gift,
    cor: 'bg-gradient-to-r from-purple-500 to-indigo-600',
    entrada: 'Necessidade de atualização e comunicação sobre benefícios',
    saida: 'Benefícios atualizados, bem comunicados e alinhados com fornecedores',
    subprocessos: [
      {
        id: '11.41.1',
        nome: 'Reunião com Fornecedores',
        nivel: 'Tático',
        ferramentas: ['Reuniões', 'Ações de Divulgação', 'E-mail'],
        tarefas: [
          {
            id: '11.41.1.1',
            nome: 'Alinhamento de condições',
            passos: [
              'RH agenda reuniões com fornecedores para atualizações',
              'Desenvolver e divulgar os benefícios com ações comunicativas',
              'RH conduz reuniões e treinamentos com gestores e colaboradores'
            ]
          }
        ]
      }
    ],
    sistemas_utilizados: ['Reuniões', 'Ações de Divulgação', 'E-mail'],
    tempo_execucao: '10-15 dias',
    frequencia: 'Anual/Semestral'
  }
];
