import React from 'react';

const CentroCusto = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto bg-white text-[9px] leading-tight">
      {/* Header Row */}
      <div className="flex bg-gray-100 border border-black font-bold text-center">
        <div className="flex-1 border-r border-black p-1 min-h-[40px] flex flex-col justify-center">
          <div>F1</div>
          <div className="text-[8px]">Oscar Calçados Ltda</div>
        </div>
        <div className="flex-1 border-r border-black p-1 min-h-[40px] flex flex-col justify-center">
          <div>F2</div>
          <div className="text-[8px]">Jô Calçados Ltda</div>
        </div>
        <div className="flex-1 border-r border-black p-1 min-h-[40px] flex flex-col justify-center">
          <div>F3</div>
          <div className="text-[8px]">Carioca Calçados Ltda</div>
        </div>
        <div className="flex-1 border-r border-black p-1 min-h-[40px] flex flex-col justify-center">
          <div>F4</div>
          <div className="text-[8px]">Varejo Sul Ltda</div>
          <div className="text-[8px]">Paquetá</div>
        </div>
        <div className="flex-1 border-r border-black p-1 min-h-[40px] flex flex-col justify-center">
          <div>F4</div>
          <div className="text-[8px]">Varejo Sul Ltda</div>
          <div className="text-[8px]">Gaston</div>
        </div>
        <div className="flex-1 border-r border-black p-1 min-h-[40px] flex flex-col justify-center">
          <div>F5</div>
          <div className="text-[8px]">Oscar Calçados Comércio Eletrônico Ltda</div>
          <div className="text-[8px]">Loja E commerce</div>
        </div>
        <div className="flex-1 border-r border-black p-1 min-h-[40px] flex flex-col justify-center">
          <div>F7</div>
          <div className="text-[8px]">SIMPLES</div>
          <div className="text-[8px]">OSCAR/SPORT</div>
        </div>
        <div className="flex-1 border-r border-black p-1 min-h-[40px] flex flex-col justify-center">
          <div>F8</div>
          <div className="text-[8px]">SIMPLES</div>
          <div className="text-[8px]">SCARLEN/STOCK/CONST</div>
        </div>
        <div className="flex-1 p-1 min-h-[40px] flex flex-col justify-center">
          <div>F9</div>
          <div className="text-[8px]">FRANQUIAS</div>
        </div>
      </div>

      {/* Content Row */}
      <div className="flex border-l border-r border-b border-black min-h-[600px]">
        {/* Coluna F1 - Oscar Calçados */}
        <div className="flex-1 border-r border-black p-1 align-top">
          <div className="text-[7px] mb-0.5 text-center">001 – Centro SJC - RSO<br/><span className="text-[8px] text-gray-600">50.915.875/0012-44</span></div>
          <div className="text-[7px] mb-0.5 text-center">003 - Centro SJC - RCPR<br/><span className="text-[8px] text-gray-600">50.915.875/0013-25</span></div>
          <div className="text-[7px] mb-0.5 text-center">004 - Centro Jacareí<br/><span className="text-[8px] text-gray-600">50.915.875/0014-06</span></div>
          <div className="text-[7px] mb-0.5 text-center">006 - C.Vale SJC<br/><span className="text-[8px] text-gray-600">50.915.875/0004-34</span></div>
          <div className="text-[7px] mb-0.5 text-center">007 - Colinas SJC<br/><span className="text-[8px] text-gray-600">50.915.875/0003-53</span></div>
          <div className="text-[7px] mb-0.5 text-center">009 – Satélite SJC<br/><span className="text-[8px] text-gray-600">50.915.875/0001-91</span></div>
          <div className="text-[7px] mb-0.5 text-center">010 - Vila Nair - SJC<br/><span className="text-[8px] text-gray-600">50.915.875/0005-15</span></div>
          <div className="text-[7px] mb-0.5 text-center">016 - Centro Guaratinguetá<br/><span className="text-[8px] text-gray-600">50.915.875/0015-97</span></div>
          <div className="text-[7px] mb-0.5 text-center">019 - Shop. Jacareí<br/><span className="text-[8px] text-gray-600">50.915.875/0016-78</span></div>
          <div className="text-[7px] mb-0.5 text-center">020 - Shop. Taubaté<br/><span className="text-[8px] text-gray-600">50.915.875/0017-59</span></div>
          <div className="text-[7px] mb-0.5 text-center">023 - Shop. Guaratinguetá<br/><span className="text-[8px] text-gray-600">50.915.875/0018-30</span></div>
          <div className="text-[7px] mb-0.5 text-center">026 - Mega V.Sul SJC<br/><span className="text-[8px] text-gray-600">50.915.875/0010-82</span></div>
          <div className="text-[7px] mb-0.5 text-center">028 – Centro Taubaté<br/><span className="text-[8px] text-gray-600">50.915.875/0019-10</span></div>
          <div className="text-[7px] mb-0.5 text-center">032 - Mogi<br/><span className="text-[8px] text-gray-600">50.915.875/0020-54</span></div>
          <div className="text-[7px] mb-0.5 text-center">039 – MOGI<br/><span className="text-[8px] text-gray-600">50.915.875/0021-35</span></div>
          <div className="text-[7px] mb-0.5 text-center">043 - Suzano<br/><span className="text-[8px] text-gray-600">50.915.875/0022-16</span></div>
          <div className="text-[7px] mb-0.5 text-center">044 - Shop. Caraguá<br/><span className="text-[8px] text-gray-600">50.915.875/0008-68</span></div>
          <div className="text-[7px] mb-0.5 text-center">048 - Centro Pinda<br/><span className="text-[8px] text-gray-600">50.915.875/0023-05</span></div>
          <div className="text-[7px] mb-0.5 text-center">049 - Centro Lorena<br/><span className="text-[8px] text-gray-600">50.915.875/0024-88</span></div>
          <div className="text-[7px] mb-0.5 text-center">067 - Shop. Jd Oriente<br/><span className="text-[8px] text-gray-600">50.915.875/0011-63</span></div>
          <div className="text-[7px] mb-0.5 text-center">075 - Oscar Shop Cruzeiro<br/><span className="text-[8px] text-gray-600">50.915.875/0034-50</span></div>
          <div className="text-[7px] mb-0.5 text-center">122 - Taubaté<br/><span className="text-[8px] text-gray-600">50.915.875/0026-40</span></div>
          <div className="text-[7px] mb-0.5 text-center">123 - Resende<br/><span className="text-[8px] text-gray-600">50.915.875/0033-79</span></div>
          <div className="text-[7px] mb-0.5 text-center">124 - Centro SJC<br/><span className="text-[8px] text-gray-600">50.915.875/0027-20</span></div>
          <div className="text-[7px] mb-0.5 text-center">125 – Centro SJC<br/><span className="text-[8px] text-gray-600">50.915.875/0028-01</span></div>
          <div className="text-[7px] mb-0.5 text-center">126 - Centro Guaratinguetá<br/><span className="text-[8px] text-gray-600">50.915.875/0029-92</span></div>
          <div className="text-[7px] mb-0.5 text-center">127 - Centro Jacareí<br/><span className="text-[8px] text-gray-600">50.915.875/0030-26</span></div>
          <div className="text-[7px] mb-0.5 text-center">128 - Centro - Taubaté<br/><span className="text-[8px] text-gray-600">50.915.875/0031-07</span></div>
          <div className="mt-2 text-[7px] text-center font-bold">28 LOJAS</div>
        </div>

        {/* Coluna F2 - Jô Calçados */}
        <div className="flex-1 border-r border-black p-1 align-top">
          <div className="text-[7px] mb-0.5 text-center">008 - S. J. Rio Preto<br/><span className="text-[8px] text-gray-600">48.973.705/0013-55</span></div>
          <div className="text-[7px] mb-0.5 text-center">041 - S. J. Rio Preto<br/><span className="text-[8px] text-gray-600">48.973.705/0009-79</span></div>
          <div className="text-[7px] mb-0.5 text-center">045 - Araçatuba<br/><span className="text-[8px] text-gray-600">48.973.705/0010-02</span></div>
          <div className="text-[7px] mb-0.5 text-center">054 - Rio Preto<br/><span className="text-[8px] text-gray-600">48.973.705/0026-70</span></div>
          <div className="text-[7px] mb-0.5 text-center">058 - Ribeirão Preto<br/><span className="text-[8px] text-gray-600">48.973.705/0027-50</span></div>
          <div className="text-[7px] mb-0.5 text-center">061 - Jundiaí<br/><span className="text-[8px] text-gray-600">48.973.705/0025-99</span></div>
          <div className="text-[7px] mb-0.5 text-center">062 - Piracicaba<br/><span className="text-[8px] text-gray-600">48.973705/0023-27</span></div>
          <div className="text-[7px] mb-0.5 text-center">063 - Sorocaba<br/><span className="text-[8px] text-gray-600">48.973.705/0024-08</span></div>
          <div className="text-[7px] mb-0.5 text-center">064 - Araraquara<br/><span className="text-[8px] text-gray-600">48.973.705/0020-84</span></div>
          <div className="text-[7px] mb-0.5 text-center">065 - MOGI MIRIM<br/><span className="text-[8px] text-gray-600">48.973.705/0018-60</span></div>
          <div className="text-[7px] mb-0.5 text-center">066 - MOGI GUAÇU<br/><span className="text-[8px] text-gray-600">48.973.705/0019-40</span></div>
          <div className="text-[7px] mb-0.5 text-center">068 - Bauru<br/><span className="text-[8px] text-gray-600">48.973.705/0012-74</span></div>
          <div className="text-[7px] mb-0.5 text-center">069 - Piracicaba<br/><span className="text-[8px] text-gray-600">48.973.705/0028-31</span></div>
          <div className="text-[7px] mb-0.5 text-center">072 - Ribeirão Preto-Shop.<br/><span className="text-[8px] text-gray-600">48.973.705/0008-98</span></div>
          <div className="text-[7px] mb-0.5 text-center">074 - Piracicaba Shopping<br/><span className="text-[8px] text-gray-600">48.973.705/0035-60</span></div>
          <div className="text-[7px] mb-0.5 text-center">101 – BOTUCATU<br/><span className="text-[8px] text-gray-600">48.973.705/0001-11</span></div>
          <div className="text-[7px] mb-0.5 text-center">102 - Ituiutaba<br/><span className="text-[8px] text-gray-600">48.973.705/0034-80</span></div>
          <div className="text-[7px] mb-0.5 text-center">105 - Uberaba<br/><span className="text-[8px] text-gray-600">48.973.705/0033-07</span></div>
          <div className="text-[7px] mb-0.5 text-center">106 - S. J. Rio Preto<br/><span className="text-[8px] text-gray-600">48.973.705/0011-93</span></div>
          <div className="text-[7px] mb-0.5 text-center">108 - Votuporanga<br/><span className="text-[8px] text-gray-600">48.973.705/0017-89</span></div>
          <div className="text-[7px] mb-0.5 text-center">109 – ARARAQUARA<br/><span className="text-[8px] text-gray-600">48.973.705/0021-65</span></div>
          <div className="text-[7px] mb-0.5 text-center">111 - Franca<br/><span className="text-[8px] text-gray-600">48.973.705/0022-46</span></div>
          <div className="text-[7px] mb-0.5 text-center">113 - Uberlândia<br/><span className="text-[8px] text-gray-600">48.973.705/0032-18</span></div>
          <div className="text-[7px] mb-0.5 text-center">114 - Limeira<br/><span className="text-[8px] text-gray-600">48.973.705/0031-37</span></div>
          <div className="text-[7px] mb-0.5 text-center">115 - Ourinhos<br/><span className="text-[8px] text-gray-600">48.973.705/0002-00</span></div>
          <div className="text-[7px] mb-0.5 text-center">116 - São Carlos<br/><span className="text-[8px] text-gray-600">48.973.705/0030-56</span></div>
          <div className="text-[7px] mb-0.5 text-center">117 - Bauru<br/><span className="text-[8px] text-gray-600">48.973.705/0016-06</span></div>
          <div className="text-[7px] mb-0.5 text-center">118 - Catanduva<br/><span className="text-[8px] text-gray-600">48.973.705/0015-17</span></div>
          <div className="text-[7px] mb-0.5 text-center">119 - Barretos<br/><span className="text-[8px] text-gray-600">48.973.705/0029-12</span></div>
          <div className="text-[7px] mb-0.5 text-center">120 - Pres. Prudente<br/><span className="text-[8px] text-gray-600">48.973.705/0007-07</span></div>
          <div className="mt-2 text-[7px] text-center font-bold">30 LOJAS</div>
        </div>

        {/* Coluna F3 - Carioca Calçados */}
        <div className="flex-1 border-r border-black p-1 align-top">
          <div className="text-[7px] mb-0.5 text-center">201 - Estreito/Floripa<br/><span className="text-[8px] text-gray-600">78.842.440/0001-83</span></div>
          <div className="text-[7px] mb-0.5 text-center">202 - Joinville<br/><span className="text-[8px] text-gray-600">78.842.440/0023-99</span></div>
          <div className="text-[7px] mb-0.5 text-center">204 - Estreito/Floripa<br/><span className="text-[8px] text-gray-600">78.842.440/0009-30</span></div>
          <div className="text-[7px] mb-0.5 text-center">205 - Bairro dos Ingleses<br/><span className="text-[8px] text-gray-600">78.842/440/0020-46</span></div>
          <div className="text-[7px] mb-0.5 text-center">208 - Balneário<br/><span className="text-[8px] text-gray-600">78.842.440/0002-64</span></div>
          <div className="text-[7px] mb-0.5 text-center">209 - Centro / Floripa<br/><span className="text-[8px] text-gray-600">78.842.440/0003-45</span></div>
          <div className="text-[7px] mb-0.5 text-center">211 – Shop Itaguaçu/São José<br/><span className="text-[8px] text-gray-600">78.842.440/0004-26</span></div>
          <div className="text-[7px] mb-0.5 text-center">212 - Kobrasol /São José<br/><span className="text-[8px] text-gray-600">78.842.440/0014-06</span></div>
          <div className="text-[7px] mb-0.5 text-center">214 - Centro / Itajaí<br/><span className="text-[8px] text-gray-600">78.842.440/0005-07</span></div>
          <div className="text-[7px] mb-0.5 text-center">215 - Centro / Floripa<br/><span className="text-[8px] text-gray-600">78.842.440/0017-40</span></div>
          <div className="text-[7px] mb-0.5 text-center">216 - Centro / Floripa<br/><span className="text-[8px] text-gray-600">78.842.440/0016-60</span></div>
          <div className="text-[7px] mb-0.5 text-center">217 - Sh Itaguaçu / São José<br/><span className="text-[8px] text-gray-600">78.842.440/0015-89</span></div>
          <div className="text-[7px] mb-0.5 text-center">218 - Sh. Vila Romana - Floripa<br/><span className="text-[8px] text-gray-600">78.842.440/0006-98</span></div>
          <div className="text-[7px] mb-0.5 text-center">219 - Centro / Floripa<br/><span className="text-[8px] text-gray-600">78.842.440/0007-79</span></div>
          <div className="text-[7px] mb-0.5 text-center">221 - Centro / Floripa<br/><span className="text-[8px] text-gray-600">78.842.440/0011-55</span></div>
          <div className="text-[7px] mb-0.5 text-center">223 - Shop. Itaguaçu / São José<br/><span className="text-[8px] text-gray-600">78.842.440/0010-74</span></div>
          <div className="text-[7px] mb-0.5 text-center">224 - Centro / Floripa<br/><span className="text-[8px] text-gray-600">78.842.440/0012-36</span></div>
          <div className="text-[7px] mb-0.5 text-center">225 - Centro / Palhoça<br/><span className="text-[8px] text-gray-600">78.842.440/0013-17</span></div>
          <div className="text-[7px] mb-0.5 text-center">226 - Shop. Continente / São José<br/><span className="text-[8px] text-gray-600">78.842.440/0018-21</span></div>
          <div className="text-[7px] mb-0.5 text-center">227 - Forquilhinhas / São José<br/><span className="text-[8px] text-gray-600">78.842.440/0022-08</span></div>
          <div className="text-[7px] mb-0.5 text-center">228 - Centro / Biguaçu<br/><span className="text-[8px] text-gray-600">78.842.440/0019-02</span></div>
          <div className="text-[7px] mb-0.5 text-center">297 - CD-Bela Vista/São José<br/><span className="text-[8px] text-gray-600">78.842.440/0008-50</span></div>
          <div className="mt-2 text-[7px] text-center font-bold">21 LOJAS + 1 CD</div>
        </div>

        {/* Coluna F4 - Varejo Sul (Paquetá) */}
        <div className="flex-1 border-r border-black p-1 align-top">
          <div className="text-[7px] mb-0.5 text-center">302 - Centro POA<br/><span className="text-[8px] text-gray-600">49.961.545/0033-30</span></div>
          <div className="text-[7px] mb-0.5 text-center">306 - Park Shop - Canoas<br/><span className="text-[8px] text-gray-600">49.961.545/0036-83</span></div>
          <div className="text-[7px] mb-0.5 text-center">317 - Rio Branco - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0006-68</span></div>
          <div className="text-[7px] mb-0.5 text-center">318 - Vila Imbuhy - Cachoeirinha<br/><span className="text-[8px] text-gray-600">49.961.545/0023-69</span></div>
          <div className="text-[7px] mb-0.5 text-center">319 - Centro - Gravataí<br/><span className="text-[8px] text-gray-600">49.961.545/0026-01</span></div>
          <div className="text-[7px] mb-0.5 text-center">323 - Bourbom Shop - São Leopoldo<br/><span className="text-[8px] text-gray-600">49.961.545/0020-16</span></div>
          <div className="text-[7px] mb-0.5 text-center">326 - Praia de Belas Shop. - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0029-54</span></div>
          <div className="text-[7px] mb-0.5 text-center">327 - Lindóia Shop - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0012-06</span></div>
          <div className="text-[7px] mb-0.5 text-center">333 - Centro Histórico - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0047-36</span></div>
          <div className="text-[7px] mb-0.5 text-center">337 - Canoas Shop. - Canoas<br/><span className="text-[8px] text-gray-600">49.961.545/0034-11</span></div>
          <div className="text-[7px] mb-0.5 text-center">338 - Bourbom Ipiranga Shop. - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0002-34</span></div>
          <div className="text-[7px] mb-0.5 text-center">339 - Bourbom Shop. - Novo Hamburgo<br/><span className="text-[8px] text-gray-600">49.961.545/0022-88</span></div>
          <div className="text-[7px] mb-0.5 text-center">343 - Iguatemi - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0010-44</span></div>
          <div className="text-[7px] mb-0.5 text-center">345 - Canoas Shop - Canoas<br/><span className="text-[8px] text-gray-600">49.961.545/0016-30</span></div>
          <div className="text-[7px] mb-0.5 text-center">346 - Jaraguá do Sul - SC<br/><span className="text-[8px] text-gray-600">49.961.545/0060-03</span></div>
          <div className="text-[7px] mb-0.5 text-center">347 - Iguatemi - Caxias do Sul<br/><span className="text-[8px] text-gray-600">49.961.545/0028-73</span></div>
          <div className="text-[7px] mb-0.5 text-center">348 - Shopping Canoas<br/><span className="text-[8px] text-gray-600">49.961.545/0025-20</span></div>
          <div className="text-[7px] mb-0.5 text-center">349 - Florianópolis - SC<br/><span className="text-[8px] text-gray-600">49.961.545/0059-70</span></div>
          <div className="text-[7px] mb-0.5 text-center">351 - Blumenau - SC<br/><span className="text-[8px] text-gray-600">49.961.545/0061-94</span></div>
          <div className="text-[7px] mb-0.5 text-center">352 - Barra Shop. - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0017-10</span></div>
          <div className="text-[7px] mb-0.5 text-center">353 - Barra Shop - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0008-20</span></div>
          <div className="text-[7px] mb-0.5 text-center">355 - Passo Fundo - RS<br/><span className="text-[8px] text-gray-600">49.961.545/0063-56</span></div>
          <div className="text-[7px] mb-0.5 text-center">356 - Centro Histórico - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0031-79</span></div>
          <div className="text-[7px] mb-0.5 text-center">359 - Joinville - SC<br/><span className="text-[8px] text-gray-600">49.961.545/0062-75</span></div>
          <div className="text-[7px] mb-0.5 text-center">362 - Royal Plaza Shop. Santa Maria<br/><span className="text-[8px] text-gray-600">49.961.545/0009-00</span></div>
          <div className="text-[7px] mb-0.5 text-center">363 - Blumenau - SC<br/><span className="text-[8px] text-gray-600">49.961.545/0064-37</span></div>
          <div className="text-[7px] mb-0.5 text-center">364 - Bourbom Centeria Shop - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0035-00</span></div>
          <div className="text-[7px] mb-0.5 text-center">367 - Bourbom Wallig - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0056-27</span></div>
          <div className="text-[7px] mb-0.5 text-center">378 - Shopping Pelotas - Pelotas<br/><span className="text-[8px] text-gray-600">49.961.545/0005-87</span></div>
          <div className="text-[7px] mb-0.5 text-center">382 - Shopping Gravataí - Gravataí<br/><span className="text-[8px] text-gray-600">49.961.545/0019-82</span></div>
          <div className="text-[7px] mb-0.5 text-center">391 - Balneário Camburiu - SC<br/><span className="text-[8px] text-gray-600">49.961.545/0065-18</span></div>
          <div className="mt-2 text-[7px] text-center font-bold">31 LOJAS</div>
        </div>

        {/* Coluna F4 - Varejo Sul (Gaston) */}
        <div className="flex-1 border-r border-black p-1 align-top">
          <div className="text-[7px] mb-0.5 text-center">404 - Centro Histórico - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0043-02</span></div>
          <div className="text-[7px] mb-0.5 text-center">411 - Centro - Rio Grande<br/><span className="text-[8px] text-gray-600">49.961.545/0040-60</span></div>
          <div className="text-[7px] mb-0.5 text-center">413 - Centro - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0053-84</span></div>
          <div className="text-[7px] mb-0.5 text-center">414 - Vila Veranópolis - Cachoeirinha<br/><span className="text-[8px] text-gray-600">49.961.545/0041-40</span></div>
          <div className="text-[7px] mb-0.5 text-center">415 - Azenha - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0007-49</span></div>
          <div className="text-[7px] mb-0.5 text-center">417 - Centro - Gravataí<br/><span className="text-[8px] text-gray-600">49.961.545/0030-98</span></div>
          <div className="text-[7px] mb-0.5 text-center">419 - Iguatemi Shop. - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0027-92</span></div>
          <div className="text-[7px] mb-0.5 text-center">421 - Canoas Shop. - Canoas<br/><span className="text-[8px] text-gray-600">49.961.545/0057-08</span></div>
          <div className="text-[7px] mb-0.5 text-center">422 - Bourbom Assis Brasil Shop - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0014-78</span></div>
          <div className="text-[7px] mb-0.5 text-center">423 - Passo D'Areia - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0024-40</span></div>
          <div className="text-[7px] mb-0.5 text-center">424 - Bela Vista - Alvorada<br/><span className="text-[8px] text-gray-600">49.961.545/0058-99</span></div>
          <div className="text-[7px] mb-0.5 text-center">426 - Tristeza - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0042-21</span></div>
          <div className="text-[7px] mb-0.5 text-center">427 - Carrefour Partenon - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0004-04</span></div>
          <div className="text-[7px] mb-0.5 text-center">428 - Carrefour Higienópolis - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0046-55</span></div>
          <div className="text-[7px] mb-0.5 text-center">430 - Shopping Total - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0051-12</span></div>
          <div className="text-[7px] mb-0.5 text-center">431 - Centro - Canoas<br/><span className="text-[8px] text-gray-600">49.961.545/0048-17</span></div>
          <div className="text-[7px] mb-0.5 text-center">432 - Shopping do Vale - Cachoeirinha<br/><span className="text-[8px] text-gray-600">49.961.545/0038-45</span></div>
          <div className="text-[7px] mb-0.5 text-center">434 - Primor - Sapucaia do Sul<br/><span className="text-[8px] text-gray-600">49.961.545/0015-59</span></div>
          <div className="text-[7px] mb-0.5 text-center">436 - Centro - Viamão<br/><span className="text-[8px] text-gray-600">49.961.545/0032-50</span></div>
          <div className="text-[7px] mb-0.5 text-center">439 - Leroy Merlin Sarandi - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0011-25</span></div>
          <div className="text-[7px] mb-0.5 text-center">440 - Barra Shopping - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0013-97</span></div>
          <div className="text-[7px] mb-0.5 text-center">441 - Bourbom Wallig - POA<br/><span className="text-[8px] text-gray-600">49.961.545/0044-93</span></div>
          <div className="text-[7px] mb-0.5 text-center">444 - Shopping Pelotas - Pelotas<br/><span className="text-[8px] text-gray-600">49.961.545/0050-31</span></div>
          <div className="text-[7px] mb-0.5 text-center">445 - Shopping Gravataí - Gravataí<br/><span className="text-[8px] text-gray-600">49.961.545/0045-74</span></div>
          <div className="text-[7px] mb-0.5 text-center">446 - Rio Grande Shop - Rio Grande<br/><span className="text-[8px] text-gray-600">49.961.545/0052-01</span></div>
          <div className="text-[7px] mb-0.5 text-center">447 - Park Shopping - Canoas<br/><span className="text-[8px] text-gray-600">49.961.545/0039-26</span></div>
          <div className="text-[7px] mb-0.5 text-center">449 - Patronato - Santa Maria<br/><span className="text-[8px] text-gray-600">49.961.545/0003-15</span></div>
          <div className="border-t border-gray-300 my-1"></div>
          <div className="text-[7px] mb-0.5 text-center">300 - Matriz<br/><span className="text-[8px] text-gray-600">49.961.545/0001-53</span></div>
          <div className="text-[7px] mb-0.5 text-center">301 - CD SAPUCAIA<br/><span className="text-[8px] text-gray-600">49.961.545/0055-46</span></div>
          <div className="mt-2 text-[7px] text-center font-bold">27 LOJAS</div>
        </div>

        {/* Coluna F5 - E-commerce */}
        <div className="flex-1 border-r border-black p-1 align-top">
          <div className="text-[7px] mb-0.5 text-center">600 - Oscar Calç. Com Eletrônico<br/><span className="text-[8px] text-gray-600">54.650.901/0001-58</span></div>
          <div className="mt-2 text-[7px] text-center font-bold">8 LOJAS</div>
        </div>

        {/* Coluna F7 - OSCAR/SPORT */}
        <div className="flex-1 border-r border-black p-1 align-top">
          <div className="text-[7px] mb-0.5 text-center">002 - Jd. Paulista São José - EN C.<br/><span className="text-[8px] text-gray-600">54.237.938/0001-59</span></div>
          <div className="text-[7px] mb-0.5 text-center">005 - Centro - Jacareí RACSO<br/><span className="text-[8px] text-gray-600">72.014.681/0001-58</span></div>
          <div className="text-[7px] mb-0.5 text-center">017 - Oscar Tenis Shop. V. Sul - VSC<br/><span className="text-[8px] text-gray-600">05.574.086/0001-80</span></div>
          <div className="text-[7px] mb-0.5 text-center">022 - Oscar Tenis Centro SJC - JSC<br/><span className="text-[8px] text-gray-600">05.908.530/0001-56</span></div>
          <div className="text-[7px] mb-0.5 text-center">047 - Centro - Pinda - OPS<br/><span className="text-[8px] text-gray-600">19.853.593/0001-67</span></div>
          <div className="text-[7px] mb-0.5 text-center">052 - Outlet Bauru  - RC . Bauru - OPS<br/><span className="text-[8px] text-gray-600">61.195.652/0001-13</span></div>
          <div className="text-[7px] mb-0.5 text-center">053 - Shop. Bauru - RC . Bauru<br/><span className="text-[8px] text-gray-600">45.151.240/0001-25</span></div>
          <div className="text-[7px] mb-0.5 text-center">076 - Bruno Const. - Oscar Motorama<br/><span className="text-[8px] text-gray-600">09.332.225/0001-10</span></div>
          <div className="mt-2 text-[7px] text-center font-bold">7 LOJAS</div>
        </div>

        {/* Coluna F8 - SCARLEN/STOCK/CONST */}
        <div className="flex-1 border-r border-black p-1 align-top">
          <div className="text-[7px] mb-0.5 text-center">024 - Stock - Estoque V<br/><span className="text-[8px] text-gray-600">08.77.666/0001-48</span></div>
          <div className="text-[7px] mb-0.5 text-center">031 - MG - Constantino<br/><span className="text-[8px] text-gray-600">10.980.442/0001-03</span></div>
          <div className="text-[7px] mb-0.5 text-center">034 - Stock Brás Cubas<br/><span className="text-[8px] text-gray-600">03.972.679/0001-79</span></div>
          <div className="text-[7px] mb-0.5 text-center">035 - Stock Show Suzano<br/><span className="text-[8px] text-gray-600">04.431.428/0001-40</span></div>
          <div className="text-[7px] mb-0.5 text-center">036 - Suzano - Scarlen<br/><span className="text-[8px] text-gray-600">02.010.526/0001-88</span></div>
          <div className="text-[7px] mb-0.5 text-center">037 - Scarlen Mogi - Helena<br/><span className="text-[8px] text-gray-600">58.760.141/0001-92</span></div>
          <div className="text-[7px] mb-0.5 text-center">038 - Scarlen Mogi - Czarine<br/><span className="text-[8px] text-gray-600">67.109.132/0001-27</span></div>
          <div className="text-[7px] mb-0.5 text-center">042 - Stock -Poá - Francisco<br/><span className="text-[8px] text-gray-600">08.062.235/0001-10</span></div>
          <div className="text-[7px] mb-0.5 text-center">408 - Oxygen Mkt e Tecnologia<br/><span className="text-[8px] text-gray-600">42.676.252/0001-85</span></div>
          <div className="text-[7px] mb-0.5 text-center">093 - Matrix Online Ltda<br/><span className="text-[8px] text-gray-600">42.673.133/0001-79</span></div>
          <div className="text-[7px] mb-0.5 text-center">094 - Financial G. Financeira<br/><span className="text-[8px] text-gray-600">46.759.779/0001-24</span></div>
          <div className="text-[7px] mb-0.5 text-center">095 - Transport G. Logística Ltda<br/><span className="text-[8px] text-gray-600">46.653.947/0001-00</span></div>
          <div className="text-[7px] mb-0.5 text-center">096 - E.L. Dos Santos Contabilidade<br/><span className="text-[8px] text-gray-600">11.800.724/0001-36</span></div>
          <div className="text-[7px] mb-0.5 text-center">151 - Associação dos Locatários<br/><span className="text-[8px] text-gray-600">54.620.686/0001-42</span></div>
          <div className="border-t border-gray-300 my-1"></div>
          <div className="text-[7px] mb-0.5 font-bold">BACKOFFICE</div>
          <div className="mt-2 text-[7px] text-center font-bold">15 LOJAS</div>
        </div>

        {/* Coluna F9 - FRANQUIAS */}
        <div className="flex-1 p-1 align-top">
          <div className="text-[7px] mb-0.5 text-center">011 - Arezzo - AVS<br/><span className="text-[8px] text-gray-600">09.108.526/0001-64</span></div>
          <div className="text-[7px] mb-0.5 text-center">012 - SJC - R Const (L.Presumido)<br/><span className="text-[8px] text-gray-600">02.139.784/0001-69</span></div>
          <div className="text-[7px] mb-0.5 text-center">013 - SJC - OFS<br/><span className="text-[8px] text-gray-600">08.371.232/0001-68</span></div>
          <div className="text-[7px] mb-0.5 text-center">015 - SJC - IACR<br/><span className="text-[8px] text-gray-600">04.723.248/0001-31</span></div>
          <div className="text-[7px] mb-0.5 text-center">018 - Jacareí - ARSJ<br/><span className="text-[8px] text-gray-600">14.620.014/0001-12</span></div>
          <div className="text-[7px] mb-0.5 text-center">040 - Mogi - CCRH<br/><span className="text-[8px] text-gray-600">02.163.422/0001-03</span></div>
          <div className="text-[7px] mb-0.5 text-center">050 - SJC - BRUNO B.<br/><span className="text-[8px] text-gray-600">21.400.535/0001-20</span></div>
          <div className="text-[7px] mb-0.5 text-center">055 - Usaflex Mogi - LUCON<br/><span className="text-[8px] text-gray-600">31.795.183/0001-02</span></div>
          <div className="text-[7px] mb-0.5 text-center">056 - Usaflex Guarulhos - APC<br/><span className="text-[8px] text-gray-600">33.452.971/0001-21</span></div>
          <div className="text-[7px] mb-0.5 text-center">057 - Usaflex Suzano - USS<br/><span className="text-[8px] text-gray-600">33.930.685/0001-24</span></div>
          <div className="text-[7px] mb-0.5 text-center">059 - Usaflex TatuaPé - UST<br/><span className="text-[8px] text-gray-600">36.204.835/0001-00</span></div>
          <div className="text-[7px] mb-0.5 text-center">060 - Ana Capri Suzano- ACS<br/><span className="text-[8px] text-gray-600">36.191.797/0001-07</span></div>
          <div className="text-[7px] mb-0.5 text-center">070 - Ana Capri C.Vale - ACCV<br/><span className="text-[8px] text-gray-600">48.145.491/0001-95</span></div>
          <div className="text-[7px] mb-0.5 text-center">071 - Ana Capri V. Sul - ACVS<br/><span className="text-[8px] text-gray-600">48.277.781/0001-92</span></div>
          <div className="text-[7px] mb-0.5 text-center">073 - Ana Capri - Shopping Oriente<br/><span className="text-[8px] text-gray-600">48.145.491/0002-76</span></div>
          <div className="text-[7px] mb-0.5 text-center">121 - Centro Caçapava - BVB<br/><span className="text-[8px] text-gray-600">40.591.677/0001-66</span></div>
          <div className="text-[7px] mb-0.5 text-center">300 - ABYS-GUARARAPES - O&A<br/><span className="text-[8px] text-gray-600">37.765.702/0001-76</span></div>
          <div className="text-[7px] mb-0.5 text-center">301 - ABYS-CARUARU SH - O&A<br/><span className="text-[8px] text-gray-600">37.765.702/0002-57</span></div>
          <div className="text-[7px] mb-0.5 text-center">302 - ABYS-CARUARU CT - O&A<br/><span className="text-[8px] text-gray-600">37.765.702/0004-19</span></div>
          <div className="text-[7px] mb-0.5 text-center">303 - ABYS-PRAZERES - O&A<br/><span className="text-[8px] text-gray-600">37.765.702/0005-08</span></div>
          <div className="text-[7px] mb-0.5 text-center">304 - ABYS-TACARUNA -O&A<br/><span className="text-[8px] text-gray-600">37.765.702/0003-38</span></div>
          <div className="text-[7px] mb-0.5 text-center">DCM-RCM - Democrata - RCM (Rio Mar)<br/><span className="text-[8px] text-gray-600">59.518.424/0001-95</span></div>
          <div className="text-[7px] mb-0.5 text-center">DCM-AVB - Democrata - AVB (Tacaruna)<br/><span className="text-[8px] text-gray-600">55.713.709/0001-26</span></div>
          <div className="text-[7px] mb-0.5 text-center">DCM-WP - Democrata - WP (Recife)<br/><span className="text-[8px] text-gray-600">41.374.683/0001-24</span></div>
          <div className="text-[7px] mb-0.5 text-center">DD-001 - Diadora - BRANDS<br/><span className="text-[8px] text-gray-600">24.808.018/0001-82</span></div>
          <div className="text-[7px] mb-0.5 text-center">DD-002 - Diadora - BRANDS<br/><span className="text-[8px] text-gray-600">24.808.018/0002-63</span></div>
          <div className="text-[7px] mb-0.5 text-center">FC-001 - FestClub - FESTCARD<br/><span className="text-[8px] text-gray-600">15.674.394/0001-30</span></div>
          <div className="mt-2 text-[7px] text-center font-bold">24 UNIDADES</div>
        </div>
      </div>

      {/* Footer with company codes */}
      <div className="mt-2 text-center text-[10px] font-bold">
        Atualizado em 01/05/2025
      </div>
    </div>
  );
};

export default CentroCusto;
