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
    {
      icon: Target,
      title: "Recrutamento & Seleção",
      items: [
        "Solicitações via Topdesk",
        "Job description e divulgação",
        "Triagem e entrevistas",
        "Coleta de documentos",
        "Envio ao DP"
      ]
    },
    {
      icon: GraduationCap,
      title: "Admissões Específicas",
      items: [
        "Jovem Aprendiz (SENAC/CIEE/FUNDHAS)",
        "Estagiários via CIEE",
        "Controle de cotas",
        "Planilhas de acompanhamento"
      ]
    },
    {
      icon: Rocket,
      title: "Integração & Desenvolvimento",
      items: [
        "Onboarding de colaboradores",
        "Treinamentos técnicos/gerenciais",
        "Eventos corporativos",
        "Programas internos (PIT, PEG, PES)",
        "9BOX e trilhamento SENAC"
      ]
    },
    {
      icon: BarChart3,
      title: "Gestão de Performance",
      items: [
        "Avaliação de desempenho anual",
        "Avaliação de experiência (45/90 dias)",
        "Gestão de benefícios",
        "Controle de uniformes",
        "Endomarketing"
      ]
    },
    {
      icon: TrendingUp,
      title: "Movimentações de Pessoas",
      items: [
        "Promoções (análise e aprovação)",
        "Promoção salarial",
        "Transferências e alterações",
        "Emissão de documentos",
        "Comunicação ao DP"
      ]
    },
    {
      icon: ClipboardList,
      title: "Encerramento de Ciclo",
      items: [
        "Entrevistas de desligamento",
        "Comunicação formal",
        "Indicadores mensais",
        "Turnover e absenteísmo"
      ]
    },
    {
      icon: Settings,
      title: "Controles Administrativos",
      items: [
        "Cadastro de biometria",
        "Atualização de planilhas",
        "Gestão de despesas (Mega)",
        "Quadro de vagas",
        "Squad de comunicação"
      ]
    },
    {
      icon: MessageCircle,
      title: "Comunicação & Engajamento",
      items: [
        "Comunicação interna",
        "Datas sazonais",
        "Aniversariantes",
        "Eventos corporativos",
        "Feedback e melhorias"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/90 to-secondary p-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white text-center mb-12 drop-shadow-lg">
          Fluxo do Departamento de RH
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative">
          {/* Center Hub */}
          <div className="lg:col-start-2 lg:row-start-2 flex justify-center items-center z-10">
            <div className="w-48 h-48 bg-gradient-to-br from-accent to-accent/80 rounded-full flex flex-col justify-center items-center text-white text-xl font-semibold shadow-2xl hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 mb-3" />
              <div className="text-center leading-tight">
                Gestão<br />Estratégica<br />de Pessoas
              </div>
            </div>
          </div>

          {/* Process Cards */}
          {processCards.map((card, index) => {
            const IconComponent = card.icon;
            const positions = [
              'lg:col-start-2 lg:row-start-1', // top center
              'lg:col-start-3 lg:row-start-1', // top right
              'lg:col-start-3 lg:row-start-2', // middle right
              'lg:col-start-3 lg:row-start-3', // bottom right
              'lg:col-start-2 lg:row-start-3', // bottom center
              'lg:col-start-1 lg:row-start-3', // bottom left
              'lg:col-start-1 lg:row-start-2', // middle left
              'lg:col-start-1 lg:row-start-1'  // top left
            ];

            return (
              <div
                key={index}
                className={`${positions[index]} ${
                  animatedCards.has(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-white/20 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/80"></div>
                  
                  <div className="text-center mb-4">
                    <IconComponent className="w-10 h-10 text-accent mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                  </div>
                  
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {card.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-accent font-bold mr-2">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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