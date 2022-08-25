import { MongodbClient } from '../lib/database';
import Base from './Base';

export default class Bookmarks extends Base {
  constructor(dbConnectionPool: MongodbClient) {
    super(dbConnectionPool);
  }
  async get(req: any): Promise<any> {
    const result = await this.repository.find({}, 1, 50);
    return result;
  }
  async post(req: any): Promise<any> {
    return 'post';
  }
}
