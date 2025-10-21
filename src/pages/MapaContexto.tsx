import React, { useState, useRef } from 'react';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MapaContexto = () => {
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 3;

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * -0.001;
    const newZoom = Math.min(Math.max(zoom + delta, MIN_ZOOM), MAX_ZOOM);
    setZoom(newZoom);
  };

  const handlePanStart = (e: React.MouseEvent) => {
    setIsPanning(true);
    setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handlePanMove = (e: React.MouseEvent) => {
    if (!isPanning) return;
    setPan({
      x: e.clientX - panStart.x,
      y: e.clientY - panStart.y,
    });
  };

  const handlePanEnd = () => {
    setIsPanning(false);
  };

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 0.2, MAX_ZOOM));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 0.2, MIN_ZOOM));
  };

  const handleResetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Mapa de Contexto</h1>
          <p className="text-muted-foreground">Visualização do Ecossistema Empresarial - Use o scroll do mouse para zoom</p>
        </div>
      </div>
      
      <div className="bg-card rounded-lg shadow-md p-6 relative">
        {/* Controles de Zoom */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={handleZoomIn}
            disabled={zoom >= MAX_ZOOM}
            title="Aumentar zoom"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleZoomOut}
            disabled={zoom <= MIN_ZOOM}
            title="Diminuir zoom"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={handleResetView}
            title="Resetar visualização"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
          <div className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs text-center">
            {Math.round(zoom * 100)}%
          </div>
        </div>

        <div 
          ref={containerRef}
          className="w-full h-[800px] overflow-hidden flex justify-center items-center cursor-move"
          onWheel={handleWheel}
          onMouseDown={handlePanStart}
          onMouseMove={handlePanMove}
          onMouseUp={handlePanEnd}
          onMouseLeave={handlePanEnd}
        >
          <img 
            src="/lovable-uploads/f47813ca-8548-47f0-ab12-53610d1fc22a.png" 
            alt="Mapa de Contexto Empresarial" 
            className="rounded-lg shadow-sm select-none"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transition: isPanning ? 'none' : 'transform 0.1s ease-out',
              imageRendering: '-webkit-optimize-contrast',
              WebkitFontSmoothing: 'antialiased',
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d',
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default MapaContexto;