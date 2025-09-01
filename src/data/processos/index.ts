import { ProcessoDetalhado } from '@/types/processo';
import { processosControladoriaDetalhados } from './controladoria';
import { processosEcommerce } from './ecommerce';
import { processosFinanceiro } from './financeiro';
import { processosDefeito } from './defeito';
import { processosSaoJoseCampos } from './sao-jose-campos';
import { processosFiscal } from './fiscal';
import { processosCompras } from './compras';
import { processosAuditoria } from './auditoria';
import { processosContabil } from './contabil';
import { processosDepartamentoPessoal } from './departamento-pessoal';

// Função para extrair todos os processos dos pilares do e-commerce
const extrairProcessosEcommerce = (): ProcessoDetalhado[] => {
  const processos: ProcessoDetalhado[] = [];
  
  Object.values(processosEcommerce).forEach(processosPilar => {
    if (Array.isArray(processosPilar)) {
      processos.push(...processosPilar);
    }
  });
  
  return processos;
};

// Agregação de todos os processos de todos os departamentos
export const todosOsProcessos: ProcessoDetalhado[] = [
  ...processosControladoriaDetalhados,
  ...extrairProcessosEcommerce(),
  ...processosFinanceiro,
  ...processosDefeito,
  ...processosSaoJoseCampos,
  ...processosFiscal,
  ...processosCompras,
  ...processosAuditoria,
  ...processosContabil,
  ...processosDepartamentoPessoal
];

// Função para contar processos por nível
export const contarProcessosPorNivel = () => {
  const contadores = {
    total: todosOsProcessos.length,
    estrategicos: 0,
    taticos: 0,
    operacionais: 0
  };

  todosOsProcessos.forEach(processo => {
    switch (processo.nivel) {
      case 'Estratégico':
        contadores.estrategicos++;
        break;
      case 'Tático':
        contadores.taticos++;
        break;
      case 'Operacional':
        contadores.operacionais++;
        break;
    }
  });

  return contadores;
};