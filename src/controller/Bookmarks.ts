import { MongodbClient } from '../lib/database';
import Base from './Base';

class Bookmarks extends Base {
  constructor(dbConnectionPool: MongodbClient) {
    super(dbConnectionPool);
  }
  async get(req: any): Promise<any> {
    const result = await this.repository.searchByQuery();
    return { res: result };
  }
  async post(req: any): Promise<any> {
    return { res: 'post' };
  }
}

export default Bookmarks;
