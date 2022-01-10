import { FreeNoteType } from '../types/models';

type NoteType = {
  id: number;
  value_or_growth: string | null;
  is_product_price_shiftable: boolean | null;
  parent_company: string | null;
  share_holders: string[] | null;
  customers: string[] | null;
  partner_companies: string[] | null;
  investing_companies: string[] | null;
  theme: string[] | null;
  product_categories: string[] | null;
  product_usecases: string[] | null;
  free_notes: FreeNoteType[] | null;
};

export default class StockModel {
  code!: number;
  name!: string;
  market!: string;
  group!: string;
  industry_33!: string;
  note!: NoteType;

  constructor(props: StockModel) {
    Object.assign(this, props);
  }
}
