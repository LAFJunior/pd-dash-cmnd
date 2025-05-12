
import React from 'react';
import ListaDepartamentos from '@/components/departamentos/ListaDepartamentos';

const departamentosBackoffice = [
  "Auditoria",
  "Compras",
  "Contábil",
  "Controladoria", 
  "Departamento Pessoal (DP)",
  "Defeito",
  "Festcard",
  "Financeiro",
  "Fiscal",
  "Marketing",
  "Recursos Humanos (RH)",
  "Sapucaia (CD/Operações)",
  "São José dos Campos (CD/Operações)",
  "Suplementos",
  "T.I Desenvolvimento",
  "T.I Operações",
  "T.I Projetos"
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
  "Credssytem",
  "Fornecedores",
  "Infracommerce (CD/Operações)",
  "Instituições Financeiras"
];

const Departamentos = () => {
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
        />
        
        <ListaDepartamentos 
          titulo="Varejo" 
          items={departamentosVarejo} 
          color="#499B54"
        />
        
        <ListaDepartamentos 
          titulo="Parceiros Comerciais" 
          items={parceirosComerciais} 
          color="#E39D25"
        />
      </div>
    </div>
  );
};

export default Departamentos;
