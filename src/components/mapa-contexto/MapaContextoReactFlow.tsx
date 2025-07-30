import React, { useCallback } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Controls,
  Background,
  BackgroundVariant,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useNavigate } from 'react-router-dom';
import DepartmentNode from './nodes/DepartmentNode';

const nodeTypes = {
  department: DepartmentNode,
};

interface MapaContextoReactFlowProps {
  editMode: boolean;
}

const MapaContextoReactFlow: React.FC<MapaContextoReactFlowProps> = ({ editMode }) => {
  const navigate = useNavigate();

  // Definindo os nós baseados na imagem fornecida
  const initialNodes: Node[] = [
    // BackOffice - Lado esquerdo
    { id: 'franquias', type: 'department', position: { x: 50, y: 100 }, data: { label: 'Franquias', color: '#E8E8E8', width: 80, height: 40 } },
    { id: 'auditoria', type: 'department', position: { x: 200, y: 100 }, data: { label: 'Auditoria', color: '#E8E8E8', width: 80, height: 50 } },
    { id: 'contabil', type: 'department', position: { x: 350, y: 100 }, data: { label: 'Contábil', color: '#E8E8E8', width: 80, height: 50 } },
    { id: 'recursos-humanos', type: 'department', position: { x: 500, y: 50 }, data: { label: 'Recursos Humanos', color: '#E8E8E8', width: 100, height: 60 } },
    { id: 'depto-pessoal', type: 'department', position: { x: 650, y: 100 }, data: { label: 'Departamento Pessoal', color: '#E8E8E8', width: 90, height: 50 } },
    
    { id: 'dissolve-brasil', type: 'department', position: { x: 50, y: 200 }, data: { label: 'Dissolve Brasil', color: '#D4E6D4', width: 80, height: 40 } },
    
    // Segunda linha
    { id: 'compras', type: 'department', position: { x: 200, y: 250 }, data: { label: 'Compras', color: '#D4E6D4', width: 80, height: 50 } },
    { id: 'financeiro', type: 'department', position: { x: 350, y: 250 }, data: { label: 'Financeiro', color: '#D4D4E8', width: 80, height: 50 } },
    { id: 'fiscal', type: 'department', position: { x: 500, y: 250 }, data: { label: 'Fiscal', color: '#D4D4E8', width: 80, height: 50 } },
    { id: 'marketing', type: 'department', position: { x: 650, y: 250 }, data: { label: 'Marketing', color: '#D4E6D4', width: 80, height: 50 } },
    
    // LOJAS - Centro
    { id: 'lojas', type: 'department', position: { x: 800, y: 150 }, data: { label: 'LOJAS', color: '#F0E8D4', width: 100, height: 60 } },
    { id: 'gerentes', type: 'department', position: { x: 800, y: 250 }, data: { label: 'Gerentes', color: '#F0E8D4', width: 80, height: 40 } },
    { id: 'caixa', type: 'department', position: { x: 800, y: 320 }, data: { label: 'Caixa', color: '#F0E8D4', width: 60, height: 35 } },
    { id: 'vendas', type: 'department', position: { x: 800, y: 380 }, data: { label: 'Vendas', color: '#F0E8D4', width: 60, height: 35 } },
    
    // Terceira linha
    { id: 'desenvolvimento', type: 'department', position: { x: 200, y: 400 }, data: { label: 'Desenvolvimento', color: '#D4E6D4', width: 90, height: 50 } },
    { id: 'ti-operacoes', type: 'department', position: { x: 350, y: 400 }, data: { label: 'T.I. Operações', color: '#D4D4E8', width: 80, height: 50 } },
    { id: 'controladoria', type: 'department', position: { x: 500, y: 400 }, data: { label: 'Controladoria', color: '#D4D4E8', width: 80, height: 50 } },
    { id: 'sao-jose-campos', type: 'department', position: { x: 650, y: 400 }, data: { label: 'São José dos Campos', color: '#F0E8D4', width: 90, height: 50 } },
    
    // Quarta linha
    { id: 'ti-projetos', type: 'department', position: { x: 200, y: 550 }, data: { label: 'T.I. Projetos e Inovações', color: '#D4E6D4', width: 90, height: 50 } },
    { id: 'festcard', type: 'department', position: { x: 350, y: 550 }, data: { label: 'Festcard', color: '#D4D4E8', width: 80, height: 50 } },
    { id: 'suprimentos', type: 'department', position: { x: 500, y: 550 }, data: { label: 'Suprimentos', color: '#D4D4E8', width: 80, height: 50 } },
    { id: 'defeitos', type: 'department', position: { x: 650, y: 550 }, data: { label: 'Defeitos', color: '#F0E8D4', width: 80, height: 50 } },
    
    // Clientes - Lado direito
    { id: 'ecommerce', type: 'department', position: { x: 950, y: 150 }, data: { label: 'E-commerce', color: '#D4E6D4', width: 80, height: 50 } },
    { id: 'reciclar', type: 'department', position: { x: 950, y: 450 }, data: { label: 'Reciclar', color: '#D4E6D4', width: 80, height: 50 } },
    
    // Estoque Logística Reversa
    { id: 'estoque-logistica', type: 'department', position: { x: 50, y: 450 }, data: { label: 'Estoque Logística Reversa', color: '#E8E8E8', width: 100, height: 50 } },
    
    // São José Esporte Clube
    { id: 'sao-jose-esporte', type: 'department', position: { x: 50, y: 550 }, data: { label: 'São José Esporte Clube', color: '#E8E8E8', width: 100, height: 50 } },
    
    // Diretorias Financeiras
    { id: 'diretorias-financeiras', type: 'department', position: { x: 500, y: 700 }, data: { label: 'Diretorias Financeiras', color: '#D4D4E8', width: 120, height: 50 } },
    
    // Credysystem
    { id: 'credysystem', type: 'department', position: { x: 750, y: 700 }, data: { label: 'Credysystem', color: '#D4D4E8', width: 80, height: 50 } },
    
    // Especial (CD/Operação)
    { id: 'especial-cd', type: 'department', position: { x: 800, y: 50 }, data: { label: 'Especial (CD/Operação)', color: '#F0E8D4', width: 100, height: 50 } },
    
    // Infl-ecommerce (CD/Operação)
    { id: 'infl-ecommerce', type: 'department', position: { x: 950, y: 50 }, data: { label: 'Infl-ecommerce (CD/Operação)', color: '#F0E8D4', width: 100, height: 50 } },
  ];

  // Definindo as conexões baseadas na imagem
  const initialEdges: Edge[] = [
    // Conexões BackOffice
    { id: 'e1', source: 'auditoria', target: 'compras', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e2', source: 'contabil', target: 'financeiro', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e3', source: 'recursos-humanos', target: 'depto-pessoal', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e4', source: 'recursos-humanos', target: 'fiscal', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Conexões com LOJAS
    { id: 'e5', source: 'lojas', target: 'gerentes', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e6', source: 'gerentes', target: 'caixa', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e7', source: 'gerentes', target: 'vendas', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Conexões departamentais
    { id: 'e8', source: 'compras', target: 'desenvolvimento', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e9', source: 'financeiro', target: 'ti-operacoes', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e10', source: 'fiscal', target: 'controladoria', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e11', source: 'marketing', target: 'sao-jose-campos', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Conexões com T.I. e projetos
    { id: 'e12', source: 'desenvolvimento', target: 'ti-projetos', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e13', source: 'ti-operacoes', target: 'festcard', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e14', source: 'controladoria', target: 'suprimentos', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e15', source: 'sao-jose-campos', target: 'defeitos', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Conexões com clientes/externos
    { id: 'e16', source: 'marketing', target: 'ecommerce', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e17', source: 'ecommerce', target: 'lojas', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e18', source: 'lojas', target: 'reciclar', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Conexões com fornecedores/parceiros
    { id: 'e19', source: 'dissolve-brasil', target: 'compras', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e20', source: 'estoque-logistica', target: 'desenvolvimento', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e21', source: 'sao-jose-esporte', target: 'ti-projetos', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Conexões financeiras
    { id: 'e22', source: 'festcard', target: 'diretorias-financeiras', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e23', source: 'suprimentos', target: 'diretorias-financeiras', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e24', source: 'diretorias-financeiras', target: 'credysystem', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Conexões CD/Operação
    { id: 'e25', source: 'especial-cd', target: 'lojas', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e26', source: 'infl-ecommerce', target: 'ecommerce', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Conexões internas
    { id: 'e27', source: 'franquias', target: 'dissolve-brasil', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e28', source: 'caixa', target: 'financeiro', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e29', source: 'vendas', target: 'marketing', type: 'smoothstep', markerEnd: { type: MarkerType.ArrowClosed } },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(
    initialNodes.map(node => ({
      ...node,
      data: {
        ...node.data,
        onClick: () => {
          if (!editMode) {
            navigate('/departamentos', {
              state: { selectedDepartamento: node.data.label }
            });
          }
        }
      }
    }))
  );
  
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-[800px]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
        panOnScroll
        selectionOnDrag
        panOnDrag={[1, 2]}
        minZoom={0.3}
        maxZoom={2}
      >
        <Controls />
        <Background variant={BackgroundVariant.Lines} gap={20} size={1} />
      </ReactFlow>
    </div>
  );
};

export default MapaContextoReactFlow;