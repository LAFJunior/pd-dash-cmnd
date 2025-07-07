
import { auditoriaOscar } from './auditoria-oscar';
import { auditoriaFranquias } from './auditoria-franquias';
import { apoioLoja } from './apoio-loja';
import { conciliacaoFestcard } from './conciliacao-festcard';
import { conciliacaoBancaria } from './conciliacao-bancaria';

export const processosControladoriaDetalhados = [
  auditoriaOscar,
  auditoriaFranquias,
  apoioLoja,
  conciliacaoFestcard,
  conciliacaoBancaria
];

export * from './auditoria-oscar';
export * from './auditoria-franquias';
export * from './apoio-loja';
export * from './conciliacao-festcard';
export * from './conciliacao-bancaria';
