import IStockService from '../../domain/repository-interfaces/stock';
import StockRepository from '../../infrasttructure/repositories/stock';
import stockService from '../../services/stock';
import ApiView from './ApiView';

class Stock extends ApiView {
  repository: IStockService;
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
