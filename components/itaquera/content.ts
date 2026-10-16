/** Conteúdo da LP Itaquera (dados de negócio, copy e listas). */

export const NAP = {
  nome: "Locadora Exatidão",
  rua: "Av. Calim Eid, 116",
  bairro: "Vila Ré",
  cidade: "São Paulo",
  uf: "SP",
  email: "contato@locadoraexatidao.com.br",
  horario: "Segunda a sexta, das 8h às 18h",
}

export const ENDERECO_COMPLETO = `${NAP.rua} - ${NAP.bairro}, ${NAP.cidade} - ${NAP.uf}`
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${NAP.nome}, ${ENDERECO_COMPLETO}`)}`
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ENDERECO_COMPLETO)}&output=embed`

export const BAIRROS = [
  "Itaquera",
  "Vila Ré",
  "Cidade Líder",
  "José Bonifácio",
  "Artur Alvim",
  "Guaianases",
  "São Mateus",
  "Parque do Carmo",
  "Vila Matilde",
  "Penha",
  "Ponte Rasa",
  "Ermelino Matarazzo",
  "Aricanduva",
  "Cidade Tiradentes",
]

export const DORES = [
  {
    dor: "Entrega que não chega no dia combinado",
    solucao: "Frota própria e entrega em até 24 h após a confirmação do pedido.",
  },
  {
    dor: "Peça faltando, torta ou enferrujada",
    solucao: "Cada equipamento é conferido antes de sair do depósito.",
  },
  {
    dor: "Módulo a mais ou a menos no orçamento",
    solucao: "Calculamos os módulos pela altura e pela metragem da sua obra.",
  },
  {
    dor: "Montagem improvisada, fora da norma",
    solucao: "Andaime completo conforme a NR-18: travas, guarda-corpo, piso e sapatas.",
  },
]

export const ACESSORIOS = [
  { nome: "Escada para andaime", uso: "Acesso seguro entre os níveis.", img: "prod-escada", pedido: "escada para andaime" },
  { nome: "Guarda-corpo", uso: "Proteção lateral contra quedas na plataforma.", img: "prod-guarda-corpo", pedido: "guarda-corpo" },
  { nome: "Piso metálico", uso: "Plataforma de trabalho firme para a equipe.", img: "prod-piso-metalico", pedido: "piso metálico" },
  { nome: "Rodízio", uso: "Para mover o andaime sem desmontar.", img: "prod-rodizio", pedido: "rodízio para andaime" },
  { nome: "Sapata ajustável", uso: "Nivela o andaime em piso irregular.", img: "prod-sapata-ajustavel", pedido: "sapata ajustável" },
  { nome: "Sapata fixa", uso: "Base de apoio estável em piso nivelado.", img: "prod-sapata-fixa", pedido: "sapata fixa" },
]

export const APLICACOES = [
  {
    titulo: "Obras e reformas",
    texto: "Reformas residenciais, comerciais e grandes obras.",
    img: "app-obras",
    h: 623,
    servico: "obra ou reforma",
  },
  {
    titulo: "Manutenção e pintura",
    texto: "Condomínios, empresas, fábricas e galpões.",
    img: "app-manutencao",
    h: 623,
    servico: "manutenção ou pintura",
  },
  {
    titulo: "Eventos e estruturas",
    texto: "Palcos, palanques e passarelas temporárias.",
    img: "app-eventos",
    h: 541,
    servico: "evento ou estrutura temporária",
  },
]

export const PASSOS = [
  { titulo: "Chame no WhatsApp", texto: "Conte o tipo de serviço, a altura e o endereço da obra." },
  { titulo: "Receba o orçamento", texto: "Calculamos a quantidade de módulos e o valor do aluguel." },
  { titulo: "Receba na obra", texto: "Entregamos com frota própria em Itaquera e região." },
  { titulo: "Retiramos no fim", texto: "Terminou o serviço? Avise e buscamos o equipamento." },
]

export const SEGURANCA = [
  "Travas diagonais para estabilidade",
  "Guarda-corpos de proteção",
  "Pisos metálicos",
  "Escadas para andaime",
  "Sapatas fixas e ajustáveis",
  "Rodízios de borracha",
]

export const EPIS = [
  "Cinto de segurança tipo paraquedista",
  "Talabarte duplo para movimentação",
  "Trava-quedas para trabalhos em altura",
]

export const DEPOIMENTOS = [
  {
    nome: "Carlos M.",
    papel: "Mestre de obra",
    bairro: "Itaquera",
    texto:
      "Os andaimes chegaram no prazo e em perfeito estado. A equipe me ajudou a calcular a quantidade certa para o prédio de 4 andares.",
  },
  {
    nome: "Fernanda S.",
    papel: "Síndica",
    bairro: "Cidade Líder",
    texto:
      "Precisava de andaimes para pintar a fachada do condomínio. O atendimento pelo WhatsApp foi rápido e o preço, justo. Já indiquei para outros síndicos.",
  },
  {
    nome: "Roberto A.",
    papel: "Empreiteiro",
    bairro: "São Mateus",
    texto:
      "Trabalho com reforma há 15 anos e essa é a melhor locadora da região. Equipamento sempre bem conservado e entrega pontual.",
  },
]

export const FAQS = [
  {
    pergunta: "Qual o prazo de entrega em Itaquera?",
    resposta:
      "Normalmente entregamos em até 24 horas após a confirmação do pedido. Para urgências, fale com a equipe pelo WhatsApp — muitas vezes conseguimos entregar no mesmo dia em Itaquera e nos bairros próximos.",
  },
  {
    pergunta: "Como é calculado o valor do aluguel?",
    resposta:
      "Pela quantidade de módulos e pelo período de locação. Quanto maior o prazo e a quantidade, melhores as condições. Mande a altura e o tipo de serviço pelo WhatsApp e enviamos uma proposta para a sua obra.",
  },
  {
    pergunta: "Qual o período mínimo de locação?",
    resposta:
      "Geralmente uma semana, mas trabalhamos com flexibilidade. Diga o seu prazo pelo WhatsApp e encontramos a melhor solução.",
  },
  {
    pergunta: "Posso retirar os andaimes no depósito?",
    resposta:
      "Pode. Você retira no nosso depósito ou pede a entrega no endereço da obra. A entrega facilita bastante, principalmente para quantidades maiores de módulos.",
  },
  {
    pergunta: "Preciso de responsável técnico para montar o andaime?",
    resposta:
      "Para obras maiores ou em altura elevada, é recomendável ter um profissional habilitado supervisionando a montagem, como exige a NR-18. Nossa equipe orienta sobre essa necessidade de acordo com o seu projeto.",
  },
  {
    pergunta: "Quais as formas de pagamento?",
    resposta:
      "PIX, transferência bancária, cartão de crédito e boleto para empresas. Locações de longo prazo têm condições especiais.",
  },
  {
    pergunta: "Como funciona a renovação da locação?",
    resposta:
      "Se precisar de mais tempo, avise pelo WhatsApp antes do vencimento. Ajustamos o contrato de forma simples, sem burocracia.",
  },
]
