
import { ProcessoDetalhado } from '@/types/processo';
import { FileText } from 'lucide-react';

export const gestaoContratos: ProcessoDetalhado = {
  id: 'CON-006',
  nome: 'Gestão de Contratos',
  descricao: 'Acordo firmado entre diretor responsável e locatário para locação de imóvel comercial',
  nivel: 'Tático',
  icon: FileText,
  cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
  entrada: 'Acordo firmado entre diretor responsável e locatário para locação de imóvel comercial',
  saida: 'Contrato formalizado, assinado e digitalizado, com informações organizadas e atualizadas na ferramenta de gestão para controle contínuo.',
  tempo_execucao: 'Conforme demanda',
  frequencia: 'Conforme necessidade',
  sistemas_utilizados: ['E-mail corporativo', 'D4Sign', 'Linte'],
  subprocessos: [
    {
      id: '6.1',
      nome: 'Formalização do Contrato',
      nivel: 'Tático',
      ferramentas: ['E-mail corporativo'],
      tarefas: [
        {
          id: '6.1.1',
          nome: 'Coletar e enviar documentos ao locador',
          passos: [
            'Reunir documentos exigidos (ex: CNPJ, documentos da empresa, dados do fiador)',
            'Enviar por e-mail ao proprietário do imóvel ou responsável legal'
          ]
        },
        {
          id: '6.1.2',
          nome: 'Encaminhar contrato para análise jurídica',
          passos: [
            'Receber minuta elaborada pelo locador',
            'Encaminhar o contrato ao departamento jurídico interno',
            'Aguardar retorno com validação ou solicitação de ajustes'
          ]
        }
      ]
    },
    {
      id: '6.2',
      nome: 'Assinatura e Armazenamento',
      nivel: 'Operacional',
      ferramentas: ['D4Sign', 'Linte'],
      tarefas: [
        {
          id: '6.2.1',
          nome: 'Enviar contrato para assinatura digital',
          passos: [
            'Acessar a plataforma D4Sign',
            'Subir o contrato aprovado pelo jurídico',
            'Definir ordem e contatos dos signatários',
            'Acompanhar o status até que todos assinem'
          ]
        },
        {
          id: '6.2.2',
          nome: 'Armazenar contrato assinado na Linte',
          passos: [
            'Fazer upload do contrato assinado na plataforma Linte',
            'Garantir que o arquivo esteja corretamente vinculado ao imóvel/loja correspondente'
          ]
        }
      ]
    },
    {
      id: '6.3',
      nome: 'Atualização e Acompanhamento Contratual',
      nivel: 'Tático',
      ferramentas: ['Linte', 'E-mail'],
      tarefas: [
        {
          id: '6.3.1',
          nome: 'Atualizar dados contratuais na plataforma Linte',
          passos: [
            'Inserir datas de vigência, valores de aluguel, índices de reajuste e demais cláusulas contratuais',
            'Classificar o contrato conforme tipo de despesa ou grupo de lojas'
          ]
        },
        {
          id: '6.3.2',
          nome: 'Monitorar ciclo de vida dos contratos',
          passos: [
            'Acompanhar os contratos ativos e próximos ao vencimento pela Linte, garantindo:',
            '- Que os prazos sejam monitorados com antecedência',
            '- Que não haja risco de perda de ponto por vencimento não renegociado',
            '- Que ajustes contratuais sejam realizados conforme os prazos estabelecidos',
            'Uma vez ao mês enviar um relatório para o Diretor Financeiro com os contratos próximos ao vencimento para início da negociação'
          ]
        }
      ]
    }
  ]
};
