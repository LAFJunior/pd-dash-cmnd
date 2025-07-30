import React from 'react';

const EstruturaDepartamentoAuditoria = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Estrutura Organizacional */}
      <div className="space-y-6">
        {/* CEO */}
        <div className="flex justify-center">
          <div className="bg-gray-800 text-white p-6 rounded-lg text-center min-w-[300px]">
            <div className="font-bold text-lg mb-2">BRUNO CONSTANTINO</div>
            <div className="font-semibold mb-2">CEO GRUPO OSCAR</div>
          </div>
        </div>

        {/* COORDENADOR */}
        <div className="flex justify-center">
          <div className="bg-emerald-600 text-white p-6 rounded-lg text-center min-w-[300px]">
            <div className="font-bold text-lg mb-2">KLEBERSON SOARES</div>
            <div className="font-semibold mb-2">COORDENADOR</div>
            <div className="text-sm opacity-90 mb-1">KLEBERSON.SOARES@GRUPOOSCAR.COM.BR</div>
            <div className="text-sm opacity-90">(16) 98202-1247 - WHATSAPP</div>
          </div>
        </div>

        {/* Equipes de Trabalho */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* BAURU (16 LOJAS) - GRUPO AZUL */}
          <div className="bg-blue-500 text-white rounded-lg">
            <div className="bg-blue-600 p-4 rounded-t-lg text-center font-bold">
              BAURU (16 LOJAS)
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-blue-400 p-3 rounded text-center">
                <div className="font-semibold">DANIEL CARVALHO (AUDITOR)</div>
                <div className="text-xs opacity-90">DANIEL.CARVALHO@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) 97405-0730 - WHATSAPP</div>
              </div>
              <div className="bg-blue-400 p-3 rounded text-center">
                <div className="font-semibold">GUILHERME ESTORINO (CONFERENTE)</div>
                <div className="text-xs opacity-90">GUILHERME.ESTORINO@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) 99234-0913 - WHATSAPP</div>
              </div>
            </div>
          </div>

          {/* ARARAQUARA (14 LOJAS) - GRUPO VERDE */}
          <div className="bg-green-500 text-white rounded-lg">
            <div className="bg-green-600 p-4 rounded-t-lg text-center font-bold">
              ARARAQUARA (14 LOJAS)
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-green-400 p-3 rounded text-center">
                <div className="font-semibold">WALDEIR CABRERA (AUDITOR)</div>
                <div className="text-xs opacity-90">WALDEIR.CABRERA@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) 97405-0730 - WHATSAPP</div>
              </div>
              <div className="bg-green-400 p-3 rounded text-center">
                <div className="font-semibold">FABIO RIBEIRO (CONFERENTE)</div>
                <div className="text-xs opacity-90">FABIO.RIBEIRO@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) 99234-0913 - WHATSAPP</div>
              </div>
            </div>
          </div>

          {/* S. J. DOS CAMPOS (19 LOJAS) - GRUPO VERMELHO */}
          <div className="bg-red-500 text-white rounded-lg">
            <div className="bg-red-600 p-4 rounded-t-lg text-center font-bold">
              S. J. DOS CAMPOS (19 LOJAS)
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">CLEVERSON RIBEIRO (AUDITOR)</div>
                <div className="text-xs opacity-90">CLEVERSON.RIBEIRO@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">PEDRO AUGUSTO (CONFERENTE)</div>
                <div className="text-xs opacity-90">PEDRO.AUGUSTO@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
            </div>
          </div>

          {/* S. J. DOS CAMPOS (15 LOJAS) - GRUPO VERMELHO */}
          <div className="bg-red-500 text-white rounded-lg">
            <div className="bg-red-600 p-4 rounded-t-lg text-center font-bold">
              S. J. DOS CAMPOS (15 LOJAS)
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">GABRIEL ELIAS (AUDITOR)</div>
                <div className="text-xs opacity-90">GABRIEL.ELIAS@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">EMELLYN THACIANE (CONFERENTE)</div>
                <div className="text-xs opacity-90">EMELLYN.THACIANE@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
            </div>
          </div>

          {/* MOGI DAS CRUZES (25 LOJAS) - GRUPO VERMELHO */}
          <div className="bg-gray-500 text-white rounded-lg">
            <div className="bg-gray-600 p-4 rounded-t-lg text-center font-bold">
              MOGI DAS CRUZES (25 LOJAS)
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-gray-400 p-3 rounded text-center">
                <div className="font-semibold">LUCAS FARIAS (AUDITOR)</div>
                <div className="text-xs opacity-90">LUCAS.FARIAS@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
              <div className="bg-gray-400 p-3 rounded text-center">
                <div className="font-semibold">JEAN PEREIRA (CONFERENTE)</div>
                <div className="text-xs opacity-90">JEAN.PEREIRA@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
            </div>
          </div>

          {/* FLORIANÓPOLIS (27 LOJAS) - GRUPO VERMELHO */}
          <div className="bg-orange-500 text-white rounded-lg">
            <div className="bg-orange-600 p-4 rounded-t-lg text-center font-bold">
              FLORIANÓPOLIS (27 LOJAS)
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-orange-400 p-3 rounded text-center">
                <div className="font-semibold">JHOANY JOSE (AUDITOR)</div>
                <div className="text-xs opacity-90">JHOANY.JOSE@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">PABLO DANIEL (CONFERENTE)</div>
                <div className="text-xs opacity-90">PABLO.DANIEL@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
            </div>
          </div>

          {/* PORTO ALEGRE (20 LOJAS) - GRUPO VERMELHO */}
          <div className="bg-violet-500 text-white rounded-lg">
            <div className="bg-violet-600 p-4 rounded-t-lg text-center font-bold">
              PORTO ALEGRE (20 LOJAS)
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-violet-400 p-3 rounded text-center">
                <div className="font-semibold">MARCELINO RODRIGUES (AUDITOR)</div>
                <div className="text-xs opacity-90">MARCELINO.RODRIGUES@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">XXX (CONFERENTE)</div>
                <div className="text-xs opacity-90">XX.XX@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
            </div>
          </div>

          {/* PORTO ALEGRE (19 LOJAS) - GRUPO VERMELHO */}
          <div className="bg-violet-500 text-white rounded-lg">
            <div className="bg-violet-600 p-4 rounded-t-lg text-center font-bold">
              PORTO ALEGRE (19 LOJAS)
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-violet-400 p-3 rounded text-center">
                <div className="font-semibold">YURI SANTOS (AUDITOR)</div>
                <div className="text-xs opacity-90">YURI.SANTOS@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">RODRIGO VAREIRA (CONFERENTE)</div>
                <div className="text-xs opacity-90">RODRIGO.VAREIRA@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
            </div>
          </div>

          {/* PORTO ALEGRE (17 LOJAS) - GRUPO VERMELHO */}
          <div className="bg-violet-500 text-white rounded-lg">
            <div className="bg-violet-600 p-4 rounded-t-lg text-center font-bold">
              PORTO ALEGRE (17 LOJAS)
            </div>
            <div className="p-4 space-y-4">
              <div className="bg-violet-400 p-3 rounded text-center">
                <div className="font-semibold">CRISTIANO FREITAS (AUDITOR)</div>
                <div className="text-xs opacity-90">CRISTIANO.FREITAS@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
              <div className="bg-red-400 p-3 rounded text-center">
                <div className="font-semibold">ISAC ALVES (CONFERENTE)</div>
                <div className="text-xs opacity-90">ISAC.ALVES@GRUPOOSCAR.COM.BR</div>
                <div className="text-xs opacity-90">(12) XXXX-XXXX - WHATSAPP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstruturaDepartamentoAuditoria;
