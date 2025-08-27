
import { processosLogisticaDetalhados } from './logistica';
import { processosVendedorTresPontoZero } from './vendedor-3-0';
import { processosCadastro } from './cadastro';
import { processosFinanceiro } from './financeiro';
import { processosVmEstudio } from './visualmerchandising';
import { processosComercialUmP } from './comercial-1p';

export const processosEcommerce = {
  'Logística': processosLogisticaDetalhados,
  'Vendedor 3.0': processosVendedorTresPontoZero,
  'Cadastro': processosCadastro,
  'Financeiro': processosFinanceiro,
  'Visual Merchandising': processosVmEstudio,
  'Comercial 1P': processosComercialUmP,
  'SAC': [],
  'Marketplace': [],
  'Produto': []
};
