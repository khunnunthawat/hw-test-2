import { Transaction } from './interfaces';
import jsonSampleTransactions from './data/sample_transactions.json';
import jsonRealTransactions from './data/real_transactions.json';

const sampleTransactions: Transaction[] =
  jsonSampleTransactions as Transaction[];
const realTransactions: Transaction[] = jsonRealTransactions as Transaction[];

console.log('HW_1 - Application start!');
console.time('Process time');

// Your code here
const findArray = sampleTransactions.length;
console.log('findArray', findArray);

var valueArr = sampleTransactions.map(function (item) {
  return item.name;
});
var isDuplicate = valueArr.some(function (item, idx) {
  return valueArr.indexOf(item) != idx;
});

console.log('isDuplicate', isDuplicate);

console.log('realTransactions', realTransactions);

console.timeEnd('Process time');
