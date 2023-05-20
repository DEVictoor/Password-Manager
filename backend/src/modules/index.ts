import { MercadoPagoController } from "./MercadoPago/mercadopago.controller"
import { PersonController } from "./Person/person.controller"
import { SeederController } from "./Seeder/seeder.controller"
import { PaymentController as StripeController } from "./Stripe/stripe.controller"

export const controllers = [
  StripeController,
  MercadoPagoController,
  PersonController,
  SeederController,
]
