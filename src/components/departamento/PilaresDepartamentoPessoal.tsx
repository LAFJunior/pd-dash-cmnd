import React from 'react';
import { Building, Store } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface PilaresDepartamentoPessoalProps {
  onPilarSelect: (pilar: string) => void;
  pilarSelecionado: string;
}

const PilaresDepartamentoPessoal: React.FC<PilaresDepartamentoPessoalProps> = ({ onPilarSelect, pilarSelecionado }) => {
  const pilares = [
    { 
      nome: 'Azul', 
      icon: Building, 
      cor: 'bg-blue-500 hover:bg-blue-600',
      lojas: [
        { matriz: '101', filial: '008 - 48.973.705/0013-55' },
        { matriz: '101', filial: '041 - 48.973.705/0009-79' },
        { matriz: '101', filial: '045 - 48.973.705/0010-02' },
        { matriz: '101', filial: '054 - 48.973.705/0026-70' },
        { matriz: '101', filial: '058 - 48.973.705/0027-50' },
        { matriz: '101', filial: '061 - 48.973.705/0025-99' },
        { matriz: '101', filial: '062 - 48.973.705/0023-27' },
        { matriz: '101', filial: '063 - 48.973.705/0024-08' },
        { matriz: '101', filial: '064 - 48.973.705/0020-84' },
        { matriz: '101', filial: '065 - 48.973.705/0018-60' },
        { matriz: '101', filial: '066 - 48.973.705/0019-40' },
        { matriz: '101', filial: '068 - 48.973.705/0012-74' },
        { matriz: '101', filial: '069 - 48.973.705/0028-31' },
        { matriz: '101', filial: '072 - 48.973.705/0008-98' },
        { matriz: '101', filial: '074 - 48.973.705/0035-60' },
        { matriz: '101', filial: '101 - 48.973.705/0001-11' },
        { matriz: '101', filial: '102 - 48.973.705/0034-80' },
        { matriz: '101', filial: '105 - 48.973.705/0033-07' },
        { matriz: '101', filial: '106 - 48.973.705/0011-93' },
        { matriz: '101', filial: '108 - 48.973.705/0017-89' },
        { matriz: '101', filial: '109 - 48.973.705/0021-65' },
        { matriz: '101', filial: '111 - 48.973.705/0022-46' },
        { matriz: '101', filial: '113 - 48.973.705/0032-18' },
        { matriz: '101', filial: '114 - 48.973.705/0031-37' },
        { matriz: '101', filial: '115 - 48.973.705/0002-00' },
        { matriz: '101', filial: '116 - 48.973.705/0030-56' },
        { matriz: '101', filial: '117 - 48.973.705/0016-08' },
        { matriz: '101', filial: '118 - 48.973.705/0015-17' },
        { matriz: '101', filial: '119 - 48.973.705/0029-12' },
        { matriz: '101', filial: '120 - 48.973.705/0007-07' },
        { matriz: '300', filial: '300 - 37.765.702/0001-76' },
        { matriz: '300', filial: '301 - 37.765.702/0002-57' },
        { matriz: '300', filial: '302 - 37.765.702/0004-19' },
        { matriz: '150', filial: '150 - 15.674.394/0001-30' },
        { matriz: '51', filial: '051 - 24.808.018/0001-92' },
        { matriz: '68', filial: '068 - 45.151.240/0001-25' },
        { matriz: '151', filial: '151 - 54.620.688/0001-42' },
        { matriz: '52', filial: '052 - 61.195.652/0001-13' }
      ]
    },
    { 
      nome: 'Verde', 
      icon: Store, 
      cor: 'bg-green-500 hover:bg-green-600',
      lojas: [
        { matriz: '9', filial: '001 - 50.915.875/0012-44' },
        { matriz: '2', filial: '002 - 54.237.938/0001-59' },
        { matriz: '9', filial: '003 - 50.915.875/0013-25' },
        { matriz: '9', filial: '004 - 50.915.875/0014-06' },
        { matriz: '5', filial: '005 - 72.014.681/0001-58' },
        { matriz: '9', filial: '006 - 50.915.875/0004-34' },
        { matriz: '9', filial: '007 - 50.915.875/0003-53' },
        { matriz: '9', filial: '009 - 50.915.875/0001-91' },
        { matriz: '9', filial: '010 - 50.915.875/0005-15' },
        { matriz: '9', filial: '016 - 50.915.875/0015-97' },
        { matriz: '17', filial: '017 - 05.574.086/0001-80' },
        { matriz: '9', filial: '019 - 50.915.875/0016-78' },
        { matriz: '9', filial: '020 - 50.915.875/0017-59' },
        { matriz: '22', filial: '022 - 05.908.530/0001-56' },
        { matriz: '9', filial: '023 - 50.915.875/0018-30' },
        { matriz: '24', filial: '024 - 08.776.666/0001-48' },
        { matriz: '9', filial: '026 - 50.915.875/0010-82' },
        { matriz: '9', filial: '028 - 50.915.875/0019-10' },
        { matriz: '42', filial: '031 - 10.980.442/0001-03' },
        { matriz: '9', filial: '032 - 50.915.875/0020-54' },
        { matriz: '9', filial: '039 - 50.915.875/0021-35' },
        { matriz: '9', filial: '043 - 50.915.875/0022-16' },
        { matriz: '9', filial: '044 - 50.915.875/0008-68' },
        { matriz: '47', filial: '047 - 19.853.593/0001-67' },
        { matriz: '9', filial: '048 - 50.915.875/0023-05' },
        { matriz: '9', filial: '049 - 50.915.875/0024-88' },
        { matriz: '9', filial: '067 - 50.915.875/0011-63' },
        { matriz: '9', filial: '075 - 50.915.875/0034-50' },
        { matriz: '46', filial: '076 - 09.332.225/0001-10' },
        { matriz: '9', filial: '121 - 40.591.677/0001-66' }
      ]
    },
    { 
      nome: 'Vermelho', 
      icon: Store, 
      cor: 'bg-red-500 hover:bg-red-600',
      lojas: [
        { matriz: '11', filial: '011 - 09.108.526/0001-64' },
        { matriz: '12', filial: '012 - 02.139.784/0001-59' },
        { matriz: '13', filial: '013 - 08.371.232/0001-68' },
        { matriz: '15', filial: '015 - 04.723.248/0001-31' },
        { matriz: '18', filial: '018 - 14.620.014/0001-12' },
        { matriz: '34', filial: '034 - 03.872.679/0001-79' },
        { matriz: '35', filial: '035 - 04.431.428/0001-00' },
        { matriz: '36', filial: '036 - 02.010.526/0001-88' },
        { matriz: '37', filial: '037 - 58.760.141/0001-92' },
        { matriz: '38', filial: '038 - 67.109.132/0001-27' },
        { matriz: '40', filial: '040 - 02.163.422/0001-03' },
        { matriz: '41', filial: '042 - 08.062.235/0001-10' },
        { matriz: '50', filial: '050 - 21.400.535/0001-90' },
        { matriz: '55', filial: '055 - 31.795.183/0001-02' },
        { matriz: '56', filial: '056 - 33.452.971/0001-21' },
        { matriz: '57', filial: '057 - 33.930.685/0001-24' },
        { matriz: '59', filial: '059 - 36.204.835/0001-00' },
        { matriz: '60', filial: '060 - 36.191.797/0001-07' },
        { matriz: '70', filial: '070 - 48.145.491/0001-95' },
        { matriz: '71', filial: '071 - 48.277.781/0001-92' },
        { matriz: '70', filial: '073 - 48.145.491/0002-76' },
        { matriz: '5300', filial: '5300 - 49.961.545/0001-53' },
        { matriz: '5300', filial: '5302 - 49.961.545/0033-30' },
        { matriz: '5300', filial: '5306 - 49.961.545/0036-83' },
        { matriz: '5300', filial: '5316 - 49.961.545/0037-64' },
        { matriz: '5300', filial: '5317 - 49.961.545/0006-68' },
        { matriz: '5300', filial: '5318 - 49.961.545/0023-69' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pilares.map((pilar) => {
          const IconComponent = pilar.icon;
          const isSelected = pilarSelecionado === pilar.nome;
          
          return (
            <button
              key={pilar.nome}
              onClick={() => onPilarSelect(isSelected ? '' : pilar.nome)}
              className={`${pilar.cor} ${isSelected ? 'ring-4 ring-blue-300 scale-105' : ''} 
                text-white p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 
                flex flex-col items-center gap-2 text-center min-h-[100px] justify-center`}
            >
              <IconComponent size={24} />
              <span className="text-sm font-medium">{pilar.nome}</span>
            </button>
          );
        })}
      </div>

      {/* Lista de lojas do pilar selecionado */}
      {pilarSelecionado && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Lojas de Atendimento - Matriz / Filial
          </h3>
          <div className="bg-white rounded-lg border overflow-hidden">
            {/* Cabeçalho da tabela */}
            <div className="bg-gray-100 px-4 py-3 border-b grid grid-cols-2 gap-4 font-semibold text-gray-700 text-sm">
              <span className="text-center">Matriz</span>
              <span className="text-center">Filial</span>
            </div>
            
            {/* Lista com scroll */}
            <ScrollArea className="h-80">
              <div className="divide-y divide-gray-100">
                {pilares
                  .find(p => p.nome === pilarSelecionado)
                  ?.lojas.map((loja, index) => (
                    <div 
                      key={index}
                      className={`px-4 py-3 grid grid-cols-2 gap-4 text-sm hover:bg-gray-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <span className="text-center font-medium text-gray-800">
                        {loja.matriz}
                      </span>
                      <span className="text-gray-700 font-mono text-xs">
                        {loja.filial}
                      </span>
                    </div>
                  ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
};

export default PilaresDepartamentoPessoal;
