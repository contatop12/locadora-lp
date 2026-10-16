"use client"

import { useEffect } from "react"
import { comProtocolo, obterAtribuicao, registrarLanding } from "@/lib/tracking"

/**
 * Sem formulário, o clique no WhatsApp passa a ser a conversão. Este componente:
 * 1. carimba o protocolo no texto de todos os links do WhatsApp (o Chatwoot/n8n
 *    reconhece o lead pela primeira mensagem);
 * 2. no clique, avisa o GTM (evento `whatsapp_click`) e manda gclid/UTMs + protocolo
 *    para o mesmo webhook do n8n que o formulário usava — é o que liga o protocolo
 *    ao clique no anúncio na hora de devolver a conversão.
 */

const WEBHOOK = "https://n8n.sitespdoze.com.br/webhook/lp-itaquera"
const SELETOR = 'a[href^="https://wa.me/"]'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function WhatsAppTracker() {
  useEffect(() => {
    registrarLanding()

    // Vale também para "abrir em nova aba" e copiar link, que não disparam o clique.
    document.querySelectorAll<HTMLAnchorElement>(SELETOR).forEach((a) => {
      a.href = comProtocolo(a.href)
    })

    let webhookEnviado = false

    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest<HTMLAnchorElement>(SELETOR)
      if (!link) return

      // O montador de mensagem troca o href a cada escolha; carimba de novo antes de navegar.
      link.href = comProtocolo(link.href)
      const atribuicao = obterAtribuicao()
      const cta = link.dataset.cta || "link"

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: "whatsapp_click", cta, protocol: atribuicao.protocol })

      if (webhookEnviado) return
      webhookEnviado = true

      const body = JSON.stringify({
        event: "whatsapp_click",
        formId: `whatsapp-${cta}`,
        source: "landing-page-andaimes-itaquera",
        message: new URL(link.href).searchParams.get("text") || "",
        timestamp: new Date().toISOString(),
        ...atribuicao,
      })
      const enviar = (keepalive: boolean) =>
        fetch(WEBHOOK, { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive })

      // keepalive garante o envio se o WhatsApp abrir na mesma aba; alguns navegadores
      // recusam keepalive com preflight de CORS, então tenta de novo sem ele.
      enviar(true)
        .catch(() => enviar(false))
        .catch(() => {})
    }

    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  return null
}
