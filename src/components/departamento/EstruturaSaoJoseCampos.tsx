import React from 'react';
import { Users, User, Truck, Package } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EstruturaSaoJoseCampos: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="w-5 h-5" />
          Estrutura do Departamento - CD/Operações (São José dos Campos)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Diretor */}
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-center gap-3">
              <User className="w-6 h-6 text-blue-600" />
              <div>
                <h3 className="font-semibold text-lg text-blue-800">Márcio Sampaio</h3>
                <p className="text-blue-600">Diretor</p>
              </div>
            </div>
          </div>

          {/* Gerente */}
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 ml-6">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-green-600" />
              <div>
                <h3 className="font-semibold text-lg text-green-800">Cleber Silva</h3>
                <p className="text-green-600">Gerente</p>
              </div>
            </div>
          </div>

          {/* Gestor de Estoque */}
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 ml-12">
            <div className="flex items-center gap-3">
              <Package className="w-5 h-5 text-yellow-600" />
              <div>
                <h3 className="font-semibold text-lg text-yellow-800">Daniel</h3>
                <p className="text-yellow-600">Gestor de Estoque</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 ml-18">
            {/* Motoristas */}
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <Truck className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">Motoristas</h4>
              </div>
              <ul className="space-y-1 text-purple-700">
                <li>• Sergio Rosa</li>
                <li>• Sergio Assis</li>
                <li>• Andre Luis</li>
              </ul>
            </div>

            {/* Estoquistas */}
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <Package className="w-5 h-5 text-orange-600" />
                <h4 className="font-semibold text-orange-800">Estoquistas</h4>
              </div>
              <ul className="space-y-1 text-orange-700">
                <li>• Renan</li>
                <li>• Felipe</li>
                <li>• Marcelo</li>
                <li>• Matheus</li>
                <li>• Patrick Julio</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EstruturaSaoJoseCampos;