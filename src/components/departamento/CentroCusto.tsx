import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import financialBuilding from '@/assets/financial-building.jpg';

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
      cor: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
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
      cor: 'linear-gradient(135deg, #22c55e, #16a34a)',
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
      cor: 'linear-gradient(135deg, #f97316, #ea580c)',
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
      nome: 'VarejoSul Ltda (Paquetá)',
      cor: 'linear-gradient(135deg, #a855f7, #7c3aed)',
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
      totalLojas: '31 LOJAS'
    },
    {
      id: 'F4G',
      nome: 'VarejoSul Ltda (Gaston)',
      cor: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
      centros: [
        { codigo: '404', nome: 'Centro Histórico - POA', cnpj: '49.961.545/0043-02' },
        { codigo: '411', nome: 'Centro - Rio Grande', cnpj: '49.961.545/0040-60' },
        { codigo: '413', nome: 'Centro - POA', cnpj: '49.961.545/0053-84' },
        { codigo: '414', nome: 'Vila Veranópolis - Cachoeirinha', cnpj: '49.961.545/0041-40' },
        { codigo: '415', nome: 'Azenha - POA', cnpj: '49.961.545/0007-49' },
        { codigo: '417', nome: 'Centro - Gravataí', cnpj: '49.961.545/0030-98' },
        { codigo: '419', nome: 'Iguatemi Shop. - POA', cnpj: '49.961.545/0027-92' },
        { codigo: '421', nome: 'Canoas Shop. - Canoas', cnpj: '49.961.545/0057-08' },
        { codigo: '422', nome: 'Bourbom Assis Brasil Shop - POA', cnpj: '49.961.545/0014-78' },
        { codigo: '423', nome: 'Passo D\'Areia - POA', cnpj: '49.961.545/0024-40' },
        { codigo: '424', nome: 'Bela Vista - Alvorada', cnpj: '49.961.545/0058-99' },
        { codigo: '426', nome: 'Tristeza - POA', cnpj: '49.961.545/0042-21' },
        { codigo: '427', nome: 'Carrefour Partenon - POA', cnpj: '49.961.545/0004-04' },
        { codigo: '428', nome: 'Carrefour Higienópolis - POA', cnpj: '49.961.545/0046-55' },
        { codigo: '430', nome: 'Shopping Total - POA', cnpj: '49.961.545/0051-12' },
        { codigo: '431', nome: 'Centro - Canoas', cnpj: '49.961.545/0048-17' },
        { codigo: '432', nome: 'Shopping do Vale - Cachoeirinha', cnpj: '49.961.545/0038-45' },
        { codigo: '434', nome: 'Primor - Sapucaia do Sul', cnpj: '49.961.545/0015-59' },
        { codigo: '436', nome: 'Centro - Viamão', cnpj: '49.961.545/0032-50' },
        { codigo: '439', nome: 'Leroy Merlin Sarandi - POA', cnpj: '49.961.545/0011-25' },
        { codigo: '440', nome: 'Barra Shopping - POA', cnpj: '49.961.545/0013-97' },
        { codigo: '441', nome: 'Bourbom Wallig - POA', cnpj: '49.961.545/0044-93' },
        { codigo: '444', nome: 'Shopping Pelotas - Pelotas', cnpj: '49.961.545/0050-31' },
        { codigo: '445', nome: 'Shopping Gravataí - Gravataí', cnpj: '49.961.545/0045-74' },
        { codigo: '446', nome: 'Rio Grande Shop - Rio Grande', cnpj: '49.961.545/0052-01' },
        { codigo: '447', nome: 'Park Shopping - Canoas', cnpj: '49.961.545/0039-26' },
        { codigo: '449', nome: 'Patronato - Santa Maria', cnpj: '49.961.545/0003-15' },
        { codigo: '300', nome: 'Matriz', cnpj: '49.961.545/0001-53' },
        { codigo: '301', nome: 'CD SAPUCAIA', cnpj: '49.961.545/0055-46' }
      ],
      totalLojas: '27 LOJAS'
    },
    {
      id: 'F5',
      nome: 'Oscar E-commerce',
      cor: 'linear-gradient(135deg, #6366f1, #4f46e5)',
      centros: [
        { codigo: '600', nome: 'Oscar Calç . Com Eletrônico', cnpj: '54.650.901/0001-58' }
      ],
      observacoes: 'Loja E commerce',
      totalLojas: '8 LOJAS'
    },
    {
      id: 'F7',
      nome: 'SIMPLES OSCAR/SPORT',
      cor: 'linear-gradient(135deg, #eab308, #ca8a04)',
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
      cor: 'linear-gradient(135deg, #ef4444, #dc2626)',
      centros: [
        { codigo: '024', nome: 'Stock - Estoque V', cnpj: '08.77.666/0001-48' },
        { codigo: '031', nome: 'MG - Constantino', cnpj: '10.980.442/0001-03' },
        { codigo: '034', nome: 'Stock Brás Cubas', cnpj: '03.972.679/0001-79' },
        { codigo: '035', nome: 'Stock Show Suzano', cnpj: '04.431.428/0001-40' },
        { codigo: '036', nome: 'Suzano - Scarlen', cnpj: '02.010.526/0001-88' },
        { codigo: '037', nome: 'Scarlen Mogi - Helena', cnpj: '58.760.141/0001-92' },
        { codigo: '038', nome: 'Scarlen Mogi - Czarine', cnpj: '67.109.132/0001-27' },
        { codigo: '042', nome: 'Stock -Poá - Francisco', cnpj: '08.062.235/0001-10' },
        { codigo: '408', nome: 'Oxygen Mkt e Tecnologia', cnpj: '42.676.252/0001-85' },
        { codigo: '093', nome: 'Matrix Online Ltda', cnpj: '42.673.133/0001-79' },
        { codigo: '094', nome: 'Financial G. Financeira', cnpj: '46.759.779/0001-24' },
        { codigo: '095', nome: 'Transport G. Logística Ltda', cnpj: '46.653.947/0001-00' },
        { codigo: '096', nome: 'E.L. Dos Santos Contabilidade', cnpj: '11.800.724/0001-36' },
        { codigo: '151', nome: 'Associaçãodos Locatários', cnpj: '54.620.686/0001-42' }
      ],
      observacoes: 'BACKOFFICE',
      totalLojas: '15 LOJAS'
    },
    {
      id: 'F9',
      nome: 'FRANQUIAS',
      cor: 'linear-gradient(135deg, #64748b, #475569)',
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
        { codigo: '304', nome: 'ABYS-TACARUNA -O&A', cnpj: '37.765.702/0003-38' },
        { codigo: 'DCM-RCM', nome: 'Democrata - RCM (Rio Mar)', cnpj: '59.518.424/0001-95' },
        { codigo: 'DCM-AVB', nome: 'Democrata - AVB (Tacaruna)', cnpj: '55.713.709/0001-26' },
        { codigo: 'DCM-WP', nome: 'Democrata - WP (Recife)', cnpj: '41.374.683/0001-24' },
        { codigo: 'DD-001', nome: 'Diadora - BRANDS', cnpj: '24.808.018/0001-82' },
        { codigo: 'DD-002', nome: 'Diadora - BRANDS', cnpj: '24.808.018/0002-63' },
        { codigo: 'FC-001', nome: 'FestClub - FESTCARD', cnpj: '15.674.394/0001-30' }
      ],
      observacoes: '21 LOJAS + 1 Licenciada + 1 CD + 1 ADM DE CARTÃO',
      totalLojas: '24 UNIDADES'
    }
  ];

  // Criar nodes para cada empresa
  const createNodes = (): Node[] => {
    const nodes: Node[] = [];
    
    empresas.forEach((empresa, index) => {
      const x = (index % 3) * 400;
      const y = Math.floor(index / 3) * 300;
      
      nodes.push({
        id: empresa.id,
        type: 'default',
        position: { x, y },
        data: {
          label: (
            <div className="text-center p-3">
              <img 
                src={financialBuilding} 
                alt="Empresa" 
                className="w-12 h-12 mx-auto mb-2 rounded-lg object-cover"
              />
              <div className="text-lg font-bold mb-1">{empresa.id}</div>
              <div className="text-sm font-medium mb-2">{empresa.nome}</div>
              <div className="text-xs bg-white/20 px-2 py-1 rounded">
                {empresa.totalLojas}
              </div>
              {empresa.observacoes && (
                <div className="text-xs italic mt-1">{empresa.observacoes}</div>
              )}
              <div className="text-xs mt-1">
                {empresa.centros.length} centros de custo
              </div>
            </div>
          )
        },
        style: {
          background: empresa.cor,
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          width: 200,
          height: 150,
          fontSize: '11px'
        }
      });
    });
    
    return nodes;
  };

  const initialNodes = createNodes();
  const initialEdges: Edge[] = [];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-full">
      <Card className="w-full h-full">
        <CardHeader>
          <CardTitle className="text-center">Estrutura de Centros de Custo</CardTitle>
        </CardHeader>
        <CardContent>
          <div style={{ width: '100%', height: '600px' }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              fitView
              attributionPosition="top-right"
              style={{ backgroundColor: "#F7F9FB" }}
            >
              <MiniMap zoomable pannable />
              <Controls />
              <Background />
            </ReactFlow>
          </div>
          
          <div className="mt-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
            <h4 className="font-semibold text-center mb-3">Resumo das Empresas</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
              {empresas.map((empresa) => (
                <div key={empresa.id} className="flex items-center gap-2">
                  <div 
                    className="w-4 h-4 rounded" 
                    style={{ background: empresa.cor }}
                  ></div>
                  <div>
                    <div className="font-medium">{empresa.id}</div>
                    <div className="text-xs text-gray-600">{empresa.totalLojas}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CentroCusto;