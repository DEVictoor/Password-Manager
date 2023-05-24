import { AuthController } from "./auth/auth.controller";
import { MercadoPagoController } from "./MercadoPago/mercadopago.controller";
import { PersonController } from "./Person/person.controller";
import { SeederController } from "./Seeder/seeder.controller";
import { PaymentController as StripeController } from "./Stripe/stripe.controller";
import { UserController } from "./Users/user.controller";

export const controllers = [
  StripeController,
  MercadoPagoController,
  PersonController,
  SeederController,
  AuthController,
  // UserController,
];
