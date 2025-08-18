import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Crown, 
  Star, 
  User, 
  Users,
  MessageCircle,
  Share2,
  PenTool,
  TrendingUp,
  Monitor,
  Video,
  Edit3,
  BarChart3,
  SearchCheck,
  Target,
  Mail,
  UserPlus
} from 'lucide-react';

interface PersonProps {
  name: string;
  role: string;
  icon?: React.ReactNode;
}

const Person: React.FC<PersonProps> = ({ name, role, icon }) => {
  return (
    <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
      <div className="flex items-center justify-center gap-2 mb-2">
        {icon && <span className="text-yellow-400">{icon}</span>}
        <h4 className="font-semibold text-white text-lg">{name}</h4>
      </div>
      <p className="text-purple-200 text-sm leading-relaxed">{role}</p>
    </div>
  );
};

interface DepartmentProps {
  title: string;
  people: Array<{ name: string; role: string; icon?: React.ReactNode }>;
}

const Department: React.FC<DepartmentProps> = ({ title, people }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
      <h3 className="text-2xl font-bold text-yellow-400 mb-6 text-center uppercase tracking-wide border-b-2 border-yellow-400 pb-3">
        {title}
      </h3>
      <div className="space-y-4">
        {people.map((person, index) => (
          <Person 
            key={index} 
            name={person.name} 
            role={person.role} 
            icon={person.icon}
          />
        ))}
      </div>
    </div>
  );
};

const EstruturaMarketing: React.FC = () => {
  const lideranca = [
    { name: "Renan Constantino", role: "CMO", icon: <Crown size={20} /> },
    { name: "Helena Alves", role: "Diretora", icon: <Star size={18} /> }
  ];

  const departamentos = [
    {
      title: "Atendimento",
      people: [
        { name: "Amanda Monique", role: "Executiva de Contas", icon: <MessageCircle size={16} /> },
        { name: "Giulia Moreira", role: "Executiva de Contas", icon: <MessageCircle size={16} /> },
        { name: "Leticia Aguiar", role: "Executiva de Contas", icon: <MessageCircle size={16} /> }
      ]
    },
    {
      title: "Redes Sociais",
      people: [
        { name: "Priscila Oliveira", role: "Head Social Media, Influenciadores e Campanhas", icon: <Share2 size={16} /> },
        { name: "Mateus Moreira", role: "Analista de Influenciadores", icon: <UserPlus size={16} /> },
        { name: "Lucas Dantas", role: "Analista de Mídias Sociais | Estrategista", icon: <Target size={16} /> },
        { name: "Caio Dutra", role: "Analista de Mídias Sociais | Estrategista", icon: <Target size={16} /> },
        { name: "Marina Selbach", role: "Analista de Mídias Sociais | Estrategista", icon: <Target size={16} /> },
        { name: "Jefferson Carlos", role: "Analista de Mídias Sociais | Produção de Vídeos", icon: <Video size={16} /> },
        { name: "Natalie Bordignon", role: "Assistente de Marketing e Produção", icon: <User size={16} /> },
        { name: "Isabela Constantino", role: "Auxiliar de Marketing", icon: <User size={16} /> }
      ]
    },
    {
      title: "Criação",
      people: [
        { name: "Raul Pacheco", role: "Diretor de Criação", icon: <PenTool size={16} /> },
        { name: "Mariana Teodoro", role: "Diretora de Arte", icon: <Monitor size={16} /> },
        { name: "Alvaro Reitman", role: "Diretor de Arte", icon: <Monitor size={16} /> },
        { name: "Raphael Takamatsu", role: "Diretor de Arte", icon: <Monitor size={16} /> },
        { name: "Gabriella Lemes", role: "Designer E-commerce", icon: <Edit3 size={16} /> },
        { name: "Tiago Coronas", role: "Designer E-commerce", icon: <Edit3 size={16} /> },
        { name: "Rodrigo Oliveira", role: "Motion Designer e Diretor de Arte", icon: <Video size={16} /> },
        { name: "Priscila Martins", role: "Redatora", icon: <Edit3 size={16} /> },
        { name: "Jorge Abel", role: "Redator", icon: <Edit3 size={16} /> },
        { name: "Anderson Sousa", role: "Diretor de Arte", icon: <Monitor size={16} /> }
      ]
    },
    {
      title: "Performance",
      people: [
        { name: "Lais Calabreze", role: "Head de Growth", icon: <TrendingUp size={16} /> },
        { name: "Leticia Calabreze", role: "Analista de SEO", icon: <SearchCheck size={16} /> },
        { name: "Caio Guimarães", role: "Analista de Tráfego Pago", icon: <BarChart3 size={16} /> },
        { name: "Pedro Cruz", role: "Analista de Tráfego Pago", icon: <BarChart3 size={16} /> },
        { name: "Vitor Prado", role: "Analista de CRM", icon: <Mail size={16} /> },
        { name: "Maisa Gonçalves", role: "Assistente de CRM", icon: <Mail size={16} /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h1 className="text-5xl md:text-6xl font-black text-yellow-400 text-center mb-4 tracking-wider drop-shadow-lg">
          QUEM FAZ ACONTECER
        </h1>
        
        {/* Liderança */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8">LIDERANÇA</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {lideranca.map((person, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-2">
                  {person.icon}
                  <h3 className="text-xl font-semibold text-white">{person.name}</h3>
                </div>
                <p className="text-purple-200 text-lg italic">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Departamentos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {departamentos.map((dept, index) => (
            <Department 
              key={index} 
              title={dept.title} 
              people={dept.people} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstruturaMarketing;