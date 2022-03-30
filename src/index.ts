import './index.css';
import { Watch } from './watch/watch';

const timeZone = 2; 
const myWatch = new Watch(document, "clock", "mode", "increase", "light", "reset", "format", timeZone); // create a new watch
myWatch.runWatch(); // start the watch
