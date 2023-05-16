import { Request, Response } from "express";
import Controller from "../../utils/controller.decorator";
import { Get, Post } from "../../utils/handlers.decorator";
import { PaymentService } from "./stripe.service";

@Controller('/payments/stripe')
export class PaymentController {
  private paymentService: PaymentService

  constructor() {
    this.paymentService = new PaymentService();
  }

  @Post('')
  createPayments(req: Request, response: Response) {

    this.paymentService
      .createPayment(req.body)
      .then((res) => {
        response.status(200).json(res);
      })
      .catch((err) => {
        response.status(400).json(err);
      })
  }
}
