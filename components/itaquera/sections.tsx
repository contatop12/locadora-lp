import { Check, HardHat, MapPin, Mail, Clock, Plus, Quote, X } from "lucide-react"
import {
  ACESSORIOS,
  APLICACOES,
  BAIRROS,
  DEPOIMENTOS,
  ENDERECO_COMPLETO,
  EPIS,
  FAQS,
  GARANTIAS,
  MAPS_EMBED,
  MAPS_URL,
  NAP,
  PASSOS,
  SEGURANCA,
} from "./content"
import { Pic, WhatsappIcon } from "./ui"
import { waPedido, waServico, waUrl } from "./whatsapp-messages"
import { formatWhatsAppNumber } from "@/lib/whatsapp"

const wa = { target: "_blank", rel: "noopener noreferrer" } as const

function CtaWhatsApp({ cta, children = "Pedir orçamento no WhatsApp", href = waUrl() }: {
  cta: string
  children?: React.ReactNode
  href?: string
}) {
  return (
    <a
      href={href}
      {...wa}
      data-cta={cta}
      className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-signal px-6 text-base font-bold text-navy sm:px-7 sm:text-lg transition-colors hover:bg-deck"
    >
      <WhatsappIcon className="size-6" />
      {children}
    </a>
  )
}

/* ---------------------------------------------------------------- bairros */

