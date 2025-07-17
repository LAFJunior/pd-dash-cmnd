import React, { useCallback } from 'react';
import {
  ReactFlow,
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  Connection,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const initialNodes = [
  {
    id: '1',
    type: 'default',
    position: { x: 50, y: 50 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-1">📥</div>
          <div className="font-semibold">Importação</div>
          <div className="text-xs text-gray-600">Documentos Fiscais</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      width: 180,
      height: 80,
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 300, y: 50 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-1">🔍</div>
          <div className="font-semibold">Conferência</div>
          <div className="text-xs text-gray-600">Validação e Ajustes</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      width: 180,
      height: 80,
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 550, y: 50 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-1">📊</div>
          <div className="font-semibold">Apuração</div>
          <div className="text-xs text-gray-600">Cálculos Tributários</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      width: 180,
      height: 80,
    },
  },
  {
    id: '4',
    type: 'default',
    position: { x: 175, y: 200 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-1">📄</div>
          <div className="font-semibold">Obrigações</div>
          <div className="text-xs text-gray-600">Entregas Acessórias</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      width: 180,
      height: 80,
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 425, y: 200 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-1">✅</div>
          <div className="font-semibold">Controle</div>
          <div className="text-xs text-gray-600">Monitoramento</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      width: 180,
      height: 80,
    },
  },
  {
    id: '6',
    type: 'default',
    position: { x: 300, y: 350 },
    data: { 
      label: (
        <div className="text-center">
          <div className="text-2xl mb-1">🗂️</div>
          <div className="font-semibold">Arquivo</div>
          <div className="text-xs text-gray-600">Documentação</div>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      color: '#333',
      border: 'none',
      borderRadius: '10px',
      width: 180,
      height: 80,
    },
  },
];

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#667eea', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#667eea',
    },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#f093fb', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#f093fb',
    },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#4facfe', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#4facfe',
    },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#43e97b', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#43e97b',
    },
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#fa709a', strokeWidth: 3 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      color: '#fa709a',
    },
  },
];

const FluxoFiscal = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Fluxo do Departamento Fiscal
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ width: '100%', height: '500px' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
            attributionPosition="bottom-left"
            style={{ backgroundColor: "#f8fafc" }}
          >
            <MiniMap 
              zoomable 
              pannable 
              style={{ 
                backgroundColor: "#f1f5f9",
                border: "1px solid #e2e8f0"
              }}
            />
            <Controls />
            <Background 
              color="#e2e8f0" 
              gap={20} 
              size={1}
            />
          </ReactFlow>
        </div>
        
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600"></div>
            <span>Importação de Documentos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-600"></div>
            <span>Conferência e Validação</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600"></div>
            <span>Apuração Tributária</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-teal-600"></div>
            <span>Entregas Obrigatórias</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600"></div>
            <span>Controle e Monitoramento</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-pink-300"></div>
            <span>Arquivo e Documentação</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluxoFiscal;