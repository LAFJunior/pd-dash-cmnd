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
    // Linha superior
    { id: 'diretor-presidente', type: 'department', position: { x: 500, y: 50 }, data: { label: 'Diretor Presidente', color: '#E8E8E8', width: 120, height: 40 } },
    
    // Segunda linha - Diretores
    { id: 'diretor-comercial', type: 'department', position: { x: 200, y: 150 }, data: { label: 'Diretor Comercial', color: '#E8E8E8', width: 120, height: 40 } },
    { id: 'diretor-administrativo', type: 'department', position: { x: 400, y: 150 }, data: { label: 'Diretor Administrativo', color: '#E8E8E8', width: 120, height: 40 } },
    { id: 'diretor-financeiro', type: 'department', position: { x: 600, y: 150 }, data: { label: 'Diretor Financeiro', color: '#E8E8E8', width: 120, height: 40 } },
    { id: 'diretor-operacional', type: 'department', position: { x: 800, y: 150 }, data: { label: 'Diretor Operacional', color: '#E8E8E8', width: 120, height: 40 } },
    
    // Terceira linha - Gerentes e Coordenadores
    { id: 'gerente-vendas', type: 'department', position: { x: 50, y: 250 }, data: { label: 'Gerente de Vendas', color: '#D4E6D4', width: 110, height: 40 } },
    { id: 'coord-marketing', type: 'department', position: { x: 200, y: 250 }, data: { label: 'Coord. Marketing', color: '#D4E6D4', width: 110, height: 40 } },
    { id: 'coord-ecommerce', type: 'department', position: { x: 350, y: 250 }, data: { label: 'Coord. E-commerce', color: '#D4E6D4', width: 110, height: 40 } },
    
    { id: 'gerente-rh', type: 'department', position: { x: 500, y: 250 }, data: { label: 'Gerente de RH', color: '#E8D4D4', width: 110, height: 40 } },
    { id: 'coord-ti', type: 'department', position: { x: 650, y: 250 }, data: { label: 'Coord. T.I.', color: '#E8D4D4', width: 110, height: 40 } },
    
    { id: 'gerente-financeiro', type: 'department', position: { x: 800, y: 250 }, data: { label: 'Gerente Financeiro', color: '#D4D4E8', width: 110, height: 40 } },
    { id: 'coord-controladoria', type: 'department', position: { x: 950, y: 250 }, data: { label: 'Coord. Controladoria', color: '#D4D4E8', width: 110, height: 40 } },
    
    { id: 'gerente-operacoes', type: 'department', position: { x: 1100, y: 250 }, data: { label: 'Gerente de Operações', color: '#F0E8D4', width: 110, height: 40 } },
    
    // Quarta linha - Supervisores e Coordenadores
    { id: 'supervisor-vendas', type: 'department', position: { x: 50, y: 350 }, data: { label: 'Supervisor de Vendas', color: '#D4E6D4', width: 100, height: 35 } },
    { id: 'analista-marketing', type: 'department', position: { x: 200, y: 350 }, data: { label: 'Analista Marketing', color: '#D4E6D4', width: 100, height: 35 } },
    { id: 'analista-ecommerce', type: 'department', position: { x: 350, y: 350 }, data: { label: 'Analista E-commerce', color: '#D4E6D4', width: 100, height: 35 } },
    
    { id: 'analista-rh', type: 'department', position: { x: 500, y: 350 }, data: { label: 'Analista RH', color: '#E8D4D4', width: 100, height: 35 } },
    { id: 'analista-ti', type: 'department', position: { x: 650, y: 350 }, data: { label: 'Analista T.I.', color: '#E8D4D4', width: 100, height: 35 } },
    
    { id: 'analista-financeiro', type: 'department', position: { x: 800, y: 350 }, data: { label: 'Analista Financeiro', color: '#D4D4E8', width: 100, height: 35 } },
    { id: 'analista-controladoria', type: 'department', position: { x: 950, y: 350 }, data: { label: 'Analista Controladoria', color: '#D4D4E8', width: 100, height: 35 } },
    
    { id: 'supervisor-cd', type: 'department', position: { x: 1100, y: 350 }, data: { label: 'Supervisor CD', color: '#F0E8D4', width: 100, height: 35 } },
    { id: 'supervisor-lojas', type: 'department', position: { x: 1250, y: 350 }, data: { label: 'Supervisor Lojas', color: '#F0E8D4', width: 100, height: 35 } },
    
    // Quinta linha - Assistentes e Auxiliares
    { id: 'assistente-vendas', type: 'department', position: { x: 50, y: 450 }, data: { label: 'Assistente Vendas', color: '#D4E6D4', width: 90, height: 30 } },
    { id: 'aux-marketing', type: 'department', position: { x: 200, y: 450 }, data: { label: 'Aux. Marketing', color: '#D4E6D4', width: 90, height: 30 } },
    { id: 'aux-ecommerce', type: 'department', position: { x: 350, y: 450 }, data: { label: 'Aux. E-commerce', color: '#D4E6D4', width: 90, height: 30 } },
    
    { id: 'assistente-rh', type: 'department', position: { x: 500, y: 450 }, data: { label: 'Assistente RH', color: '#E8D4D4', width: 90, height: 30 } },
    { id: 'aux-ti', type: 'department', position: { x: 650, y: 450 }, data: { label: 'Aux. T.I.', color: '#E8D4D4', width: 90, height: 30 } },
    
    { id: 'assistente-financeiro', type: 'department', position: { x: 800, y: 450 }, data: { label: 'Assistente Financeiro', color: '#D4D4E8', width: 90, height: 30 } },
    { id: 'aux-controladoria', type: 'department', position: { x: 950, y: 450 }, data: { label: 'Aux. Controladoria', color: '#D4D4E8', width: 90, height: 30 } },
    
    { id: 'operador-cd', type: 'department', position: { x: 1100, y: 450 }, data: { label: 'Operador CD', color: '#F0E8D4', width: 90, height: 30 } },
    { id: 'vendedor', type: 'department', position: { x: 1250, y: 450 }, data: { label: 'Vendedor', color: '#F0E8D4', width: 90, height: 30 } },
    
    // Sexta linha - Executores
    { id: 'executores-comercial', type: 'department', position: { x: 200, y: 550 }, data: { label: 'Executores', color: '#D4E6D4', width: 150, height: 30 } },
    { id: 'executores-admin', type: 'department', position: { x: 575, y: 550 }, data: { label: 'Executores', color: '#E8D4D4', width: 150, height: 30 } },
    { id: 'executores-financeiro', type: 'department', position: { x: 875, y: 550 }, data: { label: 'Executores', color: '#D4D4E8', width: 150, height: 30 } },
    { id: 'executores-operacional', type: 'department', position: { x: 1175, y: 550 }, data: { label: 'Executores', color: '#F0E8D4', width: 150, height: 30 } },
  ];

  // Definindo as conexões hierárquicas
  const initialEdges: Edge[] = [
    // Conexões do Diretor Presidente
    { id: 'e1', source: 'diretor-presidente', target: 'diretor-comercial', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e2', source: 'diretor-presidente', target: 'diretor-administrativo', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e3', source: 'diretor-presidente', target: 'diretor-financeiro', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e4', source: 'diretor-presidente', target: 'diretor-operacional', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Área Comercial
    { id: 'e5', source: 'diretor-comercial', target: 'gerente-vendas', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e6', source: 'diretor-comercial', target: 'coord-marketing', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e7', source: 'diretor-comercial', target: 'coord-ecommerce', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e8', source: 'gerente-vendas', target: 'supervisor-vendas', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e9', source: 'coord-marketing', target: 'analista-marketing', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e10', source: 'coord-ecommerce', target: 'analista-ecommerce', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e11', source: 'supervisor-vendas', target: 'assistente-vendas', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e12', source: 'analista-marketing', target: 'aux-marketing', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e13', source: 'analista-ecommerce', target: 'aux-ecommerce', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Área Administrativa
    { id: 'e14', source: 'diretor-administrativo', target: 'gerente-rh', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e15', source: 'diretor-administrativo', target: 'coord-ti', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e16', source: 'gerente-rh', target: 'analista-rh', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e17', source: 'coord-ti', target: 'analista-ti', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e18', source: 'analista-rh', target: 'assistente-rh', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e19', source: 'analista-ti', target: 'aux-ti', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Área Financeira
    { id: 'e20', source: 'diretor-financeiro', target: 'gerente-financeiro', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e21', source: 'diretor-financeiro', target: 'coord-controladoria', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e22', source: 'gerente-financeiro', target: 'analista-financeiro', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e23', source: 'coord-controladoria', target: 'analista-controladoria', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e24', source: 'analista-financeiro', target: 'assistente-financeiro', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e25', source: 'analista-controladoria', target: 'aux-controladoria', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Área Operacional
    { id: 'e26', source: 'diretor-operacional', target: 'gerente-operacoes', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e27', source: 'gerente-operacoes', target: 'supervisor-cd', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e28', source: 'gerente-operacoes', target: 'supervisor-lojas', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e29', source: 'supervisor-cd', target: 'operador-cd', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e30', source: 'supervisor-lojas', target: 'vendedor', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    // Conexões para executores
    { id: 'e31', source: 'assistente-vendas', target: 'executores-comercial', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e32', source: 'aux-marketing', target: 'executores-comercial', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e33', source: 'aux-ecommerce', target: 'executores-comercial', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e34', source: 'assistente-rh', target: 'executores-admin', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e35', source: 'aux-ti', target: 'executores-admin', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e36', source: 'assistente-financeiro', target: 'executores-financeiro', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e37', source: 'aux-controladoria', target: 'executores-financeiro', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    
    { id: 'e38', source: 'operador-cd', target: 'executores-operacional', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
    { id: 'e39', source: 'vendedor', target: 'executores-operacional', type: 'straight', markerEnd: { type: MarkerType.ArrowClosed } },
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