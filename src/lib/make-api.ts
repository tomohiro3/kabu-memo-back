import { Router } from 'express';
import { createDbClient } from '../infrasttructure/database';
import { ViewConstructor, ViewInterface } from '../types/view';
// import DBClient from '../somewhere';

const METHODS = ['get', 'post', 'put', 'patch', 'delete'] as const;
type MethodsType = typeof METHODS[number];

function makeApi(View: ViewConstructor) {
  const router = Router();

  const propertyMethods = Object.getOwnPropertyNames(View.prototype as Array<keyof ViewInterface>);
  const view = new View(createDbClient());

  METHODS.forEach((method: MethodsType) => {
    if (propertyMethods.indexOf(method) > -1) {
      router[method]('/', function (req, res) {
        const result = view[method]!(req);
        return res.json(result);
      });
    }
  });

  const url = `/${View.toUrl()}`;
  return { url, viewFunction: router };
}

export default makeApi;
