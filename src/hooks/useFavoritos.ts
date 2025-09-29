import { useState, useEffect } from 'react';

const STORAGE_KEY = 'dashboard-favoritos';

export interface Favorito {
  id: string;
  tipo: 'departamento' | 'processo';
  nome: string;
}

export const useFavoritos = () => {
  const [favoritos, setFavoritos] = useState<Favorito[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setFavoritos(JSON.parse(stored));
      } catch (e) {
        console.error('Erro ao carregar favoritos:', e);
      }
    }
  }, []);

  const salvarFavoritos = (novos: Favorito[]) => {
    setFavoritos(novos);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(novos));
  };

  const adicionarFavorito = (favorito: Favorito) => {
    const novos = [...favoritos, favorito];
    salvarFavoritos(novos);
  };

  const removerFavorito = (id: string) => {
    const novos = favoritos.filter(f => f.id !== id);
    salvarFavoritos(novos);
  };

  const isFavorito = (id: string) => {
    return favoritos.some(f => f.id === id);
  };

  const toggleFavorito = (favorito: Favorito) => {
    if (isFavorito(favorito.id)) {
      removerFavorito(favorito.id);
    } else {
      adicionarFavorito(favorito);
    }
  };

  return {
    favoritos,
    adicionarFavorito,
    removerFavorito,
    isFavorito,
    toggleFavorito
  };
};
