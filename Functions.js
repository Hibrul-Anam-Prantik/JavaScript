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

// arrow function --> explicitly returns the value
const calcAgeArrow = (birthYear) => 2024 - birthYear;
console.log('Age is:', calcAgeArrow(2004));

// arrow function with multiple parameters and multiple lines of code

const yearUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirementAge = 65 - age;
    return `${firstName} retires in ${retirementAge} years.`;
};
console.log(yearUntilRetirement(2004, 'Prantik'));

