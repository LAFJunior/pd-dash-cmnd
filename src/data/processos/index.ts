
import { processosControladoria } from './controladoria/processos-controladoria';
import { ProcessoDetalhado } from '@/types/processo';

// Centralizador de todos os processos por departamento
export const processosPorDepartamento: Record<string, ProcessoDetalhado[]> = {
  'Controladoria': processosControladoria,
  // Aqui podem ser adicionados outros departamentos no futuro
  // 'E-Commerce': processosEcommerce,
  // 'Compras': processosCompras,
  // etc...
};

// Função utilitária para buscar processos por departamento
export const getProcessosPorDepartamento = (departamento: string): ProcessoDetalhado[] => {
  return processosPorDepartamento[departamento] || [];
};

// Função utilitária para buscar um processo específico por ID
export const getProcessoPorId = (id: string): ProcessoDetalhado | undefined => {
  for (const processos of Object.values(processosPorDepartamento)) {
    const processo = processos.find(p => p.id === id);
    if (processo) return processo;
  }
  return undefined;
};
