import { RequestHandler } from "express";
import { Metadata } from "../enums/Controller.enum";

const Middleware = (middlewares: RequestHandler[]): MethodDecorator => {
  return (target, propertyKey) => {
    const controllerclass = target.constructor;
    Reflect.defineMetadata(Metadata.MIDDLE, middlewares, controllerclass);
  };
};

export default Middleware;
