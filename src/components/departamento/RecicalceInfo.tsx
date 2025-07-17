import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Recycle, Users, Leaf, MapPin, Target } from 'lucide-react';

const RecicalceInfo = () => {
  return (
    <div className="space-y-8">
      {/* Quem Somos */}
      <Card className="border-l-4 border-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Heart className="text-green-600" size={24} />
            Quem Somos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed text-gray-700">
            Somos um Centro de Convivência que oferece atendimento a pessoa com deficiência e busca 
            transformar o descarte do calçado em benefícios sociais e ambientais.
          </p>
        </CardContent>
      </Card>

      {/* Nossa História */}
      <Card className="border-l-4 border-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <Users className="text-blue-600" size={24} />
            Nossa História
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            A Recicalce nasceu de uma inquietação do <strong>GRUPO OSCAR</strong> preocupado com as questões sociais 
            envolvendo pessoas com deficiência e a destinação final dos milhares de pares de calçados 
            descartados anualmente.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Mais do que isso, o projeto responde a uma tendência global: <strong>O envolvimento das empresas 
            nas questões socioambientais</strong>.
          </p>
        </CardContent>
      </Card>

      {/* Nossa Missão */}
      <Card className="border-l-4 border-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Target className="text-purple-600" size={24} />
            Nossa Missão
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium text-gray-700">
            Promover a autonomia através da inclusão social das pessoas com deficiência e ser modelo 
            na preservação do meio ambiente.
          </p>
        </CardContent>
      </Card>

      {/* Impacto Social e Ambiental */}
      <Card className="border-l-4 border-emerald-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-emerald-700">
            <Recycle className="text-emerald-600" size={24} />
            Impacto Social e Ambiental
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 flex items-center gap-2">
                <Heart size={18} />
                Social
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Atendimento a pessoas com deficiência</li>
                <li>• Promoção da autonomia e inclusão social</li>
                <li>• Centro de convivência especializado</li>
                <li>• Desenvolvimento de habilidades e capacidades</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-green-700 flex items-center gap-2">
                <Leaf size={18} />
                Ambiental
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Reciclagem de milhares de pares de calçados</li>
                <li>• Redução do descarte inadequado</li>
                <li>• Preservação do meio ambiente</li>
                <li>• Economia circular sustentável</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Localização */}
      <Card className="border-l-4 border-orange-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-700">
            <MapPin className="text-orange-600" size={24} />
            Localização
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="font-medium text-orange-800 mb-2">Centro de Convivência Recicalce</p>
            <p className="text-gray-700">São José dos Campos - SP</p>
            <p className="text-sm text-gray-600 mt-2">
              Conectada ao Grupo Oscar, transformando vidas e preservando o meio ambiente.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Site Oficial */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              Para mais informações sobre nossos projetos e atividades:
            </p>
            <a 
              href="https://recicalce.org.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Leaf size={20} />
              Visite nosso site oficial
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecicalceInfo;