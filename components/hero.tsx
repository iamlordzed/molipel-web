import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5491130217554?text=Hola%2C%20quiero%20consultar%20por%20productos%20Molipel"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-primary pt-16"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
          Fabricantes de papel
          <br />
          <span className="text-accent">Molipel Premium</span>
        </h1>

        <p className="max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          Papel higienico, servilletas, bobinas y mas. Representantes oficiales
          de AMK Plasticos. Logistica a todo el pais con mas de 30 anos de
          trayectoria.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#fff] shadow-lg transition-transform hover:scale-105"
        >
          <MessageCircle className="size-5" />
          Consultar por WhatsApp
        </a>
      </div>
    </section>
  )
}
