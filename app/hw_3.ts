import { Transaction } from './interfaces';
import jsonSampleTransactions from './data/sample_transactions.json';
import jsonRealTransactions from './data/real_transactions.json';
import jsonTestCase3_1 from './data/testcase_3_1.json';
import jsonTestCase3_2 from './data/testcase_3_2.json';
import jsonTestCase3_3 from './data/testcase_3_3.json';
import jsonTestCase3_4 from './data/testcase_3_4.json';

const sampleTransactions: Transaction[] = jsonSampleTransactions as Transaction[];
const realTransactions: Transaction[] = jsonRealTransactions as Transaction[];
const testCase1 = jsonTestCase3_1 as Transaction[];
const testCase2 = jsonTestCase3_2 as Transaction[];
const testCase3 = jsonTestCase3_3 as Transaction[];
const testCase4 = jsonTestCase3_4 as Transaction[];

console.log('HW_3 - Application start!');
console.time('Process time');

// Your code here

console.timeEnd('Process time');
