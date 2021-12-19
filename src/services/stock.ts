import StockRepository from '../repositories/stock';
import { Dict } from '../types/lib';

function getList(
  dbClient: any,
  name: string | null = null,
  code: string | null = null,
  market: string | null = null,
  industry33: string | null = null,
  industry17: string | null = null,
  freeKeywords: string[] | null = null
  // page = 1,
  // perPage = 1000
) {
  const repository = new StockRepository(dbClient);
  const attributes: Dict = {};
  if (name) attributes.name = name;
  if (code) attributes.code = code;
  if (market) attributes.market = market;
  if (industry33) attributes.industry33 = industry33;
  if (industry17) attributes.industry17 = industry17;
  if (freeKeywords) attributes.freeKeywords = freeKeywords;

  return repository.searchByQuery();
}

export default getList;