export class FreeNote {
  id!: number;
  keyWord!: string;
  value!: string;

  constructor(props: FreeNote) {
    Object.assign(this, props);
  }
}
