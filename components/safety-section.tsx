import Image from "next/image"
import { ShieldCheck, CheckCircle, HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface SafetySectionProps {
  whatsappUrl?: string
}

export function SafetySection({ whatsappUrl }: SafetySectionProps = {}) {
  const ctaHref = whatsappUrl ?? "#formulario"
  const isExternal = Boolean(whatsappUrl)
  const safetyItems = [
    "Travas diagonais para estabilidade",
    "Guarda-corpos de proteção",
    "Pisos metálicos",
    "Escadas para andaime",
    "Sapatas fixas",
    "Sapatas ajustáveis",
    "Rodízios de borracha",
  ]

  const epiItems = [
    "Cinto de segurança tipo paraquedista",
    "Talabarte duplo para movimentação",
    "Trava-quedas para trabalhos em altura",
  ]

  return (
    <section className="relative py-10 md:py-16 overflow-hidden" aria-labelledby="safety-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/seguranca-nr18-background.jpg"
          alt=""
          fill
          className="object-cover opacity-40"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <ShieldCheck className="w-3 h-3 md:w-4 md:h-4" />
              Segurança é prioridade
            </div>

            <h2
              id="safety-heading"
              className="text-xl md:text-4xl font-bold text-foreground mb-3 md:mb-6 text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Andaimes conforme NR-18
            </h2>

            <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-8 leading-relaxed text-balance">
              Andaimes montados seguindo as normas de segurança do trabalho, garantindo proteção para sua equipe.
            </p>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <h3 className="text-base md:text-xl font-semibold text-foreground">Acessórios disponíveis</h3>
              <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
                {safetyItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                    <span className="text-xs md:text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild size="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base">
              {isExternal ? (
                <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                  Quero andaime seguro
                </a>
              ) : (
                <Link href={ctaHref}>
                  Quero andaime seguro
                </Link>
              )}
            </Button>
          </div>

          <div className="bg-secondary rounded-lg md:rounded-xl p-4 md:p-8">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <HardHat className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              </div>
              <h3 className="text-base md:text-xl font-semibold text-foreground">EPIs Recomendados</h3>
            </div>

            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Orientamos sobre equipamentos de proteção individual para trabalho em altura:
            </p>

            <ul className="space-y-2 md:space-y-4 mb-4 md:mb-6">
              {epiItems.map((item, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3 bg-card p-3 md:p-4 rounded-lg">
                  <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-xs md:text-base text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs md:text-sm text-muted-foreground border-t border-border pt-3 md:pt-4">
              Orientação completa sobre uso seguro. Fale pelo WhatsApp!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
