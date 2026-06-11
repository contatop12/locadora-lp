import Image from "next/image"
import { LeadForm } from "./lead-form"
import { Shield, Clock, Truck } from "lucide-react"

export function HeroSection() {
  const benefits = [
    { icon: Shield, text: "Segurança NR-18" },
    { icon: Clock, text: "Montagem rápida" },
    { icon: Truck, text: "Entrega em Itaquera" },
  ]

  return (
    <section className="relative min-h-[calc(100vh-72px)]" aria-labelledby="hero-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Trabalhadores utilizando andaimes tubulares em obra"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center min-h-[calc(100vh-72px)]">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center w-full py-8 md:py-12">
          {/* Left - Text Content */}
          <div className="space-y-4 md:space-y-5">
            <span className="section-kicker">
              <span className="section-kicker-line" />
              Locadora Exatidão
            </span>

            <h1
              id="hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Aluguel de Andaimes em{" "}
              <span className="text-primary">Itaquera</span>
            </h1>

            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg text-balance">
              Andaimes tubulares de alta qualidade para sua obra na Zona Leste de SP. 
              Atendemos engenheiros, mestres de obra, síndicos e empreiteiros.
            </p>

            <ul className="flex flex-wrap gap-3 md:gap-4" aria-label="Benefícios">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/15">
                  <benefit.icon className="w-4 h-4 text-primary" />
                  <span className="text-white text-sm font-medium">{benefit.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Form */}
          <div id="formulario" className="lg:max-w-md lg:ml-auto">
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>
    </section>
  )
}
