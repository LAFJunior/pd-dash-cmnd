
import { processosLogisticaDetalhados } from './logistica';
import { processosVendedorTresPontoZero } from './vendedor-3-0';
import { processosCadastro } from './cadastro';
import { processosFinanceiro } from './financeiro';

export const processosEcommerce = {
  'Logística': processosLogisticaDetalhados,
  'Vendedor 3.0': processosVendedorTresPontoZero,
  'Cadastro': processosCadastro,
  'Financeiro': processosFinanceiro,
  'Comercial 1P': [],
  'Visual Merchandising': [],
  'SAC': [],
  'Marketplace': [],
  'Produto': []
};
