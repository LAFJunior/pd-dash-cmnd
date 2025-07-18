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
import { Card, CardContent } from '@/components/ui/card';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'default',
    position: { x: 50, y: 50 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-2">📥</div>
          <div className="font-semibold">Recebimento</div>
          <div className="text-xs text-muted-foreground">Produtos</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #dbeafe, #3b82f6)',
      border: '2px solid #2563eb',
      borderRadius: '12px',
      width: 120,
      height: 80,
      fontSize: '12px',
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 300, y: 50 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-2">🧾</div>
          <div className="font-semibold">Conferência</div>
          <div className="text-xs text-muted-foreground">NF + Produto</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #f3e8ff, #8b5cf6)',
      border: '2px solid #7c3aed',
      borderRadius: '12px',
      width: 120,
      height: 80,
      fontSize: '12px',
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 550, y: 50 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-2">📦</div>
          <div className="font-semibold">Armazenamento</div>
          <div className="text-xs text-muted-foreground">Organização</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #dcfce7, #22c55e)',
      border: '2px solid #16a34a',
      borderRadius: '12px',
      width: 120,
      height: 80,
      fontSize: '12px',
    },
  },
  {
    id: '4',
    type: 'default',
    position: { x: 50, y: 250 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-2">🚛</div>
          <div className="font-semibold">Carga e Descarga</div>
          <div className="text-xs text-muted-foreground">Organização das remessas</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #fef3c7, #f59e0b)',
      border: '2px solid #d97706',
      borderRadius: '12px',
      width: 120,
      height: 80,
      fontSize: '12px',
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 300, y: 250 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-2">🧾</div>
          <div className="font-semibold">Separação</div>
          <div className="text-xs text-muted-foreground">Pedidos/Insumos</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #e0f2fe, #0ea5e9)',
      border: '2px solid #0284c7',
      borderRadius: '12px',
      width: 120,
      height: 80,
      fontSize: '12px',
    },
  },
  {
    id: '6',
    type: 'default',
    position: { x: 550, y: 250 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-2">📤</div>
          <div className="font-semibold">Expedição</div>
          <div className="text-xs text-muted-foreground">Envio ao destino</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #fce7f3, #ec4899)',
      border: '2px solid #db2777',
      borderRadius: '12px',
      width: 120,
      height: 80,
      fontSize: '12px',
    },
  },
  {
    id: '7',
    type: 'default',
    position: { x: 300, y: 450 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-2">🔁</div>
          <div className="font-semibold">Remanejamento</div>
          <div className="text-xs text-muted-foreground">Redistribuição entre lojas</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #f1f5f9, #64748b)',
      border: '2px solid #475569',
      borderRadius: '12px',
      width: 120,
      height: 80,
      fontSize: '12px',
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
    style: { stroke: '#2563eb', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#2563eb',
    },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#7c3aed', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#7c3aed',
    },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#16a34a', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#16a34a',
    },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#d97706', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#d97706',
    },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#0284c7', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#0284c7',
    },
  },
  {
    id: 'e6-7',
    source: '6',
    target: '7',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#db2777', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#db2777',
    },
  },
];

const FluxoSaoJoseCampos: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <Card className="w-full h-[600px]">
      <CardContent className="p-0 h-full relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          attributionPosition="top-right"
        >
          <MiniMap zoomable pannable />
          <Controls />
          <Background />
        </ReactFlow>
        
        <div className="mt-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
          <h4 className="font-semibold text-center mb-3">Legenda do Fluxo</h4>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded"></div>
              <span>Recebimento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded"></div>
              <span>Conferência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-700 rounded"></div>
              <span>Armazenamento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded"></div>
              <span>Carga/Descarga</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded"></div>
              <span>Separação</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-pink-700 rounded"></div>
              <span>Expedição</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-gray-500 to-gray-700 rounded"></div>
              <span>Remanejamento</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluxoSaoJoseCampos;
