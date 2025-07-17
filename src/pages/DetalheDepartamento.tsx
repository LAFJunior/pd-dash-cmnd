import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, GitBranch, ClipboardList, Puzzle, Building2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EstruturaDepartamento from '@/components/departamento/EstruturaDepartamento';
import FluxoDepartamento from '@/components/departamento/FluxoDepartamento';
import FluxoControladoria from '@/components/departamento/FluxoControladoria';
import ProcessosDepartamento from '@/components/departamento/ProcessosDepartamento';
import PilaresEcommerce from '@/components/departamento/PilaresEcommerce';
import PilaresControladoria from '@/components/departamento/PilaresControladoria';
import CentroCusto from '@/components/departamento/CentroCusto';
import RecicalceInfo from '@/components/departamento/RecicalceInfo';

const DetalheDepartamento = () => {
  const { nome } = useParams<{ nome: string }>();
  const navigate = useNavigate();
  const [pilarSelecionado, setPilarSelecionado] = useState<string>('');
  
  // Função para converter URL em nome do departamento
  const converterUrlParaNome = (urlNome: string) => {
    if (!urlNome) return '';
    
    // Mapear casos especiais
    const mapeamentoEspecial: {[key: string]: string} = {
      'e-commerce': 'E-Commerce',
      'ecommerce': 'E-Commerce',
      'contbil': 'Contábil',
      'contabil': 'Contábil',
      'sao-jose-dos-campos': 'São José dos Campos (CD/Operações)',
      'são-jose-dos-campos': 'São José dos Campos (CD/Operações)',
      'departamento-pessoal': 'Departamento Pessoal (DP)',
      'recursos-humanos': 'Recursos Humanos (RH)',
      't-i-desenvolvimento': 'T.I Desenvolvimento',
      't-i-operacoes': 'T.I Operações',
      't-i-projetos': 'T.I Projetos',
      'sao-jose-esporte-club': 'São José Esporte Club',
      'estadio-martins-pereira': 'Estádio Martins Pereira',
      'instituicoes-financeiras': 'Instituições Financeiras',
      'sapucaia-cd-operacoes': 'Sapucaia (CD/Operações)'
    };
    
    const urlLowerCase = urlNome.toLowerCase();
    
    if (mapeamentoEspecial[urlLowerCase]) {
      return mapeamentoEspecial[urlLowerCase];
    }
    
    // Conversão padrão: trocar hífens por espaços e capitalizar
    return urlNome
      .split('-')
      .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
      .join(' ');
  };
  
  const nomeDepartamento = converterUrlParaNome(nome || '');
  const isEcommerce = nomeDepartamento.toLowerCase().includes('e-commerce');
  const isControladoria = nomeDepartamento.toLowerCase().includes('controladoria');
  const isFinanceiroVarejo = nomeDepartamento.toLowerCase().includes('financeiro') && nomeDepartamento.toLowerCase().includes('varejo');
  const isRecicalce = nomeDepartamento.toLowerCase().includes('recicalce');
  
  console.log('URL param:', nome);
  console.log('Nome do departamento convertido:', nomeDepartamento);
  
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
          <h1 className="text-3xl font-bold">{nomeDepartamento}</h1>
          <p className="text-gray-500">Estrutura organizacional e processos do departamento</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Conteúdo específico para Recicalce */}
        {isRecicalce ? (
          <RecicalceInfo />
        ) : (
          <>
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
                {isControladoria ? (
                  <FluxoControladoria />
                ) : (
                  <FluxoDepartamento departamento={nomeDepartamento} />
                )}
              </CardContent>
            </Card>

            {/* Centro de Custo - Só exibe para Financeiro Varejo */}
            {isFinanceiroVarejo && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="text-indigo-600" size={24} />
                    Centro de Custo
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CentroCusto />
                </CardContent>
              </Card>
            )}

            {/* Pilares do E-commerce - Só exibe para E-commerce */}
            {isEcommerce && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Puzzle className="text-orange-600" size={24} />
                    Pilares do E-commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PilaresEcommerce onPilarSelect={setPilarSelecionado} pilarSelecionado={pilarSelecionado} />
                </CardContent>
              </Card>
            )}

            {/* Pilares da Controladoria - Só exibe para Controladoria */}
            {isControladoria && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Puzzle className="text-orange-600" size={24} />
                    Pilares da Controladoria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PilaresControladoria onPilarSelect={setPilarSelecionado} pilarSelecionado={pilarSelecionado} />
                </CardContent>
              </Card>
            )}

            {/* Processos Realizados */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClipboardList className="text-purple-600" size={24} />
                  Mapeamento de Processos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ProcessosDepartamento departamento={nomeDepartamento} pilarSelecionado={pilarSelecionado} />
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default DetalheDepartamento;
