"use client"

import { useState } from "react"
import { Star, Heart, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { PaymentModal } from "./payment-modal"

interface Tarotista {
  id: number
  nombre: string
  especialidad: string
  experiencia: string
  foto: string
  telefono: string
  especialidades: string[]
  disponible: boolean
  calificacion: number
  precio_minuto: number
}

interface TarotistaCardProps {
  tarotista: Tarotista
}

export function TarotistaCard({ tarotista }: TarotistaCardProps) {
  const [showPayment, setShowPayment] = useState(false)

  return (
    <>
      <Card className="bg-gradient-to-b from-[#7a6c58] to-[#6f5c57] text-white border-0">
        <CardContent className="p-6 text-center">
          <div className="relative mb-4">
            <Image
              src={tarotista.foto || "/placeholder.svg"}
              alt={`${tarotista.nombre} - ${tarotista.especialidad}`}
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-yellow-400"
            />
            <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-[#5a4a18]">⭐ VIP</Badge>
            {!tarotista.disponible && (
              <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">NO DISPONIBLE</span>
              </div>
            )}
          </div>

          <h2 className="text-2xl font-bold mb-2">{tarotista.nombre.toUpperCase()}</h2>
          <p className="text-yellow-200 mb-2">{tarotista.especialidad}</p>
          <p className="text-sm mb-4">{tarotista.experiencia}</p>

          <div className="space-y-2 mb-6">
            {tarotista.especialidades.map((esp, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                {index === 0 && <Star className="h-4 w-4 text-yellow-400" />}
                {index === 1 && <Heart className="h-4 w-4 text-pink-400" />}
                {index === 2 && <Moon className="h-4 w-4 text-blue-300" />}
                <span className="text-sm">{esp}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center mb-4">
            {[...Array(tarotista.calificacion)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>

          <div className="mb-4 p-2 bg-[#5a4a18] rounded-lg">
            <p className="text-[#a4a49f] font-bold">${tarotista.precio_minuto} COP/min</p>
          </div>

          <Button
            className="w-full bg-[#a4a49f] hover:bg-[#7a6c58] text-[#5a4a18] font-bold py-3 mb-4"
            onClick={() => setShowPayment(true)}
            disabled={!tarotista.disponible}
          >
            {tarotista.disponible ? "CREAR CONSULTA" : "NO DISPONIBLE"}
          </Button>

          {tarotista.disponible && (
            <div className="p-3 bg-green-500 rounded-lg mb-4">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                <span className="font-bold text-sm">DISPONIBLE AHORA</span>
              </div>
            </div>
          )}

          <div className="text-center">
            <p className="text-lg font-bold text-yellow-400">📞 {tarotista.telefono}</p>
          </div>
        </CardContent>
      </Card>

      <PaymentModal isOpen={showPayment} onClose={() => setShowPayment(false)} tarotista={tarotista} />
    </>
  )
}
