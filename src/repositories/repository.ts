export class Repository {
  constructor(protected dbClient: any) {}
  searchByQuery() {
    return this.dbClient.searchByQuery();
  }
}
