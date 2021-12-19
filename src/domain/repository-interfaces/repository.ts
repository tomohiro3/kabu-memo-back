export interface IRepository {
  searchByQuery: () => Promise<any>;
  findById?: () => Promise<any>;
  findAll?: () => Promise<any>;
  update?: () => Promise<any>;
  create?: () => Promise<any>;
  delete?: () => Promise<any>;
}
