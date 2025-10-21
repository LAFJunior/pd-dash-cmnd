import React, { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { X, Plus, ZoomIn, ZoomOut, Maximize2, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

/**
 * Mapa Interativo 2D (zoom, pan e edição)
 * Versão focada em reproduzir fielmente o layout do diagrama do PDF.
 * - Áreas: BACKOFFICE (centro), VAREJO (direita), PARCEIROS EXTERNOS (laterais), FORNECEDORES (esquerda), CLIENTES (direita), INSTITUIÇÕES FINANCEIRAS (rodapé).
 * - Conexões curvas entre centros dos blocos.
 * - Edição com Shift (começar conexão), Ctrl (abrir editor), arrastar solto.
 */

interface DepartamentoProps {
  id: string;
  titulo: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  tipo:
    | "backoffice"
    | "varejo"
    | "parceiros"
    | "fornecedores"
    | "clientes"
    | "externo";
  conexoes?: string[];
  subItens?: string[];
}

interface ConexaoProps {
  id: string;
  source: string;
  target: string;
}

interface MapaInterativoProps {
  editMode: boolean;
}

const MapaInterativo: React.FC<MapaInterativoProps> = ({ editMode }) => {
  const navigate = useNavigate();
  const svgRef = useRef<SVGSVGElement>(null);

  const [hoveredDepartamento, setHoveredDepartamento] = useState<string | null>(
    null
  );
  const [departamentos, setDepartamentos] = useState<DepartamentoProps[]>([]);
  const [conexoes, setConexoes] = useState<ConexaoProps[]>([]);
  const [draggedDep, setDraggedDep] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingDepartamento, setEditingDepartamento] =
    useState<DepartamentoProps | null>(null);

  const [creatingConexao, setCreatingConexao] = useState<{
    source: string;
    inProgress: boolean;
  } | null>(null);

  const [tempConexao, setTempConexao] = useState<{
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  } | null>(null);

  // Zoom/Pan
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const MIN_ZOOM = 0.3;
  const MAX_ZOOM = 3;

  // ========= Inicialização dos dados (layout fiel ao diagrama) =========
  useEffect(() => {
    const corBack = "#EDEFF5";
    const corVarejo = "#EAF5EC";
    const corParceiros = "#FFF3E1";
    const corBordaBack = "#4C72B1";
    const corBordaVar = "#499B54";
    const corBordaParc = "#E39D25";

    // BACKOFFICE (centro grande)
    const backoffice: DepartamentoProps[] = [
      { id: "compras", titulo: "Compras", x: 450, y: 220, width: 130, height: 60, color: corBack, tipo: "backoffice", conexoes: ["contabil", "controladoria", "lojas", "fornecedores", "categorias"] },
      { id: "financeiro", titulo: "Financeiro", x: 620, y: 220, width: 130, height: 60, color: corBack, tipo: "backoffice", conexoes: ["contabil", "controladoria", "fiscal", "instituicoes-financeiras", "cred-system", "fest-card"] },
      { id: "contabil", titulo: "Contábil", x: 535, y: 320, width: 130, height: 60, color: corBack, tipo: "backoffice", conexoes: ["financeiro", "fiscal", "auditoria"] },
      { id: "auditoria", titulo: "Auditoria", x: 700, y: 320, width: 130, height: 60, color: corBack, tipo: "backoffice", conexoes: ["controladoria", "contabil", "fiscal"] },
      { id: "fiscal", titulo: "Fiscal", x: 865, y: 320, width: 130, height: 60, color: corBack, tipo: "backoffice", conexoes: ["contabil", "controladoria", "financeiro"] },
      { id: "controladoria", titulo: "Controladoria", x: 700, y: 220, width: 130, height: 60, color: corBack, tipo: "backoffice", conexoes: ["compras", "contabil", "fiscal", "financeiro"] },

      { id: "marketing", titulo: "MARKETING", x: 980, y: 180, width: 150, height: 70, color: corBack, tipo: "backoffice", conexoes: ["ecommerce", "lojas", "clientes", "categorias"] },
      { id: "sac", titulo: "SAC", x: 980, y: 270, width: 120, height: 60, color: corBack, tipo: "backoffice", conexoes: ["clientes", "ecommerce", "lojas"] },
      { id: "defeitos", titulo: "Defeitos", x: 980, y: 350, width: 120, height: 60, color: corBack, tipo: "backoffice", conexoes: ["lojas", "cd-operacoes", "clientes"] },

      // Blocos de TI (rodapé do backoffice)
      { id: "ti-operacoes", titulo: "T.I - Operações", x: 470, y: 520, width: 170, height: 80, color: corBack, tipo: "backoffice", subItens: ["Suporte", "Infraestrutura", "Sistemas", "Dados"], conexoes: ["lojas", "cd-operacoes", "ecommerce", "ti-desenvolvimento", "ti-projetos"] },
      { id: "ti-desenvolvimento", titulo: "T.I - Desenvolvimento", x: 680, y: 520, width: 190, height: 80, color: corBack, tipo: "backoffice", subItens: ["Fábrica de Software", "Qualidade de Software", "Arquitetura de Software", "Produção"], conexoes: ["ti-operacoes", "ecommerce"] },
      { id: "ti-projetos", titulo: "T.I - Projetos e Inovações", x: 900, y: 520, width: 220, height: 80, color: corBack, tipo: "backoffice", subItens: ["Portfólio de Projetos", "Gestão de Projetos", "Análise de Negócio", "Pesquisa e Inovação", "Performance de TI"], conexoes: ["ti-operacoes", "ti-desenvolvimento"] },

      { id: "fest-card", titulo: "Fest Card", x: 900, y: 430, width: 130, height: 60, color: corBack, tipo: "backoffice", conexoes: ["financeiro", "clientes", "lojas"] },
      { id: "cred-system", titulo: "Cred System", x: 750, y: 430, width: 130, height: 60, color: corBack, tipo: "backoffice", conexoes: ["financeiro", "ecommerce", "lojas"] },
      { id: "suplementos", titulo: "Suplementos", x: 600, y: 430, width: 120, height: 60, color: corBack, tipo: "backoffice", conexoes: ["cd-operacoes", "lojas"] },

      // RH / DP (topo centro-esquerda do backoffice)
      { id: "rh", titulo: "Recursos Humanos (RH)", x: 520, y: 120, width: 180, height: 70, color: corBack, tipo: "backoffice", subItens: ["Gestão de Pessoas", "Recrutamento & Seleção", "Treinamento"], conexoes: ["dp", "lojas"] },
      { id: "dp", titulo: "Departamento Pessoal (DP)", x: 730, y: 120, width: 200, height: 70, color: corBack, tipo: "backoffice", subItens: ["Admissão", "Benefícios", "Conformidade", "Folha"], conexoes: ["rh"] },

      // Backoffice laterais internos
      { id: "sjec", titulo: "São José Esporte Club", x: 300, y: 500, width: 170, height: 60, color: corBack, tipo: "backoffice" },
      { id: "estadio", titulo: "Estádio Martins Pereira", x: 300, y: 580, width: 190, height: 60, color: corBack, tipo: "backoffice" },
    ];

    // VAREJO (à direita, dentro da moldura VAREJO)
    const varejo: DepartamentoProps[] = [
      { id: "lojas", titulo: "Lojas", x: 1180, y: 260, width: 150, height: 70, color: corVarejo, tipo: "varejo", conexoes: ["clientes", "marketing", "compras", "cd-operacoes", "defeitos", "cred-system", "fest-card", "suplementos"] },
      { id: "metas", titulo: "Metas", x: 1180, y: 345, width: 150, height: 45, color: corVarejo, tipo: "varejo", conexoes: ["lojas"] },
      { id: "caixa", titulo: "Caixa", x: 1180, y: 395, width: 150, height: 45, color: corVarejo, tipo: "varejo", conexoes: ["lojas", "financeiro"] },
      { id: "estoque", titulo: "Estoque", x: 1180, y: 445, width: 150, height: 45, color: corVarejo, tipo: "varejo", conexoes: ["lojas", "cd-operacoes", "compras"] },
      { id: "vendas", titulo: "Vendas", x: 1180, y: 495, width: 150, height: 45, color: corVarejo, tipo: "varejo", conexoes: ["lojas", "marketing"] },

      { id: "ecommerce", titulo: "E-Commerce", x: 1180, y: 560, width: 150, height: 70, color: corVarejo, tipo: "varejo", conexoes: ["infracommerce", "marketing", "ti-operacoes", "ti-desenvolvimento", "clientes"] },
      { id: "recicalce", titulo: "Recicalce", x: 1180, y: 650, width: 150, height: 60, color: corVarejo, tipo: "varejo", conexoes: ["ecommerce", "lojas"] },

      // CDs (topo direita)
      { id: "cd-sapucaia", titulo: "CD SAPUCAIA", x: 1180, y: 180, width: 150, height: 60, color: corVarejo, tipo: "varejo", conexoes: ["cd-operacoes", "lojas"] },
      { id: "cd-infracommerce", titulo: "CD INFRACOMMERCE", x: 1180, y: 110, width: 180, height: 60, color: corVarejo, tipo: "varejo", conexoes: ["ecommerce", "cd-operacoes"] },

      // Operações do CD (centro inferior direito do backoffice)
      { id: "cd-operacoes", titulo: "Centro de Distribuição (CD)", x: 420, y: 420, width: 150, height: 70, color: corBack, tipo: "backoffice", conexoes: ["compras", "lojas", "ecommerce", "suplementos", "defeitos"] },
    ];

    // PARCEIROS / EXTERNOS
    const externos: DepartamentoProps[] = [
      // Coluna esquerda: FORNECEDORES (lista resumida)
      { id: "fornecedores", titulo: "FORNECEDORES", x: 30, y: 120, width: 140, height: 520, color: "#F7F7F7", tipo: "fornecedores", subItens: ["Adidas", "Grendene", "Havaianas", "Mizuno", "Nike", "Vizzano", "Olympikus", "Usaflex", "Beira-Rio", "Bibi", "Pegada", "Fila", "Oakley", "Coca-Cola", "Crocs", "Piccadilly", "Dakota"], conexoes: ["compras", "cd-operacoes", "lojas"] },

      // Coluna direita: CLIENTES (com “sinais”)
      { id: "clientes", titulo: "CLIENTES", x: 1390, y: 240, width: 140, height: 280, color: "#F7F7F7", tipo: "clientes", subItens: ["Insatisfações", "Volume de Compras", "Compra de Produtos", "Não-conformidades", "Contato c/ Vendedores"], conexoes: ["lojas", "ecommerce", "sac", "marketing", "fest-card"] },

      // Rodapé externo: Instituições Financeiras
      { id: "instituicoes-financeiras", titulo: "Instituições Financeiras", x: 590, y: 780, width: 320, height: 70, color: "#F7F7F7", tipo: "externo", conexoes: ["financeiro"] },

      // Parceiros Comerciais genéricos (categorias)
      { id: "categorias", titulo: "Categorias", x: 1040, y: 720, width: 150, height: 60, color: corParceiros, tipo: "parceiros", conexoes: ["compras", "marketing", "lojas"] },

      // Franquias / Diadora (lado esquerdo interno)
      { id: "franquias", titulo: "Franquias", x: 210, y: 170, width: 140, height: 70, color: corParceiros, tipo: "parceiros", conexoes: ["lojas", "compras"] },
      { id: "diadora-brasil", titulo: "Diadora Brasil", x: 210, y: 250, width: 140, height: 60, color: corParceiros, tipo: "parceiros", conexoes: ["compras"] },
    ];

    const todos = [...backoffice, ...varejo, ...externos];
    setDepartamentos(todos);

    // Conexões únicas a partir do campo conexoes
    const cx: ConexaoProps[] = [];
    todos.forEach((d) => {
      (d.conexoes || []).forEach((t) => {
        const id = `${d.id}-${t}`;
        const already =
          cx.some(
            (c) =>
              (c.source === d.id && c.target === t) ||
              (c.source === t && c.target === d.id)
          ) || d.id === t;
        if (!already) cx.push({ id, source: d.id, target: t });
      });
    });
    setConexoes(cx);
  }, []);

  // ========= Interações =========
  const handleDepartamentoClick = useCallback(
    (e: React.MouseEvent, departamento: DepartamentoProps) => {
      if (!editMode) {
        navigate(`/departamentos`, {
          state: { selectedDepartamento: departamento.titulo, tipo: departamento.tipo },
        });
        return;
      }
      if (creatingConexao?.inProgress) {
        const newConexao = {
          id: `${creatingConexao.source}-${departamento.id}`,
          source: creatingConexao.source,
          target: departamento.id,
        };
        const exists = conexoes.some(
          (c) =>
            (c.source === newConexao.source && c.target === newConexao.target) ||
            (c.source === newConexao.target && c.target === newConexao.source)
        );
        if (!exists && newConexao.source !== newConexao.target) {
          setConexoes((prev) => [...prev, newConexao]);
          setDepartamentos((deps) =>
            deps.map((dep) =>
              dep.id === creatingConexao.source
                ? {
                    ...dep,
                    conexoes: [...(dep.conexoes || []), departamento.id],
                  }
                : dep
            )
          );
        }
        setCreatingConexao(null);
        setTempConexao(null);
      } else if (e.shiftKey && editMode) {
        setCreatingConexao({ source: departamento.id, inProgress: true });
      } else if (editMode && e.ctrlKey) {
        setEditingDepartamento({ ...departamento });
        setDialogOpen(true);
      }
    },
    [editMode, navigate, creatingConexao, conexoes]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGElement>) => {
      if (editMode) {
        if (draggedDep !== null) {
          const svgRect = svgRef.current?.getBoundingClientRect();
          if (svgRect) {
            const x = e.clientX - svgRect.left - dragOffset.x;
            const y = e.clientY - svgRect.top - dragOffset.y;
            setDepartamentos((deps) =>
              deps.map((dep) => (dep.id === draggedDep ? { ...dep, x, y } : dep))
            );
          }
        }
        if (creatingConexao?.inProgress && tempConexao) {
          const svgRect = svgRef.current?.getBoundingClientRect();
          if (svgRect) {
            setTempConexao({
              ...tempConexao,
              x2: e.clientX - svgRect.left,
              y2: e.clientY - svgRect.top,
            });
          }
        }
      }
    },
    [editMode, draggedDep, dragOffset, creatingConexao, tempConexao]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, departamento: DepartamentoProps) => {
      if (editMode && !e.shiftKey && !e.ctrlKey) {
        e.stopPropagation();
        setDraggedDep(departamento.id);
        const svgRect = svgRef.current?.getBoundingClientRect();
        if (svgRect) {
          setDragOffset({
            x: e.clientX - svgRect.left - departamento.x,
            y: e.clientY - svgRect.top - departamento.y,
          });
        }
        if (creatingConexao?.inProgress) {
          const sourceDep = departamentos.find((d) => d.id === creatingConexao.source);
          if (sourceDep) {
            setTempConexao({
              x1: sourceDep.x + sourceDep.width / 2,
              y1: sourceDep.y + sourceDep.height / 2,
              x2: departamento.x + departamento.width / 2,
              y2: departamento.y + departamento.height / 2,
            });
          }
        }
      }
    },
    [editMode, creatingConexao, departamentos]
  );

  const handleMouseUp = useCallback(() => {
    setDraggedDep(null);
    setIsPanning(false);
  }, []);

  const handleRemoveConexao = useCallback(
    (conexaoId: string) => {
      if (editMode) {
        setConexoes((prev) => prev.filter((c) => c.id !== conexaoId));
      }
    },
    [editMode]
  );

  const handleAddDepartamento = useCallback(() => {
    if (editMode) {
      const newId = `novo-dep-${Date.now()}`;
      const novo: DepartamentoProps = {
        id: newId,
        titulo: "Novo Departamento",
        x: 520,
        y: 260,
        width: 130,
        height: 60,
        color: "#EEE",
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      };
      setDepartamentos((prev) => [...prev, novo]);
      setEditingDepartamento(novo);
      setDialogOpen(true);
    }
  }, [editMode]);

  const handleRemoveDepartamento = useCallback(
    (e: React.MouseEvent, departamentoId: string) => {
      e.stopPropagation();
      if (editMode) {
        setConexoes((prev) => prev.filter((c) => c.source !== departamentoId && c.target !== departamentoId));
        setDepartamentos((prev) => prev.filter((d) => d.id !== departamentoId));
      }
    },
    [editMode]
  );

  const handleSaveDepartamento = useCallback(() => {
    if (editingDepartamento) {
      setDepartamentos((deps) =>
        deps.map((dep) => (dep.id === editingDepartamento.id ? editingDepartamento : dep))
      );
      setDialogOpen(false);
      setEditingDepartamento(null);
    }
  }, [editingDepartamento]);

  const getDepartamentoPorId = useCallback(
    (id: string) => departamentos.find((d) => d.id === id),
    [departamentos]
  );

  // ========= Desenho =========
  const tipoStroke = (tipo: DepartamentoProps["tipo"]) => {
    switch (tipo) {
      case "backoffice":
        return "#4C72B1";
      case "varejo":
        return "#499B54";
      case "parceiros":
        return "#E39D25";
      case "fornecedores":
        return "#888";
      case "clientes":
        return "#888";
      case "externo":
        return "#666";
      default:
        return "#A0A0A0";
    }
  };

  const criarCaixaDepartamento = useCallback(
    (dep: DepartamentoProps, index: number) => {
      const isHovered = hoveredDepartamento === dep.id;
      const isBeingDragged = draggedDep === dep.id;

      return (
        <g
          key={`${dep.id}-${index}`}
          onClick={(e) => handleDepartamentoClick(e, dep)}
          onMouseEnter={() => setHoveredDepartamento(dep.id)}
          onMouseLeave={() => setHoveredDepartamento(null)}
          onMouseDown={(e) => handleMouseDown(e, dep)}
          className={`cursor-pointer ${isBeingDragged ? "opacity-60" : ""}`}
        >
          <rect
            x={dep.x}
            y={dep.y}
            width={dep.width}
            height={dep.height}
            fill={isHovered ? "#D9D9D9" : dep.color}
            stroke={tipoStroke(dep.tipo)}
            strokeWidth={1.5}
            rx={4}
            ry={4}
          />
          <rect
            x={dep.x}
            y={dep.y}
            width={dep.width}
            height={24}
            fill={tipoStroke(dep.tipo)}
            rx={4}
            ry={4}
          />
          <text
            x={dep.x + dep.width / 2}
            y={dep.y + 14}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize={11}
            fontWeight="bold"
          >
            {dep.titulo}
          </text>
          {/* Subitens (lista interna) */}
          {dep.subItens && dep.subItens.length > 0 && (
            <>
              {dep.subItens.slice(0, Math.min(dep.subItens.length, 18)).map((item, idx) => (
                <text
                  key={`si-${dep.id}-${idx}`}
                  x={dep.x + 8}
                  y={dep.y + 28 + idx * 12}
                  fill="#333"
                  fontSize={9}
                >
                  • {item}
                </text>
              ))}
            </>
          )}
          {/* Botão remover */}
          {editMode && (
            <g onClick={(e) => handleRemoveDepartamento(e, dep.id)} className="cursor-pointer">
              <circle cx={dep.x + dep.width - 10} cy={dep.y + 10} r={8} fill="red" />
              <text
                x={dep.x + dep.width - 10}
                y={dep.y + 12}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize={12}
                fontWeight="bold"
              >
                ×
              </text>
            </g>
          )}
        </g>
      );
    },
    [editMode, hoveredDepartamento, draggedDep, handleDepartamentoClick, handleMouseDown, handleRemoveDepartamento]
  );

  const criarConexoes = useCallback(() => {
    return (
      <g>
        {conexoes.map((c) => {
          const s = getDepartamentoPorId(c.source);
          const t = getDepartamentoPorId(c.target);
          if (!s || !t) return null;

          const x1 = s.x + s.width / 2;
          const y1 = s.y + s.height / 2;
          const x2 = t.x + t.width / 2;
          const y2 = t.y + t.height / 2;

          const dx = Math.abs(x2 - x1) * 0.5 + 40;
          const controlPoint1X = x1 + (x2 > x1 ? dx : -dx);
          const controlPoint1Y = y1;
          const controlPoint2X = x2 - (x2 > x1 ? dx : -dx);
          const controlPoint2Y = y2;

          const d = `M ${x1} ${y1} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${x2} ${y2}`;

          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;

          return (
            <g key={c.id}>
              <path d={d} fill="none" stroke="#666" strokeWidth={1} opacity={0.8} />
              {editMode && (
                <g onClick={() => handleRemoveConexao(c.id)} className="cursor-pointer">
                  <circle cx={midX} cy={midY} r={8} fill="white" stroke="#333" strokeWidth={1} />
                  <text
                    x={midX}
                    y={midY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#333"
                    fontSize={12}
                    fontWeight="bold"
                  >
                    ×
                  </text>
                </g>
              )}
            </g>
          );
        })}
        {tempConexao && (
          <path
            d={`M ${tempConexao.x1} ${tempConexao.y1} C ${tempConexao.x1 + 60} ${tempConexao.y1}, ${
              tempConexao.x2 - 60
            } ${tempConexao.y2}, ${tempConexao.x2} ${tempConexao.y2}`}
            fill="none"
            stroke="#333"
            strokeWidth={1}
            strokeDasharray="5,5"
          />
        )}
      </g>
    );
  }, [conexoes, tempConexao, editMode, getDepartamentoPorId, handleRemoveConexao]);

  // ========= Zoom/Pan =========
  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY * -0.001;
      const newZoom = Math.min(Math.max(zoom + delta, MIN_ZOOM), MAX_ZOOM);
      setZoom(newZoom);
    },
    [zoom]
  );

  const handlePanStart = useCallback(
    (e: React.MouseEvent) => {
      if (!editMode || (!e.shiftKey && !e.ctrlKey && draggedDep === null)) {
        setIsPanning(true);
        setPanStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
      }
    },
    [editMode, pan, draggedDep]
  );

  const handlePanMove = useCallback(
    (e: React.MouseEvent) => {
      if (isPanning) {
        setPan({ x: e.clientX - panStart.x, y: e.clientY - panStart.y });
      }
    },
    [isPanning, panStart]
  );

  const handleZoomIn = useCallback(() => setZoom((z) => Math.min(z + 0.2, MAX_ZOOM)), []);
  const handleZoomOut = useCallback(() => setZoom((z) => Math.max(z - 0.2, MIN_ZOOM)), []);
  const handleResetView = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);
  const handleFitToScreen = useCallback(() => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const svgWidth = 1550;
      const svgHeight = 880;
      const scaleX = container.width / svgWidth;
      const scaleY = container.height / svgHeight;
      const newZoom = Math.min(scaleX, scaleY) * 0.95;
      setZoom(Math.min(Math.max(newZoom, MIN_ZOOM), MAX_ZOOM));
      setPan({ x: 0, y: 0 });
    }
  }, []);

  // ========= Áreas/molduras =========
  const criarAreasGrupo = useCallback(() => {
    const backOfficeArea = { x: 200, y: 80, width: 930, height: 620 };
    const varejoArea = { x: 1150, y: 90, width: 230, height: 640 };
    const fornecedoresArea = { x: 20, y: 70, width: 170, height: 660 };
    const clientesArea = { x: 1360, y: 200, width: 170, height: 360 };

    return (
      <g>
        {/* Molduras */}
        <rect x={backOfficeArea.x} y={backOfficeArea.y} width={backOfficeArea.width} height={backOfficeArea.height} stroke="#4C72B1" strokeWidth={2} fill="none" />
        <text x={backOfficeArea.x + backOfficeArea.width - 110} y={backOfficeArea.y + 16} fill="#4C72B1" fontSize={12} fontWeight="bold">
          BACKOFFICE
        </text>

        <rect x={varejoArea.x} y={varejoArea.y} width={varejoArea.width} height={varejoArea.height} stroke="#499B54" strokeWidth={2} fill="none" />
        <text x={varejoArea.x + varejoArea.width - 60} y={varejoArea.y + 16} fill="#499B54" fontSize={12} fontWeight="bold">
          VAREJO
        </text>

        <rect x={fornecedoresArea.x} y={fornecedoresArea.y} width={fornecedoresArea.width} height={fornecedoresArea.height} stroke="#888" strokeWidth={2} fill="none" />
        <text x={fornecedoresArea.x + 12} y={fornecedoresArea.y + 16} fill="#555" fontSize={12} fontWeight="bold">
          FORNECEDORES
        </text>

        <rect x={clientesArea.x} y={clientesArea.y} width={clientesArea.width} height={clientesArea.height} stroke="#888" strokeWidth={2} fill="none" />
        <text x={clientesArea.x + 40} y={clientesArea.y - 10} fill="#555" fontSize={12} fontWeight="bold">
          CLIENTES
        </text>

        {/* Rótulo rodapé externo */}
        <text x={750} y={860} fill="#555" fontSize={12} fontWeight="bold" textAnchor="middle">
          PARCEIROS EXTERNOS
        </text>
      </g>
    );
  }, []);

  // ========= Render =========
  return (
    <div className="relative w-full h-[820px]" ref={containerRef}>
      {/* Controles */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 bg-white p-2 rounded-lg shadow-md border">
        <Button variant="outline" size="icon" onClick={handleZoomIn} title="Aumentar Zoom" className="h-8 w-8">
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleZoomOut} title="Diminuir Zoom" className="h-8 w-8">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleResetView} title="Resetar Visualização" className="h-8 w-8">
          <RotateCcw className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleFitToScreen} title="Ajustar à Tela" className="h-8 w-8">
          <Maximize2 className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleAddDepartamento} title="Adicionar Bloco" className="h-8 w-8">
          <Plus className="h-4 w-4" />
        </Button>
        <div className="text-xs text-center mt-1 px-1 py-1 bg-muted rounded">{Math.round(zoom * 100)}%</div>
      </div>

      {/* Área do SVG */}
      <div
        className="w-full h-full overflow-hidden border border-gray-200 rounded-lg shadow-inner bg-white"
        onWheel={handleWheel}
        onMouseDown={handlePanStart}
        onMouseMove={(e) => {
          handlePanMove(e);
          handleMouseMove(e as any);
        }}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isPanning ? "grabbing" : "grab" }}
      >
        <svg
          ref={svgRef}
          width={1550}
          height={880}
          viewBox="0 0 1550 880"
          className="mx-auto"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "center center",
            transition: isPanning ? "none" : "transform 0.08s ease-out",
          }}
        >
          {/* Definições */}
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
            </marker>
          </defs>

          {/* Molduras das áreas */}
          {criarAreasGrupo()}

          {/* Conexões */}
          {criarConexoes()}

          {/* Blocos */}
          {departamentos.map((d, i) => criarCaixaDepartamento(d, i))}
        </svg>
      </div>

      {/* Dialog edição */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Departamento</DialogTitle>
          </DialogHeader>

          {editingDepartamento && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="titulo" className="text-right">
                  Título:
                </label>
                <Input
                  id="titulo"
                  className="col-span-3"
                  value={editingDepartamento.titulo}
                  onChange={(e) =>
                    setEditingDepartamento({
                      ...editingDepartamento,
                      titulo: e.target.value,
                    })
                  }
                />
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tipo" className="text-right">
                  Tipo:
                </label>
                <select
                  id="tipo"
                  className="col-span-3 border rounded p-2"
                  value={editingDepartamento.tipo}
                  onChange={(e) =>
                    setEditingDepartamento({
                      ...editingDepartamento,
                      tipo: e.target.value as DepartamentoProps["tipo"],
                    })
                  }
                >
                  <option value="backoffice">BackOffice</option>
                  <option value="varejo">Varejo</option>
                  <option value="parceiros">Parceiros Comerciais</option>
                  <option value="fornecedores">Fornecedores</option>
                  <option value="clientes">Clientes</option>
                  <option value="externo">Externo</option>
                </select>
              </div>

              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right">Sub-itens:</label>
                <div className="col-span-3 border rounded p-2 max-h-48 overflow-y-auto">
                  {editingDepartamento.subItens?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-2">
                      <Input
                        value={item}
                        onChange={(e) => {
                          const novo = [...(editingDepartamento.subItens || [])];
                          novo[idx] = e.target.value;
                          setEditingDepartamento({ ...editingDepartamento, subItens: novo });
                        }}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const novo = [...(editingDepartamento.subItens || [])];
                          novo.splice(idx, 1);
                          setEditingDepartamento({ ...editingDepartamento, subItens: novo });
                        }}
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-2"
                    onClick={() => {
                      const novo = [...(editingDepartamento.subItens || []), "Novo Item"];
                      setEditingDepartamento({ ...editingDepartamento, subItens: novo });
                    }}
                  >
                    <Plus size={16} className="mr-1" /> Adicionar Sub-item
                  </Button>
                </div>
              </div>
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSaveDepartamento}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MapaInterativo;
