import React from 'react';
import { User, Crown, Shield, Star, FileText, Calculator, Users, Package, TrendingUp, Building2, Truck, Wrench } from 'lucide-react';

interface EstruturaDepartamentoProps {
  departamento: string;
}

const EstruturaDepartamento: React.FC<EstruturaDepartamentoProps> = ({
  departamento
}) => {
  if (departamento.toLowerCase().includes('financeiro')) {
    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Esse é o time do Financeiro!</h3>
        
        {/* Diretor */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600 text-center min-w-[200px]">
            <Crown className="mx-auto mb-2 text-blue-600" size={24} />
            <h4 className="text-gray-800 font-semibold">Diretor</h4>
            <p className="text-sm text-gray-600 font-bold">Márcio Sampaio</p>
          </div>
        </div>

        {/* Linha conectora */}
        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Gerente */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600 text-center min-w-[200px]">
            <Shield className="mx-auto mb-2 text-green-600" size={24} />
            <h4 className="font-semibold text-gray-800">Gerente Financeiro</h4>
            <p className="text-gray-600 font-bold text-base">Flávia Araújo</p>
          </div>
        </div>

        {/* Linha conectora */}
        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Analista */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600 text-center min-w-[200px]">
            <Star className="mx-auto mb-2 text-purple-600" size={20} />
            <h4 className="font-semibold text-gray-800">Analista</h4>
            <p className="text-gray-600 text-base font-semibold">Tainá Leal</p>
          </div>
        </div>

        {/* Linha conectora */}
        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Assistentes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Assistentes</h4>
            <p className="text-sm text-gray-600 font-semibold">Igor Jesuíno</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Assistentes</h4>
            <p className="text-sm text-gray-600 font-semibold">Jully Silva</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Assistentes</h4>
            <p className="text-sm text-gray-600 font-semibold">Milena Oliveira</p>
          </div>
        </div>

        {/* Linha conectora para auxiliares */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
            <div className="w-16 h-px bg-gray-300"></div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="w-32 h-px bg-gray-300"></div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="w-16 h-px bg-gray-300"></div>
          </div>
        </div>

        {/* Auxiliares */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares</h4>
            <p className="text-sm text-gray-600 font-semibold">Amanda Silva</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares</h4>
            <p className="text-sm text-gray-600 font-semibold">Carolina Lima</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares</h4>
            <p className="text-sm text-gray-600 font-semibold">Mateus Garrez</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares</h4>
            <p className="text-sm text-gray-600 font-semibold">Sabrina Souza</p>
          </div>
        </div>
      </div>
    );
  }

  if (departamento.toLowerCase().includes('e-commerce') || departamento.toLowerCase().includes('ecommerce')) {
    return (
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Esse é o time do E-commerce!</h3>
        
        {/* Diretor */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600 text-center min-w-[200px]">
            <Crown className="mx-auto mb-2 text-purple-600" size={24} />
            <h4 className="text-gray-800 font-semibold">Diretor (CMO)</h4>
            <p className="text-sm text-gray-600 font-bold">Renan</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Nível 2 - Coordenadores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600 text-center">
            <Shield className="mx-auto mb-2 text-green-600" size={20} />
            <h4 className="font-semibold text-gray-800">CX</h4>
            <p className="text-sm text-gray-600 font-semibold">Helen</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600 text-center">
            <Shield className="mx-auto mb-2 text-green-600" size={20} />
            <h4 className="font-semibold text-gray-800">Coord. SAC</h4>
            <p className="text-sm text-gray-600 font-semibold">Viviane</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600 text-center">
            <Shield className="mx-auto mb-2 text-green-600" size={20} />
            <h4 className="font-semibold text-gray-800">PO</h4>
            <p className="text-sm text-gray-600 font-semibold">Luís Nonaka</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Nível 3 - Coordenadores Operacionais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600 text-center">
            <Star className="mx-auto mb-2 text-blue-600" size={20} />
            <h4 className="font-semibold text-gray-800">Coord. 1P</h4>
            <p className="text-sm text-gray-600 font-semibold">Andrea</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600 text-center">
            <Star className="mx-auto mb-2 text-blue-600" size={20} />
            <h4 className="font-semibold text-gray-800">Coord. Operações</h4>
            <p className="text-sm text-gray-600 font-semibold">Eduardo</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600 text-center">
            <Star className="mx-auto mb-2 text-blue-600" size={20} />
            <h4 className="font-semibold text-gray-800">Coord. Cadastro</h4>
            <p className="text-sm text-gray-600 font-semibold">Tamires</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Assistentes e Analistas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Consultora Comercial</h4>
            <p className="text-sm text-gray-600 font-semibold">Flávia</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Analista 3P</h4>
            <p className="text-sm text-gray-600 font-semibold">Priscila</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Coord. 3.0</h4>
            <p className="text-sm text-gray-600 font-semibold">Carolina</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Equipe</h4>
            <p className="text-sm text-gray-600 font-semibold">Bianca & Thaís</p>
          </div>
        </div>
      </div>
    );
  }

  if (departamento.toLowerCase().includes('fiscal')) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Esse é o time do Fiscal!</h3>
        
        {/* Diretor */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600 text-center min-w-[200px]">
            <Crown className="mx-auto mb-2 text-blue-600" size={24} />
            <h4 className="text-gray-800 font-semibold">Diretor</h4>
            <p className="text-sm text-gray-600 font-bold">Márcio Sampaio</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Gestor */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600 text-center min-w-[200px]">
            <Shield className="mx-auto mb-2 text-green-600" size={24} />
            <h4 className="font-semibold text-gray-800">Gestor Contábil/Fiscal</h4>
            <p className="text-gray-600 font-bold text-base">Edson</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Analista */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600 text-center min-w-[200px]">
            <Star className="mx-auto mb-2 text-purple-600" size={20} />
            <h4 className="font-semibold text-gray-800">Analista Fiscal</h4>
            <p className="text-gray-600 text-base font-semibold">Aline</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Auxiliares Fiscais */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares Fiscais</h4>
            <p className="text-sm text-gray-600 font-semibold">Gustavo Luiz</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares Fiscais</h4>
            <p className="text-sm text-gray-600 font-semibold">Juliana Almeida</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares Fiscais</h4>
            <p className="text-sm text-gray-600 font-semibold">Cristiane</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares Fiscais</h4>
            <p className="text-sm text-gray-600 font-semibold">Bianca</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares Fiscais</h4>
            <p className="text-sm text-gray-600 font-semibold">Maria Souza</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares Fiscais</h4>
            <p className="text-sm text-gray-600 font-semibold">Luiz Otávio</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares Fiscais</h4>
            <p className="text-sm text-gray-600 font-semibold">Barbara</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliares Fiscais</h4>
            <p className="text-sm text-gray-600 font-semibold">Marcela</p>
          </div>
        </div>
      </div>
    );
  }

  if (departamento.toLowerCase().includes('controladoria')) {
    return (
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Esse é o time da Controladoria!</h3>
        
        {/* Diretor */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600 text-center min-w-[200px]">
            <Crown className="mx-auto mb-2 text-blue-600" size={24} />
            <h4 className="text-gray-800 font-semibold">Diretor</h4>
            <p className="text-sm text-gray-600 font-bold">Márcio Sampaio</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Coordenadora */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600 text-center min-w-[200px]">
            <Shield className="mx-auto mb-2 text-green-600" size={24} />
            <h4 className="font-semibold text-gray-800">Coordenadora</h4>
            <p className="text-gray-600 font-bold text-base">Vilma</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Analista */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600 text-center min-w-[200px]">
            <Star className="mx-auto mb-2 text-purple-600" size={20} />
            <h4 className="font-semibold text-gray-800">Analista Administrativa</h4>
            <p className="text-gray-600 text-base font-semibold">Alexandra Soares</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Assistentes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Assistente Administrativo</h4>
            <p className="text-sm text-gray-600 font-semibold">Laise</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Assistente Administrativo</h4>
            <p className="text-sm text-gray-600 font-semibold">Kelly Braga</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Assistente Administrativo</h4>
            <p className="text-sm text-gray-600 font-semibold">Giovanna Gomes</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Assistente Administrativo</h4>
            <p className="text-sm text-gray-600 font-semibold">Alica Carolina</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <FileText className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Assistente Administrativo</h4>
            <p className="text-sm text-gray-600 font-semibold">Luana Vicente</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Auxiliares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Auxiliar ADM</h4>
            <p className="text-sm text-gray-600 font-semibold">Deborah Santos</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Aux Adm</h4>
            <p className="text-sm text-gray-600 font-semibold">Claudia Rodrigues</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Calculator className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Aux. Administrativo</h4>
            <p className="text-sm text-gray-600 font-semibold">Patrícia Donda</p>
          </div>
        </div>
      </div>
    );
  }

  if (departamento.toLowerCase().includes('são josé dos campos') || departamento.toLowerCase().includes('cd') || departamento.toLowerCase().includes('operações')) {
    return (
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Esse é o time do CD/Operações - São José dos Campos!</h3>
        
        {/* Diretor */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600 text-center min-w-[200px]">
            <Crown className="mx-auto mb-2 text-blue-600" size={24} />
            <h4 className="text-gray-800 font-semibold">Diretor</h4>
            <p className="text-sm text-gray-600 font-bold">Márcio</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Gerente */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-green-600 text-center min-w-[200px]">
            <Shield className="mx-auto mb-2 text-green-600" size={24} />
            <h4 className="font-semibold text-gray-800">Gerente</h4>
            <p className="text-gray-600 font-bold text-base">Cleber</p>
            <p className="text-xs text-gray-500">cleber.silva@grupooscar.com.br</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Gestor de Estoque */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600 text-center min-w-[200px]">
            <Package className="mx-auto mb-2 text-purple-600" size={20} />
            <h4 className="font-semibold text-gray-800">Gestor de Estoque</h4>
            <p className="text-gray-600 text-base font-semibold">Daniel</p>
            <p className="text-xs text-gray-500">cd@grupooscar.com.br</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Estoquistas */}
        <h4 className="text-center font-semibold text-gray-700 mb-4">Estoquistas</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <Package className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Estoquista</h4>
            <p className="text-sm text-gray-600 font-semibold">Renan</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <Package className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Estoquista</h4>
            <p className="text-sm text-gray-600 font-semibold">Felipe</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <Package className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Estoquista</h4>
            <p className="text-sm text-gray-600 font-semibold">Marcelo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <Package className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Estoquista</h4>
            <p className="text-sm text-gray-600 font-semibold">Matheus</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center">
            <Package className="mx-auto mb-2 text-orange-600" size={20} />
            <h4 className="font-semibold text-gray-800">Estoquista</h4>
            <p className="text-sm text-gray-600 font-semibold">Patrick Julio</p>
          </div>
        </div>

        {/* Motoristas */}
        <h4 className="text-center font-semibold text-gray-700 mb-4">Motoristas</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Truck className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Motorista</h4>
            <p className="text-sm text-gray-600 font-semibold">Sergio Rosa</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Truck className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Motorista</h4>
            <p className="text-sm text-gray-600 font-semibold">Sergio Assis</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-teal-600 text-center">
            <Truck className="mx-auto mb-2 text-teal-600" size={20} />
            <h4 className="font-semibold text-gray-800">Motorista</h4>
            <p className="text-sm text-gray-600 font-semibold">Andre Luis</p>
          </div>
        </div>
      </div>
    );
  }

  if (departamento.toLowerCase().includes('defeito')) {
    return (
      <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-6 text-center">Esse é o time do Defeito!</h3>
        
        {/* Gerente da Área */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-red-600 text-center min-w-[200px]">
            <Shield className="mx-auto mb-2 text-red-600" size={24} />
            <h4 className="text-gray-800 font-semibold">Gerente da Área</h4>
            <p className="text-sm text-gray-600 font-bold">Cleber</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Gestor de Estoque */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-orange-600 text-center min-w-[200px]">
            <Package className="mx-auto mb-2 text-orange-600" size={24} />
            <h4 className="font-semibold text-gray-800">Gestor de Estoque</h4>
            <p className="text-gray-600 font-bold text-base">Hilquias</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <div className="w-px h-8 bg-gray-300"></div>
        </div>

        {/* Equipe - RAMAL 4114 */}
        <div className="bg-white/60 rounded-lg p-4 mb-6">
          <p className="text-center font-semibold text-gray-700 mb-4">
            Equipe - RAMAL 4114
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600 text-center">
            <Wrench className="mx-auto mb-2 text-purple-600" size={20} />
            <h4 className="font-semibold text-gray-800">Equipe Defeito</h4>
            <p className="text-sm text-gray-600 font-semibold">Hilquias</p>
            <p className="text-xs text-gray-500">hilquias.rabello@grupooscar.com.br</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600 text-center">
            <Wrench className="mx-auto mb-2 text-purple-600" size={20} />
            <h4 className="font-semibold text-gray-800">Equipe Defeito</h4>
            <p className="text-sm text-gray-600 font-semibold">Peterson</p>
            <p className="text-xs text-gray-500">peterson.aguiar@grupooscar.com</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-4 border-l-4 border-purple-600 text-center">
            <Wrench className="mx-auto mb-2 text-purple-600" size={20} />
            <h4 className="font-semibold text-gray-800">Equipe Defeito</h4>
            <p className="text-sm text-gray-600 font-semibold">Romulo</p>
            <p className="text-xs text-gray-500">romulo.moura@grupooscar.com</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <User className="mx-auto mb-4 text-gray-400" size={48} />
      <p className="text-gray-600">Estrutura organizacional não disponível para este departamento.</p>
    </div>
  );
};

export default EstruturaDepartamento;
