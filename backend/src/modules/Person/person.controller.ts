import { Request, Response } from "express";
import logger from "../../middlewares/logger.middleware";
import Controller from "../../utils/controller.decorator";
import { Get, Post } from "../../utils/handlers.decorator";
import Middleware from "../../utils/middleware.decorator";
import { PersonService } from "./person.service";

@Controller("/person")
export class PersonController {
  private _service: PersonService;

  constructor() {
    this._service = new PersonService();
  }

  @Middleware([logger])
  @Get("")
  async getAll(req: Request, res: Response) {
    console.log(req.body.user);
    const personas = await this._service.getAll();
    return res.status(200).json(personas);
  }

  @Post("")
  async create(req: Request, res: Response) {}
}
