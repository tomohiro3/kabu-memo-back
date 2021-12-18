export class FixedNote {
  id!: number;
  valueOrGrowth!: string | null;
  isProductPriceShiftable!: boolean | null;
  parentCompany!: string | null;
  shareHolders!: string[] | null;
  customers!: string[] | null;
  partners!: string[] | null;
  investingCompanies!: string[] | null;
  theme!: string[] | null;
  productCategories!: string[] | null;
  productDetails!: string[] | null;

  constructor(props: FixedNote) {
    Object.assign(this, props);
  }
}
