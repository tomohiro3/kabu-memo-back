import { ControllerConstructor } from '../types/controller';
import Bookmarks from './Bookmarks';
import Stocks from './Stocks';

const controllers: ControllerConstructor[] = [Stocks, Bookmarks];
export default controllers;
