
import React from 'react';
import MapaInterativo from '@/components/mapa-contexto/MapaInterativo';

const MapaContexto = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Mapa de Contexto</h1>
        <p className="text-gray-500">Visualize o contexto dos processos corporativos</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <MapaInterativo />
        <div className="flex justify-center items-center gap-8 mt-6 text-sm text-gray-600 flex-wrap">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#4C72B1] rounded-sm mr-2"></div>
            <span>BackOffice</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#499B54] rounded-sm mr-2"></div>
            <span>Varejo</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#E39D25] rounded-sm mr-2"></div>
            <span>Parceiros Comerciais</span>
          </div>
          <div className="flex items-center">
            <a 
              href="https://professorannibal.com.br/2016/12/06/elaborando-o-mapa-de-contexto-de-sua-organizacao/" 
              target="_blank" 
              className="text-blue-600 hover:underline"
            >
              Saiba mais sobre mapas de contexto
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapaContexto;
