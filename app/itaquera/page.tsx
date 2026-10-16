import { Metadata } from "next"
import { ItaqueraLanding } from "@/components/itaquera/landing"

export const metadata: Metadata = {
  title: "Aluguel de Andaimes em Itaquera | Locadora Exatidão - Entrega Rápida",
  description:
    "Aluguel de andaimes tubulares em Itaquera e Zona Leste de SP. Conforme a NR-18, entrega em até 24 h com frota própria. Peça seu orçamento direto no WhatsApp.",
  keywords:
    "aluguel de andaimes em itaquera, locação de andaimes zona leste, andaime tubular itaquera, aluguel andaimes são paulo, locadora de andaimes itaquera",
  openGraph: {
    title: "Aluguel de Andaimes em Itaquera | Locadora Exatidão",
    description: "Andaimes tubulares conforme a NR-18, com entrega rápida em Itaquera e região. Orçamento direto no WhatsApp.",
    type: "website",
    locale: "pt_BR",
  },
}

export default function ItaqueraPage() {
  return <ItaqueraLanding />
}
