
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface DepartamentoProps {
  titulo: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  tipo: 'backoffice' | 'varejo' | 'parceiros';
  conexoes?: string[];
  subItens?: string[];
}

const MapaInterativo = () => {
  const navigate = useNavigate();
  const [hoveredDepartamento, setHoveredDepartamento] = useState<string | null>(null);
  
  const handleDepartamentoClick = (tipo: string, departamento: string) => {
    navigate(`/departamentos`, { state: { selectedDepartamento: departamento, tipo } });
  };

  // Dados dos departamentos do BackOffice
  const departamentosBackoffice: DepartamentoProps[] = [
    { 
      titulo: "Compras", 
      x: 420, 
      y: 230, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Fornecedores", "Controladoria", "CD/Operações", "Lojas"],
      subItens: ["Análise de Compras", "Solicitação de Compras", "Controle de Estoque"]
    },
    { 
      titulo: "Financeiro", 
      x: 600, 
      y: 230, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Contábil", "Controladoria", "Inst. Financeiras"],
      subItens: ["Contas a Pagar", "Contas a Receber", "Fluxo de Caixa"]
    },
    { 
      titulo: "Principal", 
      x: 240, 
      y: 70, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Diretoria Geral"],
      subItens: []
    },
    { 
      titulo: "Auditoria", 
      x: 420, 
      y: 70, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Controladoria", "Contábil"],
      subItens: ["Controles Internos", "Auditorias", "Compliance"]
    },
    { 
      titulo: "Contábil", 
      x: 600, 
      y: 70, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Financeiro", "Fiscal", "Auditoria"],
      subItens: ["Fechamento Contábil", "Balancetes", "Tributos"]
    },
    { 
      titulo: "T.I", 
      x: 420, 
      y: 390, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["E-Commerce", "Infracommerce", "RH"],
      subItens: ["Sistemas", "Infraestrutura", "Suporte"]
    },
    { 
      titulo: "T.I / Operações", 
      x: 600, 
      y: 390, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Lojas", "CD/Operações"],
      subItens: ["Sistemas", "Logística", "Operacional"]
    },
    { 
      titulo: "Recursos Humanos", 
      x: 780, 
      y: 70, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["DP", "T.I"],
      subItens: ["Recrutamento", "Treinamento", "Benefícios"]
    },
    { 
      titulo: "Fiscal", 
      x: 780, 
      y: 230, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Contábil", "Controladoria"],
      subItens: ["Impostos", "Notas Fiscais", "Obrigações"]
    },
    { 
      titulo: "Marketing", 
      x: 960, 
      y: 230, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["E-Commerce", "Lojas", "Clientes"],
      subItens: ["Campanhas", "Mídia", "Marketing Digital"]
    },
    { 
      titulo: "Departamento Pessoal", 
      x: 960, 
      y: 70, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["RH"],
      subItens: ["Folha de Pagamento", "Benefícios", "Contratos"]
    },
    { 
      titulo: "Controladoria", 
      x: 780, 
      y: 390, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Financeiro", "Fiscal", "Compras", "Auditoria"],
      subItens: ["Orçamentos", "Análises", "Relatórios", "Indicadores"]
    },
    { 
      titulo: "CD/Loja (Diferenciação)", 
      x: 960, 
      y: 390, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Lojas", "CD/Operações"],
      subItens: ["Processos CD", "Processos Loja", "Diferenciação"]
    },
    { 
      titulo: "Diretoria Geral", 
      x: 240, 
      y: 140, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["Principal"],
      subItens: []
    },
    {
      titulo: "São José Esporte Clube",
      x: 240, 
      y: 530, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["SJEC", "Estádio"],
      subItens: []
    },
    {
      titulo: "T.I. Processo e Recursos",
      x: 420, 
      y: 550, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["T.I", "Lojas"],
      subItens: ["Sistemas", "Processos", "Recursos"]
    },
    {
      titulo: "Pessoal",
      x: 600, 
      y: 550, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["RH", "DP"],
      subItens: ["Folha", "Contratações", "Demissões"] 
    },
    {
      titulo: "Suprimentos",
      x: 780, 
      y: 550, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["CD/Operações", "Lojas"],
      subItens: ["Estoque", "Distribuição", "Logística"]
    },
    {
      titulo: "Defeitos",
      x: 960, 
      y: 550, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["Lojas", "CD/Operações"],
      subItens: ["Análise", "Tratativa", "Devolução"]
    },
  ];

  // Dados dos departamentos de Varejo
  const departamentosVarejo: DepartamentoProps[] = [
    { 
      titulo: "Lojas", 
      x: 1140, 
      y: 230, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "varejo", 
      conexoes: ["Clientes", "CD/Operações", "Suprimentos", "Marketing"]
    },
    { 
      titulo: "E-Commerce", 
      x: 1140, 
      y: 450, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "varejo", 
      conexoes: ["Infracommerce", "Marketing", "T.I", "Clientes"]
    },
    { 
      titulo: "Vendas",
      x: 240, 
      y: 240, 
      width: 120, 
      height: 140, 
      color: "#A0A0A0", 
      tipo: "varejo",
      conexoes: ["Lojas", "Marketing", "Compras"]
    },
    { 
      titulo: "Serviços", 
      x: 1140, 
      y: 550, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "varejo", 
      conexoes: ["Lojas", "Clientes"]
    },
  ];

  // Dados dos parceiros comerciais
  const parceirosComerciais: DepartamentoProps[] = [
    { 
      titulo: "Clientes", 
      x: 1320, 
      y: 260, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "parceiros", 
      conexoes: ["Lojas", "E-Commerce", "Marketing"]
    },
    { 
      titulo: "Fornecedores", 
      x: 60, 
      y: 260, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "parceiros", 
      conexoes: ["Compras", "CD/Operações"]
    },
    { 
      titulo: "Inst. Financeiras", 
      x: 650, 
      y: 770, 
      width: 180, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "parceiros", 
      conexoes: ["Financeiro"]
    },
    { 
      titulo: "Categorias", 
      x: 960, 
      y: 750, 
      width: 120, 
      height: 50, 
      color: "#A0A0A0", 
      tipo: "parceiros", 
      conexoes: ["Compras", "Marketing", "Lojas"]
    },
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
        className="cursor-pointer"
      >
        {/* Caixa principal do departamento */}
        <rect
          x={departamento.x}
          y={departamento.y}
          width={departamento.width}
          height={departamento.height}
          fill={isHovered ? "#8C8C8C" : departamento.color}
          stroke="#333"
          strokeWidth="1"
        />
        
        {/* Título do departamento */}
        <rect
          x={departamento.x}
          y={departamento.y}
          width={departamento.width}
          height="20"
          fill="#333"
        />
        <text
          x={departamento.x + departamento.width / 2}
          y={departamento.y + 12}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          fontSize="10"
          fontWeight="bold"
        >
          {departamento.titulo}
        </text>
        
        {/* Nome do departamento maior no centro */}
        <text
          x={departamento.x + departamento.width / 2}
          y={departamento.y + (departamento.height / 2) + 5}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#333"
          fontSize={departamento.titulo === "Vendas" ? "12" : "14"}
          fontWeight="bold"
        >
          {departamento.titulo}
        </text>

        {/* Subitens para departamentos que os têm */}
        {departamento.subItens && departamento.subItens.length > 0 && (
          <>
            {departamento.subItens.map((item, idx) => (
              <rect
                key={`subitem-${idx}`}
                x={departamento.x}
                y={departamento.y + departamento.height + (idx * 15)}
                width={departamento.width}
                height="15"
                fill="#CCC"
                stroke="#333"
                strokeWidth="0.5"
              />
            ))}
            
            {departamento.subItens.map((item, idx) => (
              <text
                key={`subitem-text-${idx}`}
                x={departamento.x + departamento.width / 2}
                y={departamento.y + departamento.height + (idx * 15) + 7.5}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#333"
                fontSize="8"
              >
                {item}
              </text>
            ))}
          </>
        )}

        {/* Mostrar linhas de conexão quando um departamento é destacado */}
        {isHovered && departamento.conexoes && departamento.conexoes.map((conexao, idx) => {
          const depConexao = getDepartamentoPorTitulo(conexao);
          if (!depConexao) return null;

          // Calcular pontos de conexão
          const x1 = departamento.x + departamento.width / 2;
          const y1 = departamento.y + departamento.height / 2;
          const x2 = depConexao.x + depConexao.width / 2;
          const y2 = depConexao.y + depConexao.height / 2;

          // Calculando pontos de controle para curvas
          const dx = Math.abs(x2 - x1) * 0.5;
          const dy = Math.abs(y2 - y1) * 0.5;
          const controlPoint1X = x1 + (x2 > x1 ? dx : -dx);
          const controlPoint1Y = y1;
          const controlPoint2X = x2 - (x2 > x1 ? dx : -dx);
          const controlPoint2Y = y2;

          // Construir o caminho curvo
          const path = `M ${x1} ${y1} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${x2} ${y2}`;

          return (
            <g key={`conexao-${departamento.titulo}-${conexao}-${idx}`}>
              <path 
                d={path} 
                fill="none" 
                stroke="#333" 
                strokeWidth="1" 
                opacity="0.7" 
              />
            </g>
          );
        })}
      </g>
    );
  };

  const criarAreasGrupo = () => {
    // BackOffice área
    const backOfficeArea = {
      x: 180,
      y: 30,
      width: 940,
      height: 600,
    };

    // Varejo área
    const varejoArea = {
      x: 1090,
      y: 180,
      width: 200,
      height: 450,
    };

    // Parceiros comerciais indicações
    const parceirosTopLeft = {
      x: 30, 
      y: 30,
      width: 130,
      height: 500
    };

    const parceirosTopRight = {
      x: 1310, 
      y: 30,
      width: 130,
      height: 500
    };

    return (
      <g>
        {/* BackOffice */}
        <rect 
          x={backOfficeArea.x} 
          y={backOfficeArea.y} 
          width={backOfficeArea.width} 
          height={backOfficeArea.height} 
          stroke="#4C72B1" 
          strokeWidth="2" 
          fill="none" 
        />
        <text 
          x={backOfficeArea.x + backOfficeArea.width - 80} 
          y={backOfficeArea.y + 15} 
          fill="#4C72B1" 
          fontSize="12" 
          fontWeight="bold"
        >
          BACKOFFICE
        </text>
        
        {/* Varejo */}
        <rect 
          x={varejoArea.x} 
          y={varejoArea.y} 
          width={varejoArea.width} 
          height={varejoArea.height} 
          stroke="#499B54" 
          strokeWidth="2" 
          fill="none" 
        />
        <text 
          x={varejoArea.x + varejoArea.width - 60} 
          y={varejoArea.y + 15} 
          fill="#499B54" 
          fontSize="12" 
          fontWeight="bold"
        >
          VAREJO
        </text>
        
        {/* Parceiros Comerciais (Texto) */}
        <text 
          x={parceirosTopRight.x + parceirosTopRight.width - 120} 
          y={parceirosTopRight.y + 15} 
          fill="#E39D25" 
          fontSize="12" 
          fontWeight="bold"
        >
          PARCEIROS COMERCIAIS
        </text>
      </g>
    );
  };

  return (
    <div className="w-full overflow-auto">      
      <svg 
        width="1500" 
        height="850" 
        viewBox="0 0 1500 850" 
        className="mx-auto border border-gray-200 rounded-lg shadow-inner bg-white"
      >
        {/* Definições para efeitos visuais */}
        <defs>
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
        
        {/* Áreas dos grupos */}
        {criarAreasGrupo()}
        
        {/* Departamentos */}
        {departamentosBackoffice.map((departamento, index) => criarCaixaDepartamento(departamento, index))}
        {departamentosVarejo.map((departamento, index) => criarCaixaDepartamento(departamento, index))}
        {parceirosComerciais.map((departamento, index) => criarCaixaDepartamento(departamento, index))}
      </svg>
    </div>
  );
};

export default MapaInterativo;
