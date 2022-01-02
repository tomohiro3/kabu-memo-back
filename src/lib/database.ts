import { MongoClient, Db } from 'mongodb';
import { Dict } from '../types/lib';
const uriString =
  'mongodb://mongo:mongo@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
const dbName = 'kabu-memo';

export class MongodbClient {
  constructor(private pool: Db) {}

  static async connect(url: string) {
    return new this((await MongoClient.connect(url)).db(dbName));
  }

  async findAll(page: number, limit: number) {
    return await this.pool
      .collection('stocks')
      .find({}, { projection: { _id: 0 } })
      .limit(limit)
      .toArray();
  }

  async find(attributes: Dict, page: number, limit: number) {
    const filter: Dict = {};
    Object.keys(attributes).forEach((key) => {
      filter[key] = attributes[key];
    });
    return await this.pool
      .collection('stocks')
      .find({ ...filter }, { projection: { _id: 0 } })
      .limit(limit)
      .toArray();
  }

  async uddate(code: number, attributes: Dict) {
    const filter: Dict = {};
    Object.keys(attributes).forEach((key) => {
      filter[key] = attributes[key];
    });
    return await this.pool.collection('stocks').updateOne({ code }, { $set: filter });
  }
}

export async function createDbConnection() {
  return MongodbClient.connect(uriString);
}
