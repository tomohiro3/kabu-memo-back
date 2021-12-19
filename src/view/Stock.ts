import { createDbClient } from '../lib/database';
import getList from '../services/stock';
import ApiView from './ApiView';

class Stock extends ApiView {
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
