
import React from 'react';

const Colaboradores = () => {
  return (
    <div className="animate-fade-in p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Organograma Geral</h1>
        <p className="text-muted-foreground">Estrutura organizacional da empresa</p>
      </div>
      
      <div className="bg-card rounded-lg shadow-lg p-8 overflow-x-auto">
        <div className="min-w-[2400px]">
          {/* CEO */}
          <div className="flex flex-col items-center mb-10">
            <div className="bg-[#8B1538] text-white px-8 py-6 rounded-lg text-center font-bold text-xl shadow-lg">
              Bruno Constantino - CEO
            </div>
            <div className="w-0.5 h-8 bg-[#8B1538] mt-4"></div>
          </div>

          {/* Diretores */}
          <div className="flex gap-4 justify-start items-start">
            {/* Marcio - Diretor */}
            <div className="flex flex-col items-center w-[220px] flex-shrink-0">
              <div className="bg-[#8B1538] text-white px-6 py-4 rounded-lg text-center font-bold text-sm shadow-md mb-4 w-full">
                Marcio<br/>Diretor
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
            <div className="flex flex-col items-center w-[220px] flex-shrink-0">
              <div className="bg-[#8B1538] text-white px-6 py-4 rounded-lg text-center font-bold text-sm shadow-md mb-4 w-full">
                Sônia<br/>Diretora
              </div>
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Marla - Gestora RH</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Safira - Regional VH</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Viviane - Regional Arezzo</div>
              </div>
            </div>

            {/* Nelson - Diretor */}
            <div className="flex flex-col items-center w-[220px] flex-shrink-0">
              <div className="bg-[#8B1538] text-white px-6 py-4 rounded-lg text-center font-bold text-sm shadow-md mb-4 w-full">
                Nelson<br/>Diretor
              </div>
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">René - Gestor T.I</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Rafael - Gestor Fábrica</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Sergio - Gerente de Projetos</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Carlos - Gestor Fast Card</div>
              </div>
            </div>

            {/* Renan - Diretor */}
            <div className="flex flex-col items-center w-[220px] flex-shrink-0">
              <div className="bg-[#8B1538] text-white px-6 py-4 rounded-lg text-center font-bold text-sm shadow-md mb-4 w-full">
                Renan<br/>Diretor
              </div>
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Cristiano - Gestor E-commerce</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Helena - Gestora MKT</div>
              </div>
            </div>

            {/* Naiche - Diretor */}
            <div className="flex flex-col items-center w-[220px] flex-shrink-0">
              <div className="bg-[#8B1538] text-white px-6 py-4 rounded-lg text-center font-bold text-sm shadow-md mb-4 w-full">
                Naiche<br/>Diretor
              </div>
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Karen - Gestora Feminino compras</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Gleudinel - Gestor Masculino compras</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Rafael - Gestor Tênis e Infantil compras</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Daila - Gestora Infantil compras</div>
              </div>
            </div>

            {/* Helena - Diretora */}
            <div className="flex flex-col items-center w-[220px] flex-shrink-0">
              <div className="bg-[#8B1538] text-white px-6 py-4 rounded-lg text-center font-bold text-sm shadow-md mb-4 w-full">
                Helena<br/>Diretora
              </div>
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Artemis - Regional Franquias</div>
              </div>
            </div>

            {/* Romilton - Diretor Op. */}
            <div className="flex flex-col items-center w-[220px] flex-shrink-0">
              <div className="bg-[#8B1538] text-white px-6 py-4 rounded-lg text-center font-bold text-sm shadow-md mb-4 w-full">
                Romilton<br/>Diretor Op.
              </div>
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Diógenes - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Estefes - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Luis Américo - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Mauricio - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Peterson - Regional</div>
              </div>
            </div>

            {/* Farias - Diretor Op. */}
            <div className="flex flex-col items-center w-[220px] flex-shrink-0">
              <div className="bg-[#8B1538] text-white px-6 py-4 rounded-lg text-center font-bold text-sm shadow-md mb-4 w-full">
                Farias<br/>Diretor Op.
              </div>
              <div className="space-y-2 w-full">
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Glaudo - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Graceli - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">João Paulo - Regional</div>
                <div className="bg-gray-600 text-white px-3 py-2 rounded text-xs text-center">Rodrigo - Regional</div>
              </div>
            </div>

            {/* Cerutti - Diretor Op. */}
            <div className="flex flex-col items-center w-[220px] flex-shrink-0">
              <div className="bg-[#8B1538] text-white px-6 py-4 rounded-lg text-center font-bold text-sm shadow-md mb-4 w-full">
                Cerutti<br/>Diretor Op.
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
