const curYear = '2025';

console.log(Number(curYear), curYear);
console.log(curYear + 1);  // concatenation
console.log(Number(curYear) + 1);  // conversion to number

console.log(Number('Prantik'));
console.log(typeof NaN);  // NaN is a number type

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');  // number to string

console.log('23' - '10' - 3);  // string to number
console.log('23' + '10' + 3);  // concatenation

console.log('23' * '2');  // string to number
console.log('23' / '2');  // string to number

let n = '1' + 1; // '11'
n = n - 1;       // 10
console.log(n);

console.log(2 + 3 + 4 + '5');  // 95 String
console.log('10' - '4' - '3' - 2 + '5');  // 15 String
console.log('10' - '4' - '3' - 2 + 5);  // 6 Number