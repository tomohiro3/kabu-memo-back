import { FreeNoteType } from '../types/models';

export default class NoteModel {
  id!: number;
  valueOrGrowth!: string | null;
  isProductPriceShiftable!: boolean | null;
  parentCompany!: string | null;
  shareHolders!: string[] | null;
  customers!: string[] | null;
  partnerCompanies!: string[] | null;
  investingCompanies!: string[] | null;
  theme!: string[] | null;
  productCategories!: string[] | null;
  productUsecases!: string[] | null;
  freeNotes!: FreeNoteType[] | null;

  constructor(props: NoteModel) {
    Object.assign(this, props);
  }
}
