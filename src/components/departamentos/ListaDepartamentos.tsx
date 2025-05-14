
import React from 'react';

interface ListaDepartamentosProps {
  titulo: string;
  items: string[];
  color: string;
  selectedItem?: string;
}

const ListaDepartamentos: React.FC<ListaDepartamentosProps> = ({ 
  titulo, 
  items, 
  color, 
  selectedItem 
}) => {
  // Função auxiliar para normalizar nomes de departamentos para comparação
  const formatarNomeDepartamento = (nome: string) => {
    // Remova parênteses e abreveações
    const simplificado = nome
      .replace(/\([^)]*\)/g, '')  // Remove tudo entre parênteses
      .trim();
      
    // Mapeie nomes curtos para sua versão completa
    const mapeamentoNomes: {[key: string]: string} = {
      'DP': 'Departamento Pessoal',
      'RH': 'Recursos Humanos',
      'T.I': 'T.I',
      'SJEC': 'São José Esporte Club',
      'Estádio': 'Estádio Martins Pereira',
      'Inst. Financeiras': 'Instituições Financeiras'
    };
    
    return mapeamentoNomes[simplificado] || simplificado;
  };
  
  const isSelected = (item: string) => {
    if (!selectedItem) return false;
    
    const itemFormatado = formatarNomeDepartamento(item);
    const selectedItemFormatado = formatarNomeDepartamento(selectedItem);
    
    return itemFormatado === selectedItemFormatado;
  };

  return (
    <div className="departamento-card">
      <h3 className="departamento-titulo" style={{ borderColor: color }}>
        {titulo}
      </h3>
      <ul>
        {items.map((item, index) => (
          <li 
            key={index} 
            className={`departamento-item ${isSelected(item) 
              ? `bg-${color.substring(1)} bg-opacity-20 font-medium border-l-4`
              : ''}`}
            style={isSelected(item) ? { borderLeftColor: color } : {}}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDepartamentos;
