import ApiView from './ApiView';

class Stock extends ApiView {
  constructor() {
    super();
  }
  get(req: any): any {
    return { res: 'Get Stock Class' };
  }
}

export default Stock;
