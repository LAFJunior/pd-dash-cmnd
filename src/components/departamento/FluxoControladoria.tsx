import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card, CardContent } from '@/components/ui/card';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'default',
    position: { x: 250, y: 25 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">📄</div>
          <div className="font-medium">Recebimento</div>
          <div className="text-xs text-gray-600">Documentação e relatórios</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 150,
      height: 80,
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 250, y: 150 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">👁️</div>
          <div className="font-medium">Análise</div>
          <div className="text-xs text-gray-600">Validação e conferência</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #eab308, #ca8a04)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 150,
      height: 80,
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 250, y: 275 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">✅</div>
          <div className="font-medium">Aprovação</div>
          <div className="text-xs text-gray-600">Decisão e autorização</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 150,
      height: 80,
    },
  },
  {
    id: '4',
    type: 'default',
    position: { x: 250, y: 400 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">⚙️</div>
          <div className="font-medium">Execução</div>
          <div className="text-xs text-gray-600">Lançamento e processamento</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 150,
      height: 80,
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 250, y: 525 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">🗂️</div>
          <div className="font-medium">Arquivo</div>
          <div className="text-xs text-gray-600">Armazenamento e registro</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #6b7280, #4b5563)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 150,
      height: 80,
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#3b82f6',
    },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#eab308', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#eab308',
    },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#22c55e', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#22c55e',
    },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#a855f7', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#a855f7',
    },
  },
];

const FluxoControladoria = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <Card className="w-full h-full">
      <CardContent>
        <div style={{ width: '100%', height: '500px' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="top-right"
            style={{ backgroundColor: "#F7F9FB" }}
          >
            <MiniMap zoomable pannable />
            <Controls />
            <Background />
          </ReactFlow>
        </div>
        
        <div className="mt-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
          <h4 className="font-semibold text-center mb-3">Legenda do Fluxo</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded"></div>
              <span>Recebimento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded"></div>
              <span>Análise</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-700 rounded"></div>
              <span>Aprovação</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded"></div>
              <span>Execução</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-gray-500 to-gray-700 rounded"></div>
              <span>Arquivo</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluxoControladoria;