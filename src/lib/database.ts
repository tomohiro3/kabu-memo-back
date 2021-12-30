import { MongoClient, Db } from 'mongodb';
const uriString =
  'mongodb://mongo:mongo@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';

class MongodbClient {
  db!: Db;

  constructor(db: Db) {
    this.db = db;
  }

  static async connect(url: string) {
    return new this((await MongoClient.connect(url)).db('kabu-memo'));
  }

  async searchByQuery() {
    return await this.db.collection('contacts').find().limit(50).toArray();
  }
}

export async function createDbClient() {
  return MongodbClient.connect(uriString);
}
