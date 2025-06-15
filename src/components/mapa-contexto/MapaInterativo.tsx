import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import mapaRef from '@/assets/mapa-contexto-ref.png';

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

const MapaInterativo: React.FC<MapaInterativoProps> = ({ editMode }) => {
  const navigate = useNavigate();
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredDepartamento, setHoveredDepartamento] = useState<string | null>(null);
  const [departamentos, setDepartamentos] = useState<DepartamentoProps[]>([]);
  const [conexoes, setConexoes] = useState<ConexaoProps[]>([]);
  const [draggedDep, setDraggedDep] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingDepartamento, setEditingDepartamento] = useState<DepartamentoProps | null>(null);
  const [creatingConexao, setCreatingConexao] = useState<{source: string; inProgress: boolean} | null>(null);
  const [tempConexao, setTempConexao] = useState<{x1: number; y1: number; x2: number; y2: number} | null>(null);

  // Cores fiéis ao mapa da imagem:
  const deepBlue = "#1e3a8a";
  const boxGray = "#232738";
  const areaBackOffice = "#334155";
  const areaVarejo = "#256d85";
  const areaParceiros = "#dfa23b";
  const textWhite = "#ffffff";

  // Exemplo: redefinir departamentos para alinhar com a imagem fornecida
  useEffect(() => {
    // Apenas padrão visual/layout por enquanto
    const departamentosFieis: DepartamentoProps[] = [
      {
        id: "fiscal",
        titulo: "Fiscal",
        x: 210,
        y: 150,
        width: 145,
        height: 52,
        color: boxGray,
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      },
      {
        id: "compras",
        titulo: "Compras",
        x: 370,
        y: 78,
        width: 145,
        height: 52,
        color: boxGray,
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      },
      {
        id: "financeiro",
        titulo: "Financeiro",
        x: 540,
        y: 150,
        width: 145,
        height: 52,
        color: boxGray,
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      },
      {
        id: "controladoria",
        titulo: "Controladoria",
        x: 540,
        y: 230,
        width: 145,
        height: 52,
        color: boxGray,
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      },
      {
        id: "marketing",
        titulo: "Marketing",
        x: 710,
        y: 150,
        width: 145,
        height: 52,
        color: boxGray,
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      },
      {
        id: "lojas",
        titulo: "Lojas",
        x: 1100,
        y: 112,
        width: 145,
        height: 52,
        color: boxGray,
        tipo: "varejo",
        conexoes: [],
        subItens: [],
      },
      {
        id: "clientes",
        titulo: "Clientes",
        x: 1240,
        y: 250,
        width: 166,
        height: 52,
        color: boxGray,
        tipo: "parceiros",
        conexoes: [],
        subItens: [],
      },
      {
        id: "fornecedores",
        titulo: "Fornecedores",
        x: 40,
        y: 250,
        width: 166,
        height: 52,
        color: boxGray,
        tipo: "parceiros",
        conexoes: [],
        subItens: [],
      },
      {
        id: "instituicoes",
        titulo: "Instituições Financeiras",
        x: 650,
        y: 550,
        width: 280,
        height: 52,
        color: boxGray,
        tipo: "parceiros",
        conexoes: [],
        subItens: [],
      },
      {
        id: "sjec",
        titulo: "São José Esporte Clube",
        x: 370,
        y: 550,
        width: 180,
        height: 52,
        color: boxGray,
        tipo: "parceiros",
        conexoes: [],
        subItens: [],
      },
      {
        id: "estadio",
        titulo: "Estádio Martins Pereira",
        x: 370,
        y: 620,
        width: 180,
        height: 52,
        color: boxGray,
        tipo: "parceiros",
        conexoes: [],
        subItens: [],
      },
    ];
    setDepartamentos(departamentosFieis);
    setConexoes([]);
  }, []);

  // Caixas e áreas com design fiel
  const criarAreasGrupoFiel = useCallback(() => {
    // Áreas BackOffice/Varejo/Clientes desenhadas igual a imagem
    return (
      <g>
        {/* Fundo azul escuro */}
        <rect
          x={0}
          y={0}
          width={1500}
          height={850}
          fill={deepBlue}
        />
        {/* Área BackOffice */}
        <rect
          x={110}
          y={60}
          width={940}
          height={384}
          fill="none"
          stroke={areaBackOffice}
          strokeWidth={7}
          rx={24}
        />
        <text
          x={640}
          y={95}
          textAnchor="middle"
          fill={areaBackOffice}
          fontSize="32"
          fontWeight="bold"
        >
          BACKOFFICE
        </text>
        {/* Área Varejo */}
        <rect
          x={1090}
          y={60}
          width={335}
          height={384}
          fill="none"
          stroke={areaVarejo}
          strokeWidth={7}
          rx={24}
        />
        <text
          x={1248}
          y={95}
          textAnchor="middle"
          fill={areaVarejo}
          fontSize="32"
          fontWeight="bold"
        >
          VAREJO
        </text>
        {/* Área CLIENTES e Parceiros */}
        <rect
          x={20}
          y={212}
          width={1460}
          height={180}
          fill="none"
          stroke={areaParceiros}
          strokeWidth={7}
          rx={24}
        />
        <text
          x={730}
          y={245}
          textAnchor="middle"
          fill={areaParceiros}
          fontSize="32"
          fontWeight="bold"
        >
          CLIENTES & PARCEIROS
        </text>
      </g>
    );
  }, []);

  // Caixa fiel estilizada do departamento
  const criarCaixaDepartamentoFiel = useCallback((departamento: DepartamentoProps, index: number) => (
    <g key={`dep-${departamento.id}-${index}`}>
      <rect
        x={departamento.x}
        y={departamento.y}
        width={departamento.width}
        height={departamento.height}
        rx={14}
        ry={14}
        fill={departamento.color}
        stroke="#fff"
        strokeWidth={3}
        filter="drop-shadow(2px 2px 7px rgba(0,0,0,0.22))"
      />
      <text
        x={departamento.x + departamento.width / 2}
        y={departamento.y + departamento.height / 2 + 3}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={textWhite}
        fontSize="20"
        fontWeight="bold"
        style={{ letterSpacing: '0.5px' }}
      >
        {departamento.titulo}
      </text>
    </g>
  ), []);

  // Mantendo funções para edição e navegação para futura implementação
  const handleDepartamentoClick = useCallback((e: React.MouseEvent, departamento: DepartamentoProps) => {
    if (!editMode) {
      navigate(`/departamentos`, { state: { selectedDepartamento: departamento.titulo, tipo: departamento.tipo } });
      return;
    }
    
    if (creatingConexao?.inProgress) {
      const newConexao = {
        id: `${creatingConexao.source}-${departamento.id}`,
        source: creatingConexao.source,
        target: departamento.id
      };
      
      const conexaoExistente = conexoes.some(
        c => (c.source === newConexao.source && c.target === newConexao.target) || 
            (c.source === newConexao.target && c.target === newConexao.source)
      );
      
      if (!conexaoExistente && newConexao.source !== newConexao.target) {
        setConexoes([...conexoes, newConexao]);
        
        setDepartamentos(deps => deps.map(dep => {
          if (dep.id === creatingConexao.source) {
            const novasConexoes = [...(dep.conexoes || [])];
            if (!novasConexoes.includes(departamento.id)) {
              novasConexoes.push(departamento.id);
            }
            return { ...dep, conexoes: novasConexoes };
          }
          return dep;
        }));
      }
      
      setCreatingConexao(null);
      setTempConexao(null);
    } else if (e.shiftKey && editMode) {
      setCreatingConexao({ source: departamento.id, inProgress: true });
    } else if (editMode && e.ctrlKey) {
      setEditingDepartamento({...departamento});
      setDialogOpen(true);
    }
  }, [editMode, navigate, creatingConexao, conexoes]);

  const handleMouseMove = useCallback((e: React.MouseEvent<SVGElement>) => {
    if (editMode) {
      if (draggedDep !== null) {
        const svgRect = svgRef.current?.getBoundingClientRect();
        if (svgRect) {
          const x = e.clientX - svgRect.left - dragOffset.x;
          const y = e.clientY - svgRect.top - dragOffset.y;
          
          setDepartamentos(deps => deps.map(dep => 
            dep.id === draggedDep ? { ...dep, x, y } : dep
          ));
        }
      }
      
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
        color: boxGray,
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
      setConexoes(conexoes.filter(c => c.source !== departamentoId && c.target !== departamentoId));
      setDepartamentos(departamentos.filter(d => d.id !== departamentoId));
    }
  }, [editMode, conexoes, departamentos]);

  const handleSaveDepartamento = useCallback(() => {
    if (editingDepartamento) {
      setDepartamentos(deps => deps.map(dep => 
        dep.id === editingDepartamento.id ? editingDepartamento : dep
      ));
      setDialogOpen(false);
      setEditingDepartamento(null);
    }
  }, [editingDepartamento]);

  return (
    <div className="w-full overflow-auto">
      {/* Imagem de referência fiel ao topo */}
      <div className="flex flex-col items-center mb-8">
        <img
          src={mapaRef}
          alt="Mapa de Contexto Referência"
          className="w-full max-w-[900px] rounded-xl shadow-xl border border-gray-300"
          style={{ background: '#1e3a8a' }}
        />
        <p className="text-xs text-gray-500 mt-2">Mapa de referência enviado pelo usuário</p>
      </div>
      {/* Resto do componente (editor, SVG, etc) */}
      {editMode && (
        <div className="mb-4 flex justify-between items-center bg-gray-100 p-3 rounded">
          <div className="text-sm text-gray-600">
            <p><strong>Instruções:</strong></p>
            <ul className="list-disc pl-5 text-xs">
              <li>Arraste os blocos para movê-los</li>
              <li>Pressione Shift + clique para criar conexão entre dois blocos</li>
              <li>Pressione Ctrl + clique para editar um bloco</li>
              <li>Clique no X vermelho para remover um bloco</li>
              <li>Clique no X nas conexões para removê-las</li>
            </ul>
          </div>
          <Button onClick={handleAddDepartamento} variant="outline" size="sm" className="flex items-center gap-1">
            <Plus size={16} />
            Adicionar Bloco
          </Button>
        </div>
      )}
      <svg
        ref={svgRef}
        width="1500"
        height="850"
        viewBox="0 0 1500 850"
        className="mx-auto border border-gray-200 rounded-lg shadow-inner"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ background: deepBlue }}
      >
        {/* NOVA: Fundo, áreas e rótulos fiéis */}
        {criarAreasGrupoFiel()}
        {/* NOVA: Blocos fiéis */}
        {departamentos.map((departamento, index) => criarCaixaDepartamentoFiel(departamento, index))}
      </svg>
      {/* Dialog para editar departamentos */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar Departamento</DialogTitle>
          </DialogHeader>
          
          {editingDepartamento && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="titulo" className="text-right">Título:</label>
                <Input
                  id="titulo"
                  className="col-span-3"
                  value={editingDepartamento.titulo}
                  onChange={(e) => setEditingDepartamento({...editingDepartamento, titulo: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="tipo" className="text-right">Tipo:</label>
                <select
                  id="tipo"
                  className="col-span-3 border rounded p-2"
                  value={editingDepartamento.tipo}
                  onChange={(e) => setEditingDepartamento({
                    ...editingDepartamento, 
                    tipo: e.target.value as 'backoffice' | 'varejo' | 'parceiros'
                  })}
                >
                  <option value="backoffice">BackOffice</option>
                  <option value="varejo">Varejo</option>
                  <option value="parceiros">Parceiros Comerciais</option>
                </select>
              </div>
              
              <div className="grid grid-cols-4 items-center gap-4">
                <label className="text-right">Sub-itens:</label>
                <div className="col-span-3 border rounded p-2 max-h-40 overflow-y-auto">
                  {editingDepartamento.subItens?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 mb-2">
                      <Input
                        value={item}
                        onChange={(e) => {
                          const novoSubItens = [...(editingDepartamento.subItens || [])];
                          novoSubItens[idx] = e.target.value;
                          setEditingDepartamento({...editingDepartamento, subItens: novoSubItens});
                        }}
                        className="flex-1"
                      />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const novoSubItens = [...(editingDepartamento.subItens || [])];
                          novoSubItens.splice(idx, 1);
                          setEditingDepartamento({...editingDepartamento, subItens: novoSubItens});
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
                      const novoSubItens = [...(editingDepartamento.subItens || []), "Novo Item"];
                      setEditingDepartamento({...editingDepartamento, subItens: novoSubItens});
                    }}
                  >
                    <Plus size={16} className="mr-1" /> Adicionar Sub-item
                  </Button>
                </div>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancelar</Button>
            <Button onClick={handleSaveDepartamento}>Salvar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MapaInterativo;
