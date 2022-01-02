import { Request } from 'express';
import { MongodbClient } from '../lib/database';
import { Repository } from '../repositories/Repository';
import { IController } from '../types/controller';

export default class Base implements IController {
  protected repository!: Repository;

  constructor(db: MongodbClient) {
    this.repository = new Repository(db);
  }

  async get(req: Request) {
    throw new Error("The method's not implemented");
  }
  async patch(req: Request) {
    throw new Error("The method's not implemented");
  }
  async post(req: Request) {
    throw new Error("The method's not implemented");
  }
  async put(req: Request) {
    throw new Error("The method's not implemented");
  }
  async delete(req: Request) {
    throw new Error("The method's not implemented");
  }

  static toUrl() {
    return this.name.toLowerCase();
  }
}
