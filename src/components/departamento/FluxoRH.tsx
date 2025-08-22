import React, { useEffect, useState } from 'react';
import { Users, Target, GraduationCap, Rocket, BarChart3, TrendingUp, ClipboardList, Settings, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    <Card className="w-full h-[600px]">
      <CardContent className="p-0 h-full">
        <div className="bg-gradient-to-br from-primary via-primary/90 to-secondary h-full p-8 flex justify-center items-center">
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 relative">
              
              {/* Centro */}
              <div className="lg:col-start-2 lg:row-start-2 flex justify-center items-center z-10">
                <div className="w-32 h-32 bg-gradient-to-br from-accent to-accent/80 rounded-full flex flex-col justify-center items-center text-black text-sm font-semibold shadow-2xl hover:scale-105 transition-transform duration-300">
                  <Users className="w-8 h-8 mb-1 text-black" />
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
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-3 h-24 flex justify-center items-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-white/30">
                      <h3 className="text-sm font-bold text-center text-foreground flex items-center gap-1">
                        <IconComponent className="w-4 h-4 text-accent" />
                        {card.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FluxoRH;
