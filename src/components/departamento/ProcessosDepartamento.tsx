import React, { useState } from 'react';
import { TrendingUp, DollarSign, FileCheck, BarChart3, Calculator, CreditCard, PieChart, Receipt, 
         Truck, ShoppingCart, Users, Monitor, FileText, Phone, Store, Package, Headphones,
         BarChart2, Repeat, FileSearch, Clock, AlertCircle, ListOrdered, ShoppingBag, Target,
         UserPlus, Gift, LayoutGrid, Search, CalendarCheck, Megaphone, Camera, Edit, Folder,
         Inbox, ClipboardPlus, CheckCircle, Scale, FileX, CreditCard as CreditCardIcon,
         Building, UserCheck, AlertTriangle } from 'lucide-react';
import ProcessoDetalhe from './ProcessoDetalhe';
import { processosEcommerce } from '@/data/processos/ecommerce';
import { processosControladoriaDetalhados } from '@/data/processos/controladoria';
import { processosFinanceiro } from '@/data/processos/financeiro';
import { processosDefeito } from '@/data/processos/defeito';
import { processosSaoJoseCampos } from '@/data/processos/sao-jose-campos';
import { processosFiscal } from '@/data/processos/fiscal';
import { processosCompras } from '@/data/processos/compras';
import { processosAuditoria, processosAuditor, processosConferente } from '@/data/processos/auditoria';
import { processosContabil } from '@/data/processos/contabil';
import PilaresControladoria from './PilaresControladoria';
import PilaresAuditoria from './PilaresAuditoria';
import PilaresContabil from './PilaresContabil';

interface ProcessosDepartamentoProps {
  departamento: string;
  pilarSelecionado?: string;
}

