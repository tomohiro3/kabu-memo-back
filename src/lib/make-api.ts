import { Router } from 'express';
import { createDbClient } from '../infrastructure/database';
import { ControllerConstructor, IController } from '../types/controller';
// import DBClient from '../somewhere';

const METHODS = ['get', 'post', 'put', 'patch', 'delete'] as const;
type MethodsType = typeof METHODS[number];

function makeApi(Controller: ControllerConstructor) {
  const router = Router();

  const propertyMethods = Object.getOwnPropertyNames(Controller.prototype as Array<keyof IController>);
  const controller = new Controller(createDbClient());

  METHODS.forEach((method: MethodsType) => {
    if (propertyMethods.indexOf(method) > -1) {
      router[method]('/', function (req, res) {
        const result = controller[method]!(req);
        return res.json(result);
      });
    }
  });

  const url = `/${Controller.toUrl()}`;
  return { url, viewFunction: router };
}

export default makeApi;
