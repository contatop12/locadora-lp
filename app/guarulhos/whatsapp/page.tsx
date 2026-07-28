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
import { getWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Aluguel de Andaimes em Guarulhos | Orçamento WhatsApp | Locadora Exatidão",
  description:
    "Aluguel de andaimes tubulares em Guarulhos e região. Solicite orçamento direto pelo WhatsApp — entrega rápida e andaimes conforme NR-18.",
  keywords:
    "aluguel de andaimes em guarulhos, orçamento whatsapp andaimes, locação de andaimes guarulhos, andaime tubular guarulhos",
  openGraph: {
    title: "Aluguel de Andaimes em Guarulhos | Orçamento WhatsApp",
    description:
      "Andaimes tubulares com segurança e entrega rápida em Guarulhos. Fale conosco pelo WhatsApp!",
    type: "website",
    locale: "pt_BR",
  },
  robots: "noindex, follow",
}

export default function GuarulhosWhatsAppPage() {
  const whatsappUrl = getWhatsAppUrl("guarulhos")

  return (
    <>
      <Header whatsappUrl={whatsappUrl} />
      <main>
        <HeroSection whatsappUrl={whatsappUrl} />
        <section id="produtos">
          <ProductsSection whatsappUrl={whatsappUrl} />
        </section>
        <section id="beneficios">
          <BenefitsSection />
        </section>
        <section id="aplicacoes">
          <ApplicationsSection whatsappUrl={whatsappUrl} />
        </section>
        <section id="seguranca">
          <SafetySection whatsappUrl={whatsappUrl} />
        </section>
        <section id="como-funciona">
          <HowItWorksSection />
        </section>
        <TestimonialsSection />
        <section id="faq">
          <FAQSection whatsappUrl={whatsappUrl} />
        </section>
        <CTASection whatsappUrl={whatsappUrl} />
      </main>
      <Footer whatsappUrl={whatsappUrl} />
    </>
  )
}
