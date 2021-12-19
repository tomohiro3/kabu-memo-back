import IStockService from '../../domain/repository-interfaces/stock';
import StockRepository from '../../infrastructure/repositories/stock';
import stockService from '../../services/stock';
import Base from './Base';

class Stock extends Base {
  private repository: IStockService;
  constructor(dbClinet: any) {
    super();
    this.repository = new StockRepository(dbClinet);
  }
  get(req: any): any {
    // const dbClinet = createDbClient();
    const result = new stockService(this.repository).getList();

    return { res: result };
  }
}

export default Stock;
