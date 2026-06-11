import { Star, Quote, MapPin, Clock, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Carlos M.",
      role: "Mestre de Obra",
      location: "Itaquera",
      text: "Excelente atendimento! Os andaimes chegaram no prazo e em perfeito estado. A equipe me ajudou a calcular a quantidade certa para o prédio de 4 andares. Recomendo!",
      rating: 5,
    },
    {
      name: "Fernanda S.",
      role: "Síndica",
      location: "Cidade Líder",
      text: "Precisava de andaimes para pintura da fachada do condomínio. O atendimento pelo WhatsApp foi super rápido e o preço muito justo. Já indiquei para outros síndicos.",
      rating: 5,
    },
    {
      name: "Roberto A.",
      role: "Empreiteiro",
      location: "São Mateus",
      text: "Trabalho com reforma há 15 anos e essa é a melhor locadora da região. Equipamentos sempre bem conservados e entrega pontual. Parceria de confiança.",
      rating: 5,
    },
  ]

  const trustBadges = [
    { icon: Clock, text: "Atendimento rápido em Itaquera e bairros vizinhos" },
    { icon: Wrench, text: "Equipamentos revisados e em ótimo estado" },
    { icon: Star, text: "Equipe treinada para orientação de uso seguro" },
    { icon: MapPin, text: "Anos de experiência na Zona Leste de SP" },
  ]

  return (
    <section className="py-10 md:py-16 bg-secondary/50" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <span className="section-kicker justify-center mb-2">
            <span className="section-kicker-line" />
            Depoimentos
            <span className="section-kicker-line" />
          </span>
          <h2
            id="testimonials-heading"
            className="text-xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            O que nossos clientes dizem
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Depoimentos de profissionais que confiam na Locadora Exatidão.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-0.5 md:gap-1 mb-3 md:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                  ))}
                </div>

                <Quote className="w-6 h-6 md:w-8 md:h-8 text-primary/20 mb-1 md:mb-2" />
                <p className="text-xs md:text-base text-foreground mb-4 md:mb-6 leading-relaxed">{testimonial.text}</p>

                <div className="flex items-center gap-2 md:gap-3 pt-3 md:pt-4 border-t border-border">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm md:text-base">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm md:text-base">{testimonial.name}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-secondary rounded-lg md:rounded-xl p-4 md:p-8">
          <h3 className="text-base md:text-xl font-semibold text-foreground text-center mb-4 md:mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Por que confiar na Locadora Exatidão
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <badge.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <span className="text-foreground text-xs md:text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
