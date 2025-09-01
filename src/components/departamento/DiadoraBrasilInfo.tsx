import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, MapPin, Calendar, Trophy, Target, Users } from 'lucide-react';

export const DiadoraBrasilInfo: React.FC = () => {
  return (
    <div className="space-y-6 p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Diadora Brasil
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Tradição italiana no esporte brasileiro
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Missão */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Target className="h-5 w-5" />
              Missão
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Fornecer produtos esportivos de alta qualidade com design italiano, 
              especializando-se em calçados e vestuário para futebol e lifestyle, 
              mantendo a tradição e inovação da marca Diadora no mercado brasileiro.
            </p>
          </CardContent>
        </Card>

        {/* História */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Calendar className="h-5 w-5" />
              História
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Fundada na Itália em 1948, a Diadora chegou ao Brasil trazendo 
              sua herança italiana de qualidade e design. A marca é reconhecida 
              mundialmente por seus produtos esportivos, especialmente no futebol, 
              sendo escolha de atletas profissionais.
            </p>
          </CardContent>
        </Card>

        {/* Produtos Principais */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Trophy className="h-5 w-5" />
              Produtos Principais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <strong>Chuteiras:</strong> Campo, Society e Futsal</li>
              <li>• <strong>Tênis:</strong> Lifestyle e Performance</li>
              <li>• <strong>Vestuário:</strong> Camisas, Shorts e Agasalhos</li>
              <li>• <strong>Acessórios:</strong> Meias, Caneleiras e Bolsas</li>
            </ul>
          </CardContent>
        </Card>

        {/* Público-Alvo */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Users className="h-5 w-5" />
              Público-Alvo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <strong>Atletas Profissionais:</strong> Futebolistas de alto nível</li>
              <li>• <strong>Amadores:</strong> Praticantes de futebol recreativo</li>
              <li>• <strong>Lifestyle:</strong> Consumidores de moda esportiva</li>
              <li>• <strong>Infantil:</strong> Crianças e adolescentes esportistas</li>
            </ul>
          </CardContent>
        </Card>

        {/* Diferenciais */}
        <Card className="hover:shadow-lg transition-shadow md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <Trophy className="h-5 w-5" />
              Diferenciais da Marca
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Design Italiano
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tradição e elegância italiana em cada produto
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Qualidade Premium
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Materiais de alta qualidade e tecnologia avançada
                </p>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:text-gray-800 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Tradição no Futebol
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Décadas de experiência no esporte mais popular do Brasil
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Localização e Contato */}
        <Card className="hover:shadow-lg transition-shadow md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-primary">
              <MapPin className="h-5 w-5" />
              Informações Comerciais
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Canais de Venda
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Loja Online Oficial</li>
                  <li>• Lojas Físicas Autorizadas</li>
                  <li>• Marketplaces Parceiros</li>
                  <li>• Distribuição Nacional</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Facilidades de Compra
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Parcelamento em até 10x sem juros</li>
                  <li>• Troca gratuita em 30 dias</li>
                  <li>• Frete grátis para todo o Brasil</li>
                  <li>• Outlet com descontos especiais</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Link Oficial */}
        <Card className="hover:shadow-lg transition-shadow md:col-span-2 border-primary/20">
          <CardContent className="pt-6">
            <div className="text-center">
              <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Conheça mais sobre os produtos e novidades da Diadora Brasil
              </p>
              <a
                href="https://www.diadorabrasil.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <Globe className="h-4 w-4" />
                Visitar Site Oficial
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};