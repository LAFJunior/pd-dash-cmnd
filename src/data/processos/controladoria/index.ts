
import { auditoriaOscar } from './auditoria-oscar';
import { auditoriaFranquias } from './auditoria-franquias';

export const processosControladoriaDetalhados = [
  auditoriaOscar,
  auditoriaFranquias
];

export * from './auditoria-oscar';
export * from './auditoria-franquias';
