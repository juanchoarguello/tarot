"use client"

import { Star, Clock, Heart, Sparkles, Sun, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TarotistaCard } from "@/components/tarotista-card"
import { WhatsAppSupport } from "@/components/whatsapp-support"
import Image from "next/image"
import tarotistasData from "@/data/tarotistas.json"

export default function TarotPage() {
  const tarotistas = tarotistasData

  const handleWhatsAppClick = () => {
    const whatsappNumber = "573002392699"
    const message = "Hola, tengo una consulta sobre los servicios de Arco Tarot y Videncia"
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#55504f] via-[#6f5c57] to-[#7a6c58]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#a4a49f] to-[#7a6c58] p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-[#5a4a18]" />
            <h1 className="text-2xl font-bold text-[#5a4a18]">Arco Tarot y Videncia</h1>
          </div>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded-lg transition-colors"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            300 2392699
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <Card className="mb-8 bg-gradient-to-r from-[#6f5c57] to-[#7a6c58] text-white border-0">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h1 className="text-4xl font-bold mb-4">Descubre tu Futuro con el Tarot</h1>
                <p className="text-lg mb-6">
                  Consulta profesional de tarot y videncia. Respuestas claras sobre amor, trabajo y futuro. ¡Conecta con
                  nuestras tarotistas expertas!
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className="bg-yellow-400 text-[#5a4a18]">Tarot del Amor</Badge>
                  <Badge className="bg-green-400 text-[#5a4a18]">Videncia Real</Badge>
                  <Badge className="bg-pink-400 text-[#5a4a18]">Rituales</Badge>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/tarot.png"
                  alt="Tarot y Videncia Profesional"
                  width={700}
                  height={300}
                  className="rounded-lg"
                />
                <div className="absolute -top-4 -right-4">
                  <div className="bg-yellow-400 text-[#5a4a18] p-3 rounded-full animate-spin-slow">✨</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sección de Tarotistas */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Nuestras Tarotistas Profesionales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tarotistas.map((tarotista) => (
              <TarotistaCard key={tarotista.id} tarotista={tarotista} />
            ))}
          </div>
        </div>

        {/* Servicios */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-white/10 backdrop-blur-sm text-white border-[#a4a49f]">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-pink-400 mr-3" />
                <h3 className="text-xl font-bold">Tarot del Amor</h3>
              </div>
              <p className="mb-4">
                Descubre si esa persona especial siente lo mismo por ti. Consulta sobre relaciones, reconciliaciones y
                futuro amoroso.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm text-white border-[#a4a49f]">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Sun className="h-8 w-8 text-yellow-400 mr-3" />
                <h3 className="text-xl font-bold">Videncia General</h3>
              </div>
              <p className="mb-4">
                Consultas sobre trabajo, dinero, salud y decisiones importantes. Orientación clara para tu futuro.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonios */}
        <Card className="bg-white/10 backdrop-blur-sm text-white border-[#a4a49f] mb-8">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-center">Lo que dicen nuestros clientes</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Cliente satisfecha"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-3"
                />
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic">
                  {"Cristina me ayudó a encontrar el amor de mi vida. Sus predicciones fueron exactas."}
                </p>
                <p className="text-xs text-gray-300 mt-2">- María, 32 años</p>
              </div>

              <div className="text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Cliente satisfecho"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-3"
                />
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic">
                  {"Increíble precisión en sus lecturas. Me ayudó en decisiones importantes."}
                </p>
                <p className="text-xs text-gray-300 mt-2">- Carlos, 28 años</p>
              </div>

              <div className="text-center">
                <Image
                  src="/placeholder.svg?height=80&width=80"
                  alt="Cliente satisfecha"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-3"
                />
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic">{"Profesional y empática. Sus consejos cambiaron mi vida para mejor."}</p>
                <p className="text-xs text-gray-300 mt-2">- Ana, 25 años</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Llamada a la acción final */}
        <Card className="bg-gradient-to-r from-[#7a6c58] to-[#6f5c57] text-white border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para conocer tu futuro?</h2>
            <p className="text-lg mb-6">Selecciona tu tarotista favorita y elige tu método de pago preferido.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-yellow-200">
                <Clock className="h-5 w-5" />
                <span>Disponible 24/7</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-[#55504f] text-white p-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2024 Arco Tarot y Videncia - Todos los derechos reservados</p>
          <p className="text-sm text-purple-300">
            Servicio de entretenimiento para mayores de 18 años. Coste de llamada según tarifa de tu operador.
          </p>
        </div>
      </footer>

      {/* WhatsApp Support Button */}
      <WhatsAppSupport />
    </div>
  )
}
