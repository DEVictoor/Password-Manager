import { Request, Response } from "express";
import Controller from "../../utils/controller.decorator";
import { Get } from "../../utils/handlers.decorator";
import { PersonService } from "./person.service";

@Controller('/person')
export class PersonController {

  private _service: PersonService;

  constructor() {
    this._service = new PersonService();
  }

  @Get('')
  async getAll(req: Request, res: Response) {
    const personas = await this._service.getAll();
    return res.status(200).json(personas);
  }
}
