
import React from 'react';

interface CardProcessoProps {
  titulo: string;
  quantidade: number;
  variacao?: number;
  className?: string;
  iconRight?: React.ReactNode;
}

const CardProcesso: React.FC<CardProcessoProps> = ({ 
  titulo, 
  quantidade, 
  variacao, 
  className,
  iconRight
}) => {
  const direcao = variacao && variacao > 0 ? 'aumento' : 'diminuicao';
  
  return (
    <div className={`card-processo ${className}`}>
      <div className="flex justify-between items-start">
        <h3>{titulo}</h3>
        {iconRight && <div className="opacity-80">{iconRight}</div>}
      </div>
      <div className="numero">{quantidade}</div>
      {variacao !== undefined && (
        <div className="texto flex items-center gap-1">
          <span>
            {Math.abs(variacao)}% {direcao === 'aumento' ? 'a mais' : 'a menos'} que mês passado
          </span>
        </div>
      )}
    </div>
  );
};

export default CardProcesso;
