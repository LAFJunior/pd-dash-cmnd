import React, { useState } from 'react';
import MapaContextoReactFlow from '@/components/mapa-contexto/MapaContextoReactFlow';
import { Button } from '@/components/ui/button';
import { Edit, Save } from 'lucide-react';
import { toast } from 'sonner';
const MapaContexto = () => {
  const [editMode, setEditMode] = useState(false);
  const handleToggleEditMode = () => {
    setEditMode(!editMode);
    if (!editMode) {
      toast.info("Modo de edição ativado", {
        description: "Agora você pode mover, editar, conectar e adicionar blocos."
      });
    }
  };
  const handleSaveChanges = () => {
    setEditMode(false);
    toast.success("Alterações salvas com sucesso!", {
      description: "Seu mapa de contexto foi atualizado."
    });
  };
  return <div className="animate-fade-in">
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Mapa de Contexto</h1>
          <p className="text-gray-500">Visualização do Ecossistema Empresarial</p>
        </div>
        
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <MapaContextoReactFlow editMode={editMode} />
        <div className="flex justify-center items-center gap-8 mt-6 text-sm text-gray-600 flex-wrap">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#D4E6D4] rounded-sm mr-2"></div>
            <span>Área Comercial</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#E8D4D4] rounded-sm mr-2"></div>
            <span>Área Administrativa</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#D4D4E8] rounded-sm mr-2"></div>
            <span>Área Financeira</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-[#F0E8D4] rounded-sm mr-2"></div>
            <span>Área Operacional</span>
          </div>
        </div>
      </div>
    </div>;
};
export default MapaContexto;