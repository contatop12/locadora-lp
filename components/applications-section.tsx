"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const applications = [
  {
    title: "Obras e Reformas",
    description: "Reformas Residenciais, Comerciais e grandes Obras",
    image: "/images/carousel-obras-reformas.webp",
  },
  {
    title: "Manutenção e Pintura",
    description: "Segurança e eficiência para Condomínios, Empresas, Fábricas e Galpões",
    image: "/images/carousel-manutencao-pintura.webp",
  },
  {
    title: "Eventos e Estruturas Especiais",
    description: "Estruturas tubulares para Palcos, Palanques e passarelas temporárias",
    image: "/images/carousel-eventos-estruturas.webp",
  },
]

export function ApplicationsSection() {
  return (
    <section className="py-10 md:py-16 bg-background" aria-labelledby="applications-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-8">
          <span className="section-kicker justify-center mb-2">
            <span className="section-kicker-line" />
            Aplicações
            <span className="section-kicker-line" />
          </span>
          <h2
            id="applications-heading"
            className="text-xl md:text-4xl font-bold text-foreground mb-2 md:mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Onde o Andaime Tubular é Ideal
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Reformas residenciais, grandes obras e eventos em Itaquera e Zona Leste.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {applications.map((app, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="relative rounded-lg md:rounded-xl overflow-hidden group" style={{ width: '100%', aspectRatio: '720/613' }}>
                    <Image
                      src={app.image}
                      alt={`${app.title} - Locadora Exatidão Itaquera`}
                      width={720}
                      height={613}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-4 bg-background/80 hover:bg-background border-border" />
            <CarouselNext className="right-0 md:-right-4 bg-background/80 hover:bg-background border-border" />
          </Carousel>
        </div>

        <div className="mt-6 md:mt-8 text-center">
          <p className="text-sm md:text-lg text-foreground mb-3 md:mb-4 text-balance">
            Não sabe a quantidade ideal para sua obra?
          </p>
          <Button asChild size="default" className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base">
            <Link href="#formulario">
              Receba orientação gratuita
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
