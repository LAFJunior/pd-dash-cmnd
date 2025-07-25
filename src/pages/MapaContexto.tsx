import React, { useState } from 'react';
import MapaInterativo from '@/components/mapa-contexto/MapaInterativo';
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
        <MapaInterativo editMode={editMode} />
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
            
          </div>
        </div>
      </div>
    </div>;
};
export default MapaContexto;