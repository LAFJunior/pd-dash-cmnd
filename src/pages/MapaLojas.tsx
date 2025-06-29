import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Store } from 'lucide-react';

// Fix para ícones do Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapaLojas = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  const lojas = [
    // São José dos Campos - Ampliado
    { nome: "001 - Oscar Calçados Ltda", lat: -23.1890, lng: -45.8869, endereco: "Rua 7 de Setembro, 344 - Centro, São José dos Campos, SP", tipo: "loja" },
    { nome: "002 - E N Constantino Calçados", lat: -23.1950, lng: -45.8820, endereco: "Av. Pedro Álvares Cabral, 905 - Jardim Paulista, São José dos Campos, SP", tipo: "loja" },
    { nome: "003 - Oscar Calçados Ltda", lat: -23.1885, lng: -45.8875, endereco: "Rua 7 de Setembro, 142 - Centro, São José dos Campos, SP", tipo: "loja" },
    { nome: "006 - Oscar Calçados Ltda", lat: -23.2050, lng: -45.8950, endereco: "Av. Deputado Benedito Matarazzo, 9403 - Jardim Oswaldo Cruz, São José dos Campos, SP", tipo: "loja" },
    { nome: "007 - Oscar Calçados Ltda", lat: -23.2100, lng: -45.8700, endereco: "Av. São João, 2200 - Vila Higienópolis, São José dos Campos, SP", tipo: "loja" },
    { nome: "009 - Oscar Calçados Ltda", lat: -23.2300, lng: -45.8600, endereco: "Av. Andrômeda, 1868 - Jardim Satélite, São José dos Campos, SP", tipo: "loja" },
    { nome: "011 - AVS Comércio de Calçados", lat: -23.2290, lng: -45.8610, endereco: "Av. Andrômeda, 227 - Jardim Satélite, São José dos Campos, SP", tipo: "loja" },
    { nome: "012 - R. Constantino Calçados", lat: -23.2045, lng: -45.8945, endereco: "Av. Dep. Benedito Matarazzo, 9403 - Jardim Oswaldo Cruz, São José dos Campos, SP", tipo: "loja" },
    { nome: "013 - OFS Comércio de Calçados", lat: -23.2105, lng: -45.8705, endereco: "Av. São João, 2200 - Vila Higienópolis, São José dos Campos, SP", tipo: "loja" },
    { nome: "015 - IACR Comercial Ltda", lat: -23.2055, lng: -45.8955, endereco: "Av. Dep. Benedito Matarazzo, 9403 - Jardim Oswaldo Cruz, São José dos Campos, SP", tipo: "loja" },
    { nome: "017 - VSC Calçados Ltda", lat: -23.2295, lng: -45.8615, endereco: "Av. Andrômeda, 227 - Jardim Satélite, São José dos Campos, SP", tipo: "loja" },
    { nome: "022 - JSC Comércio de Calçados", lat: -23.1892, lng: -45.8872, endereco: "Rua 7 de Setembro, 156 - Centro, São José dos Campos, SP", tipo: "loja" },
    { nome: "024 - Estoque Vale Comércio", lat: -23.1900, lng: -45.8850, endereco: "Rua Sebastião Humel, 301 - Centro, São José dos Campos, SP", tipo: "loja" },
    { nome: "026 - Oscar Calçados Ltda", lat: -23.2285, lng: -45.8605, endereco: "Av. Andrômeda, 227 - Jardim Satélite, São José dos Campos, SP", tipo: "loja" },
    { nome: "030 - Oscar Calçados Ltda", lat: -23.2350, lng: -45.8500, endereco: "Rua Serra do Parimã, 123 - Jardim Anhembi, São José dos Campos, SP", tipo: "loja" },
    { nome: "046 - Constantino SJC", lat: -23.2040, lng: -45.8940, endereco: "Av. Deputado Benedito Matarazzo - Jardim Oswaldo Cruz, São José dos Campos, SP", tipo: "loja" },
    { nome: "050 - Bruno Cazarine Constantino", lat: -23.2110, lng: -45.8710, endereco: "Av. São João, 2200 - Jardim Das Colinas, São José dos Campos, SP", tipo: "loja" },
    { nome: "067 - Oscar Calçados Ltda", lat: -23.2355, lng: -45.8505, endereco: "R Andorra, 500 - Jardim América, São José dos Campos, SP", tipo: "loja" },
    { nome: "070 - ACCV Calçados Ltda", lat: -23.2042, lng: -45.8942, endereco: "Av. Deputado Benedito Matarazzo, 9403 - Jardim Oswaldo Cruz, São José dos Campos, SP", tipo: "loja" },
    { nome: "071 - ACVS Calçados Ltda", lat: -23.2292, lng: -45.8612, endereco: "Av. Andrômeda, 227 - Jardim Satélite, São José dos Campos, SP", tipo: "loja" },
    { nome: "073 - ACCV Calçados Ltda", lat: -23.2352, lng: -45.8502, endereco: "R Andorra, 500 - Jardim América, São José dos Campos, SP", tipo: "loja" },
    { nome: "076 - Bruno Cazarine Constantino", lat: -23.2250, lng: -45.8450, endereco: "R dos Lírios, 459 - Jardim Motorama, São José dos Campos, SP", tipo: "loja" },
    { nome: "124 - Oscar Calçados Ltda", lat: -23.1888, lng: -45.8868, endereco: "Rua 7 de Setembro, 115 - Centro, São José dos Campos, SP", tipo: "loja" },
    { nome: "125 - Oscar Calçados Ltda", lat: -23.1893, lng: -45.8873, endereco: "Rua 7 de Setembro, 358 - Centro, São José dos Campos, SP", tipo: "loja" },
    { nome: "129 - Jô Js Ltda", lat: -23.2288, lng: -45.8608, endereco: "Av. Andrômeda, 1846 - Jardim Satélite, São José dos Campos, SP", tipo: "loja" },
    { nome: "010 - CD São José dos Campos", lat: -23.2150, lng: -45.8800, endereco: "Rua Paraibuna, 1692 - Vila Nair, São José dos Campos, SP", tipo: "cd" },
    
    // Jacareí - Ampliado
    { nome: "004 - Oscar Calçados Ltda", lat: -23.3055, lng: -45.9696, endereco: "Rua Sargento Acrísio Santana, 141 - Centro, Jacareí, SP", tipo: "loja" },
    { nome: "005 - RACSO Calçados Ltda", lat: -23.3050, lng: -45.9700, endereco: "Praça Raul Chaves, 79 - Centro, Jacareí, SP", tipo: "loja" },
    { nome: "018 - ARSJ Comércio de Calçados", lat: -23.3060, lng: -45.9692, endereco: "Rua Barão de Jacareí, 364 - Centro, Jacareí, SP", tipo: "loja" },
    { nome: "019 - Oscar Calçados Ltda", lat: -23.3058, lng: -45.9694, endereco: "Rua Barão de Jacareí, 364 - Centro, Jacareí, SP", tipo: "loja" },
    { nome: "127 - Oscar Calçados Ltda", lat: -23.3052, lng: -45.9698, endereco: "Rua Alfredo Schurig, 148 - Centro, Jacareí, SP", tipo: "loja" },
    
    // Guaratinguetá - Ampliado
    { nome: "016 - Oscar Calçados Ltda", lat: -22.8163, lng: -45.1931, endereco: "Rua Comendador João Galvão, 36 - Centro, Guaratinguetá, SP", tipo: "loja" },
    { nome: "023 - Oscar Calçados Ltda", lat: -22.8100, lng: -45.1950, endereco: "Av. Juscelino Kubitschek de Oliveira, 351 - Campo do Galvão, Guaratinguetá, SP", tipo: "loja" },
    { nome: "126 - Oscar Calçados Ltda", lat: -22.8160, lng: -45.1935, endereco: "Rua Com. Rodrigues Alves, 107 - Centro, Guaratinguetá, SP", tipo: "loja" },
    
    // Mogi das Cruzes - Ampliado
    { nome: "031 - Constantino Calçados", lat: -23.5229, lng: -46.1881, endereco: "Av. Ver. Narciso Yague Guimarães, 1001 - Jardim Armênia, Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "032 - Oscar Calçados Ltda", lat: -23.5225, lng: -46.1885, endereco: "Av. Ver. Narciso Yague Guimarães, 1001 - Jardim Armênia, Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "033 - Mogi Centro Ltda", lat: -23.5200, lng: -46.1850, endereco: "Rua Doutor Paulo Frontin, 161 - Centro, Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "034 - Stock Bras Cubas Ltda", lat: -23.5300, lng: -46.1900, endereco: "Rua Francisco Afonso de Melo, 135 - Vila Brás Cubas, Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "037 - Helena Regina Cazarine", lat: -23.5180, lng: -46.1830, endereco: "Rua Brás Cubas, 163 - Centro, Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "038 - Cazarine e Constantino", lat: -23.5227, lng: -46.1883, endereco: "Av. Ver. Narciso Yague Guimarães, 1001 - Jardim Armênia, Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "039 - Oscar Calçados Ltda", lat: -23.5190, lng: -46.1840, endereco: "Rua Dr. Deodato Wertheimer, 1395 - Centro, Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "040 - CCRH Comércio de Calçados", lat: -23.5223, lng: -46.1887, endereco: "Av. Ver Narciso Yague Guimarães, 1001 - Jardim Armênia, Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "055 - Lucon Ferraz Calçados", lat: -23.5221, lng: -46.1889, endereco: "Av. Vereador Narciso Yague Guimarães, 1001 - Jardim Armênia, Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "090 - CD Ponta Sz Ltda", lat: -23.5250, lng: -46.1900, endereco: "Rua Professor Flaviano de Melo, 01 - Centro, Mogi das Cruzes, SP", tipo: "cd" },
    
    // Suzano - Ampliado
    { nome: "035 - Stock Show Suzano", lat: -23.5426, lng: -46.3107, endereco: "Rua Eliziel Alves Costa, 34 - Centro, Suzano, SP", tipo: "loja" },
    { nome: "036 - Scarlen Calçados", lat: -23.5430, lng: -46.3110, endereco: "Rua 7 de Setembro, 555 - Jardim Irai, Suzano, SP", tipo: "loja" },
    { nome: "043 - Oscar Calçados Ltda", lat: -23.5420, lng: -46.3100, endereco: "Rua Sete de setembro, 555 - Cidade Cruzeiro do Sul, Suzano, SP", tipo: "loja" },
    { nome: "057 - Uss Comércio de Calçados", lat: -23.5432, lng: -46.3112, endereco: "Rua Sete de Setembro, 555 - Parque Suzano, Suzano, SP", tipo: "loja" },
    { nome: "060 - ACS Comércio de Calçados", lat: -23.5428, lng: -46.3108, endereco: "Rua Sete de Setembro, 555 - Parque Suzano, Suzano, SP", tipo: "loja" },
    
    // Poá
    { nome: "042 - Francisco Telles Marcondes", lat: -23.5318, lng: -46.3450, endereco: "Rua Silverio Pereira Jordão, 37 - Centro, Poá, SP", tipo: "loja" },
    
    // Taubaté - Ampliado
    { nome: "020 - Oscar Calçados Ltda", lat: -23.0326, lng: -45.5527, endereco: "Av. Charles Schnneider, 1700 - Parque Senhor do Bom Fim, Taubaté, SP", tipo: "loja" },
    { nome: "028 - Oscar Calçados Ltda", lat: -23.0320, lng: -45.5530, endereco: "Dr Pedro Costa, 06 - Centro, Taubaté, SP", tipo: "loja" },
    { nome: "122 - Oscar Calçados Ltda", lat: -23.0322, lng: -45.5525, endereco: "Av. Charles Schneider, 1700 - Vila Costa, Taubaté, SP", tipo: "loja" },
    { nome: "128 - Oscar Calçados Ltda", lat: -23.0330, lng: -45.5535, endereco: "Rua Carneiro de Souza, 147 - Centro, Taubaté, SP", tipo: "loja" },
    
    // Pindamonhangaba
    { nome: "047 - OPS Comércio de Calçados", lat: -22.9246, lng: -45.4619, endereco: "Rua Alcides Ramos Nogueira, 650 - Mombaça, Pindamonhangaba, SP", tipo: "loja" },
    { nome: "048 - Oscar Calçados Ltda", lat: -22.9240, lng: -45.4615, endereco: "Praça Monsenhor Marcondes, 50 - Centro, Pindamonhangaba, SP", tipo: "loja" },
    
    // Lorena
    { nome: "049 - Oscar Calçados Ltda", lat: -22.7308, lng: -45.1252, endereco: "Rua Rodrigues de Azevedo, 240 - Centro, Lorena, SP", tipo: "loja" },
    
    // Cruzeiro
    { nome: "075 - Cruzeiro Ltda", lat: -22.5759, lng: -44.9637, endereco: "R Doutor Othon Barcelos, 05 - Itagacaba, Cruzeiro, SP", tipo: "loja" },
    
    // Caraguatatuba
    { nome: "044 - Oscar Calçados Ltda", lat: -23.6203, lng: -45.4134, endereco: "Av. José Herculano, 1086 - Santa Marina, Caraguatatuba, SP", tipo: "loja" },
    
    // Caçapava
    { nome: "121 - BVB Calçados Eireli", lat: -23.1057, lng: -45.7113, endereco: "Rua Sete de Setembro, 185 - Centro, Caçapava, SP", tipo: "loja" },
    
    // Resende - RJ
    { nome: "123 - Oscar Calçados Ltda", lat: -22.4681, lng: -44.4462, endereco: "Av Albino de Almeida, 185 - Campos Eliseos, Resende, RJ", tipo: "loja" },
    
    // Interior SP - Novas Lojas
    { nome: "053 - RC Bauru Calçados", lat: -22.3149, lng: -49.0581, endereco: "Rua Henrique Savi, 15-55 - Vila Cidade Universitaria, Bauru, SP", tipo: "loja" },
    { nome: "052 - Outlet Bauru Ltda", lat: -22.3100, lng: -49.0600, endereco: "Vila Cardia, Bauru, SP", tipo: "loja" },
    { nome: "068 - Jô Calçados Ltda", lat: -22.3140, lng: -49.0575, endereco: "Rua Batista de Carvalho, 526 - Centro, Bauru, SP", tipo: "loja" },
    { nome: "117 - Jô Calçados Ltda", lat: -22.3145, lng: -49.0578, endereco: "Rua Batista de Carvalho, 461 - Centro, Bauru, SP", tipo: "loja" },
    
    // Ribeirão Preto
    { nome: "054 - Jô Calçados Ltda", lat: -21.1699, lng: -47.8099, endereco: "Rua Alvares Cabral, 470 - Centro, Ribeirão Preto, SP", tipo: "loja" },
    { nome: "058 - Jô Calçados Ltda", lat: -21.1650, lng: -47.8150, endereco: "Av Coronel Fernando Ferreira Leite, 1540 - Jardim California, Ribeirão Preto, SP", tipo: "loja" },
    { nome: "072 - Jô Calçados Ltda", lat: -21.1690, lng: -47.8120, endereco: "Novo Shopping Ribeirão, Ribeirão Preto, SP", tipo: "loja" },
    
    // São José do Rio Preto
    { nome: "008 - Jô Calçados Ltda", lat: -20.8194, lng: -49.3794, endereco: "Av. Brigadeiro Faria Lima, 6363 - Jardim Morumbi, São José do Rio Preto, SP", tipo: "loja" },
    { nome: "041 - Jô Calçados Ltda", lat: -20.8190, lng: -49.3790, endereco: "Rua General Glicério, 2826 - Centro, São José do Rio Preto, SP", tipo: "loja" },
    { nome: "106 - Jô Calçados Ltda", lat: -20.8185, lng: -49.3785, endereco: "Rua General Glicério, 2928 - Centro, São José do Rio Preto, SP", tipo: "loja" },
    
    // Guarulhos
    { nome: "056 - APC Fernandes Calçados", lat: -23.4538, lng: -46.5333, endereco: "Rua Engenheiro Camilo Olivetti, 295 - Vila Endres, Guarulhos, SP", tipo: "loja" },
    
    // São Paulo
    { nome: "059 - UST Comércio de Calçados", lat: -23.5505, lng: -46.6333, endereco: "Rua Domingos Agostim, 91 - Cidade mãe do céu, São Paulo, SP", tipo: "loja" },
    
    // Outras cidades SP
    { nome: "061 - Jô Calçados Ltda", lat: -23.1864, lng: -46.8840, endereco: "Rua Barão de Jundiaí, 636 - Centro, Jundiaí, SP", tipo: "loja" },
    { nome: "062 - Jô Calçados Ltda", lat: -22.7253, lng: -47.6486, endereco: "Rua Governador Pedro de Toledo, 1211 - Centro, Piracicaba, SP", tipo: "loja" },
    { nome: "069 - Jô Calçados Ltda", lat: -22.7250, lng: -47.6480, endereco: "Rua Governador Pedro de Toledo, 1118 - Centro, Piracicaba, SP", tipo: "loja" },
    { nome: "074 - Jô Calçados Ltda", lat: -22.7255, lng: -47.6490, endereco: "Av Limeira, 722 - Areão, Piracicaba, SP", tipo: "loja" },
    { nome: "063 - Jô Calçados Ltda", lat: -23.5015, lng: -47.4526, endereco: "Rua Doutor Braguinha, 262 - Centro, Sorocaba, SP", tipo: "loja" },
    { nome: "064 - Jô Calçados Ltda", lat: -21.7948, lng: -48.1757, endereco: "Rua Nove de Julho, 793 - Centro, Araraquara, SP", tipo: "loja" },
    { nome: "109 - Jô Calçados Ltda", lat: -21.7945, lng: -48.1760, endereco: "Rua Nove de Julho, 991 - Centro, Araraquara, SP", tipo: "loja" },
    { nome: "065 - Jô Calçados Ltda", lat: -22.4326, lng: -46.9576, endereco: "R Quinze de Novembro, 102 - Centro, Mogi Mirim, SP", tipo: "loja" },
    { nome: "066 - Jô Calçados Ltda", lat: -22.3689, lng: -46.9433, endereco: "R Apolinário, 79 - Centro, Mogi Guaçu, SP", tipo: "loja" },
    { nome: "101 - Jô Calçados Ltda", lat: -22.8854, lng: -48.4457, endereco: "Praça Comendador Emilio Pedutti, 35 - Centro, Botucatu, SP", tipo: "loja" },
    { nome: "103 - Jô Calçados Ltda", lat: -22.2198, lng: -49.9353, endereco: "Rua São Luiz, 637 - Centro, Marília, SP", tipo: "loja" },
    { nome: "108 - Jô Calçados Ltda", lat: -20.4237, lng: -49.9858, endereco: "Rua Amazonas, 3281 - Patrimônio Novo, Votuporanga, SP", tipo: "loja" },
    { nome: "111 - Jô Calçados Ltda", lat: -20.5387, lng: -47.4006, endereco: "Rua Major Claudiano, 1950 - Centro, Franca, SP", tipo: "loja" },
    { nome: "114 - Jô Calçados Ltda", lat: -22.5647, lng: -47.4017, endereco: "Rua Senador Vergueiro, 396 - Centro, Limeira, SP", tipo: "loja" },
    { nome: "115 - Jô Calçados Ltda", lat: -22.9789, lng: -49.8708, endereco: "Rua Antônio Carlos Mori, 273 - Centro, Ourinhos, SP", tipo: "loja" },
    { nome: "116 - Jô Calçados Ltda", lat: -22.0175, lng: -47.8908, endereco: "General Ozório, 848 - Centro, São Carlos, SP", tipo: "loja" },
    { nome: "118 - Jô Calçados Ltda", lat: -21.1378, lng: -48.9721, endereco: "Praça Monsenhor Albino, 80 - Centro, Catanduva, SP", tipo: "loja" },
    { nome: "119 - Jô Calçados Ltda", lat: -20.5569, lng: -48.5675, endereco: "Av. Dezenove, 875 - Centro, Barretos, SP", tipo: "loja" },
    { nome: "120 - Jô Calçados Ltda", lat: -22.1257, lng: -51.3893, endereco: "Rua Siqueira Campos, 615 - Centro, Presidente Prudente, SP", tipo: "loja" },
    { nome: "045 - Jô Calçados Ltda", lat: -21.2089, lng: -50.4328, endereco: "Rua Marechal Deodoro Fonseca, 139 - Centro, Araçatuba, SP", tipo: "loja" },
    { nome: "072 - Jô Calçados Ltda", lat: -21.2085, lng: -50.4325, endereco: "R Marechal Deodoro Fonseca, 217 - Centro, Araçatuba, SP", tipo: "loja" },
    { nome: "104 - Jô Calçados Ltda", lat: -21.2090, lng: -50.4330, endereco: "Rua Marechal Deodoro Fonseca, 217 - Centro, Araçatuba, SP", tipo: "loja" },
    
    // Minas Gerais
    { nome: "102 - Jô Calçados Ltda", lat: -18.9661, lng: -49.4646, endereco: "Rua Vinte e Dois, 616 - Centro, Ituiutaba, MG", tipo: "loja" },
    { nome: "105 - Jô Calçados Ltda", lat: -19.7482, lng: -47.9319, endereco: "Rua Artur Machado, 112 - Centro, Uberaba, MG", tipo: "loja" },
    { nome: "113 - Jô Calçados Ltda", lat: -18.9113, lng: -48.2622, endereco: "Av. Floriano Peixoto, 396 - Centro, Uberlândia, MG", tipo: "loja" },
    
    // Santa Catarina - Florianópolis
    { nome: "201 - Carioca Calçados", lat: -27.5954, lng: -48.5480, endereco: "Rua Cel. Pedro Demoro, 2045 - Estreito, Florianópolis, SC", tipo: "loja" },
    { nome: "204 - Carioca Calçados", lat: -27.5950, lng: -48.5485, endereco: "Rua Cel. Pedro Demoro, 2086 - Estreito, Florianópolis, SC", tipo: "loja" },
    { nome: "205 - Carioca Calçados", lat: -27.5800, lng: -48.5200, endereco: "Rod Armando Calil Bulos, 6777 - Ingleses, Florianópolis, SC", tipo: "loja" },
    { nome: "207 - Tiradentes Ct Carioca", lat: -27.5960, lng: -48.5490, endereco: "Rua Tiradentes, 103 - Centro, Florianópolis, SC", tipo: "loja" },
    { nome: "209 - Carioca Calçados", lat: -27.5958, lng: -48.5488, endereco: "Rua Felipe Schmidt, 300 - Centro, Florianópolis, SC", tipo: "loja" },
    { nome: "215 - Carioca Calçados", lat: -27.5955, lng: -48.5482, endereco: "Rua Felipe Schmidt, 395 - Centro, Florianópolis, SC", tipo: "loja" },
    { nome: "216 - Carioca Calçados", lat: -27.5952, lng: -48.5478, endereco: "Rua Deodoro, 210 - Centro, Florianópolis, SC", tipo: "loja" },
    { nome: "218 - Carioca Calçados", lat: -27.5900, lng: -48.5400, endereco: "Av. Madre Benvenuta, 687 - Santa Mônica, Florianópolis, SC", tipo: "loja" },
    { nome: "219 - Carioca Calçados", lat: -27.5956, lng: -48.5484, endereco: "Rua Felipe Schmidt, 107 - Centro, Florianópolis, SC", tipo: "loja" },
    { nome: "221 - Carioca Calçados", lat: -27.5951, lng: -48.5477, endereco: "Rua Deodoro, 170 - Centro, Florianópolis, SC", tipo: "loja" },
    { nome: "224 - Carioca Calçados", lat: -27.5957, lng: -48.5486, endereco: "Rua Sete de Setembro, 113 - Centro, Florianópolis, SC", tipo: "loja" },
    { nome: "349 - Paquetá Esportes", lat: -27.5905, lng: -48.5405, endereco: "Av Madre Benvenuta, 687 - Santa Monica, Florianópolis, SC", tipo: "loja" },
    
    // Joinville
    { nome: "112 - Jô Calçados Ltda", lat: -26.3044, lng: -48.8458, endereco: "Av. Juscelino Kubitschek, 517 - Centro, Joinville, SC", tipo: "loja" },
    { nome: "202 - Carioca Calçados", lat: -26.3040, lng: -48.8455, endereco: "Rua Quinze de Novembro, 515 - Centro, Joinville, SC", tipo: "loja" },
    { nome: "329 - Paquetá Joinville", lat: -26.3045, lng: -48.8460, endereco: "Av. Farroupilha, 4545 - Marechal Rondon, Joinville, SC", tipo: "loja" },
    { nome: "359 - Paquetá Calçados", lat: -26.3042, lng: -48.8456, endereco: "Av Rolf Wiest, 333 - Bom Retiro, Joinville, SC", tipo: "loja" },
    
    // São José - SC
    { nome: "203 - Carioca Calçados", lat: -27.5969, lng: -48.6394, endereco: "Av Aniceto Zacchi, 1038 - Ponte de Imaruim, São José, SC", tipo: "loja" },
    { nome: "211 - Carioca Calçados", lat: -27.5965, lng: -48.6390, endereco: "Gerôncio Thives, 1079 - Barreiros, São José, SC", tipo: "loja" },
    { nome: "212 - Carioca Calçados", lat: -27.5970, lng: -48.6395, endereco: "Av. Lédio João Martins, 864 - Kobrasol, São José, SC", tipo: "loja" },
    { nome: "217 - Carioca Calçados", lat: -27.5967, lng: -48.6392, endereco: "Rua Geroncio Thives, 1079 - Barreiros, São José, SC", tipo: "loja" },
    { nome: "223 - Carioca Calçados", lat: -27.5963, lng: -48.6388, endereco: "Rua Gerôncio Thives, 1079 - Barreiros, São José, SC", tipo: "loja" },
    { nome: "226 - Carioca Calçados", lat: -27.5975, lng: -48.6400, endereco: "Rodovia BR 101 KM 211 - Distrito Industrial, São José, SC", tipo: "loja" },
    { nome: "228 - Carioca Calçados", lat: -27.5972, lng: -48.6397, endereco: "R. Ver. Arthur Manoel Mariano, 1170 - Forquilhinhas, São José, SC", tipo: "loja" },
    { nome: "297 - CD Carioca", lat: -27.5980, lng: -48.6405, endereco: "Rua das Orquídeas, 350 - Bela Vista, São José, SC", tipo: "cd" },
    
    // Balneário Camboriú
    { nome: "208 - Carioca Calçados", lat: -26.9906, lng: -48.6336, endereco: "Avenida Central, 91 - Centro, Balneário Camboriú, SC", tipo: "loja" },
    { nome: "391 - Paquetá Calçados", lat: -26.9900, lng: -48.6330, endereco: "Av Santa Catarina, 1 - dos Estados, Balneário Camboriú, SC", tipo: "loja" },
    
    // Itajaí
    { nome: "214 - Carioca Calçados", lat: -26.9077, lng: -48.6618, endereco: "Rua Hercílio Luz, 680 - Centro, Itajaí, SC", tipo: "loja" },
    
    // Palhoça
    { nome: "225 - Carioca Calçados", lat: -27.6405, lng: -48.6704, endereco: "Rua Bernardino Machado, 69 - Centro, Palhoça, SC", tipo: "loja" },
    
    // Biguaçu
    { nome: "227 - Carioca Calçados", lat: -27.4948, lng: -48.6587, endereco: "Rua Coronel Teixeira Oliveira, 25 - Centro, Biguaçu, SC", tipo: "loja" },
    
    // Blumenau
    { nome: "351 - Paquetá Blumenau", lat: -26.9194, lng: -49.0661, endereco: "Rua Sete de Setembro, 1213 - Centro, Blumenau, SC", tipo: "loja" },
    { nome: "363 - Paquetá Calçados", lat: -26.9190, lng: -49.0665, endereco: "Rodovia BR 470 KM 54 - Salto Norte, Blumenau, SC", tipo: "loja" },
    
    // Jaraguá do Sul
    { nome: "346 - Paquetá Jaraguá do Sul", lat: -26.4844, lng: -49.0669, endereco: "Av. Getúlio Vargas, 268 - Centro, Jaraguá do Sul, SC", tipo: "loja" },
    
    // Rio Grande do Sul - Porto Alegre
    { nome: "302 - Paquetá Calçados", lat: -30.0346, lng: -51.2177, endereco: "Rua Voluntários da Pátria, 316 - Centro, Porto Alegre, RS", tipo: "loja" },
    { nome: "317 - Paquetá Calçados", lat: -30.0340, lng: -51.2170, endereco: "Av Protásio Alves, 28 - Bom Fim, Porto Alegre, RS", tipo: "loja" },
    { nome: "326 - Paquetá Calçados", lat: -30.0350, lng: -51.2180, endereco: "Av Praia de Belas, 1181 - Praia de Belas, Porto Alegre, RS", tipo: "loja" },
    { nome: "327 - Paquetá Calçados", lat: -30.0355, lng: -51.2185, endereco: "Av Assis Brasil, 3522 - Jardim Lindoia, Porto Alegre, RS", tipo: "loja" },
    { nome: "333 - Paquetá Calçados", lat: -30.0342, lng: -51.2172, endereco: "Av Borges de Medeiros, 321 - Centro, Porto Alegre, RS", tipo: "loja" },
    { nome: "338 - Paquetá Esportes", lat: -30.0348, lng: -51.2175, endereco: "Av Ipiranga, 5200 - Jardim Botanico, Porto Alegre, RS", tipo: "loja" },
    { nome: "343 - Paquetá Esportes", lat: -30.0352, lng: -51.2182, endereco: "Av João Wallig, 1800 - Passo d'Areia, Porto Alegre, RS", tipo: "loja" },
    { nome: "352 - Paquetá Calçados", lat: -30.0358, lng: -51.2188, endereco: "Av Diário de Notícias, 300 - Cristal, Porto Alegre, RS", tipo: "loja" },
    { nome: "353 - Paquetá Esportes", lat: -30.0360, lng: -51.2190, endereco: "Av Diário de Notícias, 300 - Cristal, Porto Alegre, RS", tipo: "loja" },
    { nome: "356 - Gaston", lat: -30.0344, lng: -51.2174, endereco: "Rua dos Andradas - Centro Historico, Porto Alegre, RS", tipo: "loja" },
    { nome: "360 - Paquetá Calçados", lat: -30.0345, lng: -51.2176, endereco: "Rua Andradas, dos 1001 - Centro, Porto Alegre, RS", tipo: "loja" },
    { nome: "364 - Paquetá Calçados", lat: -30.0365, lng: -51.2195, endereco: "Av Sertório, 8000 - Sarandi, Porto Alegre, RS", tipo: "loja" },
    { nome: "365 - Paquetá Bourbon Ipiranga", lat: -30.0347, lng: -51.2173, endereco: "Av. Ipiranga, 5200 - Petrópolis, Porto Alegre, RS", tipo: "loja" },
    { nome: "367 - Paquetá Esportes", lat: -30.0353, lng: -51.2183, endereco: "Av Assis Brasil, 2611 - Cristo Redentor, Porto Alegre, RS", tipo: "loja" },
    
    // Gaston Porto Alegre
    { nome: "404 - Gaston", lat: -30.0343, lng: -51.2171, endereco: "Rua Andradas, dos 1342 - Centro, Porto Alegre, RS", tipo: "loja" },
    { nome: "413 - Gaston", lat: -30.0349, lng: -51.2178, endereco: "Av Otavio Rocha, 143 - Centro, Porto Alegre, RS", tipo: "loja" },
    { nome: "415 - Gaston", lat: -30.0356, lng: -51.2186, endereco: "Av Azenha, 881 - Azenha, Porto Alegre, RS", tipo: "loja" },
    { nome: "419 - Gaston", lat: -30.0351, lng: -51.2181, endereco: "Av João Wallig, 1800 - Passo d'Areia, Porto Alegre, RS", tipo: "loja" },
    { nome: "422 - Gaston", lat: -30.0354, lng: -51.2184, endereco: "Av Assis Brasil, 164 - Passo d'Areia, Porto Alegre, RS", tipo: "loja" },
    { nome: "423 - Gaston", lat: -30.0357, lng: -51.2187, endereco: "Av Assis Brasil, 2312 - Passo d'Areia, Porto Alegre, RS", tipo: "loja" },
    { nome: "426 - Gaston", lat: -30.0362, lng: -51.2192, endereco: "Av Otto Niemeyer, 2783 - Tristeza, Porto Alegre, RS", tipo: "loja" },
    { nome: "427 - Gaston", lat: -30.0359, lng: -51.2189, endereco: "Rua Albion, 111 - Partenon, Porto Alegre, RS", tipo: "loja" },
    { nome: "428 - Gaston", lat: -30.0361, lng: -51.2191, endereco: "Av Plinio Brasil Milano, 2343 - Higianopolis, Porto Alegre, RS", tipo: "loja" },
    { nome: "430 - Gaston", lat: -30.0363, lng: -51.2193, endereco: "Av Cristovao Colombo, 545 - Floresta, Porto Alegre, RS", tipo: "loja" },
    { nome: "439 - Gaston", lat: -30.0366, lng: -51.2196, endereco: "Av Sertorio, 6767 - Sarandi, Porto Alegre, RS", tipo: "loja" },
    { nome: "440 - Gaston", lat: -30.0364, lng: -51.2194, endereco: "Av Diario de Noticias, 300 - Cristal, Porto Alegre, RS", tipo: "loja" },
    { nome: "441 - Gaston", lat: -30.0368, lng: -51.2198, endereco: "Av Assis Brasil, 2611 - Cristo Redentor, Porto Alegre, RS", tipo: "loja" },
    
    // Canoas
    { nome: "306 - Paquetá Calçados", lat: -29.9177, lng: -51.1804, endereco: "Av Farroupilha, 4545 - Marechal Rondon, Canoas, RS", tipo: "loja" },
    { nome: "337 - Paquetá Calçados", lat: -29.9180, lng: -51.1807, endereco: "Av Guilherme Schell, 6750 - Centro, Canoas, RS", tipo: "loja" },
    { nome: "345 - Paquetá Esportes", lat: -29.9175, lng: -51.1801, endereco: "Av Guilherme Schell, 6750 - Centro, Canoas, RS", tipo: "loja" },
    { nome: "348 - Paquetá Calçados", lat: -29.9178, lng: -51.1805, endereco: "Av Farroupilha, 4545 - Marechal Rondon, Canoas, RS", tipo: "loja" },
    { nome: "421 - Gaston", lat: -29.9182, lng: -51.1808, endereco: "Av Guilherme Schell, 6750 - Centro, Canoas, RS", tipo: "loja" },
    { nome: "431 - Gaston", lat: -29.9174, lng: -51.1800, endereco: "Rua Tiradentes, 282 - Centro, Canoas, RS", tipo: "loja" },
    { nome: "447 - Gaston", lat: -29.9176, lng: -51.1802, endereco: "Av Farropilha, 4545 - Marechal Rondon, Canoas, RS", tipo: "loja" },
    
    // Cachoeirinha
    { nome: "318 - Paquetá Calçados", lat: -29.9477, lng: -51.0953, endereco: "Av General Flores da Cunha, 1280 - Centro, Cachoeirinha, RS", tipo: "loja" },
    { nome: "414 - Gaston", lat: -29.9475, lng: -51.0950, endereco: "Av General Flores da Cunha, 1077 - Vila Veranopolis, Cachoeirinha, RS", tipo: "loja" },
    { nome: "432 - Gaston", lat: -29.9480, lng: -51.0955, endereco: "Av General Flores da Cunha, 4001 - Bom Principio, Cachoeirinha, RS", tipo: "loja" },
    
    // Outras cidades RS
    { nome: "319 - Paquetá Calçados", lat: -29.9431, lng: -50.9925, endereco: "Av Dr Jose Loureiro da Silva, 1422 - Centro, Gravataí, RS", tipo: "loja" },
    { nome: "323 - Paquetá Calçados", lat: -29.7602, lng: -51.1471, endereco: "Av Primeiro de Marco, 821 - Centro, São Leopoldo, RS", tipo: "loja" },
    { nome: "339 - Paquetá Calçados", lat: -29.6788, lng: -51.1313, endereco: "Av Nações Unidas, 2001 - Rio Branco, Novo Hamburgo, RS", tipo: "loja" },
    { nome: "347 - Paquetá Esportes", lat: -29.1634, lng: -51.1797, endereco: "Rodovia RST/453 KM 35, 2780 - Distrito Industrial, Caxias do Sul, RS", tipo: "loja" },
    { nome: "355 - Paquetá Esportes", lat: -28.2634, lng: -52.4072, endereco: "R Coronel Chicuta, 222 - Centro, Passo Fundo, RS", tipo: "loja" },
    { nome: "362 - Paquetá Esportes", lat: -29.6842, lng: -53.8069, endereco: "Av Nossa Senhora das Dores, 305 - das Dores, Santa Maria, RS", tipo: "loja" },
    { nome: "378 - Paquetá Calçados", lat: -31.7654, lng: -52.3376, endereco: "Av Ferreira Viana, 1526 - Areal, Pelotas, RS", tipo: "loja" },
    { nome: "382 - Paquetá Calçados", lat: -29.9430, lng: -50.9920, endereco: "Avenida Centenario, 555 - Passo das Pedras, Gravataí, RS", tipo: "loja" },
    { nome: "411 - Gaston", lat: -32.0350, lng: -52.0986, endereco: "Rua Duque de Caxias, 101 - Centro, Rio Grande, RS", tipo: "loja" },
    { nome: "417 - Gaston", lat: -29.9425, lng: -50.9915, endereco: "Av Dr Jose Loureiro da Silva, 1378 - Centro, Gravataí, RS", tipo: "loja" },
    { nome: "424 - Gaston", lat: -29.9895, lng: -51.0840, endereco: "Av Presidente Getulio Vargas, 2030 - Bela Vista, Alvorada, RS", tipo: "loja" },
    { nome: "434 - Gaston", lat: -29.8394, lng: -51.1456, endereco: "Av Sapucaia, 2022 - Primor, Sapucaia do Sul, RS", tipo: "loja" },
    { nome: "436 - Gaston", lat: -30.0811, lng: -51.0233, endereco: "Av Coronel Marcos de Andrade, 18 - Centro, Viamão, RS", tipo: "loja" },
    { nome: "444 - Gaston", lat: -31.7650, lng: -52.3370, endereco: "Av Ferreira Viana, 1526 - Areal, Pelotas, RS", tipo: "loja" },
    { nome: "445 - Gaston", lat: -29.9435, lng: -50.9930, endereco: "Avenida Centenario, 555 - Passo das Pedras, Gravataí, RS", tipo: "loja" },
    { nome: "446 - Gaston", lat: -32.0355, lng: -52.0990, endereco: "Rua Jockey Clube, 135 - Vila São Miguel, Rio Grande, RS", tipo: "loja" },
    { nome: "449 - Gaston", lat: -29.6840, lng: -53.8065, endereco: "BR 287, 2885 - Patronato, Santa Maria, RS", tipo: "loja" },
    { nome: "301 - Paquetá Canoas", lat: -29.8390, lng: -51.1450, endereco: "Sapucaia do Sul, RS", tipo: "loja" },
    { nome: "296 - Novo CD Carioca", lat: -29.8400, lng: -51.1460, endereco: "Sapucaia do Sul, RS", tipo: "cd" },
    
    // Pernambuco - Abys e Democrata
    { nome: "Abys - Oscar Abys Empreendimentos", lat: -8.1124, lng: -35.0155, endereco: "Av. Barreto de Menezes, 800 - Piedade, Jaboatão Guararapes, PE", tipo: "loja" },
    { nome: "Abys - Oscar Abys Empreendimentos", lat: -8.2837, lng: -35.9755, endereco: "Av. Adjar da Silva Case, 800 - Indianópolis, Caruaru, PE", tipo: "loja" },
    { nome: "Abys - Oscar Abys Empreendimentos", lat: -8.2840, lng: -35.9760, endereco: "R Quinze de Novembro, 175 - Nossa Senhora das Dores, Caruaru, PE", tipo: "loja" },
    { nome: "Abys - Oscar Abys Empreendimentos", lat: -8.1120, lng: -35.0150, endereco: "Av Barreto de Menezes, 152 - Prazeres, Jaboatão Guararapes, PE", tipo: "loja" },
    { nome: "Abys - Oscar Abys Empreendimentos", lat: -8.0476, lng: -34.8770, endereco: "Av Governador Agamenon Magalhães, 153 - Santo Amaro, Recife, PE", tipo: "loja" },
    { nome: "Democrata - WP Comércio", lat: -8.1100, lng: -34.8900, endereco: "R Padre Carapuceiro, 777 - Boa Viagem, Recife, PE", tipo: "loja" },
    { nome: "Democrata - RBC Calçados", lat: -8.0480, lng: -34.8775, endereco: "Av Governador Agamenon Magalhães, 153 - Santo Amaro, Recife, PE", tipo: "loja" },
    { nome: "Democrata - AVB Calçados", lat: -8.0485, lng: -34.8780, endereco: "Av Governador Agamenon Magalhães, 153 - Santo Amaro, Recife, PE", tipo: "loja" },
  ];

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Criar o mapa centralizado no Brasil
    const map = L.map(mapRef.current).setView([-14.235, -51.9253], 5);
    mapInstanceRef.current = map;

    // Adicionar tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map);

    // Criar ícone customizado para lojas
    const lojaIcon = L.divIcon({
      html: `<div style="background: #ef4444; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
               <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
               </svg>
             </div>`,
      className: 'custom-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

    // Criar ícone customizado para CDs
    const cdIcon = L.divIcon({
      html: `<div style="background: #3b82f6; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);">
               <svg width="16" height="16" fill="white" viewBox="0 0 24 24">
                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
               </svg>
             </div>`,
      className: 'custom-marker',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });

    // Adicionar marcadores para cada loja
    lojas.forEach(loja => {
      const icon = loja.tipo === 'cd' ? cdIcon : lojaIcon;
      const marker = L.marker([loja.lat, loja.lng], { icon })
        .addTo(map)
        .bindPopup(`
          <div style="text-align: center; padding: 8px;">
            <h3 style="margin: 0 0 8px 0; color: #1f2937; font-size: 16px; font-weight: bold;">
              ${loja.nome}
            </h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              📍 ${loja.endereco}
            </p>
            <p style="margin: 4px 0 0 0; color: #6b7280; font-size: 12px;">
              ${loja.tipo === 'cd' ? '🏭 Centro de Distribuição' : '🏪 Loja'}
            </p>
          </div>
        `);

      // Adicionar evento de hover
      marker.on('mouseover', function() {
        this.openPopup();
      });
    });

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const totalLojas = lojas.filter(l => l.tipo === 'loja').length;
  const totalCDs = lojas.filter(l => l.tipo === 'cd').length;
  const totalEstados = new Set(lojas.map(l => l.endereco.split(', ')[l.endereco.split(', ').length - 1])).size;

  return (
    <div className="animate-fade-in h-full flex flex-col">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <MapPin className="text-blue-600" size={32} />
          <h1 className="text-3xl font-bold">Mapa das Lojas do Grupo Oscar</h1>
        </div>
        <p className="text-gray-500">Localização de todas as lojas e centros de distribuição do Grupo Oscar</p>
      </div>

      <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-full" ref={mapRef} />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <Store className="text-red-500" size={20} />
            <h3 className="font-semibold">Lojas Físicas</h3>
          </div>
          <p className="text-sm text-gray-600">{totalLojas} unidades</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="text-blue-500" size={20} />
            <h3 className="font-semibold">Centros de Distribuição</h3>
          </div>
          <p className="text-sm text-gray-600">{totalCDs} unidades</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="text-green-500" size={20} />
            <h3 className="font-semibold">Cobertura Nacional</h3>
          </div>
          <p className="text-sm text-gray-600">Presença em {totalEstados} estados</p>
        </div>
      </div>
    </div>
  );
};

export default MapaLojas;
