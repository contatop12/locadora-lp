"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle } from "lucide-react"

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" />
    </svg>
  )
}

interface LeadFormProps {
  variant?: "hero" | "inline" | "footer"
  className?: string
}

export function LeadForm({ variant = "hero", className = "" }: LeadFormProps) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const formId = `form-${variant === "hero" ? "hero" : variant === "footer" ? "cta" : "inline"}`

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "")
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(formatWhatsApp(e.target.value))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    const cleanPhone = whatsapp.replace(/\D/g, "")
    if (cleanPhone.length < 10 || cleanPhone.length > 11) {
      setError("Por favor, insira um número de WhatsApp válido")
      return
    }

    const trimmedName = name.trim()
    if (trimmedName.length < 2) {
      setError("Por favor, insira seu nome")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("https://n8n.sitespdoze.com.br/webhook/lp-itaquera", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          whatsapp: `55${cleanPhone}`,
          formId: formId,
          source: "landing-page-andaimes-itaquera",
          timestamp: new Date().toISOString(),
        }),
      })

      if (!response.ok) throw new Error("Erro ao enviar")

      router.push(`/obrigado?nome=${encodeURIComponent(trimmedName)}`)
    } catch {
      setError("Ocorreu um erro. Tente novamente ou entre em contato pelo telefone.")
      setIsSubmitting(false)
    }
  }

  const isHero = variant === "hero"
  const isFooter = variant === "footer"

  return (
    <form id={formId} onSubmit={handleSubmit} className={className}>
      <div
        className={`${
          isHero
            ? "relative bg-card/95 backdrop-blur-sm p-4 md:p-6 rounded-xl shadow-2xl border border-border overflow-hidden before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-primary before:to-accent"
            : "space-y-4"
        }`}
      >
        {isHero && (
          <div className="flex items-center gap-3 mb-3 md:mb-4">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
              <WhatsappIcon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            </div>
            <div>
              <span
                className="block font-semibold text-foreground text-sm md:text-base leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Solicite seu orçamento
              </span>
              <span className="text-[11px] md:text-xs text-muted-foreground">
                Grátis e sem compromisso
              </span>
            </div>
          </div>
        )}

        <div className="space-y-3 md:space-y-4">
          <div>
            <Label htmlFor={`name-${variant}`} className="text-foreground text-xs md:text-sm font-medium">
              Seu nome
            </Label>
            <Input
              id={`name-${variant}`}
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-background mt-1.5 h-10 md:h-11 text-sm rounded-lg border-input focus-visible:border-primary focus-visible:ring-primary/30 transition-colors"
              required
            />
          </div>

          <div>
            <Label htmlFor={`whatsapp-${variant}`} className="text-foreground text-xs md:text-sm font-medium">
              WhatsApp
            </Label>
            <div className="relative mt-1.5">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground font-medium pointer-events-none border-r border-border pr-2"
                aria-hidden="true"
              >
                +55
              </span>
              <Input
                id={`whatsapp-${variant}`}
                type="tel"
                placeholder="(11) 99999-9999"
                value={whatsapp}
                onChange={handleWhatsAppChange}
                className="bg-background pl-14 h-10 md:h-11 text-sm rounded-lg border-input focus-visible:border-primary focus-visible:ring-primary/30 transition-colors"
                required
              />
            </div>
          </div>
        </div>

        {error && (
          <p className="text-xs md:text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2 mt-3" role="alert">
            {error}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-5 md:py-6 text-sm md:text-base mt-4 rounded-lg shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all hover:-translate-y-px"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <WhatsappIcon className="w-4 h-4 mr-2" />
              Quero orçamento no WhatsApp
            </>
          )}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-[10px] md:text-xs text-muted-foreground text-center mt-3">
          <CheckCircle className="w-3 h-3 text-primary shrink-0" />
          Responderemos em poucos minutos pelo seu WhatsApp
        </p>
      </div>
    </form>
  )
}
