
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DepartamentoProps {
  titulo: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  tipo: 'backoffice' | 'varejo' | 'parceiros';
}

const MapaInterativo = () => {
  const navigate = useNavigate();
  
  const handleDepartamentoClick = (tipo: string, departamento: string) => {
    navigate(`/departamentos`, { state: { selectedDepartamento: departamento, tipo } });
  };

  const departamentosBackoffice: DepartamentoProps[] = [
    { titulo: "Compras", x: 50, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "Financeiro", x: 180, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "Contábil", x: 310, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "Fiscal", x: 440, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "RH", x: 570, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "DP", x: 700, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "Suplementos", x: 830, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "Marketing", x: 50, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "T.I", x: 180, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "Controladoria", x: 310, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "Auditoria", x: 440, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "Festcard", x: 570, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "CD/Operações", x: 700, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
    { titulo: "Defeitos", x: 830, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice" },
  ];

  const departamentosVarejo: DepartamentoProps[] = [
    { titulo: "Lojas", x: 310, y: 350, width: 120, height: 40, color: "#499B54", tipo: "varejo" },
    { titulo: "E-Commerce", x: 440, y: 350, width: 120, height: 40, color: "#499B54", tipo: "varejo" },
    { titulo: "Franquias", x: 570, y: 350, width: 120, height: 40, color: "#499B54", tipo: "varejo" },
    { titulo: "Diadora Brasil", x: 310, y: 400, width: 120, height: 40, color: "#499B54", tipo: "varejo" },
    { titulo: "SJEC", x: 440, y: 400, width: 120, height: 40, color: "#499B54", tipo: "varejo" },
    { titulo: "Estádio", x: 570, y: 400, width: 120, height: 40, color: "#499B54", tipo: "varejo" },
    { titulo: "Recicalce", x: 440, y: 450, width: 120, height: 40, color: "#499B54", tipo: "varejo" },
  ];

  const parceirosComerciais: DepartamentoProps[] = [
    { titulo: "Clientes", x: 310, y: 520, width: 120, height: 40, color: "#E39D25", tipo: "parceiros" },
    { titulo: "Fornecedores", x: 440, y: 520, width: 120, height: 40, color: "#E39D25", tipo: "parceiros" },
    { titulo: "Inst. Financeiras", x: 570, y: 520, width: 120, height: 40, color: "#E39D25", tipo: "parceiros" },
    { titulo: "Credssytem", x: 375, y: 570, width: 120, height: 40, color: "#E39D25", tipo: "parceiros" },
    { titulo: "Infracommerce", x: 505, y: 570, width: 120, height: 40, color: "#E39D25", tipo: "parceiros" },
  ];

  const criarCaixaDepartamento = (departamento: DepartamentoProps, index: number) => {
    return (
      <g 
        key={`${departamento.tipo}-${index}`}
        onClick={() => handleDepartamentoClick(departamento.tipo, departamento.titulo)}
        className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
      >
        <rect
          x={departamento.x}
          y={departamento.y}
          width={departamento.width}
          height={departamento.height}
          rx={6}
          ry={6}
          fill={departamento.color}
          stroke="#333"
          strokeWidth={1}
          className="shadow-md"
        />
        <text
          x={departamento.x + departamento.width / 2}
          y={departamento.y + departamento.height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="12"
          fontWeight="500"
        >
          {departamento.titulo}
        </text>
      </g>
    );
  };

  // Criar conectores entre grupos de departamentos
  const criarConectores = () => {
    return (
      <g>
        {/* Linha vertical principal */}
        <line x1="450" y1="120" x2="450" y2="190" stroke="#333" strokeWidth="2" />
        
        {/* Linha horizontal backoffice */}
        <line x1="450" y1="190" x2="450" y2="190" stroke="#333" strokeWidth="2" />
        <line x1="90" y1="190" x2="900" y2="190" stroke="#4C72B1" strokeWidth="2" />
        
        {/* Linha vertical para varejo */}
        <line x1="450" y1="300" x2="450" y2="330" stroke="#333" strokeWidth="2" />
        <line x1="300" y1="330" x2="600" y2="330" stroke="#499B54" strokeWidth="2" />
        
        {/* Linha vertical para parceiros */}
        <line x1="450" y1="470" x2="450" y2="500" stroke="#333" strokeWidth="2" />
        <line x1="300" y1="500" x2="600" y2="500" stroke="#E39D25" strokeWidth="2" />
        
        {/* Conectores verticais para backoffice */}
        {[110, 240, 370, 500, 630, 760, 890].map((x, i) => (
          <line key={`backoffice-v-${i}`} x1={x} y1="190" x2={x} y2="220" stroke="#4C72B1" strokeWidth="2" />
        ))}
        
        {/* Conectores verticais para varejo */}
        {[370, 500, 630].map((x, i) => (
          <line key={`varejo-v-${i}`} x1={x} y1="330" x2={x} y2="350" stroke="#499B54" strokeWidth="2" />
        ))}
        
        {/* Conectores verticais para parceiros */}
        {[370, 500, 630].map((x, i) => (
          <line key={`parceiro-v-${i}`} x1={x} y1="500" x2={x} y2="520" stroke="#E39D25" strokeWidth="2" />
        ))}
      </g>
    );
  };

  return (
    <div className="w-full overflow-auto">
      <svg 
        width="1000" 
        height="650" 
        viewBox="0 0 1000 650" 
        className="mx-auto border border-gray-200 rounded-lg shadow-inner bg-white"
      >
        {/* Cabeçalho do Mapa */}
        <rect x="350" y="60" width="200" height="60" rx="8" ry="8" fill="#333" />
        <text x="450" y="90" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="18" fontWeight="bold">
          Grupo Oscar
        </text>
        <text x="450" y="110" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="12">
          Mapa de Contexto
        </text>
        
        {/* Conectores */}
        {criarConectores()}
        
        {/* Cabeçalhos de Seções */}
        <text x="450" y="170" textAnchor="middle" dominantBaseline="middle" fill="#4C72B1" fontSize="16" fontWeight="bold">
          BackOffice
        </text>
        
        <text x="450" y="320" textAnchor="middle" dominantBaseline="middle" fill="#499B54" fontSize="16" fontWeight="bold">
          Varejo
        </text>
        
        <text x="450" y="490" textAnchor="middle" dominantBaseline="middle" fill="#E39D25" fontSize="16" fontWeight="bold">
          Parceiros Comerciais
        </text>
        
        {/* Departamentos */}
        {departamentosBackoffice.map((departamento, index) => criarCaixaDepartamento(departamento, index))}
        {departamentosVarejo.map((departamento, index) => criarCaixaDepartamento(departamento, index))}
        {parceirosComerciais.map((departamento, index) => criarCaixaDepartamento(departamento, index))}
      </svg>
    </div>
  );
};

export default MapaInterativo;
