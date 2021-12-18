import { Router } from 'express';
import { ViewConstructor, ViewInterface } from '../types/view';

const METHODS = ['get', 'post', 'put', 'patch', 'delete'] as const;
type MethodsType = typeof METHODS[number];

function makeApi(View: ViewConstructor) {
  const router = Router();

  const propertyMethods = Object.getOwnPropertyNames(View.prototype as Array<keyof ViewInterface>);
  const view = new View();

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
