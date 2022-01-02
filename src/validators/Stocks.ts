import { Dict } from '../types/lib';
import { FreeNoteType } from '../types/models';

type GetRequestQuery = {
  code?: string;
  name?: string;
  market?: string;
  industry33?: string;
  valueOrGrowth?: string;
  isProductPriceShiftable?: string;
  parentCompany?: string;
  shareHolders?: string[];
  customers?: string[];
  partnerCompanies?: string[];
  theme?: string[];
  productCategories?: string[];
  productUsecases?: string[];
  freeNotes?: FreeNoteType[];
  page?: string;
  limit?: string;
};
type PatchBody = {
  valueOrGrowth?: string;
  isProductPriceShiftable?: string;
  parentCompany?: string;
  shareHolders?: string[];
  customers?: string[];
  partnerCompanies?: string[];
  theme?: string[];
  productCategories?: string[];
  productUsecases?: string[];
  freeNotes?: FreeNoteType[];
};
export default class StocksValidator {
  getRequest(query: GetRequestQuery) {
    const attributes: Dict = {};
    let page = 1;
    let limit = 50;
    if (query.code) attributes.code = Number(query.code);
    if (query.name) attributes.name = query.name;
    if (query.market) attributes.market = query.market;
    if (query.industry33) attributes.industry_33 = query.industry33;
    if (query.valueOrGrowth) attributes.valueOrGrowth = query.valueOrGrowth;
    if (query.isProductPriceShiftable) attributes.isProductPriceShiftable = query.isProductPriceShiftable === 'true';
    if (query.parentCompany) attributes.parentCompany = query.parentCompany;
    if (query.shareHolders) attributes.shareHolders = query.shareHolders;
    if (query.customers) attributes.customers = query.customers;
    if (query.partnerCompanies) attributes.partnerCompanies = query.partnerCompanies;
    if (query.theme) attributes.theme = query.theme;
    if (query.productCategories) attributes.productCategories = query.productCategories;
    if (query.productUsecases) attributes.productUsecases = query.productUsecases;
    if (query.freeNotes) attributes.freeNotes = query.freeNotes;
    if (query.page) page = Number(query.page);
    if (query.limit) limit = Number(query.limit);
    return { attributes, page, limit };
  }

  patchRequest(code: string, body: PatchBody) {
    const attributes: Dict = {};
    const intCode = Number(code);
    if (body.valueOrGrowth) attributes.valueOrGrowth = body.valueOrGrowth;
    if (body.isProductPriceShiftable) attributes.isProductPriceShiftable = body.isProductPriceShiftable === 'true';
    if (body.parentCompany) attributes.parentCompany = body.parentCompany;
    if (body.shareHolders) attributes.shareHolders = body.shareHolders;
    if (body.customers) attributes.customers = body.customers;
    if (body.partnerCompanies) attributes.partnerCompanies = body.partnerCompanies;
    if (body.theme) attributes.theme = body.theme;
    if (body.productCategories) attributes.productCategories = body.productCategories;
    if (body.productUsecases) attributes.productUsecases = body.productUsecases;
    if (body.freeNotes) attributes.freeNotes = body.freeNotes;
    return { code: intCode, attributes };
  }
}
