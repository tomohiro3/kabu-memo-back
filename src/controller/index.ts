import { ControllerConstructor } from '../types/controller';
import Bookmark from './Bookmark';
import Stock from './Stock';

const controllers: ControllerConstructor[] = [Stock, Bookmark];
export default controllers;
