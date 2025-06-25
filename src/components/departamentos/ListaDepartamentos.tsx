
import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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

  const handleItemClick = (item: string) => {
    const departamentoUrl = item.toLowerCase().replace(/\s+/g, '-');
    navigate(`/departamentos/${departamentoUrl}`);
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
            className={`departamento-item cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${isSelected(item) 
              ? `bg-${color.substring(1)} bg-opacity-20 font-medium border-l-4`
              : ''}`}
            style={isSelected(item) ? { borderLeftColor: color } : {}}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDepartamentos;
