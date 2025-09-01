import { ProcessoDetalhado } from '@/types/processo';
import { admissaoColaboradores } from './admissao-colaboradores';
import { folhaPagamento } from './folha-pagamento';
import { folhaAdiantamento } from './folha-adiantamento';
import { rotinasSindicais } from './rotinas-sindicais';
import { demissoesRescisoes } from './demissoes-rescisoes';
import { planejamentoFerias } from './planejamento-ferias';
import { gestaoBeneficios } from './gestao-beneficios';
import { gestaoAfastamentos } from './gestao-afastamentos';
import { controleProcessosTrabalhistas } from './controle-processos-trabalhistas';

export const processosDepartamentoPessoal: ProcessoDetalhado[] = [
  admissaoColaboradores,
  folhaPagamento,
  folhaAdiantamento,
  rotinasSindicais,
  demissoesRescisoes,
  planejamentoFerias,
  gestaoBeneficios,
  gestaoAfastamentos,
  controleProcessosTrabalhistas
];