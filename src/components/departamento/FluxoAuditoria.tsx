import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ClipboardList, Search, AlertTriangle, FileText, TrendingUp, CheckCircle } from 'lucide-react';
const FluxoAuditoria = () => {
  const etapas = [{
    id: 1,
    titulo: "Planejamento",
    subtitulo: "(coordenação)",
    icon: ClipboardList,
    cor: "bg-blue-500",
    descricao: "Definição de cronograma e escopo das auditorias"
  }, {
    id: 2,
    titulo: "Execução",
    subtitulo: "(auditores e conferentes)",
    icon: Search,
    cor: "bg-green-500",
    descricao: "Realização das auditorias de estoque e caixa"
  }, {
    id: 3,
    titulo: "Tratamento de divergências",
    subtitulo: "(estoque/caixa/chamados)",
    icon: AlertTriangle,
    cor: "bg-orange-500",
    descricao: "Análise e correção de discrepâncias encontradas"
  }, {
    id: 4,
    titulo: "Identificação de riscos",
    subtitulo: "e não conformidades",
    icon: FileText,
    cor: "bg-red-500",
    descricao: "Mapeamento de falhas e classificação de riscos"
  }, {
    id: 5,
    titulo: "Encerramento e reporte",
    subtitulo: "(TopDesk, relatórios, comunicação)",
    icon: TrendingUp,
    cor: "bg-purple-500",
    descricao: "Documentação e comunicação dos resultados"
  }, {
    id: 6,
    titulo: "Acompanhamento",
    subtitulo: "e melhoria contínua",
    icon: CheckCircle,
    cor: "bg-indigo-500",
    descricao: "Monitoramento de ações corretivas"
  }];
  return <div className="space-y-6">
      <div className="text-center">
        
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {etapas.map((etapa, index) => {
        const IconComponent = etapa.icon;
        const isLast = index === etapas.length - 1;
        return <div key={etapa.id} className="relative">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center mb-3">
                    <div className={`${etapa.cor} text-white p-2 rounded-full`}>
                      <IconComponent size={20} />
                    </div>
                  </div>
                  
                  <div className="text-center space-y-1">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="bg-gray-100 text-gray-800 text-sm font-medium px-2 py-1 rounded-full">
                        {etapa.id}
                      </span>
                    </div>
                    
                    <h4 className="font-bold text-gray-800 text-base">
                      {etapa.titulo}
                    </h4>
                    
                    <p className="text-xs text-gray-600 font-medium">
                      {etapa.subtitulo}
                    </p>
                    
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {etapa.descricao}
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {!isLast && <div className="hidden lg:block absolute top-1/2 -right-8 transform -translate-y-1/2">
                  <ArrowRight className="text-gray-400" size={24} />
                </div>}
            </div>;
      })}
      </div>
    </div>;
};
export default FluxoAuditoria;