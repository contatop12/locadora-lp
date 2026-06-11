import Image from "next/image"
import { MessageCircle, UserCheck, ClipboardList, Truck, CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Informe seu WhatsApp",
      description: "Preencha o formulário com seu nome e número de WhatsApp.",
    },
    {
      icon: UserCheck,
      title: "Receba nosso contato",
      description: "Nosso especialista entra em contato pelo WhatsApp em poucos minutos.",
    },
    {
      icon: ClipboardList,
      title: "Defina o projeto",
      description: "Informamos a quantidade ideal de módulos e valor do aluguel.",
    },
    {
      icon: Truck,
      title: "Entrega na obra",
      description: "Entregamos os andaimes no local combinado em Itaquera ou região.",
    },
    {
      icon: CheckCircle,
      title: "Retirada ao final",
      description: "Ao término da locação, fazemos a retirada. Simples e prático.",
    },
  ]

  return (
    <section className="py-10 md:py-16 bg-background" aria-labelledby="how-it-works-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2
            id="how-it-works-heading"
            className="text-xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Como funciona o aluguel de andaimes
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Processo simples e transparente. Atendimento humanizado via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6">
          {steps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-10 h-10 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center mb-2 md:mb-3">
                <item.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xs md:text-base font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-muted-foreground text-[10px] md:text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-10 grid md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden">
            <Image
              src="/images/caminhao-exatidao.jpg"
              alt="Caminhão da Locadora Exatidão transportando andaimes em Itaquera"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-lg md:text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
              Entrega rápida em Itaquera e região
            </h3>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Nossa frota própria garante entrega ágil e segura dos equipamentos diretamente na sua obra.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm md:text-base text-foreground">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                Frota própria para maior agilidade
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-foreground">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                Entrega e retirada no local da obra
              </li>
              <li className="flex items-center gap-2 text-sm md:text-base text-foreground">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0" />
                Equipamentos conferidos antes do envio
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
