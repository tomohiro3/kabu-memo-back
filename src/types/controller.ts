import { MongodbClient } from '../lib/database';

export type ControllerConstructor = {
  new (pool: MongodbClient): IController;
  toUrl: () => string;
};
// 列挙しているメソッド以外に受け取る可能性のある分を定義する必要がある。
export interface IController {
  get?: (req: any) => void;
  post?: (req: any) => void;
  patch?: (req: any) => void;
  put?: (req: any) => void;
  delete?: (req: any) => void;
}
