import { Transaction } from './interfaces';
import jsonSampleTransactions from './data/sample_transactions.json';
import jsonRealTransactions from './data/real_transactions.json';

const sampleTransactions: Transaction[] =
  jsonSampleTransactions as Transaction[];
const realTransactions: Transaction[] = jsonRealTransactions as Transaction[];

console.log('HW_1 - Application start!');
console.time('Process time');
var valueTest = new Set([...realTransactions.map((item) => item.name)]);
console.log('valueTest', valueTest);

console.timeEnd('Process time');
