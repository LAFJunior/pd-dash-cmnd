import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapaContexto = () => {

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Mapa de Contexto</h1>
          <p className="text-muted-foreground">Visualização interativa do Ecossistema Empresarial</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.open('https://www.canva.com/design/DAGiUXtKCvA/VkaAj-qeTjtMK7_I7o3SUQ/view', '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Abrir em Tela Cheia
        </Button>
      </div>
      
      <div className="bg-card rounded-lg shadow-md overflow-hidden">
        {/* Mapa de Contexto - Design do Canva */}
        {/* Fonte: https://www.canva.com/design/DAGiUXtKCvA/VkaAj-qeTjtMK7_I7o3SUQ/ */}
        <div className="relative w-full" style={{ paddingTop: '100%' }}>
          <iframe 
            loading="lazy"
            src="https://www.canva.com/design/DAGiUXtKCvA/VkaAj-qeTjtMK7_I7o3SUQ/view?embed"
            allowFullScreen
            allow="fullscreen"
            className="absolute top-0 left-0 w-full h-full border-none"
            title="Mapa de Contexto Empresarial - PD"
          />
        </div>
      </div>
    </div>
  );
};

export default MapaContexto;