import { MetadataKeys } from "./metadata.keys";

export enum Methods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DElETE = 'delete',
}

export interface IRouter {
  method: Methods;
  path: string;
  handlerName: string | symbol;
}

const MethodDecoratorFactory = (method: Methods) => {
  return (path: string): MethodDecorator => {
    return (target, propertyKey) => {
      const controllerClass = target.constructor;

      const routers: IRouter[] = 
        Reflect.hasMetadata(MetadataKeys.ROUTERS, controllerClass) 
        ? Reflect.getMetadata(MetadataKeys.ROUTERS, controllerClass) : [];

      routers.push({
        method,
        path,
        handlerName: propertyKey,
      });

      Reflect.defineMetadata(MetadataKeys.ROUTERS, routers, controllerClass);
    }
  }
}

export const Get = MethodDecoratorFactory(Methods.GET);
export const Post = MethodDecoratorFactory(Methods.POST);
export const Put = MethodDecoratorFactory(Methods.PUT);
export const Delete = MethodDecoratorFactory(Methods.DElETE);