const ProcessosDepartamento: React.FC<ProcessosDepartamentoProps> = ({ departamento, pilarSelecionado }) => {
  const [processoExpandido, setProcessoExpandido] = useState<string | null>(null);
  const [pilarSelecionadoLocal, setPilarSelecionado] = useState<string>('');

  // Separar processos de Contábil por nível
  const processosContabilOperacional = processosContabil.filter(p => p.nivel === 'Operacional');
  const processosContabilEstrategico = processosContabil.filter(p => p.nivel === 'Tático' || p.nivel === 'Estratégico');

  const processosPorPilar: {[key: string]: any[]} = {
    'Logística': processosEcommerce['Logística'] || [],
    'Vendedor 3.0': processosEcommerce['Vendedor 3.0'] || [],
    'Cadastro': processosEcommerce['Cadastro'] || [],
    'Financeiro': processosEcommerce['Financeiro'] || [],
    'Comercial 1P': processosEcommerce['Comercial 1P'] || [],
    'Visual Merchandising': processosEcommerce['Visual Merchandising'] || [],
    'SAC': processosEcommerce['SAC'] || [],
    'Marketplace': processosEcommerce['Marketplace'] || [],
    'Produto': processosEcommerce['Produto'] || [],
    
    'Auditoria Interna': processosControladoriaDetalhados.filter(p => p.id.includes('02.1') || p.id.includes('02.2')),
    'Apoio a loja': processosControladoriaDetalhados.filter(p => p.id.includes('02.3')),
    'Conciliação': processosControladoriaDetalhados.filter(p => p.id.includes('02.4') || p.id.includes('02.5')),
    'Contrato e despesas': processosControladoriaDetalhados.filter(p => p.id.includes('02.6') || p.id.includes('02.8')),
    'Recuperação de receitas': processosControladoriaDetalhados.filter(p => p.id.includes('02.7')),
    
    // Processos do Fiscal
    'Importação e Escrituração': processosFiscal.filter(p => p.id.includes('03.1') || p.id.includes('03.2')),
    'Apuração ICMS': processosFiscal.filter(p => p.id.includes('03.3')),
    'Obrigações Federais': processosFiscal.filter(p => p.id.includes('03.4') || p.id.includes('03.8') || p.id.includes('03.9') || p.id.includes('03.10') || p.id.includes('03.11') || p.id.includes('03.12')),
    'Obrigações Estaduais': processosFiscal.filter(p => p.id.includes('03.5') || p.id.includes('03.7')),
    'Simples Nacional': processosFiscal.filter(p => p.id.includes('03.6')),
    'Pernambuco': processosFiscal.filter(p => p.id.includes('03.13')),
    
    // Processos de Auditoria
    'Auditoria': processosAuditor,
    'Conferente': processosConferente,

    // Processos de Contábil
    'Operacional': processosContabilOperacional,
    'Estratégico': processosContabilEstrategico
  };

  const obterTodosProcessosEcommerce = () => {
    const todosProcessos: any[] = [];
    const pilaresEcommerce = ['Logística', 'Vendedor 3.0', 'Cadastro', 'Financeiro', 'Comercial 1P', 'Visual Merchandising', 'SAC', 'Marketplace', 'Produto'];
    
    pilaresEcommerce.forEach(pilar => {
      if (processosEcommerce[pilar]) {
        todosProcessos.push(...processosEcommerce[pilar]);
      }
    });
    
    return todosProcessos;
  };

  const obterTodosProcessosContabil = () => {
    const todosProcessos: any[] = [];
    const pilaresContabil = ['Operacional', 'Estratégico'];
    
    pilaresContabil.forEach(pilar => {
      if (processosPorPilar[pilar]) {
        todosProcessos.push(...processosPorPilar[pilar]);
      }
    });
    
    return todosProcessos;
  };

  const obterTodosProcessosControladoria = () => {
    const todosProcessos: any[] = [];
    const pilaresControladoria = ['Auditoria Interna', 'Apoio a loja', 'Conciliação', 'Contrato e despesas', 'Recuperação de receitas'];
    
    pilaresControladoria.forEach(pilar => {
      if (processosPorPilar[pilar]) {
        todosProcessos.push(...processosPorPilar[pilar]);
      }
    });
    
    return todosProcessos;
  };

  const handleProcessoClick = (processo: any) => {
    if (processo.subprocessos) {
      setProcessoExpandido(processo.id);
    }
  };

  const encontrarProcessoDetalhado = (id: string) => {
    // Primeiro verifica nos processos detalhados da Controladoria
    const processoControladoria = processosControladoriaDetalhados.find(p => p.id === id);
    if (processoControladoria) {
      return processoControladoria;
    }

    // Verifica nos processos de Auditoria
    const processoAuditoria = processosAuditoria.find(p => p.id === id);
    if (processoAuditoria) {
      return processoAuditoria;
    }

    // Depois verifica nos processos detalhados do E-commerce  
    const todosProcessos = departamento.toLowerCase().includes('controladoria') 
      ? obterTodosProcessosControladoria()
      : obterTodosProcessosEcommerce();
    return todosProcessos.find(p => p.id === id && p.subprocessos);
  };

  // Add handling for Compras department
  if (departamento.toLowerCase().includes('compras')) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-orange-100">Departamento Compras - {processosCompras.length} processos mapeados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processosCompras.map((processo) => {
            const IconComponent = processo.icon;
            const temDetalhes = processo.subprocessos && processo.subprocessos.length > 0;
            
            return (
              <div
                key={processo.id}
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${temDetalhes ? 'cursor-pointer' : ''}`}
                onClick={() => temDetalhes && setProcessoExpandido(processo.id)}
              >
                <div className={`${processo.cor} p-4`}>
                  <div className="flex items-center justify-between text-white">
                    <IconComponent size={24} />
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">
                      {processo.id}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {processo.nome}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {processo.descricao}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                        processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {processo.nivel}
                    </span>
                    {temDetalhes && (
                      <span className="text-xs text-blue-600 font-medium">
                        Clique para detalhes
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {processoExpandido && (
          <ProcessoDetalhe
            processo={processosCompras.find(p => p.id === processoExpandido)!}
            onClose={() => setProcessoExpandido(null)}
          />
        )}
      </div>
    );
  }

  // Add handling for Financeiro department
  if (departamento.toLowerCase().includes('financeiro')) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-blue-100">Departamento Financeiro - {processosFinanceiro.length} processos mapeados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processosFinanceiro.map((processo) => {
            const IconComponent = processo.icon;
            const temDetalhes = processo.subprocessos && processo.subprocessos.length > 0;
            
            return (
              <div
                key={processo.id}
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${temDetalhes ? 'cursor-pointer' : ''}`}
                onClick={() => temDetalhes && setProcessoExpandido(processo.id)}
              >
                <div className={`${processo.cor} p-4`}>
                  <div className="flex items-center justify-between text-white">
                    <IconComponent size={24} />
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">
                      {processo.id}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {processo.nome}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {processo.descricao}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                        processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {processo.nivel}
                    </span>
                    {temDetalhes && (
                      <span className="text-xs text-blue-600 font-medium">
                        Clique para detalhes
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {processoExpandido && (
          <ProcessoDetalhe
            processo={processosFinanceiro.find(p => p.id === processoExpandido)!}
            onClose={() => setProcessoExpandido(null)}
          />
        )}
      </div>
    );
  }

  // Add handling for Defeito department
  if (departamento.toLowerCase().includes('defeito')) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-red-100">Departamento Defeito - {processosDefeito.length} processos mapeados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processosDefeito.map((processo) => {
            const IconComponent = processo.icon;
            const temDetalhes = processo.subprocessos && processo.subprocessos.length > 0;
            
            return (
              <div
                key={processo.id}
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${temDetalhes ? 'cursor-pointer' : ''}`}
                onClick={() => temDetalhes && setProcessoExpandido(processo.id)}
              >
                <div className={`${processo.cor} p-4`}>
                  <div className="flex items-center justify-between text-white">
                    <IconComponent size={24} />
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">
                      {processo.id}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {processo.nome}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {processo.descricao}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                        processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {processo.nivel}
                    </span>
                    {temDetalhes && (
                      <span className="text-xs text-blue-600 font-medium">
                        Clique para detalhes
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {processoExpandido && (
          <ProcessoDetalhe
            processo={processosDefeito.find(p => p.id === processoExpandido)!}
            onClose={() => setProcessoExpandido(null)}
          />
        )}
      </div>
    );
  }

  // Add handling for São José dos Campos department
  if (departamento.toLowerCase().includes('são josé dos campos')) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-green-100">São José dos Campos (CD/Operações) - {processosSaoJoseCampos.length} processos mapeados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processosSaoJoseCampos.map((processo) => {
            const IconComponent = processo.icon;
            const temDetalhes = processo.subprocessos && processo.subprocessos.length > 0;
            
            return (
              <div
                key={processo.id}
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${temDetalhes ? 'cursor-pointer' : ''}`}
                onClick={() => temDetalhes && setProcessoExpandido(processo.id)}
              >
                <div className={`${processo.cor} p-4`}>
                  <div className="flex items-center justify-between text-white">
                    <IconComponent size={24} />
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">
                      {processo.id}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {processo.nome}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {processo.descricao}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                        processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {processo.nivel}
                    </span>
                    {temDetalhes && (
                      <span className="text-xs text-blue-600 font-medium">
                        Clique para detalhes
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {processoExpandido && (
          <ProcessoDetalhe
            processo={processosSaoJoseCampos.find(p => p.id === processoExpandido)!}
            onClose={() => setProcessoExpandido(null)}
          />
        )}
      </div>
    );
  }

  if (departamento.toLowerCase().includes('controladoria')) {
    if (pilarSelecionado) {
      const processosPilar = processosPorPilar[pilarSelecionado] || [];
      
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Processos - {pilarSelecionado}</h3>
            <p className="text-purple-100">{processosPilar.length} processos mapeados</p>
          </div>

          {processosPilar.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {processosPilar.map((processo) => {
                const IconComponent = processo.icon;
                const temDetalhes = processo.subprocessos;
                
                return (
                  <div
                    key={processo.id}
                    className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${temDetalhes ? 'cursor-pointer' : ''}`}
                    onClick={() => handleProcessoClick(processo)}
                  >
                    <div className={`${processo.cor} p-4`}>
                      <div className="flex items-center justify-between text-white">
                        <IconComponent size={24} />
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">
                          {processo.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {processo.nome}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {processo.descricao}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                          {processo.nivel}
                        </span>
                        {temDetalhes && (
                          <span className="text-xs text-blue-600 font-medium">
                            Clique para detalhes
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <FileCheck className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600">Processos em desenvolvimento para este pilar.</p>
            </div>
          )}

          {processoExpandido && (
            <ProcessoDetalhe
              processo={encontrarProcessoDetalhado(processoExpandido)!}
              onClose={() => setProcessoExpandido(null)}
            />
          )}
        </div>
      );
    } else {
      const todosProcessos = obterTodosProcessosControladoria();
      
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Todos os Processos - Controladoria</h3>
            <p className="text-purple-100">{todosProcessos.length} processos mapeados em todos os pilares</p>
            <p className="text-sm text-purple-200 mt-1">Selecione um pilar acima para filtrar os processos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todosProcessos.map((processo) => {
              const IconComponent = processo.icon;
              const temDetalhes = processo.subprocessos;
              
              return (
                <div
                  key={processo.id}
                  className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${temDetalhes ? 'cursor-pointer' : ''}`}
                  onClick={() => handleProcessoClick(processo)}
                >
                  <div className={`${processo.cor} p-4`}>
                    <div className="flex items-center justify-between text-white">
                      <IconComponent size={24} />
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">
                        {processo.id}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {processo.nome}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {processo.descricao}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        {processo.nivel}
                      </span>
                      {temDetalhes && (
                        <span className="text-xs text-blue-600 font-medium">
                          Clique para detalhes
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {processoExpandido && (
            <ProcessoDetalhe
              processo={encontrarProcessoDetalhado(processoExpandido)!}
              onClose={() => setProcessoExpandido(null)}
            />
          )}
        </div>
      );
    }
  }

  if (departamento.toLowerCase().includes('e-commerce')) {
    if (pilarSelecionado) {
      const processosPilar = processosPorPilar[pilarSelecionado] || [];
      
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-orange-600 to-purple-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Processos - {pilarSelecionado}</h3>
            <p className="text-orange-100">{processosPilar.length} processos mapeados</p>
          </div>

          {processosPilar.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {processosPilar.map((processo) => {
                const IconComponent = processo.icon;
                const temDetalhes = processo.subprocessos;
                
                return (
                  <div
                    key={processo.id}
                    className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${temDetalhes ? 'cursor-pointer' : ''}`}
                    onClick={() => handleProcessoClick(processo)}
                  >
                    <div className={`${processo.cor} p-4`}>
                      <div className="flex items-center justify-between text-white">
                        <IconComponent size={24} />
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">
                          {processo.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {processo.nome}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {processo.descricao}
                      </p>
                      <div className="flex justify-between items-center">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                            processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}
                        >
                          {processo.nivel}
                        </span>
                        {temDetalhes && (
                          <span className="text-xs text-blue-600 font-medium">
                            Clique para detalhes
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <FileCheck className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600">Processos em desenvolvimento para este pilar.</p>
            </div>
          )}

          {processoExpandido && (
            <ProcessoDetalhe
              processo={encontrarProcessoDetalhado(processoExpandido)!}
              onClose={() => setProcessoExpandido(null)}
            />
          )}
        </div>
      );
    } else {
      const todosProcessos = obterTodosProcessosEcommerce();
      
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Todos os Processos - E-commerce</h3>
            <p className="text-blue-100">{todosProcessos.length} processos mapeados em todos os pilares</p>
            <p className="text-sm text-blue-200 mt-1">Selecione um pilar acima para filtrar os processos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {todosProcessos.map((processo) => {
              const IconComponent = processo.icon;
              const temDetalhes = processo.subprocessos;
              
              return (
                <div
                  key={processo.id}
                  className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${temDetalhes ? 'cursor-pointer' : ''}`}
                  onClick={() => handleProcessoClick(processo)}
                >
                  <div className={`${processo.cor} p-4`}>
                    <div className="flex items-center justify-between text-white">
                      <IconComponent size={24} />
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">
                        {processo.id}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {processo.nome}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {processo.descricao}
                    </p>
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                          processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}
                      >
                        {processo.nivel}
                      </span>
                      {temDetalhes && (
                        <span className="text-xs text-blue-600 font-medium">
                          Clique para detalhes
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {processoExpandido && (
            <ProcessoDetalhe
              processo={encontrarProcessoDetalhado(processoExpandido)!}
              onClose={() => setProcessoExpandido(null)}
            />
          )}
        </div>
      );
    }
  }

  if (departamento.toLowerCase().includes('financeiro')) {
    const processos = [
      {
        id: 'FIN-001',
        nome: 'Gestão de Fluxo de Caixa',
        descricao: 'Controle e monitoramento do fluxo financeiro',
        icon: TrendingUp,
        cor: 'bg-gradient-to-br from-blue-500 to-blue-600',
        nivel: 'Estratégico'
      },
      {
        id: 'FIN-002', 
        nome: 'Contas a Pagar',
        descricao: 'Gerenciamento de pagamentos a fornecedores',
        icon: DollarSign,
        cor: 'bg-gradient-to-br from-green-500 to-green-600',
        nivel: 'Operacional'
      },
      {
        id: 'FIN-003',
        nome: 'Contas a Receber',
        descricao: 'Controle de recebimentos de clientes',
        icon: Receipt,
        cor: 'bg-gradient-to-br from-purple-500 to-purple-600', 
        nivel: 'Operacional'
      }
    ];

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-blue-100">Departamento Financeiro - {processos.length} processos mapeados</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {processos.map((processo) => {
            const IconComponent = processo.icon;
            return (
              <div
                key={processo.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className={`${processo.cor} p-4`}>
                  <div className="flex items-center justify-between text-white">
                    <IconComponent size={24} />
                    <span className="text-xs bg-white/20 px-2 py-1 rounded">
                      {processo.id}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {processo.nome}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {processo.descricao}
                  </p>
                  <div className="flex justify-between items-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                        processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}
                    >
                      {processo.nivel}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Add handling for Fiscal department
  if (departamento.toLowerCase().includes('fiscal')) {
    if (pilarSelecionado) {
      const processosPilar = processosPorPilar[pilarSelecionado] || [];
      
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Processos - {pilarSelecionado}</h3>
            <p className="text-green-100">{processosPilar.length} processos mapeados</p>
          </div>

          {processosPilar.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {processosPilar.map((processo) => {
                const IconComponent = processo.icon;
                const temDetalhes = processo.subprocessos && processo.subprocessos.length > 0;
                
                return (
                  <div
                    key={processo.id}
                    className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${temDetalhes ? 'cursor-pointer' : ''}`}
                    onClick={() => temDetalhes && setProcessoExpandido(processo.id)}
                  >
                    <div className={`${processo.cor} p-4`}>
                      <div className="flex items-center justify-between text-white">
                        <IconComponent size={24} />
                        <span className="text-xs bg-white/20 px-2 py-1 rounded">
                          {processo.id}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {processo.nome}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {processo.descricao}
                      </p>
                      <div className="flex justify-between items-center">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                            processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}
                        >
                          {processo.nivel}
                        </span>
                        {temDetalhes && (
                          <span className="text-xs text-blue-600 font-medium">
                            Clique para detalhes
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <FileCheck className="mx-auto mb-4 text-gray-400" size={48} />
              <p className="text-gray-600">Processos em desenvolvimento para este pilar.</p>
            </div>
          )}

          {processoExpandido && (
            <ProcessoDetalhe
              processo={processosFiscal.find(p => p.id === processoExpandido)!}
              onClose={() => setProcessoExpandido(null)}
            />
          )}
        </div>
      );
    } else {
      return (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
            <p className="text-green-100">Departamento Fiscal - {processosFiscal.length} processos mapeados</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processosFiscal.map((processo) => {
              const IconComponent = processo.icon;
              const temDetalhes = processo.subprocessos && processo.subprocessos.length > 0;
              
              return (
                <div
                  key={processo.id}
                  className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden ${temDetalhes ? 'cursor-pointer' : ''}`}
                  onClick={() => temDetalhes && setProcessoExpandido(processo.id)}
                >
                  <div className={`${processo.cor} p-4`}>
                    <div className="flex items-center justify-between text-white">
                      <IconComponent size={24} />
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">
                        {processo.id}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {processo.nome}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {processo.descricao}
                    </p>
                    <div className="flex justify-between items-center">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                          processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}
                      >
                        {processo.nivel}
                      </span>
                      {temDetalhes && (
                        <span className="text-xs text-blue-600 font-medium">
                          Clique para detalhes
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {processoExpandido && (
            <ProcessoDetalhe
              processo={processosFiscal.find(p => p.id === processoExpandido)!}
              onClose={() => setProcessoExpandido(null)}
            />
          )}
        </div>
      );
  }

  // Contábil
  if (departamento.toLowerCase().includes('contábil') || departamento.toLowerCase().includes('contabil')) {
    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
          <p className="text-blue-100">Departamento Contábil - {processosContabil.length} processos mapeados</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <PilaresContabil 
            onPilarSelect={setPilarSelecionado}
            pilarSelecionado={pilarSelecionadoLocal}
          />
        </div>
        
        {pilarSelecionadoLocal && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processosPorPilar[pilarSelecionadoLocal]?.map((processo) => {
              const IconComponent = processo.icon;
              return (
                <div key={processo.id} className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden cursor-pointer`}
                  onClick={() => processo.subprocessos && setProcessoExpandido(processo.id)}>
                  <div className={`${processo.cor} p-4`}>
                    <div className="flex items-center justify-between text-white">
                      <IconComponent size={24} />
                      <span className="text-xs bg-white/20 px-2 py-1 rounded">{processo.id}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{processo.nome}</h4>
                    <p className="text-sm text-gray-600 mb-3">{processo.descricao}</p>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      processo.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                      processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'}`}>
                      {processo.nivel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {processoExpandido && (
          <ProcessoDetalhe
            processo={processosContabil.find(p => p.id === processoExpandido)!}
            onClose={() => setProcessoExpandido(null)}
          />
        )}
      </div>
    );
  }

  // Auditoria
    if (departamento.toLowerCase().includes('auditoria')) {
      return (
        <div className="space-y-8">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">Mapeamento de Processos</h3>
            <p className="text-purple-100">Departamento Auditoria - {processosAuditoria.length} processos mapeados</p>
          </div>
          
          {/* Seção dos Pilares da Auditoria */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Pilares da Auditoria</h3>
              <p className="text-gray-600">Selecione um pilar para visualizar os processos específicos</p>
            </div>
            
            <PilaresAuditoria 
              onPilarSelect={setPilarSelecionado}
              pilarSelecionado={pilarSelecionadoLocal}
            />
          </div>
          
          {pilarSelecionadoLocal && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Processos do Pilar: {pilarSelecionadoLocal}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {processosPorPilar[pilarSelecionadoLocal]?.map((processo) => {
                  const IconComponent = processo.icon;
                  const temSubprocessos = processo.subprocessos && processo.subprocessos.length > 0;
                  
                  return (
                    <div
                      key={processo.id}
                      className={`bg-gray-50 p-4 rounded-lg shadow-md border-l-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:bg-white ${temSubprocessos ? 'hover:bg-gray-100' : ''}`}
                      style={{ borderLeftColor: processo.cor }}
                      onClick={() => temSubprocessos && handleProcessoClick(processo)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <IconComponent size={24} style={{ color: processo.cor }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                              {processo.id}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              processo.nivel === 'Estratégico' ? 'bg-red-100 text-red-800' :
                              processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {processo.nivel}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                            {processo.nome}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {processo.descricao}
                          </p>
                          {temSubprocessos && (
                            <div className="flex items-center mt-2 text-blue-600 text-sm">
                              <span>Ver detalhes</span>
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {processosPorPilar[pilarSelecionadoLocal]?.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">Nenhum processo encontrado para este pilar.</p>
                </div>
              )}
            </div>
          )}
          
          {!pilarSelecionadoLocal && (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Todos os Processos de Auditoria
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {processosAuditoria.map((processo) => {
                  const IconComponent = processo.icon;
                  const temSubprocessos = processo.subprocessos && processo.subprocessos.length > 0;
                  
                  return (
                    <div
                      key={processo.id}
                      className={`bg-gray-50 p-4 rounded-lg shadow-md border-l-4 cursor-pointer transition-all duration-200 hover:shadow-lg hover:bg-white ${temSubprocessos ? 'hover:bg-gray-100' : ''}`}
                      style={{ borderLeftColor: processo.cor }}
                      onClick={() => temSubprocessos && handleProcessoClick(processo)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <IconComponent size={24} style={{ color: processo.cor }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded">
                              {processo.id}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                              processo.nivel === 'Estratégico' ? 'bg-red-100 text-red-800' :
                              processo.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {processo.nivel}
                            </span>
                          </div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">
                            {processo.nome}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {processo.descricao}
                          </p>
                          {temSubprocessos && (
                            <div className="flex items-center mt-2 text-blue-600 text-sm">
                              <span>Ver detalhes</span>
                              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {processoExpandido && (
            <ProcessoDetalhe
              processo={encontrarProcessoDetalhado(processoExpandido)!}
              onClose={() => setProcessoExpandido(null)}
            />
          )}
        </div>
      );
    }
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <FileCheck className="mx-auto mb-4 text-gray-400" size={48} />
      <p className="text-gray-600">Processos não disponíveis para este departamento.</p>
    </div>
  );
};

export default ProcessosDepartamento;
