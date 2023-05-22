import { Methods } from "../enums/httpmethods.enum";
import { Metadata as MetadataKeys } from "../enums/Controller.enum";
import { Router } from "../interfaces/router.interface";

const MethodDecoratorFactory = (method: Methods) => {
  return (path: string): MethodDecorator => {
    return (target, propertyKey) => {
      const controllerClass = target.constructor;

      const routers: Router[] = Reflect.hasMetadata(
        MetadataKeys.ROUTERS,
        controllerClass
      )
        ? Reflect.getMetadata(MetadataKeys.ROUTERS, controllerClass)
        : [];

      routers.push({
        method,
        path,
        handlerName: propertyKey,
      });

      Reflect.defineMetadata(MetadataKeys.ROUTERS, routers, controllerClass);
    };
  };
};

export const Get = MethodDecoratorFactory(Methods.GET);
export const Post = MethodDecoratorFactory(Methods.POST);
export const Put = MethodDecoratorFactory(Methods.PUT);
export const Delete = MethodDecoratorFactory(Methods.DElETE);
