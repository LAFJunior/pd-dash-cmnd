
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Store } from 'lucide-react';

// Fix para ícones do Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapaLojas = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const lojas = [
    { nome: "Loja São Paulo - SP", lat: -23.5505, lng: -46.6333, endereco: "São Paulo, SP" },
    { nome: "Loja Rio de Janeiro - RJ", lat: -22.9068, lng: -43.1729, endereco: "Rio de Janeiro, RJ" },
    { nome: "Loja Belo Horizonte - MG", lat: -19.9167, lng: -43.9345, endereco: "Belo Horizonte, MG" },
    { nome: "Loja Brasília - DF", lat: -15.7942, lng: -47.8822, endereco: "Brasília, DF" },
    { nome: "Loja Curitiba - PR", lat: -25.4284, lng: -49.2733, endereco: "Curitiba, PR" },
    { nome: "Loja Porto Alegre - RS", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS" },
    { nome: "Loja Salvador - BA", lat: -12.9714, lng: -38.5014, endereco: "Salvador, BA" },
    { nome: "Loja Recife - PE", lat: -8.0476, lng: -34.8770, endereco: "Recife, PE" },
    { nome: "CD São José dos Campos - SP", lat: -23.2237, lng: -45.9009, endereco: "São José dos Campos, SP" },
    { nome: "CD Sapucaia - RS", lat: -29.8394, lng: -51.1456, endereco: "Sapucaia do Sul, RS" },
  ];

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Criar o mapa
    const map = L.map(mapRef.current).setView([-14.235, -51.9253], 5);
    mapInstanceRef.current = map;

    // Adicionar tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Criar ícone customizado para lojas
    const lojaIcon = L.divIcon({
      html: `<div style="background: #ef4444; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
               <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
               </svg>
             </div>`,
      className: 'custom-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

    // Adicionar marcadores para cada loja
    lojas.forEach(loja => {
      const marker = L.marker([loja.lat, loja.lng], { icon: lojaIcon })
        .addTo(map)
        .bindPopup(`
          <div style="text-align: center; padding: 8px;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
              ${loja.nome}
            </h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              📍 ${loja.endereco}
            </p>
          </div>
        `);

      // Adicionar evento de hover
      marker.on('mouseover', function() {
        this.openPopup();
      });
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="animate-fade-in h-full flex flex-col">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <MapPin className="text-blue-600" size={32} />
          <h1 className="text-3xl font-bold">Mapa das Lojas</h1>
        </div>
        <p className="text-gray-500">Localização de todas as lojas e centros de distribuição do Grupo Oscar</p>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-full" ref={mapRef} />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Store className="text-red-500" size={20} />
            <h3 className="font-semibold">Lojas Físicas</h3>
          </div>
          <p className="text-sm text-gray-600">{lojas.filter(l => l.nome.includes('Loja')).length} unidades</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="text-blue-500" size={20} />
            <h3 className="font-semibold">Centros de Distribuição</h3>
          </div>
          <p className="text-sm text-gray-600">{lojas.filter(l => l.nome.includes('CD')).length} unidades</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="text-green-500" size={20} />
            <h3 className="font-semibold">Cobertura Nacional</h3>
          </div>
          <p className="text-sm text-gray-600">Presença em {new Set(lojas.map(l => l.endereco.split(' - ')[1])).size} estados</p>
        </div>
      </div>
    </div>
  );
};

export default MapaLojas;
