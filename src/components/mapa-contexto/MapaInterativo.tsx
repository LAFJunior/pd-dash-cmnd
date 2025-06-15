import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import mapaRef from './mapa-contexto-ref.png';

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

// Remover imagem de referência do mapa
// Não há mais import mapaRef

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

  // Cores
  const deepBlue = "#1e3a8a";
  const boxGray = "#232738";
  const areaBackOffice = "#334155";
  const areaVarejo = "#256d85";
  const areaParceiros = "#dfa23b";
  const textWhite = "#ffffff";

  // Inicialização dos departamentos - apenas blocos (sem imagem/visual fiel)
  useEffect(() => {
    const departamentosIniciais: DepartamentoProps[] = [
      {
        id: "fiscal",
        titulo: "Fiscal",
        x: 250,
        y: 150,
        width: 140,
        height: 48,
        color: boxGray,
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      },
      {
        id: "compras",
        titulo: "Compras",
        x: 400,
        y: 90,
        width: 140,
        height: 48,
        color: boxGray,
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      },
      {
        id: "financeiro",
        titulo: "Financeiro",
        x: 570,
        y: 150,
        width: 140,
        height: 48,
        color: boxGray,
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      },
      {
        id: "controladoria",
        titulo: "Controladoria",
        x: 570,
        y: 230,
        width: 140,
        height: 48,
        color: boxGray,
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      },
      {
        id: "marketing",
        titulo: "Marketing",
        x: 730,
        y: 150,
        width: 140,
        height: 48,
        color: boxGray,
        tipo: "backoffice",
        conexoes: [],
        subItens: [],
      },
      {
        id: "lojas",
        titulo: "Lojas",
        x: 1050,
        y: 120,
        width: 140,
        height: 48,
        color: boxGray,
        tipo: "varejo",
        conexoes: [],
        subItens: [],
      },
      {
        id: "clientes",
        titulo: "Clientes",
        x: 1220,
        y: 230,
        width: 150,
        height: 48,
        color: boxGray,
        tipo: "parceiros",
        conexoes: [],
        subItens: [],
      },
      {
        id: "fornecedores",
        titulo: "Fornecedores",
        x: 70,
        y: 230,
        width: 150,
        height: 48,
        color: boxGray,
        tipo: "parceiros",
        conexoes: [],
        subItens: [],
      },
    ];
    setDepartamentos(departamentosIniciais);
    setConexoes([]);
  }, []);

  // Apenas renderização dos blocos e conexões
  const criarCaixaDepartamento = useCallback((departamento: DepartamentoProps, index: number) => (
    <g key={`dep-${departamento.id}-${index}`}>
      <rect
        x={departamento.x}
        y={departamento.y}
        width={departamento.width}
        height={departamento.height}
        rx={12}
        ry={12}
        fill={departamento.color}
        stroke="#fff"
        strokeWidth={2}
      />
      <text
        x={departamento.x + departamento.width / 2}
        y={departamento.y + departamento.height / 2 + 3}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={textWhite}
        fontSize="18"
        fontWeight="bold"
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
      {/* Removido: Imagem de referência */}
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
        width="1400"
        height="600"
        viewBox="0 0 1400 600"
        className="mx-auto border border-gray-200 rounded-lg shadow-inner"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ background: deepBlue }}
      >
        {/* Renderizar blocos */}
        {departamentos.map((departamento, index) => criarCaixaDepartamento(departamento, index))}
         {conexoes.map(conexao => {
          const sourceDep = departamentos.find(d => d.id === conexao.source);
          const targetDep = departamentos.find(d => d.id === conexao.target);

          if (!sourceDep || !targetDep) {
            return null;
          }

          const x1 = sourceDep.x + sourceDep.width / 2;
          const y1 = sourceDep.y + sourceDep.height / 2;
          const x2 = targetDep.x + targetDep.width / 2;
          const y2 = targetDep.y + targetDep.height / 2;

          return (
            <g key={conexao.id}>
              <path
                d={`M${x1},${y1} L${x2},${y2}`}
                stroke="#9ca3af"
                strokeWidth="2"
              />
              {editMode && (
                <X
                  size={16}
                  className="cursor-pointer absolute"
                  style={{
                    left: (x1 + x2) / 2 - 8,
                    top: (y1 + y2) / 2 - 8,
                    color: '#dc2626',
                    backgroundColor: 'white',
                    borderRadius: '50%'
                  }}
                  onClick={() => handleRemoveConexao(conexao.id)}
                />
              )}
            </g>
          );
        })}
        {creatingConexao?.inProgress && tempConexao && (
          <line
            x1={tempConexao.x1}
            y1={tempConexao.y1}
            x2={tempConexao.x2}
            y2={tempConexao.y2}
            stroke="#6b7280"
            strokeWidth="2"
            strokeDasharray="4"
          />
        )}
        {departamentos.map((departamento) => (
          <g
            key={departamento.id}
            onClick={(e) => handleDepartamentoClick(e, departamento)}
            onMouseDown={(e) => handleMouseDown(e, departamento)}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: editMode ? 'grab' : 'pointer' }}
            onMouseEnter={() => setHoveredDepartamento(departamento.id)}
            onMouseLeave={() => setHoveredDepartamento(null)}
          >
            <rect
              x={departamento.x}
              y={departamento.y}
              width={departamento.width}
              height={departamento.height}
              rx="12"
              ry="12"
              fill={departamento.color}
              stroke="#fff"
              strokeWidth="2"
              style={{
                filter: hoveredDepartamento === departamento.id ? 'drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))' : 'none',
                transition: 'filter 0.3s ease'
              }}
            />
            <text
              x={departamento.x + departamento.width / 2}
              y={departamento.y + departamento.height / 2 + 5}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={textWhite}
              fontSize="18"
              fontWeight="bold"
            >
              {departamento.titulo}
            </text>
            {editMode && (
              <X
                size={16}
                className="cursor-pointer absolute"
                style={{
                  top: departamento.y - 8,
                  left: departamento.x + departamento.width - 8,
                  color: '#dc2626',
                  backgroundColor: 'white',
                  borderRadius: '50%'
                }}
                onClick={(e) => handleRemoveDepartamento(e, departamento.id)}
              />
            )}
          </g>
        ))}
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
