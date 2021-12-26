import { createDbClient } from '../lib/database';
import getList from '../services/stock';
import Base from './Base';

class Stock extends Base {
  constructor() {
    super();
  }
  get(req: any): any {
    const dbClinet = createDbClient();
    const result = getList(dbClinet);

    return { res: result };
  }
}

export default Stock;
