import { Router } from 'express';
import { MongodbClient } from '../lib/database';
import { ControllerConstructor, IController } from '../types/controller';

const METHODS = ['get', 'post', 'put', 'patch', 'delete'] as const;
type MethodsType = typeof METHODS[number];

export default function makeApi(Controller: ControllerConstructor, pool: MongodbClient) {
  const router = Router();

  const propertyMethods = Object.getOwnPropertyNames(Controller.prototype as Array<keyof IController>);
  const controller = new Controller(pool);

  METHODS.forEach((method: MethodsType) => {
    if (propertyMethods.indexOf(method) > -1) {
      router[method](
        method === 'put' || method === 'patch' || method === 'delete' ? '/:code' : '/',
        async function (req, res) {
          const result = await controller[method]!(req);
          console.log(result);
          return res.json(result);
        }
      );
    }
  });

  const url = `/${Controller.toUrl()}`;
  return { url, controllerFunction: router };
}
