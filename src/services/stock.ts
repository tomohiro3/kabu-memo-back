import IStockRepository from '../domain/repository-interfaces/stock';
import { Dict } from '../types/lib';

class StockService {
  constructor(private stockRepository: IStockRepository) {}

  getList(
    name: string | null = null,
    code: string | null = null,
    market: string | null = null,
    industry33: string | null = null,
    industry17: string | null = null,
    freeKeywords: string[] | null = null
    // page = 1,
    // perPage = 1000
  ) {
    const attributes: Dict = {};
    if (name) attributes.name = name;
    if (code) attributes.code = code;
    if (market) attributes.market = market;
    if (industry33) attributes.industry33 = industry33;
    if (industry17) attributes.industry17 = industry17;
    if (freeKeywords) attributes.freeKeywords = freeKeywords;

    return this.stockRepository.searchByQuery();
  }
}

export default StockService;
