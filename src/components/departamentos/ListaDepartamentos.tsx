
import React from 'react';

interface ListaDepartamentosProps {
  titulo: string;
  items: string[];
  color: string;
}

const ListaDepartamentos: React.FC<ListaDepartamentosProps> = ({ titulo, items, color }) => {
  return (
    <div className="departamento-card">
      <h3 className="departamento-titulo" style={{ borderColor: color }}>
        {titulo}
      </h3>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="departamento-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDepartamentos;
