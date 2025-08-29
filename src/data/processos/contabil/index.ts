import { ProcessoDetalhado } from '../../../types/processo';

// Importar processos individuais
import { lancamentoDespesas } from './lancamento-despesas';
import { apuracaoPisCofins } from './apuracao-pis-cofins';
import { conferenciaCaixas } from './conferencia-caixas';
import { importacaoExtratosBancarios } from './importacao-extratos';
import { integracaoFiscal } from './integracao-fiscal';
import { fechamentoContabilMensal } from './fechamento-mensal';
import { conciliacaoReceitas } from './conciliacao-receitas-despesas';
import { geracaoECD } from './geracao-ecd';
import { geracaoECF } from './geracao-ecf';
import { apuracaoLucroReal } from './apuracao-lucro-real';

// Exportar processos individuais
export { lancamentoDespesas };
export { apuracaoPisCofins };
export { conferenciaCaixas };
export { importacaoExtratosBancarios };
export { integracaoFiscal };
export { fechamentoContabilMensal };
export { conciliacaoReceitas };
export { geracaoECD };
export { geracaoECF };
export { apuracaoLucroReal };

// Array consolidado dos processos detalhados da Controladoria
export const processosContabilDetalhados: ProcessoDetalhado[] = [
  lancamentoDespesas,
  apuracaoPisCofins,
  conferenciaCaixas,
  importacaoExtratosBancarios,
  integracaoFiscal,
  fechamentoContabilMensal,
  conciliacaoReceitas,
  geracaoECD,
  geracaoECF,
  apuracaoLucroReal
];

// Lista de todos os processos do departamento Contábil (para compatibilidade)
export const processosContabil: ProcessoDetalhado[] = processosContabilDetalhados;