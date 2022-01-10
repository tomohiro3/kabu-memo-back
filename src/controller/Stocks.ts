import { Request, Response } from 'express';
import { MongodbClient } from '../lib/database';
import StocksValidator from '../validators/Stocks';
import Base from './Base';

export default class Stocks extends Base {
  private validator: StocksValidator;
  constructor(db: MongodbClient) {
    super(db);
    this.validator = new StocksValidator();
  }

  async get(req: Request): Promise<any> {
    const { attributes, page, limit } = this.validator.getRequest(req.query);
    const result = await this.repository.find(attributes, page, limit);
    console.log(this.validator.toResponse(result));
    return { res: this.validator.toResponse(result) };
  }

  async patch(req: Request): Promise<any> {
    const { code, attributes } = this.validator.patchRequest(req.params.code, req.body);
    const result = await this.repository.update(code, attributes);
    return { res: result };
  }
}
