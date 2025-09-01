import React from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  Node,
  Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'default',
    position: { x: 400, y: 50 },
    data: { 
      label: 'Gestão Estratégica de Pessoal' 
    },
    style: {
      background: 'hsl(var(--primary))',
      color: 'hsl(var(--primary-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      padding: '12px 16px',
      minWidth: '200px',
      textAlign: 'center',
    },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 50, y: 200 },
    data: { 
      label: 'Admissões e Integração' 
    },
    style: {
      background: 'hsl(var(--secondary))',
      color: 'hsl(var(--secondary-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '10px 14px',
      minWidth: '150px',
      textAlign: 'center',
    },
  },
  {
    id: '3',
    type: 'default',
    position: { x: 250, y: 200 },
    data: { 
      label: 'Controle de Jornada' 
    },
    style: {
      background: 'hsl(var(--secondary))',
      color: 'hsl(var(--secondary-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '10px 14px',
      minWidth: '150px',
      textAlign: 'center',
    },
  },
  {
    id: '4',
    type: 'default',
    position: { x: 450, y: 200 },
    data: { 
      label: 'Gestão de Benefícios' 
    },
    style: {
      background: 'hsl(var(--secondary))',
      color: 'hsl(var(--secondary-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '10px 14px',
      minWidth: '150px',
      textAlign: 'center',
    },
  },
  {
    id: '5',
    type: 'default',
    position: { x: 650, y: 200 },
    data: { 
      label: 'Folha de Pagamento' 
    },
    style: {
      background: 'hsl(var(--secondary))',
      color: 'hsl(var(--secondary-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '10px 14px',
      minWidth: '150px',
      textAlign: 'center',
    },
  },
  {
    id: '6',
    type: 'default',
    position: { x: 150, y: 350 },
    data: { 
      label: 'Obrigações Legais' 
    },
    style: {
      background: 'hsl(var(--accent))',
      color: 'hsl(var(--accent-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '10px 14px',
      minWidth: '140px',
      textAlign: 'center',
    },
  },
  {
    id: '7',
    type: 'default',
    position: { x: 350, y: 350 },
    data: { 
      label: 'Férias/Licenças' 
    },
    style: {
      background: 'hsl(var(--accent))',
      color: 'hsl(var(--accent-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '10px 14px',
      minWidth: '140px',
      textAlign: 'center',
    },
  },
  {
    id: '8',
    type: 'default',
    position: { x: 550, y: 350 },
    data: { 
      label: 'Desligamentos' 
    },
    style: {
      background: 'hsl(var(--accent))',
      color: 'hsl(var(--accent-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      fontSize: '12px',
      padding: '10px 14px',
      minWidth: '140px',
      textAlign: 'center',
    },
  },
  {
    id: '9',
    type: 'default',
    position: { x: 400, y: 500 },
    data: { 
      label: 'Atendimento e Suporte' 
    },
    style: {
      background: 'hsl(var(--muted))',
      color: 'hsl(var(--muted-foreground))',
      border: '1px solid hsl(var(--border))',
      borderRadius: '8px',
      fontSize: '12px',
      fontWeight: '500',
      padding: '10px 14px',
      minWidth: '160px',
      textAlign: 'center',
    },
  },
];

const initialEdges: Edge[] = [
  // Gestão Estratégica conecta com todos os processos principais
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep', style: { stroke: 'hsl(var(--primary))' } },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep', style: { stroke: 'hsl(var(--primary))' } },
  { id: 'e1-4', source: '1', target: '4', type: 'smoothstep', style: { stroke: 'hsl(var(--primary))' } },
  { id: 'e1-5', source: '1', target: '5', type: 'smoothstep', style: { stroke: 'hsl(var(--primary))' } },
  
  // Processos principais conectam com processos secundários
  { id: 'e2-6', source: '2', target: '6', type: 'smoothstep', style: { stroke: 'hsl(var(--secondary))' } },
  { id: 'e3-7', source: '3', target: '7', type: 'smoothstep', style: { stroke: 'hsl(var(--secondary))' } },
  { id: 'e4-7', source: '4', target: '7', type: 'smoothstep', style: { stroke: 'hsl(var(--secondary))' } },
  { id: 'e5-8', source: '5', target: '8', type: 'smoothstep', style: { stroke: 'hsl(var(--secondary))' } },
  
  // Processos secundários conectam com atendimento
  { id: 'e6-9', source: '6', target: '9', type: 'smoothstep', style: { stroke: 'hsl(var(--accent))' } },
  { id: 'e7-9', source: '7', target: '9', type: 'smoothstep', style: { stroke: 'hsl(var(--accent))' } },
  { id: 'e8-9', source: '8', target: '9', type: 'smoothstep', style: { stroke: 'hsl(var(--accent))' } },
];

export const FluxoDepartamentoPessoal: React.FC = () => {
  return (
    <div className="h-96 w-full">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        fitView
        attributionPosition="bottom-left"
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        style={{ backgroundColor: 'hsl(var(--background))' }}
      >
        <Controls />
        <Background color="hsl(var(--muted))" gap={16} />
      </ReactFlow>
    </div>
  );
};