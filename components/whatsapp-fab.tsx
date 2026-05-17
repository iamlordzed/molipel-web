"use client"

import Image from "next/image"

const WHATSAPP_URL =
  "https://wa.me/5491130217554?text=Hola%2C%20quiero%20consultar%20por%20productos%20Molipel"

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <Image
        src="/images/whatsapp-icon.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="size-14 rounded-full"
      />
    </a>
  )
}
