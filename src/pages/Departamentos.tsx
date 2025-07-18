
import React from 'react';
import { useLocation } from 'react-router-dom';
import ListaDepartamentos from '@/components/departamentos/ListaDepartamentos';

const departamentosBackoffice = [
  "Auditoria",
  "Compras",
  "Contábil",
  "Controladoria", 
  "Departamento Pessoal (DP)",
  "Defeito",
  "Festcard",
  "Financeiro Varejo",
  "Fiscal",
  "Marketing",
  "Recursos Humanos (RH)",
  "CD/Operações (São José dos Campos)",
  "Suprimentos",
  "SAC",
  "T.I Desenvolvimento",
  "T.I Operações",
  "T.I Projetos e Inovações"
];

const departamentosVarejo = [
  "Diadora Brasil",
  "E-Commerce",
  "Estádio Martins Pereira",
  "Franquias",
  "Lojas",
  "Recicalce",
  "São José Esporte Club"
];

const parceirosComerciais = [
  "Clientes",
  "CredSytem",
  "Fornecedores",
  "Infracommerce ",
  "Instituições Financeiras"
];

const Departamentos = () => {
  const location = useLocation();
  const { selectedDepartamento, tipo } = location.state || {};

  // Destaque o departamento selecionado se existir
  const destacarDepartamento = (tipo: string | undefined, departamento: string) => {
    if (!selectedDepartamento) return false;
    
    const nomeDepartamentoFormatado = formatarNomeDepartamento(departamento);
    const selectedDepartamentoFormatado = formatarNomeDepartamento(selectedDepartamento);
    
    return tipo === location.state?.tipo && 
           nomeDepartamentoFormatado === selectedDepartamentoFormatado;
  };

  // Função auxiliar para normalizar nomes de departamentos para comparação
  const formatarNomeDepartamento = (nome: string) => {
    // Remova parênteses e abreveações
    const simplificado = nome
      .replace(/\([^)]*\)/g, '')  // Remove tudo entre parênteses
      .trim();
      
    // Mapeie nomes curtos para sua versão completa
    const mapeamentoNomes: {[key: string]: string} = {
      'DP': 'Departamento Pessoal',
      'RH': 'Recursos Humanos',
      'T.I': 'T.I',
      'SJEC': 'São José Esporte Club',
      'Estádio': 'Estádio Martins Pereira',
      'Inst. Financeiras': 'Instituições Financeiras'
    };
    
    return mapeamentoNomes[simplificado] || simplificado;
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Departamentos</h1>
        <p className="text-gray-500">Visualize e gerencie os departamentos da organização</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ListaDepartamentos 
          titulo="BackOffice" 
          items={departamentosBackoffice} 
          color="#4C72B1"
          selectedItem={selectedDepartamento && tipo === 'backoffice' ? selectedDepartamento : undefined}
        />
        
        <ListaDepartamentos 
          titulo="Varejo" 
          items={departamentosVarejo} 
          color="#499B54"
          selectedItem={selectedDepartamento && tipo === 'varejo' ? selectedDepartamento : undefined}
        />
        
        <ListaDepartamentos 
          titulo="Parceiros Comerciais" 
          items={parceirosComerciais} 
          color="#E39D25"
          selectedItem={selectedDepartamento && tipo === 'parceiros' ? selectedDepartamento : undefined}
        />
      </div>
    </div>
  );
};

export default Departamentos;
