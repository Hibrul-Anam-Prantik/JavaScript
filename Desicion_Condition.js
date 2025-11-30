const age = 14;
const isAdult = age >= 18;

if(isAdult) {
    console.log(`You can apply for a driving license 🚗`);
} else if(age === 17) {
    console.log(`You can apply for a driving license after 1 year 🚗`);
} else {
    console.log(`You are too young to apply for a driving license 🚫`);
}

// Switch Case Statement
const day = 'monday';

switch(day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

// The same logic using if-else
if(day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if(day === 'tuesday') {
    console.log('Prepare theory videos');
} else if(day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if(day === 'friday') {
    console.log('Record videos');
} else if(day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
} 

// Conditional (Ternary) Operator
const age2 = 23;
age2 >= 18 ? console.log('I am an adlut ✅') : console.log('I am a minor ❌');

const drink = age2 >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

// The same logic using if-else
let drink2;
if(age2 >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

// Using template literals
console.log(`I like to drink ${age2 >= 18 ? 'wine 🍷' : 'water 💧'}`);
