import { FreeNoteType } from '../types/models';

type NoteType = {
  id: number;
  valueOrGrowth: string | null;
  isProductPriceShiftable: boolean | null;
  parentCompany: string | null;
  shareHolders: string[] | null;
  customers: string[] | null;
  partnerCompanies: string[] | null;
  investingCompanies: string[] | null;
  theme: string[] | null;
  productCategories: string[] | null;
  productUsecases: string[] | null;
  freeNotes: FreeNoteType[] | null;
};

export default class StockModel {
  code!: number;
  name!: string;
  market!: string;
  group!: string;
  industry33!: string;
  note!: NoteType;

  constructor(props: StockModel) {
    Object.assign(this, props);
  }
}
