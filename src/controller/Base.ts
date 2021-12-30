import { MongodbClient } from '../lib/database';
import { Repository } from '../repositories/repository';

class Base {
  protected repository!: Repository;

  constructor(db: MongodbClient) {
    this.repository = new Repository(db);
  }

  static toUrl() {
    return this.name.toLowerCase();
  }
}

export default Base;
