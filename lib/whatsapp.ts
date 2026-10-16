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

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${getWhatsAppNumber()}?text=${encodeURIComponent(message)}`
}

export function getWhatsAppUrl(city: WhatsAppCity): string {
  return buildWhatsAppUrl(MESSAGES[city])
}

/** "551126822244" → "(11) 2682-2244"; celular → "(11) 95150-8844". */
export function formatWhatsAppNumber(): string {
  const local = getWhatsAppNumber().replace(/^55/, "")
  const ddd = local.slice(0, 2)
  const num = local.slice(2)
  const split = num.length === 9 ? 5 : 4
  return `(${ddd}) ${num.slice(0, split)}-${num.slice(split)}`
}

export function getLeadWhatsAppUrl(name?: string): string {
  const number = getWhatsAppNumber()
  const trimmed = name?.trim()
  const message = trimmed
    ? `Olá! Meu nome é ${trimmed} e solicitei um orçamento de andaimes pelo site.`
    : "Olá! Solicitei um orçamento de andaimes pelo site."

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
