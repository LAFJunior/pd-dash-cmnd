
import React from 'react';
import { ArrowRight, FileInput, Eye, CheckCircle, Cog, Archive } from 'lucide-react';

const FluxoControladoria = () => {
  const etapas = [
    {
      nome: 'Recebimento',
      descricao: 'Documentação e relatórios',
      icon: FileInput,
      cor: 'bg-blue-500'
    },
    {
      nome: 'Análise',
      descricao: 'Validação e conferência',
      icon: Eye,
      cor: 'bg-yellow-500'
    },
    {
      nome: 'Aprovação',
      descricao: 'Decisão e autorização',
      icon: CheckCircle,
      cor: 'bg-green-500'
    },
    {
      nome: 'Execução',
      descricao: 'Lançamento e processamento',
      icon: Cog,
      cor: 'bg-purple-500'
    },
    {
      nome: 'Arquivo',
      descricao: 'Armazenamento e registro',
      icon: Archive,
      cor: 'bg-gray-500'
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-6 text-center text-gray-800">
        Fluxo de Processos da Controladoria
      </h3>
      
      <div className="flex flex-wrap items-center justify-center gap-4">
        {etapas.map((etapa, index) => {
          const IconComponent = etapa.icon;
          
          return (
            <React.Fragment key={etapa.nome}>
              <div className="flex flex-col items-center text-center min-w-[120px]">
                <div className={`${etapa.cor} p-4 rounded-full mb-2 shadow-lg`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm">{etapa.nome}</h4>
                <p className="text-xs text-gray-600 mt-1">{etapa.descricao}</p>
              </div>
              
              {index < etapas.length - 1 && (
                <ArrowRight size={20} className="text-gray-400 hidden md:block" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FluxoControladoria;
