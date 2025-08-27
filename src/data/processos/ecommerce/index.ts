
import { processosLogisticaDetalhados } from './logistica';
import { processosVendedorTresPontoZero } from './vendedor-3-0';
import { processosCadastro } from './cadastro';
import { processosFinanceiro } from './financeiro';
import { processosVmEstudio } from './visualmerchandising';

export const processosEcommerce = {
  'Logística': processosLogisticaDetalhados,
  'Vendedor 3.0': processosVendedorTresPontoZero,
  'Cadastro': processosCadastro,
  'Financeiro': processosFinanceiro,
  'Comercial 1P': [],
  'Visual Merchandising': processosVmEstudio,
  'SAC': [],
  'Marketplace': [],
  'Produto': []
};
