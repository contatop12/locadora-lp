import { LeadForm } from "./lead-form"
import { Shield, Truck, MessageCircle } from "lucide-react"

export function CTASection() {
  const highlights = [
    { icon: Shield, text: "Andaimes seguros conforme NR-18" },
    { icon: Truck, text: "Entrega rápida em Itaquera e região" },
    { icon: MessageCircle, text: "Atendimento humanizado via WhatsApp" },
  ]

  return (
    <section className="py-10 md:py-16 bg-foreground" aria-labelledby="cta-heading" id="contato">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <h2
              id="cta-heading"
              className="text-xl md:text-4xl font-bold text-background mb-2 md:mb-4 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Pronto para alugar andaimes em Itaquera?
            </h2>
            <p className="text-sm md:text-lg text-background/80 max-w-2xl mx-auto mb-4 md:mb-8 text-balance">
              Receba um orçamento personalizado em minutos pelo WhatsApp.
            </p>

            <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-6 md:mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-1.5 md:gap-2 text-background/90">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  <span className="text-xs md:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-lg md:rounded-xl p-4 md:p-8 max-w-md mx-auto">
            <LeadForm variant="footer" />
          </div>
        </div>
      </div>
    </section>
  )
}
