
export interface ProcessoTarefa {
  id: string;
  nome: string;
  passos: string[];
  urls?: string[];
}

export interface ProcessoSubprocesso {
  id: string;
  nome: string;
  nivel: 'Estratégico' | 'Tático' | 'Operacional';
  ferramentas: string[];
  tarefas: ProcessoTarefa[];
}

export interface ProcessoDetalhado {
  id: string;
  nome: string;
  descricao: string;
  nivel: 'Estratégico' | 'Tático' | 'Operacional';
  icon: any;
  cor: string;
  entrada: string;
  saida: string;
  subprocessos: ProcessoSubprocesso[];
  tempo_execucao?: string;
  frequencia?: string;
  sistemas_utilizados: string[];
}
