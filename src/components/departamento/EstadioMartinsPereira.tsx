import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, Calendar, Trophy } from 'lucide-react';
// Using direct public paths for the uploaded images
const mascoteImageFull = '/lovable-uploads/1d0d2eba-6756-49b1-988c-d9f619866450.png';
const estadioSetoresImage = '/lovable-uploads/0030c477-c17b-41a8-a255-1d9e10f33d3b.png';
const estadioAereoImage = '/lovable-uploads/d0f82617-3645-48bc-8073-e25f0d9c5dc1.png';

const EstadioMartinsPereira = () => {
  return (
    <div className="space-y-6">
      {/* Header com mascote */}
      <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl text-blue-900">
            <img 
              src={mascoteImageFull} 
              alt="Águia do Vale - Mascote do São José EC" 
              className="h-16 w-16 object-contain"
            />
            Estádio Municipal Martins Pereira
          </CardTitle>
          <p className="text-blue-700 font-medium">
            "Estádio do Vale do Paraíba" - O orgulho da comunidade joseense
          </p>
        </CardHeader>
      </Card>

      {/* História do Estádio */}
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-900">História</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-gray-700">
            <p>
              O estádio no final dos anos 1960, localizado na rua Antonio Saes, já era denominado 
              Estádio Martins Pereira desde 15 de novembro de 1942, com capacidade máxima de apenas 5.000 pessoas.
            </p>
            
            <p>
              A construção do atual estádio começou em 1968, durante um período em que o time de futebol 
              da cidade estava desativado. O jogo inaugural aconteceu em 15 de março de 1970, 
              marcando o início de uma nova era para o futebol joseense.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 className="font-semibold text-gray-800 mb-2">Dados Curiosos:</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Denominação oficial: 15 de novembro de 1942</li>
                <li>• Início da construção: 1968</li>
                <li>• Capacidade original: 5.000 pessoas (estádio anterior)</li>
                <li>• Recorde não oficial: 25.000 pessoas (janeiro de 2007, Copinha)</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Informações Básicas */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <MapPin className="h-5 w-5" />
              Informações Básicas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Apelidos</h4>
              <ul className="text-gray-600 space-y-1">
                <li>• "Martins Pereira" - Nome carinhoso da comunidade</li>
                <li>• "Estádio do Vale do Paraíba" - Por sua importância regional</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <Users className="h-4 w-4" />
                Capacidade
              </h4>
              <p className="text-gray-600">
                <strong>Oficial 2024:</strong> 12.234 espectadores<br />
                <strong>Anos 1990:</strong> Até 19.000 pessoas (antes das regulamentações)
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Localização
              </h4>
              <p className="text-gray-600">
                Rua Ana Gonçalves da Cunha, 340<br />
                Jardim Jussara - São José dos Campos, SP
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Águia do Vale - Mascote Oficial */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">Águia do Vale - Mascote Oficial</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <img 
              src={mascoteImageFull} 
              alt="Águia do Vale - Mascote oficial do São José Esporte Clube" 
              className="mx-auto h-64 w-auto object-contain mb-4"
            />
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-900 font-medium">
                <strong>Águia do Vale</strong> é o mascote oficial do São José Esporte Clube, 
                representando a força, garra e determinação do time joseense.
              </p>
              <p className="text-blue-700 text-sm mt-2">
                Símbolo de orgulho para toda a torcida e comunidade de São José dos Campos.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vista Aérea */}
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-900">Vista Aérea</CardTitle>
          </CardHeader>
          <CardContent>
            <img 
              src={estadioAereoImage} 
              alt="Vista aérea do Estádio Martins Pereira" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-gray-600 text-sm mt-2">
              O Estádio Martins Pereira com sua capacidade atual de 12.234 espectadores
            </p>
          </CardContent>
        </Card>

        {/* Eventos Marcantes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <Trophy className="h-5 w-5" />
              Eventos Marcantes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="bg-blue-50 p-3 rounded-lg">
              <h5 className="font-semibold text-blue-800 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Inauguração
              </h5>
              <p className="text-blue-700 text-sm mt-1">
                15 de Março de 1970 - Atlético Mineiro 1x0 Internacional<br />
                <em>Primeiro gol: Dadá Maravilha (Atlético-MG)</em>
              </p>
            </div>

            <div className="bg-green-50 p-3 rounded-lg">
              <h5 className="font-semibold text-green-800">Primeiro jogo do São José</h5>
              <p className="text-green-700 text-sm mt-1">
                22 de março de 1970 - São José 0x1 Nacional
              </p>
            </div>

            <div className="bg-yellow-50 p-3 rounded-lg">
              <h5 className="font-semibold text-yellow-800">Maior goleada</h5>
              <p className="text-yellow-700 text-sm mt-1">
                11 de agosto de 2019 - São José 10x0 Matonense
              </p>
            </div>

            <div className="bg-red-50 p-3 rounded-lg">
              <h5 className="font-semibold text-red-800">Recorde de público</h5>
              <p className="text-red-700 text-sm mt-1">
                11 de Maio de 1997 - 19.000 pessoas<br />
                São José 1x1 São Paulo
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Setores e Acessos - Imagem Completa */}
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-900">Setores e Acessos</CardTitle>
        </CardHeader>
        <CardContent>
          <img 
            src="/lovable-uploads/b3d313a1-b674-4951-8a6a-e07395b9abb8.png" 
            alt="Mapa completo de setores e acessos do Estádio Martins Pereira" 
            className="w-full h-auto object-contain rounded-lg"
          />
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Setores disponíveis:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• <strong>Setor Polipet:</strong> Portão 7 (Cadeira) e Portão 9 (Entrada Sócio)</li>
                <li>• <strong>Setor Pontz e Setor 3:</strong> Portão Principal</li>
                <li>• <strong>Setor 5:</strong> Portão 1 (Visitante)</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-gray-800 mb-2">Informações dos Acessos:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Entrada Sócio Bronze - Torcida do São José</li>
                <li>• Entrada de Sócio Ouro/Prata e Patrocinadores</li>
                <li>• Portão Principal para setores gerais</li>
                <li>• Acesso específico para visitantes</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Hino Oficial */}
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-900">Hino Oficial do São José Esporte Clube</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-blue-900 font-medium text-center space-y-2">
              <p>Vai, pelo céu do Brasil,</p>
              <p>Vai, nesse azul de anil,</p>
              <p><strong>ÁGUIA DO VALE</strong> voou…</p>
              <p>Buscando com suas garras mais um gol</p>
              <p className="text-lg font-bold">(Goooool…!)</p>
              <br />
              <p>Vai, Glorioso esquadrão,</p>
              <p>Vai, o grande Campeão</p>
              <p>Mostrar a todo Brasil</p>
              <p>O que é</p>
              <p>A sua força e garra</p>
              <br />
              <p>Oh! Grande São José</p>
              <p>Você sempre será</p>
              <p>Orgulho do País</p>
              <p>Contigo São José</p>
              <p>Me sinto tão feliz</p>
              <br />
              <p>Nasceu para vitórias</p>
              <p>És nato campeão</p>
              <p>Orgulho da cidade</p>
              <p>E de toda Nação</p>
              <br />
              <p><strong>ÁGUIA DO VALE</strong> eu sei,</p>
              <p>Terás vitórias mil</p>
              <p>Irás sobrevoar</p>
              <p>Os Campos do Brasil</p>
              <p>Não há quem te aguente,</p>
              <p>És forte, és varonil</p>
              <p>Campeão do meu Brasil…</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EstadioMartinsPereira;
