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
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/4a0cf167-4340-4e37-84ee-68496631ce29.png" 
            alt="Mapa de Contexto Organizacional"
            className="max-w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default MapaContexto;