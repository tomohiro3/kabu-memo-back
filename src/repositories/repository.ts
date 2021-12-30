import { MongodbClient } from '../lib/database';

export class Repository {
  constructor(private dbClient: MongodbClient) {}
  async searchByQuery() {
    return await this.dbClient.searchByQuery();
  }
}
