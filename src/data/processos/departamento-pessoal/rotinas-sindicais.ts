import { ProcessoDetalhado } from '@/types/processo';
import { FileText } from 'lucide-react';

export const rotinasSindicais: ProcessoDetalhado = {
  id: '12.4',
  nome: 'Rotinas Sindicais e Obrigações Legais',
  descricao: 'Geração de guias de recolhimento e cumprimento das obrigações sindicais e governamentais',
  nivel: 'Operacional',
  icon: FileText,
  cor: 'bg-gradient-to-br from-orange-500 to-orange-600',
  entrada: 'Folha de pagamento finalizada e consolidada no Senior',
  saida: 'Obrigações sindicais e governamentais cumpridas, guias emitidas e enviadas ao Financeiro para pagamento',
  tempo_execucao: '2-3 dias úteis',
  frequencia: 'Mensal',
  sistemas_utilizados: ['Senior', 'eSocial', 'Conectividade Social', 'DCTFWeb'],
  subprocessos: [
    {
      id: '12.4.1',
      nome: 'Geração de Guias de Recolhimento',
      nivel: 'Operacional',
      ferramentas: ['Conectividade Social', 'eSocial DCTFWeb'],
      tarefas: [
        {
          id: '12.4.1.1',
          nome: 'Gerar guia FGTS',
          passos: [
            'Acessar Conectividade Social (Caixa Econômica)',
            'Importar arquivo gerado pelo Senior (SEFIP)',
            'Validar competência e valores',
            'Gerar guia de recolhimento (GRF) e salvar em PDF'
          ]
        },
        {
          id: '12.4.1.2',
          nome: 'Gerar guia de INSS',
          passos: [
            'Acessar eSocial DCTFWeb',
            'Conferir eventos da folha transmitidos',
            'Gerar DARF previdenciário'
          ]
        },
        {
          id: '12.4.1.3',
          nome: 'Gerar contribuições sindicais (quando aplicável)',
          passos: [
            'Consultar acordos sindicais vigentes',
            'Gerar guias específicas para cada sindicato conforme base territorial'
          ]
        }
      ]
    },
    {
      id: '12.4.2',
      nome: 'Envio de Informações ao Governo e Sindicatos',
      nivel: 'Operacional',
      ferramentas: ['eSocial'],
      tarefas: [
        {
          id: '12.4.2.1',
          nome: 'Transmitir eventos ao eSocial',
          passos: [
            'Acessar módulo eSocial > Eventos Periódicos',
            'Transmitir S-1200 (remuneração) e S-1210 (pagamentos)',
            'Aguardar retorno de aceite sem erros'
          ]
        },
        {
          id: '12.4.2.2',
          nome: 'Enviar guias e relatórios aos sindicatos (quando exigido)',
          passos: [
            'Encaminhar por e-mail ou sistema indicado pelo sindicato',
            'Solicitar confirmação de recebimento'
          ]
        },
        {
          id: '12.4.2.3',
          nome: 'Pagamento das Obrigações',
          passos: [
            'Consolidar todas as guias (FGTS, DARF, Sindicatos)',
            'Enviar via e-mail ou pasta de rede para pagamento'
          ]
        }
      ]
    }
  ]
};