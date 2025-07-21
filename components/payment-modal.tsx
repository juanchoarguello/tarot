"use client"
import { Phone, CreditCard, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"

interface Tarotista {
  id: number
  nombre: string
  telefono: string
  precio_minuto: number
}

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  tarotista: Tarotista
}

export function PaymentModal({ isOpen, onClose, tarotista }: PaymentModalProps) {
  const handlePaymentSelect = (method: string) => {
    switch (method) {
      case "llamada":
        // Redirigir inmediatamente a la llamada
        window.location.href = `tel:${tarotista.telefono}`
        break
      case "tarjeta":
        // Simular proceso de pago con tarjeta
        setTimeout(() => {
          alert("Pago procesado exitosamente. Conectando con la tarotista...")
          window.location.href = `tel:${tarotista.telefono}`
        }, 2000)
        break
      case "paypal":
        // Simular proceso de pago con PayPal
        setTimeout(() => {
          alert("Pago PayPal procesado exitosamente. Conectando con la tarotista...")
          window.location.href = `tel:${tarotista.telefono}`
        }, 2000)
        break
    }

    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#6f5c57] text-white border-[#a4a49f] max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-[#a4a49f]">
            Consulta con {tarotista.nombre}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="text-center mb-6">
            <p className="text-lg mb-2">Tarifa: ${tarotista.precio_minuto} US$/minuto</p>
            <p className="text-sm text-gray-300">Selecciona tu método de pago preferido</p>
          </div>

          {/* Llamada por Cobrar */}
          <Card
            className="bg-[#7a6c58] border-[#a4a49f] cursor-pointer hover:bg-[#55504f] transition-colors"
            onClick={() => handlePaymentSelect("llamada")}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">Llamada por Cobrar</h3>
                  <p className="text-sm text-gray-300">Se cobra directo en tu factura telefónica</p>
                  <p className="text-xs text-green-400">¡Conexión inmediata!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tarjeta de Crédito */}
          <Card
            className="bg-[#7a6c58] border-[#a4a49f] cursor-pointer hover:bg-[#55504f] transition-colors"
            onClick={() => handlePaymentSelect("tarjeta")}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500 p-3 rounded-full">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">Tarjeta de Crédito</h3>
                  <p className="text-sm text-gray-300">Visa, MasterCard, American Express</p>
                  <p className="text-xs text-blue-400">Pago seguro SSL</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* PayPal */}
          <Card
            className="bg-[#7a6c58] border-[#a4a49f] cursor-pointer hover:bg-[#55504f] transition-colors"
            onClick={() => handlePaymentSelect("paypal")}
          >
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-500 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white">PayPal</h3>
                  <p className="text-sm text-gray-300">Pago rápido y seguro con PayPal</p>
                  <p className="text-xs text-yellow-400">Protección del comprador</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button
            variant="outline"
            onClick={onClose}
            className="w-full mt-4 border-[#a4a49f] text-[#a4a49f] hover:bg-[#a4a49f] hover:text-[#5a4a18] bg-transparent"
          >
            Cancelar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
