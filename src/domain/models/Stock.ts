import { FixedNote } from './FixedNote';
import { FreeNote } from './FreeNote';

export class Stock {
  id!: number;
  code!: number;
  companyName!: string;
  market!: number;
  industry33!: string;
  industry17!: number;
  fixedNote?: FixedNote;
  freeNotes?: FreeNote[];

  constructor(props: Stock) {
    Object.assign(this, props);
  }
}
