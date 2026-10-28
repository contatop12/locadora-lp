/* eslint-disable @next/next/no-img-element -- imagens já saem otimizadas (AVIF/WebP) de public/images/itaquera */
import { ShieldCheck, Truck, Wrench } from "lucide-react"
import { WhatsappIcon } from "./ui"
import { waUrl } from "./whatsapp-messages"

/** Atraso escalonado da sequência de entrada (ver .itq-line / .itq-fade em itaquera.css). */
const ordem = (i: number) => ({ "--i": i }) as React.CSSProperties

const NAV = [
  { href: "#equipamentos", label: "Equipamentos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#seguranca", label: "Segurança" },
  { href: "#duvidas", label: "Dúvidas" },
]

export function Header() {
  return (
    <header className="itq-header fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6">
        {/* min-w-0: em telas bem estreitas a logo encolhe em vez de empurrar o botão para fora */}
        <a href="#inicio" className="min-w-0">
          <img
            src="/images/itaquera/logo-480.webp"
            alt="Exatidão Locação de Equipamentos"
            width={480}
            height={114}
            className="h-11.25 w-auto max-w-full object-contain object-left md:h-13.5"
          />
        </a>

        <nav aria-label="Seções da página" className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-[15px] text-white/80 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={waUrl()}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="header"
          className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-md bg-signal px-3.5 font-semibold text-navy transition-colors hover:bg-deck sm:px-4"
        >
          <WhatsappIcon className="size-5" />
          Orçamento
        </a>
      </div>
    </header>
  )
}

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="relative isolate overflow-hidden bg-navy text-white">
      <picture className="absolute inset-0 -z-10">
        <source
          media="(max-width: 767px)"
          type="image/avif"
          srcSet="/images/itaquera/hero-m-600.avif 600w, /images/itaquera/hero-m-828.avif 828w"
          sizes="100vw"
        />
        <source
          media="(max-width: 767px)"
          type="image/webp"
          srcSet="/images/itaquera/hero-m-600.webp 600w, /images/itaquera/hero-m-828.webp 828w"
          sizes="100vw"
        />
        <source
          type="image/avif"
          srcSet="/images/itaquera/hero-1280.avif 1280w, /images/itaquera/hero-1920.avif 1920w"
          sizes="100vw"
        />
        <img
          src="/images/itaquera/hero-1280.webp"
          srcSet="/images/itaquera/hero-1280.webp 1280w, /images/itaquera/hero-1920.webp 1920w"
          sizes="100vw"
          alt="Montador com cinto de segurança em andaime tubular, com a Zona Leste de São Paulo e a arena de Itaquera ao fundo"
          width={1920}
          height={952}
          fetchPriority="high"
          className="itq-hero-photo size-full object-cover object-top md:object-[center_35%]"
        />
      </picture>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/55 mix-blend-multiply" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-linear-to-t from-navy from-35% via-navy/85 to-navy/30 lg:bg-linear-to-r lg:from-navy lg:from-30% lg:via-navy/80 lg:to-navy/10"
      />
      <div aria-hidden="true" className="itq-grid absolute inset-0 -z-10" />

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-28 md:px-6 lg:pb-24 lg:pt-40">
        <div className="max-w-3xl">
          <p className="itq-fade flex items-center gap-3 text-white/85" style={ordem(0)}>
            <span aria-hidden="true" className="h-0.5 w-8 bg-signal" />
            Especialistas em andaimes, servindo Itaquera e região
          </p>

          <h1
            id="hero-titulo"
            className="mt-5 font-display text-[clamp(3.25rem,13vw,7rem)] font-extrabold uppercase leading-[0.86] tracking-[-0.01em]"
          >
            {["Aluguel de", "andaimes em", "Itaquera"].map((linha, n) => (
              <span key={linha} className="itq-line">
                <span style={ordem(n)}>{linha}</span>
              </span>
            ))}
          </h1>
          {/* a "prancha" onde o título assenta */}
          <span aria-hidden="true" className="itq-plank mt-5 block h-2.5 w-44 bg-signal md:w-64" />

          <p className="itq-fade mt-7 max-w-xl text-lg leading-relaxed text-white/85 md:text-xl" style={ordem(1)}>
            Andaime tubular conforme a NR-18, entregue na sua obra com frota própria. Conte a altura e o tipo de
            serviço pelo WhatsApp e receba a quantidade certa de módulos e o valor.
          </p>

          <div className="itq-fade mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5" style={ordem(2)}>
            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero"
              className="itq-shine relative inline-flex min-h-14 shrink-0 items-center justify-center gap-3 overflow-hidden whitespace-nowrap rounded-md bg-signal px-6 text-base font-bold sm:px-7 sm:text-lg text-navy shadow-[0_14px_34px_-12px] shadow-signal/70 transition-colors hover:bg-deck"
            >
              <WhatsappIcon className="size-6" />
              Pedir orçamento no WhatsApp
            </a>
            <p className="text-white/70">Sem cadastro. Você fala direto com a equipe.</p>
          </div>

          <ul
            className="itq-fade mt-10 grid grid-cols-3 divide-x divide-white/15 border-y border-white/15 text-[15px] leading-tight"
            style={ordem(3)}
          >
            <li className="flex flex-col gap-2 py-4 pr-3 sm:flex-row sm:items-center sm:gap-3">
              <Truck className="size-6 shrink-0 text-deck" aria-hidden="true" />
              Entrega em até 24 h
            </li>
            <li className="flex flex-col gap-2 px-3 py-4 sm:flex-row sm:items-center sm:gap-3">
              <ShieldCheck className="size-6 shrink-0 text-deck" aria-hidden="true" />
              Conforme a NR-18
            </li>
            <li className="flex flex-col gap-2 py-4 pl-3 sm:flex-row sm:items-center sm:gap-3">
              <Wrench className="size-6 shrink-0 text-deck" aria-hidden="true" />
              Monta sem ferramentas
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
