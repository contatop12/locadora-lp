"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, MessageCircle } from "lucide-react"

interface HeaderProps {
  whatsappUrl?: string
}

export function Header({ whatsappUrl }: HeaderProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const ctaHref = whatsappUrl ?? "#formulario"
  const isExternal = Boolean(whatsappUrl)

  const navItems = [
    { href: "#produtos", label: "Produtos" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#aplicacoes", label: "Aplicações" },
    { href: "#seguranca", label: "Segurança" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-black backdrop-blur border-b border-white/10 shadow-lg shadow-black/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-2">
          <Link href={whatsappUrl ? "/guarulhos/whatsapp" : "/guarulhos"} className="flex items-center">
            <Image
              src="/images/logo-exatidao-horizontal.png"
              alt="Exatidão Locação de Equipamentos"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-white/70 hover:text-white transition-colors text-sm after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary/90">
              {isExternal ? (
                <a href={ctaHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Orçamento
                </a>
              ) : (
                <Link href={ctaHref}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Orçamento
                </Link>
              )}
            </Button>

            <button
              type="button"
              className="lg:hidden p-2 text-background"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-white/10" aria-label="Navegação mobile">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-background py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
                {isExternal ? (
                  <a
                    href={ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </a>
                ) : (
                  <Link href={ctaHref} onClick={() => setIsMenuOpen(false)}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Solicitar Orçamento
                  </Link>
                )}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
