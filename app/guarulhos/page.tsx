import { Metadata } from "next"
import { Header } from "@/components/guarulhos/header"
import { HeroSection } from "@/components/guarulhos/hero-section"
import { ProductsSection } from "@/components/products-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ApplicationsSection } from "@/components/applications-section"
import { SafetySection } from "@/components/safety-section"
import { HowItWorksSection } from "@/components/guarulhos/how-it-works-section"
import { TestimonialsSection } from "@/components/guarulhos/testimonials-section"
import { FAQSection } from "@/components/guarulhos/faq-section"
import { CTASection } from "@/components/guarulhos/cta-section"
import { Footer } from "@/components/guarulhos/footer"

export const metadata: Metadata = {
  title: "Aluguel de Andaimes em Guarulhos | Locadora Exatidão - Entrega Rápida",
  description: "Aluguel de andaimes tubulares em Guarulhos e região. Andaimes seguros conforme NR-18, entrega rápida e suporte técnico especializado. Solicite orçamento pelo WhatsApp!",
  keywords: "aluguel de andaimes em guarulhos, locação de andaimes guarulhos, andaime tubular guarulhos, aluguel andaimes são paulo, locadora de andaimes guarulhos",
  openGraph: {
    title: "Aluguel de Andaimes em Guarulhos | Locadora Exatidão",
    description: "Andaimes tubulares com segurança e entrega rápida em Guarulhos e região. Solicite seu orçamento pelo WhatsApp!",
    type: "website",
    locale: "pt_BR",
  },
}

export default function GuarulhosPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <section id="produtos">
          <ProductsSection />
        </section>
        <section id="beneficios">
          <BenefitsSection />
        </section>
        <section id="aplicacoes">
          <ApplicationsSection />
        </section>
        <section id="seguranca">
          <SafetySection />
        </section>
        <section id="como-funciona">
          <HowItWorksSection />
        </section>
        <TestimonialsSection />
        <section id="faq">
          <FAQSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
