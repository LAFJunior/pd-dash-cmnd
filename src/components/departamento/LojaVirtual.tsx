import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import VideoPlayer from '@/components/VideoPlayer';
import { Store, Users, Target, TrendingUp, BookOpen, Package, ShoppingCart, UserCheck, Star, PlayCircle, Award, BarChart3, MessageSquare, CheckCircle, Clock, Trophy, ChevronDown, BookOpenCheck, UserCog, Settings, Eye, GraduationCap, X } from 'lucide-react';
const LojaVirtual = () => {
  const [areaAtiva, setAreaAtiva] = useState('entrada');

  // Descrições dos módulos PVA
  const descricoesModulos = {
    introducao: {
      titulo: "PVA INTRODUÇÃO",
      conteudo: `"E sem saber que era impossível, ele foi lá e fez"
(Jean Cocteau)

Em 1982, quando a primeira loja Oscar Calçados foi inaugurada, teve início uma história de sucesso. Hoje, todos carregam com orgulho o nome da empresa que cresce a cada dia no mercado de varejo, sempre obtendo novas conquistas.

E se o negócio da Oscar Calçados é vender, sua força motriz é o profissional de vendas. Por essa razão, o papel do vendedor é de grande responsabilidade. Quando esse profissional não está comprometido com o aumento de suas vendas, ele contribui para o enfraquecimento dos resultados e o fracasso da empresa, prejudicando a todos.

Como toda empresa bem-sucedida, o Grupo Oscar Calçados busca o aprimoramento contínuo para superar seus próprios resultados, dando condições para que seus vendedores possam se destacar e atingir uma carreira de sucesso em vendas. Assim, o vendedor torna-se capaz de obter novos patamares, o que, além de garantir uma vida tranquila para si e sua família, impulsiona novas conquistas a sua empresa.

Mas, para crescer, é preciso estar disposto a ampliar sua zona de conforto, isto é, as ações que já se tem por hábito fazer. Profissionais que se mantêm vendendo do mesmo modo por anos, sem experimentar novas abordagens ou formas de satisfazer o cliente, podem prosperar apenas uma parte do que poderiam caso arriscam mais.

Nossa missão é proporcionar moda aos clientes e a satisfação de estar bem a cada passo.

Pensando nesse propósito a Oscar disponibilizou este guia completo sobre como atender os clientes em sua loja e cumprir essa tarefa com perfeição. Esse manual foi desenvolvido para que você, vendedor, possa se preparar totalmente para aumentar seu desempenho profissional, alcançar os melhores resultados em sua loja e dar continuidade ao sucesso dessa história.

Seja bem-vindo ao Programa de Vendas e Atendimento - PVA.

Como é o processo de Aprendizado?

Competência é resultado de um conjunto de fatores. Uma pessoa competente conhece sua área de atuação, aplica o que aprendeu em seu dia a dia e quer sempre fazer o seu melhor. Assim é, também, no processo de venda.

Para ser um bom profissional de vendas, é preciso ser competente no que faz. O bom vendedor conhece o produto que vende, é hábil ao lidar com o cliente e tem predisposição para agir. Competência é isso, é a união do conhecimento com as habilidades e a atitude.

Competência = C + H + A = CHA

Conhecimento = Aprendizado
Conhecimento vai além da informação pura e simples. É a compreensão de todas as informações adquiridas na convivência com as pessoas, na escola, na empresa em que se trabalha, nos livros, nos treinamentos e nas experiências do dia a dia.

O vendedor competente tem grandes conhecimentos sobre o produto que trabalha, pois isso é fundamental para a argumentação de vendas. Ele não apenas recebe as informações sobre o produto, mas compreende os processos, as características, os diferenciais. O profissional de vendas também conhece o espaço em que trabalha, a disposição dos produtos, o estoque, a arrumação da loja. Tudo isso engloba seu conhecimento sobre o que vende.

Mas de que adianta o conhecimento sem a prática?

Habilidade = Prática
Habilidade é característica de quem sabe fazer. É a soma do aprendizado do "o quê" e de "como" fazer com a experiência adquirida. E o bom profissional de vendas sabe colocar na prática tudo aquilo que aprendeu.

O vendedor competente tem a habilidade de identificar o perfil do cliente, o que lhe foi pedido, o que está sendo dito. Ele é capaz de relacionar as informações que estão sendo fornecidas, analisar o problema que está sendo colocado e resumir toda a situação, apresentando os produtos que a loja oferece. É isso que o torna hábil no que faz: colocar em prática o conhecimento adquirido. Porém, para praticar o que aprendeu, ele precisa estar disposto.

Atitudes = Querer fazer
Atitude é o comportamento ditado por uma disposição interior. É à vontade, o "querer fazer", é a predisposição para agir. Ter atitude é isso: agir. É uma qualidade que se percebe em todas as áreas do comportamento da pessoa, seja no trabalho, com a família ou com os amigos.

O vendedor competente quer fazer seu trabalho bem-feito, tem disposição para aprender sempre e iniciativa para buscar novas técnicas de vendas. Ele tem foco, motivação, iniciativa e comprometimento. Trabalha a inteligência emocional, o autodesenvolvimento e se adequa ao ritmo do cliente. É criativo, ético e persistente. Essas são as características de um vendedor de atitude.

05 PILARES DE UM VENDEDOR DE SUCESSO

1. Gostar de Gente e Foco no Cliente
   - Ter foco em realizar o desejo do cliente
   - Satisfazê-lo, falando sempre a verdade
   - Desenvolver a capacidade de empatia
   - Garantir sua fidelização

2. Amar o que faz

3. Objetivos
   - Ter metas e resultados claros
   - Valorizar a profissão de vendas
   - Motivar-se diante de desafios pessoais para atingir

4. Formular soluções para alcançar os seus objetivos
   - Persistir e não desanimar em frente às adversidades

5. Dominar o PVA e as competências
   - Dominar os passos da venda contidos no chavão O.S.C.A.R
   - Dominar as competências fundamentais do vendedor

Lembre-se: de nada adiantará a técnica se você não tiver esses pilares.

Entendido o conceito, vamos ver as competências fundamentais do vendedor:

• Receptividade: capacidade de ouvir opiniões, críticas e sugestões dos demais, analisando as contribuições dos outros.

• Afetividade: capacidade para estabelecer laços de afetividade e simpatia, por meio de postura pessoal participativa e amável.

• Capacidade de comunicação: capacidade de se comunicar de forma objetiva, clara e eficaz e de captar o pensamento dos demais de forma coerente.

• Facilidade de argumentação/persuasão: habilidade para convencer os demais por meio da argumentação e representatividade lógica e objetiva.

• Autoconfiança: capacidade de acreditar nos próprios recursos e demonstrar segurança nas relações com pessoas e situações novas.

• Flexibilidade e disposição de rever posições: capacidade de não temer o novo e mostrar-se aberto a receber informações; disposição pessoal para adaptar-se em diferentes contextos de trabalho, encontrando soluções apropriadas.

• Comprometimento: estar envolvido com os prazos e metas da empresa e perceber suas responsabilidades e os impactos do seu trabalho.

• Proatividade: capacidade de agir autonomamente, antecipando decisões, criando condições favoráveis e tomando providências que visem à prevenção ou à resolução de problemas.

• Trabalho em equipe e cooperação: facilidade de engajamento pessoal e capacidade de manter-se acessível e disponível à equipe, demonstrando interesse, num clima de interdependência e confiança mútua.

• Tato e observação: capacidade de saber observar, abordar e tratar os clientes de gostos e necessidades próprias, considerando suas diferenças e peculiaridades.

• Habilidade de relacionamento interpessoal: capacidade de estabelecer com facilidade relações de amizade, apresentando empatia, disposição para aceitar e entender as diferenças pessoais, partilhando situações favoráveis ou não, sem deixar de respeitar os limites dos demais.`
    },
    letras: {
      titulo: "PVA - LETRA S (SEJA BEM VINDO A OSCAR)",
      conteudo: `Descubra o que o cliente quer!

OBJETIVOS:
• Aprender a transmitir uma imagem positiva com entusiasmo;
• Abrir a venda;
• Não aceitar a resistência inicial do cliente e utilizar todos os contra-ataques;
• Descobrir o que ele procura (o Produto).

O ponto de partida para a excelência do atendimento é a forma como você abre a venda. Experiências ruins no passado, nas quais o cliente sentiu-se enrolado ou enganado, podem levá-lo a desconfiar de você. Porém, só você pode mudar essa imagem, demonstrando que não está interessado apenas em vender, mas sim em atender a necessidade do seu cliente.

Já se foi o tempo em que profissionais de venda convenciam clientes indefesos a comprar coisas que eles não queriam ou que não precisavam. Atualmente, os vendedores apenas orientam os consumidores, fornecendo-lhes itens que satisfaçam seus desejos e necessidades.

Por isso, sua principal missão é transformar interessados em compradores, visto que existem muitos clientes que chegam à loja sem saber o que desejam ao certo. Sendo assim, criar um relacionamento de cordialidade e amizade fará a diferença entre o seu atendimento e o da concorrência, pois você estabelece um vínculo com o cliente, a ponto de ele não comprar nada sem consultá-lo primeiro.

Cumprimente o cliente. Seja cordial e carismático. Sorria.

O objetivo principal de uma abordagem é quebrar o gelo e descobrir o produto em especial. Por essa razão, é fundamental o relacionamento com o cliente que será alcançado a partir do diálogo e da comunicação.

ATENÇÃO!
A posição e a postura na fila da vez, e respeitar o sistema de vez são muito importantes. Quando for a sua vez de atender, esqueça o barulho ao redor e concentre-se em observar o cliente que está entrando. Dessa forma, você será capaz de notar detalhes sobre ele que ajudarão durante o atendimento.

Com este foco, você poderá identificar se o cliente está passeando, pesquisando, com pressa ou não.

Antes de qualquer coisa, observe o perfil do cliente. Lembre-se de avaliar sem discriminar! Observe se é extrovertido, tímido, hesitante ou determinado. Ao identificar o perfil, adéque seu modo de interagir com o cliente. Isso o ajudará em sua argumentação.

Seja solícito e lembre-se de direcionar o olhar de modo a não criar desconforto: por exemplo, se estiver atendendo um casal, vendedores homens devem olhar para o homem e mulheres devem olhar para a mulher.

EXEMPLOS DE ABORDAGEM
• Use "Bom dia/Boa tarde/Boa noite";
• "Seja bem-vindo;
• Faça perguntas que não estejam relacionadas à venda;
• Inicie uma conversa informal, porém, respeitosa.

O PASSO-A-PASSO PARA UMA ABORDAGEM EFICAZ:

1. Tenha entusiasmo
O entusiasmo é tudo! É compreensível que você esteja cansado, física ou mentalmente, ou que já não tenha tanto entusiasmo para falar de um produto que já descreveu diversas vezes. Nessas horas, lembre-se de um apresentador de TV, que apresenta o mesmo programa há anos. Ele está sempre entusiasmado e parecendo adorar o que faz.

2. Faça desvio de 180 graus
Aplique a técnica do desvio de 180 graus: logo após a entrada do cliente na loja, saia da sua posição da fila da vez e dirija-se ao cliente; passe pelo cliente, volte e comece a abordagem, que deve ser feita sempre "de fora para dentro da loja", facilitando o ingresso do cliente ao interior da loja.

3. Cumprimente o cliente
Sorriso e interesse fazem parte de um bom relacionamento que deve ser estabelecido entre o profissional de vendas e seu cliente, desde o momento em que ele coloca os pés na loja. Mesmo os clientes fidelizados por outros vendedores devem ser tratados com cortesia e simpatia sempre.

4. Converse com o cliente
Eis o passo para "quebrar o gelo" com seu cliente e começar a cativar sua amizade. Antes de tudo, o vendedor precisa estar atento ao próprio comportamento e desenvolver um relacionamento pessoal com o consumidor, que já vimos ser mais eficaz do que o contato puramente comercial.

O segredo está na conversa.
Significa, simplesmente, conversar com o cliente, deixando-o o mais à vontade possível. Você pode até tocar em assuntos genéricos, como o tempo, a novela, algum acontecimento recente. Comentários sobre programas de TV, filhos e esportes também servem como pontos de partida para a abordagem.

O importante é dar início à conversa e abrir a venda, não encontrar o cliente de frente, impedindo a entrada na loja. Mantenha uma distância razoável do cliente e abra a venda.

5. Contra-ataque
O contra-ataque consiste em não aceitar a resistência inicial do cliente que não lhe permite começar uma venda. Partimos do princípio de que todo o cliente que entra em nossa loja procura por um determinado produto e, nesse sentido, precisamos satisfazer sua necessidade, oferecendo um produto que o atenda.

Por outro lado, clientes indecisos são resistentes e não permitem que você inicie a pesquisa. Nesse caso, o profissional de vendas deve tentar dar início ao atendimento algumas vezes.

• Cumprimentar e fazer a pergunta inicial. Ao receber uma negativa, perguntar se o cliente deseja algum produto específico.
• Informar que você é um profissional preparado para explicar melhor sobre os produtos da loja, destacando que o cliente não é obrigado a comprar.
• Informar que mesmo que ele não queira sua ajuda naquele momento, você estará por perto e disponível para lhe oferecer um atendimento especial.
• Pedir ao cliente que não deixe a loja sem lhe procurar para que você possa informá-lo sobre possíveis ofertas de última hora.

EXEMPLO DE DIÁLOGO:

Vendedor – Olá, boa tarde! Seja bem-vindo à Oscar Calçados. Como vai?
Cliente – Bem, obrigado!
Vendedor – A que devemos sua visita?
Cliente – Só estou olhando! (1ª objeção)
Vendedor – Ah! Que ótimo, faz muito bem em pesquisar as novidades. Mas... o senhor veio procurar algo em especial? (1º contra-ataque)
Cliente – Estou vendo de tudo um pouco. (2ª objeção)
Vendedor – Mas por onde você está querendo começar? (2º contra-ataque)
Cliente – Amigo, só vim olhar mesmo! (3ª objeção)
Vendedor – Entendo. Se quiser, posso lhe explicar sobre qualquer um de nossos produtos! (3º contra-ataque)
Cliente – OK! Mas eu realmente quero ficar à vontade! (4ª objeção)
Vendedor – Perfeitamente, fique à vontade e sinta-se em casa. Quando precisar, estarei por perto. (4º contra-ataque)

Se o senhor não se importar, peço que não deixe de me procurar antes de ir embora, para que eu possa lhe informar sobre ofertas ou promoções que podem ser de seu interesse. (5º contra-ataque)

TIPOS DE ABORDAGEM

Identificado o perfil do cliente em poucas frases, você já tem o caminho aberto para buscar informações sobre o que ele deseja. O importante é criar uma pergunta de abertura assertiva, uma pergunta própria, de modo a descobrir o interesse dele em sua loja.

Há três tipos básicos de abordagem: social, de produto e promocional.

1 - ABORDAGEM SOCIAL:
A abordagem social ocorre quando usamos falas ou atitudes semelhantes às que temos quando estamos recebendo um amigo ou conhecido. Isso significa que o vendedor vai abordar o cliente falando sobre outros assuntos que não seja a venda.

Exemplo:
O cliente entra na loja usando uma camisa de um time que acabou de ganhar o jogo. O vendedor faz o desvio de 180 graus e se aproxima.

Vendedor – Boa tarde! Seja bem-vindo à Oscar Calçados! Então, assistiu ao jogo de ontem? Emocionante, não?!
Cliente – Assisti, sim! Fiquei muito feliz. Meu time fez 2×0!
Vendedor – Eu vi também... (segue breve conversa sobre o assunto) ... Mas e o que te traz a nossa loja hoje? Busca algo em especial? Que tal olhar as nossas novidades?

2 - ABORDAGEM DE PRODUTO:
A abordagem de produto pode ser aplicada quando o vendedor percebe o interesse do cliente por algum produto específico e utiliza essa informação para iniciar a conversa. Nesse caso, é importante observar para onde o cliente direciona o olhar na vitrine, nas gôndolas, se mexe nas bolsas, nos cintos etc. Seja preciso.

Exemplo:
O cliente entra na loja e fixa o olhar na vitrine de tênis, e para na exposição de chuteiras. O vendedor faz o desvio de 180 graus e se aproxima.

Vendedor – Boa tarde! Seja bem-vindo à Oscar Calçados! Gostou da nossa coleção de chuteiras? Gostaria de dar uma olhada em algum modelo? Qual o seu número?

3 - ABORDAGEM PROMOCIONAL:
A abordagem promocional acontece quando o cliente se interessa por algum produto promocional, que pode ter o seu preço reduzido ou mesmo um produto que está na mídia, sendo anunciado em propagandas, novelas, programas de TV etc.

Exemplo 1:
A cliente observa com atenção a banca de produtos com preços reduzidos. O vendedor se aproxima.

Vendedor – Boa tarde! Seja bem-vinda à Oscar Calçados! Esta sandália estava por R$ 150,00 e agora que temos poucos pares ela está por R$ 89,00. Que tal experimentar? Qual número você está procurando?

Exemplo 2:
A cliente demonstra interesse pela banca que está na frente da loja com um produto que acabou de ser lançado. O vendedor se aproxima.

Vendedor – Boa tarde! Seja bem-vinda à Oscar Calçados! Esta sandália acabou de ser lançada. Você já viu na televisão? Qual é o seu número?`
    },
    letraC: {
      titulo: "PVA - LETRA C (CONSTRUA O PERFIL DO CLIENTE)",
      conteudo: `Identifique as necessidades de seu cliente!

OBJETIVOS:
• Entender claramente o que o cliente quer;
• Fazer o cliente confiar em você;
• Desvendar seus desejos.

Perguntar não é demais. Perda de tempo é não perguntar.

Faça perguntas com o objetivo de construir o perfil do cliente, a fim de apresentar-lhe o produto certo. Evite perguntas que limitem a resposta a um simples "sim" ou "não".

1 – PERGUNTAS ABERTAS E FECHADAS

É possível levantar muitas informações sobre o cliente ao direcionar a ele perguntas abertas, tais como:
"Qual a cor/o estilo desejada(o)?" "Em qual ocasião a bolsa será utilizada?"

Entretanto, em alguns casos, as perguntas fechadas são capazes de limitar as alternativas de resposta:
"O senhor vai querer o cinto em couro ou sintético?" "Bolsa para festa ou para o dia a dia?"

2 – VALORIZE AS INFORMAÇÕES

Mostre-se sinceramente interessado no que diz o seu cliente. Muitos já conhecem a loja e têm alguma história para contar ou lembrar.

IMPORTANTE: Não esquecer as informações que o cliente está passando: o nome, onde mora, o que faz etc.

3 – COMO CONSTRUIR O PERFIL DO CLIENTE?

AS MELHORES PERGUNTAS PARA CONSTRUIR O PERFIL DO CLIENTE

QUEM
• Para quem está comprando? Quem é a(o) felizarda(o)?
• Quem mais está na sua lista de compras?

QUE/QUAL
• O que te traz a nossa loja hoje? Qual a ocasião especial?
• O que gostaria de experimentar?

ONDE/QUANDO
• Onde viu antes que lhe agradou? Quando é a ocasião especial?

COMO
• Como gostaria que fosse o salto da sua sandália ou sapato?

INFORMAÇÕES → CONFIANÇA`
    },
    letraA: {
      titulo: "PVA - LETRA A (APRESENTE E ADICIONE)",
      conteudo: `Estimule a compra, satisfaça o cliente e não deixe que ele desista da compra!

OBJETIVOS:
• Buscar o produto certo;
• Demonstrar e valorizar com entusiasmo o produto escolhido juntamente com acessórios e adicionais;
• Contornar as objeções.

APRESENTANDO O PRODUTO

Após construir o perfil do cliente com a sondagem, é o momento de buscar o(s) produto(s) desejado(s) e demonstrá-lo(s). O vendedor da Oscar Calçados deve levar, no mínimo, três caixas de produtos em cada atendimento. É importante que o profissional de vendas esteja apto a especificar o produto escolhido, demonstrando suas vantagens e benefícios com entusiasmo. Ele precisa ser capaz de dizer o que o cliente quer ouvir sobre o produto, de acordo com o que está buscando.

Ao demonstrar o produto, o principal objetivo do vendedor é valorizá-lo, estimulando sua compra. Portanto, segure o produto com elegância e ajude o cliente a provar/experimentar (no caso do calçado, auxilie o cliente a calçá-lo sempre que necessário). Não compare mercadorias semelhantes para não desvalorizar uma delas e evite insistir numa mercadoria que, visivelmente, não está favorável ao cliente ou que ele não tenha gostado.

1 - CRIANDO O DESEJO DE POSSE
• Lembre-se de ficar na mesma altura do cliente para atendê-lo;
• Se estiver com mais de um cliente, coloque-os próximos um ao outro, para facilitar o atendimento;
• Procure sempre trazer opções de produtos, adicionais e acessórios.

2 - DEMONSTRAÇÃO E ATENDIMENTO ORGANIZADO

O método de atendimento organizado começa logo na busca da mercadoria no estoque e se estende até a devolução do produto ao estoque ou ao pacote. Vendedores organizados vendem mais e com menor desgaste físico ao longo do dia. O método também diminui o tempo de espera do cliente, melhorando a demonstração do produto e reduzindo as objeções.

1 - Ao pegar a caixa no estoque, use as duas mãos; uma para puxar a caixa e a outra para segurar as demais.
2 - Antes de sair do local arrume as caixas alinhando-as.
3 - Use a técnica de empilhamento em X, fazendo uma torre.
4 - Salvo exceções, retire somente o pé direito da caixa para demonstrar o produto.

Faça com que o cliente se sinta dono do produto, fazendo o cliente experimentar, tocar, manusear, vestir, testar e sentir cada item. Enquanto o cliente estiver provando, fique sempre atento e mostre-se solícito, mas sem dar a impressão de que o está vigiando.

Dê ao cliente todas as informações necessárias sobre o produto. Para isso, estude esse produto a fundo. Porém, quando estiver conversando com o cliente, não fale tudo de uma vez, pois ele não conseguirá absorver tudo e você perderá a oportunidade de usar as informações no momento adequado.

Também não se esqueça de mencionar diferenciais do produto. É importante lembrar que somente as características e qualidades não são suficientes para a venda. Os benefícios também encantam e mexem com a emoção do cliente.

E quando o produto oferece características relevantes (tecnologia, designer, marca conhecida), isso tem grande impacto no momento da decisão do cliente. Lembre-se delas!

Quando necessário, solicitar consulta nos terminais do sistema PDV (Ponto de venda: computador utilizado para emitir o orçamento do cliente, com o qual se dirige ao caixa para pagamento), produtos existentes nas outras lojas, contatar a loja para envio dos produtos e informar ao cliente a previsão de chegada.

DICA: Se o produto já tem uma marca reconhecida e com credibilidade, aproveite-se disso!

3 - COMUNICANDO OS BENEFÍCIOS

Aplique a técnica de demonstração do produto: o ACB.

Atração: deixe o cliente com desejo de posse e faça com que se sinta atraído pelo produto. Faça perguntas afirmativas, sempre com o intuito de receber respostas positivas do cliente;

Características: ressalte ao cliente algo que se destaque no produto e que se perceba ao olhar, como a cor, marca, matéria-prima, modelo, detalhes;

Benefícios: mostre ao cliente os benefícios apresentados pelo produto em termos de conforto, qualidade, versatilidade, durabilidade, estética e moda.

Exemplos de ACB's

Exemplo 1:
Atração: "Para o senhor que procura conforto em um tênis ..."
Característica: "... trouxe este tênis, o Adidas New Cosmos (apresente o produto com as mãos e faça o cliente tocar e pegar no produto), que tem suporte de calcanhar..."
Benefício: "... que não machuca os calcanhares."

Exemplo 2:
Atração: "Para a senhora que procura um tênis de corrida que não machuque seu joelho ..."
Característica: "... este é o Nike Air Max (apresente o produto com as mãos e faça o cliente tocar e pegar no produto). Este tênis tem amortecimento Air Max em toda sua extensão..."
Benefício: "... garantindo proteção contra impacto."

Exemplo 3:
Atração: "Para a senhora que procura elegância e conforto..."
Característica: "... este é o Scarpin Anabela Bottero (apresente o produto com as mãos e faça o cliente tocar e pegar no produto). Ele possui salto emborrachado e salto anabela de 6 cm..."
Benefício: "... perfeito para mulheres que procuram elegância e conforto."

4 - ACESSÓRIOS E ADICIONAIS

O cliente se interessou pelo produto apresentado? Leve acessórios, que são produtos que combinam com o item apresentado anteriormente. Não esqueça os produtos adicionais. São aqueles produtos que você identificou na sondagem, que tem potencial de compra para o cliente. Ex: bolsas, cintos, carteiras, meias, materiais esportivos, produtos para tratamento em couros, palmilhas, chinelos, etc.

O objetivo do profissional de vendas ao demonstrar adicionais e acessórios é satisfazer o cliente, agregando valor à venda e prestando um excelente atendimento.

Leve, mostre e venda acessórios em todo atendimento.

Se o cliente entrou pedindo um produto e saiu só com ele, você não vendeu, somente atendeu. O vendedor profissional se preocupa em realizar um bom atendimento e vender adicionais. Com isso, o cliente fica mais satisfeito e você ainda aumenta os seus lucros e o da empresa.

Lembre-se de valorizar os adicionais e acessórios do mesmo modo que valorizou o produto principal. Aproveite o momento da venda para expor outros produtos e criar o desejo de posse do cliente. Dê a ideia do conjunto, ressalte que ele deve pensar no "look" completo e não se esqueça de levar o cliente até o espelho.

OBSERVE:

Em que momento sugerir
Os adicionais devem ser sempre oferecidos com o produto principal, ou seja, no momento da apresentação. Neste momento o cliente ainda não se decidiu pelo item principal e, portanto, está aberto a sugestões que o façam dar asas à imaginação.

O que sugerir
Ofereça produtos que complementam aquele que o cliente veio buscar, de acordo com o perfil que foi construído e a ocasião de uso.

Não pense pequeno
Não determine o momento de parar de oferecer adicionais. É o cliente quem vai dizer "Não" e dar a dica. Escute o que o cliente diz. E quando ele disser chega, pare de oferecer adicionais.

EXEMPLOS:
• Ofereça adicionais de maneira sutil:
"Eu trouxe..." "Tomei a liberdade de trazer..." "Tive a iniciativa de trazer..." "Aproveitei para lhe trazer..."

• Dê, no mínimo, duas vantagens e benefícios do item adicional:
"É leve, ideal para usar no dia-a-dia" "Versátil, várias formas de uso"

• Use palavras mágicas e que deem ao cliente a noção do conjunto:
"Para combinar..." "Para fazer uma produção" "Para atualizar o look" "Para completar"

• Dê o sentido de posse ao item principal:
"Eu trouxe uma sandália bege de cor neutra, fácil de combinar, que nunca sai de moda e vai ficar perfeita com SUA nova bolsa."

5 - CONTORNANDO OBJEÇÕES

Objeções são reações negativas do cliente quanto à apresentação do produto e fazem parte das vendas. O cliente pode ser contrário à compra por diversas razões, como o preço estar desalinhado com suas expectativas, a loja não ter o produto desejado, a forma de pagamento não atender às suas expectativas, a cor ou a marca não serem do seu agrado, o modelo tem restrição ao uso, etc. Se o cliente diz "preciso pensar", "não sei se levo" ou "depois eu volto", não quer dizer que a venda esteja completamente perdida.

Não tenha medo das objeções! Seja criativo e esteja preparado.

O objetivo de se contornar uma objeção é fazer com que o cliente não desista da compra, identificando o seu verdadeiro motivo, e a melhor ferramenta para o vendedor contornar objeções é a argumentação. Nesse caso, argumentar significa apresentar fatos e/ou ideias afirmativas sobre o produto demonstrado e, para que isso seja possível, o profissional de vendas precisa ter feito uma boa preparação.

Ao dominar argumentações, você poderá:
• Salvar a venda se houver alguma objeção;
• Descobrir o verdadeiro motivo de o cliente não comprar e então argumentar;
• Concluir a venda.

Ao argumentar uma objeção, demonstre naturalidade, pergunte o que o cliente achou do produto, do preço, das condições, como ele estaria mais confortável em pagar.

Um bom argumento a ser usado envolve a indicação de um acessório. Se um cliente está insatisfeito com o calçado porque ele parece "solto" no pé, apesar de ser da sua numeração, o vendedor pode indicar uma palmilha meio ponto, por exemplo. O mesmo pode acontecer com produtos como amaciante, calcanheira, de limpeza, etc.

• Ouça atentamente a objeção e coloque-se no lugar do cliente;
• Evite entrar em conflito ou discutir com o cliente. É melhor perder a batalha e ganhar a guerra;
• Por meio de perguntas, faça com que o cliente responda a suas próprias objeções.

Exemplo:
O cliente diz que encontrou o produto mais barato em outra loja.

Vendedor: Nós temos todas as numerações, pode ser que lá você não encontre o seu tamanho.

OU

Vendedor: Nós estamos com a promoção na forma de pagamento, excelente oportunidade, você leva e só vai pagar daqui a X dias.`
    },
    letraR: {
      titulo: "PVA - LETRA R (RETORNE O FECHAMENTO E PÓS VENDA)",
      conteudo: `Deixe o cliente satisfeito com a compra realizada!

OBJETIVOS:
• Efetuar o fechamento;
• Deixar o cliente totalmente satisfeito;
• Ampliar a clientela pessoal.

O objetivo desta etapa é efetuar o fechamento da venda, deixando o cliente com total satisfação na realização da compra. É o momento de conferir o total da compra, se as mercadorias estão corretas e levar os produtos demonstrados e vendidos para o PDV. É também um ótimo momento para reforçar os benefícios do produto e lembrar as formas de pagamento.

1 – ALERTAS DE COMPRA

Um fechamento bem-sucedido se dá quando o cliente diz "Vou levar!" antes que você tenha que perguntar se ele vai comprar. E a mensagem de "Vou levar!" pode ser percebida a partir de diversos "alertas de compra". Alertas de compra apontam que o cliente está inclinado a comprar e sua percepção pode ser a garantia de uma venda bem-sucedida.

Esteja atento às dicas que o cliente dá, mostrando interesse no produto sem que diga que vai levá-lo, exemplos:

"Até que enfim achei o que procurava"
"Que bonito, ficou muito bom em mim!"
Sinal de aprovação com a cabeça.

DICA: Somente após o cliente ter dado os alertas de compra é que você pode partir para o fechamento e levá-lo ao caixa. Caso contrário, poderá perder a negociação e ficará com poucos argumentos para convencer o cliente.

2 – ALGUMAS TÉCNICAS DE CONCLUSÃO

Conclusão por escolha: É a conclusão em forma de pergunta que oferece ao cliente somente duas opções:
Exemplo: "Você vai querer o calçado com o solado baixo ou alto?"

Conclusão por síntese: Se muito tempo se passou desde a apresentação, usa-se esta técnica para transmitir brevemente os benefícios do produto, fazendo com o cliente se lembre do quão bom será adquirir o item em questão.
Exemplo: "Bom, este tênis vem com palmilha anatômica e é ideal para ser usado em caminhadas curtas, como a senhora pediu!"

Conclusão por recomendação: Que tal recomendar ao cliente que compre o produto? É possível que ele esteja apenas esperando por essa atitude sua. Se você estabeleceu um relacionamento com o cliente e ambos estão à vontade, por que não?

Conclusão por opinião de terceiros: Quando se trata de concluir a venda, falar sobre a experiência bem-sucedida de um amigo ou outro cliente com o produto pode acrescentar mais credibilidade à negociação. Também vale citar revistas especializadas, jornais, celebridades etc.

Conclusão por punição: Muito cuidado ao lançar mão desta conclusão, pois pode parecer pouco confiável aos olhos do consumidor! Trata-se de punir o cliente caso ele não efetive a compra. Por isso, não caia na armadilha de usar frases como "A liquidação termina amanhã", "É o último do estoque", entre outras que tenham o mesmo sentido. Utilize-as apenas em último caso e se realmente forem verdadeiras.

3 – CONCLUA A VENDA

Oferecer adicionais e um excelente atendimento ao cliente são atitudes que não farão diferença se você não concluir a venda. No entanto, lembre-se de que, se você cumpriu muito bem todas as etapas da venda, a conclusão dela será apenas uma consequência de seu desempenho.

Independente da técnica utilizada, o desejo de fechar a venda é essencial.

Ao fechar a venda, você aumenta os lucros e o desempenho da empresa em diversos aspectos. Portanto, você deve:
• Tentar sempre concluir a venda;
• Se esforçar para vender itens adicionais;
• Deixar o cliente satisfeito e feliz com sua compra;
• Prestar um excelente atendimento.

Existem diversas formas confirmar a venda, vejamos alguns exemplos: a partir da confirmação e conferência dos itens; via forma de pagamento; informar o número de parcelas que pode ser feito; sendo direto, a partir de pergunta ("Então, vai levar?").

Essas são algumas formas de concluir a venda no Grupo Oscar Calçados, que devem ser utilizadas, pois não são todas as lojas que têm esse diferencial.

Exemplo:
"Então Sra. Teresa, o sapato e a bolsa ficam em apenas XX reais em XX vezes."
"Que tal aproveitar e levar este cinto? Assim, o senhor aproveita melhores condições de pagamento."
"Levando essa sandália, o valor sai por apenas XX reais a mais em cada parcela."

DICA: Ao realizar o fechamento da venda, insira as informações nos terminais do sistema (PDV), tais como código do produto, valores, forma de pagamento, parcelamento ou não. Vendas no FESTCARD verificar a foto no sistema se bate com o cliente presente (Entre no cadastro na página fotos). Colocar os produtos no tamanho da sacola correta, e não esquecer de retirar o alarme dos produtos!

4 – GUARDE OS CALÇADOS NAS CAIXAS

Um calçado guardado corretamente fica mais bem acondicionado na sua embalagem, conservando suas características originais, tais como: formato, brilho, detalhes de pedrarias e fivelas. Esse procedimento também facilita no momento da demonstração do calçado ao cliente, além de deixar o produto com aspecto de recém-chegado de fábrica.

5 – FIDELIZE O CLIENTE

Após o fechamento da venda, o cliente entende que você não é um vendedor interesseiro, que está apenas pensando no dinheiro dele. Portanto, é um ótimo momento para estreitar o relacionamento. Fazer um elogio, por exemplo, pode soar mais sincero e genuíno. O cliente ficará ainda mais satisfeito ao saber que fez uma excelente compra.

Fidelizar o cliente é uma das atitudes dos vendedores profissionais. São aqueles que reconhecem o cliente como seu maior patrimônio. Qualquer estratégia de fidelização de clientes, ou seja, de levá-los a comprar repetidamente com você, só terá êxito se o seu foco estiver no relacionamento com o cliente e não somente nos produtos ou serviços que sua loja vende.

Nessa etapa em que se convida o cliente, os objetivos do vendedor, além de fidelizar seu cliente, são: reduzir o número de trocas e devolução, e ampliar sua clientela.

Confirme a decisão tomada pelo cliente e o agradeça. Ele deve pensar: "Eu tenho certeza de que fiz uma ótima compra!". Parabenize-o pela realização da compra, ofereça suporte para a utilização do produto e convide-o a retornar à loja, mantendo sempre uma atitude amigável após a venda.

Nesta etapa final, o bom profissional de vendas age a fim de:
• Evitar que o cliente se arrependa;
• Reduzir as trocas e problemas;
• Otimizar o relacionamento;
• Criar vendedores anônimos (o famoso boca-a-boca).

Quando você convidar o cliente para voltar à loja, é essencial que se obedeça a um contexto específico. Pedir para que conte como ficou o vestido com a bolsa no dia do evento é apenas um dos exemplos. E não se esqueça de ressaltar que ela deve voltar para falar somente com você. É nesse momento que você poderá reforçar ainda mais o relacionamento com ela e inclusive realizar outras vendas.

Trate sempre o cliente pelo nome, usando senhor/senhora somente quando necessário. Mantenha o tom da conversa informal, mas lembre-se: informalidade não é intimidade. Evite beijinhos, "querida", "amor" e etc. Se partir do cliente, não recuse. Ele provará que você realmente conquistou sua confiança.

Exemplos de frases de encerramento:
"Parabéns, Sr. André, fez uma excelente compra! Quando voltar, me procure, estarei esperando pelo senhor."
"Muito obrigada! Quando voltar, ficarei feliz em atendê-la. Aqui está o meu cartão."

DICA: Não use frases como "Se tiver algum problema, fale comigo". Isso pode fazer com que o cliente ache que vai mesmo ter problemas.

FECHAMENTO DO TREINAMENTO

Com esse programa, reforçamos que vender vai muito além de oferecer um produto. É entender o cliente, criar conexão, apresentar soluções e fechar com excelência.

Os 5 passos da venda são como uma jornada, e a cada etapa bem-feita você se aproxima do cliente, ganha sua confiança e garante o sucesso na venda e o sucesso da loja.

No varejo calçadista, vendemos mais do que sapatos, oferecemos conforto, estilo e autoestima. Cada atendimento é uma oportunidade de marcar positivamente a experiência do cliente na nossa loja e garantir a satisfação com a compra.

Lembre-se sempre, conhecimento sem prática não tem valor. A partir de agora, que você já conhece todos os passos da venda, cada passo precisa ser vivido, com entusiasmo e profissionalismo.

Que cada cliente atendido seja uma chance de colocar em prática o que aprendemos, com atitude, atenção e, claro, muito pé no chão e foco no resultado!

Na nossa loja, quando o vendedor conhece e aplica todos os 5 passos da venda, ele não apenas vende um sapato, ele guia seu cliente na jornada de uma boa escolha!`
    }
  };

  // Dados simulados de performance
  const performanceData = {
    metaVendas: 15000,
    vendaRealizada: 12500,
    satisfacaoCliente: 4.2,
    colaboradoresPresentes: 8,
    colaboradoresTotal: 10
  };
  const progressoVendas = performanceData.vendaRealizada / performanceData.metaVendas * 100;
  return <div className="space-y-6">
      {/* Header da Loja Virtual */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
          <Store className="text-green-600" size={28} />
          Ambiente de Processos - Lojas
        </h2>
        <p className="text-muted-foreground">
          Navegue pela representação digital da loja e explore os processos de cada área
        </p>
      </div>

      {/* Layout da Loja - Grid Visual */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ENTRADA DA LOJA */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'entrada' ? 'ring-2 ring-green-500 bg-green-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('entrada')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Store className="text-green-600" size={20} />
              🏪 Frente da Loja
            </CardTitle>
          </CardHeader>
          
        </Card>

        {/* ÁREA DE VENDAS */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'vendas' ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('vendas')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShoppingCart className="text-blue-600" size={20} />
              👥 Área de Vendas (PVA)
            </CardTitle>
          </CardHeader>
          
        </Card>

        {/* ÁREA GERENCIAL */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'gerencial' ? 'ring-2 ring-purple-500 bg-purple-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('gerencial')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="text-purple-600" size={20} />
              Programa de Gestão de Lojas - PGL
            </CardTitle>
          </CardHeader>
          
        </Card>

        {/* ÁREA DE TREINAMENTO */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'treinamento' ? 'ring-2 ring-orange-500 bg-orange-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('treinamento')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="text-orange-600" size={20} />
              📚 Área de Treinamento
            </CardTitle>
          </CardHeader>
          
        </Card>

        {/* ESTOQUE/RETAGUARDA */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'estoque' ? 'ring-2 ring-teal-500 bg-teal-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('estoque')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Package className="text-teal-600" size={20} />
              📦 Estoque & Retaguarda
            </CardTitle>
          </CardHeader>
          
        </Card>

        {/* GAMIFICAÇÃO */}
        <Card className={`cursor-pointer transition-all duration-200 ${areaAtiva === 'gamificacao' ? 'ring-2 ring-yellow-500 bg-yellow-50' : 'hover:shadow-lg'}`} onClick={() => setAreaAtiva('gamificacao')}>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="text-yellow-600" size={20} />
              🏆 Desafios & Conquistas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-center">
                
                
              </div>
              
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Conteúdo Detalhado da Área Selecionada */}
      <Card className="mt-6">
        <CardContent className="p-6">
          <Tabs value={areaAtiva} onValueChange={setAreaAtiva}>
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="entrada">Entrada</TabsTrigger>
              <TabsTrigger value="vendas">Vendas</TabsTrigger>
              <TabsTrigger value="gerencial">Gerencial</TabsTrigger>
              <TabsTrigger value="treinamento">Treinamento</TabsTrigger>
              <TabsTrigger value="estoque">Estoque</TabsTrigger>
              <TabsTrigger value="gamificacao">Conquistas</TabsTrigger>
            </TabsList>

            <TabsContent value="entrada" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Store className="text-green-600" />
                  Dashboard de Entrada - KPIs em Tempo Real
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardContent className="p-4">
                      
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vendas" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <ShoppingCart className="text-blue-600" />
                  PVA - Programa de Vendas e Atendimento
                </h3>
                
                {/* Roteiro de Aplicação do Treinamento */}
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpenCheck className="text-blue-600" size={20} />
                      Roteiro de Aplicação do Treinamento
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="prose prose-sm max-w-none">
                      <p className="text-sm leading-relaxed">
                        Nesse roteiro vamos trazer algumas importantes orientações e organização sobre como aplicar o treinamento, para que ele seja aproveitado da melhor maneira possível.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Esse onboarding foi planejado para ser aplicado ao longo de 5 dias, e sugerimos que as agendas sejam de no máximo 3 horas por dia, garantindo o foco sem sobrecarregar.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Reserve sempre um local adequado, silencioso e reservado, onde o nosso novo vendedor possa ter foco e acima de tudo assimile todo o conteúdo.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Esteja com o material de apoio, apostila, em mãos e garante que o novo colaborador também esteja com o material.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Alterne a teoria com demonstrações e exemplos práticos, mostrando produto e simulando os diálogos, além de trazer exemplos do dia a dia da loja.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Estimule a participação do novo vendedor.
                      </p>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                        <p className="text-sm font-semibold text-blue-800 mb-2">🎯 Objetivo</p>
                        <p className="text-sm text-blue-700">
                          O objetivo aqui é desenvolver o potencial de vendas do novo contratado e prepará-lo para que atinja os melhores resultados ao iniciar as atividades em nossa loja, oferecendo uma experiência incrível aos nossos clientes e aumentando as chances de sucesso em sua trajetória conosco.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs px-2 py-1">Dia 1</Badge>
                          <div>
                            <span className="font-semibold">Boas-Vindas ao novo Colaborador e Introdução ao PVA e Chavão Oscar</span><br />
                            <span className="text-muted-foreground">Passo 1 – Organize o seu dia + Avaliação do Conhecimento</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs px-2 py-1">Dia 2</Badge>
                          <div>
                            <span className="font-semibold">Passo 2 – Seja Bem-Vindo à Oscar + Avaliação</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs px-2 py-1">Dia 3</Badge>
                          <div>
                            <span className="font-semibold">Passo 3 – Construa o Perfil do Cliente + Avaliação</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs px-2 py-1">Dia 4</Badge>
                          <div>
                            <span className="font-semibold">Passo 4 – Apresente, Adicione e Contorne objeções + Avaliação</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Badge variant="outline" className="text-xs px-2 py-1">Dia 5</Badge>
                          <div>
                            <span className="font-semibold">Passo 5 – Retome com o Fechamento e Pós-venda + Avaliação</span><br />
                            <span className="text-muted-foreground">Fechamento do Programa</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Blocos de Vídeos PVA */}
                <div className="space-y-4">
                  
                  {/* PVA INTRODUÇÃO */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA INTRODUÇÃO
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA Introducao.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" className="flex items-center gap-2">
                                    <Eye size={16} />
                                    Ver Descrição
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl h-[80vh]">
                                  <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2">
                                      <BookOpen className="text-blue-600" size={20} />
                                      {descricoesModulos.introducao.titulo}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <ScrollArea className="h-full pr-4">
                                    <div className="prose prose-sm max-w-none">
                                      <div className="whitespace-pre-line text-sm leading-relaxed">
                                        {descricoesModulos.introducao.conteudo}
                                      </div>
                                    </div>
                                  </ScrollArea>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* PVA - LETRA O */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA - LETRA O (ORGANIZE SEU DIA)
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA O.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Button variant="outline" className="flex items-center gap-2">
                                <Eye size={16} />
                                Ver Descrição (Em breve)
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* PVA - LETRA S */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA - LETRA S (SEJA BEM VINDO A OSCAR)
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA S.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" className="flex items-center gap-2">
                                    <Eye size={16} />
                                    Ver Descrição
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl h-[80vh]">
                                  <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2">
                                      <BookOpen className="text-blue-600" size={20} />
                                      {descricoesModulos.letras.titulo}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <ScrollArea className="h-full pr-4">
                                    <div className="prose prose-sm max-w-none">
                                      <div className="whitespace-pre-line text-sm leading-relaxed">
                                        {descricoesModulos.letras.conteudo}
                                      </div>
                                    </div>
                                  </ScrollArea>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* PVA - LETRA C */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA - LETRA C (CONSTRUA O PERFIL DO CLIENTE)
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA C.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" className="flex items-center gap-2">
                                    <Eye size={16} />
                                    Ver Descrição
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl h-[80vh]">
                                  <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2">
                                      <BookOpen className="text-blue-600" size={20} />
                                      {descricoesModulos.letraC.titulo}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <ScrollArea className="h-full pr-4">
                                    <div className="prose prose-sm max-w-none">
                                      <div className="whitespace-pre-line text-sm leading-relaxed">
                                        {descricoesModulos.letraC.conteudo}
                                      </div>
                                    </div>
                                  </ScrollArea>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* PVA - LETRA A */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA - LETRA A (APRESENTE E ADICIONE)
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA A.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" className="flex items-center gap-2">
                                    <Eye size={16} />
                                    Ver Descrição
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl h-[80vh]">
                                  <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2">
                                      <BookOpen className="text-blue-600" size={20} />
                                      {descricoesModulos.letraA.titulo}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <ScrollArea className="h-full pr-4">
                                    <div className="prose prose-sm max-w-none">
                                      <div className="whitespace-pre-line text-sm leading-relaxed">
                                        {descricoesModulos.letraA.conteudo}
                                      </div>
                                    </div>
                                  </ScrollArea>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* PVA - LETRA R */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="border-blue-200 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center justify-between gap-2 w-full">
                            <div className="flex items-center gap-2">
                              <PlayCircle className="text-blue-600" size={20} />
                              PVA - LETRA R (RETORNE O FECHAMENTO E PÓS VENDA)
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-2">
                      <Card className="border-blue-200 bg-blue-50">
                        <CardContent className="pt-6 space-y-4">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                              <VideoPlayer fileName="PVA R.mp4" />
                            </div>
                            <div className="flex items-center justify-center">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button variant="outline" className="flex items-center gap-2">
                                    <Eye size={16} />
                                    Ver Descrição
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl h-[80vh]">
                                  <DialogHeader>
                                    <DialogTitle className="flex items-center gap-2">
                                      <BookOpen className="text-blue-600" size={20} />
                                      {descricoesModulos.letraR.titulo}
                                    </DialogTitle>
                                  </DialogHeader>
                                  <ScrollArea className="h-full pr-4">
                                    <div className="prose prose-sm max-w-none">
                                      <div className="whitespace-pre-line text-sm leading-relaxed">
                                        {descricoesModulos.letraR.conteudo}
                                      </div>
                                    </div>
                                  </ScrollArea>
                                </DialogContent>
                              </Dialog>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>
                  
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gerencial" className="mt-4">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BarChart3 className="text-purple-600" />
                  Programa de Gestão de Lojas - PGL 
                </h3>
                
                {/* Bloco de Introdução ao PGL */}
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpenCheck className="text-purple-600" size={20} />
                      Introdução ao PGL
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="prose prose-sm max-w-none">
                      <p className="text-sm leading-relaxed">
                        <strong>Você faz parte do Programa de Gestão de Vendas</strong>, desenvolvido com o objetivo de auxiliá-lo no aprimoramento de suas habilidades como profissional de varejo.
                      </p>
                      
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
                        <p className="text-sm font-semibold text-amber-800 mb-2">⚠️ Atenção é fundamental!</p>
                        <p className="text-sm text-amber-700">
                          Esteja sempre atento a todas as informações contidas neste manual, ele será seu companheiro na busca pela excelência em gestão de lojas.
                        </p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
                        <p className="text-sm font-semibold text-blue-800 mb-2">💡 De nada adianta a teoria sem prática.</p>
                        <p className="text-sm text-blue-700">
                          Por isso, realize todas as atividades sugeridas pelo PGL. Elas irão ajudá-lo a extrair o melhor de todo o processo de treinamento.
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed">
                        O PGL é um programa de treinamento que abrange conceitos e técnicas exclusivas para o gestor de lojas. Trata-se de um material desenvolvido por profissionais que atuaram ativamente no varejo e que dominam as diversas dificuldades vivenciadas no dia a dia de qualquer salão de vendas.
                      </p>
                      
                      <p className="text-sm leading-relaxed">
                        Os capítulos a seguir têm, basicamente, o objetivo de contextualizar cada uma das ferramentas apresentadas. É preciso que você, gestor de loja, entenda o porquê de cada ferramenta, bem como suas particularidades. Ao compreender o que está por trás de cada uma, você terá maior facilidade para adaptar as técnicas expostas à sua realidade.
                      </p>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 my-4">
                        <p className="text-sm font-semibold text-green-800 mb-2">🎯 O seu objetivo é aplicar todas as ferramentas, não apenas algumas delas.</p>
                        <p className="text-sm text-green-700">
                          Lembre-se: você tem um papel importante como multiplicador interno, visto que ninguém melhor do que você conhece as rotinas de loja.
                        </p>
                      </div>

                      <p className="text-sm leading-relaxed">
                        A partir de exemplos práticos, sua participação será fundamental para adaptar os conceitos descritos ao seu dia a dia. Nosso maior objetivo é aumentar cada vez mais o conhecimento das equipes e, consequentemente, atuar como facilitadores para o crescimento pessoal e profissional de todos os envolvidos.
                      </p>

                      <p className="text-sm leading-relaxed font-semibold">
                        Prepare-se para ter acesso a verdadeiros "tesouros", que darão o upgrade que sua loja precisa para despontar nas vendas.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-4">
                          <h4 className="font-semibold text-sm text-indigo-800 mb-2">📋 FOP</h4>
                          <p className="text-xs text-indigo-700">"Formulário de Observação de Procedimentos" - ferramenta que vai incentivar sua equipe a ser mais disciplinada.</p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4">
                          <h4 className="font-semibold text-sm text-purple-800 mb-2">📊 FODQ</h4>
                          <p className="text-xs text-purple-700">"Formulário de Orientação de Desempenho Quinzenal" - indica aos vendedores "o que fazer" e "como fazer".</p>
                        </div>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
                        <p className="text-sm font-semibold text-center mb-3">🚀 Então, mãos à obra!</p>
                        <p className="text-sm text-center text-gray-700">
                          O Programa de Gestão de Loja (PGL) é a melhor ferramenta para coordenar as atividades de um gestor em seu cotidiano na loja.
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-300 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-800 mb-3">📚 Este programa está dividido em 9 capítulos:</h4>
                        <div className="grid grid-cols-1 gap-2 text-xs">
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">1</Badge>
                            <div>
                              <span className="font-semibold">Introdução ao PGL:</span> Requisitos e temas do manual
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">2</Badge>
                            <div>
                              <span className="font-semibold">Você: Gestor:</span> Características do gestor de loja
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">3</Badge>
                            <div>
                              <span className="font-semibold">Gerência Operacional:</span> Práticas de gestão operacional
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">4</Badge>
                            <div>
                              <span className="font-semibold">Seu Time:</span> Aspectos organizacionais e disciplinares
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">5</Badge>
                            <div>
                              <span className="font-semibold">Acompanhamento:</span> Aspectos relacionados ao desempenho
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">6</Badge>
                            <div>
                              <span className="font-semibold">Evolução:</span> Melhores indicadores através da análise
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">7</Badge>
                            <div>
                              <span className="font-semibold">Recrutamento e Seleção:</span> Buscar um time campeão
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">8</Badge>
                            <div>
                              <span className="font-semibold">Treinamento:</span> Como ser um treinador efetivo
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Badge variant="outline" className="text-xs px-2 py-1">9</Badge>
                            <div>
                              <span className="font-semibold">Ferramentas:</span> Todos os aspectos de produtividade
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Capítulos do PGL */}
                <div className="space-y-4">
                  
                  {/* Você: Gestor */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow border-blue-200 bg-blue-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <UserCog className="text-blue-600" size={20} />
                              Gestor - Curso
                            </div>
                            <ChevronDown className="h-4 w-4 text-blue-600" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-blue-700">
                            Principais características do gestor de loja, preparando-o para lidar com sua equipe
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mt-2 border-blue-200">
                        <CardContent className="pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Primeira linha */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={16} />
                                Você Gestor: Pré-requisitos do Líder 
                              </h4>
                              <VideoPlayer fileName="VOCE-GESTOR-1.mp4" />
                            </div>

                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={16} />
                                Você Gestor: 10 Competências do Gestor
                              </h4>
                              <VideoPlayer fileName="VOCE-GESTOR-2.mp4" />
                            </div>

                            {/* Segunda linha */}
                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={16} />
                                Você Gestor: Competência na prática 
                              </h4>
                              <VideoPlayer fileName="VOCE-GESTOR-3.mp4" />
                            </div>

                            <div className="space-y-3">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={16} />
                                Você Gestor: Liderança 
                              </h4>
                              <VideoPlayer fileName="VOCE-GESTOR-4.mp4" />
                            </div>

                            {/* Terceira linha - vídeo único */}
                            <div className="space-y-3 md:col-span-1">
                              <h4 className="font-semibold text-sm flex items-center gap-2">
                                <PlayCircle className="text-blue-600" size={16} />
                                Você Gestor: Administração do tempo
                              </h4>
                              <VideoPlayer fileName="VOCE-GESTOR-5.mp4" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Gerência Operacional */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow border-green-200 bg-green-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Settings className="text-green-600" size={20} />
                              Gerência Operacional
                            </div>
                            <ChevronDown className="h-4 w-4 text-green-600" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-green-700">
                            Práticas de gestão operacional buscando eficiência e libertação das rotinas que desfocam os gestores do salão de venda
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mt-2 border-green-200">
                        <CardContent className="pt-4">
                          {/* Videos da Gerência Operacional */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <VideoPlayer fileName="Gerencia-Operacional-1.mp4" />
                            <VideoPlayer fileName="Gerencia-Operacional-2.mp4" />
                            <VideoPlayer fileName="Gerencia-Operacional-3.mp4" />
                            <VideoPlayer fileName="Gerencia-Operacional-4.mp4" />
                            <VideoPlayer fileName="Gerencia-Operacional-5.mp4" />
                            <VideoPlayer fileName="Gerencia-Operacional-6.mp4" />
                          </div>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Seu Time */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow border-orange-200 bg-orange-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Users className="text-orange-600" size={20} />
                              Seu Time
                            </div>
                            <ChevronDown className="h-4 w-4 text-orange-600" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-orange-700">
                            Conteúdo voltado para a forma que o gestor deverá conduzir aspectos organizacionais e disciplinares na loja
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mt-2 border-orange-200">
                         <CardContent className="pt-4">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: Estrutura de Loja</h4>
                                 <VideoPlayer fileName="Seu-Time-1.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: Funções De Seu Time </h4>
                                 <VideoPlayer fileName="Seu-Time-3.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: Analisando Seu Time </h4>
                                 <VideoPlayer fileName="Seu-Time-5.mp4" />
                               </div>
                             </div>
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: F.O.P's</h4>
                                 <VideoPlayer fileName="Seu-Time-2.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: Sem Falhas</h4>
                                 <VideoPlayer fileName="Seu-Time-4.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Seu Time: Cumprir Normas</h4>
                                 <VideoPlayer fileName="Seu-Time-6.mp4" />
                               </div>
                             </div>
                           </div>
                         </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Acompanhamento */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Card className="cursor-pointer hover:shadow-md transition-shadow border-teal-200 bg-teal-50">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Eye className="text-teal-600" size={20} />
                              Acompanhamento
                            </div>
                            <ChevronDown className="h-4 w-4 text-teal-600" />
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-teal-700">
                            Capítulo dedicado para direcionar o gestor sobre aspectos relacionados ao desempenho
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mt-2 border-teal-200">
                         <CardContent className="pt-4">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Acompanhamento - Módulo 1</h4>
                                 <VideoPlayer fileName="Acompanhamento-1.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Acompanhamento - Módulo 3</h4>
                                 <VideoPlayer fileName="Acompanhamento-3.mp4" />
                               </div>
                             </div>
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Acompanhamento - Módulo 2</h4>
                                 <VideoPlayer fileName="Acompanhamento-2.mp4" />
                               </div>
                             </div>
                           </div>
                         </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                   {/* Evolução */}
                   <Collapsible>
                     <CollapsibleTrigger asChild>
                       <Card className="cursor-pointer hover:shadow-md transition-shadow border-purple-200 bg-purple-50">
                         <CardHeader className="pb-3">
                           <CardTitle className="text-lg flex items-center justify-between">
                             <div className="flex items-center gap-2">
                               <TrendingUp className="text-purple-600" size={20} />
                               Evolução
                             </div>
                             <ChevronDown className="h-4 w-4 text-purple-600" />
                           </CardTitle>
                         </CardHeader>
                         <CardContent>
                           <p className="text-sm text-purple-700">
                             Ferramentas para acompanhar evolução e crescimento da equipe e resultados
                           </p>
                         </CardContent>
                       </Card>
                     </CollapsibleTrigger>
                     <CollapsibleContent>
                       <Card className="mt-2 border-purple-200">
                         <CardContent className="pt-4">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Evolução - Módulo 1</h4>
                                 <VideoPlayer fileName="Evolucao-1.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Evolução - Módulo 3</h4>
                                 <VideoPlayer fileName="Evolucao-3.mp4" />
                               </div>
                             </div>
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Evolução - Módulo 2</h4>
                                 <VideoPlayer fileName="Evolucao-2.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Evolução - Módulo 4</h4>
                                 <VideoPlayer fileName="Evolucao-4.mp4" />
                               </div>
                             </div>
                           </div>
                         </CardContent>
                       </Card>
                     </CollapsibleContent>
                   </Collapsible>

                   {/* Treinamento */}
                   <Collapsible>
                     <CollapsibleTrigger asChild>
                       <Card className="cursor-pointer hover:shadow-md transition-shadow border-indigo-200 bg-indigo-50">
                         <CardHeader className="pb-3">
                           <CardTitle className="text-lg flex items-center justify-between">
                             <div className="flex items-center gap-2">
                               <GraduationCap className="text-indigo-600" size={20} />
                               Treinamento
                             </div>
                             <ChevronDown className="h-4 w-4 text-indigo-600" />
                           </CardTitle>
                         </CardHeader>
                         <CardContent>
                           <p className="text-sm text-indigo-700">
                             Como ser um treinador e não permitir que os métodos da empresa sejam perdidos
                           </p>
                         </CardContent>
                       </Card>
                     </CollapsibleTrigger>
                     <CollapsibleContent>
                       <Card className="mt-2 border-indigo-200">
                         <CardContent className="pt-4">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Treinamento - Módulo 1</h4>
                                 <VideoPlayer fileName="Treinamento-1.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Treinamento - Módulo 3</h4>
                                 <VideoPlayer fileName="Treinamento-3.mp4" />
                               </div>
                             </div>
                             <div className="space-y-4">
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Treinamento - Módulo 2</h4>
                                 <VideoPlayer fileName="Treinamento-2.mp4" />
                               </div>
                               <div>
                                 <h4 className="text-sm font-medium mb-2">Treinamento - Módulo 4</h4>
                                 <VideoPlayer fileName="Treinamento-4.mp4" />
                               </div>
                             </div>
                           </div>
                         </CardContent>
                       </Card>
                     </CollapsibleContent>
                   </Collapsible>

                </div>
              </div>
            </TabsContent>

            <TabsContent value="treinamento" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <BookOpen className="text-orange-600" />
                  Centro de Treinamento - PVA & PGL
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Módulos PVA</CardTitle>
                    </CardHeader>
                    
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Módulos PGL</CardTitle>
                    </CardHeader>
                    
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="estoque" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Package className="text-teal-600" />
                  Gestão de Estoque e Retaguarda
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Inventário</CardTitle>
                    </CardHeader>
                    
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Visual Merchandising</CardTitle>
                    </CardHeader>
                    
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Processos Admin</CardTitle>
                    </CardHeader>
                    
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gamificacao" className="mt-4">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Trophy className="text-yellow-600" />
                  Sistema de Gamificação e Conquistas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Conquistas Recentes</CardTitle>
                    </CardHeader>
                    
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Ranking da Loja</CardTitle>
                    </CardHeader>
                    
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>;
};
export default LojaVirtual;