import { CheckCircle, Zap, Shield, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança Total",
      description:
        "Andaimes normatizados pela NR-18, montados com travas diagonais, guarda-corpos e todos os acessórios necessários para proteção do trabalhador.",
    },
    {
      icon: Zap,
      title: "Montagem Rápida",
      description:
        "Encaixes simples e firmes que dispensam o uso de ferramentas. Rapidez e facilidade na montagem e desmontagem, economizando tempo na sua obra.",
    },
    {
      icon: TrendingUp,
      title: "Alta Durabilidade",
      description:
        "Estrutura tubular com maior resistência e durabilidade, tornando-se a solução mais apropriada para os mais diversos tipos de serviços.",
    },
    {
      icon: CheckCircle,
      title: "Versatilidade",
      description:
        "Ideal para reformas, pintura de fachadas, revestimentos, manutenção predial e industrial, eventos, cenários e muito mais.",
    },
  ]

  return (
    <section className="py-10 md:py-16 bg-background" aria-labelledby="benefits-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <span className="section-kicker justify-center mb-2">
            <span className="section-kicker-line" />
            Vantagens
            <span className="section-kicker-line" />
          </span>
          <h2
            id="benefits-heading"
            className="text-xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Por que escolher o Andaime Tubular?
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Encaixes simples e firmes, dispensando ferramentas. Seguro, versátil e fácil de montar e desmontar.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              <CardContent className="p-3 md:p-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2 md:mb-4">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h3 className="text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-2">{benefit.title}</h3>
                <p className="text-xs md:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 md:mt-8 bg-secondary rounded-lg md:rounded-xl p-4 md:p-6">
          <h3 className="text-base md:text-xl font-semibold text-foreground mb-3 md:mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            O que é o Andaime Tubular?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
            Plataformas para trabalhos em lugares elevados, onde não possam ser executados em segurança a partir do piso.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            {[
              "Ótimo rendimento e produtividade",
              "Montagem sem ferramentas especiais",
              "Maior resistência e durabilidade",
              "Acesso seguro a áreas elevadas",
              "Diversos tipos de serviços",
              "Equipamentos em ótimo estado",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
