"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

/*
 * Curated list of unique Molipel product images.
 * Duplicates and very similar angles have been removed.
 * Videos are listed separately below the gallery.
 */
const products = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-LP9kvPK33Erv8dQsnpn8oISfiiXT3t.jpeg",
    alt: "Molipel Premium - Papel Higienico 12 rollos (celeste)",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12-5VRJ4lyOgEJuafVs6Mtz5MIIB3fTst.jpeg",
    alt: "Molipel Premium - Papel Higienico 10 rollos Doble Hoja",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/27-aELkXMWfuz4JE8lMEkI1qIViGu2LTX.jpeg",
    alt: "Molipel Premium - Papel Higienico 12 rollos (dorado)",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-Hie2Ep7uhe54ZzdCwh6qO0yZaQH4UO.jpeg",
    alt: "Molipel Premium - Papel Higienico 24 rollos rosa Pack Oferta",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/29-ZrMHD0jMWnqZFy9IkBYSqVnk5vaAAx.jpeg",
    alt: "Molipel Premium - Papel Higienico 30 rollos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22-G3wFXNgT9LL1SW29Ge4Kl6jbV5vyg2.jpeg",
    alt: "Molipel Premium - Papel Higienico 48 rollos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/13-RDKKuoApMTjz4eBXPbgMwiKxVc4D4J.jpeg",
    alt: "Molipel Premium - Rollos de Cocina 8 rollos (rosa)",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20-t7MzntrIfAwi8f56zyZ08aoowRucSB.jpeg",
    alt: "Molipel Premium - Rollos de Cocina 8 rollos (celeste)",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15-32D2TDsCmfyjCaqcyHww71sF43G6YN.jpeg",
    alt: "Molipel - Higiene Institucional rollos grandes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/21-Wo6XhZnjLhmjUAOPCTgK5EiABMcdm4.jpeg",
    alt: "Molipel - Rollos institucionales grandes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/19-7x2yxRZNvpxpaIdrAtu8OVtSLi3UVv.jpeg",
    alt: "Molipel - Toallas intercaladas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-q0JbROimOeo4gRVlptuyTYXF5mMMLO.jpeg",
    alt: "Molipel Premium - Papel Higienico detalle doble rollo",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24-tYcUDWF1Y1WQjDxGph04HNrOy6iNLW.jpeg",
    alt: "Molipel - Bobinas industriales 4 rollos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/28-nW4suGZnl9VcM8GZdpBoCmRV3XE9a5.jpeg",
    alt: "Molipel Premium - 4 rollos 80 metros Extra Blanco",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-wAQZFncrEMQel5zmUMegMSRXxPEgUN.jpeg",
    alt: "Planta Molipel - Proceso de fabricacion bobinas",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25-WrmHh3u6AooGQvpzyDWIxwJfbNaS20.jpeg",
    alt: "Deposito Molipel - Pallets rollos de cocina",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/26-Rm9vZG84DrDDrPdxk0tEKSQVd2v9df.jpeg",
    alt: "Deposito Molipel - Pallets papel higienico 30 rollos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/23-oUPdSgotqBY022PdpVkDvWNxDCkbbW.jpeg",
    alt: "Deposito Molipel - Stock papel higienico 80 metros",
  },
]

export function Products() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  function prev() {
    if (lightbox === null) return
    setLightbox(lightbox === 0 ? products.length - 1 : lightbox - 1)
  }

  function next() {
    if (lightbox === null) return
    setLightbox(lightbox === products.length - 1 ? 0 : lightbox + 1)
  }

  return (
    <section id="productos" className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-foreground">
          Nuestros productos
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">
          Papel higienico, rollos de cocina, servilletas, bobinas y productos de
          higiene institucional. Todo fabricado bajo nuestra marca Molipel
          Premium.
        </p>

        {/* Grid gallery - 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border bg-card focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ))}
        </div>

        {/* Videos section */}
        <h3 className="mb-6 mt-14 text-center text-xl font-semibold text-foreground">
          Videos de nuestra planta y productos
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video1-OSOhyA8sOxkRaEqHhqpZubyfe1plhK.mp4",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video2-euknmmQTrW1ZBPSQmFMI9DdLTtFwHA.mp4",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video3-HsZizcJhwRD3syD3PuHatyhijGcFo2.mp4",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video4-grFri5CeVm9PLVC06GOgJLbV53acB4.mp4",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video5-c5eQDyk2aRml0lFOumrBKSJi1prnOL.mp4",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video6-4FNC2TUxJIxsfVhJ8vgzcL2bYyQWpX.mp4",
          ].map((url, i) => (
            <video
              key={i}
              controls
              preload="metadata"
              playsInline
              className="aspect-video w-full rounded-lg border border-border bg-card object-cover"
            >
              <source src={url} type="video/mp4" />
              Su navegador no soporta video HTML5.
            </video>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              setLightbox(null)
            }}
            className="absolute top-4 right-4 rounded-full bg-card p-2 text-foreground shadow-md"
            aria-label="Cerrar"
          >
            <X className="size-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-2 rounded-full bg-card p-2 text-foreground shadow-md sm:left-4"
            aria-label="Anterior"
          >
            <ChevronLeft className="size-6" />
          </button>

          <div
            className="relative mx-12 h-[80vh] max-h-[80vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={products[lightbox].src}
              alt={products[lightbox].alt}
              fill
              sizes="90vw"
              className="rounded-lg object-contain"
            />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-2 rounded-full bg-card p-2 text-foreground shadow-md sm:right-4"
            aria-label="Siguiente"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      )}
    </section>
  )
}
