import { MongoClient, Db } from 'mongodb';
const uriString =
  'mongodb://mongo:mongo@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
const dbName = 'kabu-memo';

export class MongodbClient {
  constructor(private pool: Db) {}

  static async connect(url: string) {
    return new this((await MongoClient.connect(url)).db(dbName));
  }

  async searchByQuery() {
    return await this.pool.collection('contacts').find().limit(50).toArray();
  }
}

export async function createDbConnection() {
  return MongodbClient.connect(uriString);
}
