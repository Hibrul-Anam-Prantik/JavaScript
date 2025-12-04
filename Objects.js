// object literal syntax
// key-value pairs
const person = {
    // properties
    firstName : 'first-name',
    lastName : 'last-name',
    age : 18,
    job : 'programmer',
    friends : ['friend1', 'friend2', 'friend3'],
    calcAge : function (birthYear) {
        return 2024 - birthYear;
    }
};
console.log(person);

// accessing object properties -- dot vs bracket notation
console.log(person.firstName); // dot notation
console.log(person['lastName']); // bracket notation

const nameKey = 'Name';
console.log(person['first' + nameKey]); // firstName
console.log(person['last' + nameKey]); // lastName

person.lastName = 'Prantik';
console.log(person.lastName);
person.age = 20;
console.log(person.age);

// adding new properties
person.location = 'Bangladesh';
person['gmail'] = 'gsuit@g.bracu.ac.bd';
console.log(person);

// want to know if a property exists
console.log(person.hasOwnProperty('job')); // true
console.log(person.hasOwnProperty('salary')); // false

// Want to know about an object's particular property value
const wannaKnow = prompt("What do you want to know the person? [firstName, lastName, age, job, friedns, location, gmail]");

console.log(person.wannaKnow); // undefined -- as there's no property named 'wannaKnow'
console.log(person[wannaKnow]); // works fine -- dynamic property access

if(person[wannaKnow]) {
    console.log(person[wannaKnow]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, friends, location, gmail');
}

// object methods
console.log(person.calcAge(2004));