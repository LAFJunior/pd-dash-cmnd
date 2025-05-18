
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { toast } from 'sonner';

interface DepartamentoProps {
  titulo: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  tipo: 'backoffice' | 'varejo' | 'parceiros';
  conexoes?: string[];
}

const MapaInterativo = () => {
  const navigate = useNavigate();
  const [infoVisible, setInfoVisible] = useState(false);
  const [hoveredDepartamento, setHoveredDepartamento] = useState<string | null>(null);
  
  const handleDepartamentoClick = (tipo: string, departamento: string) => {
    navigate(`/departamentos`, { state: { selectedDepartamento: departamento, tipo } });
  };

  const handleInfoClick = () => {
    setInfoVisible(!infoVisible);
  };

  const departamentosBackoffice: DepartamentoProps[] = [
    { titulo: "Compras", x: 50, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["Fornecedores", "Controladoria", "CD/Operações"] },
    { titulo: "Financeiro", x: 180, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["Contábil", "Controladoria", "Inst. Financeiras"] },
    { titulo: "Contábil", x: 310, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["Financeiro", "Fiscal", "Auditoria"] },
    { titulo: "Fiscal", x: 440, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["Contábil", "Controladoria"] },
    { titulo: "RH", x: 570, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["DP", "T.I"] },
    { titulo: "DP", x: 700, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["RH"] },
    { titulo: "Suplementos", x: 830, y: 220, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["CD/Operações", "Lojas"] },
    { titulo: "Marketing", x: 50, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["E-Commerce", "Lojas", "Clientes"] },
    { titulo: "T.I", x: 180, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["E-Commerce", "Infracommerce", "RH"] },
    { titulo: "Controladoria", x: 310, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["Financeiro", "Fiscal", "Compras", "Auditoria"] },
    { titulo: "Auditoria", x: 440, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["Controladoria", "Contábil"] },
    { titulo: "Festcard", x: 570, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["Credssytem", "Lojas", "Clientes"] },
    { titulo: "CD/Operações", x: 700, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["Lojas", "Compras", "Suplementos"] },
    { titulo: "Defeitos", x: 830, y: 280, width: 120, height: 40, color: "#4C72B1", tipo: "backoffice", conexoes: ["Lojas", "CD/Operações"] },
  ];

  const departamentosVarejo: DepartamentoProps[] = [
    { titulo: "Lojas", x: 310, y: 350, width: 120, height: 40, color: "#499B54", tipo: "varejo", conexoes: ["Clientes", "CD/Operações", "Suplementos", "Marketing", "Festcard"] },
    { titulo: "E-Commerce", x: 440, y: 350, width: 120, height: 40, color: "#499B54", tipo: "varejo", conexoes: ["Infracommerce", "Marketing", "T.I", "Clientes"] },
    { titulo: "Franquias", x: 570, y: 350, width: 120, height: 40, color: "#499B54", tipo: "varejo", conexoes: ["Lojas", "Marketing"] },
    { titulo: "Diadora Brasil", x: 310, y: 400, width: 120, height: 40, color: "#499B54", tipo: "varejo", conexoes: ["Lojas", "Fornecedores"] },
    { titulo: "SJEC", x: 440, y: 400, width: 120, height: 40, color: "#499B54", tipo: "varejo", conexoes: ["Estádio", "Marketing"] },
    { titulo: "Estádio", x: 570, y: 400, width: 120, height: 40, color: "#499B54", tipo: "varejo", conexoes: ["SJEC"] },
    { titulo: "Recicalce", x: 440, y: 450, width: 120, height: 40, color: "#499B54", tipo: "varejo", conexoes: ["Lojas", "CD/Operações"] },
  ];

  const parceirosComerciais: DepartamentoProps[] = [
    { titulo: "Clientes", x: 310, y: 520, width: 120, height: 40, color: "#E39D25", tipo: "parceiros", conexoes: ["Lojas", "E-Commerce", "Marketing", "Festcard"] },
    { titulo: "Fornecedores", x: 440, y: 520, width: 120, height: 40, color: "#E39D25", tipo: "parceiros", conexoes: ["Compras", "CD/Operações", "Diadora Brasil"] },
    { titulo: "Inst. Financeiras", x: 570, y: 520, width: 120, height: 40, color: "#E39D25", tipo: "parceiros", conexoes: ["Financeiro", "Credssytem"] },
    { titulo: "Credssytem", x: 375, y: 570, width: 120, height: 40, color: "#E39D25", tipo: "parceiros", conexoes: ["Festcard", "Inst. Financeiras"] },
    { titulo: "Infracommerce", x: 505, y: 570, width: 120, height: 40, color: "#E39D25", tipo: "parceiros", conexoes: ["E-Commerce", "T.I"] },
  ];

  const getAllDepartamentos = () => {
    return [...departamentosBackoffice, ...departamentosVarejo, ...parceirosComerciais];
  };

  const getDepartamentoPorTitulo = (titulo: string) => {
    return getAllDepartamentos().find(d => d.titulo === titulo);
  };

  const criarCaixaDepartamento = (departamento: DepartamentoProps, index: number) => {
    const isHovered = hoveredDepartamento === departamento.titulo;
    const relatedDepartments = isHovered ? departamento.conexoes || [] : [];

    return (
      <g 
        key={`${departamento.tipo}-${index}`}
        onClick={() => handleDepartamentoClick(departamento.tipo, departamento.titulo)}
        onMouseEnter={() => setHoveredDepartamento(departamento.titulo)}
        onMouseLeave={() => setHoveredDepartamento(null)}
        className="cursor-pointer transform transition-transform duration-200 hover:scale-105"
      >
        <rect
          x={departamento.x}
          y={departamento.y}
          width={departamento.width}
          height={departamento.height}
          rx={6}
          ry={6}
          fill={isHovered ? `${departamento.color}` : departamento.color}
          stroke={isHovered ? "#333" : "#555"}
          strokeWidth={isHovered ? 2 : 1}
          className={`${isHovered ? 'shadow-lg' : 'shadow-md'}`}
          filter={isHovered ? "url(#glow)" : undefined}
        />
        <text
          x={departamento.x + departamento.width / 2}
          y={departamento.y + departamento.height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="12"
          fontWeight={isHovered ? "bold" : "500"}
        >
          {departamento.titulo}
        </text>

        {/* Mostrar linhas de conexão quando um departamento é destacado */}
        {isHovered && departamento.conexoes && departamento.conexoes.map((conexao, idx) => {
          const depConexao = getDepartamentoPorTitulo(conexao);
          if (!depConexao) return null;

          // Calcular pontos de conexão
          const x1 = departamento.x + departamento.width / 2;
          const y1 = departamento.y + departamento.height / 2;
          const x2 = depConexao.x + depConexao.width / 2;
          const y2 = depConexao.y + depConexao.height / 2;

          return (
            <g key={`conexao-${departamento.titulo}-${conexao}-${idx}`}>
              <line 
                x1={x1} y1={y1} x2={x2} y2={y2} 
                stroke="#333" 
                strokeWidth={2} 
                strokeDasharray="5,5"
                opacity={0.7} 
                markerEnd="url(#arrowhead)" 
              />
              <circle cx={x2} cy={y2} r={5} fill={depConexao.color} />
            </g>
          );
        })}
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

  const showMapaHelp = () => {
    toast("Passe o mouse sobre um departamento para visualizar suas conexões!", {
      duration: 5000,
    });
  };

  return (
    <div className="w-full overflow-auto">
      <div className="flex justify-end mb-2">
        <button 
          onClick={showMapaHelp}
          className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 transition-colors"
        >
          <Info size={16} />
          <span>Como usar</span>
        </button>
        <button 
          onClick={handleInfoClick}
          className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 transition-colors ml-4"
        >
          {infoVisible ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          <span>{infoVisible ? "Ocultar informações" : "Saiba mais"}</span>
        </button>
      </div>
      
      {infoVisible && (
        <div className="bg-gray-50 p-4 rounded-lg mb-4 text-sm">
          <p className="font-medium mb-2">O que é um Mapa de Contexto?</p>
          <p className="mb-2">Um Mapa de Contexto é uma representação gráfica que mostra como as diferentes áreas de uma organização se relacionam entre si e com entidades externas.</p>
          <p className="mb-2">Ele ajuda a visualizar as interdependências entre departamentos, identificar gargalos e oportunidades de melhoria nos processos organizacionais.</p>
          <p><a href="https://professorannibal.com.br/2016/12/06/elaborando-o-mapa-de-contexto-de-sua-organizacao/" target="_blank" className="text-blue-600 hover:underline">Leia mais sobre Mapas de Contexto →</a></p>
        </div>
      )}

      <svg 
        width="1000" 
        height="650" 
        viewBox="0 0 1000 650" 
        className="mx-auto border border-gray-200 rounded-lg shadow-inner bg-white"
      >
        {/* Definições para efeitos visuais */}
        <defs>
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
          </marker>
        </defs>

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
