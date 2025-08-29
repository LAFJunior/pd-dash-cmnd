import React from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Background,
  Controls,
  ConnectionMode,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { FileText, Calculator, CreditCard, BookOpen, FileCheck } from 'lucide-react';

const nodes: Node[] = [
  {
    id: '1',
    type: 'default',
    position: { x: 150, y: 50 },
    data: { 
      label: (
        <div className="flex flex-col items-center gap-2 p-2">
          <FileText className="w-6 h-6 text-blue-600" />
          <span className="text-sm font-medium text-center">Registro das Despesas</span>
          <span className="text-xs text-gray-500 text-center">Comprovantes físicos/digitais</span>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #EBF8FF 0%, #DBEAFE 100%)',
      border: '2px solid #3B82F6',
      borderRadius: '12px',
      width: 180,
      height: 100,
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 400, y: 50 },
    data: { 
      label: (
        <div className="flex flex-col items-center gap-2 p-2">
          <Calculator className="w-6 h-6 text-green-600" />
          <span className="text-sm font-medium text-center">Apurações Fiscais</span>
          <span className="text-xs text-gray-500 text-center">Dados fiscais</span>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
      border: '2px solid #22C55E',
      borderRadius: '12px',
      width: 180,
      height: 100,
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 650, y: 50 },
    data: { 
      label: (
        <div className="flex flex-col items-center gap-2 p-2">
          <CreditCard className="w-6 h-6 text-purple-600" />
          <span className="text-sm font-medium text-center">Conciliações Financeiras</span>
          <span className="text-xs text-gray-500 text-center">Conferência de caixas, extratos</span>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%)',
      border: '2px solid #A855F7',
      borderRadius: '12px',
      width: 180,
      height: 100,
    },
  },
  {
    id: '4',
    type: 'default',
    position: { x: 400, y: 200 },
    data: { 
      label: (
        <div className="flex flex-col items-center gap-2 p-2">
          <BookOpen className="w-6 h-6 text-orange-600" />
          <span className="text-sm font-medium text-center">Fechamento Contábil Mensal</span>
          <span className="text-xs text-gray-500 text-center">Conciliações</span>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)',
      border: '2px solid #EA580C',
      borderRadius: '12px',
      width: 180,
      height: 100,
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 150, y: 200 },
    data: { 
      label: (
        <div className="flex flex-col items-center gap-2 p-2">
          <FileCheck className="w-6 h-6 text-red-600" />
          <span className="text-sm font-medium text-center">Obrigações Acessórias e Lucro Real</span>
          <span className="text-xs text-gray-500 text-center">ECD/ECF, balancetes e ajustes fiscais</span>
        </div>
      ) 
    },
    style: {
      background: 'linear-gradient(135deg, #FEF2F2 0%, #FECACA 100%)',
      border: '2px solid #DC2626',
      borderRadius: '12px',
      width: 180,
      height: 100,
    },
  },
];

const edges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#3B82F6', strokeWidth: 2 },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#22C55E', strokeWidth: 2 },
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#A855F7', strokeWidth: 2 },
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#EA580C', strokeWidth: 2 },
  },
];

const FluxoContabil: React.FC = () => {
  return (
    <div className="w-full h-96 bg-gradient-to-br from-gray-50 to-white rounded-lg border shadow-sm">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        connectionMode={ConnectionMode.Loose}
        fitView
        attributionPosition="bottom-left"
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
      >
        <Background color="#f1f5f9" gap={20} />
        <Controls showInteractive={false} />
      </ReactFlow>
    </div>
  );
};

export default FluxoContabil;