import Logger from './helpers/logger';
import Algorithm from './helpers/algorithm';

let logger = new Logger();

for (let i = 0; i < 100; i++) {
  console.log(Algorithm(i))
}
