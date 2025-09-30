import React from 'react';
import { Card } from '@/components/ui/card';

interface Pessoa {
  nome: string;
  cargo: string;
  nivel: 1 | 2 | 3;
  subordinados?: Pessoa[];
}

const ColaboradorCard: React.FC<{ pessoa: Pessoa }> = ({ pessoa }) => {
  const getCardStyle = () => {
    switch (pessoa.nivel) {
      case 1: // CEO
        return 'bg-[#8B2424] text-white shadow-lg';
      case 2: // Diretores
        return 'bg-[#B63434] text-white shadow-md';
      case 3: // Gestores
        return 'bg-[#5A5A5A] text-white shadow-sm';
      default:
        return 'bg-gray-300';
    }
  };

  const getSize = () => {
    switch (pessoa.nivel) {
      case 1:
        return 'w-64 py-6';
      case 2:
        return 'w-48 py-4';
      case 3:
        return 'w-44 py-3';
      default:
        return 'w-40 py-3';
    }
  };

  return (
    <div
      className={`${getCardStyle()} ${getSize()} px-4 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-xl cursor-pointer`}
    >
      <div className="text-center">
        <h3 className={`font-bold ${pessoa.nivel === 1 ? 'text-lg' : pessoa.nivel === 2 ? 'text-base' : 'text-sm'}`}>
          {pessoa.nome}
        </h3>
        <p className={`${pessoa.nivel === 1 ? 'text-sm' : 'text-xs'} opacity-90 mt-1`}>
          {pessoa.cargo}
        </p>
      </div>
    </div>
  );
};

const organogramaData: Pessoa = {
  nome: 'Bruno Constantino',
  cargo: 'CEO',
  nivel: 1,
  subordinados: [
    {
      nome: 'Andre Americo',
      cargo: 'Diretor de Operações',
      nivel: 2,
      subordinados: [
        { nome: 'Adilson Jesus', cargo: 'Gerente de Operações', nivel: 3 },
        { nome: 'Flavia Gomes', cargo: 'Gerente de Operações', nivel: 3 },
      ]
    },
    {
      nome: 'Thiago Sena',
      cargo: 'Diretor Comercial',
      nivel: 2,
      subordinados: [
        { nome: 'Eliel Gomes', cargo: 'Gerente Comercial', nivel: 3 },
        { nome: 'Felipe Amorim', cargo: 'Gerente de E-commerce', nivel: 3 },
      ]
    },
    {
      nome: 'Fabricio dos Santos',
      cargo: 'Diretor de TI',
      nivel: 2,
      subordinados: [
        { nome: 'Paulo Ferreira', cargo: 'Gerente de Infraestrutura', nivel: 3 },
        { nome: 'Renan Rossini', cargo: 'Gerente de Sistemas', nivel: 3 },
      ]
    },
    {
      nome: 'Isabel Araujo',
      cargo: 'Diretora de RH',
      nivel: 2,
      subordinados: [
        { nome: 'Cristiane Oliveira', cargo: 'Gerente de DP', nivel: 3 },
        { nome: 'Janaina Souza', cargo: 'Gerente de Benefícios', nivel: 3 },
      ]
    },
    {
      nome: 'Mariana Costa',
      cargo: 'Diretora Financeira',
      nivel: 2,
      subordinados: [
        { nome: 'Amanda Silva', cargo: 'Gerente de Contas a Pagar', nivel: 3 },
        { nome: 'Carlos Eduardo', cargo: 'Gerente de Tesouraria', nivel: 3 },
        { nome: 'Patricia Santos', cargo: 'Gerente de Crédito', nivel: 3 },
      ]
    },
    {
      nome: 'Rafael Lima',
      cargo: 'Diretor Contábil',
      nivel: 2,
      subordinados: [
        { nome: 'Juliana Rocha', cargo: 'Gerente Contábil', nivel: 3 },
        { nome: 'Roberto Alves', cargo: 'Gerente Fiscal', nivel: 3 },
      ]
    },
    {
      nome: 'Luiz Ferreira',
      cargo: 'Diretor de Controladoria',
      nivel: 2,
      subordinados: [
        { nome: 'Ana Paula', cargo: 'Gerente de Controladoria', nivel: 3 },
        { nome: 'Diego Costa', cargo: 'Gerente de Auditoria', nivel: 3 },
      ]
    },
    {
      nome: 'Gustavo Mendes',
      cargo: 'Diretor de Compras',
      nivel: 2,
      subordinados: [
        { nome: 'Leonardo Silva', cargo: 'Gerente de Compras Nacionais', nivel: 3 },
        { nome: 'Marina Santos', cargo: 'Gerente de Importação', nivel: 3 },
      ]
    },
    {
      nome: 'Camila Ribeiro',
      cargo: 'Diretora de Marketing',
      nivel: 2,
      subordinados: [
        { nome: 'Beatriz Martins', cargo: 'Gerente de Marketing Digital', nivel: 3 },
        { nome: 'Fernando Dias', cargo: 'Gerente de Comunicação', nivel: 3 },
      ]
    },
  ]
};

const Colaboradores = () => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Organograma Corporativo</h1>
        <p className="text-muted-foreground">Estrutura organizacional do Grupo Oscar</p>
      </div>
      
      <Card className="bg-card p-8 overflow-x-auto">
        <div className="min-w-[1400px]">
          {/* CEO - Nível 1 */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <ColaboradorCard pessoa={organogramaData} />
              {/* Linha vertical do CEO */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300 top-full"></div>
            </div>
          </div>

          {/* Linha horizontal conectando diretores */}
          <div className="relative mb-8">
            <div className="absolute left-0 right-0 top-0 h-0.5 bg-gray-300"></div>
          </div>

          {/* Diretores - Nível 2 */}
          <div className="grid grid-cols-9 gap-4 mb-8">
            {organogramaData.subordinados?.map((diretor, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                {/* Linha vertical até o diretor */}
                <div className="w-0.5 h-8 bg-gray-300 mb-4"></div>
                <ColaboradorCard pessoa={diretor} />
                
                {/* Linha vertical do diretor para gestores */}
                {diretor.subordinados && diretor.subordinados.length > 0 && (
                  <>
                    <div className="w-0.5 h-8 bg-gray-300 mt-4"></div>
                    {/* Linha horizontal conectando gestores */}
                    {diretor.subordinados.length > 1 && (
                      <div className="absolute left-0 right-0 h-0.5 bg-gray-300" style={{ top: 'calc(100% + 48px)' }}></div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Gestores - Nível 3 */}
          <div className="grid grid-cols-9 gap-4">
            {organogramaData.subordinados?.map((diretor, idx) => (
              <div key={idx} className="flex flex-col items-center space-y-4">
                {diretor.subordinados?.map((gestor, gIdx) => (
                  <div key={gIdx} className="relative">
                    {/* Linha vertical para o gestor */}
                    {diretor.subordinados && diretor.subordinados.length > 1 && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-300 -top-8"></div>
                    )}
                    <ColaboradorCard pessoa={gestor} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legenda */}
        <div className="mt-12 pt-6 border-t border-border flex justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#8B2424]"></div>
            <span className="text-sm text-muted-foreground">CEO</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#B63434]"></div>
            <span className="text-sm text-muted-foreground">Diretores</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#5A5A5A]"></div>
            <span className="text-sm text-muted-foreground">Gestores</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Colaboradores;
