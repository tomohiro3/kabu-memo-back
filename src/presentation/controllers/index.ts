import { ControllerConstructor } from '../../types/controller';
import Bookmark from './Bookmark';
import Stock from './Stock';

const views: ControllerConstructor[] = [Stock, Bookmark];
export default views;
