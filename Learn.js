'use strict';
let js = 'amazing';
console.log(10 + 5 + 6 - 7);
console.log('Prantik');
console.log(22);
// variables
let firstName = 'Hibrul Anam Prantik';
console.log(firstName);
firstName = 'Hibrul';
console.log(firstName);
let middleName = 'Anam';
console.log(middleName);
let lastName = 'Prantik';
console.log(lastName);
console.log('My name is - ' + firstName + ' ' + middleName + ' ' + lastName);

let anam_prantik = 'HA Prantik';
let $function = 27;
let person = 'prantik';
let PI = 3.1416;

let isJsFun = false;
console.log(isJsFun);
console.log(typeof isJsFun);
console.log(typeof(true));
console.log(typeof 23);
console.log(typeof 'Prantik');

isJsFun = 'Yes!';
console.log(isJsFun);
console.log(typeof isJsFun);

isJsFun = 22;
console.log(typeof(isJsFun));

let x;
console.log(x);
console.log(typeof x); //indefined

x = null;
console.log(x);
console.log(typeof x); //object

let age = 30;
age = 31;

const birthYear = 2004;
// error --> constant variable can't be changed
// birthYear = 2003;
console.log(birthYear);

//missing initializer in const declaration
// const job; 

var job = 'programmer';
job = 'teacher';
console.log(job);

// no need to declare variable --> works fine as well --> not recommended though
newVariable = 27;
console.log(newVariable);

// <==============> operators <==============>
const now = 2025;
const agePrantik = now - 2004;
const ageSarah = now - 2010;
console.log(agePrantik, ageSarah);

console.log(agePrantik * 2, ageSarah / 2, 2 ** 3);  

const firstName1 = 'Hibrul';
const lastName1 = 'Prantik';
console.log(firstName1 + ' ' + lastName1);  

let x1 = 10 + 5;
console.log(x1);
x1 += 10; // x1 = x1 + 10
console.log(x1);
x1 *= 4; // x1 = x1 * 4 
console.log(x1);
x1++;
console.log(x1);
x1--;
console.log(x1);

console.log(agePrantik > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;  // boolean

console.log(now - 2004 > now - 2010);


// <==============> operator precedence <==============>
const now1 = 2025;
const agePrantik1 = now1 - 2004;
const ageSarah1 = now1 - 2010;

console.log(now1 - 2004 > now1 - 2010);

// console.log(25 - 10 - 5);

let x2, y2;
x2 = y2 = 25 - 10 - 5; // y2 = 10 --> x2 = y2 --> x2 = 10
console.log(x2, y2);

const averageAge = (agePrantik1 + ageSarah1) / 2;
console.log(agePrantik1, ageSarah1, averageAge);



let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
