import { createDbClient } from '../lib/database';
import { getList } from '../services/stock';
import Base from './Base';

class Stock extends Base {
  constructor() {
    super();
  }
  async get(req: any): Promise<any> {
    const dbClinet = await createDbClient();
    const result = await getList(dbClinet);

    return { res: result };
  }
}

export default Stock;
