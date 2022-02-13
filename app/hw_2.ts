import { Transaction } from './interfaces';
import jsonSampleTransactions from './data/sample_transactions.json';
import jsonRealTransactions from './data/real_transactions.json';
import jsonRealQuery from './data/real_query.json';

const sampleTransactions: Transaction[] = jsonSampleTransactions as Transaction[];
const sampleQuery = ['Alfred', 'Susan', 'Emilie', 'Susan'];

const realTransactions: Transaction[] = jsonRealTransactions as Transaction[];
const realQuery: string[] = jsonRealQuery as string[];

console.log('HW_2 - Application start!');
console.time('Process time');

// Your code here

console.timeEnd('Process time');
