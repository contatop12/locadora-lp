"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { CheckCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getLeadWhatsAppUrl } from "@/lib/whatsapp"

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
      />
    </svg>
  )
}

export function ObrigadoContent() {
  const searchParams = useSearchParams()
  const name = searchParams.get("nome")?.trim() || undefined
  const whatsappUrl = useMemo(() => getLeadWhatsAppUrl(name), [name])
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown((current) => Math.max(current - 1, 0))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    if (countdown > 0) return

    const redirect = window.setTimeout(() => {
      window.location.href = whatsappUrl
    }, 250)

    return () => window.clearTimeout(redirect)
  }, [countdown, whatsappUrl])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#0a0a0a_55%,_#000_100%)]">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(249,115,22,0.18), transparent 40%), radial-gradient(circle at 80% 10%, rgba(234,179,8,0.12), transparent 35%)",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-4 py-12 text-center">
        <Link href="/" className="mb-10">
          <Image
            src="/images/logo-exatidao-horizontal.png"
            alt="Exatidão Locação de Equipamentos"
            width={220}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <div className="w-full rounded-2xl border border-white/10 bg-white/95 p-6 shadow-2xl shadow-black/40 backdrop-blur md:p-8">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>

          <h1
            className="mb-3 text-2xl font-bold text-foreground md:text-3xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {name ? `Obrigado, ${name}!` : "Obrigado!"}
          </h1>

          <p className="mb-6 text-sm text-muted-foreground md:text-base">
            Recebemos seus dados. Em instantes vamos te direcionar para o WhatsApp
            da Locadora Exatidão para finalizar seu orçamento.
          </p>

          <div className="mb-5 flex items-center justify-center gap-2 rounded-lg bg-muted/80 px-3 py-2 text-sm text-muted-foreground">
            {countdown > 0 ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                Abrindo WhatsApp em {countdown}s...
              </>
            ) : (
              <>
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                Redirecionando...
              </>
            )}
          </div>

          <Button
            asChild
            size="lg"
            className="w-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90"
          >
            <a href={whatsappUrl} rel="noopener noreferrer">
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Abrir WhatsApp agora
            </a>
          </Button>

          <p className="mt-4 text-xs text-muted-foreground">
            Se o WhatsApp não abrir automaticamente, use o botão acima.
          </p>
        </div>

        <Link
          href="/"
          className="mt-8 text-sm text-white/60 transition-colors hover:text-white"
        >
          Voltar para o site
        </Link>
      </div>
    </main>
  )
}
