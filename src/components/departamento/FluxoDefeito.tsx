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
          <div className="text-xs text-muted-foreground">Produtos com defeito via remessa</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #fef3c7, #fbbf24)',
      border: '2px solid #f59e0b',
      borderRadius: '12px',
      width: 180,
      height: 120,
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
          <div className="text-2xl mb-2">🔍</div>
          <div className="font-semibold">Triagem</div>
          <div className="text-xs text-muted-foreground">Verificação e análise técnica do defeito</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #ddd6fe, #8b5cf6)',
      border: '2px solid #7c3aed',
      borderRadius: '12px',
      width: 180,
      height: 120,
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
          <div className="text-2xl mb-2">🗂</div>
          <div className="font-semibold">Organização</div>
          <div className="text-xs text-muted-foreground">Armazenamento por marca/departamento</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #dcfce7, #22c55e)',
      border: '2px solid #16a34a',
      borderRadius: '12px',
      width: 180,
      height: 120,
      fontSize: '12px',
    },
  },
  {
    id: '4',
    type: 'default',
    position: { x: 300, y: 250 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-2">♻</div>
          <div className="font-semibold">Destino Final</div>
          <div className="text-xs text-muted-foreground">Avaliar itens não indenizáveis</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #e0f2fe, #0ea5e9)',
      border: '2px solid #0284c7',
      borderRadius: '12px',
      width: 180,
      height: 120,
      fontSize: '12px',
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 550, y: 250 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-2">📝</div>
          <div className="font-semibold">Registro</div>
          <div className="text-xs text-muted-foreground">Atualização no sistema</div>
        </div>
      )
    },
    style: {
      background: 'linear-gradient(135deg, #fce7f3, #ec4899)',
      border: '2px solid #db2777',
      borderRadius: '12px',
      width: 180,
      height: 120,
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
    style: { stroke: '#f59e0b', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#f59e0b',
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
    style: { stroke: '#0284c7', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#0284c7',
    },
  },
];

const FluxoDefeito: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <Card className="w-full h-[600px]">
      <CardContent className="p-0 h-full">
        <div className="relative h-full">
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
          
          <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border shadow-sm">
            <h4 className="font-semibold text-center mb-3">Legenda do Fluxo</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded"></div>
                <span>Recebimento</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-purple-700 rounded"></div>
                <span>Triagem</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-700 rounded"></div>
                <span>Organização</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-700 rounded"></div>
                <span>Destino Final</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-pink-700 rounded"></div>
                <span>Registro</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluxoDefeito;