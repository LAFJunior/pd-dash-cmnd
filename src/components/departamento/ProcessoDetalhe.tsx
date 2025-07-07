
import React from 'react';
import { X, ExternalLink, Clock, BarChart3, Settings, FolderOpen } from 'lucide-react';
import { ProcessoDetalhado } from '@/types/processo';
import { Button } from '@/components/ui/button';
import ProcessoArquivos from './ProcessoArquivos';

interface ProcessoDetalheProps {
  processo: ProcessoDetalhado;
  onClose: () => void;
}

const ProcessoDetalhe: React.FC<ProcessoDetalheProps> = ({ processo, onClose }) => {
  const renderUrl = (url: string) => (
    <a
      key={url}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 underline text-sm"
    >
      {url}
      <ExternalLink size={12} />
    </a>
  );

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className={`${processo.cor} p-6 text-white relative`}>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:bg-white/20"
          >
            <X size={20} />
          </Button>
          
          <div className="flex items-center gap-4">
            <processo.icon size={32} />
            <div>
              <h2 className="text-2xl font-bold">{processo.nome}</h2>
              <p className="text-white/90 text-sm">ID: {processo.id}</p>
              <span className="inline-block bg-white/20 px-2 py-1 rounded text-xs mt-2">
                {processo.nivel}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          {/* Informações Gerais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock size={16} className="text-blue-600" />
                <span className="font-medium text-sm">Tempo de Execução</span>
              </div>
              <p className="text-gray-700">{processo.tempo_execucao}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 size={16} className="text-green-600" />
                <span className="font-medium text-sm">Frequência</span>
              </div>
              <p className="text-gray-700">{processo.frequencia}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Settings size={16} className="text-purple-600" />
                <span className="font-medium text-sm">Sistemas</span>
              </div>
              <p className="text-gray-700">{processo.sistemas_utilizados.join(', ')}</p>
            </div>
          </div>

          {/* Entrada e Saída */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-3 text-blue-700">Entrada</h3>
              <p className="text-gray-700 leading-relaxed">{processo.entrada}</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-3 text-green-700">Saída</h3>
              <p className="text-gray-700 leading-relaxed">{processo.saida}</p>
            </div>
          </div>

          {/* Documentos e Arquivos */}
          {processo.arquivos && processo.arquivos.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FolderOpen size={20} className="text-orange-600" />
                <h3 className="text-xl font-bold text-gray-800">Documentos e Arquivos</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <ProcessoArquivos arquivos={processo.arquivos} />
              </div>
            </div>
          )}

          {/* Subprocessos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Subprocessos</h3>
            
            {processo.subprocessos.map((subprocesso, index) => (
              <div key={subprocesso.id} className="border rounded-lg p-6 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {subprocesso.id} - {subprocesso.nome}
                  </h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    subprocesso.nivel === 'Estratégico' ? 'bg-blue-100 text-blue-800' :
                    subprocesso.nivel === 'Tático' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {subprocesso.nivel}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-600">Ferramentas: </span>
                  <span className="text-sm text-gray-700">{subprocesso.ferramentas.join(', ')}</span>
                </div>

                {/* Tarefas */}
                <div className="space-y-4">
                  {subprocesso.tarefas.map((tarefa) => (
                    <div key={tarefa.id} className="bg-white rounded-lg p-4 border">
                      <h5 className="font-medium text-gray-800 mb-3">
                        {tarefa.id} - {tarefa.nome}
                      </h5>
                      
                      <ul className="space-y-2">
                        {tarefa.passos.map((passo, passoIndex) => (
                          <li key={passoIndex} className="flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {passo}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      {tarefa.urls && tarefa.urls.length > 0 && (
                        <div className="mt-3 pt-3 border-t">
                          <span className="text-sm font-medium text-gray-600 block mb-2">Links:</span>
                          <div className="space-y-1">
                            {tarefa.urls.map(renderUrl)}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessoDetalhe;
