
import { auditoriaOscar } from './auditoria-oscar';
import { auditoriaFranquias } from './auditoria-franquias';
import { apoioLoja } from './apoio-loja';
import { conciliacaoFestcard } from './conciliacao-festcard';
import { conciliacaoBancaria } from './conciliacao-bancaria';
import { gestaoContratos } from './gestao-contratos';
import { indenizacoesDefeito } from './indenizacoes-defeito';
import { gestaoDespesas } from './gestao-despesas';

export const processosControladoriaDetalhados = [
  auditoriaOscar,
  auditoriaFranquias,
  apoioLoja,
  conciliacaoFestcard,
  conciliacaoBancaria,
  gestaoContratos,
  indenizacoesDefeito,
  gestaoDespesas
];

export * from './auditoria-oscar';
export * from './auditoria-franquias';
export * from './apoio-loja';
export * from './conciliacao-festcard';
export * from './conciliacao-bancaria';
export * from './gestao-contratos';
export * from './indenizacoes-defeito';
export * from './gestao-despesas';
