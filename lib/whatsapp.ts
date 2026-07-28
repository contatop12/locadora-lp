export type WhatsAppCity = "itaquera" | "guarulhos"

const MESSAGES: Record<WhatsAppCity, string> = {
  itaquera:
    "Olá! Vim pela página de Itaquera e gostaria de um orçamento de andaimes.",
  guarulhos:
    "Olá! Vim pela página de Guarulhos e gostaria de um orçamento de andaimes.",
}

export function getWhatsAppNumber(): string {
  return process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? ""
}

export function getWhatsAppUrl(city: WhatsAppCity): string {
  const number = getWhatsAppNumber()
  const text = encodeURIComponent(MESSAGES[city])

  if (!number) {
    console.warn(
      "NEXT_PUBLIC_WHATSAPP_NUMBER não está definido. Configure o número no .env"
    )
  }

  return number
    ? `https://wa.me/${number}?text=${text}`
    : `https://wa.me/?text=${text}`
}
