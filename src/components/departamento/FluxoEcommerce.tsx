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
    position: { x: 50, y: 50 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">🎯</div>
          <div className="font-medium">Planejamento</div>
          <div className="text-xs text-gray-600">Metas e Alinhamento</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 130,
      height: 80,
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 230, y: 50 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">📦</div>
          <div className="font-medium">Cadastro</div>
          <div className="text-xs text-gray-600">Coleta e Atualização</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 130,
      height: 80,
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 410, y: 50 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">💰</div>
          <div className="font-medium">Preços</div>
          <div className="text-xs text-gray-600">Política e Campanhas</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #eab308, #ca8a04)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 130,
      height: 80,
    },
  },
  {
    id: '4',
    type: 'default',
    position: { x: 50, y: 200 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">🛒</div>
          <div className="font-medium">Operação</div>
          <div className="text-xs text-gray-600">Pagamento e Expedição</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 130,
      height: 80,
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 230, y: 200 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">🚚</div>
          <div className="font-medium">Logística</div>
          <div className="text-xs text-gray-600">Controle de Entregas</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #f97316, #ea580c)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 130,
      height: 80,
    },
  },
  {
    id: '6',
    type: 'default',
    position: { x: 410, y: 200 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">🎧</div>
          <div className="font-medium">Pós-Venda</div>
          <div className="text-xs text-gray-600">Atendimento e Suporte</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #14b8a6, #0d9488)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 130,
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
    style: { stroke: '#22c55e', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#22c55e',
    },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#eab308', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#eab308',
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
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#f97316', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#f97316',
    },
  },
];

const FluxoEcommerce = () => {
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
        
        <div className="mt-4 bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg p-4">
          <h4 className="font-semibold text-center mb-3">Legenda do Fluxo</h4>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded"></div>
              <span>Planejamento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-700 rounded"></div>
              <span>Cadastro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded"></div>
              <span>Preços</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded"></div>
              <span>Operação</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-orange-700 rounded"></div>
              <span>Logística</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-teal-700 rounded"></div>
              <span>Pós-Venda</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluxoEcommerce;