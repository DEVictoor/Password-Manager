import { MercadoPagoController } from "./MercadoPago/mercadopago.controller"
import { PaymentController as StripeController } from "./Stripe/stripe.controller"

export const controllers = [
  StripeController,
  MercadoPagoController,
]
