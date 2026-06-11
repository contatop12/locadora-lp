"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    name: "Andaime Tubular",
    category: "ANDAIMES",
    image: "/images/andaime-tubular-real.jpg",
    featured: true,
  },
  {
    name: "Escada para Andaime",
    category: "ACESSÓRIOS",
    image: "/images/escada-andaime.jpg",
  },
  {
    name: "Guarda Corpo",
    category: "EQUIPAMENTOS",
    image: "/images/guarda-corpo.jpg",
  },
  {
    name: "Piso Metálico",
    category: "EQUIPAMENTOS",
    image: "/images/piso-metalico.jpg",
  },
  {
    name: "Rodízio para Andaime",
    category: "ACESSÓRIOS",
    image: "/images/rodizio-andaime.jpg",
  },
  {
    name: "Sapata Ajustável",
    category: "ACESSÓRIOS",
    image: "/images/sapata-ajustavel.jpg",
  },
  {
    name: "Sapata Fixa",
    category: "ACESSÓRIOS",
    image: "/images/sapata-fixa.jpg",
  },
]

export function ProductsSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary/50" aria-labelledby="products-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <h2
            id="products-heading"
            className="text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Nossos Equipamentos
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Linha completa de andaimes tubulares e acessórios para sua obra em Itaquera e região.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`group bg-card rounded-lg md:rounded-xl border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg ${
                product.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative ${product.featured ? "aspect-square" : "aspect-[4/3]"}`} style={{ backgroundColor: "lab(100 0 0)" }}>
                <Image
                  src={product.image}
                  alt={`${product.name} - Locadora Exatidão`}
                  fill
                  className="object-contain p-2 md:p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-2 md:p-4">
                <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="font-semibold text-foreground mt-0.5 md:mt-1 text-xs md:text-sm">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="#formulario">
              Solicite orçamento pelo WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
