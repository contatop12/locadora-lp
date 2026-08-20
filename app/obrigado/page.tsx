import { Suspense } from "react"
import type { Metadata } from "next"
import { ObrigadoContent } from "@/components/obrigado-content"

export const metadata: Metadata = {
  title: "Obrigado | Locadora Exatidão",
  description:
    "Recebemos sua solicitação de orçamento. Em seguida você será direcionado ao WhatsApp da Locadora Exatidão.",
  robots: "noindex, nofollow",
}

function ObrigadoFallback() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-4">
      <p className="text-sm text-white/70">Carregando...</p>
    </main>
  )
}

export default function ObrigadoPage() {
  return (
    <Suspense fallback={<ObrigadoFallback />}>
      <ObrigadoContent />
    </Suspense>
  )
}
