import { Metadata } from "next"
import { ItaqueraLanding } from "@/components/itaquera/landing"

// Mesma página de /itaquera (que agora também vai direto ao WhatsApp). Mantida para
// não quebrar anúncios que apontam para esta URL.
export const metadata: Metadata = {
  title: "Aluguel de Andaimes em Itaquera | Orçamento WhatsApp | Locadora Exatidão",
  description:
    "Aluguel de andaimes tubulares em Itaquera e Zona Leste de SP. Solicite orçamento direto pelo WhatsApp — entrega rápida e andaimes conforme NR-18.",
  keywords:
    "aluguel de andaimes em itaquera, orçamento whatsapp andaimes, locação de andaimes zona leste, andaime tubular itaquera",
  openGraph: {
    title: "Aluguel de Andaimes em Itaquera | Orçamento WhatsApp",
    description: "Andaimes tubulares com segurança e entrega rápida em Itaquera. Fale conosco pelo WhatsApp!",
    type: "website",
    locale: "pt_BR",
  },
  robots: "noindex, follow",
}

export default function ItaqueraWhatsAppPage() {
  return <ItaqueraLanding />
}
