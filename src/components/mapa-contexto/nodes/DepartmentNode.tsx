import React from 'react';
import { Handle, Position } from '@xyflow/react';

interface DepartmentNodeProps {
  data: {
    label: string;
    color: string;
    textColor?: string;
    fontSize?: string;
    width?: number;
    height?: number;
    onClick?: () => void;
  };
}

const DepartmentNode: React.FC<DepartmentNodeProps> = ({ data }) => {
  return (
    <div
      className="relative flex items-center justify-center text-center cursor-pointer border border-gray-400 rounded-sm"
      style={{
        backgroundColor: data.color,
        color: data.textColor || '#000',
        fontSize: data.fontSize || '12px',
        width: data.width || 100,
        height: data.height || 40,
        padding: '4px',
        lineHeight: '1.2'
      }}
      onClick={data.onClick}
    >
      <div className="font-medium">{data.label}</div>
      
      {/* Handles para conexões */}
      <Handle type="target" position={Position.Top} className="w-1 h-1 bg-transparent border-none" />
      <Handle type="source" position={Position.Bottom} className="w-1 h-1 bg-transparent border-none" />
      <Handle type="target" position={Position.Left} className="w-1 h-1 bg-transparent border-none" />
      <Handle type="source" position={Position.Right} className="w-1 h-1 bg-transparent border-none" />
    </div>
  );
};

export default DepartmentNode;