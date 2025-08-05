import React, { useState } from 'react';
import { Search, Building2, MapPin, Hash } from 'lucide-react';

const CentroCusto = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('all');

  const empresas = [
    {
      nome: "Oscar Calçados Ltda",
      cnpj: "50.915.875/0001-91",
      regime: "SIMPLES",
      lojas: [
        { codigo: "001", nome: "Centro SJC - RSO", cnpj: "50.915.875/0012-44" },
        { codigo: "002", nome: "Jd. Paulista São José - ENC", cnpj: "50.915.875/0013-25" },
        { codigo: "003", nome: "Centro SJC - RCPR", cnpj: "50.915.875/0014-06" },
        { codigo: "004", nome: "Centro Jacareí", cnpj: "50.915.875/0015-97" },
        { codigo: "006", nome: "C.Vale SJC", cnpj: "50.915.875/0004-34" },
        { codigo: "007", nome: "Colinas SJC", cnpj: "50.915.875/0003-53" },
        { codigo: "009", nome: "Satélite SJC", cnpj: "50.915.875/0001-91" },
        { codigo: "010", nome: "Vila Nair - SJC", cnpj: "50.915.875/0005-15" },
        { codigo: "016", nome: "Centro Guaratinguetá", cnpj: "50.915.875/0015-97" },
        { codigo: "019", nome: "Shop. Jacareí", cnpj: "50.915.875/0016-78" },
        { codigo: "020", nome: "Shop. Taubaté", cnpj: "50.915.875/0017-59" },
        { codigo: "023", nome: "Shop. Guaratinguetá", cnpj: "50.915.875/0018-30" },
        { codigo: "026", nome: "Mega V.Sul SJC", cnpj: "50.915.875/0010-82" },
        { codigo: "028", nome: "Centro Taubaté", cnpj: "50.915.875/0019-10" },
        { codigo: "032", nome: "Mogi", cnpj: "50.915.875/0020-54" },
        { codigo: "039", nome: "MOGI", cnpj: "50.915.875/0021-35" },
        { codigo: "043", nome: "Suzano", cnpj: "50.915.875/0022-16" },
        { codigo: "044", nome: "Shop. Caraguá", cnpj: "50.915.875/0008-68" },
        { codigo: "048", nome: "Centro Pinda", cnpj: "50.915.875/0023-05" },
        { codigo: "049", nome: "Centro Lorena", cnpj: "50.915.875/0024-88" },
        { codigo: "067", nome: "Shop. Jd Oriente", cnpj: "50.915.875/0011-63" },
        { codigo: "075", nome: "Oscar Shop Cruzeiro", cnpj: "50.915.875/0034-50" },
        { codigo: "122", nome: "Taubaté", cnpj: "50.915.875/0026-40" },
        { codigo: "123", nome: "Resende", cnpj: "50.915.875/0033-79" },
        { codigo: "124", nome: "Centro SJC", cnpj: "50.915.875/0027-20" },
        { codigo: "125", nome: "Centro SJC", cnpj: "50.915.875/0028-01" },
        { codigo: "126", nome: "Centro Guaratinguetá", cnpj: "50.915.875/0029-92" },
        { codigo: "127", nome: "Centro Jacareí", cnpj: "50.915.875/0030-26" },
        { codigo: "128", nome: "Centro - Taubaté", cnpj: "50.915.875/0031-07" }
      ]
    },
    {
      nome: "Jô Calçados Ltda",
      cnpj: "48.973.705/0001-11",
      regime: "SIMPLES",
      lojas: [
        { codigo: "008", nome: "S. J. Rio Preto", cnpj: "48.973.705/0013-55" },
        { codigo: "024", nome: "Stock - Estoque V", cnpj: "48.973.705/0009-79" },
        { codigo: "041", nome: "S. J. Rio Preto", cnpj: "48.973.705/0010-02" },
        { codigo: "045", nome: "Araçatuba", cnpj: "48.973.705/0026-70" },
        { codigo: "054", nome: "Rio Preto", cnpj: "48.973.705/0027-50" },
        { codigo: "058", nome: "Ribeirão Preto", cnpj: "48.973.705/0025-99" },
        { codigo: "061", nome: "Jundiaí", cnpj: "48.973.705/0023-27" },
        { codigo: "062", nome: "Piracicaba", cnpj: "48.973.705/0024-08" },
        { codigo: "063", nome: "Sorocaba", cnpj: "48.973.705/0020-84" },
        { codigo: "064", nome: "Araraquara", cnpj: "48.973.705/0018-60" },
        { codigo: "065", nome: "MOGI MIRIM", cnpj: "48.973.705/0019-40" },
        { codigo: "066", nome: "MOGI GUAÇU", cnpj: "48.973.705/0012-74" },
        { codigo: "068", nome: "Bauru", cnpj: "48.973.705/0028-31" },
        { codigo: "069", nome: "Piracicaba", cnpj: "48.973.705/0008-98" },
        { codigo: "072", nome: "Ribeirão Preto-Shop.", cnpj: "48.973.705/0035-60" },
        { codigo: "074", nome: "Piracicaba Shopping", cnpj: "48.973.705/0001-11" },
        { codigo: "101", nome: "BOTUCATU", cnpj: "48.973.705/0034-80" },
        { codigo: "102", nome: "Ituiutaba", cnpj: "48.973.705/0033-07" },
        { codigo: "105", nome: "Uberaba", cnpj: "48.973.705/0011-93" },
        { codigo: "106", nome: "S. J. Rio Preto", cnpj: "48.973.705/0017-89" },
        { codigo: "108", nome: "Votuporanga", cnpj: "48.973.705/0021-65" },
        { codigo: "109", nome: "ARARAQUARA", cnpj: "48.973.705/0022-46" },
        { codigo: "111", nome: "Franca", cnpj: "48.973.705/0032-18" },
        { codigo: "113", nome: "Uberlândia", cnpj: "48.973.705/0031-37" },
        { codigo: "114", nome: "Limeira", cnpj: "48.973.705/0002-00" },
        { codigo: "115", nome: "Ourinhos", cnpj: "48.973.705/0030-56" },
        { codigo: "116", nome: "São Carlos", cnpj: "48.973.705/0016-06" },
        { codigo: "117", nome: "Bauru", cnpj: "48.973.705/0015-17" },
        { codigo: "118", nome: "Catanduva", cnpj: "48.973.705/0029-12" },
        { codigo: "119", nome: "Barretos", cnpj: "48.973.705/0007-07" },
        { codigo: "120", nome: "Pres. Prudente", cnpj: "48.973.705/0007-07" }
      ]
    },
    {
      nome: "Carioca Calçados Ltda",
      cnpj: "78.842.440/0001-83",
      regime: "SIMPLES",
      lojas: [
        { codigo: "201", nome: "Estreito/Floripa", cnpj: "78.842.440/0023-99" },
        { codigo: "202", nome: "Joinville", cnpj: "78.842.440/0009-30" },
        { codigo: "204", nome: "Estreito/Floripa", cnpj: "78.842.440/0020-46" },
        { codigo: "205", nome: "Bairro dos Ingleses", cnpj: "78.842.440/0002-64" },
        { codigo: "208", nome: "Balneário", cnpj: "78.842.440/0003-45" },
        { codigo: "209", nome: "Centro / Floripa", cnpj: "78.842.440/0004-26" },
        { codigo: "211", nome: "Shop Itaguaçu/São José", cnpj: "78.842.440/0014-06" },
        { codigo: "212", nome: "Kobrasol /São José", cnpj: "78.842.440/0005-07" },
        { codigo: "214", nome: "Centro / Itajaí", cnpj: "78.842.440/0017-40" },
        { codigo: "215", nome: "Centro / Floripa", cnpj: "78.842.440/0016-60" },
        { codigo: "216", nome: "Centro / Floripa", cnpj: "78.842.440/0015-89" },
        { codigo: "217", nome: "Sh Itaguaçu / São José", cnpj: "78.842.440/0006-98" },
        { codigo: "218", nome: "Sh. Vila Romana - Floripa", cnpj: "78.842.440/0007-79" },
        { codigo: "219", nome: "Centro / Floripa", cnpj: "78.842.440/0011-55" },
        { codigo: "221", nome: "Centro / Floripa", cnpj: "78.842.440/0010-74" },
        { codigo: "223", nome: "Shop. Itaguaçu / São José", cnpj: "78.842.440/0012-36" },
        { codigo: "224", nome: "Centro / Floripa", cnpj: "78.842.440/0013-17" },
        { codigo: "225", nome: "Centro / Palhoça", cnpj: "78.842.440/0018-21" },
        { codigo: "226", nome: "Shop. Continente / São José", cnpj: "78.842.440/0022-08" },
        { codigo: "227", nome: "Forquilhinhas / São José", cnpj: "78.842.440/0019-02" },
        { codigo: "228", nome: "Centro / Biguaçu", cnpj: "78.842.440/0008-50" },
        { codigo: "297", nome: "CD-Bela Vista/São José", cnpj: "78.842.440/0008-50" }
      ]
    },
    {
      nome: "Varejo Sul Ltda",
      cnpj: "49.961.545/0001-53",
      regime: "SIMPLES",
      lojas: [
        { codigo: "302", nome: "Centro POA", cnpj: "49.961.545/0033-30" },
        { codigo: "306", nome: "Park Shop - Canoas", cnpj: "49.961.545/0036-83" },
        { codigo: "317", nome: "Rio Branco - POA", cnpj: "49.961.545/0006-68" },
        { codigo: "318", nome: "Vila Imbuhy - Cachoeirinha", cnpj: "49.961.545/0023-69" },
        { codigo: "319", nome: "Centro - Gravataí", cnpj: "49.961.545/0026-01" },
        { codigo: "323", nome: "Bourbom Shop - São Leopoldo", cnpj: "49.961.545/0020-16" },
        { codigo: "326", nome: "Praia de Belas Shop. - POA", cnpj: "49.961.545/0029-54" },
        { codigo: "327", nome: "Lindóia Shop - POA", cnpj: "49.961.545/0012-06" },
        { codigo: "333", nome: "Centro Histórico - POA", cnpj: "49.961.545/0047-36" },
        { codigo: "337", nome: "Canoas Shop. - Canoas", cnpj: "49.961.545/0034-11" },
        { codigo: "338", nome: "Bourbom Ipiranga Shop. - POA", cnpj: "49.961.545/0002-34" },
        { codigo: "339", nome: "Bourbom Shop. - Novo Hamburgo", cnpj: "49.961.545/0022-88" },
        { codigo: "343", nome: "Iguatemi - POA", cnpj: "49.961.545/0010-44" },
        { codigo: "345", nome: "Canoas Shop - Canoas", cnpj: "49.961.545/0016-30" },
        { codigo: "346", nome: "Jaraguá do Sul - SC", cnpj: "49.961.545/0060-03" },
        { codigo: "347", nome: "Iguatemi - Caxias do Sul", cnpj: "49.961.545/0028-73" },
        { codigo: "348", nome: "Shopping Canoas", cnpj: "49.961.545/0025-20" },
        { codigo: "349", nome: "Florianópolis - SC", cnpj: "49.961.545/0059-70" },
        { codigo: "351", nome: "Blumenau - SC", cnpj: "49.961.545/0061-94" },
        { codigo: "352", nome: "Barra Shop. - POA", cnpj: "49.961.545/0017-10" },
        { codigo: "353", nome: "Barra Shop - POA", cnpj: "49.961.545/0008-20" },
        { codigo: "355", nome: "Passo Fundo - RS", cnpj: "49.961.545/0063-56" },
        { codigo: "356", nome: "Centro Histórico - POA", cnpj: "49.961.545/0031-79" },
        { codigo: "359", nome: "Joinville - SC", cnpj: "49.961.545/0062-75" },
        { codigo: "362", nome: "Royal Plaza Shop. Santa Maria", cnpj: "49.961.545/0009-00" },
        { codigo: "363", nome: "Blumenau - SC", cnpj: "49.961.545/0064-37" },
        { codigo: "364", nome: "Bourbom Centeria Shop - POA", cnpj: "49.961.545/0035-00" },
        { codigo: "367", nome: "Bourbom Wallig - POA", cnpj: "49.961.545/0056-27" },
        { codigo: "378", nome: "Shopping Pelotas - Pelotas", cnpj: "49.961.545/0005-87" },
        { codigo: "382", nome: "Shopping Gravataí - Gravataí", cnpj: "49.961.545/0019-82" },
        { codigo: "391", nome: "Balneário Camburiu - SC", cnpj: "49.961.545/0065-18" }
      ]
    }
  ];

  const outrasEmpresas = [
    { nome: "Oscar Calçados Comércio Eletrônico Ltda", cnpj: "54.650.901/0001-58", lojas: [{ codigo: "600", nome: "Oscar Calç. Com Eletrônico" }] },
    { nome: "Paquetá", cnpj: "54.237.938/0001-59", lojas: [{ codigo: "Gaston", nome: "Loja E commerce" }] },
    { nome: "Franquias", cnpj: "08.77.666/0001-48", lojas: [{ codigo: "OSCAR/SPORT", nome: "SCARLEN/STOCK/CONST" }] }
  ];

  const filteredEmpresas = empresas.filter(empresa => {
    if (selectedCompany !== 'all' && empresa.nome !== selectedCompany) return false;
    if (searchTerm) {
      return empresa.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
             empresa.lojas.some(loja => 
               loja.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
               loja.codigo.includes(searchTerm)
             );
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Building2 className="text-blue-600" />
          Centro de Custos do Financeiro
        </h1>
        
        {/* Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por empresa, loja ou código..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="all">Todas as empresas</option>
            {empresas.map(empresa => (
              <option key={empresa.cnpj} value={empresa.nome}>{empresa.nome}</option>
            ))}
          </select>
        </div>

        {/* Lista de Empresas */}
        <div className="space-y-6">
          {filteredEmpresas.map((empresa) => (
            <div key={empresa.cnpj} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h2 className="text-xl font-semibold">{empresa.nome}</h2>
                  <div className="flex items-center gap-4 mt-2 md:mt-0">
                    <span className="bg-blue-500 px-3 py-1 rounded-full text-sm font-medium">
                      {empresa.regime}
                    </span>
                    <span className="text-blue-100 text-sm">
                      CNPJ: {empresa.cnpj}
                    </span>
                    <span className="bg-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {empresa.lojas.length} lojas
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {empresa.lojas
                    .filter(loja => 
                      !searchTerm || 
                      loja.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      loja.codigo.includes(searchTerm)
                    )
                    .map((loja) => (
                    <div key={loja.codigo} className="bg-gray-50 rounded-lg p-3 border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4 text-gray-500" />
                          <span className="font-mono text-sm font-semibold text-blue-600">
                            {loja.codigo}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-gray-500 mt-0.5" />
                        <p className="text-sm text-gray-700 font-medium">
                          {loja.nome}
                        </p>
                      </div>
                      <p className="text-xs text-gray-500 font-mono">
                        CNPJ: {loja.cnpj}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outras Empresas */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Outras Empresas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {outrasEmpresas.map((empresa) => (
              <div key={empresa.cnpj} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-2">{empresa.nome}</h3>
                <p className="text-xs text-gray-500 mb-3">CNPJ: {empresa.cnpj}</p>
                {empresa.lojas.map((loja) => (
                  <div key={loja.codigo} className="text-sm">
                    <span className="font-mono text-blue-600">{loja.codigo}</span>
                    <span className="text-gray-600 ml-2">{loja.nome}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Resumo */}
        <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Resumo Geral</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                {empresas.reduce((total, empresa) => total + empresa.lojas.length, 0)}
              </div>
              <div className="text-sm text-gray-600">Total de Lojas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{empresas.length}</div>
              <div className="text-sm text-gray-600">Empresas Principais</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{outrasEmpresas.length}</div>
              <div className="text-sm text-gray-600">Outras Empresas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">4</div>
              <div className="text-sm text-gray-600">Regimes Tributários</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentroCusto;