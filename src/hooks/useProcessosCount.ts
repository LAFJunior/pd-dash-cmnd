import { useMemo } from 'react';
import { contarProcessosPorNivel } from '@/data/processos';

export const useProcessosCount = () => {
  const contadores = useMemo(() => {
    return contarProcessosPorNivel();
  }, []);

  return contadores;
};