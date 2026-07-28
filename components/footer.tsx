import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Clock, MessageCircle } from "lucide-react"

interface FooterProps {
  whatsappUrl?: string
}

export function Footer({ whatsappUrl }: FooterProps = {}) {
  const ctaHref = whatsappUrl ?? "#formulario"
  const isExternal = Boolean(whatsappUrl)

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-exatidao-horizontal.png"
                alt="Exatidão Locação de Equipamentos"
                width={180}
                height={50}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Locação de andaimes e equipamentos para construção civil em Itaquera e Zona Leste de São Paulo. Segurança e qualidade para sua obra.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#beneficios" className="text-background/70 hover:text-background text-sm">
                  Benefícios do Andaime Tubular
                </Link>
              </li>
              <li>
                <Link href="#aplicacoes" className="text-background/70 hover:text-background text-sm">
                  Aplicações
                </Link>
              </li>
              <li>
                <Link href="#seguranca" className="text-background/70 hover:text-background text-sm">
                  Segurança e Normas
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="text-background/70 hover:text-background text-sm">
                  Como Funciona
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-background/70 hover:text-background text-sm">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Av. Calim Eid, 116 - Vila Ré<br />São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary flex-shrink-0" />
                {isExternal ? (
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background text-sm"
                  >
                    Fale pelo WhatsApp
                  </a>
                ) : (
                  <Link href={ctaHref} className="text-background/70 hover:text-background text-sm">
                    Fale pelo WhatsApp
                  </Link>
                )}
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:contato@locadoraexatidao.com.br" className="text-background/70 hover:text-background text-sm">
                  contato@locadoraexatidao.com.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-background mb-4">Horário de Atendimento</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-background/70 text-sm">
                <p>Segunda a Sexta das 8:00 ás 18:00</p>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-background/70 text-sm">
            © {new Date().getFullYear()} Locadora Exatidão. Todos os direitos reservados.
          </p>
          <p className="text-background/50 text-xs mt-2">
            Aluguel de andaimes em Itaquera | Zona Leste de São Paulo
          </p>
        </div>
      </div>
    </footer>
  )
}
