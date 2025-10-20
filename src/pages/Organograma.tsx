import React from 'react';

interface TeamMember {
  lines: string[]; // cada linha separada
}

interface Director {
  name: string;
  title: string;
  team: TeamMember[];
}

const directors: Director[] = [
  {
    name: 'Marcio',
    title: 'Diretor',
    team: [
      { lines: ['Maria', 'Gestora', 'Departamento Pessoal'] },
      { lines: ['Edison', 'Gestor', 'Contábil e Fiscal'] },
      { lines: ['Vilma', 'Coordenadora', 'Controladoria'] },
      { lines: ['Flávia', 'Gestora', 'Financeiro Varejo'] },
      { lines: ['Marlene', 'Gestora', 'Suprimentos'] },
      { lines: ['Cleber', 'Gestor', 'C.D/Defeitos'] },
    ],
  },
  {
    name: 'Sônia',
    title: 'Diretora',
    team: [
      { lines: ['Suila', 'Regional', 'VH'] },
      { lines: ['Viviane', 'Regional', 'Arezzo'] },
    ],
  },
  {
    name: 'Nelson',
    title: 'Diretor',
    team: [
      { lines: ['Renê', 'Gerente', 'T.I - Operações'] },
      { lines: ['Rafael', 'Head', 'T.I - Desenvolvimento'] },
      { lines: ['Sérgio', 'Head', 'T.I - Inovação e Projetos'] },
      { lines: ['Carlos', 'Gestor', 'FastCard'] },
    ],
  },
  {
    name: 'Renan',
    title: 'Diretor',
    team: [
      { lines: ['', 'E-commerce', '', '' ] },
      { lines: ['Helena', 'Gestora', 'Marketing'] },
    ],
  },
  {
    name: 'Naiche',
    title: 'Diretor',
    team: [
      { lines: ['Karen', 'Gestora', 'Feminino Compras'] },
      { lines: ['Claudinei', 'Gestor', 'Masculino Compras'] },
      { lines: ['Raphael', 'Gestor', 'Esporte Compras'] },
      { lines: ['Valmir', 'Gestor', 'Infantil Compras'] },
    ],
  },
  {
    name: 'Helena',
    title: 'Diretora',
    team: [{ lines: ['Artemis', 'Regional', 'Franquias'] }],
  },
  {
    name: 'Romilton',
    title: 'Diretor Op.',
    team: [
      { lines: ['Tiago', 'Gerente', 'Regional'] },
      { lines: ['Estefan', 'Gerente', 'Regional'] },
      { lines: ['Luis Américo', 'Gerente', 'Regional'] },
      { lines: ['Mauricio', 'Gerente', 'Regional'] },
      { lines: ['Peterson', 'Gerente', 'Regional'] },
    ],
  },
  {
    name: 'Ericson',
    title: 'Diretor Op.',
    team: [
      { lines: ['Ariane', 'Gerente', 'Regional'] },
      { lines: ['Claudi', 'Gerente', 'Regional'] },
      { lines: ['João Paulo', 'Gerente', 'Regional'] },
      { lines: ['Rodrigo', 'Gerente', 'Regional'] },
    ],
  },
  {
    name: 'Cerutti',
    title: 'Diretor Op.',
    team: [
      { lines: ['Bernardo', 'Gerente', 'Regional'] },
      { lines: ['Clovis', 'Gerente', 'Regional'] },
      { lines: ['Jorge', 'Gerente', 'Regional'] },
      { lines: ['Katiane', 'Gerente', 'Regional'] },
      { lines: ['Patrícia', 'Gerente', 'Regional'] },
    ],
  },
];

const Organograma = () => {
  return (
    <div className="animate-fade-in p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Organograma</h1>
        <p className="text-muted-foreground">
          Estrutura organizacional da empresa
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[1400px] mx-auto">
        {/* CEO */}
        <div className="relative mb-[50px]">
          <div className="bg-[#8B1538] text-white text-center py-8 px-6 text-3xl font-bold">
            Bruno Constantino - CEO
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-[25px] border-l-2 border-dotted border-gray-800"></div>
        </div>

        {/* Diretores */}
        <div className="relative">
          <div className="absolute left-0 right-0 -top-[25px] h-0.5 border-t-2 border-dotted border-gray-800"></div>

          <div className="flex justify-between gap-2.5">
            {directors.map((director, index) => (
              <div key={index} className="flex-1 relative min-w-[150px] max-w-[160px]">
                <div className="absolute left-1/2 -translate-x-1/2 -top-[25px] w-0.5 h-[25px] border-l-2 border-dotted border-gray-800"></div>

                <div className="relative mb-5">
                  <div className="bg-[#8B1538] text-white text-center py-4 px-2 text-sm font-bold leading-tight">
                    {director.name}
                    <br />
                    {director.title}
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-[10px] border-l-2 border-dotted border-gray-800"></div>
                </div>

                <div className="flex flex-col gap-2">
                  {director.team.map((member, memberIndex) => (
                    <div key={memberIndex} className="relative">
                      <div
                        className={`absolute left-1/2 -translate-x-1/2 -top-[10px] w-0.5 border-l-2 border-dotted border-gray-800 ${
                          memberIndex === 0 ? 'h-[20px] -top-[20px]' : 'h-[10px]'
                        }`}
                      ></div>

                      <div className="bg-[#6B7280] text-white py-3 px-2 text-[10px] text-center leading-tight whitespace-pre-line">
                        {member.lines.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i < member.lines.length - 1 && <br />}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Organograma;
