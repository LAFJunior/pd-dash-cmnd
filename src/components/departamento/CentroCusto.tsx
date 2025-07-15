import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface CentroCusto {
  codigo: string;
  nome: string;
  cnpj?: string;
}

interface Empresa {
  id: string;
  nome: string;
  cor: string;
  centros: CentroCusto[];
  totalLojas?: string;
  observacoes?: string;
}

const CentroCusto = () => {
  const empresas: Empresa[] = [
    {
      id: 'F1',
      nome: 'Oscar Calçados Ltda',
      cor: 'bg-blue-50 border-blue-200',
      centros: [
        { codigo: '001', nome: 'Centro SJC - RSO', cnpj: '50.915.875/0012-44' },
        { codigo: '003', nome: 'Centro SJC - RCPR', cnpj: '50.915.875/0013-25' },
        { codigo: '004', nome: 'Centro Jacareí', cnpj: '50.915.875/0014-06' },
        { codigo: '006', nome: 'C.Vale SJC', cnpj: '50.915.875/0004-34' },
        { codigo: '007', nome: 'Colinas SJC', cnpj: '50.915.875/0003-53' },
        { codigo: '009', nome: 'Satélite SJC', cnpj: '50.915.875/0001-91' },
        { codigo: '010', nome: 'Vila Nair - SJC', cnpj: '50.915.875/0005-15' },
        { codigo: '016', nome: 'Centro Guaratinguetá', cnpj: '50.915.875/0015-97' },
        { codigo: '019', nome: 'Shop. Jacareí', cnpj: '50.915.875/0016-78' },
        { codigo: '020', nome: 'Shop. Taubaté', cnpj: '50.915.875/0017-59' },
        { codigo: '023', nome: 'Shop. Guaratinguetá', cnpj: '50.915.875/0018-30' },
        { codigo: '026', nome: 'Mega V.Sul SJC', cnpj: '50.915.875/0010-82' },
        { codigo: '028', nome: 'Centro Taubaté', cnpj: '50.915.875/0019-10' },
        { codigo: '032', nome: 'Mogi', cnpj: '50.915.875/0020-54' },
        { codigo: '039', nome: 'MOGI', cnpj: '50.915.875/0021-35' },
        { codigo: '043', nome: 'Suzano', cnpj: '50.915.875/0022-16' },
        { codigo: '044', nome: 'Shop. Caraguá', cnpj: '50.915.875/0008-68' },
        { codigo: '048', nome: 'Centro Pinda', cnpj: '50.915.875/0023-05' },
        { codigo: '049', nome: 'Centro Lorena', cnpj: '50.915.875/0024-88' },
        { codigo: '067', nome: 'Shop. Jd Oriente', cnpj: '50.915.875/0011-63' },
        { codigo: '075', nome: 'Oscar Shop Cruzeiro', cnpj: '50.915.875/0034-50' },
        { codigo: '122', nome: 'Taubaté', cnpj: '50.915.875/0026-40' },
        { codigo: '123', nome: 'Resende', cnpj: '50.915.875/0033-79' },
        { codigo: '124', nome: 'Centro SJC', cnpj: '50.915.875/0027-20' },
        { codigo: '125', nome: 'Centro SJC', cnpj: '50.915.875/0028-01' },
        { codigo: '126', nome: 'Centro Guaratinguetá', cnpj: '50.915.875/0029-92' },
        { codigo: '127', nome: 'Centro Jacareí', cnpj: '50.915.875/0030-26' },
        { codigo: '128', nome: 'Centro - Taubaté', cnpj: '50.915.875/0031-07' }
      ],
      totalLojas: '28 LOJAS'
    },
    {
      id: 'F2',
      nome: 'Jô Calçados Ltda',
      cor: 'bg-green-50 border-green-200',
      centros: [
        { codigo: '008', nome: 'S. J. Rio Preto', cnpj: '48.973.705/0013-55' },
        { codigo: '041', nome: 'S. J. Rio Preto', cnpj: '48.973.705/0009-79' },
        { codigo: '045', nome: 'Araçatuba', cnpj: '48.973.705/0010-02' },
        { codigo: '054', nome: 'Rio Preto', cnpj: '48.973.705/0026-70' },
        { codigo: '058', nome: 'Ribeirão Preto', cnpj: '48.973.705/0027-50' },
        { codigo: '061', nome: 'Jundiaí', cnpj: '48.973.705/0025-99' },
        { codigo: '062', nome: 'Piracicaba', cnpj: '48.973705/0023-27' },
        { codigo: '063', nome: 'Sorocaba', cnpj: '48.973.705/0024-08' },
        { codigo: '064', nome: 'Araraquara', cnpj: '48.973.705/0020-84' },
        { codigo: '065', nome: 'MOGI MIRIM', cnpj: '48.973.705/0018-60' },
        { codigo: '066', nome: 'MOGI GUAÇU', cnpj: '48.973.705/0019-40' },
        { codigo: '068', nome: 'Bauru', cnpj: '48.973.705/0012-74' },
        { codigo: '069', nome: 'Piracicaba', cnpj: '48.973.705/0028-31' },
        { codigo: '072', nome: 'Ribeirão Preto-Shop.', cnpj: '48.973.705/0008-98' },
        { codigo: '074', nome: 'Piracicaba Shopping', cnpj: '48.973.705/0035-60' },
        { codigo: '101', nome: 'BOTUCATU', cnpj: '48.973.705/0001-11' },
        { codigo: '102', nome: 'Ituiutaba', cnpj: '48.973.705/0034-80' },
        { codigo: '105', nome: 'Uberaba', cnpj: '48.973.705/0033-07' },
        { codigo: '106', nome: 'S. J. Rio Preto', cnpj: '48.973.705/0011-93' },
        { codigo: '108', nome: 'Votuporanga', cnpj: '48.973.705/0017-89' },
        { codigo: '109', nome: 'ARARAQUARA', cnpj: '48.973.705/0021-65' },
        { codigo: '111', nome: 'Franca', cnpj: '48.973.705/0022-46' },
        { codigo: '113', nome: 'Uberlândia', cnpj: '48.973.705/0032-18' },
        { codigo: '114', nome: 'Limeira', cnpj: '48.973.705/0031-37' },
        { codigo: '115', nome: 'Ourinhos', cnpj: '48.973.705/0002-00' },
        { codigo: '116', nome: 'São Carlos', cnpj: '48.973.705/0030-56' },
        { codigo: '117', nome: 'Bauru', cnpj: '48.973.705/0016-06' },
        { codigo: '118', nome: 'Catanduva', cnpj: '48.973.705/0015-17' },
        { codigo: '119', nome: 'Barretos', cnpj: '48.973.705/0029-12' },
        { codigo: '120', nome: 'Pres. Prudente', cnpj: '48.973.705/0007-07' }
      ],
      totalLojas: '30 LOJAS'
    },
    {
      id: 'F3',
      nome: 'Carioca Calçados Ltda',
      cor: 'bg-orange-50 border-orange-200',
      centros: [
        { codigo: '201', nome: 'Estreito/Floripa', cnpj: '78.842.440/0001-83' },
        { codigo: '202', nome: 'Joinville', cnpj: '78.842.440/0023-99' },
        { codigo: '204', nome: 'Estreito/Floripa', cnpj: '78.842.440/0009-30' },
        { codigo: '205', nome: 'Bairro dos Ingleses', cnpj: '78.842/440/0020-46' },
        { codigo: '208', nome: 'Balneário', cnpj: '78.842.440/0002-64' },
        { codigo: '209', nome: 'Centro / Floripa', cnpj: '78.842.440/0003-45' },
        { codigo: '211', nome: 'Shop Itaguaçu/São José', cnpj: '78.842.440/0004-26' },
        { codigo: '212', nome: 'Kobrasol /São José', cnpj: '78.842.440/0014-06' },
        { codigo: '214', nome: 'Centro / Itajaí', cnpj: '78.842.440/0005-07' },
        { codigo: '215', nome: 'Centro / Floripa', cnpj: '78.842.440/0017-40' },
        { codigo: '216', nome: 'Centro / Floripa', cnpj: '78.842.440/0016-60' },
        { codigo: '217', nome: 'Sh Itaguaçu / São José', cnpj: '78.842.440/0015-89' },
        { codigo: '218', nome: 'Sh. Vila Romana - Floripa', cnpj: '78.842.440/0006-98' },
        { codigo: '219', nome: 'Centro / Floripa', cnpj: '78.842.440/0007-79' },
        { codigo: '221', nome: 'Centro / Floripa', cnpj: '78.842.440/0011-55' },
        { codigo: '223', nome: 'Shop. Itaguaçu / São José', cnpj: '78.842.440/0010-74' },
        { codigo: '224', nome: 'Centro / Floripa', cnpj: '78.842.440/0012-36' },
        { codigo: '225', nome: 'Centro / Palhoça', cnpj: '78.842.440/0013-17' },
        { codigo: '226', nome: 'Shop. Continente / São José', cnpj: '78.842.440/0018-21' },
        { codigo: '227', nome: 'Forquilhinhas / São José', cnpj: '78.842.440/0022-08' },
        { codigo: '228', nome: 'Centro / Biguaçu', cnpj: '78.842.440/0019-02' },
        { codigo: '297', nome: 'CD-Bela Vista/São José', cnpj: '78.842.440/0008-50' }
      ],
      totalLojas: '21 LOJAS + 1 CD'
    },
    {
      id: 'F4',
      nome: 'VarejoSul Ltda',
      cor: 'bg-purple-50 border-purple-200',
      centros: [
        { codigo: '302', nome: 'Centro POA', cnpj: '49.961.545/0033-30' },
        { codigo: '306', nome: 'Park Shop - Canoas', cnpj: '49.961.545/0036-83' },
        { codigo: '317', nome: 'Rio Branco - POA', cnpj: '49.961.545/0006-68' },
        { codigo: '318', nome: 'Vila Imbuhy - Cachoeirinha', cnpj: '49.961.545/0023-69' },
        { codigo: '319', nome: 'Centro - Gravataí', cnpj: '49.961.545/0026-01' },
        { codigo: '323', nome: 'Bourbom Shop - São Leopoldo', cnpj: '49.961.545/0020-16' },
        { codigo: '326', nome: 'Praia de Belas Shop. - POA', cnpj: '49.961.545/0029-54' },
        { codigo: '327', nome: 'Lindóia Shop - POA', cnpj: '49.961.545/0012-06' },
        { codigo: '333', nome: 'Centro Histórico - POA', cnpj: '49.961.545/0047-36' },
        { codigo: '337', nome: 'Canoas Shop. - Canoas', cnpj: '49.961.545/0034-11' },
        { codigo: '338', nome: 'Bourbom Ipiranga Shop. - POA', cnpj: '49.961.545/0002-34' },
        { codigo: '339', nome: 'Bourbom Shop. - Novo Hamburgo', cnpj: '49.961.545/0022-88' },
        { codigo: '343', nome: 'Iguatemi - POA', cnpj: '49.961.545/0010-44' },
        { codigo: '345', nome: 'Canoas Shop - Canoas', cnpj: '49.961.545/0016-30' },
        { codigo: '346', nome: 'Jaraguá do Sul - SC', cnpj: '49.961.545/0060-03' },
        { codigo: '347', nome: 'Iguatemi - Caxias do Sul', cnpj: '49.961.545/0028-73' },
        { codigo: '348', nome: 'Shopping Canoas', cnpj: '49.961.545/0025-20' },
        { codigo: '349', nome: 'Florianópolis - SC', cnpj: '49.961.545/0059-70' },
        { codigo: '351', nome: 'Blumenau - SC', cnpj: '49.961.545/0061-94' },
        { codigo: '352', nome: 'Barra Shop. - POA', cnpj: '49.961.545/0017-10' },
        { codigo: '353', nome: 'Barra Shop - POA', cnpj: '49.961.545/0008-20' },
        { codigo: '355', nome: 'Passo Fundo - RS', cnpj: '49.961.545/0063-56' },
        { codigo: '356', nome: 'Centro Histórico - POA', cnpj: '49.961.545/0031-79' },
        { codigo: '359', nome: 'Joinville - SC', cnpj: '49.961.545/0062-75' },
        { codigo: '362', nome: 'Royal Plaza Shop. Santa Maria', cnpj: '49.961.545/0009-00' },
        { codigo: '363', nome: 'Blumenau - SC', cnpj: '49.961.545/0064-37' },
        { codigo: '364', nome: 'Bourbom Centeria Shop - POA', cnpj: '49.961.545/0035-00' },
        { codigo: '367', nome: 'Bourbom Wallig - POA', cnpj: '49.961.545/0056-27' },
        { codigo: '378', nome: 'Shopping Pelotas - Pelotas', cnpj: '49.961.545/0005-87' },
        { codigo: '382', nome: 'Shopping Gravataí - Gravataí', cnpj: '49.961.545/0019-82' },
        { codigo: '391', nome: 'Balneário Camburiu - SC', cnpj: '49.961.545/0065-18' }
      ],
      observacoes: 'Paquetá/Gaston',
      totalLojas: '31 LOJAS'
    },
    {
      id: 'F5',
      nome: 'Oscar Calçados Comércio Eletrônico Ltda',
      cor: 'bg-indigo-50 border-indigo-200',
      centros: [
        { codigo: '600', nome: 'Oscar Calç . Com Eletrônico', cnpj: '54.650.901/0001-58' }
      ],
      observacoes: 'Loja E commerce',
      totalLojas: '8 LOJAS'
    },
    {
      id: 'F7',
      nome: 'SIMPLES OSCAR/SPORT',
      cor: 'bg-yellow-50 border-yellow-200',
      centros: [
        { codigo: '002', nome: 'Jd. Paulista São José - EN C.', cnpj: '54.237.938/0001-59' },
        { codigo: '005', nome: 'Centro - Jacareí RACSO', cnpj: '72.014.681/0001-58' },
        { codigo: '017', nome: 'Oscar Tenis Shop. V. Sul - VSC', cnpj: '05.574.086/0001-80' },
        { codigo: '022', nome: 'Oscar Tenis Centro SJC - JSC', cnpj: '05.908.530/0001-56' },
        { codigo: '047', nome: 'Centro - Pinda - OPS', cnpj: '19.853.593/0001-67' },
        { codigo: '053', nome: 'Shop. Bauru - RC . Bauru', cnpj: '45.151.240/0001-25' },
        { codigo: '076', nome: 'Bruno Const. - Oscar Motorama', cnpj: '09.332.225/0001-10' }
      ],
      totalLojas: '7 LOJAS'
    },
    {
      id: 'F8',
      nome: 'SIMPLES SCARLEN/STOCK/CONST',
      cor: 'bg-red-50 border-red-200',
      centros: [
        { codigo: '024', nome: 'Stock - Estoque V', cnpj: '08.77.666/0001-48' },
        { codigo: '031', nome: 'MG - Constantino', cnpj: '10.980.442/0001-03' },
        { codigo: '034', nome: 'Stock Brás Cubas', cnpj: '03.972.679/0001-79' },
        { codigo: '035', nome: 'Stock Show Suzano', cnpj: '04.431.428/0001-40' },
        { codigo: '036', nome: 'Suzano - Scarlen', cnpj: '02.010.526/0001-88' },
        { codigo: '037', nome: 'Scarlen Mogi - Helena', cnpj: '58.760.141/0001-92' },
        { codigo: '038', nome: 'Scarlen Mogi - Czarine', cnpj: '67.109.132/0001-27' },
        { codigo: '042', nome: 'Stock -Poá - Francisco', cnpj: '08.062.235/0001-10' },
        { codigo: '404', nome: 'Centro Histórico - POA', cnpj: '49.961.545/0043-02' }
      ],
      totalLojas: '9 LOJAS'
    },
    {
      id: 'F9',
      nome: 'FRANQUIAS',
      cor: 'bg-gray-50 border-gray-200',
      centros: [
        { codigo: '011', nome: 'Arezzo - AVS', cnpj: '09.108.526/0001-64' },
        { codigo: '012', nome: 'SJC - R Const (L.Presumido)', cnpj: '02.139.784/0001-69' },
        { codigo: '013', nome: 'SJC - OFS', cnpj: '08.371.232/0001-68' },
        { codigo: '015', nome: 'SJC - IACR', cnpj: '04.723.248/0001-31' },
        { codigo: '018', nome: 'Jacareí - ARSJ', cnpj: '14.620.014/0001-12' },
        { codigo: '040', nome: 'Mogi - CCRH', cnpj: '02.163.422/0001-03' },
        { codigo: '050', nome: 'SJC - BRUNO B.', cnpj: '21.400.535/0001-20' },
        { codigo: '055', nome: 'Usaflex Mogi - LUCON', cnpj: '31.795.183/0001-02' },
        { codigo: '056', nome: 'Usaflex Guarulhos - APC', cnpj: '33.452.971/0001-21' },
        { codigo: '057', nome: 'Usaflex Suzano - USS', cnpj: '33.930.685/0001-24' },
        { codigo: '059', nome: 'Usaflex TatuaPé - UST', cnpj: '36.204.835/0001-00' },
        { codigo: '060', nome: 'Ana Capri Suzano- ACS', cnpj: '36.191.797/0001-07' },
        { codigo: '070', nome: 'Ana Capri C.Vale - ACCV', cnpj: '48.145.491/0001-95' },
        { codigo: '071', nome: 'Ana Capri V. Sul - ACVS', cnpj: '48.277.781/0001-92' },
        { codigo: '073', nome: 'Ana Capri - Shopping Oriente', cnpj: '48.145.491/0002-76' },
        { codigo: '121', nome: 'Centro Caçapava - BVB', cnpj: '40.591.677/0001-66' },
        { codigo: '300', nome: 'ABYS-GUARARAPES - O&A', cnpj: '37.765.702/0001-76' },
        { codigo: '301', nome: 'ABYS-CARUARU SH - O&A', cnpj: '37.765.702/0002-57' },
        { codigo: '302', nome: 'ABYS-CARUARU CT - O&A', cnpj: '37.765.702/0004-19' },
        { codigo: '303', nome: 'ABYS-PRAZERES - O&A', cnpj: '37.765.702/0005-08' },
        { codigo: '304', nome: 'ABYS-TACARUNA -O&A', cnpj: '37.765.702/0003-38' }
      ],
      observacoes: 'Inclui Diadora, FestClub e outras marcas',
      totalLojas: '21 LOJAS'
    }
  ];

  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-[1200px]">
        <TableHeader>
          <TableRow>
            {empresas.map((empresa) => (
              <TableHead key={empresa.id} className={`text-center font-bold ${empresa.cor} border-2`}>
                <div className="space-y-1">
                  <div className="text-sm font-bold">{empresa.id}</div>
                  <div className="text-xs font-medium">{empresa.nome}</div>
                  {empresa.observacoes && (
                    <div className="text-xs italic">{empresa.observacoes}</div>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Determine max number of rows needed */}
          {Array.from({ length: Math.max(...empresas.map(e => e.centros.length)) }).map((_, rowIndex) => (
            <TableRow key={rowIndex}>
              {empresas.map((empresa) => (
                <TableCell key={empresa.id} className={`${empresa.cor} border text-xs p-2 vertical-align-top`}>
                  {empresa.centros[rowIndex] && (
                    <div className="space-y-1">
                      <div className="font-semibold">
                        {empresa.centros[rowIndex].codigo} - {empresa.centros[rowIndex].nome}
                      </div>
                      {empresa.centros[rowIndex].cnpj && (
                        <div className="text-xs text-gray-600">
                          {empresa.centros[rowIndex].cnpj}
                        </div>
                      )}
                    </div>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {/* Footer row with totals */}
          <TableRow>
            {empresas.map((empresa) => (
              <TableCell key={empresa.id} className={`${empresa.cor} border text-center font-bold text-sm`}>
                {empresa.totalLojas}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CentroCusto;