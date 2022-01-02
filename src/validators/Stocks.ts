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
    else if (body.valueOrGrowth === null) attributes.valueOrGrowth = null;

    if (body.isProductPriceShiftable) attributes.isProductPriceShiftable = body.isProductPriceShiftable === 'true';
    else if (body.isProductPriceShiftable === null) attributes.isProductPriceShiftable = null;

    if (body.parentCompany) attributes.parentCompany = body.parentCompany;
    else if (body.parentCompany === null) attributes.parentCompany = null;

    if (body.shareHolders) attributes.shareHolders = body.shareHolders;
    else if (body.shareHolders === null) attributes.shareHolders = null;

    if (body.customers) attributes.customers = body.customers;
    else if (body.customers === null) attributes.customers = null;

    if (body.partnerCompanies) attributes.partnerCompanies = body.partnerCompanies;
    else if (body.partnerCompanies === null) attributes.partnerCompanies = null;

    if (body.theme) attributes.theme = body.theme;
    else if (body.theme === null) attributes.theme = null;

    if (body.productCategories) attributes.productCategories = body.productCategories;
    else if (body.productCategories === null) attributes.productCategories = null;

    if (body.productUsecases) attributes.productUsecases = body.productUsecases;
    else if (body.productUsecases === null) attributes.productUsecases = null;

    if (body.freeNotes) attributes.freeNotes = body.freeNotes;
    else if (body.freeNotes === null) attributes.freeNotes = null;

    return { code: intCode, attributes };
  }
}
