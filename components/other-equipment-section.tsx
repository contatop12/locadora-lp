import { HardHat, Hammer, Layers, ArrowUpCircle, Construction, Wrench } from "lucide-react"

export function OtherEquipmentSection() {
  const equipment = [
    { icon: Construction, name: "Betoneiras" },
    { icon: Hammer, name: "Marteletes e rompedores" },
    { icon: Layers, name: "Escoramento para laje" },
    { icon: ArrowUpCircle, name: "Guincho de coluna" },
    { icon: HardHat, name: "Compactadores" },
    { icon: Wrench, name: "Escadas e ferramentas" },
  ]

  return (
    <section className="py-16 md:py-20 bg-secondary" aria-labelledby="other-equipment-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2
              id="other-equipment-heading"
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Outros equipamentos para sua obra
            </h2>
            <p className="text-muted-foreground">
              Além do aluguel de andaimes tubulares, a Locadora Exatidão oferece uma linha completa de equipamentos para construção civil. Resolva toda a sua obra em um só lugar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {equipment.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border">
                <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground text-sm">{item.name}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground">
            Confira todos os produtos no site oficial:{" "}
            <span className="text-primary font-medium">locadoraexatidao.com.br</span>
          </p>
        </div>
      </div>
    </section>
  )
}
