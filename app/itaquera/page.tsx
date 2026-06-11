import { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ApplicationsSection } from "@/components/applications-section"
import { SafetySection } from "@/components/safety-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Aluguel de Andaimes em Itaquera | Locadora Exatidão - Entrega Rápida",
  description: "Aluguel de andaimes tubulares em Itaquera e Zona Leste de SP. Andaimes seguros conforme NR-18, entrega rápida e suporte técnico especializado. Solicite orçamento pelo WhatsApp!",
  keywords: "aluguel de andaimes em itaquera, locação de andaimes zona leste, andaime tubular itaquera, aluguel andaimes são paulo, locadora de andaimes itaquera",
  openGraph: {
    title: "Aluguel de Andaimes em Itaquera | Locadora Exatidão",
    description: "Andaimes tubulares com segurança e entrega rápida em Itaquera e região. Solicite seu orçamento pelo WhatsApp!",
    type: "website",
    locale: "pt_BR",
  },
}

export default function ItaqueraPage() {
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
