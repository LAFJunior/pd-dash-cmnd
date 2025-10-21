import React from 'react';

const MapaContexto = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Mapa de Contexto</h1>
          <p className="text-gray-500">Visualização do Ecossistema Empresarial</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="w-full h-full flex justify-center items-center">
          <img 
            src="/lovable-uploads/f47813ca-8548-47f0-ab12-53610d1fc22a.png" 
            alt="Mapa de Contexto Empresarial" 
            className="max-w-full h-auto rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default MapaContexto;