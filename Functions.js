'use strict';

// can call the declared function before its declaration due to hoisting
logger();

// function declaration
function logger() {
    console.log('Logger Activated!');
}
logger();

function juiceMaker(fruit, numFruits) {
    console.log(`Making ${fruit} juice with ${numFruits} ${fruit}s.`);
    const juice = fruit + ' juice';
    return juice;
}

const juice1 = juiceMaker('Apple', 5);
console.log(juice1, 'Served!');

console.log(juiceMaker('Orange', 3), 'Served!');

// function expression
const calcAge = function (birthYear) {
    return 2024 - birthYear;
};
const age1 = calcAge(2004);
console.log('Age is:', age1);