"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppSupport() {
  const whatsappNumber = "+573002392699"
  const message = "Hola, tengo una consulta sobre los servicios de Arco Tarot y Videncia"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-bounce"
        size="lg"
      >
        <MessageCircle className="h-6 w-6 mr-2" />
        <span className="hidden sm:inline">Dudas y Reclamos</span>
        <span className="sm:hidden">WhatsApp</span>
      </Button>
    </div>
  )
}
