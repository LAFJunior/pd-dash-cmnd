import React, { useEffect, useState } from 'react';
import { Users, Target, GraduationCap, Rocket, BarChart3, TrendingUp, ClipboardList, Settings, MessageCircle } from 'lucide-react';

const FluxoRH = () => {
  const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set());

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedCards(new Set([0, 1, 2, 3, 4, 5, 6, 7]));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const processCards = [
    { icon: Target, title: "Recrutamento & Seleção" },
    { icon: GraduationCap, title: "Admissões Específicas" },
    { icon: Rocket, title: "Integração & Desenvolvimento" },
    { icon: BarChart3, title: "Gestão de Performance" },
    { icon: TrendingUp, title: "Movimentações de Pessoas" },
    { icon: ClipboardList, title: "Encerramento de Ciclo" },
    { icon: Settings, title: "Controles Administrativos" },
    { icon: MessageCircle, title: "Comunicação & Engajamento" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary p-8 flex justify-center items-center">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* Centro */}
          <div className="lg:col-start-2 lg:row-start-2 flex justify-center items-center z-10">
            <div className="w-40 h-40 bg-gradient-to-br from-accent to-accent/80 rounded-full flex flex-col justify-center items-center text-black text-lg font-semibold shadow-2xl hover:scale-105 transition-transform duration-300">
              <Users className="w-10 h-10 mb-2 text-black" />
              <div className="text-center leading-tight">
                Gestão<br />Estratégica<br />de Pessoas
              </div>
            </div>
          </div>

          {/* Cards */}
          {processCards.map((card, index) => {
            const IconComponent = card.icon;
            const positions = [
              'lg:col-start-2 lg:row-start-1', // topo centro
              'lg:col-start-3 lg:row-start-1', // topo direita
              'lg:col-start-3 lg:row-start-2', // meio direita
              'lg:col-start-3 lg:row-start-3', // baixo direita
              'lg:col-start-2 lg:row-start-3', // baixo centro
              'lg:col-start-1 lg:row-start-3', // baixo esquerda
              'lg:col-start-1 lg:row-start-2', // meio esquerda
              'lg:col-start-1 lg:row-start-1'  // topo esquerda
            ];

            return (
              <div
                key={index}
                className={`${positions[index]} ${
                  animatedCards.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-6'
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 h-28 flex justify-center items-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/30">
                  <h3 className="text-base font-bold text-center text-foreground flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-accent" />
                    {card.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FluxoRH;
