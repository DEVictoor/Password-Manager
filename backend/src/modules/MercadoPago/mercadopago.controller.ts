import { Request, Response } from "express";
import Controller from "../../utils/controller.decorator";
import { Post } from "../../utils/handlers.decorator";
import { MercadoPagoService } from "./mercadopago.service";

@Controller('/payments/mercadopago')
export class MercadoPagoController {

  private mercadopagoService: MercadoPagoService;

  constructor() {
    this.mercadopagoService = new MercadoPagoService();
  }

  @Post('')
  payItems(req: Request, response: Response) {
    this.mercadopagoService.createPayment(req)
      .then(res => response.status(200).json({ id: res.body.id }))
      .catch(err => response.status(400).json(err));
  }

  @Post('/sucess')
  paySucess(req: Request, response: Response) {
    response.status(200).json({ message: 'success' })
  }

  @Post('/failure')
  payFailure(req: Request, response: Response) {
    response.status(400).json({ message: 'failure' })
  }

  @Post('/pending')
  payPending(req: Request, response: Response) {
    response.status(200).json({ message: 'pending' })
  }
}
