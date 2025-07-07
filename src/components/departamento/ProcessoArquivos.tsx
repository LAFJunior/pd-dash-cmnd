
import React from 'react';
import { FileText, Download, Image, FileSpreadsheet, Eye } from 'lucide-react';
import { ProcessoArquivo } from '@/types/processo';
import { Button } from '@/components/ui/button';

interface ProcessoArquivosProps {
  arquivos: ProcessoArquivo[];
}

const ProcessoArquivos: React.FC<ProcessoArquivosProps> = ({ arquivos }) => {
  const getIconByType = (tipo: string) => {
    switch (tipo) {
      case 'pdf':
      case 'docx':
      case 'md':
        return <FileText size={20} className="text-red-600" />;
      case 'xlsx':
        return <FileSpreadsheet size={20} className="text-green-600" />;
      case 'png':
      case 'jpg':
      case 'svg':
        return <Image size={20} className="text-blue-600" />;
      default:
        return <FileText size={20} className="text-gray-600" />;
    }
  };

  const getCategoryColor = (categoria: string) => {
    switch (categoria) {
      case 'documentacao':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      case 'fluxograma':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'template':
        return 'bg-purple-50 border-purple-200 text-purple-800';
      case 'checklist':
        return 'bg-orange-50 border-orange-200 text-orange-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getCategoryLabel = (categoria: string) => {
    switch (categoria) {
      case 'documentacao':
        return 'Documentação';
      case 'fluxograma':
        return 'Fluxograma';
      case 'template':
        return 'Template';
      case 'checklist':
        return 'Checklist';
      default:
        return categoria;
    }
  };

  const handleDownload = (arquivo: ProcessoArquivo) => {
    // Simular download - em produção seria um link real
    console.log('Baixando arquivo:', arquivo.nome);
    // window.open(arquivo.url, '_blank');
  };

  const handleVisualize = (arquivo: ProcessoArquivo) => {
    // Simular visualização - em produção abriria em modal ou nova aba
    console.log('Visualizando arquivo:', arquivo.nome);
    // Para PDFs, poderia abrir em modal com react-pdf
  };

  if (!arquivos || arquivos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <FileText size={48} className="mx-auto mb-4 text-gray-300" />
        <p>Nenhum arquivo disponível para este processo</p>
      </div>
    );
  }

  // Agrupar arquivos por categoria
  const arquivosPorCategoria = arquivos.reduce((acc, arquivo) => {
    if (!acc[arquivo.categoria]) {
      acc[arquivo.categoria] = [];
    }
    acc[arquivo.categoria].push(arquivo);
    return acc;
  }, {} as Record<string, ProcessoArquivo[]>);

  return (
    <div className="space-y-6">
      {Object.entries(arquivosPorCategoria).map(([categoria, arquivosCategoria]) => (
        <div key={categoria}>
          <h4 className="text-lg font-semibold mb-3 text-gray-800">
            {getCategoryLabel(categoria)}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {arquivosCategoria.map((arquivo) => (
              <div
                key={arquivo.id}
                className={`border rounded-lg p-4 ${getCategoryColor(categoria)}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getIconByType(arquivo.tipo)}
                    <div>
                      <h5 className="font-medium text-sm">{arquivo.nome}</h5>
                      <p className="text-xs text-gray-600">
                        {arquivo.tipo.toUpperCase()} • {arquivo.tamanho}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    Atualizado em {arquivo.dataAtualizacao}
                  </span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleVisualize(arquivo)}
                      className="h-8 px-2"
                    >
                      <Eye size={14} />
                      <span className="ml-1 text-xs">Ver</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(arquivo)}
                      className="h-8 px-2"
                    >
                      <Download size={14} />
                      <span className="ml-1 text-xs">Baixar</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessoArquivos;
