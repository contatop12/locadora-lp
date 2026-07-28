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
import { getWhatsAppUrl } from "@/lib/whatsapp"

export const metadata: Metadata = {
  title: "Aluguel de Andaimes em Itaquera | Orçamento WhatsApp | Locadora Exatidão",
  description:
    "Aluguel de andaimes tubulares em Itaquera e Zona Leste de SP. Solicite orçamento direto pelo WhatsApp — entrega rápida e andaimes conforme NR-18.",
  keywords:
    "aluguel de andaimes em itaquera, orçamento whatsapp andaimes, locação de andaimes zona leste, andaime tubular itaquera",
  openGraph: {
    title: "Aluguel de Andaimes em Itaquera | Orçamento WhatsApp",
    description:
      "Andaimes tubulares com segurança e entrega rápida em Itaquera. Fale conosco pelo WhatsApp!",
    type: "website",
    locale: "pt_BR",
  },
  robots: "noindex, follow",
}

export default function ItaqueraWhatsAppPage() {
  const whatsappUrl = getWhatsAppUrl("itaquera")

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
