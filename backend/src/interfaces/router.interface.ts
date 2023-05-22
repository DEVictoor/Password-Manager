import { Methods } from "../enums/httpmethods.enum";

export interface Router {
  method: Methods;
  path: string;
  handlerName: string | symbol;
}
