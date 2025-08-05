import React from 'react';

const LojasResponsaveis = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[1200px]">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="bg-gray-100 border border-black p-3 text-center font-bold">Jully - Mateus</th>
              <th className="bg-gray-100 border border-black p-3 text-center font-bold">Milena</th>
              <th className="bg-gray-100 border border-black p-3 text-center font-bold">Debora</th>
              <th className="bg-gray-100 border border-black p-3 text-center font-bold">Milena</th>
              <th className="bg-gray-100 border border-black p-3 text-center font-bold">Taína</th>
              <th className="bg-gray-100 border border-black p-3 text-center font-bold">Jully - Mateus</th>
              <th className="bg-gray-100 border border-black p-3 text-center font-bold">Igor</th>
              <th className="bg-gray-100 border border-black p-3 text-center font-bold">Amanda</th>
              <th className="bg-gray-100 border border-black p-3 text-center font-bold">Carolina</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-3 text-center align-top">
                <span className="block font-bold mb-1">F1</span>
                <span className="block font-bold mb-1">Oscar Calçados Ltda</span>
                <span className="block italic mb-2">Jully - Mateus</span>
              </td>
              <td className="border border-black p-3 text-center align-top">
                <span className="block font-bold mb-1">F2</span>
                <span className="block font-bold mb-1">JG Calçados Ltda</span>
                <span className="block italic mb-2">Milena</span>
              </td>
              <td className="border border-black p-3 text-center align-top">
                <span className="block font-bold mb-1">F3</span>
                <span className="block font-bold mb-1">Carioca Calçados Ltda</span>
                <span className="block italic mb-2">Debora</span>
              </td>
              <td className="border border-black p-3 text-center align-top">
                <span className="block font-bold mb-1">F5</span>
                <span className="block font-bold mb-1">Oscar Calçados Comércio Eletrônico Ltda</span>
                <span className="block italic mb-2">Milena</span>
                <div className="text-left text-sm text-gray-700 border-t border-gray-300 pt-2 mt-2">
                  <div className="mb-1">Loja E-commerce</div>
                </div>
              </td>
              <td className="border border-black p-3 text-center align-top">
                <span className="block font-bold mb-1">F4</span>
                <span className="block font-bold mb-1">VarejoSul Ltda</span>
                <span className="block italic mb-2">Taína</span>
                <div className="text-left text-sm text-gray-700 border-t border-gray-300 pt-2 mt-2">
                  <div className="mb-1">Paquetá</div>
                  <div className="mb-1">Gaston</div>
                  <div className="mb-1"><strong>TestClub - FESTCARD</strong> - CNPJ: 15.674.394/0001-</div>
                  <div className="mb-1"><strong>300 - Matriz</strong> - CNPJ: 49.961.545/0001-</div>
                  <div className="mb-1"><strong>301 - CD SAPUCAIA</strong> - CNPJ: 49.961.545/0005-</div>
                </div>
              </td>
              <td className="border border-black p-3 text-center align-top">
                <span className="block font-bold mb-1">F8</span>
                <span className="block font-bold mb-1">SIMPLES SCARLEN/STOCK/CONST</span>
                <span className="block italic mb-2">Jully - Mateus</span>
                <div className="text-left text-sm text-gray-700 border-t border-gray-300 pt-2 mt-2">
                  <div className="mb-1"><strong>300 - ABYS GUARARAPES - O&A</strong> - CNPJ: 37.765.702/0001-76</div>
                  <div className="mb-1"><strong>Diadora - BRANDS</strong> - CNPJ: 24.808.018/0001-82</div>
                </div>
              </td>
              <td className="border border-black p-3 text-center align-top">
                <span className="block font-bold mb-1">F7</span>
                <span className="block font-bold mb-1">Democrata - RCM (Rio Mar)</span>
                <span className="block italic mb-2">Igor</span>
                <div className="text-left text-sm text-gray-700 border-t border-gray-300 pt-2 mt-2">
                  <div className="mb-1">CNPJ: 59.518.424/0001-95</div>
                </div>
              </td>
              <td className="border border-black p-3 text-center align-top">
                <span className="block font-bold mb-1">F7</span>
                <span className="block font-bold mb-1">SIMPLES OSCAR/SPORT</span>
                <span className="block italic mb-2">Amanda</span>
              </td>
              <td className="border border-black p-3 text-center align-top">
                <span className="block font-bold mb-1">F9</span>
                <span className="block font-bold mb-1">FRANQUIAS</span>
                <span className="block italic mb-2">Carolina</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LojasResponsaveis;