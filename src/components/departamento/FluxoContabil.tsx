import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, FileText, Receipt, Building2, Database, FileCheck, FileBarChart, File, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

const FluxoContabil: React.FC = () => {
  const processos = [
    {
      id: '9.1',
      nome: 'Lançamento de Despesas das Lojas',
      icon: Receipt,
      cor: 'bg-blue-500',
      descricao: 'Lançamento contábil de despesas das lojas com identificação, organização e arquivamento.'
    },
    {
      id: '9.2',
      nome: 'Apuração do PIS e COFINS',
      icon: Calculator,
      cor: 'bg-green-500',
      descricao: 'Cálculo e apuração dos tributos PIS e COFINS baseado em dados fiscais.'
    },
    {
      id: '9.3',
      nome: 'Conferência de Caixas',
      icon: Building2,
      cor: 'bg-purple-500',
      descricao: 'Conferência e conciliação dos caixas PDV, Loja e Tesouraria.'
    },
    {
      id: '9.4',
      nome: 'Importação de Extratos Bancários',
      icon: Database,
      cor: 'bg-cyan-500',
      descricao: 'Importação e conciliação de extratos bancários no sistema Prosoft.'
    },
    {
      id: '9.5',
      nome: 'Integração Fiscal',
      icon: FileCheck,
      cor: 'bg-orange-500',
      descricao: 'Integração de notas fiscais entre módulos Fiscal e Contábil.'
    },
    {
      id: '9.6',
      nome: 'Fechamento Contábil Mensal',
      icon: FileBarChart,
      cor: 'bg-red-500',
      descricao: 'Processo completo de fechamento mensal com integrações e validações.'
    },
    {
      id: '9.7',
      nome: 'Conciliação de Receitas e Despesas',
      icon: TrendingUp,
      cor: 'bg-indigo-500',
      descricao: 'Conciliação contábil entre receitas/despesas e relatórios financeiros.'
    },
    {
      id: '9.8',
      nome: 'Geração da ECD',
      icon: File,
      cor: 'bg-teal-500',
      descricao: 'Geração e transmissão da Escrituração Contábil Digital.'
    },
    {
      id: '9.9',
      nome: 'Geração da ECF',
      icon: FileText,
      cor: 'bg-emerald-500',
      descricao: 'Geração e transmissão da Escrituração Contábil Fiscal.'
    },
    {
      id: '9.10',
      nome: 'Apuração do Lucro Real',
      icon: DollarSign,
      cor: 'bg-amber-500',
      descricao: 'Apuração trimestral do Lucro Real para IRPJ e CSLL.'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Fluxo do Departamento Contábil
        </h2>
        <p className="text-lg text-gray-600">
          Processos contábeis essenciais para gestão financeira e cumprimento de obrigações fiscais
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {processos.map((processo, index) => (
          <Card key={processo.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${processo.cor}`}>
                  <processo.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {processo.id} - {processo.nome}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{processo.descricao}</p>
              <div className="flex items-center text-sm text-blue-600 font-medium">
                Ver detalhes <ArrowRight className="ml-1 h-4 w-4" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Fluxo Sequencial dos Processos
          </h3>
          <p className="text-gray-600 mb-4">
            Os processos contábeis seguem uma sequência lógica mensal e anual
          </p>
          
          <div className="flex flex-wrap justify-center items-center space-x-2 space-y-2">
            {[
              { nome: 'Lançamentos', cor: 'bg-blue-100 text-blue-800' },
              { nome: 'Apurações', cor: 'bg-green-100 text-green-800' },
              { nome: 'Conferências', cor: 'bg-purple-100 text-purple-800' },
              { nome: 'Integrações', cor: 'bg-orange-100 text-orange-800' },
              { nome: 'Fechamento', cor: 'bg-red-100 text-red-800' },
              { nome: 'Obrigações', cor: 'bg-teal-100 text-teal-800' }
            ].map((etapa, index) => (
              <React.Fragment key={etapa.nome}>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${etapa.cor}`}>
                  {etapa.nome}
                </span>
                {index < 5 && <ArrowRight className="h-4 w-4 text-gray-400" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FluxoContabil;