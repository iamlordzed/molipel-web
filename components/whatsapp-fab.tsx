"use client"

import { MessageCircle } from "lucide-react"

const WHATSAPP_URL =
  "https://wa.me/5491130217554?text=Hola%2C%20quiero%20consultar%20por%20productos%20Molipel"

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-[#fff] shadow-lg transition-transform hover:scale-110 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-7" />
    </a>
  )
}
