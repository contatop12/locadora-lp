import { buildWhatsAppUrl } from "@/lib/whatsapp"

/**
 * Mensagens da LP Itaquera. Cada CTA abre o WhatsApp com um texto que já diz de
 * onde o lead veio e o que ele quer — o atendente não precisa perguntar de novo.
 * Módulo separado do content.ts para não levar o conteúdo da página ao bundle do cliente.
 */

export const ORIGEM = "Olá! Vim pela página de Itaquera"

export const MENSAGEM_PADRAO = `${ORIGEM} e gostaria de um orçamento de andaimes.`

export const waUrl = (mensagem = MENSAGEM_PADRAO) => buildWhatsAppUrl(mensagem)
export const waPedido = (item: string) => waUrl(`${ORIGEM} e quero orçamento de ${item}.`)
export const waServico = (servico: string) => waUrl(`${ORIGEM} e preciso de andaime para ${servico}.`)
