import React from 'react';

interface TeamMember {
  name: string;
  role: string;
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
      { name: 'Maria', role: 'Gestora DP' },
      { name: 'Edison', role: 'Gestor Contábil e Fiscal' },
      { name: 'Vilma', role: 'Gestora Controladoria' },
      { name: 'Flávia', role: 'Gestora Financeiro' },
      { name: 'Marlene', role: 'Gestora Suprimentos' },
      { name: 'Cleber', role: 'Gestor C.D/Defeitos' },
    ],
  },
  {
    name: 'Sônia',
    title: 'Diretora',
    team: [
      { name: 'Suila', role: 'Regional VH' },
      { name: 'Viviane', role: 'Regional Arezzo' },
    ],
  },
  {
    name: 'Nelson',
    title: 'Diretor',
    team: [
      { name: 'Renê', role: 'Gestor T.I' },
      { name: 'Rafael', role: 'Gestor Fábrica' },
      { name: 'Sérgio', role: 'Gerente de Projetos' },
      { name: 'Carlos', role: 'Gestor Fast Card' },
    ],
  },
  {
    name: 'Renan',
    title: 'Diretor',
    team: [
      { name: '', role: 'E-commerce' },
      { name: 'Helena', role: 'Gestora MKT' },
    ],
  },
  {
    name: 'Naiche',
    title: 'Diretor',
    team: [
      { name: 'Karen', role: 'Gestora Feminino compras' },
      { name: 'Claudinei', role: 'Gestor Masculino compras' },
      { name: 'Rafael', role: 'Gestor Tênis e equipamentos compras' },
      { name: 'Carla', role: 'Gestora Infantil compras' },
    ],
  },
  {
    name: 'Helena',
    title: 'Diretora',
    team: [
      { name: 'Artemis', role: 'Regional Franquias' },
    ],
  },
  {
    name: 'Romilton',
    title: 'Diretor Op.',
    team: [
      { name: 'Tiago', role: 'Regional' },
      { name: 'Estefan', role: 'Regional' },
      { name: 'Luis Américo', role: 'Regional' },
      { name: 'Mauricio', role: 'Regional' },
      { name: 'Peterson', role: 'Regional' },
    ],
  },
  {
    name: 'Ericson',
    title: 'Diretor Op.',
    team: [
      { name: 'Ariane', role: 'Regional' },
      { name: 'Claudio', role: 'Regional' },
      { name: 'João Paulo', role: 'Regional' },
      { name: 'Rodrigo', role: 'Regional' },
    ],
  },
  {
    name: 'Cerutti',
    title: 'Diretor Op.',
    team: [
      { name: 'Bernardo', role: 'Regional' },
      { name: 'Clovis', role: 'Regional' },
      { name: 'Jorge', role: 'Regional' },
      { name: 'Katiane', role: 'Regional' },
      { name: 'Patrícia', role: 'Regional' },
    ],
  },
];

const Organograma = () => {
  return (
    <div className="animate-fade-in p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Organograma</h1>
        <p className="text-muted-foreground">Estrutura organizacional da empresa</p>
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* CEO Box */}
        <div className="relative mb-[50px]">
          <div className="bg-[#8B1538] text-white text-center py-8 px-6 text-3xl font-bold">
            Bruno Constantino - CEO
          </div>
          {/* Vertical line from CEO */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-[25px] border-l-2 border-dotted border-gray-800"></div>
        </div>

        {/* Directors Row */}
        <div className="relative">
          {/* Horizontal line connecting all directors */}
          <div className="absolute left-0 right-0 -top-[25px] h-0.5 border-t-2 border-dotted border-gray-800"></div>

          <div className="flex justify-between gap-2.5">
            {directors.map((director, index) => (
              <div key={index} className="flex-1 relative min-w-[140px]">
                {/* Vertical line to director */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-[25px] w-0.5 h-[25px] border-l-2 border-dotted border-gray-800"></div>

                {/* Director Box */}
                <div className="relative mb-5">
                  <div className="bg-[#8B1538] text-white text-center py-4 px-2 text-sm font-bold leading-tight">
                    {director.name}<br />{director.title}
                  </div>
                  {/* Vertical line from director to team */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-[10px] border-l-2 border-dotted border-gray-800"></div>
                </div>

                {/* Team Members */}
                <div className="flex flex-col gap-2">
                  {director.team.map((member, memberIndex) => (
                    <div key={memberIndex} className="relative">
                      {/* Vertical line to team member */}
                      <div 
                        className={`absolute left-1/2 -translate-x-1/2 -top-[10px] w-0.5 border-l-2 border-dotted border-gray-800 ${
                          memberIndex === 0 ? 'h-[20px] -top-[20px]' : 'h-[10px]'
                        }`}
                      ></div>
                      
                      <div className="bg-[#6B7280] text-white py-3 px-2 text-xs text-center leading-tight">
                        {member.name && `${member.name} - `}{member.role}
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
  );
};

export default Organograma;
