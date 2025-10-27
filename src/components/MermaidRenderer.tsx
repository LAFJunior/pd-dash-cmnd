import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

interface MermaidRendererProps {
  code: string;
}

export const MermaidRenderer = ({ code }: MermaidRendererProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mermaidInitialized, setMermaidInitialized] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize Mermaid only once
  useEffect(() => {
    if (!mermaidInitialized) {
      mermaid.initialize({ 
        startOnLoad: false,
        theme: "default",
        themeVariables: {
          primaryColor: '#f3f4f6',
          primaryTextColor: '#000',
          primaryBorderColor: '#d1d5db',
          lineColor: '#6b7280',
          secondaryColor: '#e5e7eb',
          tertiaryColor: '#f9fafb'
        },
        securityLevel: 'loose',
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true
        }
      });
      setMermaidInitialized(true);
    }
  }, [mermaidInitialized]);

  // Render diagram when code changes
  useEffect(() => {
    if (!ref.current || !mermaidInitialized) return;

    const currentId = `mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Clear previous content
    ref.current.innerHTML = '';
    setError(null);

    // Create the mermaid div
    const mermaidDiv = document.createElement('div');
    mermaidDiv.className = 'mermaid';
    mermaidDiv.id = currentId;
    mermaidDiv.textContent = code;
    ref.current.appendChild(mermaidDiv);

    // Render the diagram
    mermaid.run({
      nodes: [mermaidDiv],
    }).catch((err) => {
      console.error('Mermaid render error:', err);
      setError('Erro ao renderizar diagrama. Verifique a sintaxe.');
      if (ref.current) {
        ref.current.innerHTML = `<div class="text-red-600 p-4 bg-red-50 rounded border border-red-200">
          <p class="font-semibold">Erro de Sintaxe no Diagrama</p>
          <p class="text-sm mt-1">${err.message || 'Sintaxe inválida no diagrama Mermaid'}</p>
        </div>`;
      }
    });

    // Cleanup
    return () => {
      if (ref.current) {
        ref.current.innerHTML = '';
      }
    };
  }, [code, mermaidInitialized]);

  if (error && !ref.current?.querySelector('.mermaid')) {
    return (
      <div className="my-4 w-full overflow-x-auto bg-white p-4 rounded-lg border border-red-200 shadow-sm">
        <div className="text-red-600">
          <p className="font-semibold">Erro de Sintaxe no Diagrama Mermaid</p>
          <p className="text-sm mt-1">{error}</p>
          <details className="mt-2">
            <summary className="cursor-pointer text-sm">Ver código</summary>
            <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-x-auto">
              {code}
            </pre>
          </details>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={ref} 
      className="my-4 w-full overflow-x-auto bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
    />
  );
};
