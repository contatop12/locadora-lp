import { Barlow_Condensed } from "next/font/google"
import { Header, Hero } from "./hero"
import {
  Aplicacoes,
  Bairros,
  BotaoFlutuante,
  ComoFunciona,
  Contato,
  Depoimentos,
  Duvidas,
  Equipamentos,
  Problema,
  Rodape,
  Seguranca,
} from "./sections"
import { WhatsAppTracker } from "./wa-tracker"
import { BAIRROS, FAQS, NAP } from "./content"
import { getWhatsAppNumber } from "@/lib/whatsapp"
import "./itaquera.css"

// Condensada de sinalização: a mesma voz dos adesivos do caminhão. Só 2 pesos, só latin.
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow",
  display: "swap",
})

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: NAP.nome,
    description: "Aluguel de andaimes tubulares e acessórios em Itaquera e na Zona Leste de São Paulo.",
    telephone: `+${getWhatsAppNumber()}`,
    email: NAP.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${NAP.rua} - ${NAP.bairro}`,
      addressLocality: NAP.cidade,
      addressRegion: NAP.uf,
      addressCountry: "BR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    areaServed: BAIRROS.map((name) => ({ "@type": "Place", name: `${name}, São Paulo - SP` })),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.pergunta,
      acceptedAnswer: { "@type": "Answer", text: f.resposta },
    })),
  },
]

export function ItaqueraLanding() {
  return (
    <div className={`itq ${display.variable}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:text-navy"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Bairros />
        <Problema />
        <Equipamentos />
        <Aplicacoes />
        <ComoFunciona />
        <Seguranca />
        <Depoimentos />
        <Duvidas />
        <Contato />
      </main>
      <Rodape />
      <BotaoFlutuante />
      <WhatsAppTracker />
    </div>
  )
}
