import { Router } from 'express';
import { MongodbClient } from '../lib/database';
import { ControllerConstructor, IController } from '../types/controller';

const METHODS = ['get', 'post', 'put', 'patch', 'delete'] as const;
type MethodsType = typeof METHODS[number];

function makeApi(Controller: ControllerConstructor, pool: MongodbClient) {
  const router = Router();

  const propertyMethods = Object.getOwnPropertyNames(Controller.prototype as Array<keyof IController>);
  const controller = new Controller(pool);

  METHODS.forEach((method: MethodsType) => {
    if (propertyMethods.indexOf(method) > -1) {
      router[method]('/', async function (req, res) {
        const result = await controller[method]!(req);
        return res.json(result);
      });
    }
  });

  const url = `/${Controller.toUrl()}`;
  return { url, controllerFunction: router };
}

export default makeApi;
