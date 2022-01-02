import { Request, Response } from 'express';
import { MongodbClient } from '../lib/database';

export type ControllerConstructor = {
  new (pool: MongodbClient): IController;
  toUrl: () => string;
};

export interface IController {
  get?: (req: Request) => Promise<Response | void>;
  patch?: (req: Request) => Promise<Response | void>;
  post?: (req: Request) => Promise<Response | void>;
  put?: (req: Request) => Promise<Response | void>;
  delete?: (req: Request) => Promise<Response | void>;
}
