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
          <div className="text-lg">📋</div>
          <div className="font-medium">Planejamento</div>
          <div className="text-xs text-gray-600">Coordenação</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 160,
      height: 80,
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 250, y: 140 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">⚡</div>
          <div className="font-medium">Execução</div>
          <div className="text-xs text-gray-600">Auditores e conferentes</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #eab308, #ca8a04)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 160,
      height: 80,
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 250, y: 255 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">🔧</div>
          <div className="font-medium">Tratamento</div>
          <div className="text-xs text-gray-600">Estoque/caixa/chamados</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #f59e0b, #d97706)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 160,
      height: 80,
    },
  },
  {
    id: '4',
    type: 'default',
    position: { x: 250, y: 370 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">⚠️</div>
          <div className="font-medium">Identificação</div>
          <div className="text-xs text-gray-600">Não conformidades</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #ef4444, #dc2626)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 160,
      height: 80,
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 250, y: 485 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">📊</div>
          <div className="font-medium">Encerramento</div>
          <div className="text-xs text-gray-600">Topdesk, relatórios</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #22c55e, #16a34a)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 160,
      height: 80,
    },
  },
  {
    id: '6',
    type: 'default',
    position: { x: 250, y: 600 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-lg">🔄</div>
          <div className="font-medium">Acompanhamento</div>
          <div className="text-xs text-gray-600">Melhoria contínua</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #a855f7, #7c3aed)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      width: 160,
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
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#f59e0b',
    },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#ef4444', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#ef4444',
    },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#22c55e', strokeWidth: 2 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#22c55e',
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
        <div style={{ width: '100%', height: '600px' }}>
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded"></div>
              <span>Planejamento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded"></div>
              <span>Execução</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-amber-700 rounded"></div>
              <span>Tratamento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-red-700 rounded"></div>
              <span>Identificação</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-700 rounded"></div>
              <span>Encerramento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded"></div>
              <span>Acompanhamento</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluxoControladoria;