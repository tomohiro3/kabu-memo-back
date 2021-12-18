import ApiView from './ApiView';

class Bookmark extends ApiView {
  constructor() {
    super();
  }
  get(req: any): any {
    return { res: 'Get Bookmark Class' };
  }
  post(req: any): any {
    return { res: 'Post Bookmark Class' };
  }
}

export default Bookmark;
