
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
    // São José dos Campos e Região
    { nome: "001 - Cl2", lat: -23.1890, lng: -45.8869, endereco: "Rua 7 de Setembro, nº 344 - Centro, São José dos Campos, SP - 12.210-260", tipo: "loja" },
    { nome: "002 - Jp", lat: -23.1950, lng: -45.8820, endereco: "Av. Pedro Álvares Cabral, nº 905 - Jardim Paulista, São José dos Campos, SP - 12.216-000", tipo: "loja" },
    { nome: "003 - Cl 1", lat: -23.1885, lng: -45.8875, endereco: "Rua 7 de Setembro, nº 142 - Centro, São José dos Campos, SP - 12.210-260", tipo: "loja" },
    { nome: "006 - Sh 2", lat: -23.2050, lng: -45.8950, endereco: "Avenida Deputado Benedito Matarazzo, nº 9403 - Loja 205/206 - Jardim Oswaldo Cruz, São José dos Campos, SP - 12.215-900", tipo: "loja" },
    { nome: "007 - Cn", lat: -23.2100, lng: -45.8700, endereco: "Avenida São João, nº 2200 - Loja NS 101/102/103/104 - Vila Higienópolis, São José dos Campos, SP - 12.242-000", tipo: "loja" },
    { nome: "009 - Js", lat: -23.2300, lng: -45.8600, endereco: "Avenida Andrômeda, nº 1868 - Jardim Satélite, São José dos Campos, SP - 12.230-000", tipo: "loja" },
    { nome: "011 - Arezzo Vale Sul Shopp", lat: -23.2290, lng: -45.8610, endereco: "Avenida Andrômeda, nº 227 - Loja 204 - Jardim Satélite, São José dos Campos, SP - 12.230-000", tipo: "loja" },
    { nome: "012 - Arezzo Center Vale", lat: -23.2045, lng: -45.8945, endereco: "Avenida Dep. Benedito Matarazzo, nº 9403 - Loja S112/113 - Jardim Oswaldo Cruz, São José dos Campos, SP - 12.216-580", tipo: "loja" },
    { nome: "013 - Arezzo Shopp Colinas", lat: -23.2105, lng: -45.8705, endereco: "Avenida São João, nº 2200 - Loja 10/11 - Vila Higienópolis, São José dos Campos, SP - 12.242-000", tipo: "loja" },
    { nome: "015 - Victor Hugo CV", lat: -23.2055, lng: -45.8955, endereco: "Avenida Dep. Benedito Matarazzo, nº 9403 - Loja 509/510 - Jardim Oswaldo Cruz, São José dos Campos, SP - 12.215-900", tipo: "loja" },
    { nome: "017 - Tênis VS", lat: -23.2295, lng: -45.8615, endereco: "Avenida Andrômeda, nº 227 - SUC 102 A - Jardim Satélite, São José dos Campos, SP - 12.230-000", tipo: "loja" },
    { nome: "022 - Tenis Calçadão", lat: -23.1892, lng: -45.8872, endereco: "Rua 7 de Setembro, nº 156 - Centro, São José dos Campos, SP - 12.210-060", tipo: "loja" },
    { nome: "024 - Stock Show SJC", lat: -23.1900, lng: -45.8850, endereco: "Rua Sebastião Humel, nº 301 - Centro, São José dos Campos, SP - 12.210-200", tipo: "loja" },
    { nome: "026 - Vale Sul 2", lat: -23.2285, lng: -45.8605, endereco: "Avenida Andrômeda, nº 227 - SUC 170 - Jardim Satélite, São José dos Campos, SP - 12.230-000", tipo: "loja" },
    { nome: "030 - E-commerce", lat: -23.2350, lng: -45.8500, endereco: "Rua Serra do Parimã, nº 123 - Jardim Anhembi, São José dos Campos, SP - 12.235-210", tipo: "loja" },
    { nome: "046 - Constantino SJC", lat: -23.2040, lng: -45.8940, endereco: "Avenida Deputado Benedito Matarazzo - Jardim Oswaldo Cruz, São José dos Campos, SP - 12216580", tipo: "loja" },
    { nome: "050 - Victor Hugo CN", lat: -23.2110, lng: -45.8710, endereco: "Avenida São João, nº 2.200 - Loja NS 73/74/75 - Jardim Das Colinas, São José dos Campos, SP - 12.242-000", tipo: "loja" },
    { nome: "067 - Oriente Shopp", lat: -23.2355, lng: -45.8505, endereco: "R Andorra n° 500 Loja 304 A 307 - Jd América, São José dos Campos, SP - 12.235-050", tipo: "loja" },
    { nome: "070 - Anacapri CenterVale", lat: -23.2042, lng: -45.8942, endereco: "Av. Deputado Benedito Matarazzo, nº 9403 - Loja M 305 - Jardim Oswaldo Cruz, São José dos Campos, SP - 12.216-580", tipo: "loja" },
    { nome: "071 - Anacapri ValeSul", lat: -23.2292, lng: -45.8612, endereco: "Avenida Andrômeda, nº 227 - SUC 202A - Jardim Satélite, São José dos Campos, SP - 12.230-000", tipo: "loja" },
    { nome: "073 - Anacapri Oriente Shopp", lat: -23.2352, lng: -45.8502, endereco: "R: Andorra, 500 Loja 214 - Jd América, São José dos Campos, SP - 12.235-050", tipo: "loja" },
    { nome: "076 - Outlet Oscar Motorama", lat: -23.2250, lng: -45.8450, endereco: "R DOS LIRIOS 459 - ANEXO 461 LOJA 2 - JARDIM MOTORAMA, São José dos Campos, SP - 12.224-010", tipo: "loja" },
    { nome: "124 - Oscar Calçados Ltda", lat: -23.1888, lng: -45.8868, endereco: "Rua 7 de Setembro, nº 115 - Centro, São José dos Campos, SP - 12.210-260", tipo: "loja" },
    { nome: "125 - Oscar Calçados Ltda", lat: -23.1893, lng: -45.8873, endereco: "Rua 7 de Setembro, nº 358 - Centro, São José dos Campos, SP - 12.210-260", tipo: "loja" },
    { nome: "129 - Jô Js Ltda", lat: -23.2288, lng: -45.8608, endereco: "Avenida Andromeda, 1846 - Jardim Satelite, Sao Jose dos Campos, SP - 12230001", tipo: "loja" },
    { nome: "010 - Cd Oscar", lat: -23.2150, lng: -45.8800, endereco: "Rua Paraibuna, 1692 - Vila Nair, São José dos Campos, SP - 12231010", tipo: "cd" },
    
    // Jacareí
    { nome: "004 - Jc 2", lat: -23.3055, lng: -45.9696, endereco: "Rua Sargento Acrísio Santana, nº 141 e 149 - Centro, Jacareí, SP - 12.300-000", tipo: "loja" },
    { nome: "005 - Jc 1", lat: -23.3050, lng: -45.9700, endereco: "Praça Raul Chaves, nº 79 - Centro, Jacareí, SP - 12.308-011", tipo: "loja" },
    { nome: "018 - Arezzo Jacarei Shopp", lat: -23.3060, lng: -45.9692, endereco: "Rua Barão de Jacareí, nº 364 - Loja 23 - Centro, Jacareí, SP - 12.308-001", tipo: "loja" },
    { nome: "019 - Jc Sh", lat: -23.3058, lng: -45.9694, endereco: "Rua Barão de Jacareí, nº 364 - Loja 020/021 A - Centro, Jacareí, SP - 12.308-001", tipo: "loja" },
    { nome: "127 - Oscar Calçados Ltda", lat: -23.3052, lng: -45.9698, endereco: "Rua Alfredo Schurig, nº 148 - Centro, Jacareí, SP - 12.327-005", tipo: "loja" },
    
    // Guaratinguetá
    { nome: "016 - Guara Ct", lat: -22.8163, lng: -45.1931, endereco: "Rua Comendador João Galvão, nº 36 - Centro, Guaratinguetá, SP - 12.500-150", tipo: "loja" },
    { nome: "023 - Guará Shopp", lat: -22.8100, lng: -45.1950, endereco: "Avenida Juscelino Kubitschek de Oliveira, nº 351 - Loja 10, 11 e 12 - Campo do Galvão, Guaratinguetá, SP - 12.505-300", tipo: "loja" },
    { nome: "126 - Oscar Calçados Ltda", lat: -22.8160, lng: -45.1935, endereco: "Rua Com. Rodrigues Alves, nº 107 - Centro, Guaratinguetá, SP - 12.500-000", tipo: "loja" },
    
    // Taubaté
    { nome: "020 - Taub Shopp", lat: -23.0326, lng: -45.5527, endereco: "Avenida Charles Schnneider, nº 1700 - Loja 06/10 - Parque Senhor do Bom Fim, Taubaté, SP - 12.040-900", tipo: "loja" },
    { nome: "028 - Taub Ct", lat: -23.0320, lng: -45.5530, endereco: "Dr Pedro Costa nº 06 - Centro, Taubaté, SP - 12010-160", tipo: "loja" },
    { nome: "122 - Oscar Calçados Ltda", lat: -23.0322, lng: -45.5525, endereco: "Av. Charles Schneider, nº 1700 - Loja 142/145 - Vila Costa, Taubaté, SP - 12.040-900", tipo: "loja" },
    { nome: "128 - Oscar Calçados Ltda", lat: -23.0330, lng: -45.5535, endereco: "Rua Carneiro de Souza, nº 147 - Centro, Taubaté, SP - 12.010-070", tipo: "loja" },
    
    // Pindamonhangaba
    { nome: "047 - Pinda Shopp", lat: -22.9246, lng: -45.4619, endereco: "Rua Alcides Ramos Nogueira, nº 650 - Loja 067, 069, 071, S08 e S09 - Mombaça, Pindamonhangaba, SP - 12.421-705", tipo: "loja" },
    { nome: "048 - Pinda Ct", lat: -22.9240, lng: -45.4615, endereco: "Praça Monsenhor Marcondes, nº 50 - Centro, Pindamonhangaba, SP - 12.400-470", tipo: "loja" },
    
    // Lorena
    { nome: "049 - Lorena", lat: -22.7308, lng: -45.1252, endereco: "Rua Rodrigues de Azevedo, nº 240 - Centro, Lorena, SP - 12.600-000", tipo: "loja" },
    
    // Cruzeiro
    { nome: "075 - Cruzeiro", lat: -22.5759, lng: -44.9637, endereco: "R Doutor Othon Barcelos, 05 Loja 09/10/11/12/13 - Itagaçaba, Cruzeiro, SP - 12.730-010", tipo: "loja" },
    
    // Caraguatatuba
    { nome: "044 - Caragua Shopp", lat: -23.6203, lng: -45.4134, endereco: "Avenida José Herculano, nº 1086 - Loja C 03/04 - Santa Marina, Caraguatatuba, SP - 11.666-000", tipo: "loja" },
    
    // Caçapava
    { nome: "121 - BVB Calçados Eireli", lat: -23.1057, lng: -45.7113, endereco: "Rua Sete de Setembro, nº 185 - Centro, Caçapava, SP - 12.281-620", tipo: "loja" },
    
    // Resende - RJ
    { nome: "123 - Oscar Calçados Ltda", lat: -22.4681, lng: -44.4462, endereco: "Av: Albino de Almeida,185 - Campos Eliseos, Resende, RJ - 27.542-080", tipo: "loja" },
    
    // Mogi das Cruzes e Região
    { nome: "031 - Constantino Mogi", lat: -23.5229, lng: -46.1881, endereco: "Avenida Ver. Narciso Yague Guimarães, nº 1001 - Loja 234/235 - Jardim Armênia, Mogi das Cruzes, SP - 08.780-910", tipo: "loja" },
    { nome: "032 - Mogi Shopp", lat: -23.5225, lng: -46.1885, endereco: "Av. Ver. Narciso Yague Guimarães, nº 1001 - Lojas 128, 129, 130, 131 e 133 - Jardim Armênia, Mogi das Cruzes, SP - 08.780-910", tipo: "loja" },
    { nome: "033 - Mogi Centro", lat: -23.5200, lng: -46.1850, endereco: "Rua Doutor Paulo Frontin, 161 - Centro, Mogi das Cruzes, SP - 08710050", tipo: "loja" },
    { nome: "034 - Stock Show BC", lat: -23.5300, lng: -46.1900, endereco: "Rua Francisco Afonso de Melo, nº 135 - Vila Brás Cubas, Mogi das Cruzes, SP - 08.740-310", tipo: "loja" },
    { nome: "037 - Scarlen Mogi Centro", lat: -23.5180, lng: -46.1830, endereco: "Rua Brás Cubas, nº 163, 167 e 171 - Centro, Mogi das Cruzes, SP - 08.710-410", tipo: "loja" },
    { nome: "038 - Scarlen Mogi Shopp", lat: -23.5227, lng: -46.1883, endereco: "Avenida Ver. Narciso Yague Guimarães, nº 1001- Loja 230 - Jardim Armênia, Mogi das Cruzes, SP - 08.780-910", tipo: "loja" },
    { nome: "039 - CL Mg", lat: -23.5190, lng: -46.1840, endereco: "Rua Dr. Deodato Wertheimer, nº 1395 - Centro, Mogi das Cruzes, SP - 08.710-430", tipo: "loja" },
    { nome: "040 - Arezzo Shopp Mogi", lat: -23.5223, lng: -46.1887, endereco: "Avenida Ver Narciso Yague Guimarães, nº 1001 - Loja 201 - Jardim Armênia, Mogi das Cruzes, SP - 08.780-910", tipo: "loja" },
    { nome: "055 - Usaflex Mogi Shopp", lat: -23.5221, lng: -46.1889, endereco: "Avenida Vereador Narciso Yague Guimarães - 1001 - Loja 313 - Jardim Armênia, Mogi das Cruzes, SP - 08.780-910", tipo: "loja" },
    { nome: "090 - Cd- Ponta Sz", lat: -23.5250, lng: -46.1900, endereco: "Rua Professor Flaviano de Melo,01 - Centro, Mogi das Cruzes, SP - 08710000", tipo: "cd" },
    
    // Suzano
    { nome: "035 - Stock Show Sz", lat: -23.5426, lng: -46.3107, endereco: "Rua Eliziel Alves Costa, nº 34 - Centro, Suzano, SP - 08.674-185", tipo: "loja" },
    { nome: "036 - Scarlen Shopp Suzan", lat: -23.5430, lng: -46.3110, endereco: "Rua 7 de Setembro, nº 555, - Loja 72, 123, 124 e 139 - Jardim Irai/Jardim Nena, Suzano, SP - 08.673-020", tipo: "loja" },
    { nome: "043 - Suzano Shopp", lat: -23.5420, lng: -46.3100, endereco: "Rua Sete de setembro, nº 555 - Loja 115/116 - Cidade Cruzeiro do Sul, Suzano, SP - 08.674-000", tipo: "loja" },
    { nome: "057 - Usaflex Suzano Shopp", lat: -23.5432, lng: -46.3112, endereco: "Rua Sete de Setembro, 555 - Loja 139 - Parque Suzano, Suzano, SP - 08.673-020", tipo: "loja" },
    { nome: "060 - Anacapri Suzano Shopp", lat: -23.5428, lng: -46.3108, endereco: "Rua Sete de Setembro, nº 555 - Loja 81 - Parque Suzano, Suzano, SP - 08.673-020", tipo: "loja" },
    
    // Poá
    { nome: "042 - Stock Show Poá", lat: -23.5318, lng: -46.3450, endereco: "Rua Silverio Pereira Jordão, nº 37 - Centro, Poá, SP - 08.550-030", tipo: "loja" },
    
    // Interior SP - Bauru
    { nome: "053 - Bauru Shopp", lat: -22.3149, lng: -49.0581, endereco: "RUA HENRIQUE SAVI 15-55 - VILA CIDADE UNIVERSITARIA, BAURU, SP - 17.011-900", tipo: "loja" },
    { nome: "052 - Outlet Bauru", lat: -22.3100, lng: -49.0600, endereco: "Vila Cardia, Bauru, SP - 17011066", tipo: "loja" },
    { nome: "068 - Bauru Ct", lat: -22.3140, lng: -49.0575, endereco: "Rua Batista de Carvalho, nº 526 - Centro, Bauru, SP - 17010-001", tipo: "loja" },
    { nome: "117 - Jô Calçados Ltda", lat: -22.3145, lng: -49.0578, endereco: "Rua Batista de Carvalho, nº 461 - Centro, Bauru, SP - 17.010-001", tipo: "loja" },
    
    // Ribeirão Preto
    { nome: "054 - Ribeirão Centro", lat: -21.1699, lng: -47.8099, endereco: "Rua Alvares Cabral, nº 470 - Centro, Ribeirão Preto, SP - 14.010-080", tipo: "loja" },
    { nome: "058 - Ribeirão Shopp", lat: -21.1650, lng: -47.8150, endereco: "Av Coronel Fernando Ferreira Leite, 1540 - Lojas 92/93 - Jardim California, Ribeirão Preto, SP - 14.026-900", tipo: "loja" },
    
    // São José do Rio Preto
    { nome: "008 - Rio Preto Shopp", lat: -20.8194, lng: -49.3794, endereco: "Av. Brigadeiro Faria Lima, nº 6363 - Loja 218, 219, 220, 221, 222, 237 - Jardim Morumbi, São José do Rio Preto, SP - 15.090-900", tipo: "loja" },
    { nome: "041 - Rio Preto Ct", lat: -20.8190, lng: -49.3790, endereco: "Rua General Glicério, nº 2826 - Centro, São José do Rio Preto, SP - 15.015-400", tipo: "loja" },
    { nome: "106 - Jô Calçados Ltda", lat: -20.8185, lng: -49.3785, endereco: "Rua General Glicério, nº 2928 - Centro, São José do Rio Preto, SP - 15.015-400", tipo: "loja" },
    
    // Guarulhos
    { nome: "056 - Usaflex Guarulhos Shopp", lat: -23.4538, lng: -46.5333, endereco: "Rua Engenheiro Camilo Olivetti, nº 295 - Loja 125 - Vila Endres, Guarulhos, SP - 07.042-040", tipo: "loja" },
    
    // São Paulo
    { nome: "059 - Usaflex Tatuapé Shopp", lat: -23.5505, lng: -46.6333, endereco: "Rua Domingos Agostim, nº 91 loja 266 - Cidade mãe do céu, São Paulo, SP - 03.306-010", tipo: "loja" },
    
    // Outras cidades SP
    { nome: "061 - Jundiaí", lat: -23.1864, lng: -46.8840, endereco: "Rua Barão de Jundiaí, 636 - Centro, Jundiaí, SP - 13.201-011", tipo: "loja" },
    { nome: "062 - Piracicaba", lat: -22.7253, lng: -47.6486, endereco: "Rua Governador Pedro de Toledo, nº 1.211 - Centro, Piracicaba, SP - 13.400-070", tipo: "loja" },
    { nome: "069 - Piracicaba", lat: -22.7250, lng: -47.6480, endereco: "Rua Governador Pedro de Toledo, nº 1.118 - Centro, Piracicaba, SP - 13.400-060", tipo: "loja" },
    { nome: "074 - Piracicaba Shopping", lat: -22.7255, lng: -47.6490, endereco: "Av: Limeira,722 Sala C57/59/62/63 P-58 EDIF SHOPPING CENTER PIRA - Areão, Piracicaba, SP - 13.414-900", tipo: "loja" },
    { nome: "063 - Sorocaba", lat: -23.5015, lng: -47.4526, endereco: "Rua Doutor Braguinha, nº 262/264 - Centro, Sorocaba, SP - 18.010-120", tipo: "loja" },
    { nome: "064 - Araraquara", lat: -21.7948, lng: -48.1757, endereco: "Rua Nove de Julho, nº 793 - Centro, Araraquara, SP - 14.801-295", tipo: "loja" },
    { nome: "109 - Jô Calçados Ltda", lat: -21.7945, lng: -48.1760, endereco: "Rua Nove de Julho, nº 991 - Centro, Araraquara, SP - 14.801-295", tipo: "loja" },
    { nome: "065 - Mogi Mirim", lat: -22.4326, lng: -46.9576, endereco: "R Quinze de Novembro nº 102 - Centro, Mogi Mirim, SP - 13.800-185", tipo: "loja" },
    { nome: "066 - Mogi Guaçu", lat: -22.3689, lng: -46.9433, endereco: "R Apolinário n° 79 - Centro, Mogi Guaçu, SP - 13.840-035", tipo: "loja" },
    { nome: "101 - Jô Calçados Ltda", lat: -22.8854, lng: -48.4457, endereco: "Praça Comendador Emilio Pedutti, nº 35 - Centro, Botucatu, SP - 18.600-410", tipo: "loja" },
    { nome: "103 - Jô Calçados Ltda", lat: -22.2198, lng: -49.9353, endereco: "Rua São Luiz, nº 637 - Centro, Marília, SP - 17.500-001", tipo: "loja" },
    { nome: "108 - Jô Calçados Ltda", lat: -20.4237, lng: -49.9858, endereco: "Rua Amazonas, nº 3281 - Patrimônio Novo, Votuporanga, SP - 15.500-004", tipo: "loja" },
    { nome: "111 - Jô Calçados Ltda", lat: -20.5387, lng: -47.4006, endereco: "Rua Major Claudiano, nº 1950 - Centro, Franca, SP - 14.400-690", tipo: "loja" },
    { nome: "114 - Jô Calçados Ltda", lat: -22.5647, lng: -47.4017, endereco: "Rua Senador Vergueiro, nº 396 - Centro, Limeira, SP - 13.480-000", tipo: "loja" },
    { nome: "115 - Jô Calçados Ltda", lat: -22.9789, lng: -49.8708, endereco: "Rua Antônio Carlos Mori, nº 273 - Centro, Ourinhos, SP - 19.900-080", tipo: "loja" },
    { nome: "116 - Jô Calçados Ltda", lat: -22.0175, lng: -47.8908, endereco: "General Ozório, 848 - Centro, São Carlos, SP - 13.560-640", tipo: "loja" },
    { nome: "118 - Jô Calçados Ltda", lat: -21.1378, lng: -48.9721, endereco: "Praça Monsenhor Albino, nº 80 - Centro, Catanduva, SP - 15.800-215", tipo: "loja" },
    { nome: "119 - Jô Calçados Ltda", lat: -20.5569, lng: -48.5675, endereco: "Av. Dezenove, nº 875 - Centro, Barretos, SP - 14.780-300", tipo: "loja" },
    { nome: "120 - Jô Calçados Ltda", lat: -22.1257, lng: -51.3893, endereco: "Rua Siqueira Campos, nº 615 - Centro, Presidente Prudente, SP - 19.010-061", tipo: "loja" },
    { nome: "045 - Araçatuba", lat: -21.2089, lng: -50.4328, endereco: "Rua Marechal Deodoro Fonseca, nº 139 - Centro, Araçatuba, SP - 16.010-300", tipo: "loja" },
    { nome: "072 - Novo Shopp Ribeirão", lat: -21.2085, lng: -50.4325, endereco: "R: Marechal Deodoro Fonseca, 217 - Centro, Araçatuba, SP - 16.010-300", tipo: "loja" },
    { nome: "104 - Jô Calçados Ltda", lat: -21.2090, lng: -50.4330, endereco: "Rua Marechal Deodoro Fonseca, nº 217 - Centro, Araçatuba, SP - 16.010-300", tipo: "loja" },
    
    // Minas Gerais
    { nome: "102 - Jô Calçados Ltda", lat: -18.9661, lng: -49.4646, endereco: "Rua Vinte e Dois, nº 616 - Centro, Ituiutaba, MG - 38.300-076", tipo: "loja" },
    { nome: "105 - Jô Calçados Ltda", lat: -19.7482, lng: -47.9319, endereco: "Rua Artur Machado, nº 112 - Centro, Uberaba, MG - 38.010-020", tipo: "loja" },
    { nome: "113 - Jô Calçados Ltda", lat: -18.9113, lng: -48.2622, endereco: "Av. Floriano Peixoto, nº 396 - Centro, Uberlândia, MG - 38.400-100", tipo: "loja" },
    
    // Santa Catarina - Florianópolis
    { nome: "201 - Carioca Calçados", lat: -27.5954, lng: -48.5480, endereco: "Rua Cel. Pedro Demoro, 2045 - Estreito, Florianópolis, SC - 88.075-301", tipo: "loja" },
    { nome: "204 - Carioca Calçados", lat: -27.5950, lng: -48.5485, endereco: "Rua Cel. Pedro Demoro, 2086 - Estreito, Florianópolis, SC - 88.075-300", tipo: "loja" },
    { nome: "205 - Carioca Calçados", lat: -27.5800, lng: -48.5200, endereco: "Rod Armando Calil Bulos, 6777 Loja 09 - Ingleses, Florianópolis, SC - 88.058-001", tipo: "loja" },
    { nome: "207 - Tiradentes Ct Carioca", lat: -27.5960, lng: -48.5490, endereco: "Rua Tiradentes, 103 - Centro, Florianópolis, SC - 88010430", tipo: "loja" },
    { nome: "209 - Carioca Calçados", lat: -27.5958, lng: -48.5488, endereco: "Rua Felipe Schmidt, 300 a 304 - Centro, Florianópolis, SC - 88.010-000", tipo: "loja" },
    { nome: "215 - Carioca Calçados", lat: -27.5955, lng: -48.5482, endereco: "Rua Felipe Schmidt, 395 - Centro, Florianópolis, SC - 88.010-000", tipo: "loja" },
    { nome: "216 - Carioca Calçados", lat: -27.5952, lng: -48.5478, endereco: "Rua Deodoro, 210 - Centro, Florianópolis, SC - 88.010-020", tipo: "loja" },
    { nome: "218 - Carioca Calçados", lat: -27.5900, lng: -48.5400, endereco: "Avenida Madre Benvenuta, 687 / Loja 319 - Shopping Vila Romana - Santa Mônica, Florianópolis, SC - 88.035-000", tipo: "loja" },
    { nome: "219 - Carioca Calçados", lat: -27.5956, lng: -48.5484, endereco: "Rua Felipe Schmidt, 107 - Centro, Florianópolis, SC - 88.010-000", tipo: "loja" },
    { nome: "221 - Carioca Calçados", lat: -27.5951, lng: -48.5477, endereco: "Rua Deodoro, 170 - Centro, Florianópolis, SC - 88.010-020", tipo: "loja" },
    { nome: "224 - Carioca Calçados", lat: -27.5957, lng: -48.5486, endereco: "Rua Sete de Setembro, 113 - Centro, Florianópolis, SC - 88.010-060", tipo: "loja" },
    { nome: "349 - Paquetá Esportes", lat: -27.5905, lng: -48.5405, endereco: "AV MADRE BENVENUTA 687 - SANTA MONICA, FLORIANÓPOLIS, SC - 88035000", tipo: "loja" },
    
    // Joinville
    { nome: "112 - Jô Calçados Ltda", lat: -26.3044, lng: -48.8458, endereco: "Av. Juscelino Kubitschek, nº 517 - Centro, Joinville, SC - 89.201-100", tipo: "loja" },
    { nome: "202 - Carioca Calçados", lat: -26.3040, lng: -48.8455, endereco: "Rua Quinze de Novembro, 515 - Salas 6,7 e 8 - Centro, Joinville, SC - 89.201-601", tipo: "loja" },
    { nome: "329 - Paquetá Joinville", lat: -26.3045, lng: -48.8460, endereco: "Avenida Farroupilha, 4545 - Marechal Rondon, Canoas, RS - 92020475", tipo: "loja" },
    { nome: "359 - Paquetá Calçados", lat: -26.3042, lng: -48.8456, endereco: "AV ROLF WIEST 333 - BOM RETIRO, JOINVILLE, SC - 89223005", tipo: "loja" },
    
    // São José - SC
    { nome: "203 - Carioca Calçados", lat: -27.5969, lng: -48.6394, endereco: "Av: Aniceto Zacchi,1038 Loja 1 - Ponte de Imaruim, Palhoça, SC - 88.130-300", tipo: "loja" },
    { nome: "211 - Carioca Calçados", lat: -27.5965, lng: -48.6390, endereco: "Gerôncio Thives, 1079 / Lojas 04 a 07 - Barreiros, São José, SC - 88.117-292", tipo: "loja" },
    { nome: "212 - Carioca Calçados", lat: -27.5970, lng: -48.6395, endereco: "Avenida Lédio João Martins, 864 - Kobrasol, São José, SC - 88.101-101", tipo: "loja" },
    { nome: "217 - Carioca Calçados", lat: -27.5967, lng: -48.6392, endereco: "Rua Geroncio Thives, 1079 SUC 47/48 - Shopping Itaguaçu - Barreiros, São José, SC - 88.117-900", tipo: "loja" },
    { nome: "223 - Carioca Calçados", lat: -27.5963, lng: -48.6388, endereco: "Rua Gerôncio Thives, 1079 / Loja 052 - Shopping Itaguaçu - Barreiros, São José, SC - 88.117-292", tipo: "loja" },
    { nome: "226 - Carioca Calçados", lat: -27.5975, lng: -48.6400, endereco: "Rodovia BR 101 KM 211, Sala 142 Shopping Continente - Distrito Industrial, São José, SC - 88.104-800", tipo: "loja" },
    { nome: "228 - Carioca Calçados", lat: -27.5972, lng: -48.6397, endereco: "R. Ver. Arthur Manoel Mariano, 1170 - Forquilhinhas, São José, SC - 88106-501", tipo: "loja" },
    { nome: "297 - CD Carioca", lat: -27.5980, lng: -48.6405, endereco: "Rua das Orquídeas, 350 - Bela Vista, Bela Vista, SC - 88110800", tipo: "cd" },
    
    // Balneário Camboriú
    { nome: "208 - Carioca Calçados", lat: -26.9906, lng: -48.6336, endereco: "Avenida Central, 91 - Centro, Balneário Camboriú, SC - 88.330-666", tipo: "loja" },
    { nome: "391 - Paquetá Calçados", lat: -26.9900, lng: -48.6330, endereco: "AV SANTA CATARINA 1 - DOS ESTADOS, BALNEÁRIO CAMBORIU, SC - 88330000", tipo: "loja" },
    
    // Itajaí
    { nome: "214 - Carioca Calçados", lat: -26.9077, lng: -48.6618, endereco: "Rua Hercílio Luz, 680 - Centro, Itajaí, SC - 88.301-000", tipo: "loja" },
    
    // Palhoça
    { nome: "225 - Carioca Calçados", lat: -27.6405, lng: -48.6704, endereco: "Rua Bernardino Machado, 69 - Centro, Palhoça, SC - 88.130-220", tipo: "loja" },
    
    // Biguaçu
    { nome: "227 - Carioca Calçados", lat: -27.4948, lng: -48.6587, endereco: "Rua Coronel Teixeira Oliveira, 25 - Centro, Biguaçu, SC - 88.160-130", tipo: "loja" },
    
    // Blumenau
    { nome: "351 - Paquetá Blumenau", lat: -26.9194, lng: -49.0661, endereco: "Rua Sete de Setembro, 1213 - Centro, Blumenau, SC - 89010203", tipo: "loja" },
    { nome: "363 - Paquetá Calçados", lat: -26.9190, lng: -49.0665, endereco: "RODOVIA BR 470 KM 54 S/N - SALTO NORTE, BLUMENAU, SC - 89070200", tipo: "loja" },
    
    // Jaraguá do Sul
    { nome: "346 - Paquetá Jaraguá do Sul", lat: -26.4844, lng: -49.0669, endereco: "Avenida Getúlio Vargas, 268 - Centro, Jaraguá do Sul, SC - 89251000", tipo: "loja" },
    
    // Rio Grande do Sul - Porto Alegre
    { nome: "302 - Paquetá Calçados", lat: -30.0346, lng: -51.2177, endereco: "RUA VOLUNTARIOS DA PATRIA 316 - CENTRO, PORTO ALEGRE, RS - 90030001", tipo: "loja" },
    { nome: "317 - Paquetá Calçados", lat: -30.0340, lng: -51.2170, endereco: "AV PROTASIO ALVES 28 - BOM FIM, PORTO ALEGRE, RS - 90410004", tipo: "loja" },
    { nome: "326 - Paquetá Calçados", lat: -30.0350, lng: -51.2180, endereco: "AV PRAIA DE BELAS 1181 - PRAIA DE BELAS, PORTO ALEGRE, RS - 90110970", tipo: "loja" },
    { nome: "327 - Paquetá Calçados", lat: -30.0355, lng: -51.2185, endereco: "AV ASSIS BRASIL 3522 - JARDIM LINDOIA, PORTO ALEGRE, RS - 91010003", tipo: "loja" },
    { nome: "333 - Paquetá Calçados", lat: -30.0342, lng: -51.2172, endereco: "AV BORGES DE MEDEIROS 321 - CENTRO, PORTO ALEGRE, RS - 90020021", tipo: "loja" },
    { nome: "338 - Paquetá Esportes", lat: -30.0348, lng: -51.2175, endereco: "AV IPIRANGA 5200 5200 - JARDIM BOTANICO, PORTO ALEGRE, RS - 90610000", tipo: "loja" },
    { nome: "343 - Paquetá Esportes", lat: -30.0352, lng: -51.2182, endereco: "AV JOAO WALLIG 1800 - PASSO D'AREIA, PORTO ALEGRE, RS - 91349900", tipo: "loja" },
    { nome: "352 - Paquetá Calçados", lat: -30.0358, lng: -51.2188, endereco: "AV DIARIO DE NOTICIAS 300 - CRISTAL, PORTO ALEGRE, RS - 90810080", tipo: "loja" },
    { nome: "353 - Paquetá Esportes", lat: -30.0360, lng: -51.2190, endereco: "AV DIARIO DE NOTICIAS 300 - CRISTAL, PORTO ALEGRE, RS - 90810080", tipo: "loja" },
    { nome: "356 - Gaston", lat: -30.0344, lng: -51.2174, endereco: "RUA DOS ANDRADAS - CENTRO HISTORICO, PORTO ALEGRE, RS - 90020-008", tipo: "loja" },
    { nome: "360 - Paquetá Calçados", lat: -30.0345, lng: -51.2176, endereco: "RUA ANDRADAS, DOS 1001 - CENTRO, PORTO ALEGRE, RS - 90020015", tipo: "loja" },
    { nome: "364 - Paquetá Calçados", lat: -30.0365, lng: -51.2195, endereco: "AVSERTORIO 8000 - SARANDI, PORTO ALEGRE, RS - 91130720", tipo: "loja" },
    { nome: "365 - Paquetá Bourbon Ipiranga", lat: -30.0347, lng: -51.2173, endereco: "Avenida Ipiranga, 5200 - Petrópolis, Porto Alegre, RS - 90610000", tipo: "loja" },
    { nome: "367 - Paquetá Esportes", lat: -30.0353, lng: -51.2183, endereco: "AV ASSIS BRASIL 2611 - CRISTO REDENTOR, PORTO ALEGRE, RS - 91010002", tipo: "loja" },
    
    // Gaston Porto Alegre
    { nome: "404 - Gaston", lat: -30.0343, lng: -51.2171, endereco: "RUA ANDRADAS, DOS 1342 - CENTRO, PORTO ALEGRE, RS - 90020008", tipo: "loja" },
    { nome: "413 - Gaston", lat: -30.0349, lng: -51.2178, endereco: "AV OTAVIO ROCHA 143 - CENTRO, PORTO ALEGRE, RS - 90020151", tipo: "loja" },
    { nome: "415 - Gaston", lat: -30.0356, lng: -51.2186, endereco: "AV AZENHA 881 - AZENHA, PORTO ALEGRE, RS - 90160002", tipo: "loja" },
    { nome: "419 - Gaston", lat: -30.0351, lng: -51.2181, endereco: "AV JOAO WALLIG 1800 - PASSO D'AREIA, PORTO ALEGRE, RS - 91349900", tipo: "loja" },
    { nome: "422 - Gaston", lat: -30.0354, lng: -51.2184, endereco: "AV ASSIS BRASIL 164 - PASSO D'AREIA, PORTO ALEGRE, RS - 91010000", tipo: "loja" },
    { nome: "423 - Gaston", lat: -30.0357, lng: -51.2187, endereco: "AV ASSIS BRASIL 2312 - PASSO D'AREIA, PORTO ALEGRE, RS - 91010002", tipo: "loja" },
    { nome: "426 - Gaston", lat: -30.0362, lng: -51.2192, endereco: "AV OTTO NIEMEYER 2783 - TRISTEZA, PORTO ALEGRE, RS - 91910001", tipo: "loja" },
    { nome: "427 - Gaston", lat: -30.0359, lng: -51.2189, endereco: "RUA ALBION 111 - PARTENON, PORTO ALEGRE, RS - 91530010", tipo: "loja" },
    { nome: "428 - Gaston", lat: -30.0361, lng: -51.2191, endereco: "AV PLINIO BRASIL MILANO 2343 - HIGIANOPOLIS, PORTO ALEGRE, RS - 90520003", tipo: "loja" },
    { nome: "430 - Gaston", lat: -30.0363, lng: -51.2193, endereco: "AV CRISTOVAO COLOMBO 545 - FLORESTA, PORTO ALEGRE, RS - 90560003", tipo: "loja" },
    { nome: "439 - Gaston", lat: -30.0366, lng: -51.2196, endereco: "AV SERTORIO 6767 - SARANDI, PORTO ALEGRE, RS - 91110580", tipo: "loja" },
    { nome: "440 - Gaston", lat: -30.0364, lng: -51.2194, endereco: "AV DIARIO DE NOTICIAS 300 - CRISTAL, PORTO ALEGRE, RS - 90810080", tipo: "loja" },
    { nome: "441 - Gaston", lat: -30.0368, lng: -51.2198, endereco: "AV ASSIS BRASIL 2611 - CRISTO REDENTOR, PORTO ALEGRE, RS - 91010002", tipo: "loja" },
    
    // Canoas
    { nome: "306 - Paquetá Calçados", lat: -29.9177, lng: -51.1804, endereco: "AV FARROUPILHA, 4545 - MARECHAL RONDON, CANOAS, RS - 92020475", tipo: "loja" },
    { nome: "337 - Paquetá Calçados", lat: -29.9180, lng: -51.1807, endereco: "AV GUILHERME SCHELL 6750 - CENTRO, CANOAS, RS - 92310001", tipo: "loja" },
    { nome: "345 - Paquetá Esportes", lat: -29.9175, lng: -51.1801, endereco: "AV GUILHERME SCHELL 6750 - CENTRO, CANOAS, RS - 92310001", tipo: "loja" },
    { nome: "348 - Paquetá Calçados", lat: -29.9178, lng: -51.1805, endereco: "AV Farroupilha nº4545 Loja LUC 3050/3051 - MARECHAL RONDON, CANOAS, RS - 92.020-475", tipo: "loja" },
    { nome: "421 - Gaston", lat: -29.9182, lng: -51.1808, endereco: "AV GUILHERME SCHELL 6750 - CENTRO, CANOAS, RS - 92310001", tipo: "loja" },
    { nome: "431 - Gaston", lat: -29.9174, lng: -51.1800, endereco: "RUA TIRADENTES 282 - CENTRO, CANOAS, RS - 92010260", tipo: "loja" },
    { nome: "447 - Gaston", lat: -29.9176, lng: -51.1802, endereco: "AV FARROPILHA N° 4545 - MARECHAL RONDON, CANOAS, RS - 92020-475", tipo: "loja" },
    
    // Cachoeirinha
    { nome: "318 - Paquetá Calçados", lat: -29.9477, lng: -51.0953, endereco: "AV GENERAL FLORES DA CUNHA 1280 - CENTRO, CACHOEIRINHA, RS - 94910002", tipo: "loja" },
    { nome: "414 - Gaston", lat: -29.9475, lng: -51.0950, endereco: "AV GENERAL FLORES DA CUNHA 1077 - VILA VERANOPOLIS, CACHOEIRINHA, RS - 94910001", tipo: "loja" },
    { nome: "432 - Gaston", lat: -29.9480, lng: -51.0955, endereco: "AV GENERAL FLORES DA CUNHA 4001 - BOM PRINCIPIO, CACHOEIRINHA, RS - 94950001", tipo: "loja" },
    
    // Outras cidades RS
    { nome: "319 - Paquetá Calçados", lat: -29.9431, lng: -50.9925, endereco: "AV DR JOSE LOUREIRO DA SILVA 1422 - CENTRO, GRAVATAi, RS - 94010000", tipo: "loja" },
    { nome: "323 - Paquetá Calçados", lat: -29.7602, lng: -51.1471, endereco: "AV PRIMEIRO DE MARCO 821 - CENTRO, SaO LEOPOLDO, RS - 93010210", tipo: "loja" },
    { nome: "339 - Paquetá Calçados", lat: -29.6788, lng: -51.1313, endereco: "AV NACıES UNIDAS 2001 - RIO BRANCO, NOVO HAMBURGO, RS - 93310021", tipo: "loja" },
    { nome: "347 - Paquetá Esportes", lat: -29.1634, lng: -51.1797, endereco: "RODOVIA RST/453 KM 35 2780 - DISTRITO INDUSTRIAL, CAXIAS DO SUL, RS - 95110690", tipo: "loja" },
    { nome: "355 - Paquetá Esportes", lat: -28.2634, lng: -52.4072, endereco: "RCORONEL CHICUTA 222 - CENTRO, PASSO FUNDO, RS - 99010050", tipo: "loja" },
    { nome: "362 - Paquetá Esportes", lat: -29.6842, lng: -53.8069, endereco: "AV NOSSA SENHORA DAS DORES 305 - DAS DORES, SANTA MARIA, RS - 97050030", tipo: "loja" },
    { nome: "378 - Paquetá Calçados", lat: -31.7654, lng: -52.3376, endereco: "AV FERREIRA VIANA 1526 - AREAL, PELOTAS, RS - 96085000", tipo: "loja" },
    { nome: "382 - Paquetá Calçados", lat: -29.9430, lng: -50.9920, endereco: "AVENIDA CENTENARIO 555 - PASSO DAS PEDRAS, GRAVATAÍ, RS - 94035240", tipo: "loja" },
    { nome: "411 - Gaston", lat: -32.0350, lng: -52.0986, endereco: "RUA DUQUE DE CAXIAS 101 - CENTRO, RIO GRANDE, RS - 96200020", tipo: "loja" },
    { nome: "417 - Gaston", lat: -29.9425, lng: -50.9915, endereco: "AV DR JOSE LOUREIRO DA SILVA 1378 - CENTRO, GRAVATAi, RS - 94010000", tipo: "loja" },
    { nome: "424 - Gaston", lat: -29.9895, lng: -51.0840, endereco: "AV PRESIDENTE GETULIO VARGAS 2030 - BELA VISTA, ALVORADA, RS - 94810001", tipo: "loja" },
    { nome: "434 - Gaston", lat: -29.8394, lng: -51.1456, endereco: "AV SAPUCAIA 2022 - PRIMOR, SAPUCAIA DO SUL, RS - 93210240", tipo: "loja" },
    { nome: "436 - Gaston", lat: -30.0811, lng: -51.0233, endereco: "AV CORONEL MARCOS DE ANDRADE 18 - CENTRO, VIAMaO, RS - 94410050", tipo: "loja" },
    { nome: "444 - Gaston", lat: -31.7650, lng: -52.3370, endereco: "AV FERREIRA VIANA 1526 - AREAL, PELOTAS, RS - 96085000", tipo: "loja" },
    { nome: "445 - Gaston", lat: -29.9435, lng: -50.9930, endereco: "AVENIDA CENTENARIO n° 555 - PASSO DAS PEDRAS, GRAVATAi, RS - 94035240", tipo: "loja" },
    { nome: "446 - Gaston", lat: -32.0355, lng: -52.0990, endereco: "RUA JOCKEY CLUBE 135 - VILA SAO MIGUEL, RIO GRANDE, RS - 96212730", tipo: "loja" },
    { nome: "449 - Gaston", lat: -29.6840, lng: -53.8065, endereco: "BR 287 N°2885 - PATRONATO, SANTA MARIA, RS - 97020-405", tipo: "loja" },
    
    // Pernambuco - Abys e Democrata
    { nome: "Abys - Oscar Abys Empreendimentos", lat: -8.1124, lng: -35.0155, endereco: "Avenida Barreto de Menezes, nº 800 - Loja 199 - Piedade, Jaboatão Guararapes, PE - 54.410-902", tipo: "loja" },
    { nome: "Abys - Oscar Abys Empreendimentos", lat: -8.2837, lng: -35.9755, endereco: "Avenida Adjar da Silva Case, nº 800 - 197/198 - Indianópolis, Caruaru, PE - 55.024-740", tipo: "loja" },
    { nome: "Abys - Oscar Abys Empreendimentos", lat: -8.2840, lng: -35.9760, endereco: "R Quinze de Novembro, 175 - Nossa Senhora das Dores, Caruaru, PE - 55.004-160", tipo: "loja" },
    { nome: "Abys - Oscar Abys Empreendimentos", lat: -8.1120, lng: -35.0150, endereco: "Av: Barreto de Menezes, 152 - Prazeres, Jaboatão Guararapes, PE - 54.310-310", tipo: "loja" },
    { nome: "Abys - Oscar Abys Empreendimentos", lat: -8.0476, lng: -34.8770, endereco: "Av: Governador Agamenon Magalhães,153 Loja 02 2 Expansão Pavmento 1 - Santo Amaro, Recife, PE - 50110-000", tipo: "loja" },
    { nome: "Democrata - WP Comércio", lat: -8.1100, lng: -34.8900, endereco: "R: Padre Carapuceiro, 777 - Boa Viagem, Recife, PE - 51020-280", tipo: "loja" },
    { nome: "Democrata - RBC Calçados", lat: -8.0480, lng: -34.8775, endereco: "Av: Governador Agamenon Magalhães,153 Loja 102 - Santo Amaro, Recife, PE - 50110-000", tipo: "loja" },
    { nome: "Democrata - AVB Calçados", lat: -8.0485, lng: -34.8780, endereco: "Av: Governador Agamenon Magalhães,153 Loja 102 - Santo Amaro, Recife, PE - 50110-000", tipo: "loja" },
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
  const totalEstados = new Set(lojas.map(l => {
    const match = l.endereco.match(/,\s([A-Z]{2})\s-/);
    return match ? match[1] : null;
  }).filter(Boolean)).size;

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
