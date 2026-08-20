/**
 * Rastreio de atribuição — Locadora Exatidão
 *
 * O protocolo é a ponte entre o clique no anúncio e a conversa no WhatsApp.
 * O gclid existe no momento do clique, mas some quando o lead abre o WhatsApp.
 * Então geramos um código, guardamos em cookie junto com o gclid, e o carregamos
 * até a mensagem — é o que permite devolver a conversão ao Google Ads depois.
 */

const PREFIXO = "ANDAIM"
const COOKIE_PROTOCOLO = "p12_protocol"
const COOKIE_CLICKID = "p12_clickid"
const COOKIE_LANDING = "p12_landing"
const DIAS = 90

export interface DadosAtribuicao {
  protocol: string
  gclid: string
  gbraid: string
  wbraid: string
  fbp: string
  fbc: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
  utm_id: string
  page_url: string
  landing_url: string
  referrer: string
}

function lerCookie(nome: string): string {
  if (typeof document === "undefined") return ""
  const m = document.cookie.match(new RegExp("(?:^|; )" + nome + "=([^;]*)"))
  return m ? decodeURIComponent(m[1]) : ""
}

function gravarCookie(nome: string, valor: string, dias = DIAS): void {
  if (typeof document === "undefined") return
  const exp = new Date()
  exp.setTime(exp.getTime() + dias * 86400000)
  document.cookie = `${nome}=${encodeURIComponent(valor)};expires=${exp.toUTCString()};path=/;SameSite=Lax`
}

function paramDe(url: string, nome: string): string {
  const m = String(url || "").match(new RegExp("[?&]" + nome + "=([^&]*)"))
  return m ? decodeURIComponent(m[1]) : ""
}

/** Busca na URL atual e, se não achar, na landing page guardada em cookie. */
function param(nome: string): string {
  if (typeof window === "undefined") return ""
  return paramDe(window.location.search, nome) || paramDe(lerCookie(COOKIE_LANDING), nome)
}

function novoProtocolo(): string {
  return (
    PREFIXO +
    "-" +
    Date.now().toString(36).toUpperCase() +
    Math.random().toString(36).slice(2, 6).toUpperCase()
  )
}

/**
 * Guarda a URL de entrada na primeira visita. Sem isso, um lead que navega
 * para outra página antes de converter perde os parâmetros da campanha.
 */
export function registrarLanding(): void {
  if (typeof window === "undefined") return
  if (!lerCookie(COOKIE_LANDING) && window.location.search) {
    gravarCookie(COOKIE_LANDING, window.location.href)
  }
  obterProtocolo()
}

/**
 * Devolve o protocolo da visita. Gera um novo quando ainda não existe ou
 * quando o lead voltou por um clique de anúncio diferente — assim duas
 * campanhas distintas não se sobrepõem no mesmo código.
 */
export function obterProtocolo(): string {
  if (typeof window === "undefined") return ""
  const clickId = param("gclid") || param("gbraid") || param("wbraid") || ""
  const atual = lerCookie(COOKIE_PROTOCOLO)
  const clickSalvo = lerCookie(COOKIE_CLICKID)

  if (!atual || (clickId && clickId !== clickSalvo)) {
    const novo = novoProtocolo()
    gravarCookie(COOKIE_PROTOCOLO, novo)
    gravarCookie(COOKIE_CLICKID, clickId)
    return novo
  }
  return atual
}

/** O _gcl_aw é mais confiável que a URL: sobrevive à navegação interna. */
function gclidDoCookie(): string {
  const aw = lerCookie("_gcl_aw")
  if (aw) {
    const partes = aw.split(".")
    if (partes.length >= 3) return partes.slice(2).join(".")
  }
  return param("gclid")
}

function fbc(): string {
  const c = lerCookie("_fbc")
  if (c) return c
  const fbclid = param("fbclid")
  return fbclid ? `fb.1.${Date.now()}.${fbclid}` : ""
}

export function obterAtribuicao(): DadosAtribuicao {
  return {
    protocol: obterProtocolo(),
    gclid: gclidDoCookie(),
    gbraid: param("gbraid"),
    wbraid: param("wbraid"),
    fbp: lerCookie("_fbp"),
    fbc: fbc(),
    utm_source: param("utm_source"),
    utm_medium: param("utm_medium"),
    utm_campaign: param("utm_campaign"),
    utm_term: param("utm_term"),
    utm_content: param("utm_content"),
    utm_id: param("utm_id"),
    page_url: typeof window !== "undefined" ? window.location.href : "",
    landing_url: lerCookie(COOKIE_LANDING),
    referrer: typeof document !== "undefined" ? document.referrer : "",
  }
}

/**
 * Anexa o protocolo ao texto da mensagem do WhatsApp.
 * É assim que o n8n reconhece o lead do lado do Chatwoot: o protocolo chega
 * escrito na primeira mensagem, sem depender de casar telefone depois.
 */
export function comProtocolo(whatsappUrl: string, protocolo?: string): string {
  const p = protocolo || obterProtocolo()
  if (!p) return whatsappUrl
  try {
    const url = new URL(whatsappUrl)
    const texto = url.searchParams.get("text") || ""
    if (texto.includes(p)) return whatsappUrl
    url.searchParams.set("text", `${texto} [Protocolo: ${p}]`.trim())
    return url.toString()
  } catch {
    const sep = whatsappUrl.includes("?") ? "&" : "?"
    return `${whatsappUrl}${sep}text=${encodeURIComponent(`[Protocolo: ${p}]`)}`
  }
}
