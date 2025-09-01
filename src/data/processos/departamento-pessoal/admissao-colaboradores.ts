import { ProcessoDetalhado } from '@/types/processo';
import { Users } from 'lucide-react';

export const admissaoColaboradores: ProcessoDetalhado = {
  id: 'DP-012.1',
  nome: 'Admissão de Novos Colaboradores',
  descricao: 'Processo completo de admissão de novos colaboradores com validação de documentação, cadastro no sistema e integração legal',
  nivel: 'Operacional',
  icon: Users,
  cor: 'bg-gradient-to-br from-purple-500 to-purple-600',
  entrada: 'Solicitação de admissão via Topdesk com documentação completa',
  saida: 'Colaborador cadastrado no Senior, com ponto ativo no Mega, benefícios cadastrados e admissão enviada ao eSocial',
  tempo_execucao: '2-3 dias úteis',
  frequencia: 'Conforme demanda',
  sistemas_utilizados: ['Topdesk', 'Senior', 'Mega', 'eSocial'],
  subprocessos: [
    {
      id: '12.1.1',
      nome: 'Recebimento e Conferência de Documentação',
      nivel: 'Operacional',
      ferramentas: ['Topdesk'],
      tarefas: [
        {
          id: '12.1.1.1',
          nome: 'Validar checklist de documentos obrigatórios',
          passos: [
            'Acessar o chamado do Topdesk aberto pela loja',
            'Conferir todos os documentos exigidos: Certidão de Nascimento, Comprovante de Escolaridade, Exame Admissional, Certificado de Reservista, Cartão de vale Transporte, Documentos de Filhos, Atestado de Antecedentes Criminais, Termo de Vale Transporte, Uniforme, Autorização de Desconto',
            'Verificar arquivo anexado e analisar a legibilidade',
            'Caso algum documento esteja ilegível ou ausente: responder ao chamado solicitando o envio correto e marcar como "Pendente de loja"',
            'Confirmar PIS ativo (consultar carteira física/digital ou CNIS)'
          ]
        }
      ]
    },
    {
      id: '12.1.2',
      nome: 'Cadastro no Sistema',
      nivel: 'Operacional',
      ferramentas: ['Senior', 'REP'],
      tarefas: [
        {
          id: '12.1.2.1',
          nome: 'Cadastrar colaborador no sistema Senior',
          passos: [
            'Acessar Módulo Administração de pessoal no Senior',
            'Ativar a empresa onde será feita a contratação',
            'Acessar Menu > Colaboradores > Ficha cadastral > Empregados',
            'Verificar último cadastro utilizado na filial',
            'Preencher dados pessoais: nome completo, data de nascimento, CPF, RG, CTPS',
            'Informar dados de endereço e dados bancários',
            'Cadastrar dependentes, se houver',
            'Salvar cadastro e verificar status Ativo – Em admissão'
          ]
        },
        {
          id: '12.1.2.2',
          nome: 'Incluir e Gerar Contrato na Senior',
          passos: [
            'Acessar Menu: Colaboradores > Documentos > Sequencia Documentos',
            'Gerar o contrato de acordo com a função e loja'
          ]
        },
        {
          id: '12.1.2.3',
          nome: 'Cadastro do ponto',
          passos: [
            'Feito no aplicativo gerenciador REP'
          ]
        }
      ]
    },
    {
      id: '12.1.3',
      nome: 'Inclusão de Benefícios',
      nivel: 'Operacional',
      ferramentas: ['Topdesk'],
      tarefas: [
        {
          id: '12.1.3.1',
          nome: 'Solicitar benefícios via comunicação com a loja',
          passos: [
            'Confirmar se o colaborador usará vale-transporte',
            'Caso sim, solicitar número de linhas e valores informados pelo colaborador',
            'Enviar solicitação de cartão VT ou inclusão no convênio ao responsável financeiro/convênios'
          ]
        }
      ]
    },
    {
      id: '12.1.4',
      nome: 'Comunicação e Integração Legal',
      nivel: 'Operacional',
      ferramentas: ['Topdesk', 'eSocial', 'Senior'],
      tarefas: [
        {
          id: '12.1.4.1',
          nome: 'Comunicação com loja',
          passos: [
            'Após a conferência da documentação',
            'Programar data de início com a loja'
          ]
        },
        {
          id: '12.1.4.2',
          nome: 'Enviar evento de admissão ao eSocial',
          passos: [
            'Acessar Módulo Senior > Eventos > eSocial',
            'Selecionar evento S-2200 – Cadastramento Inicial de Vínculo',
            'Validar retorno (aceito sem erros)',
            'Programar data de início com a loja',
            'Confirmar com gestor ou RH da loja a data de início do colaborador',
            'Atualizar chamado no Topdesk com data confirmada e status "Concluído"'
          ]
        }
      ]
    }
  ]
};
