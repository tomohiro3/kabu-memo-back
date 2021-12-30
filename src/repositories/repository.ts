export class Repository {
  constructor(protected dbClient: any) {}
  async searchByQuery() {
    return await this.dbClient.searchByQuery();
  }
}
