import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
interface DepartamentoProps {
  id: string;
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
interface ConexaoProps {
  id: string;
  source: string;
  target: string;
}
interface MapaInterativoProps {
  editMode: boolean;
}
const MapaInterativo: React.FC<MapaInterativoProps> = ({
  editMode
}) => {
  const navigate = useNavigate();
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredDepartamento, setHoveredDepartamento] = useState<string | null>(null);
  const [departamentos, setDepartamentos] = useState<DepartamentoProps[]>([]);
  const [conexoes, setConexoes] = useState<ConexaoProps[]>([]);
  const [draggedDep, setDraggedDep] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({
    x: 0,
    y: 0
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingDepartamento, setEditingDepartamento] = useState<DepartamentoProps | null>(null);
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

  // Inicialização dos dados
  useEffect(() => {
    // Dados dos departamentos do BackOffice
    const departamentosBackoffice: DepartamentoProps[] = [{
      id: "franquias",
      titulo: "Franquias",
      x: 240,
      y: 50,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["diadora-brasil", "lojas"],
      subItens: []
    }, {
      id: "diadora-brasil",
      titulo: "Diadora Brasil",
      x: 240,
      y: 140,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["franquias", "lojas", "compras"],
      subItens: []
    }, {
      id: "auditorias",
      titulo: "Auditorias",
      x: 420,
      y: 50,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["contabil", "controladoria"],
      subItens: []
    }, {
      id: "contabil",
      titulo: "Contábil",
      x: 600,
      y: 50,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["auditorias", "recursos-humanos", "financeiro"],
      subItens: []
    }, {
      id: "recursos-humanos",
      titulo: "Recursos Humanos",
      x: 780,
      y: 50,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["contabil", "departamento-pessoal"],
      subItens: []
    }, {
      id: "departamento-pessoal",
      titulo: "Departamento Pessoal",
      x: 960,
      y: 50,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["recursos-humanos", "especial-cd", "mercados-cd"],
      subItens: []
    }, {
      id: "especial-cd",
      titulo: "Especial (CD/Operações)",
      x: 1140,
      y: 140,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["departamento-pessoal", "mercados-cd"],
      subItens: []
    }, {
      id: "mercados-cd",
      titulo: "Mercados Comercializados (CD/Operações)",
      x: 1320,
      y: 140,
      width: 140,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["especial-cd", "departamento-pessoal"],
      subItens: []
    }, {
      id: "compras",
      titulo: "Compras",
      x: 420,
      y: 230,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["diadora-brasil", "financeiro", "desenvolvimento"],
      subItens: []
    }, {
      id: "financeiro",
      titulo: "Financeiro",
      x: 600,
      y: 230,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["contabil", "compras", "fiscal", "ti-operacoes"],
      subItens: []
    }, {
      id: "fiscal",
      titulo: "Fiscal",
      x: 780,
      y: 230,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["financeiro", "marketing", "controladoria"],
      subItens: []
    }, {
      id: "marketing",
      titulo: "Marketing",
      x: 960,
      y: 230,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["fiscal", "lojas", "sao-jose-cd"],
      subItens: []
    }, {
      id: "caixa",
      titulo: "Caixa",
      x: 1140,
      y: 290,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["lojas", "e-commerce"],
      subItens: []
    }, {
      id: "desenvolvimento",
      titulo: "Desenvolvimento",
      x: 420,
      y: 370,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["compras", "ti-operacoes"],
      subItens: []
    }, {
      id: "ti-operacoes",
      titulo: "T.I - Operações",
      x: 600,
      y: 370,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["financeiro", "desenvolvimento", "controladoria"],
      subItens: []
    }, {
      id: "controladoria",
      titulo: "Controladoria",
      x: 780,
      y: 390,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["fiscal", "ti-operacoes", "sao-jose-cd"],
      subItens: []
    }, {
      id: "sao-jose-cd",
      titulo: "São José dos Campos (CD/Operações)",
      x: 960,
      y: 390,
      width: 140,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["marketing", "controladoria", "defeitos"],
      subItens: []
    }, {
      id: "vendas",
      titulo: "Vendas",
      x: 1140,
      y: 380,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["lojas"],
      subItens: []
    }, {
      id: "ti-projetos",
      titulo: "T.I - Projetos e Inovações",
      x: 420,
      y: 550,
      width: 140,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["festcard"],
      subItens: []
    }, {
      id: "festcard",
      titulo: "Festcard",
      x: 600,
      y: 550,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["ti-projetos", "suprimentos"],
      subItens: []
    }, {
      id: "suprimentos",
      titulo: "Suprimentos",
      x: 780,
      y: 550,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["festcard", "defeitos"],
      subItens: []
    }, {
      id: "defeitos",
      titulo: "Defeitos",
      x: 960,
      y: 550,
      width: 120,
      height: 50,
      color: "#4C72B1",
      tipo: "backoffice",
      conexoes: ["sao-jose-cd", "suprimentos", "recalce"],
      subItens: []
    }];

    // Dados dos departamentos de Varejo
    const departamentosVarejo: DepartamentoProps[] = [{
      id: "lojas",
      titulo: "Lojas",
      x: 1140,
      y: 220,
      width: 120,
      height: 50,
      color: "#499B54",
      tipo: "varejo",
      conexoes: ["franquias", "diadora-brasil", "marketing", "caixa", "vendas", "clientes"]
    }, {
      id: "e-commerce",
      titulo: "E-commerce",
      x: 1140,
      y: 450,
      width: 120,
      height: 50,
      color: "#499B54",
      tipo: "varejo",
      conexoes: ["caixa", "recalce", "clientes"]
    }, {
      id: "recalce",
      titulo: "Recalce",
      x: 1140,
      y: 550,
      width: 120,
      height: 50,
      color: "#499B54",
      tipo: "varejo",
      conexoes: ["e-commerce", "defeitos", "clientes"]
    }];

    // Dados dos parceiros comerciais
    const parceirosComerciais: DepartamentoProps[] = [{
      id: "clientes",
      titulo: "Clientes",
      x: 1320,
      y: 380,
      width: 120,
      height: 50,
      color: "#E39D25",
      tipo: "parceiros",
      conexoes: ["lojas", "e-commerce", "recalce", "credisystem"]
    }, {
      id: "fornecedores",
      titulo: "Fornecedores",
      x: 60,
      y: 380,
      width: 120,
      height: 50,
      color: "#E39D25",
      tipo: "parceiros",
      conexoes: ["estadio-martins", "sao-jose-esporte"]
    }, {
      id: "estadio-martins",
      titulo: "Estádio Martins Pereira",
      x: 240,
      y: 480,
      width: 140,
      height: 50,
      color: "#E39D25",
      tipo: "parceiros",
      conexoes: ["fornecedores", "sao-jose-esporte"]
    }, {
      id: "sao-jose-esporte",
      titulo: "São José Esporte Clube",
      x: 240,
      y: 550,
      width: 140,
      height: 50,
      color: "#E39D25",
      tipo: "parceiros",
      conexoes: ["estadio-martins", "fornecedores"]
    }, {
      id: "inst-financeiras",
      titulo: "Instituições Financeiras",
      x: 660,
      y: 720,
      width: 180,
      height: 50,
      color: "#E39D25",
      tipo: "parceiros",
      conexoes: ["credisystem"]
    }, {
      id: "credisystem",
      titulo: "Credisystem",
      x: 960,
      y: 720,
      width: 120,
      height: 50,
      color: "#E39D25",
      tipo: "parceiros",
      conexoes: ["inst-financeiras", "clientes"]
    }];

    // Combinar todos os departamentos
    const todosDepartamentos = [...departamentosBackoffice, ...departamentosVarejo, ...parceirosComerciais];
    setDepartamentos(todosDepartamentos);

    // Criar conexões com base nas informações de conexões dos departamentos
    const conexoesGeradas: ConexaoProps[] = [];
    todosDepartamentos.forEach(departamento => {
      if (departamento.conexoes) {
        departamento.conexoes.forEach(conexao => {
          // Evitar duplicações de conexões
          const conexaoExistente = conexoesGeradas.some(c => c.source === departamento.id && c.target === conexao || c.source === conexao && c.target === departamento.id);
          if (!conexaoExistente) {
            conexoesGeradas.push({
              id: `${departamento.id}-${conexao}`,
              source: departamento.id,
              target: conexao
            });
          }
        });
      }
    });
    setConexoes(conexoesGeradas);
  }, []);
  const handleDepartamentoClick = useCallback((e: React.MouseEvent, departamento: DepartamentoProps) => {
    if (!editMode) {
      navigate(`/departamentos`, {
        state: {
          selectedDepartamento: departamento.titulo,
          tipo: departamento.tipo
        }
      });
      return;
    }
    if (creatingConexao?.inProgress) {
      // Finalizar criação de conexão
      const newConexao = {
        id: `${creatingConexao.source}-${departamento.id}`,
        source: creatingConexao.source,
        target: departamento.id
      };

      // Verificar se essa conexão já existe
      const conexaoExistente = conexoes.some(c => c.source === newConexao.source && c.target === newConexao.target || c.source === newConexao.target && c.target === newConexao.source);
      if (!conexaoExistente && newConexao.source !== newConexao.target) {
        setConexoes([...conexoes, newConexao]);

        // Atualizar as conexões do departamento de origem
        setDepartamentos(deps => deps.map(dep => {
          if (dep.id === creatingConexao.source) {
            const novasConexoes = [...(dep.conexoes || [])];
            if (!novasConexoes.includes(departamento.id)) {
              novasConexoes.push(departamento.id);
            }
            return {
              ...dep,
              conexoes: novasConexoes
            };
          }
          return dep;
        }));
      }
      setCreatingConexao(null);
      setTempConexao(null);
    } else if (e.shiftKey && editMode) {
      // Iniciar criação de conexão
      setCreatingConexao({
        source: departamento.id,
        inProgress: true
      });
    } else if (editMode && e.ctrlKey) {
      // Editar detalhes do departamento
      setEditingDepartamento({
        ...departamento
      });
      setDialogOpen(true);
    }
  }, [editMode, navigate, creatingConexao, conexoes]);
  const handleMouseMove = useCallback((e: React.MouseEvent<SVGElement>) => {
    if (editMode) {
      // Arrastar departamento
      if (draggedDep !== null) {
        const svgRect = svgRef.current?.getBoundingClientRect();
        if (svgRect) {
          const x = e.clientX - svgRect.left - dragOffset.x;
          const y = e.clientY - svgRect.top - dragOffset.y;
          setDepartamentos(deps => deps.map(dep => dep.id === draggedDep ? {
            ...dep,
            x,
            y
          } : dep));
        }
      }

      // Atualizar conexão temporária durante a criação
      if (creatingConexao?.inProgress && tempConexao) {
        const svgRect = svgRef.current?.getBoundingClientRect();
        if (svgRect) {
          setTempConexao({
            ...tempConexao,
            x2: e.clientX - svgRect.left,
            y2: e.clientY - svgRect.top
          });
        }
      }
    }
  }, [editMode, draggedDep, dragOffset, creatingConexao, tempConexao]);
  const handleMouseDown = useCallback((e: React.MouseEvent, departamento: DepartamentoProps) => {
    if (editMode && !e.shiftKey && !e.ctrlKey) {
      e.stopPropagation();
      setDraggedDep(departamento.id);
      const svgRect = svgRef.current?.getBoundingClientRect();
      if (svgRect) {
        setDragOffset({
          x: e.clientX - svgRect.left - departamento.x,
          y: e.clientY - svgRect.top - departamento.y
        });
      }
      if (creatingConexao?.inProgress) {
        const sourceDep = departamentos.find(d => d.id === creatingConexao.source);
        if (sourceDep) {
          setTempConexao({
            x1: sourceDep.x + sourceDep.width / 2,
            y1: sourceDep.y + sourceDep.height / 2,
            x2: e.clientX - (svgRect?.left || 0),
            y2: e.clientY - (svgRect?.top || 0)
          });
        }
      }
    }
  }, [editMode, creatingConexao, departamentos]);
  const handleMouseUp = useCallback(() => {
    setDraggedDep(null);
  }, []);
  const handleRemoveConexao = useCallback((conexaoId: string) => {
    if (editMode) {
      setConexoes(conexoes.filter(c => c.id !== conexaoId));
    }
  }, [editMode, conexoes]);
  const handleAddDepartamento = useCallback(() => {
    if (editMode) {
      const newId = `novo-dep-${Date.now()}`;
      const newDepartamento: DepartamentoProps = {
        id: newId,
        titulo: "Novo Departamento",
        x: 500,
        y: 300,
        width: 120,
        height: 50,
        color: "#A0A0A0",
        tipo: "backoffice",
        conexoes: [],
        subItens: []
      };
      setDepartamentos([...departamentos, newDepartamento]);
      setEditingDepartamento(newDepartamento);
      setDialogOpen(true);
    }
  }, [editMode, departamentos]);
  const handleRemoveDepartamento = useCallback((e: React.MouseEvent, departamentoId: string) => {
    e.stopPropagation();
    if (editMode) {
      // Remover conexões associadas a este departamento
      setConexoes(conexoes.filter(c => c.source !== departamentoId && c.target !== departamentoId));

      // Remover departamento
      setDepartamentos(departamentos.filter(d => d.id !== departamentoId));
    }
  }, [editMode, conexoes, departamentos]);
  const handleSaveDepartamento = useCallback(() => {
    if (editingDepartamento) {
      setDepartamentos(deps => deps.map(dep => dep.id === editingDepartamento.id ? editingDepartamento : dep));
      setDialogOpen(false);
      setEditingDepartamento(null);
    }
  }, [editingDepartamento]);
  const getDepartamentoPorId = useCallback((id: string) => {
    return departamentos.find(d => d.id === id);
  }, [departamentos]);
  const criarCaixaDepartamento = useCallback((departamento: DepartamentoProps, index: number) => {
    const isHovered = hoveredDepartamento === departamento.id;
    const isBeingDragged = draggedDep === departamento.id;
    const getTipoColor = (tipo: string) => {
      switch (tipo) {
        case 'backoffice':
          return "#4C72B1";
        case 'varejo':
          return "#499B54";
        case 'parceiros':
          return "#E39D25";
        default:
          return "#A0A0A0";
      }
    };
    return <g key={`${departamento.tipo}-${departamento.id}-${index}`} onClick={e => handleDepartamentoClick(e, departamento)} onMouseEnter={() => setHoveredDepartamento(departamento.id)} onMouseLeave={() => setHoveredDepartamento(null)} onMouseDown={e => handleMouseDown(e, departamento)} className={`cursor-pointer ${isBeingDragged ? 'opacity-60' : ''}`}>
        {/* Caixa principal do departamento */}
        <rect x={departamento.x} y={departamento.y} width={departamento.width} height={departamento.height} fill={isHovered ? "#8C8C8C" : departamento.color} stroke={getTipoColor(departamento.tipo)} strokeWidth="1.5" rx="2" ry="2" />
        
        {/* Título do departamento */}
        <rect x={departamento.x} y={departamento.y} width={departamento.width} height="20" fill={getTipoColor(departamento.tipo)} rx="2" ry="2" />
        <text x={departamento.x + departamento.width / 2} y={departamento.y + 12} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold">
          {departamento.titulo}
        </text>
        
        {/* Nome do departamento maior no centro */}
        <text x={departamento.x + departamento.width / 2} y={departamento.y + departamento.height / 2 + 5} textAnchor="middle" dominantBaseline="middle" fill="#333" fontSize={departamento.titulo === "Vendas" ? "12" : "14"} fontWeight="bold">
          {departamento.titulo}
        </text>

        {/* Botão de remoção (visível apenas no modo de edição) */}
        {editMode && <g onClick={e => handleRemoveDepartamento(e, departamento.id)} className="cursor-pointer">
            <circle cx={departamento.x + departamento.width - 8} cy={departamento.y + 8} r="7" fill="red" />
            <text x={departamento.x + departamento.width - 8} y={departamento.y + 10} textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="10" fontWeight="bold">
              ×
            </text>
          </g>}

        {/* Subitens para departamentos que os têm */}
        {departamento.subItens && departamento.subItens.length > 0 && <>
            {departamento.subItens.map((item, idx) => <rect key={`subitem-${idx}`} x={departamento.x} y={departamento.y + departamento.height + idx * 15} width={departamento.width} height="15" fill="#CCC" stroke="#333" strokeWidth="0.5" />)}
            
            {departamento.subItens.map((item, idx) => <text key={`subitem-text-${idx}`} x={departamento.x + departamento.width / 2} y={departamento.y + departamento.height + idx * 15 + 7.5} textAnchor="middle" dominantBaseline="middle" fill="#333" fontSize="8">
                {item}
              </text>)}
          </>}
      </g>;
  }, [editMode, hoveredDepartamento, draggedDep, handleDepartamentoClick, handleMouseDown, handleRemoveDepartamento]);
  const criarConexoes = useCallback(() => {
    return <g>
        {/* Conexões existentes */}
        {conexoes.map(conexao => {
        const sourceDep = getDepartamentoPorId(conexao.source);
        const targetDep = getDepartamentoPorId(conexao.target);
        if (!sourceDep || !targetDep) return null;

        // Calcular pontos de conexão
        const x1 = sourceDep.x + sourceDep.width / 2;
        const y1 = sourceDep.y + sourceDep.height / 2;
        const x2 = targetDep.x + targetDep.width / 2;
        const y2 = targetDep.y + targetDep.height / 2;

        // Calculando pontos de controle para curvas
        const dx = Math.abs(x2 - x1) * 0.5;
        const dy = Math.abs(y2 - y1) * 0.5;
        const controlPoint1X = x1 + (x2 > x1 ? dx : -dx);
        const controlPoint1Y = y1;
        const controlPoint2X = x2 - (x2 > x1 ? dx : -dx);
        const controlPoint2Y = y2;

        // Construir o caminho curvo
        const path = `M ${x1} ${y1} C ${controlPoint1X} ${controlPoint1Y}, ${controlPoint2X} ${controlPoint2Y}, ${x2} ${y2}`;

        // Ponto médio para o botão de remoção
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        return <g key={conexao.id}>
              <path d={path} fill="none" stroke="#333" strokeWidth="1" opacity="0.7" />
              
              {/* Botão para remover conexão (visível apenas no modo de edição) */}
              {editMode && <g onClick={() => handleRemoveConexao(conexao.id)} className="cursor-pointer">
                  <circle cx={midX} cy={midY} r="8" fill="white" stroke="#333" strokeWidth="1" />
                  <text x={midX} y={midY} textAnchor="middle" dominantBaseline="middle" fill="#333" fontSize="12" fontWeight="bold">
                    ×
                  </text>
                </g>}
            </g>;
      })}
        
        {/* Conexão temporária durante a criação */}
        {tempConexao && <path d={`M ${tempConexao.x1} ${tempConexao.y1} C ${tempConexao.x1 + 50} ${tempConexao.y1}, ${tempConexao.x2 - 50} ${tempConexao.y2}, ${tempConexao.x2} ${tempConexao.y2}`} fill="none" stroke="#333" strokeWidth="1" strokeDasharray="5,5" />}
      </g>;
  }, [conexoes, tempConexao, editMode, getDepartamentoPorId, handleRemoveConexao]);
  const criarAreasGrupo = useCallback(() => {
    // BackOffice área
    const backOfficeArea = {
      x: 180,
      y: 30,
      width: 940,
      height: 600
    };

    // Varejo área
    const varejoArea = {
      x: 1090,
      y: 180,
      width: 200,
      height: 450
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
    return <g>
        {/* BackOffice */}
        <rect x={backOfficeArea.x} y={backOfficeArea.y} width={backOfficeArea.width} height={backOfficeArea.height} stroke="#4C72B1" strokeWidth="2" fill="none" />
        <text x={backOfficeArea.x + backOfficeArea.width - 80} y={backOfficeArea.y + 15} fill="#4C72B1" fontSize="12" fontWeight="bold">
          BACKOFFICE
        </text>
        
        {/* Varejo */}
        <rect x={varejoArea.x} y={varejoArea.y} width={varejoArea.width} height={varejoArea.height} stroke="#499B54" strokeWidth="2" fill="none" />
        <text x={varejoArea.x + varejoArea.width - 60} y={varejoArea.y + 15} fill="#499B54" fontSize="12" fontWeight="bold">
          VAREJO
        </text>
        
        {/* Parceiros Comerciais (Texto) */}
        <text x={parceirosTopRight.x + parceirosTopRight.width - 120} y={parceirosTopRight.y + 15} fill="#E39D25" fontSize="12" fontWeight="bold">
          PARCEIROS COMERCIAIS
        </text>
      </g>;
  }, []);
  return <div className="w-full overflow-auto">
      {editMode}
      
      <svg ref={svgRef} width="1500" height="850" viewBox="0 0 1500 850" className="mx-auto border border-gray-200 rounded-lg shadow-inner bg-white" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
        {/* Definições para efeitos visuais */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
          </marker>
        </defs>
        
        {/* Áreas dos grupos */}
        {criarAreasGrupo()}
        
        {/* Conexões entre departamentos */}
        {criarConexoes()}
        
        {/* Departamentos */}
        {departamentos.map((departamento, index) => criarCaixaDepartamento(departamento, index))}
      </svg>
      
      {/* Dialog para editar departamentos */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Departamento</DialogTitle>
          </DialogHeader>
          
          {editingDepartamento && <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="titulo" className="text-right">Título:</label>
                <Input id="titulo" className="col-span-3" value={editingDepartamento.titulo} onChange={e => setEditingDepartamento({
              ...editingDepartamento,
              titulo: e.target.value
            })} />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tipo" className="text-right">Tipo:</label>
                <select id="tipo" className="col-span-3 border rounded p-2" value={editingDepartamento.tipo} onChange={e => setEditingDepartamento({
              ...editingDepartamento,
              tipo: e.target.value as 'backoffice' | 'varejo' | 'parceiros'
            })}>
                  <option value="backoffice">BackOffice</option>
                  <option value="varejo">Varejo</option>
                  <option value="parceiros">Parceiros Comerciais</option>
                </select>
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right">Sub-itens:</label>
                <div className="col-span-3 border rounded p-2 max-h-40 overflow-y-auto">
                  {editingDepartamento.subItens?.map((item, idx) => <div key={idx} className="flex items-center gap-2 mb-2">
                      <Input value={item} onChange={e => {
                  const novoSubItens = [...(editingDepartamento.subItens || [])];
                  novoSubItens[idx] = e.target.value;
                  setEditingDepartamento({
                    ...editingDepartamento,
                    subItens: novoSubItens
                  });
                }} className="flex-1" />
                      <Button variant="outline" size="sm" onClick={() => {
                  const novoSubItens = [...(editingDepartamento.subItens || [])];
                  novoSubItens.splice(idx, 1);
                  setEditingDepartamento({
                    ...editingDepartamento,
                    subItens: novoSubItens
                  });
                }}>
                        <X size={16} />
                      </Button>
                    </div>)}
                  <Button variant="outline" size="sm" className="w-full mt-2" onClick={() => {
                const novoSubItens = [...(editingDepartamento.subItens || []), "Novo Item"];
                setEditingDepartamento({
                  ...editingDepartamento,
                  subItens: novoSubItens
                });
              }}>
                    <Plus size={16} className="mr-1" /> Adicionar Sub-item
                  </Button>
                </div>
              </div>
            </div>}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
            <Button onClick={handleSaveDepartamento}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>;
};
export default MapaInterativo;