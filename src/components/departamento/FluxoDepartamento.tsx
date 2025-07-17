import React from 'react';
import { FileText } from 'lucide-react';
import FluxoControladoria from './FluxoControladoria';
import FluxoFinanceiro from './FluxoFinanceiro';
import FluxoEcommerce from './FluxoEcommerce';
import FluxoFiscal from './FluxoFiscal';

interface FluxoDepartamentoProps {
  departamento: string;
}

const FluxoDepartamento: React.FC<FluxoDepartamentoProps> = ({ departamento }) => {
  if (departamento.toLowerCase().includes('controladoria')) {
    return <FluxoControladoria />;
  }

  if (departamento.toLowerCase().includes('financeiro')) {
    return <FluxoFinanceiro />;
  }

  if (departamento.toLowerCase().includes('e-commerce') || departamento.toLowerCase().includes('ecommerce')) {
    return <FluxoEcommerce />;
  }

  if (departamento.toLowerCase().includes('fiscal')) {
    return <FluxoFiscal />;
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <FileText className="mx-auto mb-4 text-gray-400" size={48} />
      <p className="text-gray-600">Fluxo de processos não disponível para este departamento.</p>
    </div>
  );
};

export default FluxoDepartamento;
