import { Dict } from '../types/lib';
import { FreeNoteType, Stock } from '../types/models';

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
    let limit = 10000;
    if (query.code) attributes.code = Number(query.code);
    if (query.name) attributes.name = query.name;
    if (query.market) attributes.market = query.market;
    if (query.industry33) attributes.industry_33 = query.industry33;
    if (query.valueOrGrowth) attributes.value_or_growth = query.valueOrGrowth;
    if (query.isProductPriceShiftable) attributes.is_product_price_shiftable = query.isProductPriceShiftable === 'true';
    if (query.parentCompany) attributes.parent_company = query.parentCompany;
    if (query.shareHolders) attributes.share_holders = query.shareHolders;
    if (query.customers) attributes.customers = query.customers;
    if (query.partnerCompanies) attributes.partner_companies = query.partnerCompanies;
    if (query.theme) attributes.theme = query.theme;
    if (query.productCategories) attributes.product_categories = query.productCategories;
    if (query.productUsecases) attributes.product_usecases = query.productUsecases;
    if (query.freeNotes) attributes.free_notes = query.freeNotes;
    if (query.page) page = Number(query.page);
    if (query.limit) limit = Number(query.limit);
    return { attributes, page, limit };
  }

  patchRequest(code: string, body: PatchBody) {
    const attributes: Dict = {};
    const intCode = Number(code);

    if (body.valueOrGrowth) attributes.value_or_growth = body.valueOrGrowth;
    else if (body.valueOrGrowth === null) attributes.value_or_growth = null;

    if (body.isProductPriceShiftable) attributes.is_product_price_shiftable = body.isProductPriceShiftable === 'true';
    else if (body.isProductPriceShiftable === null) attributes.is_product_price_shiftable = null;

    if (body.parentCompany) attributes.parent_company = body.parentCompany;
    else if (body.parentCompany === null) attributes.parent_company = null;

    if (body.shareHolders) attributes.share_holders = body.shareHolders;
    else if (body.shareHolders === null) attributes.share_holders = null;

    if (body.customers) attributes.customers = body.customers;
    else if (body.customers === null) attributes.customers = null;

    if (body.partnerCompanies) attributes.partner_companies = body.partnerCompanies;
    else if (body.partnerCompanies === null) attributes.partner_companies = null;

    if (body.theme) attributes.theme = body.theme;
    else if (body.theme === null) attributes.theme = null;

    if (body.productCategories) attributes.product_categories = body.productCategories;
    else if (body.productCategories === null) attributes.product_categories = null;

    if (body.productUsecases) attributes.product_usecases = body.productUsecases;
    else if (body.productUsecases === null) attributes.product_usecases = null;

    if (body.freeNotes) attributes.free_notes = body.freeNotes;
    else if (body.freeNotes === null) attributes.free_notes = null;

    return { code: intCode, attributes };
  }

  toResponse(data: any) {
    return data.map((stock: Stock) => {
      return {
        code: stock.code,
        name: stock.name,
        market: stock.market,
        industry33: stock.industry_33,
        group: stock.group,
        valueOrGrowth: stock.value_or_growth || null,
        isProductPriceShiftable:
          typeof stock.is_product_price_shiftable === 'boolean' ? stock.is_product_price_shiftable : null,
        parentCompany: stock.parent_company || null,
        groupCompany: stock.group_company || null,
        shareHolders: stock.share_holders || [],
        customers: stock.customers || [],
        partnerCompanies: stock.partner_companies || [],
        investingCompanies: stock.investing_companies || [],
        theme: stock.theme || [],
        productCategories: stock.product_categories || [],
        productUsecases: stock.product_usecases || [],
        freeNotes: stock.free_notes || [],
      };
    });
  }
}
