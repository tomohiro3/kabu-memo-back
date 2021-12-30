import StockRepository from '../repositories/stock';
import { Dict } from '../types/lib';

export async function getList(
  dbClient: any,
  code: string | null = null,
  name: string | null = null,
  market: string | null = null,
  industry33: string | null = null,
  industry17: string | null = null
  // freeKeywords: string[] | null = null
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

  return await repository.searchByQuery();
}
