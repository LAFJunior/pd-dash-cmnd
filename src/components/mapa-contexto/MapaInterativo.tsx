import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow, { 
  Background, 
  Controls, 
  MiniMap, 
  ReactFlowProvider,
  useNodesState, 
  useEdgesState,
  MarkerType
} from 'reactflow';
import 'reactflow/dist/style.css';

interface SubItem {
  id: string;
  label: string;
}

interface DepartamentoProps {
  id: string;
  titulo: string;
  tipo: 'backoffice' | 'varejo' | 'parceiros';
  color: string;
  conexoes?: string[];
  subItens?: string[];
}

const MapaInterativo = () => {
  const navigate = useNavigate();
  const [hoveredDepartamento, setHoveredDepartamento] = useState<string | null>(null);
  
  // Dados dos departamentos do BackOffice
  const departamentosBackoffice: DepartamentoProps[] = [
    { 
      id: 'compras',
      titulo: "Compras", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["fornecedores", "controladoria", "cd-operacoes", "lojas"],
      subItens: ["Análise de Compras", "Solicitação de Compras", "Controle de Estoque"]
    },
    { 
      id: 'financeiro',
      titulo: "Financeiro", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["contabil", "controladoria", "inst-financeiras"],
      subItens: ["Contas a Pagar", "Contas a Receber", "Fluxo de Caixa"]
    },
    { 
      id: 'principal',
      titulo: "Principal", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Diretoria Geral"],
      subItens: []
    },
    { 
      id: 'auditoria',
      titulo: "Auditoria", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Controladoria", "Contábil"],
      subItens: ["Controles Internos", "Auditorias", "Compliance"]
    },
    { 
      id: 'contabil',
      titulo: "Contábil", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Financeiro", "Fiscal", "Auditoria"],
      subItens: ["Fechamento Contábil", "Balancetes", "Tributos"]
    },
    { 
      id: 'ti',
      titulo: "T.I", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["E-Commerce", "Infracommerce", "RH"],
      subItens: ["Sistemas", "Infraestrutura", "Suporte"]
    },
    { 
      id: 'ti-operacoes',
      titulo: "T.I / Operações", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Lojas", "CD/Operações"],
      subItens: ["Sistemas", "Logística", "Operacional"]
    },
    { 
      id: 'recursos-humanos',
      titulo: "Recursos Humanos", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["DP", "T.I"],
      subItens: ["Recrutamento", "Treinamento", "Benefícios"]
    },
    { 
      id: 'fiscal',
      titulo: "Fiscal", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Contábil", "Controladoria"],
      subItens: ["Impostos", "Notas Fiscais", "Obrigações"]
    },
    { 
      id: 'marketing',
      titulo: "Marketing", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["E-Commerce", "Lojas", "Clientes"],
      subItens: ["Campanhas", "Mídia", "Marketing Digital"]
    },
    { 
      id: 'departamento-pessoal',
      titulo: "Departamento Pessoal", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["RH"],
      subItens: ["Folha de Pagamento", "Benefícios", "Contratos"]
    },
    { 
      id: 'controladoria',
      titulo: "Controladoria", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Financeiro", "Fiscal", "Compras", "Auditoria"],
      subItens: ["Orçamentos", "Análises", "Relatórios", "Indicadores"]
    },
    { 
      id: 'cd-loja-diferenciacao',
      titulo: "CD/Loja (Diferenciação)", 
      color: "#A0A0A0", 
      tipo: "backoffice", 
      conexoes: ["Lojas", "CD/Operações"],
      subItens: ["Processos CD", "Processos Loja", "Diferenciação"]
    },
    { 
      id: 'diretoria-geral',
      titulo: "Diretoria Geral", 
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["Principal"],
      subItens: []
    },
    {
      id: 'sao-jose-esporte-clube',
      titulo: "São José Esporte Clube",
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["SJEC", "Estádio"],
      subItens: []
    },
    {
      id: 'ti-processo-recursos',
      titulo: "T.I. Processo e Recursos",
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["T.I", "Lojas"],
      subItens: ["Sistemas", "Processos", "Recursos"]
    },
    {
      id: 'pessoal',
      titulo: "Pessoal",
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["RH", "DP"],
      subItens: ["Folha", "Contratações", "Demissões"] 
    },
    {
      id: 'suprimentos',
      titulo: "Suprimentos",
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["CD/Operações", "Lojas"],
      subItens: ["Estoque", "Distribuição", "Logística"]
    },
    {
      id: 'defeitos',
      titulo: "Defeitos",
      color: "#A0A0A0", 
      tipo: "backoffice",
      conexoes: ["Lojas", "CD/Operações"],
      subItens: ["Análise", "Tratativa", "Devolução"]
    },
  ];

  // Dados dos departamentos de Varejo
  const departamentosVarejo: DepartamentoProps[] = [
    { 
      id: 'lojas',
      titulo: "Lojas", 
      color: "#A0A0A0", 
      tipo: "varejo", 
      conexoes: ["clientes", "cd-operacoes", "suprimentos", "marketing"]
    },
    { 
      id: 'e-commerce',
      titulo: "E-Commerce", 
      color: "#A0A0A0", 
      tipo: "varejo", 
      conexoes: ["infracommerce", "marketing", "ti", "clientes"]
    },
    { 
      id: 'vendas',
      titulo: "Vendas",
      color: "#A0A0A0", 
      tipo: "varejo",
      conexoes: ["lojas", "marketing", "compras"]
    },
    { 
      id: 'servicos',
      titulo: "Serviços", 
      color: "#A0A0A0", 
      tipo: "varejo", 
      conexoes: ["lojas", "clientes"]
    },
  ];

  // Dados dos parceiros comerciais
  const parceirosComerciais: DepartamentoProps[] = [
    { 
      id: 'clientes',
      titulo: "Clientes", 
      color: "#A0A0A0", 
      tipo: "parceiros", 
      conexoes: ["lojas", "e-commerce", "marketing"]
    },
    { 
      id: 'fornecedores',
      titulo: "Fornecedores", 
      color: "#A0A0A0", 
      tipo: "parceiros", 
      conexoes: ["compras", "cd-operacoes"]
    },
    { 
      id: 'inst-financeiras',
      titulo: "Inst. Financeiras", 
      color: "#A0A0A0", 
      tipo: "parceiros", 
      conexoes: ["financeiro"]
    },
    { 
      id: 'categorias',
      titulo: "Categorias", 
      color: "#A0A0A0", 
      tipo: "parceiros", 
      conexoes: ["compras", "marketing", "lojas"]
    },
  ];

  const getAllDepartamentos = () => {
    return [...departamentosBackoffice, ...departamentosVarejo, ...parceirosComerciais];
  };

  // Convert departments to ReactFlow nodes
  const initialNodes = useMemo(() => {
    return getAllDepartamentos().map((dep) => {
      // Use relative positioning with x and y values converted to coordinates
      // These values need to be adjusted based on your specific layout
      let posX = 0;
      let posY = 0;
      
      // Map departamento ID to position (this is just an example, adjust coordinates as needed)
      switch(dep.id) {
        case 'compras': posX = 420; posY = 230; break;
        case 'financeiro': posX = 600; posY = 230; break;
        case 'principal': posX = 240; posY = 70; break;
        case 'auditoria': posX = 420; posY = 70; break;
        case 'contabil': posX = 600; posY = 70; break;
        case 'ti': posX = 420; posY = 390; break;
        case 'ti-operacoes': posX = 600; posY = 390; break;
        case 'recursos-humanos': posX = 780; posY = 70; break;
        case 'fiscal': posX = 780; posY = 230; break;
        case 'marketing': posX = 960; posY = 230; break;
        case 'departamento-pessoal': posX = 960; posY = 70; break;
        case 'controladoria': posX = 780; posY = 390; break;
        case 'cd-loja-diferenciacao': posX = 960; posY = 390; break;
        case 'diretoria-geral': posX = 240; posY = 140; break;
        case 'sao-jose-esporte-clube': posX = 240; posY = 530; break;
        case 'ti-processo-recursos': posX = 420; posY = 550; break;
        case 'pessoal': posX = 600; posY = 550; break;
        case 'suprimentos': posX = 780; posY = 550; break;
        case 'defeitos': posX = 960; posY = 550; break;
        case 'lojas': posX = 1140; posY = 230; break;
        case 'e-commerce': posX = 1140; posY = 450; break;
        case 'vendas': posX = 240; posY = 240; break;
        case 'servicos': posX = 1140; posY = 550; break;
        case 'clientes': posX = 1320; posY = 260; break;
        case 'fornecedores': posX = 60; posY = 260; break;
        case 'inst-financeiras': posX = 650; posY = 770; break;
        case 'categorias': posX = 960; posY = 750; break;
        default: break;
      }

      // Set node color based on department type
      let className = '';
      if (dep.tipo === 'backoffice') className = 'bg-[#4C72B1]';
      if (dep.tipo === 'varejo') className = 'bg-[#499B54]';
      if (dep.tipo === 'parceiros') className = 'bg-[#E39D25]';

      return {
        id: dep.id,
        position: { x: posX, y: posY },
        data: { 
          label: dep.titulo,
          tipo: dep.tipo,
          subItens: dep.subItens || []
        },
        className: `${className} rounded p-2 text-white`,
        style: { width: 120, height: 50, background: dep.color },
      };
    });
  }, []);

  // Create edges based on department connections
  const initialEdges = useMemo(() => {
    const edges = [];
    getAllDepartamentos().forEach(dep => {
      if (dep.conexoes) {
        dep.conexoes.forEach(conexao => {
          // Only create edges for valid connections
          if (getAllDepartamentos().find(d => d.id === conexao)) {
            edges.push({
              id: `${dep.id}-${conexao}`,
              source: dep.id,
              target: conexao,
              type: 'smoothstep',
              animated: false,
              style: { stroke: '#333' },
              markerEnd: {
                type: MarkerType.ArrowClosed,
                color: '#333',
              },
            });
          }
        });
      }
    });
    return edges;
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleNodeClick = (event, node) => {
    navigate(`/departamentos`, { state: { selectedDepartamento: node.data.label, tipo: node.data.tipo } });
  };

  // This will highlight connected nodes when hovering
  const onNodeMouseEnter = useCallback((event, node) => {
    setHoveredDepartamento(node.id);
    
    // Highlight the hovered node
    setNodes(nds => 
      nds.map(n => ({
        ...n,
        style: {
          ...n.style,
          opacity: n.id === node.id ? 1 : 0.5,
          border: n.id === node.id ? '2px solid #000' : n.style.border,
        },
      }))
    );

    // Highlight connected edges
    setEdges(eds => 
      eds.map(e => ({
        ...e,
        style: {
          ...e.style,
          stroke: (e.source === node.id || e.target === node.id) ? '#000' : '#333',
          strokeWidth: (e.source === node.id || e.target === node.id) ? 2 : 1,
          opacity: (e.source === node.id || e.target === node.id) ? 1 : 0.3,
        }
      }))
    );
  }, [setNodes, setEdges]);

  const onNodeMouseLeave = useCallback(() => {
    setHoveredDepartamento(null);
    
    // Reset all node styles
    setNodes(nds => 
      nds.map(n => ({
        ...n,
        style: {
          ...n.style,
          opacity: 1,
          border: '0px solid transparent',
        },
      }))
    );

    // Reset all edge styles
    setEdges(eds => 
      eds.map(e => ({
        ...e,
        style: {
          ...e.style,
          stroke: '#333',
          strokeWidth: 1,
          opacity: 1,
        }
      }))
    );
  }, [setNodes, setEdges]);

  return (
    <div className="w-full h-[600px]">
      <ReactFlowProvider>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={handleNodeClick}
          onNodeMouseEnter={onNodeMouseEnter}
          onNodeMouseLeave={onNodeMouseLeave}
          fitView
          attributionPosition="bottom-right"
        >
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default MapaInterativo;
