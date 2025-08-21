import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, MapPin, Users, Calendar, ExternalLink, Flag, Star } from 'lucide-react';

const SaoJoseEsporteClubInfo: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-yellow-500 text-white rounded-t-lg">
          <CardTitle className="text-3xl font-bold flex items-center justify-center gap-2">
            <Trophy className="w-8 h-8" />
            São José Esporte Club
          </CardTitle>
          <p className="text-lg">Águia do Vale - Tradição e Paixão</p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4">
              O São José Esporte Club, carinhosamente conhecido como "Águia do Vale", 
              é um símbolo de tradição e paixão esportiva na região do Vale do Paraíba.
            </p>
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
            </div>
            <p className="text-sm text-muted-foreground">Cores oficiais: Azul, Amarelo e Branco</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="text-blue-600" />
            Nossa História
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Fundado em <strong>1933</strong>, o São José Esporte Club é uma das instituições 
              esportivas mais tradicionais do Vale do Paraíba, representando com orgulho 
              a cidade de São José dos Campos há mais de 90 anos.
            </p>
            <p className="text-muted-foreground">
              A Águia do Vale tem uma rica história no futebol paulista, passando por 
              diversas categorias e sempre mantendo viva a paixão pelo esporte na região.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flag className="text-yellow-500" />
              Características do Clube
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-600" />
                <span><strong>Apelido:</strong> Águia do Vale</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-600" />
                <span><strong>Fundação:</strong> 1933</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-600" />
                <span><strong>Estádio:</strong> Benito Castellano</span>
              </li>
              <li className="flex items-center gap-2">
                <Star className="w-4 h-4 text-blue-600" />
                <span><strong>Categorias:</strong> Profissional e Base</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="text-blue-600" />
              Localização
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                <strong>São José dos Campos - SP</strong>
              </p>
              <p className="text-sm text-muted-foreground">
                Localizado no coração do Vale do Paraíba, o clube representa 
                uma das principais cidades da região, sendo um símbolo de 
                identidade local e orgulho joseense.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="text-yellow-500" />
            Sócio Águia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              O programa <strong>"Sócio Águia"</strong> oferece aos torcedores a 
              oportunidade de fazer parte da família joseense, com benefícios 
              exclusivos e acesso privilegiado aos jogos na Arena.
            </p>
            <p className="text-sm text-muted-foreground italic">
              "Melhor do que ser Joseense é ser Sócio Águia"
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-blue-50 to-yellow-50 dark:from-blue-950/20 dark:to-yellow-950/20">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold mb-4">
            Conheça mais sobre a Águia do Vale
          </h3>
          <a
            href="https://saojoseec.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            Visitar Site Oficial
          </a>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaoJoseEsporteClubInfo;