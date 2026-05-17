import { Factory, Truck, Award } from "lucide-react"

const features = [
  {
    icon: Factory,
    title: "Fabricacion propia",
    description:
      "Nos dedicamos a la fabricacion de papel higienico, servilletas y bobinas de la marca Molipel Premium. Industria 100% argentina.",
  },
  {
    icon: Award,
    title: "Representantes AMK Plasticos",
    description:
      "Somos representantes oficiales de la marca AMK Plasticos, con reconocimiento nacional por excelencia en calidad y precio.",
  },
  {
    icon: Truck,
    title: "Logistica a todo el pais",
    description:
      "Con una trayectoria de mas de 30 anos de distribucion en CABA, GBA e interior del pais, con las unidades adecuadas para cada necesidad.",
  },
]

export function About() {
  return (
    <section id="nosotros" className="bg-card py-20">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground">
          Quienes somos
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-pretty leading-relaxed text-muted-foreground">
          Cuando el conflicto economico apremia, surgen los desafios de seguir
          avanzando y buscar la mejor alternativa para proveer lo necesario. Aqui
          estamos para acompanar a nuestros clientes en solucionar sus
          dificultades. Los invitamos a conocernos: con tan solo una consulta,
          buscaremos la mejor opcion al alcance de su necesidad.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-6 text-center"
            >
              <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                <f.icon className="size-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
