import React from 'react';
import { ArrowLeft, Users } from 'lucide-react';

const EstruturaDepartamentoPessoal = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
          <span className="text-gray-600">Voltar</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Departamento Pessoal</h1>
        <p className="text-gray-600">Estrutura organizacional e processos do departamento</p>
      </div>

      {/* Título da Estrutura */}
      <div className="flex items-center gap-2 mb-8">
        <Users className="w-6 h-6 text-blue-600" />
        <h2 className="text-xl font-bold text-blue-900">Estrutura do Departamento</h2>
      </div>

      {/* Estrutura Organizacional */}
      <div className="space-y-6">
        {/* Diretor */}
        <div className="flex justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg text-center min-w-[300px]">
            <div className="font-bold text-lg mb-2">DIRETOR</div>
            <div className="font-semibold mb-2">MARCIO SAMPAIO</div>
            <div className="text-sm opacity-90 mb-1">MARCIO.SAMPAIO@GRUPOOSCAR.COM.BR</div>
            <div className="text-sm opacity-90">(12) 97405-0730 - WHATSAPP</div>
          </div>
        </div>

        {/* Gerente */}
        <div className="flex justify-center">
          <div className="bg-red-600 text-white p-6 rounded-lg text-center min-w-[300px]">
            <div className="font-bold text-lg mb-2">GERENTE DE DEPARTAMENTO</div>
            <div className="font-semibold mb-2">MARIA MACEDO</div>
            <div className="text-sm opacity-90 mb-1">MARIA.MACEDO@GRUPOOSCAR.COM.BR</div>
            <div className="text-sm opacity-90">(12) 97405-0730 - WHATSAPP</div>
          </div>
        </div>

        {/* Líder de Equipe */}
        <div className="flex justify-center">
          <div className="bg-blue-600 text-white p-6 rounded-lg text-center min-w-[300px]">
            <div className="font-bold text-lg mb-2">LÍDER DE EQUIPE</div>
            <div className="font-semibold mb-2">THALITA</div>
            <div className="text-sm opacity-90 mb-1">THALITA.REITANO@GRUPOOSCAR.COM.BR</div>
            <div className="text-sm opacity-90">(12) 97405-0730 - WHATSAPP</div>
          </div>
        </div>

        {/* Grupos de Trabalho */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Grupo Azul */}
          <div className="bg-blue-500 text-white rounded-lg">
            <div className="bg-blue-600 p-4 rounded-t-lg text-center font-bold">
              GRUPO AZUL
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-blue-400 p-3 rounded text-center">
                <div className="font-semibold">SIMONE (ANALISTA)</div>
                <div className="text-sm opacity-90">SIMONE.REITANO@GRUPOOSCAR.COM.BR</div>
                <div className="text-sm opacity-90">(12) 97405-0730 - WHATSAPP</div>
              </div>
              <div className="bg-blue-400 p-3 rounded text-center">
                <div className="font-semibold">BIA</div>
                <div className="text-sm opacity-90">FABIANA.SILVA@GRUPOOSCAR.COM.BR</div>
                <div className="text-sm opacity-90">(12) 99234-0913 - WHATSAPP</div>
              </div>
              <div className="bg-blue-400 p-3 rounded text-center">
                <div className="font-semibold">RAFAELA</div>
                <div className="text-sm opacity-90">RAFAELA.SILVA@GRUPOOSCAR.COM.BR</div>
                <div className="text-sm opacity-90">(12) 99234-0913 - WHATSAPP</div>
              </div>
              <div className="bg-blue-300 p-3 rounded">
                <div className="font-semibold text-center mb-3">ATENDIMENTO AOS REGIONAIS E BACKOFFICE</div>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">Aríane</div>
                  <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">Amaro</div>
                  <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">Cláudio</div>
                  <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">Ericson</div>
                  <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">João Paulo</div>
                  <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">Rodrigo</div>
                </div>
                <div className="mt-2">
                  <div className="bg-white text-blue-600 p-2 rounded text-center font-medium">BackOffice</div>
                </div>
              </div>
            </div>
          </div>

          {/* Grupo Verde */}
          <div className="bg-green-500 text-white rounded-lg">
            <div className="bg-green-600 p-4 rounded-t-lg text-center font-bold">
              GRUPO VERDE
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-green-400 p-3 rounded text-center">
                <div className="font-semibold">ANA CAROLINA (ANALISTA)</div>
                <div className="text-sm opacity-90">ANA.CAROLINA@GRUPOOSCAR.COM.BR</div>
                <div className="text-sm opacity-90">(12) 97405-0730 - WHATSAPP</div>
              </div>
              <div className="bg-green-400 p-3 rounded text-center">
                <div className="font-semibold">NAIMARA</div>
                <div className="text-sm opacity-90">NAIMARA.SILVA@GRUPOOSCAR.COM.BR</div>
                <div className="text-sm opacity-90">(12) 99234-0913 - WHATSAPP</div>
              </div>
              <div className="bg-green-300 p-3 rounded">
                <div className="font-semibold text-center mb-3">ATENDIMENTO AOS REGIONAIS</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Bernardo</div>
                  <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Estefan</div>
                  <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Luis Américo</div>
                  <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Mauricio</div>
                </div>
                <div className="mt-2">
                  <div className="bg-white text-green-600 p-2 rounded text-center font-medium">Peterson</div>
                </div>
              </div>
            </div>
          </div>

          {/* Grupo Vermelho */}
          <div className="bg-red-500 text-white rounded-lg">
            <div className="bg-red-600 p-4 rounded-t-lg text-center font-bold">
              GRUPO VERMELHO
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">FABIANA (ANALISTA)</div>
                <div className="text-sm opacity-90">FABIANA.MICAELE@GRUPOOSCAR.COM.BR</div>
                <div className="text-sm opacity-90">(12) 97405-0730 - WHATSAPP</div>
              </div>
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">NICOLLE</div>
                <div className="text-sm opacity-90">NICOLLE.SANTOS@GRUPOOSCAR.COM.BR</div>
                <div className="text-sm opacity-90">(12) 99234-0913 - WHATSAPP</div>
              </div>
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">CAMILLA</div>
                <div className="text-sm opacity-90">CAMILLA.OLIVER@GRUPOOSCAR.COM.BR</div>
                <div className="text-sm opacity-90">(12) 99234-0913 - WHATSAPP</div>
              </div>
              <div className="bg-red-300 p-3 rounded">
                <div className="font-semibold text-center mb-3">ATENDIMENTO AOS REGIONAIS</div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Artemis</div>
                  <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Clovis</div>
                  <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Elaine</div>
                  <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Jorge</div>
                  <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Katiane</div>
                  <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Patricia</div>
                </div>
                <div className="mt-2">
                  <div className="bg-white text-red-600 p-2 rounded text-center font-medium">Suila</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstruturaDepartamentoPessoal;