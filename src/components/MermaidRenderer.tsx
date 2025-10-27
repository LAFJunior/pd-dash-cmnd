import { useEffect, useRef } from "react";
import mermaid from "mermaid";

interface MermaidRendererProps {
  code: string;
}

export const MermaidRenderer = ({ code }: MermaidRendererProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ 
      startOnLoad: true, 
      theme: "default",
      themeVariables: {
        primaryColor: '#f3f4f6',
        primaryTextColor: '#000',
        primaryBorderColor: '#d1d5db',
        lineColor: '#6b7280',
        secondaryColor: '#e5e7eb',
        tertiaryColor: '#f9fafb'
      }
    });
    
    if (ref.current) {
      ref.current.innerHTML = `<div class="mermaid">${code}</div>`;
      mermaid.run({ nodes: [ref.current] });
    }
  }, [code]);

  return (
    <div 
      ref={ref} 
      className="my-4 w-full overflow-x-auto bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
    />
  );
};
