import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import VideoPlayer from '@/components/VideoPlayer';
import { useAnalytics } from '@/hooks/useAnalytics';
import { 
  CreditCard, 
  HeadphonesIcon, 
  UserCheck, 
  Scale, 
  Building2,
  FileText,
  PlayCircle,
  Download,
  ChevronDown,
  Star,
  ShoppingCart,
  Phone,
  CreditCard as CardIcon,
  TrendingUp,
  Store,
  Computer,
  Globe
} from 'lucide-react';

const Festcard = () => {
  const { trackPDFDownload } = useAnalytics();
  const [pilarSelecionado, setPilarSelecionado] = useState('sac');

  const handlePDFDownload = (url: string, title: string) => {
    trackPDFDownload(title, url, 'Festcard');
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Header do Festcard */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <CreditCard className="text-purple-600" size={28} />
          Festcard - Soluções em Crédito
        </h2>
        <p className="text-muted-foreground">
          O Cartão Festcard nasceu para trazer solução de crédito fácil de maneira prática e econômica aos clientes do Grupo OSCAR.
        </p>
      </div>

      {/* Pilares do Festcard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="text-purple-600" size={20} />
            Pilares do Festcard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={pilarSelecionado} onValueChange={setPilarSelecionado}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="sac">SAC</TabsTrigger>
              <TabsTrigger value="sac-adm">SAC ADM</TabsTrigger>
              <TabsTrigger value="mesa-credito">Mesa de Crédito</TabsTrigger>
              <TabsTrigger value="juridico">Jurídico</TabsTrigger>
              <TabsTrigger value="ra">Departamento RA</TabsTrigger>
            </TabsList>

            <TabsContent value="sac" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HeadphonesIcon className="text-blue-600" size={24} />
                  <h3 className="text-lg font-semibold">SAC - Serviço de Atendimento ao Cliente</h3>
                </div>
                <p className="text-muted-foreground">
                  Central de atendimento especializada em resolver questões dos portadores do Cartão Festcard, 
                  oferecendo suporte completo para dúvidas, solicitações e problemas relacionados ao cartão.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Principais Atividades</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Atendimento ao cliente</li>
                      <li>• Esclarecimento de dúvidas</li>
                      <li>• Suporte técnico</li>
                      <li>• Resolução de problemas</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Canais de Contato</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Central telefônica</li>
                      <li>• Atendimento digital</li>
                      <li>• Chat online</li>
                      <li>• E-mail suporte</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sac-adm" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <UserCheck className="text-green-600" size={24} />
                  <h3 className="text-lg font-semibold">SAC ADM - Administração do SAC</h3>
                </div>
                <p className="text-muted-foreground">
                  Área responsável pela gestão e supervisão das operações do SAC, garantindo qualidade 
                  no atendimento e eficiência nos processos.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Responsabilidades</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Supervisão da equipe</li>
                      <li>• Controle de qualidade</li>
                      <li>• Métricas de atendimento</li>
                      <li>• Treinamento da equipe</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Indicadores</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Tempo médio de atendimento</li>
                      <li>• Satisfação do cliente</li>
                      <li>• Taxa de resolução</li>
                      <li>• Volume de chamadas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mesa-credito" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star className="text-yellow-600" size={24} />
                  <h3 className="text-lg font-semibold">Mesa de Crédito</h3>
                </div>
                <p className="text-muted-foreground">
                  Responsável pela análise e aprovação de crédito, avaliando o perfil dos clientes 
                  e definindo limites adequados para cada portador.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Análises Realizadas</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Análise de crédito</li>
                      <li>• Avaliação de risco</li>
                      <li>• Definição de limites</li>
                      <li>• Revisão de carteira</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Critérios</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Score de crédito</li>
                      <li>• Histórico financeiro</li>
                      <li>• Capacidade de pagamento</li>
                      <li>• Relacionamento bancário</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="juridico" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Scale className="text-red-600" size={24} />
                  <h3 className="text-lg font-semibold">Jurídico</h3>
                </div>
                <p className="text-muted-foreground">
                  Departamento responsável por questões legais, contratos, recuperação de crédito 
                  e conformidade regulatória do Cartão Festcard.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Atividades Principais</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Contratos e termos</li>
                      <li>• Recuperação de crédito</li>
                      <li>• Compliance regulatório</li>
                      <li>• Assessoria jurídica</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Conformidade</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Normas do Banco Central</li>
                      <li>• Código de Defesa do Consumidor</li>
                      <li>• LGPD</li>
                      <li>• Regulamentações setoriais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ra" className="mt-4">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building2 className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold">Departamento RA</h3>
                </div>
                <p className="text-muted-foreground">
                  Departamento de Relacionamento e Atendimento, focado em manter e fortalecer 
                  o relacionamento com os portadores do Cartão Festcard.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Relacionamento</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Gestão de relacionamento</li>
                      <li>• Programas de fidelidade</li>
                      <li>• Comunicação direcionada</li>
                      <li>• Pesquisas de satisfação</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Benefícios</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Programas de vantagens</li>
                      <li>• Descontos exclusivos</li>
                      <li>• Promoções especiais</li>
                      <li>• Parcerias comerciais</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Materiais e Treinamentos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="text-blue-600" size={20} />
            Materiais e Treinamentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Acesse os materiais de apoio e documentação essencial para operação do Festcard.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Manual do Festcard", desc: "Guia completo de operação" },
                { title: "Políticas de Crédito", desc: "Diretrizes e critérios" },
                { title: "Procedimentos SAC", desc: "Protocolos de atendimento" },
                { title: "Compliance e Regulamentações", desc: "Normas e conformidade" },
                { title: "Guia de Produtos", desc: "Catálogo de soluções" },
                { title: "FAQ Festcard", desc: "Perguntas frequentes" }
              ].map((material, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Download className="text-blue-600 mt-1" size={16} />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{material.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{material.desc}</p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-2 text-xs"
                          onClick={() => handlePDFDownload('#', material.title)}
                        >
                          <Download size={12} className="mr-1" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Treinamentos por Categoria */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PlayCircle className="text-red-600" size={20} />
            Treinamentos Festcard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="comercial">
            <TabsList className="grid w-full grid-cols-8">
              <TabsTrigger value="comercial">Comercial</TabsTrigger>
              <TabsTrigger value="cobranca">Cobrança</TabsTrigger>
              <TabsTrigger value="cards">Cards</TabsTrigger>
              <TabsTrigger value="vendas">Vendas</TabsTrigger>
              <TabsTrigger value="frente-loja">Frente de Loja</TabsTrigger>
              <TabsTrigger value="ti">T.I</TabsTrigger>
              <TabsTrigger value="cartao-festcard">Cartão FestCard</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce 3.0</TabsTrigger>
            </TabsList>

            <TabsContent value="comercial" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <ShoppingCart className="text-blue-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos Comerciais (11 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                  {[
                    {
                      title: "F.A.Q Perguntas e respostas frequentes CARTÃO PRESENTE OSCAR",
                      description: "O Vídeo ao lado contém as principais informações, dúvidas e respostas sobre o tema CARTÃO PRESENTE OSCAR.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - F.A.Q Perguntas e respostas frequentes CARTÃO PRESENTE OSCAR/Comercial - F.A.Q Perguntas e respostas frequentes CARTÃO PRESENTE OSCAR_player.m3u8"
                    },
                    {
                      title: "Manual APP Aceito Aqui – Nosso Aplicativo de Vendas",
                      description: "No vídeo a seguir iremos mostrar um manual com todas as instruções sobre o nosso aplicativo de vendas, o nosso ACEITO AQUI.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - Manual APP Aceito Aqui – Nosso Aplicativo de Vendas/Comercial - Manual APP Aceito Aqui – Nosso Aplicativo de Vendas_player.m3u8"
                    },
                    {
                      title: "MANUAL GERENTES DIGITAIS",
                      description: "Manual de criação de postagens e anúncios para a plataforma Gerentes Digitais. Aqui está o passo a passo de como realizar o trafego pago de suas postagens nas redes sociais, com o trafego pago conseguimos alcançar clientes em potencial de compra, clientes que tem interesse em sapatos, bolsas, acessórios, e inclusive crédito!!!",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - Manual gerentes digitais/Comercial - Manual gerentes digitais_player.m3u8"
                    },
                    {
                      title: "Principais vantagens de vender com Cartão FestCard",
                      description: "O Cartão FestCard, possui muitas vantagens para quem vende e para quem compra, ofertar o cartão significa maior aumento no número de vendas, ticket médio, fidelização do cliente, maior aumento de limite para o cliente, maior parcelamento e muito mais vantagens exclusivas. Conheça algumas vantagens que podem servir como argumento de venda!",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - Principais vantagens de vender com Cartão FestCard/Comercial - Principais vantagens de vender com Cartão FestCard_player.m3u8"
                    },
                    {
                      title: "Quais os canais de atendimento do Vale Saúde Sempre?",
                      description: "Para entrar em contato com a Central de Atendimento da Vale Saúde Sempre, ligue para (11)3003-0256 ou se preferir o mesmo número para WhatsApp. Para conferir a rede de atendimento disponível para os clientes do Vale Saúde Sempre, acesse: https://redeatendimento.valesaudesempre.com.br/ ou confira pelo aplicativo Vale Saúde Sempre.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - Quais os canais de atendimento do Vale Saúde Sempre/Comercial - Quais os canais de atendimento do Vale Saúde Sempre_player.m3u8"
                    },
                    {
                      title: "Roteiro operacional Crédito Pessoal",
                      description: "Na cartilha a seguir falaremos sobre: - DOCUMENTAÇÃO NECESSÁRIA - PÚBLICO ALVO - POLÍTICA DE CRÉDITO - PASSO A PASSO COMO CADASTRAR UMA PROPOSTA",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - Roteiro operacional Crédito Pessoal/Comercial - Roteiro operacional Crédito Pessoal_player.m3u8"
                    },
                    {
                      title: "Super Troco na Prática",
                      description: "Descubra como oferecer o Super Troco de forma simples e eficaz! Junte-se à nossa equipe para uma demonstração prática e descomplicada.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - Super Troco na Prática/Comercial - Super Troco na Prática_player.m3u8"
                    },
                    {
                      title: "Treinamento Pagface pagamento via reconhecimento facial Cartão Festcard",
                      description: "O vídeo acima trata-se de um treinamento sobre como realizar o pagamento via reconhecimento facial pelo Pagface! No vídeo temos um passo a passo de como operar esse procedimento pelo pdv de loja!",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - Treinamento Pagface pagamento via reconhecimento facial Cartão Festcard/Comercial - Treinamento Pagface pagamento via reconhecimento facial Cartão Festcard_player.m3u8"
                    },
                    {
                      title: "Treinamento Sancor Seguros",
                      description: "No vídeo ao lado, temos um treinamento sobre os novos produtos financeiros (Seguros) Sancor",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - Treinamento Sancor Seguros/Comercial - Treinamento Sancor Seguros_player.m3u8"
                    },
                    {
                      title: "Treinamento Super Troco Oscar",
                      description: "Explore este treinamento altamente prático sobre o inovador Super Troco Oscar.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - Treinamento Super Troco Oscar/Comercial - Treinamento Super Troco Oscar_player.m3u8"
                    },
                    {
                      title: "Viacerta – como acessar a base de cliente no sistema viacerta !",
                      description: "No video a seguir, iremos ensinar passo a passo sobre como puxar a base de cliente e também como filtrar por loja no sistema viacerta.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Comercial - Viacerta – como acessar a base de cliente no sistema viacerta !/Comercial - Viacerta – como acessar a base de cliente no sistema viacerta !_player.m3u8"
                    }
                  ].map((video, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-sm font-medium text-blue-700">{video.title}</h4>
                      <VideoPlayer externalUrl={video.videoUrl} title={video.title} departmentName="Festcard" />
                      <p className="text-xs text-muted-foreground">{video.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cobranca" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="text-red-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos de Cobrança (6 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                  {[
                    {
                      title: "Acordo de Boleto Pendente",
                      description: "A parcela poderá ser paga em loja, via pix ou pelo próprio banco (Boleto). No campo observações se estiver um numeral, significa que o atendimento foi via chat, caso não tenha o acordo foi feito via ligação.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cobrança -  Acordo de Boleto Pendente/Cobrança -  Acordo de Boleto Pendente_player.m3u8"
                    },
                    {
                      title: "Acordo Liquidado",
                      description: "Quando o cliente paga a entrada da renegociação, o nome do mesmo já é retirado do SPC em 3 dias úteis. Para pagamento da entrada da renegociação em loja ou PIX, o cadastro é liberado em até 24 horas. Pagamento da entrada da renegociação via boleto, a liberação ocorre em até 5 dias úteis (dependendo da compensação bancária).",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cobrança -  Acordo Liquidado/Cobrança -  Acordo Liquidado_player.m3u8"
                    },
                    {
                      title: "Lançamento de acordo acima de 180 dias",
                      description: "No sistema CobranSaaS é possível validar todas as informações do cliente e interações realizadas com ele. Acordos acima de 180 dias de atraso, sempre será no formato de boleto, e o mesmo só poderá voltar a comprar com o cartão FestCard após a quitação total do débito. O cartão só será liberado após constar a baixa no sistema.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cobrança -  Lançamento de acordo acima de 180 dias/Cobrança -  Lançamento de acordo acima de 180 dias_player.m3u8"
                    },
                    {
                      title: "Renegociação em Fatura Concluída",
                      description: "Para verificar a data de vencimento das próximas parcelas precisa seguir o seguinte caminho: Assim que estiver no cadastro do cliente > clicar em contrato no cobransaas > selecionar colunas > data da operação, feito isso irá aparecer a data da operação, na qual pode-se definir a data do próximo vencimento. Veja um pequeno exemplo abaixo: Se o vencimento da fatura é todo dia 26, o corte é todo dia 16, com essa informação, é só validar na negociação no Cobransaas para qual dia está a próxima parcela e validar se é antes ou depois do dia do corte (16).",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cobrança -  Renegociação em Fatura Concluída/Cobrança -  Renegociação em Fatura Concluída_player.m3u8"
                    },
                    {
                      title: "Renegociação em Fatura Pendente",
                      description: "Faturas em atraso de 64 a 179 dias terão o cartão desbloqueado 24 horas após o pagamento da entrada da renegociação, feito isso o cliente já pode voltar a comprar. Atenção: Conforme a dívida consta ativa, e necessário seguir o corte e vencimento da FATURA!",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cobrança -  Renegociação em Fatura Pendente/Cobrança -  Renegociação em Fatura Pendente_player.m3u8"
                    },
                    {
                      title: "Acordo Boleto já lançado",
                      description: "Cliente com até 179 dias de atraso negociando e pagando a entrada, o mesmo volta para a fatura e o cartão é desbloqueado após o pagamento constar em sistema. Cliente com mais de 180 dias de atraso, terá seu cartão desbloqueado apenas quando realizar a QUITAÇÃO total do débito. Quando o cliente realiza o pagamento do boleto via pix, o mesmo precisa entrar em contato pelo chat da Festcard > OPÇÃO 6 DA URA DE ATENDIMENTO (ENVIAR COMPROVANTE DE PAGAMENTO) aguardar ser atendido e nos encaminhar para localizarmos e realizarmos a baixa.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cobrança - Acordo Boleto já lançado/Cobrança - Acordo Boleto já lançado_player.m3u8"
                    }
                  ].map((video, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-sm font-medium text-red-700">{video.title}</h4>
                      <VideoPlayer externalUrl={video.videoUrl} title={video.title} departmentName="Festcard" />
                      <p className="text-xs text-muted-foreground">{video.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cards" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <CardIcon className="text-purple-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos Cards (4 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                  {[
                    {
                      title: "Como gerar cartão virtual para compras online e lojas credenciadas?",
                      description: "Primeiro é necessário logar no App FestCard, em seguida clicar em pagar compras, depois em seguida receberá um código de validação no celular, com o número basta validar e acessar o cartão virtual. Importante lembrar que o código CVV expira em 120 segundos.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cards - Como gerar cartão virtual para compras online e lojas credenciadas/Cards - Como gerar cartão virtual para compras online e lojas credenciadas_player.m3u8"
                    },
                    {
                      title: "Datas de corte e melhor data de compra",
                      description: "Cada vencimento da fatura, possui uma data de corte, a visualização é feita pelo Sistema Cards ou para acesso do cliente no aplicativo FestCard. Data de vencimento / Data de corte / Melhor data de compra: 01/21/22, 06/26/27, 11/01/02, 16/06/07, 21/11/12, 26/16/17. Exemplo: Cliente com data de vencimento 21, caso a compra seja feita no dia 11/03, a primeira parcela vem para 21/03. Agora se a compra for realizada pelo cliente em 12/03, a primeira parcela da compra vai para 21/04.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cards - Datas de corte e melhor data de compra/Cards - Datas de corte e melhor data de compra_player.m3u8"
                    },
                    {
                      title: "Procedimento para Redefinir a Senha do Cliente pelo Cards",
                      description: "Para fazer a redefinição de senha do cliente via Cards, é necessário, seguir o passo a passo e validar todas as informações para que os dados estejam corretos.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cards - Procedimento para Redefinir a Senha do Cliente pelo Cards/Cards - Procedimento para Redefinir a Senha do Cliente pelo Cards_player.m3u8"
                    },
                    {
                      title: "Treinamento Serviços Financeiros FESTCARD",
                      description: "A seguir, treinamento de Serviços Financeiros Festcard, saiba algumas das principais informações na hora de ofertar!",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cards - Treinamento Serviços Financeiros FESTCARD/Cards - Treinamento Serviços Financeiros FESTCARD_player.m3u8"
                    }
                  ].map((video, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-sm font-medium text-purple-700">{video.title}</h4>
                      <VideoPlayer externalUrl={video.videoUrl} title={video.title} departmentName="Festcard" />
                      <p className="text-xs text-muted-foreground">{video.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vendas" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="text-green-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos de Vendas (4 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                  {[
                    {
                      title: "1° Passo – Empréstimo Pessoal Oscar – Como enviar um cpf para pré Análise no sistema viacerta!",
                      description: "Aprenda como enviar o CPF do cliente para a pré-análise no sistema Viacerta e inicie a simulação do crédito.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Vendas - 1° Passo – Empréstimo Pessoal Oscar – Como enviar um cpf para pré Análise no sistema viacerta!/Vendas - 1° Passo – Empréstimo Pessoal Oscar – Como enviar um cpf para pré Análise no sistema viacerta!_player.m3u8"
                    },
                    {
                      title: "2° Passo – Como preencher toda a proposta com os dados do Cliente",
                      description: "Insira todos os dados do cliente no sistema, como informações pessoais, endereço, renda e documentos, para concluir a proposta de empréstimo.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Vendas - 2° Passo – Como preencher toda a proposta com os dados do Cliente/Vendas - 2° Passo – Como preencher toda a proposta com os dados do Cliente_player.m3u8"
                    },
                    {
                      title: "3 ° Passo – Como realizar a efetivação da proposta VIACERTA",
                      description: "Finalize a proposta no sistema Viacerta, validando os dados inseridos e confirmando a contratação do empréstimo pelo cliente.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Vendas - 3 ° Passo – Como realizar a efetivação da proposta VIACERTA/Vendas - 3 ° Passo – Como realizar a efetivação da proposta VIACERTA_player.m3u8"
                    },
                    {
                      title: "Viacerta – como acessar a base de cliente no sistema viacerta !",
                      description: "No video a seguir, iremos ensinar passo a passo sobre como puxar a base de cliente e também como filtrar por loja no sistema viacerta.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Vendas - Viacerta_como acessar a base de cliente no sistema viacerta !/Vendas - Viacerta_como acessar a base de cliente no sistema viacerta !_player.m3u8"
                    }
                  ].map((video, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-sm font-medium text-green-700">{video.title}</h4>
                      <VideoPlayer externalUrl={video.videoUrl} title={video.title} departmentName="Festcard" />
                      <p className="text-xs text-muted-foreground">{video.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="frente-loja" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Store className="text-orange-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos Frente de Loja (5 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                  {[
                    {
                      title: "Solicitação de senha (CPF) cliente Cartão FestCard",
                      description: "Solicitação de senha (CPF) por parte do cliente. Sempre que houver solicitação de senha(CPF) por parte do cliente, deverá ser solicitado o documento original com foto e reemissão do contrato, solicitar assinatura em fotos. Temos que reforçar esse procedimento de segurança com todas as lojas para evitar fraudes.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Frente de Loja - Solicitação de senha (CPF) cliente Cartão FestCard/Frente de Loja - Solicitação de senha (CPF) cliente Cartão FestCard_player.m3u8"
                    },
                    {
                      title: "Queda de sistema no momento do pagamento",
                      description: "Caiu o sistema do frente de loja na hora do pagamento de carnê, foi debitado o valor mas não consta no sistema, o que fazer? Neste caso é necessário entrar em contato com setor de Controladoria para validar o pagamento e realizar a baixa no sistema.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Frente de Loja - Queda de sistema no momento do pagamento/Frente de Loja - Queda de sistema no momento do pagamento_player.m3u8"
                    },
                    {
                      title: "O que é o termo \"a rogo\" e para que serve?",
                      description: "O termo \"a rogo\" é uma expressão usada em documentos formais para indicar que uma pessoa está autorizando outra pessoa a agir em seu nome. Isso pode ocorrer mesmo que a pessoa que está dando a autorização esteja presente no local. Por exemplo, se uma pessoa não pode assinar um documento por motivos justificáveis, ela pode pedir a outra pessoa para assinar \"a rogo\". É importante lembrar que a pessoa que está assinando o documento em nome de outra pessoa é responsável legalmente pelo que está sendo assinado. Lembrando que o funcionário não pode assinar pelo cliente em loja.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Frente de Loja - O que é o termo \"a rogo\" e para que serve/Frente de Loja - O que é o termo \"a rogo\" e para que serve_player.m3u8"
                    },
                    {
                      title: "Erro 19 no frente de loja, o que fazer?",
                      description: "Motivo: parcela de compra menor que R$5,00 ou compra de mesmo valor processada no mesmo dia. Parcela menor que R$5,00: O cartão FestCard aceita pagamento a partir de R$5,00 por parcela, qualquer compra processada com valor menor que esse não será concluída portanto, necessário passar um valor maior. Compra de mesmo valor já processada: É necessário verificar se a compra atual não está no mesmo valor que a anterior, o sistema barra com venda duplicada. Caso não se inclua nestas situações, deverá seguir o procedimento de reiniciar o sistema ou passar a venda em outro terminal, caso o erro persista.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Frente de Loja - Erro 19 no frente de loja, o que fazer/Frente de Loja - Erro 19 no frente de loja, o que fazer_player.m3u8"
                    },
                    {
                      title: "Como acessar o Chat para desbloqueio de cadastro",
                      description: "Para acessar o Chat exclusivo para lojas Oscar/JÔ e Carioca é necessário abrir o Frente de Loja e ir até a opção Ajuda, em seguida selecionar o link referente a loja. Esse canal deve ser usado durante a semana e aos domingos o acesso é exclusivamente por este caminho.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Frente de Loja - Como acessar o Chat para desbloqueio de cadastro/Frente de Loja - Como acessar o Chat para desbloqueio de cadastro_player.m3u8"
                    }
                  ].map((video, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-sm font-medium text-orange-700">{video.title}</h4>
                      <VideoPlayer externalUrl={video.videoUrl} title={video.title} departmentName="Festcard" />
                      <p className="text-xs text-muted-foreground">{video.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ti" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Computer className="text-indigo-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos T.I (3 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                  {[
                    {
                      title: "Como pesquisar Pedido no Mega?",
                      description: "Passo a passo de como pesquisar o pedido de compras no sistema Mega no ato do recebimento da Nota Fiscal na loja.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Estoque - Como pesquisar Pedido no Mega/Estoque - Como pesquisar Pedido no Mega_player.m3u8"
                    },
                    {
                      title: "Como solicitar a nota fiscal de um cliente?",
                      description: "A solicitação de nota fiscal deve ser enviada para sac@oscarcalcados.com.br. O pedido deve vir acompanhado das seguintes informações: - Nome do cliente - CPF - Data da compra - Número do orçamento E loja, caso a compra não tenha sido realizada na loja que está enviando o email. Importante! Inserir o CPF na nota em todas as vendas para evitar solicitações de nota fiscal sem chave de acesso.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Mega - Como solicitar a nota fiscal de um cliente/Mega - Como solicitar a nota fiscal de um cliente_player.m3u8"
                    },
                    {
                      title: "Pesquisa de satisfação de atendimento",
                      description: "Tutorial realizado pela nossa equipe, incentivando os colaboradores a realizarem a pesquisa de satisfação de atendimento, através do Topdesk, lembrando que é possível avaliar todos os setores que já utilizam a ferramenta. Por favor compartilhem com suas equipes.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/T.I - Pesquisa de satisfação de atendimento/T.I - Pesquisa de satisfação de atendimento_player.m3u8"
                    }
                  ].map((video, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-sm font-medium text-indigo-700">{video.title}</h4>
                      <VideoPlayer externalUrl={video.videoUrl} title={video.title} departmentName="Festcard" />
                      <p className="text-xs text-muted-foreground">{video.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cartao-festcard" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <CreditCard className="text-purple-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos Cartão FestCard (5 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                  {[
                    {
                      title: "Como Acionar a base Empréstimo Pessoal!",
                      description: "A seguir teremos um passo a passe de como realizar o acionamento de BASE, mais conhecido como a ativação do lead onde o próprio colaborador entra em contato com o cliente com potencial de Empréstimo!",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cartão FestCard - Como Acionar a base Empréstimo Pessoal!/Cartão FestCard - Como Acionar a base Empréstimo Pessoal!_player.m3u8"
                    },
                    {
                      title: "Treinamento Clube vai e volta Festcard",
                      description: "A seguir treinamento Clube vai e volta, conheça mais sobre este produto festcard para assertividade para ofertar!!",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cartão FestCard - Treinamento Clube vai e volta Festcard/Cartão FestCard - Treinamento Clube vai e volta Festcard_player.m3u8"
                    },
                    {
                      title: "Treinamento Sancor Seguros Festcard",
                      description: "A seguir você vai entender tudo sobre os seguros Sancor e os principais dados sobre como ofertar!",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cartão FestCard - Treinamento Sancor Seguros Festcard/Cartão FestCard - Treinamento Sancor Seguros Festcard_player.m3u8"
                    },
                    {
                      title: "Treinamento Vale Saúde Festcard",
                      description: "Neste treinamento iremos abordar os principais pontos e gatilhos na hora de ofertar o clube de saúde da Família!",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cartão FestCard - Treinamento Vale Saúde Festcard/Cartão FestCard - Treinamento Vale Saúde Festcard_player.m3u8"
                    },
                    {
                      title: "Treinamento OdontoFest",
                      description: "A seguir, iremos abordar algumas informações sobre nosso produto OdontoFest",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/Cartão FestCardl - Treinamento OdontoFest/Cartão FestCardl - Treinamento OdontoFest_player.m3u8"
                    }
                  ].map((video, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-sm font-medium text-purple-700">{video.title}</h4>
                      <VideoPlayer externalUrl={video.videoUrl} title={video.title} departmentName="Festcard" />
                      <p className="text-xs text-muted-foreground">{video.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ecommerce" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="text-teal-600" size={20} />
                  <h3 className="text-lg font-semibold">Treinamentos E-commerce 3.0 (6 vídeos)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
                  {[
                    {
                      title: "F.A.Q Perguntas e respostas frequentes CARTÃO PRESENTE OSCAR",
                      description: "Conteúdo com as principais informações, dúvidas e respostas sobre o tema CARTÃO PRESENTE OSCAR.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/E-commerce 3.0 - F.A.Q Perguntas e respostas frequentes CARTÃO PRESENTE OSCAR/E-commerce 3.0 - F.A.Q Perguntas e respostas frequentes CARTÃO PRESENTE OSCAR_player.m3u8"
                    },
                    {
                      title: "Manual do Clube Carioca",
                      description: "Conteúdo sobre como adicionar clientes, alterar cadastros, resgatar pontos e dar todas as informações sobre o Clube Carioca durante suas vendas, além de um passo a passo completo com telas do Mega.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/E-commerce 3.0 - Manual do Clube Carioca/E-commerce 3.0 - Manual do Clube Carioca_player.m3u8"
                    },
                    {
                      title: "Manual do Clube Gaston e Paquetá",
                      description: "Conteúdo sobre como adicionar clientes, alterar cadastros, resgatar pontos e dar todas as informações sobre o Clube Gaston e Paquetá durante suas vendas, além de um passo a passo completo com telas do Mega.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/E-commerce 3.0 - Manual do Clube Gaston e Paquetá/E-commerce 3.0 - Manual do Clube Gaston e Paquetá_player.m3u8"
                    },
                    {
                      title: "Manual do Clube Oscar",
                      description: "Conteúdo sobre como adicionar clientes, alterar cadastros, resgatar pontos e dar todas as informações sobre o Clube Oscar durante suas vendas, além de um passo a passo completo com telas do Mega.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/E-commerce 3.0 - Manual do Clube Oscar/E-commerce 3.0 - Manual do Clube Oscar_player.m3u8"
                    },
                    {
                      title: "Manual do Scarlen Mais",
                      description: "Conteúdo sobre como adicionar clientes, alterar cadastros, resgatar pontos e dar todas as informações sobre o Scarlen Mais durante suas vendas, além de um passo a passo completo com telas do Mega.",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/E-commerce 3.0 - Manual do Scarlen Mais/E-commerce 3.0 - Manual do Scarlen Mais_player.m3u8"
                    },
                    {
                      title: "Vendas 3.0 passo a passo",
                      description: "Conteúdo de passo a passo completo para vender no Sales App (Vtex) e domine o processo de vendas no 3.0. Aprenda ou revise as melhores práticas para garantir sucesso nas suas transações!",
                      videoUrl: "https://midia.pd.oscarcloud.com.br/videos/E-commerce 3.0 - Vendas 3.0 passo a passo/E-commerce 3.0 - Vendas 3.0 passo a passo_player.m3u8"
                    }
                  ].map((video, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="text-sm font-medium text-teal-700">{video.title}</h4>
                      <VideoPlayer externalUrl={video.videoUrl} title={video.title} departmentName="Festcard" />
                      <p className="text-xs text-muted-foreground">{video.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Mapeamento de Processos */}
      <div className="mt-8">
        <div className="flex items-center gap-2 mb-6">
          <FileText className="h-6 w-6 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Mapeamento de Processos</h2>
        </div>
        
        {/* Banner do departamento */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold">Mapeamento de Processos</h3>
              <p className="text-orange-100">Departamento Festcard - 4 processos mapeados</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              id: 'FEST-001',
              nome: "Aprovação de Crédito",
              descricao: "Fluxo completo desde solicitação até aprovação do crédito para portadores Festcard",
              nivel: "Tático",
              icon: Star
            },
            {
              id: 'FEST-002',
              nome: "Atendimento SAC",
              descricao: "Protocolo de atendimento ao cliente com foco em resolução de demandas",
              nivel: "Operacional",
              icon: HeadphonesIcon
            },
            {
              id: 'FEST-003',
              nome: "Cobrança e Recuperação",
              descricao: "Metodologia de recuperação de crédito e negociação com clientes inadimplentes",
              nivel: "Operacional",
              icon: Phone
            },
            {
              id: 'FEST-004',
              nome: "Gestão de Relacionamento",
              descricao: "Gestão do relacionamento com clientes e programas de fidelização",
              nivel: "Estratégico",
              icon: UserCheck
            }
          ].map((processo) => (
            <Card key={processo.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    processo.id === 'FEST-001' ? 'bg-blue-100 text-blue-600' :
                    processo.id === 'FEST-002' ? 'bg-green-100 text-green-600' :
                    processo.id === 'FEST-003' ? 'bg-purple-100 text-purple-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    <processo.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{processo.nome}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{processo.descricao}</p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium">
                        {processo.nivel}
                      </span>
                      <Button variant="link" size="sm" className="text-blue-600 hover:text-blue-800 p-0 h-auto">
                        Clique para detalhes
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Festcard;