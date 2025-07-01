
import React from 'react';
import { User, MapPin, Phone, Mail, Calendar, Award, TrendingUp, ShoppingCart, Calculator, Building, Truck, AlertTriangle } from 'lucide-react';
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
  // Função para normalizar nomes de departamentos
  const normalizarNomeDepartamento = (nome: string): string => {
    return nome.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-z0-9\s]/g, '') // Remove caracteres especiais
      .trim();
  };

  // Get colaboradores based on department if not provided
  const getColaboradoresPorDepartamento = (dept: string): ColaboradorProps[] => {
    const deptNormalizado = normalizarNomeDepartamento(dept);
    
    console.log('Departamento original:', dept);
    console.log('Departamento normalizado:', deptNormalizado);
    
    // E-Commerce
    if (deptNormalizado.includes('e-commerce') || deptNormalizado.includes('ecommerce') || deptNormalizado === 'e commerce') {
      console.log('Retornando dados do E-Commerce');
      return [
        {
          nome: "Rafael Oliveira",
          cargo: "Gerente de E-Commerce",
          setor: "E-Commerce",
          nivel: 4,
          icon: <ShoppingCart className="h-4 w-4" />
        },
        {
          nome: "Juliana Pereira",
          cargo: "Analista de Marketplace",
          setor: "E-Commerce",
          nivel: 3,
          icon: <User className="h-4 w-4" />
        },
        {
          nome: "Bruno Martins",
          cargo: "Especialista em SEO",
          setor: "E-Commerce",
          nivel: 3,
          icon: <TrendingUp className="h-4 w-4" />
        },
        {
          nome: "Camila Rodrigues",
          cargo: "Assistente de E-Commerce",
          setor: "E-Commerce",
          nivel: 2,
          icon: <User className="h-4 w-4" />
        }
      ];
    }
    
    // Financeiro
    if (deptNormalizado.includes('financeiro')) {
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
    
    // Fiscal
    if (deptNormalizado.includes('fiscal')) {
      return [
        {
          nome: "Eduardo Lima",
          cargo: "Coordenador Fiscal",
          setor: "Fiscal",
          nivel: 4,
          icon: <Calculator className="h-4 w-4" />
        },
        {
          nome: "Patrícia Fernandes",
          cargo: "Analista Fiscal Sênior",
          setor: "Fiscal",
          nivel: 3,
          icon: <User className="h-4 w-4" />
        },
        {
          nome: "Roberto Silva",
          cargo: "Assistente Fiscal",
          setor: "Fiscal",
          nivel: 2,
          icon: <User className="h-4 w-4" />
        }
      ];
    }
    
    // Controladoria
    if (deptNormalizado.includes('controladoria')) {
      return [
        {
          nome: "Fernanda Castro",
          cargo: "Controller",
          setor: "Controladoria",
          nivel: 5,
          icon: <Award className="h-4 w-4" />
        },
        {
          nome: "Lucas Mendes",
          cargo: "Analista de Controladoria",
          setor: "Controladoria",
          nivel: 3,
          icon: <TrendingUp className="h-4 w-4" />
        },
        {
          nome: "Aline Santos",
          cargo: "Assistente de Controladoria",
          setor: "Controladoria",
          nivel: 2,
          icon: <User className="h-4 w-4" />
        }
      ];
    }
    
    // São José dos Campos
    if (deptNormalizado.includes('sao jose dos campos') || deptNormalizado.includes('sao jose') || deptNormalizado.includes('cd') || deptNormalizado.includes('operacoes')) {
      return [
        {
          nome: "Marcos Almeida",
          cargo: "Gerente de Operações CD",
          setor: "São José dos Campos",
          nivel: 4,
          icon: <Building className="h-4 w-4" />
        },
        {
          nome: "Cristina Barbosa",
          cargo: "Supervisora de Expedição",
          setor: "São José dos Campos",
          nivel: 3,
          icon: <Truck className="h-4 w-4" />
        },
        {
          nome: "Diego Carvalho",
          cargo: "Operador de Estoque",
          setor: "São José dos Campos",
          nivel: 2,
          icon: <User className="h-4 w-4" />
        },
        {
          nome: "Priscila Nunes",
          cargo: "Auxiliar de Expedição",
          setor: "São José dos Campos",
          nivel: 1,
          icon: <User className="h-4 w-4" />
        }
      ];
    }
    
    // Defeito
    if (deptNormalizado.includes('defeito')) {
      return [
        {
          nome: "André Gomes",
          cargo: "Coordenador de Qualidade",
          setor: "Defeito",
          nivel: 4,
          icon: <AlertTriangle className="h-4 w-4" />
        },
        {
          nome: "Vanessa Costa",
          cargo: "Analista de Qualidade",
          setor: "Defeito",
          nivel: 3,
          icon: <User className="h-4 w-4" />
        },
        {
          nome: "Thiago Ribeiro",
          cargo: "Inspetor de Qualidade",
          setor: "Defeito",
          nivel: 2,
          icon: <User className="h-4 w-4" />
        }
      ];
    }
    
    // Default colaboradores for other departments
    console.log('Retornando dados padrão para:', dept);
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
