import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Qual o prazo de entrega em Itaquera?",
      answer:
        "Normalmente entregamos em até 24 horas após a confirmação do pedido. Para urgências, consulte nossa equipe pelo WhatsApp — muitas vezes conseguimos entrega no mesmo dia na região de Itaquera e bairros próximos.",
    },
    {
      question: "Preciso de responsável técnico para montagem do andaime?",
      answer:
        "Para obras maiores ou em altura elevada, é recomendável ter um profissional habilitado supervisionando a montagem, conforme exige a NR-18. Nossa equipe pode orientar sobre essa necessidade de acordo com o seu projeto.",
    },
    {
      question: "Posso retirar os andaimes no local ou só fazem entrega?",
      answer:
        "Oferecemos as duas opções! Você pode retirar diretamente no nosso depósito ou solicitar entrega no endereço da obra. A entrega facilita muito, especialmente para quantidades maiores de módulos.",
    },
    {
      question: "Qual o período mínimo de locação?",
      answer:
        "O período mínimo geralmente é de uma semana, mas trabalhamos com flexibilidade. Entre em contato pelo WhatsApp e informe seu prazo — vamos encontrar a melhor solução para sua necessidade.",
    },
    {
      question: "Quais as formas de pagamento?",
      answer:
        "Aceitamos PIX, transferência bancária, cartão de crédito e boleto para empresas. Condições especiais para locações de longo prazo. Deixe seu WhatsApp que nossa equipe detalha as opções.",
    },
    {
      question: "Como é calculado o valor do aluguel?",
      answer:
        "O orçamento é calculado com base na quantidade de módulos necessários e no período de locação. Quanto maior o prazo e a quantidade, melhores as condições. Informe os detalhes da sua obra e enviamos uma proposta personalizada.",
    },
    {
      question: "Como funciona a renovação da locação?",
      answer:
        "Caso precise estender o prazo, basta nos avisar pelo WhatsApp antes do vencimento. Ajustamos o contrato de forma simples e rápida, sem burocracia. Nosso objetivo é facilitar sua obra.",
    },
  ]

  return (
    <section className="py-10 md:py-16 bg-background" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2
              id="faq-heading"
              className="text-xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Perguntas Frequentes
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground text-balance">
              Dúvidas sobre aluguel de andaimes? Veja as respostas mais comuns.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-2 md:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-4 md:px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-medium py-3 md:py-4 hover:no-underline text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-3 md:pb-4 leading-relaxed text-xs md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-center text-muted-foreground mt-6 md:mt-8 text-sm md:text-base">
            Tem outra dúvida?{" "}
            <a href="#formulario" className="text-primary font-medium hover:underline">
              Deixe seu WhatsApp
            </a>{" "}
            que respondemos rapidamente.
          </p>
        </div>
      </div>
    </section>
  )
}
