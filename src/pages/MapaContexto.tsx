import React from 'react';
import MapaInterativo from '@/components/mapa-contexto/MapaInterativo';

const MapaContexto = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Mapa de Contexto</h1>
          <p className="text-gray-500">Visualização do Ecossistema Empresarial - Use o scroll do mouse para zoom</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <MapaInterativo editMode={false} />
      </div>
    </div>
  );
};

export default MapaContexto;