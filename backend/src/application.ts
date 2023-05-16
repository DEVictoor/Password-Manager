import express, { Application as ExApplication, Handler } from 'express';
import { controllers } from './modules//index';
import { MetadataKeys } from './utils/metadata.keys';
import { IRouter, Methods } from './utils/handlers.decorator';
import cors from 'cors';

class Application {
  private readonly _instance: ExApplication;

  get instance(): ExApplication {
    return this._instance;
  }

  constructor() {
    this._instance = express();
    this._instance.use(express.json());
    this._instance.use('/public', express.static('assets'));
    this._instance.use(cors({ origin: '*' }))
    this.registerRouters();
  }

  private registerRouters() {

    this._instance.get('/', (req, res) => {

      res.json({ message: 'Hello World!' });
    });

    const info: Array<{ api: string, handle: string }> = [];

    controllers.forEach((controllerclass) => {

      const controllerInstance: { [handleName: string]: Handler } = new controllerclass() as any;

      const basePath: string = Reflect.getMetadata(MetadataKeys.BASE_PATH, controllerclass);
      const routers: IRouter[] = Reflect.getMetadata(MetadataKeys.ROUTERS, controllerclass);

      const exRouter = express.Router();

      routers.forEach(({ method, path, handlerName }) => {

        // Registra los metodos para 
        exRouter[method](path, controllerInstance[String(handlerName)].bind(controllerInstance));

        // Code for print to console
        info.push({
          api: `${method.toLocaleUpperCase()} ${basePath + path}`,
          handle: `${controllerclass.name}.${String(handlerName)}`,
        });

      });

      this._instance.use(basePath, exRouter);

    })

    console.clear();
    console.table(info);

  }
}

export default new Application();
