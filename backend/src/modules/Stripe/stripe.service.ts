import Stripe from "stripe";
import { PaymentRequestBody } from "./types/PaymentBody";
import * as dotenv from 'dotenv';

dotenv.config();

export class PaymentService {

  private stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2022-11-15'})
  }

  createPayment(paymentRequestBody: PaymentRequestBody): Promise<any> {

    let sumAmount = 0;

    paymentRequestBody.products.forEach((product) => {
      sumAmount += product.price * product.quantity;
    })

    return this.stripe.paymentIntents.create({
      amount: sumAmount * 100,
      currency: paymentRequestBody.currency,
    })
  }
}
