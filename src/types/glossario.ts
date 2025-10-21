export interface TermoGlossario {
  termo: string;
  definicao: string;
  categoria: string;
  relacionados?: string[];
}

export interface CategoriaGlossario {
  id: string;
  nome: string;
  descricao: string;
  icone: string;
  termos: TermoGlossario[];
}