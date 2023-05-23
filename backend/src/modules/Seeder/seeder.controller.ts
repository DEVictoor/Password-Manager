import { Request, Response } from "express";
import Controller from "../../utils/controller.decorator";
import { Post } from "../../utils/handlers.decorator";
import { SeederService } from "./seeder.service";

@Controller('/seeder')
export class SeederController {
  private _service: SeederService;

  constructor(
  ) {
    this._service = new SeederService();
  }

  @Post('')
  async seeder(req: Request, res: Response) {

    await this._service.seeder();

    return res.status(200).json({ message: 'ok' })
  }

}
