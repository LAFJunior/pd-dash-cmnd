import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, GitBranch, ClipboardList, Puzzle, Building2, Workflow } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EstruturaDepartamento from '@/components/departamento/EstruturaDepartamento';
import FluxoDepartamento from '@/components/departamento/FluxoDepartamento';
import FluxoControladoria from '@/components/departamento/FluxoControladoria';
import FluxoFiscal from '@/components/departamento/FluxoFiscal';
import ProcessosDepartamento from '@/components/departamento/ProcessosDepartamento';
import PilaresEcommerce from '@/components/departamento/PilaresEcommerce';
import PilaresControladoria from '@/components/departamento/PilaresControladoria';
import PilaresAuditoria from '@/components/departamento/PilaresAuditoria';
import PilaresDepartamentoPessoal from '@/components/departamento/PilaresDepartamentoPessoal';
import CentroCusto from '@/components/departamento/CentroCusto';
import LojasResponsaveis from '@/components/departamento/LojasResponsaveis';
import RecicalceInfo from '@/components/departamento/RecicalceInfo';
import SaoJoseEsporteClubInfo from '@/components/departamento/SaoJoseEsporteClubInfo';
import EstadioMartinsPereira from '@/components/departamento/EstadioMartinsPereira';
import EstruturaSaoJoseCampos from '@/components/departamento/EstruturaSaoJoseCampos';
import LojaVirtual from '@/components/departamento/LojaVirtual';
const DetalheDepartamento = () => {
  const {
    nome
  } = useParams<{
    nome: string;
  }>();
  const navigate = useNavigate();
  const [pilarSelecionado, setPilarSelecionado] = useState<string>('');

  // Função para converter URL em nome do departamento
  const converterUrlParaNome = (urlNome: string) => {
    if (!urlNome) return '';

    // Mapear casos especiais
    const mapeamentoEspecial: {
      [key: string]: string;
    } = {
      'e-commerce': 'E-Commerce',
      'ecommerce': 'E-Commerce',
      'contbil': 'Contábil',
      'contabil': 'Contábil',
      'sao-jose-dos-campos': 'São José dos Campos (CD/Operações)',
      'são-jose-dos-campos': 'São José dos Campos (CD/Operações)',
      'cdoperaes': 'São José dos Campos (CD/Operações)',
      'cd-operacoes': 'São José dos Campos (CD/Operações)',
      'departamento-pessoal': 'Departamento Pessoal (DP)',
      'recursos-humanos': 'Recursos Humanos (RH)',
      't-i-desenvolvimento': 'T.I Desenvolvimento',
      't-i-operacoes': 'T.I Operações',
      't-i-projetos': 'T.I Projetos',
      'sao-jose-esporte-club': 'São José Esporte Club',
      'estadio-martins-pereira': 'Estádio Martins Pereira',
      'instituicoes-financeiras': 'Instituições Financeiras',
      'sapucaia-cd-operacoes': 'Sapucaia (CD/Operações)',
      'auditoria': 'Auditoria'
    };
    const urlLowerCase = urlNome.toLowerCase();
    if (mapeamentoEspecial[urlLowerCase]) {
      return mapeamentoEspecial[urlLowerCase];
    }

    // Conversão padrão: trocar hífens por espaços e capitalizar
    return urlNome.split('-').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)).join(' ');
  };
  const nomeDepartamento = converterUrlParaNome(nome || '');
  const isEcommerce = nomeDepartamento.toLowerCase().includes('e-commerce');
  const isControladoria = nomeDepartamento.toLowerCase().includes('controladoria');
  const isAuditoria = nomeDepartamento.toLowerCase().includes('auditoria');
  const isFinanceiroVarejo = nomeDepartamento.toLowerCase().includes('financeiro') && nomeDepartamento.toLowerCase().includes('varejo');
  const isRecicalce = nomeDepartamento.toLowerCase().includes('recicalce');
  const isSaoJoseEsporteClub = nomeDepartamento.toLowerCase().includes('são josé esporte club');
  const isEstadioMartinsPereira = nomeDepartamento.toLowerCase().includes('estádio martins pereira');
  const isFiscal = nomeDepartamento.toLowerCase().includes('fiscal');
  const isSaoJoseCampos = nomeDepartamento.toLowerCase().includes('são josé dos campos') || nomeDepartamento.toLowerCase().includes('cd/operações');
  const isDepartamentoPessoal = nomeDepartamento.toLowerCase().includes('departamento pessoal') || nomeDepartamento.toLowerCase().includes('dp');
  const isLojas = nomeDepartamento.toLowerCase().includes('lojas');
  console.log('URL param:', nome);
  console.log('Nome do departamento convertido:', nomeDepartamento);
  return <div className="animate-fade-in">
      <div className="mb-6 flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={() => navigate('/departamentos')} className="flex items-center gap-2">
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
        {isRecicalce ? <RecicalceInfo /> : 
        /* Conteúdo específico para São José Esporte Club */
        isSaoJoseEsporteClub ? <SaoJoseEsporteClubInfo /> : 
        /* Conteúdo específico para Estádio Martins Pereira */
        isEstadioMartinsPereira ? <EstadioMartinsPereira /> : 
        /* Conteúdo específico para Lojas */
        isLojas ? <LojaVirtual /> : <>
            {/* Estrutura do Departamento */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="text-blue-600" size={24} />
                  Estrutura do Departamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSaoJoseCampos ? <EstruturaSaoJoseCampos /> : <EstruturaDepartamento departamento={nomeDepartamento} />}
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
                {isControladoria ? <FluxoControladoria /> : isFiscal ? <FluxoFiscal /> : <FluxoDepartamento departamento={nomeDepartamento} />}
              </CardContent>
            </Card>

            {/* Lojas e responsáveis - Só exibe para Financeiro Varejo */}
            {isFinanceiroVarejo && <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="text-blue-600" size={24} />
                    Lojas e responsáveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <LojasResponsaveis />
                </CardContent>
              </Card>}

            {/* Centro de Custo - Só exibe para Financeiro Varejo */}
            {isFinanceiroVarejo && <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="text-indigo-600" size={24} />
                    Grupos de Lojas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CentroCusto />
                </CardContent>
              </Card>}

            {/* Pilares do E-commerce - Só exibe para E-commerce */}
            {isEcommerce && <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Puzzle className="text-orange-600" size={24} />
                    Pilares do E-commerce
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PilaresEcommerce onPilarSelect={setPilarSelecionado} pilarSelecionado={pilarSelecionado} />
                </CardContent>
              </Card>}

            {/* Pilares da Controladoria - Só exibe para Controladoria */}
            {isControladoria && <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Puzzle className="text-orange-600" size={24} />
                    Pilares da Controladoria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PilaresControladoria onPilarSelect={setPilarSelecionado} pilarSelecionado={pilarSelecionado} />
                </CardContent>
              </Card>}

            {/* Pilares da Auditoria - Só exibe para Auditoria */}
            {isAuditoria && <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Puzzle className="text-orange-600" size={24} />
                    Pilares da Auditoria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PilaresAuditoria onPilarSelect={setPilarSelecionado} pilarSelecionado={pilarSelecionado} />
                </CardContent>
              </Card>}

            {/* Pilares do Departamento Pessoal - Só exibe para DP */}
            {isDepartamentoPessoal && <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Puzzle className="text-orange-600" size={24} />
                    Pilares do Departamento Pessoal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <PilaresDepartamentoPessoal onPilarSelect={setPilarSelecionado} pilarSelecionado={pilarSelecionado} />
                </CardContent>
              </Card>}

            {/* Materiais e Treinamentos - Só exibe para DP */}
            {isDepartamentoPessoal && <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="text-blue-600" size={24} />
                    Materiais e Treinamentos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" defaultChecked />
                        <div className="flex-1 space-y-2">
                          <h4 className="font-medium text-gray-900">Manual - Gestão de Ponto</h4>
                          <p className="text-sm text-gray-600">Principais funcionalidades existentes na nova Plataforma de Gestão de Ponto.</p>
                          <Button variant="default" size="sm" className="bg-gray-800 hover:bg-gray-900 text-white" onClick={() => window.open('https://drive.google.com/uc?export=download&id=1r-kP7cj2L0SPZLIPkV7IyyBDKpzKhS1D', '_blank')}>
                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                            Baixar PDF
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" defaultChecked />
                        <div className="flex-1 space-y-2">
                          <h4 className="font-medium text-gray-900">Processos de Admissão</h4>
                          <p className="text-sm text-gray-600">Documentação completa dos processos de admissão de colaboradores.</p>
                          <Button variant="default" size="sm" className="bg-gray-800 hover:bg-gray-900 text-white" onClick={() => window.open('/processos_admissao_dp.pdf', '_blank')}>
                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                            Baixar PDF
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300" defaultChecked />
                        <div className="flex-1 space-y-2">
                          <h4 className="font-medium text-gray-900">Processo Cálculo de Folha</h4>
                          <p className="text-sm text-gray-600">Procedimentos e metodologia para cálculo da folha de pagamento.</p>
                          <Button variant="default" size="sm" className="bg-gray-800 hover:bg-gray-900 text-white" onClick={() => window.open('/processo_calculo_folha_dp.pdf', '_blank')}>
                            <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                            </svg>
                            Baixar PDF
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>}

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
          </>}
      </div>
    </div>;
};
export default DetalheDepartamento;