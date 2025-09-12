
import React from 'react';

const Colaboradores = () => {
  return (
    <div className="animate-fade-in p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Organograma Geral</h1>
        <p className="text-muted-foreground">Estrutura organizacional da empresa</p>
      </div>
      
      <div className="bg-card rounded-lg shadow-lg p-8 overflow-x-auto">
        <div className="min-w-[2800px] relative">
          {/* CEO */}
          <div className="flex flex-col items-center mb-12">
            <div className="bg-[#8B1538] text-white px-12 py-4 rounded-lg text-center font-bold text-lg shadow-lg relative z-10">
              Bruno Constantino - CEO
            </div>
            
            {/* Linha vertical do CEO para diretores */}
            <div className="w-0.5 h-12 bg-gray-400" style={{
              backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 4px, transparent 4px, transparent 8px)'
            }}></div>
            
            {/* Linha horizontal conectando todos os diretores */}
            <div className="w-full h-0.5 bg-gray-400 relative" style={{
              backgroundImage: 'repeating-linear-gradient(to right, #9ca3af 0px, #9ca3af 4px, transparent 4px, transparent 8px)'
            }}>
              {/* Linhas verticais para cada diretor */}
              {[12.5, 25, 37.5, 50, 62.5, 75, 87.5].map((position, index) => (
                <div
                  key={index}
                  className="absolute w-0.5 h-8 bg-gray-400 -top-8"
                  style={{
                    left: `${position}%`,
                    backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 4px, transparent 4px, transparent 8px)'
                  }}
                ></div>
              ))}
            </div>
          </div>

          {/* Container dos Diretores */}
          <div className="flex justify-between items-start gap-4">
            {/* Marcio - Diretor */}
            <div className="flex flex-col items-center w-[280px]">
              <div className="bg-[#8B1538] text-white px-4 py-3 rounded-lg text-center font-semibold text-sm shadow-md mb-8 w-full relative">
                Marcio<br/>Diretor
                {/* Linha vertical para subordinados */}
                <div className="absolute left-1/2 top-full w-0.5 h-6 bg-gray-400 -translate-x-0.5" style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 3px, transparent 3px, transparent 6px)'
                }}></div>
              </div>
              
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Maria - Gestora DP</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Edson - Gestor Consultoria Fiscal</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Viana - Gestora Controladoria</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Flávia - Gestora Financeiro</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Marlene - Gestora Suprimentos</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Gleber - Gestor C&D/Defensia</div>
              </div>
            </div>

            {/* Sônia - Diretora */}
            <div className="flex flex-col items-center w-[280px]">
              <div className="bg-[#8B1538] text-white px-4 py-3 rounded-lg text-center font-semibold text-sm shadow-md mb-8 w-full relative">
                Sônia<br/>Diretora
                <div className="absolute left-1/2 top-full w-0.5 h-6 bg-gray-400 -translate-x-0.5" style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 3px, transparent 3px, transparent 6px)'
                }}></div>
              </div>
              
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Marla - Gestora RH</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Safira - Regional VH</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Viviane - Regional Arezzo</div>
              </div>
            </div>

            {/* Nelson - Diretor */}
            <div className="flex flex-col items-center w-[280px]">
              <div className="bg-[#8B1538] text-white px-4 py-3 rounded-lg text-center font-semibold text-sm shadow-md mb-8 w-full relative">
                Nelson<br/>Diretor
                <div className="absolute left-1/2 top-full w-0.5 h-6 bg-gray-400 -translate-x-0.5" style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 3px, transparent 3px, transparent 6px)'
                }}></div>
              </div>
              
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">René - Gestor T.I</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Rafael - Gestor Fábrica</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Sergio - Gerente de Projetos</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Carlos - Gestor Fast Card</div>
              </div>
            </div>

            {/* Renan - Diretor */}
            <div className="flex flex-col items-center w-[280px]">
              <div className="bg-[#8B1538] text-white px-4 py-3 rounded-lg text-center font-semibold text-sm shadow-md mb-8 w-full relative">
                Renan<br/>Diretor
                <div className="absolute left-1/2 top-full w-0.5 h-6 bg-gray-400 -translate-x-0.5" style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 3px, transparent 3px, transparent 6px)'
                }}></div>
              </div>
              
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Cristiano - Gestor E-commerce</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Helena - Gestora MKT</div>
              </div>
            </div>

            {/* Naiche - Diretor */}
            <div className="flex flex-col items-center w-[280px]">
              <div className="bg-[#8B1538] text-white px-4 py-3 rounded-lg text-center font-semibold text-sm shadow-md mb-8 w-full relative">
                Naiche<br/>Diretor
                <div className="absolute left-1/2 top-full w-0.5 h-6 bg-gray-400 -translate-x-0.5" style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 3px, transparent 3px, transparent 6px)'
                }}></div>
              </div>
              
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Karen - Gestora Feminino compras</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Gleudinel - Gestor Masculino compras</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Rafael - Gestor Tênis e Infantil compras</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Daila - Gestora Infantil compras</div>
              </div>
            </div>

            {/* Helena - Diretora */}
            <div className="flex flex-col items-center w-[280px]">
              <div className="bg-[#8B1538] text-white px-4 py-3 rounded-lg text-center font-semibold text-sm shadow-md mb-8 w-full relative">
                Helena<br/>Diretora
                <div className="absolute left-1/2 top-full w-0.5 h-6 bg-gray-400 -translate-x-0.5" style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 3px, transparent 3px, transparent 6px)'
                }}></div>
              </div>
              
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Artemis - Regional Franquias</div>
              </div>
            </div>

            {/* Romilton - Diretor Op. */}
            <div className="flex flex-col items-center w-[280px]">
              <div className="bg-[#8B1538] text-white px-4 py-3 rounded-lg text-center font-semibold text-sm shadow-md mb-8 w-full relative">
                Romilton<br/>Diretor Op.
                <div className="absolute left-1/2 top-full w-0.5 h-6 bg-gray-400 -translate-x-0.5" style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 3px, transparent 3px, transparent 6px)'
                }}></div>
              </div>
              
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Diógenes - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Estefes - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Luis Américo - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Mauricio - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Peterson - Regional</div>
              </div>
            </div>
          </div>

          {/* Segunda linha de diretores */}
          <div className="flex justify-start items-start gap-4 mt-8">
            {/* Farias - Diretor Op. */}
            <div className="flex flex-col items-center w-[280px]">
              <div className="bg-[#8B1538] text-white px-4 py-3 rounded-lg text-center font-semibold text-sm shadow-md mb-8 w-full relative">
                Farias<br/>Diretor Op.
                <div className="absolute left-1/2 top-full w-0.5 h-6 bg-gray-400 -translate-x-0.5" style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 3px, transparent 3px, transparent 6px)'
                }}></div>
              </div>
              
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Glaudo - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Graceli - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">João Paulo - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Rodrigo - Regional</div>
              </div>
            </div>

            {/* Cerutti - Diretor Op. */}
            <div className="flex flex-col items-center w-[280px]">
              <div className="bg-[#8B1538] text-white px-4 py-3 rounded-lg text-center font-semibold text-sm shadow-md mb-8 w-full relative">
                Cerutti<br/>Diretor Op.
                <div className="absolute left-1/2 top-full w-0.5 h-6 bg-gray-400 -translate-x-0.5" style={{
                  backgroundImage: 'repeating-linear-gradient(to bottom, #9ca3af 0px, #9ca3af 3px, transparent 3px, transparent 6px)'
                }}></div>
              </div>
              
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Bernardo - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Devis - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Jorge - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Katsuro - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Panicia - Regional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colaboradores;
