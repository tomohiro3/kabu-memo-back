export type FreeNoteType = {
  name: string;
  value: string;
};

export type Stock = {
  code: string;
  name: string;
  market: string;
  industry_33: string;
  group: string;
  value_or_growth: string | null;
  is_product_price_shiftable: boolean | null;
  parent_company: string | null;
  group_company: string | null;
  share_holders: string[] | null;
  customers: string[] | null;
  partner_companies: string[] | null;
  investing_companies: string[] | null;
  theme: string[] | null;
  product_categories: string[] | null;
  product_usecases: string[] | null;
  free_notes: FreeNoteType[] | null;
};
