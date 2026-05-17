import Image from "next/image"
import { MapPin } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5491130217554?text=Hola%2C%20quiero%20consultar%20por%20productos%20Molipel"

export function Contact() {
  return (
    <section id="contacto" className="bg-card py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
          Contactenos
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Estamos para acompanarte. Envianos un mensaje por WhatsApp para
          consultar precios, hacer pedidos o coordinar entregas.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 text-base font-semibold text-[#fff] shadow-lg transition-transform hover:scale-105"
        >
          Contactar por WhatsApp
        </a>

        <div className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4 text-primary" />
          <span>CABA, GBA e interior del pais</span>
        </div>
      </div>
    </section>
  )
}
