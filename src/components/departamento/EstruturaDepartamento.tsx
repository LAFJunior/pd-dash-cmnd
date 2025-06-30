import React from 'react';
import { User, MapPin, Phone, Mail, Calendar, Award, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ColaboradorProps {
  nome: string;
  cargo: string;
  setor: string;
  nivel: number;
  icon: React.ReactElement;
}

interface InfoDepartamentoProps {
  endereco: string;
  telefone: string;
  email: string;
  funcionamento: string;
}

const InfoDepartamento: React.FC<InfoDepartamentoProps> = ({ endereco, telefone, email, funcionamento }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Informações do Departamento</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>{endereco}</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>{telefone}</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <span>{email}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{funcionamento}</span>
        </div>
      </CardContent>
    </Card>
  );
};

interface EstruturaDepartamentoProps {
  departamento: string;
  colaboradores?: ColaboradorProps[];
}

const EstruturaDepartamento: React.FC<EstruturaDepartamentoProps> = ({ departamento, colaboradores }) => {
  // Get colaboradores based on department if not provided
  const getColaboradoresPorDepartamento = (dept: string): ColaboradorProps[] => {
    if (dept.toLowerCase().includes('financeiro')) {
      return [
        {
          nome: "Ana Silva",
          cargo: "Gerente Financeiro",
          setor: "Financeiro",
          nivel: 4,
          icon: <TrendingUp className="h-4 w-4" />
        },
        {
          nome: "Carlos Santos",
          cargo: "Analista Financeiro Sênior",
          setor: "Financeiro",
          nivel: 3,
          icon: <User className="h-4 w-4" />
        },
        {
          nome: "Maria Costa",
          cargo: "Assistente Financeiro",
          setor: "Financeiro",
          nivel: 2,
          icon: <User className="h-4 w-4" />
        }
      ];
    }
    
    // Default colaboradores for other departments
    return [
      {
        nome: "João Silva",
        cargo: "Gerente do Departamento",
        setor: dept,
        nivel: 4,
        icon: <User className="h-4 w-4" />
      },
      {
        nome: "Maria Santos",
        cargo: "Coordenador",
        setor: dept,
        nivel: 3,
        icon: <Award className="h-4 w-4" />
      },
      {
        nome: "Pedro Costa",
        cargo: "Analista",
        setor: dept,
        nivel: 2,
        icon: <TrendingUp className="h-4 w-4" />
      }
    ];
  };

  const colaboradoresAtivos = colaboradores || getColaboradoresPorDepartamento(departamento);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {colaboradoresAtivos.map((colaborador, index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {colaborador.icon}
              {colaborador.nome}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{colaborador.cargo}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{colaborador.setor}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              <span>Nível: <Badge>{colaborador.nivel}</Badge></span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Keep the existing default component for backward compatibility
const DepartamentoComponent: React.FC = () => {
  const colaboradores: ColaboradorProps[] = [
    {
      nome: "Maria Silva",
      cargo: "Gerente de Operações",
      setor: "Operacional",
      nivel: 3,
      icon: <User className="h-4 w-4" />
    },
    {
      nome: "João Santos",
      cargo: "Analista Financeiro",
      setor: "Financeiro",
      nivel: 2,
      icon: <TrendingUp className="h-4 w-4" />
    },
    {
      nome: "Ana Costa",
      cargo: "Coordenadora de RH",
      setor: "Recursos Humanos",
      nivel: 3,
      icon: <Award className="h-4 w-4" />
    }
  ];

  const info = {
    endereco: "Rua Exemplo, 123 - Centro, Cidade/UF",
    telefone: "(12) 3456-7890",
    email: "departamento@exemplo.com",
    funcionamento: "Segunda a Sexta, 08:00 - 18:00"
  };

  return (
    <div className="grid gap-4">
      <InfoDepartamento {...info} />
      <EstruturaDepartamento departamento="Exemplo" colaboradores={colaboradores} />
    </div>
  );
};

export default EstruturaDepartamento;
