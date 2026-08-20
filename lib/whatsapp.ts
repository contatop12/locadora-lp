export type WhatsAppCity = "itaquera" | "guarulhos"

const DEFAULT_WHATSAPP_NUMBER = "551126822244"

const MESSAGES: Record<WhatsAppCity, string> = {
  itaquera:
    "Olá! Vim pela página de Itaquera e gostaria de um orçamento de andaimes.",
  guarulhos:
    "Olá! Vim pela página de Guarulhos e gostaria de um orçamento de andaimes.",
}

export function getWhatsAppNumber(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "")
  return fromEnv || DEFAULT_WHATSAPP_NUMBER
}

export function getWhatsAppUrl(city: WhatsAppCity): string {
  const number = getWhatsAppNumber()
  const text = encodeURIComponent(MESSAGES[city])
  return `https://wa.me/${number}?text=${text}`
}

export function getLeadWhatsAppUrl(name?: string): string {
  const number = getWhatsAppNumber()
  const trimmed = name?.trim()
  const message = trimmed
    ? `Olá! Meu nome é ${trimmed} e solicitei um orçamento de andaimes pelo site.`
    : "Olá! Solicitei um orçamento de andaimes pelo site."

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
