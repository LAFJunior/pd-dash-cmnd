import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import ListaDepartamentos from '@/components/departamentos/ListaDepartamentos';

interface ExplorarCategoriasProps {
  buscaGlobal: string;
}

export const ExplorarCategorias = ({ buscaGlobal }: ExplorarCategoriasProps) => {
  const location = useLocation();
  const state = location.state as { selectedDepartamento?: string; tipo?: string } | null;

  const departamentosBackoffice = [
    'Auditoria',
    'Compras',
    'Contábil',
    'Controladoria',
    'Defeito',
    'Departamento Pessoal',
    'E-commerce',
    'Financeiro',
    'Fiscal',
    'Recursos Humanos',
  ];

  const departamentosVarejo = [
    'São José dos Campos',
  ];

  const parceirosComerciais = [
    'Diadora Brasil',
    'Estádio Martins Pereira',
    'Festcard',
    'Loja Virtual',
    'Recicalce',
    'São José Esporte Club',
  ];

  const filtrarDepartamentos = (departamentos: string[]) => {
    if (!buscaGlobal) return departamentos;
    return departamentos.filter(dept =>
      dept.toLowerCase().includes(buscaGlobal.toLowerCase())
    );
  };

  const destacarDepartamento = (departamento: string, tipo: string) => {
    if (!state?.selectedDepartamento) return false;
    const normalizado = formatarNomeDepartamento(departamento);
    const selecionado = formatarNomeDepartamento(state.selectedDepartamento);
    return normalizado === selecionado && state.tipo === tipo;
  };

  const formatarNomeDepartamento = (nome: string): string => {
    return nome
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]/g, '');
  };

  const backOfficeFiltrado = filtrarDepartamentos(departamentosBackoffice);
  const varejoFiltrado = filtrarDepartamentos(departamentosVarejo);
  const parceirosFiltrado = filtrarDepartamentos(parceirosComerciais);

  const temResultados = backOfficeFiltrado.length > 0 || varejoFiltrado.length > 0 || parceirosFiltrado.length > 0;

  return (
    <div className="space-y-12 animate-fade-in">
      {!temResultados && buscaGlobal && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum departamento encontrado para "{buscaGlobal}"
          </p>
        </div>
      )}

      {backOfficeFiltrado.length > 0 && (
        <ListaDepartamentos
          titulo="BackOffice"
          items={backOfficeFiltrado}
          color="blue"
          selectedItem={state?.tipo === 'backoffice' ? state.selectedDepartamento : undefined}
        />
      )}

      {varejoFiltrado.length > 0 && (
        <ListaDepartamentos
          titulo="Varejo"
          items={varejoFiltrado}
          color="green"
          selectedItem={state?.tipo === 'varejo' ? state.selectedDepartamento : undefined}
        />
      )}

      {parceirosFiltrado.length > 0 && (
        <ListaDepartamentos
          titulo="Parceiros Comerciais"
          items={parceirosFiltrado}
          color="purple"
          selectedItem={state?.tipo === 'parceiros' ? state.selectedDepartamento : undefined}
        />
      )}
    </div>
  );
};
