import { Metadata } from "../enums/Controller.enum";

const Controller = (basePath: string): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(Metadata.BASE_PATH, basePath, target);
  };
};

export default Controller;
