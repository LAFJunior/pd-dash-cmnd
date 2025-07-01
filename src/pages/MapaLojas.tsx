
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
    // São Paulo - Lojas principais
    { nome: "001 - Cl2", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "003 - Cl 1", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "009 - Js", lat: -23.2237, lng: -45.9009, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "010 - Cd Oscar", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "cd" },
    { nome: "002 - Jp", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    
    // Jacareí
    { nome: "004 - Jc 2", lat: -23.3055, lng: -45.9696, endereco: "Jacareí, SP", tipo: "loja" },
    { nome: "019 - Jc Sh", lat: -23.3055, lng: -45.9696, endereco: "Jacareí, SP", tipo: "loja" },
    { nome: "127 - Oscar Jacareí", lat: -23.3055, lng: -45.9696, endereco: "Jacareí, SP", tipo: "loja" },
    { nome: "005 - Jc 1", lat: -23.3055, lng: -45.9696, endereco: "Jacareí, SP", tipo: "loja" },
    { nome: "018 - Arezzo Jacarei Shopp", lat: -23.3055, lng: -45.9696, endereco: "Jacareí, SP", tipo: "loja" },
    
    // Guaratinguetá
    { nome: "016 - Guara Ct", lat: -22.8163, lng: -45.1931, endereco: "Guaratinguetá, SP", tipo: "loja" },
    { nome: "023 - Guará Shopp", lat: -22.8163, lng: -45.1931, endereco: "Guaratinguetá, SP", tipo: "loja" },
    { nome: "126 - Jo Guaratingueta", lat: -22.8163, lng: -45.1931, endereco: "Guaratinguetá, SP", tipo: "loja" },
    
    // Mogi das Cruzes
    { nome: "040 - Arezzo Shopp Mogi", lat: -23.5229, lng: -46.1881, endereco: "Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "031 - Constantino Mogi", lat: -23.5229, lng: -46.1881, endereco: "Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "032 - Mogi Shopp", lat: -23.5229, lng: -46.1881, endereco: "Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "038 - Scarlen Mogi Shopp", lat: -23.5229, lng: -46.1881, endereco: "Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "039 - CL Mg", lat: -23.5229, lng: -46.1881, endereco: "Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "037 - Scarlen Mogi Centro", lat: -23.5229, lng: -46.1881, endereco: "Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "033 - Mogi Centro", lat: -23.5229, lng: -46.1881, endereco: "Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "034 - Stock Show BC", lat: -23.5229, lng: -46.1881, endereco: "Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "055 - Usaflex Mogi Shopp", lat: -23.5229, lng: -46.1881, endereco: "Mogi das Cruzes, SP", tipo: "loja" },
    { nome: "090 - Cd- Ponta Sz", lat: -23.5229, lng: -46.1881, endereco: "Mogi das Cruzes, SP", tipo: "cd" },
    
    // Suzano
    { nome: "036 - Scarlen Shopp Suzan", lat: -23.5426, lng: -46.3107, endereco: "Suzano, SP", tipo: "loja" },
    { nome: "043 - Suzano Shopp", lat: -23.5426, lng: -46.3107, endereco: "Suzano, SP", tipo: "loja" },
    { nome: "057 - Usaflex Suzano Shopp", lat: -23.5426, lng: -46.3107, endereco: "Suzano, SP", tipo: "loja" },
    { nome: "060 - Anacapri Suzano Shopp", lat: -23.5426, lng: -46.3107, endereco: "Suzano, SP", tipo: "loja" },
    { nome: "035 - Stock Show Sz", lat: -23.5426, lng: -46.3107, endereco: "Suzano, SP", tipo: "loja" },
    
    // Poá
    { nome: "042 - Stock Show Poá", lat: -23.5318, lng: -46.3450, endereco: "Poá, SP", tipo: "loja" },
    
    // Taubaté
    { nome: "028 - Taub Ct", lat: -23.0326, lng: -45.5527, endereco: "Taubaté, SP", tipo: "loja" },
    { nome: "020 - Taub Shopp", lat: -23.0326, lng: -45.5527, endereco: "Taubaté, SP", tipo: "loja" },
    { nome: "122 - Jô Taubaté Shopp", lat: -23.0326, lng: -45.5527, endereco: "Taubaté, SP", tipo: "loja" },
    { nome: "128 - Oscar Taubate Ct", lat: -23.0326, lng: -45.5527, endereco: "Taubaté, SP", tipo: "loja" },
    
    // Botucatu
    { nome: "101 - Botucatu", lat: -22.8854, lng: -48.4457, endereco: "Botucatu, SP", tipo: "loja" },
    
    // Votuporanga
    { nome: "108 - Votuporanga", lat: -20.4237, lng: -49.9858, endereco: "Votuporanga, SP", tipo: "loja" },
    
    // Resende - RJ
    { nome: "123 - Resende Ct", lat: -22.4681, lng: -44.4462, endereco: "Resende, RJ", tipo: "loja" },
    
    // Piracicaba
    { nome: "062 - Piracicaba", lat: -22.7253, lng: -47.6486, endereco: "Piracicaba, SP", tipo: "loja" },
    { nome: "069 - Piracicaba", lat: -22.7253, lng: -47.6486, endereco: "Piracicaba, SP", tipo: "loja" },
    { nome: "074 - Piracicaba Shopping", lat: -22.7253, lng: -47.6486, endereco: "Piracicaba, SP", tipo: "loja" },
    
    // Bauru
    { nome: "068 - Bauru Ct", lat: -22.3149, lng: -49.0581, endereco: "Bauru, SP", tipo: "loja" },
    { nome: "053 - Bauru Shopp", lat: -22.3149, lng: -49.0581, endereco: "Bauru, SP", tipo: "loja" },
    { nome: "117 - Bauru", lat: -22.3149, lng: -49.0581, endereco: "Bauru, SP", tipo: "loja" },
    { nome: "052 - Outlet Bauru", lat: -22.3149, lng: -49.0581, endereco: "Bauru, SP", tipo: "loja" },
    
    // Ribeirão Preto
    { nome: "072 - Novo Shopp Ribeirão", lat: -21.1699, lng: -47.8099, endereco: "Ribeirão Preto, SP", tipo: "loja" },
    { nome: "054 - Ribeirão Centro", lat: -21.1699, lng: -47.8099, endereco: "Ribeirão Preto, SP", tipo: "loja" },
    { nome: "058 - Ribeirão Shopp", lat: -21.1699, lng: -47.8099, endereco: "Ribeirão Preto, SP", tipo: "loja" },
    
    // Guarulhos
    { nome: "056 - Usaflex Guarulhos Shopp", lat: -23.4538, lng: -46.5333, endereco: "Guarulhos, SP", tipo: "loja" },
    
    // Jundiaí
    { nome: "061 - Jundiaí", lat: -23.1864, lng: -46.8840, endereco: "Jundiaí, SP", tipo: "loja" },
    
    // Araraquara
    { nome: "109 - Araraquara Mega", lat: -21.7948, lng: -48.1757, endereco: "Araraquara, SP", tipo: "loja" },
    { nome: "064 - Araraquara", lat: -21.7948, lng: -48.1757, endereco: "Araraquara, SP", tipo: "loja" },
    
    // Ourinhos
    { nome: "115 - Ourinhos", lat: -22.9789, lng: -49.8708, endereco: "Ourinhos, SP", tipo: "loja" },
    
    // Barretos
    { nome: "119 - Barretos", lat: -20.5569, lng: -48.5675, endereco: "Barretos, SP", tipo: "loja" },
    
    // Presidente Prudente
    { nome: "120 - Presidente Prudente", lat: -22.1257, lng: -51.3893, endereco: "Presidente Prudente, SP", tipo: "loja" },
    
    // Araçatuba
    { nome: "045 - Araçatuba", lat: -21.2089, lng: -50.4328, endereco: "Araçatuba, SP", tipo: "loja" },
    { nome: "104 - Jô Araçatuba", lat: -21.2089, lng: -50.4328, endereco: "Araçatuba, SP", tipo: "loja" },
    
    // São Paulo Capital
    { nome: "059 - Usaflex Tatuapé Shopp", lat: -23.5505, lng: -46.6333, endereco: "São Paulo, SP", tipo: "loja" },
    
    // Mogi Mirim
    { nome: "065 - Mogi Mirim", lat: -22.4326, lng: -46.9576, endereco: "Mogi Mirim, SP", tipo: "loja" },
    
    // Caraguatatuba
    { nome: "044 - Caragua Shopp", lat: -23.6203, lng: -45.4134, endereco: "Caraguatatuba, SP", tipo: "loja" },
    
    // Franca
    { nome: "111 - Franca", lat: -20.5387, lng: -47.4006, endereco: "Franca, SP", tipo: "loja" },
    
    // Limeira
    { nome: "114 - Limeira", lat: -22.5647, lng: -47.4017, endereco: "Limeira, SP", tipo: "loja" },
    
    // Catanduva
    { nome: "118 - Catanduva", lat: -21.1378, lng: -48.9721, endereco: "Catanduva, SP", tipo: "loja" },
    
    // Caçapava
    { nome: "121 - Caçapava", lat: -23.1057, lng: -45.7113, endereco: "Caçapava, SP", tipo: "loja" },
    
    // São José do Rio Preto
    { nome: "041 - Rio Preto Ct", lat: -20.8194, lng: -49.3794, endereco: "São José do Rio Preto, SP", tipo: "loja" },
    { nome: "008 - Rio Preto Shopp", lat: -20.8194, lng: -49.3794, endereco: "São José do Rio Preto, SP", tipo: "loja" },
    { nome: "106 - Rio Preto CL1", lat: -20.8194, lng: -49.3794, endereco: "São José do Rio Preto, SP", tipo: "loja" },
    
    // Sorocaba
    { nome: "063 - Sorocaba", lat: -23.5015, lng: -47.4526, endereco: "Sorocaba, SP", tipo: "loja" },
    
    // Mogi Guaçu
    { nome: "066 - Mogi Guaçu", lat: -22.3689, lng: -46.9433, endereco: "Mogi Guaçu, SP", tipo: "loja" },
    
    // São Carlos
    { nome: "116 - São Carlos", lat: -22.0175, lng: -47.8908, endereco: "São Carlos, SP", tipo: "loja" },
    
    // Pindamonhangaba
    { nome: "047 - Pinda Shopp", lat: -22.9246, lng: -45.4619, endereco: "Pindamonhangaba, SP", tipo: "loja" },
    { nome: "048 - Pinda Ct", lat: -22.9246, lng: -45.4619, endereco: "Pindamonhangaba, SP", tipo: "loja" },
    
    // Lorena
    { nome: "049 - Lorena", lat: -22.7308, lng: -45.1252, endereco: "Lorena, SP", tipo: "loja" },
    
    // Cruzeiro
    { nome: "075 - Cruzeiro", lat: -22.5759, lng: -44.9637, endereco: "Cruzeiro, SP", tipo: "loja" },
    
    // Minas Gerais
    { nome: "102 - Ituiutaba", lat: -18.9661, lng: -49.4646, endereco: "Ituiutaba, MG", tipo: "loja" },
    { nome: "105 - Uberaba", lat: -19.7482, lng: -47.9319, endereco: "Uberaba, MG", tipo: "loja" },
    { nome: "113 - Uberlândia", lat: -18.9113, lng: -48.2622, endereco: "Uberlândia, MG", tipo: "loja" },
    { nome: "502 - Diadora Filial", lat: -20.6198, lng: -44.8497, endereco: "Nova Serrana, MG", tipo: "loja" },
    
    // Santa Catarina - Florianópolis
    { nome: "204 - Carioca Esporte Estreito", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    { nome: "207 - Tiradentes Ct Carioca", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    { nome: "209 - Schmidt Cl 1 Ct Carioca", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    { nome: "215 - Schmidt Cl 2 Ct Carioca", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    { nome: "216 - Sports Deodoro Ct Carioca", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    { nome: "218 - Villa Romana Shopp Carioca", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    { nome: "219 - Schmidt Cl 3 Ct Carioca", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    { nome: "221 - Deodoro Ct Carioca", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    { nome: "224 - Rua Sete Ct Carioca", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    { nome: "201 - Matriz Carioca", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    { nome: "205 - Ingleses Carioca", lat: -27.5954, lng: -48.5480, endereco: "Florianópolis, SC", tipo: "loja" },
    
    // Joinville
    { nome: "202 - Joinville Carioca", lat: -26.3044, lng: -48.8458, endereco: "Joinville, SC", tipo: "loja" },
    { nome: "359 - Paquetá Garten Shopp Joinville", lat: -26.3044, lng: -48.8458, endereco: "Joinville, SC", tipo: "loja" },
    
    // São José - SC
    { nome: "203 - Outlet Carioca Calçados", lat: -27.5969, lng: -48.6394, endereco: "São José, SC", tipo: "loja" },
    { nome: "211 - Itaguaçú 1 Shopp Carioca", lat: -27.5969, lng: -48.6394, endereco: "São José, SC", tipo: "loja" },
    { nome: "212 - Kobrasol Carioca", lat: -27.5969, lng: -48.6394, endereco: "São José, SC", tipo: "loja" },
    { nome: "217 - Sports Itaguaçú Shopp Carioca", lat: -27.5969, lng: -48.6394, endereco: "São José, SC", tipo: "loja" },
    { nome: "223 - Itaguaçú 2 Shopp Carioca", lat: -27.5969, lng: -48.6394, endereco: "São José, SC", tipo: "loja" },
    { nome: "228 - Forquilhinhas Carioca", lat: -27.5969, lng: -48.6394, endereco: "São José, SC", tipo: "loja" },
    { nome: "226 - Continente Shopp Carioca", lat: -27.5969, lng: -48.6394, endereco: "São José, SC", tipo: "loja" },
    { nome: "297 - Cd Carioca", lat: -27.5969, lng: -48.6394, endereco: "São José, SC", tipo: "cd" },
    
    // Balneário Camboriú
    { nome: "208 - Balneário Carioca", lat: -26.9906, lng: -48.6336, endereco: "Balneário Camboriú, SC", tipo: "loja" },
    { nome: "391 - Paquetá Camburiú", lat: -26.9906, lng: -48.6336, endereco: "Balneário Camboriú, SC", tipo: "loja" },
    
    // Itajaí
    { nome: "214 - Itajaí Carioca", lat: -26.9077, lng: -48.6618, endereco: "Itajaí, SC", tipo: "loja" },
    
    // Palhoça
    { nome: "225 - Palhoça Carioca", lat: -27.6405, lng: -48.6704, endereco: "Palhoça, SC", tipo: "loja" },
    
    // Biguaçu
    { nome: "227 - Biguaçu Carioca", lat: -27.4948, lng: -48.6587, endereco: "Biguaçu, SC", tipo: "loja" },
    
    // Blumenau
    { nome: "351 - Paquetá Blumenau", lat: -26.9194, lng: -49.0661, endereco: "Blumenau, SC", tipo: "loja" },
    { nome: "363 - Paquetá Norte Shopp Blumenau", lat: -26.9194, lng: -49.0661, endereco: "Blumenau, SC", tipo: "loja" },
    
    // Jaraguá do Sul
    { nome: "346 - Paquetá Jaraguá do Sul", lat: -26.4844, lng: -49.0669, endereco: "Jaraguá do Sul, SC", tipo: "loja" },
    
    // Rio Grande do Sul - Porto Alegre
    { nome: "302 - Paquetá Voluntários", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "317 - Paquetá Protásio Alves", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "326 - Paquetá Praia de Belas", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "338 - Paquetá Esportes Shopp Bourbon Ipiranga", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "343 - Paquetá Esportes Shopp Iguatemi", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "352 - Paquetá Barra Shopp Sul", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "353 - Paquetá Esportes Barra Shopp Sul", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "356 - Paquetá Andradas", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "360 - Paquetá Shopp Rua da Praia", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "364 - Paquetá Cassol Center Lar", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "365 - Paquetá Bourbon Ipiranga", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "367 - Paquetá Esportes Shopp Bourbon Wallig", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "300 - Paquetá Matriz", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "333 - Paquetá Esquina Democrática", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "327 - Paquetá Lindóia Shopp", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    
    // Gaston Porto Alegre
    { nome: "419 - Gaston Shopp Iguatemi", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "422 - Gaston Bourbon Assis Brasil", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "426 - Gaston Cavalhada", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "427 - Gaston Carrefour Partenon", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "428 - Gaston Carrefour Ubirici", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "430 - Gaston Shopp Total", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "439 - Gaston Carrefour Sertorio", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "440 - Gaston Barra Shopp Sul", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "404 - Gaston Andradas", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "413 - Gaston Otávio Rocha", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "415 - Gaston Azenha", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "441 - Gaston Wallig", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    { nome: "423 - Gaston Assis Brasil", lat: -30.0346, lng: -51.2177, endereco: "Porto Alegre, RS", tipo: "loja" },
    
    // Canoas
    { nome: "306 - Paquetá Park Shopp Canoas", lat: -29.9177, lng: -51.1804, endereco: "Canoas, RS", tipo: "loja" },
    { nome: "337 - Paquetá Canoas Shopp", lat: -29.9177, lng: -51.1804, endereco: "Canoas, RS", tipo: "loja" },
    { nome: "345 - Paquetá Esportes Shopp Canoas", lat: -29.9177, lng: -51.1804, endereco: "Canoas, RS", tipo: "loja" },
    { nome: "303 - Paquetá Ecommerce", lat: -29.9177, lng: -51.1804, endereco: "Canoas, RS", tipo: "loja" },
    { nome: "421 - Gaston Canoas Shopp", lat: -29.9177, lng: -51.1804, endereco: "Canoas, RS", tipo: "loja" },
    { nome: "431 - Gaston Calçadão Canoas", lat: -29.9177, lng: -51.1804, endereco: "Canoas, RS", tipo: "loja" },
    { nome: "447 - Gaston Park Shopp Canoas", lat: -29.9177, lng: -51.1804, endereco: "Canoas, RS", tipo: "loja" },
    { nome: "348 - Paquetá Esportes do Parkshopping Canoas", lat: -29.9177, lng: -51.1804, endereco: "Canoas, RS", tipo: "loja" },
    
    // Cachoeirinha
    { nome: "318 - Paquetá Cachoeirinha", lat: -29.9477, lng: -51.0953, endereco: "Cachoeirinha, RS", tipo: "loja" },
    { nome: "432 - Gaston Cachoeirinha F. Cunha 4001", lat: -29.9477, lng: -51.0953, endereco: "Cachoeirinha, RS", tipo: "loja" },
    { nome: "414 - Gaston Cachoeirinha F. Cunha 1077", lat: -29.9477, lng: -51.0953, endereco: "Cachoeirinha, RS", tipo: "loja" },
    
    // Alvorada
    { nome: "424 - Gaston Alvorada", lat: -29.9895, lng: -51.0840, endereco: "Alvorada, RS", tipo: "loja" },
    
    // Sapucaia do Sul
    { nome: "434 - Gaston Sapucaia do Sul", lat: -29.8394, lng: -51.1456, endereco: "Sapucaia do Sul, RS", tipo: "loja" },
    { nome: "301 - Paquetá Canoas", lat: -29.8394, lng: -51.1456, endereco: "Sapucaia do Sul, RS", tipo: "loja" },
    { nome: "296 - Novo Cd Carioca", lat: -29.8394, lng: -51.1456, endereco: "Sapucaia do Sul, RS", tipo: "cd" },
    
    // Viamão
    { nome: "436 - Gaston Viamão", lat: -30.0811, lng: -51.0233, endereco: "Viamão, RS", tipo: "loja" },
    
    // Novo Hamburgo
    { nome: "339 - Paquetá Shopp Novo Hamburgo", lat: -29.6788, lng: -51.1313, endereco: "Novo Hamburgo, RS", tipo: "loja" },
    
    // Gramado
    { nome: "Paquetá Gramado", lat: -29.3789, lng: -50.8738, endereco: "Gramado, RS", tipo: "loja" },
    
    // Pelotas
    { nome: "378 - Paquetá Shopp Pelotas", lat: -31.7654, lng: -52.3376, endereco: "Pelotas, RS", tipo: "loja" },
    { nome: "444 - Gaston Shopp Pelotas", lat: -31.7654, lng: -52.3376, endereco: "Pelotas, RS", tipo: "loja" },
    
    // Gravataí
    { nome: "382 - Paquetá Shopp Gravataí", lat: -29.9431, lng: -50.9925, endereco: "Gravataí, RS", tipo: "loja" },
    { nome: "417 - Gaston Gravataí CTO", lat: -29.9431, lng: -50.9925, endereco: "Gravataí, RS", tipo: "loja" },
    { nome: "445 - Gaston Shopp Gravataí", lat: -29.9431, lng: -50.9925, endereco: "Gravataí, RS", tipo: "loja" },
    { nome: "319 - Paquetá Gravataí", lat: -29.9431, lng: -50.9925, endereco: "Gravataí, RS", tipo: "loja" },
    
    // Rio Grande
    { nome: "411 - Gaston Rio Grande", lat: -32.0350, lng: -52.0986, endereco: "Rio Grande, RS", tipo: "loja" },
    { nome: "446 - Gaston Shopp Rio Grande", lat: -32.0350, lng: -52.0986, endereco: "Rio Grande, RS", tipo: "loja" },
    
    // Caxias do Sul
    { nome: "347 - Paquetá Esportes Shopp Iguatemi Caxias do Sul", lat: -29.1634, lng: -51.1797, endereco: "Caxias do Sul, RS", tipo: "loja" },
    
    // São Leopoldo
    { nome: "323 - Paquetá São Leopoldo", lat: -29.7602, lng: -51.1471, endereco: "São Leopoldo, RS", tipo: "loja" },
    
    // Santa Maria
    { nome: "362 - Paquetá Esportes Shopp Royal Plaza Santa Maria", lat: -29.6842, lng: -53.8069, endereco: "Santa Maria, RS", tipo: "loja" },
    { nome: "449 - Gaston Shopp Santa Maria", lat: -29.6842, lng: -53.8069, endereco: "Santa Maria, RS", tipo: "loja" },
    
    // Passo Fundo
    { nome: "355 - Paquetá Esportes Shopp Bella Citta Passo Fundo", lat: -28.2634, lng: -52.4072, endereco: "Passo Fundo, RS", tipo: "loja" },
    
    // Pernambuco
    { nome: "O&A Caruaru Shopping", lat: -8.2837, lng: -35.9755, endereco: "Caruaru, PE", tipo: "loja" },
    { nome: "O&A Prazeres", lat: -8.1124, lng: -35.0155, endereco: "Jaboatão dos Guararapes, PE", tipo: "loja" },
    { nome: "O&A Tacaruna", lat: -8.0476, lng: -34.8770, endereco: "Recife, PE", tipo: "loja" },
    { nome: "O&A Jaboatão Guararapes", lat: -8.1124, lng: -35.0155, endereco: "Jaboatão dos Guararapes, PE", tipo: "loja" },
    { nome: "O&A Caruaru Centro", lat: -8.2837, lng: -35.9755, endereco: "Caruaru, PE", tipo: "loja" },
    
    // Centros de Distribuição adicionais
    { nome: "501 - Diadora Matriz", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "cd" },
    { nome: "500 - Defeito Diadora", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "cd" },
    { nome: "503 - Diadora Ecommerce", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "cd" },
    { nome: "600 - Oscar ecommerce", lat: -22.8751, lng: -46.3132, endereco: "Extrema, MG", tipo: "cd" },
    { nome: "100 - Logística Ecommerce", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "cd" },
    { nome: "030 - E-commerce", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "cd" },
    
    // Unidades administrativas/suporte
    { nome: "E.L CONTABILIDADE", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "Festcard Oscar", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "Financeiro", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "MATRIX", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "OXYGEN", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "FINANCIAL", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "TRANSPORT", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "CSC", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "151 - Associacao dos Locatarios", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
    { nome: "900 - SAF MKT", lat: -23.1890, lng: -45.8869, endereco: "São José dos Campos, SP", tipo: "loja" },
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
  const totalEstados = new Set(lojas.map(l => l.endereco.split(', ')[1])).size;

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
