import Base from './Base';

class Bookmark extends Base {
  constructor() {
    super();
  }
  get(req: any): any {
    return { res: 'Get Bookmark Class' };
  }
  post(req: any): any {
    return { res: 'Post Bookmark Class' };
  }
  delete(req: any): any {
    return { res: 'Post Bookmark Class' };
  }
}

export default Bookmark;
