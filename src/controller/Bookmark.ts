import { createDbClient } from '../lib/database';
import Base from './Base';

class Bookmark extends Base {
  constructor() {
    super();
  }
  get(req: any): any {
    const db = createDbClient();
    console.log(db);
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
