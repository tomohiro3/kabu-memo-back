import { MongodbClient } from '../lib/database';
import Base from './Base';

class Stocks extends Base {
  constructor(db: MongodbClient) {
    super(db);
  }

  async get(req: any): Promise<any> {
    const result = await this.repository.searchByQuery();
    return { res: result };
  }
}

export default Stocks;
