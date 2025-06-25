
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, GitBranch, ClipboardList } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EstruturaDepartamento from '@/components/departamento/EstruturaDepartamento';
import FluxoDepartamento from '@/components/departamento/FluxoDepartamento';
import ProcessosDepartamento from '@/components/departamento/ProcessosDepartamento';

const DetalheDepartamento = () => {
  const { nome } = useParams<{ nome: string }>();
  const navigate = useNavigate();
  
  const nomeDepartamento = nome?.replace('-', ' ') || '';
  
  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-center gap-4">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => navigate('/departamentos')}
          className="flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Voltar
        </Button>
        <div>
          <h1 className="text-3xl font-bold capitalize">{nomeDepartamento}</h1>
          <p className="text-gray-500">Estrutura organizacional e processos do departamento</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Estrutura do Departamento */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-blue-600" size={24} />
              Estrutura do Departamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <EstruturaDepartamento departamento={nomeDepartamento} />
          </CardContent>
        </Card>

        {/* Fluxo do Departamento */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="text-green-600" size={24} />
              Fluxo do Departamento
            </CardTitle>
          </CardHeader>
          <CardContent>
            <FluxoDepartamento departamento={nomeDepartamento} />
          </CardContent>
        </Card>

        {/* Processos Realizados */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardList className="text-purple-600" size={24} />
              Mapeamento de Processos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ProcessosDepartamento departamento={nomeDepartamento} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DetalheDepartamento;
