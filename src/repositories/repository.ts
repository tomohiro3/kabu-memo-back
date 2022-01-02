import { MongodbClient } from '../lib/database';
import { Dict } from '../types/lib';

export class Repository {
  constructor(protected dbClient: MongodbClient) {}
  private isAttributesEmpty(attributes: Dict) {
    return !Object.keys(attributes).length;
  }
  async find(attributes: Dict, page: number, limit: number) {
    if (this.isAttributesEmpty(attributes)) return await this.dbClient.findAll(page, limit);
    else return await this.dbClient.find(attributes, page, limit);
  }
  async update(code: number, attributes: Dict) {
    return await this.dbClient.uddate(code, attributes);
  }
}
