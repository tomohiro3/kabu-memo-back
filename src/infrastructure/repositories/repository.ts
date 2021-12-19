import { IRepository } from '../../domain/repository-interfaces/repository';

export class Repository implements IRepository {
  constructor(private dbClient: any) {}
  searchByQuery() {
    return this.dbClient.execute();
  }
}