export function Bairros() {
  return (
    <section aria-label="Bairros onde entregamos" className="itq-hazard-edges relative bg-signal text-navy">
      <div className="flex items-stretch">
        <p className="relative z-10 flex shrink-0 items-center bg-navy px-4 font-semibold text-white md:px-6">
          Entregamos em
        </p>
        <div className="itq-ticker min-w-0 flex-1 overflow-hidden">
          <ul className="itq-ticker-track flex w-max py-3">
            {[...BAIRROS, ...BAIRROS].map((bairro, n) => (
              <li
                key={n}
                aria-hidden={n >= BAIRROS.length || undefined}
                className="flex items-center gap-6 pl-6 font-display text-xl font-bold uppercase tracking-wide md:text-2xl"
              >
                {bairro}
                <span aria-hidden="true" className="size-2 rotate-45 bg-navy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- problema */

export function Problema() {
  return (
    <section aria-labelledby="problema-titulo" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 id="problema-titulo" className="font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-6xl">
            Seu andaime no dia certo, completo e na medida
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Atraso, peça faltando e conta errada de módulos são os problemas mais comuns no aluguel de andaime. Veja
            como evitamos cada um deles na sua obra.
          </p>
        </div>

        <div>
          <div aria-hidden="true" className="hidden grid-cols-[1fr_1.3fr] gap-8 pb-4 font-semibold sm:grid">
            <span className="text-ink-soft">Problema comum</span>
            <span className="text-signal-deep">Na Exatidão</span>
          </div>
          <ul className="divide-y divide-navy/10 border-y border-navy/10">
            {GARANTIAS.map((item) => (
              <li key={item.titulo} className="grid gap-4 py-7 sm:grid-cols-[1fr_1.3fr] sm:gap-8">
                <p className="flex gap-3 text-ink-soft">
                  <X className="mt-0.5 size-5 shrink-0 text-navy/35" strokeWidth={3} aria-hidden="true" />
                  <span>
                    <span className="block text-sm font-semibold sm:sr-only">Problema comum</span>
                    {item.problema}
                  </span>
                </p>
                <div className="flex gap-3">
                  <Check className="mt-1 size-6 shrink-0 text-signal-deep" strokeWidth={3} aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-semibold text-signal-deep sm:sr-only">Na Exatidão</span>
                    <h3 className="font-display text-2xl font-bold uppercase leading-tight md:text-3xl">{item.titulo}</h3>
                    <p className="mt-1 text-lg text-navy">{item.detalhe}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- equipamentos */

export function Equipamentos() {
  return (
    <section id="equipamentos" aria-labelledby="equipamentos-titulo" className="bg-steel py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 id="equipamentos-titulo" className="font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-6xl">
            Equipamentos para locação
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            Andaime tubular e todos os acessórios para montar com segurança. Toque em um item para pedir o orçamento
            dele pelo WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <article className="grid overflow-hidden rounded-lg bg-white sm:grid-cols-2 lg:col-span-5 lg:row-span-2 lg:grid-cols-1">
            <div className="relative bg-white p-6">
              <span className="absolute left-4 top-4 rounded-sm bg-navy px-2.5 py-1 text-sm font-semibold text-white">
                O mais alugado
              </span>
              <Pic
                name="prod-andaime-tubular"
                widths={[498]}
                sizes="(min-width: 1024px) 34vw, (min-width: 640px) 50vw, 100vw"
                alt="Andaime tubular com plataforma, guarda-corpo, escada e rodízios"
                width={498}
                height={498}
                imgClassName="mx-auto aspect-square w-full max-w-sm object-contain"
              />
            </div>
            <div className="flex flex-col border-t border-navy/10 p-6 sm:border-l sm:border-t-0 lg:border-l-0 lg:border-t md:p-8">
              <h3 className="font-display text-4xl font-extrabold uppercase leading-none">Andaime tubular</h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-soft">
                Encaixes firmes que dispensam ferramentas. Serve para fachada, reforma, manutenção e eventos.
              </p>
              <ul className="mt-5 space-y-2.5">
                {["Montagem e desmontagem rápidas", "Estrutura resistente e durável", "Ótimo rendimento para a equipe"].map(
                  (t) => (
                    <li key={t} className="flex gap-3">
                      <Check className="mt-0.5 size-5 shrink-0 text-signal-deep" strokeWidth={3} aria-hidden="true" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-7">
                <CtaWhatsApp cta="item-andaime-tubular" href={waPedido("andaime tubular")}>
                  Orçar andaime tubular
                </CtaWhatsApp>
              </div>
            </div>
          </article>

          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:col-span-7 lg:row-span-2">
            {ACESSORIOS.map((item) => (
              <li key={item.nome}>
                <a
                  href={waPedido(item.pedido)}
                  {...wa}
                  data-cta={`item-${item.img.replace("prod-", "")}`}
                  className="itq-tile group flex h-full flex-col rounded-lg border border-transparent bg-white p-4 transition-colors hover:border-navy/30"
                >
                  <Pic
                    name={item.img}
                    widths={[480]}
                    sizes="(min-width: 1024px) 18vw, (min-width: 768px) 30vw, 45vw"
                    alt={item.nome}
                    width={480}
                    height={480}
                    imgClassName="aspect-square w-full object-contain transition-transform duration-300 group-hover:-translate-y-1"
                  />
                  <h3 className="mt-3 text-lg font-semibold leading-tight">{item.nome}</h3>
                  <p className="mt-1 text-[15px] leading-snug text-ink-soft">{item.uso}</p>
                  <span className="mt-auto flex items-center gap-2 pt-4 font-semibold text-signal-deep">
                    <WhatsappIcon className="size-5" />
                    Pedir orçamento
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- aplicações */

export function Aplicacoes() {
  return (
    <section aria-labelledby="aplicacoes-titulo" className="relative isolate bg-navy py-20 text-white md:py-28">
      <div aria-hidden="true" className="itq-grid absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <h2 id="aplicacoes-titulo" className="font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-6xl">
            Para cada tipo de obra
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            Escolha o seu caso e chegue no WhatsApp com o pedido certo.
          </p>
        </div>

        <ul className="itq-scroller -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0">
          {APLICACOES.map((app) => (
            <li key={app.titulo} className="w-[84%] shrink-0 snap-start md:w-auto">
              <a
                href={waServico(app.servico)}
                {...wa}
                data-cta={`aplicacao-${app.img.replace("app-", "")}`}
                className="group flex h-full flex-col overflow-hidden rounded-lg bg-navy-2 ring-1 ring-white/10 transition hover:ring-signal"
              >
                <div className="overflow-hidden">
                  <Pic
                    name={app.img}
                    widths={[640, 960]}
                    sizes="(min-width: 768px) 32vw, 84vw"
                    alt={`Andaime tubular em ${app.titulo.toLowerCase()}`}
                    width={960}
                    height={app.h}
                    imgClassName="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-display text-3xl font-extrabold uppercase leading-none">{app.titulo}</h3>
                  <p className="mt-2 text-white/75">{app.texto}</p>
                  <span className="mt-auto flex items-center gap-2 pt-5 font-semibold text-deck">
                    <WhatsappIcon className="size-5" />
                    Pedir andaime para {app.titulo.split(" ")[0].toLowerCase()}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- como funciona */

export function ComoFunciona() {
  return (
    <section id="como-funciona" aria-labelledby="como-titulo" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-6 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-20">
        <figure className="relative order-2 overflow-hidden rounded-lg lg:order-1">
          <Pic
            name="caminhao"
            widths={[600, 900]}
            sizes="(min-width: 1024px) 38vw, 100vw"
            alt="Caminhão da Locadora Exatidão carregado de andaimes em uma obra"
            width={900}
            height={1080}
            imgClassName="aspect-[4/5] w-full object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/95 to-transparent p-5 pt-16 text-white">
            <span className="font-display text-2xl font-bold uppercase">Frota própria</span>
            <span className="mt-1 block text-white/80">Entrega e retirada no local da obra.</span>
          </figcaption>
        </figure>

        <div className="order-1 lg:order-2">
          <h2 id="como-titulo" className="font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-6xl">
            Do WhatsApp à sua obra em 4 passos
          </h2>

          <div className="itq-steps relative mt-10">
            <span aria-hidden="true" className="absolute bottom-6 left-[22px] top-6 w-1 bg-steel">
              <span className="itq-beam block size-full bg-signal" />
            </span>
            <ol className="relative space-y-8">
              {PASSOS.map((passo, n) => (
                <li key={passo.titulo} className="itq-step flex gap-5">
                  <span className="itq-node grid size-12 shrink-0 place-items-center rounded-full bg-signal font-display text-2xl font-extrabold text-navy ring-4 ring-white">
                    {n + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="font-display text-2xl font-bold uppercase leading-tight md:text-3xl">{passo.titulo}</h3>
                    <p className="mt-1 text-lg text-ink-soft">{passo.texto}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 pl-[68px]">
            <CtaWhatsApp cta="como-funciona">Começar pelo passo 1</CtaWhatsApp>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- segurança */

export function Seguranca() {
  return (
    <section id="seguranca" aria-labelledby="seguranca-titulo" className="relative isolate bg-navy text-white">
      <div aria-hidden="true" className="itq-hazard h-3" />
      <div aria-hidden="true" className="itq-grid absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <h2 id="seguranca-titulo" className="font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-6xl">
            Andaime completo, montado conforme a NR-18
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/80">
            Seguimos as normas de segurança do trabalho em altura e orientamos sua equipe sobre o uso correto de cada
            peça.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">Acessórios de segurança disponíveis</h3>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {SEGURANCA.map((item) => (
                <li key={item} className="flex gap-3 border-b border-white/10 pb-3 text-lg">
                  <Check className="mt-1 size-5 shrink-0 text-signal" strokeWidth={3} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg bg-navy-2 p-6 ring-1 ring-white/10 md:p-8">
            <div className="flex items-center gap-3">
              <HardHat className="size-7 text-deck" aria-hidden="true" />
              <h3 className="text-xl font-semibold">EPIs que recomendamos para trabalho em altura</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {EPIS.map((item) => (
                <li key={item} className="flex gap-3 text-lg">
                  <Check className="mt-1 size-5 shrink-0 text-deck" strokeWidth={3} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={waUrl("Olá! Vim pela página de Itaquera e tenho uma dúvida sobre segurança e NR-18 no andaime.")}
              {...wa}
              data-cta="seguranca"
              className="mt-7 inline-flex min-h-12 items-center gap-2 font-semibold text-deck underline-offset-4 hover:underline"
            >
              <WhatsappIcon className="size-5" />
              Tirar uma dúvida sobre segurança
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- depoimentos */

export function Depoimentos() {
  return (
    <section aria-labelledby="depoimentos-titulo" className="bg-steel py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 id="depoimentos-titulo" className="font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-6xl">
          Quem já alugou com a gente
        </h2>
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {DEPOIMENTOS.map((d) => (
            <li key={d.nome}>
              <figure className="flex h-full flex-col rounded-lg bg-white p-6 md:p-8">
                <Quote className="size-8 fill-signal text-signal" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">{d.texto}</blockquote>
                <figcaption className="mt-6 border-t border-navy/10 pt-4">
                  <span className="block font-semibold">{d.nome}</span>
                  <span className="text-ink-soft">
                    {d.papel}, {d.bairro}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- FAQ */

export function Duvidas() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:px-6 lg:grid-cols-[4fr_8fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <h2 id="duvidas-titulo" className="font-display text-5xl font-extrabold uppercase leading-[0.9] md:text-6xl">
            Perguntas frequentes
          </h2>
          <p className="mt-5 text-lg text-ink-soft">Não achou a sua? A equipe responde pelo WhatsApp.</p>
          <a
            href={waUrl("Olá! Vim pela página de Itaquera e tenho uma dúvida sobre aluguel de andaimes.")}
            {...wa}
            data-cta="faq"
            className="mt-5 inline-flex min-h-12 items-center gap-2 font-semibold text-signal-deep underline-offset-4 hover:underline"
          >
            <WhatsappIcon className="size-5" />
            Perguntar no WhatsApp
          </a>
        </div>

        <div className="itq-faq border-t border-navy/10">
          {FAQS.map((faq) => (
            <details key={faq.pergunta} className="group border-b border-navy/10">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-6 py-5 text-lg font-semibold md:text-xl">
                {faq.pergunta}
                <Plus
                  className="size-6 shrink-0 text-signal-deep transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="max-w-2xl pb-6 text-lg leading-relaxed text-ink-soft">{faq.resposta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- CTA final + contato */

export function Contato() {
  const telefone = formatWhatsAppNumber()
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="relative isolate overflow-hidden bg-navy text-white">
      <div aria-hidden="true" className="itq-grid absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-[7fr_5fr] lg:items-center lg:gap-16">
        <div>
          <h2
            id="contato-titulo"
            className="font-display text-[clamp(3rem,9vw,6rem)] font-extrabold uppercase leading-[0.86]"
          >
            Sua obra em Itaquera começa com uma mensagem
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
            Mande a altura e o tipo de serviço. A equipe responde com a quantidade de módulos e o valor do aluguel.
          </p>
          <div className="mt-8">
            <CtaWhatsApp cta="final" />
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-white text-navy">
          <iframe
            src={MAPS_EMBED}
            title={`Mapa: ${NAP.nome}, ${ENDERECO_COMPLETO}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block aspect-[16/10] w-full border-0 bg-steel"
          />
          <address className="space-y-3 p-6 not-italic">
            <p className="font-display text-2xl font-bold uppercase">{NAP.nome}</p>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-signal-deep" aria-hidden="true" />
              <span>
                {NAP.rua} - {NAP.bairro}
                <br />
                {NAP.cidade} - {NAP.uf}
              </span>
            </p>
            <p className="flex gap-3">
              <WhatsappIcon className="mt-0.5 size-5 shrink-0 text-signal-deep" />
              <a href={waUrl()} {...wa} data-cta="contato" className="underline-offset-4 hover:underline">
                WhatsApp {telefone}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-signal-deep" aria-hidden="true" />
              <a href={`mailto:${NAP.email}`} className="break-all underline-offset-4 hover:underline">
                {NAP.email}
              </a>
            </p>
            <p className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-signal-deep" aria-hidden="true" />
              {NAP.horario}
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center font-semibold text-signal-deep underline underline-offset-4"
            >
              Como chegar no Google Maps
            </a>
          </address>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- rodapé */

export function Rodape() {
  return (
    <footer className="border-t border-white/10 bg-[#0c182c] pb-28 pt-14 text-white/70 md:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[2fr_1fr_1fr] md:px-6">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/itaquera/logo-480.webp"
            alt="Exatidão Locação de Equipamentos"
            width={480}
            height={114}
            loading="lazy"
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-sm">
            Aluguel de andaimes e equipamentos para construção civil em Itaquera e na Zona Leste de São Paulo.
          </p>
        </div>
        <nav aria-label="Rodapé">
          <p className="font-semibold text-white">Nesta página</p>
          <ul className="mt-3 space-y-1">
            {[
              ["#equipamentos", "Equipamentos"],
              ["#como-funciona", "Como funciona"],
              ["#seguranca", "Segurança e NR-18"],
              ["#duvidas", "Perguntas frequentes"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="inline-flex min-h-10 items-center hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-semibold text-white">Atendimento</p>
          <p className="mt-3">{NAP.horario}</p>
          <p className="mt-2">{ENDERECO_COMPLETO}</p>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-4 pt-6 text-sm md:px-6">
        © {new Date().getFullYear()} {NAP.nome}. Aluguel de andaimes em Itaquera e Zona Leste de São Paulo.
      </p>
    </footer>
  )
}

/* ---------------------------------------------------------------- botão flutuante */

export function BotaoFlutuante() {
  return (
    <a
      href={waUrl()}
      {...wa}
      data-cta="flutuante"
      aria-label="Pedir orçamento no WhatsApp"
      className="itq-fab fixed bottom-5 right-5 z-50 grid size-16 place-items-center rounded-full bg-[#1a9e5a] text-white shadow-[0_12px_30px_-8px_rgb(0_0_0/0.5)] transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <WhatsappIcon className="size-8" />
    </a>
  )
}
