import { IController } from '../types/controller';

class Base implements IController {
  static toUrl() {
    return this.name.toLowerCase();
  }
}

export default Base;
