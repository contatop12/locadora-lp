"use client"

import { useState } from "react"
import { MENSAGEM_PADRAO, ORIGEM, waUrl } from "./whatsapp-messages"
import { WhatsappIcon } from "./ui"

/**
 * Substitui o formulário: dois toques opcionais montam a mensagem que vai pronta
 * para o WhatsApp. Nada para digitar — e o atendente já recebe serviço e altura.
 */

interface Opcao {
  rotulo: string
  texto: string
}

const SERVICOS: Opcao[] = [
  { rotulo: "Pintura de fachada", texto: "pintura de fachada" },
  { rotulo: "Reforma ou obra", texto: "reforma ou obra" },
  { rotulo: "Manutenção predial", texto: "manutenção predial" },
  { rotulo: "Evento ou palco", texto: "evento ou palco" },
]

const ALTURAS: Opcao[] = [
  { rotulo: "Até 4 m", texto: "até 4 m" },
  { rotulo: "4 a 8 m", texto: "4 a 8 m" },
  { rotulo: "8 a 15 m", texto: "8 a 15 m" },
  { rotulo: "Mais de 15 m", texto: "mais de 15 m" },
]

function montarMensagem(servico?: string, altura?: string) {
  if (!servico && !altura) return MENSAGEM_PADRAO
  const para = servico ? ` para ${servico}` : ""
  const alt = altura ? ` Altura aproximada: ${altura}.` : ""
  return `${ORIGEM} e quero orçamento de andaime${para}.${alt}`
}

export function QuoteBuilder() {
  const [servico, setServico] = useState<string>()
  const [altura, setAltura] = useState<string>()
  const mensagem = montarMensagem(servico, altura)

  return (
    <div className="itq-card-in overflow-hidden rounded-xl bg-white text-navy shadow-[0_40px_80px_-30px_rgb(0_0_0/0.7)]">
      <div className="flex items-center gap-3 bg-navy-2 px-4 py-3 text-white">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-signal text-navy">
          <WhatsappIcon className="size-5" />
        </span>
        <div className="leading-tight">
          <p className="font-semibold">Locadora Exatidão</p>
          <p className="text-sm text-white/70">Atende de segunda a sexta, das 8h às 18h</p>
        </div>
      </div>

      <div className="itq-chat px-4 py-5" aria-live="polite">
        <p
          key={mensagem}
          className="itq-bubble ml-auto max-w-[90%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-3 pb-1.5 pt-2 text-[15px] leading-snug text-[#111b21] shadow-sm"
        >
          {mensagem}
          <span className="mt-1 block text-right text-xs text-[#667781]" aria-hidden="true">
            agora ✓✓
          </span>
        </p>
      </div>

      <div className="space-y-4 px-4 pb-4">
        <p className="text-sm text-ink-soft">Toque para adiantar o pedido (opcional):</p>
        <Escolhas legenda="Qual é o serviço?" nome="servico" opcoes={SERVICOS} valor={servico} onEscolha={setServico} />
        <Escolhas legenda="Até que altura precisa chegar?" nome="altura" opcoes={ALTURAS} valor={altura} onEscolha={setAltura} />

        <a
          href={waUrl(mensagem)}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="montador"
          className="flex min-h-14 items-center justify-center gap-2.5 rounded-md bg-[#25d366] px-5 text-lg font-bold text-[#0b3d1f] transition-colors hover:bg-[#1fbe5b]"
        >
          <WhatsappIcon className="size-6" />
          Enviar esta mensagem
        </a>
      </div>
    </div>
  )
}

interface EscolhasProps {
  legenda: string
  nome: string
  opcoes: Opcao[]
  valor?: string
  onEscolha: (valor?: string) => void
}

function Escolhas({ legenda, nome, opcoes, valor, onEscolha }: EscolhasProps) {
  return (
    <fieldset>
      <legend className="mb-2 font-semibold">{legenda}</legend>
      <div className="grid grid-cols-2 gap-2">
        {opcoes.map((o) => (
          <label
            key={o.texto}
            className="flex min-h-12 cursor-pointer items-center justify-center rounded-md border border-navy/15 bg-steel/60 px-3 text-center text-[15px] font-medium leading-tight transition-colors hover:border-navy/40 has-checked:border-navy has-checked:bg-navy has-checked:text-white has-focus-visible:outline-3 has-focus-visible:outline-offset-2 has-focus-visible:outline-signal"
          >
            <input
              type="radio"
              name={nome}
              value={o.texto}
              checked={valor === o.texto}
              onChange={() => onEscolha(o.texto)}
              // Tocar de novo na opção marcada desmarca: a escolha é opcional.
              onClick={() => valor === o.texto && onEscolha(undefined)}
              className="sr-only"
            />
            {o.rotulo}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
