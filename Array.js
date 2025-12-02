const fruits = ['apple', 'orange', 'mango', 'banana'];

// accessing array elements
console.log(fruits[0]); // apple
console.log(fruits[2]); // mango
console.log(fruits[fruits.length - 1]); // banana

// modifyting array elements
fruits[1] = 'strawberry';
console.log(fruits); // ['apple', 'strawberry', 'mango', 'banana']

// another way to create an array
const friends = new Array('Sarah', 'Ayesha', 'David', 'Punk', 'Void');
console.log(friends); // ['Sarah', 'Ayesha', 'David', 'Punk', 'Void']

const name1 = 'Prantik';
const age = 20;
const prantik = [name1, age, 3, 'programmer', fruits];
console.log(prantik); 

// exercise
const calcAge = function(birthYear) {
    return 2025 - birthYear;
};
const years = [2000, 2002, 2004, 2010, 2015];
const ages = new Array();
for(let i = 0; i < years.length; ++i) {
    ages[i] = calcAge(years[i]);
}
let i = 0;
while(i < ages.length) {
    console.log(`${i+1}: ${friends[i]} ---> ${ages[i]} years old.`);
    i++;
}

// array methods & operations -- using push, pop, unshift, shift, indexOf, includes -- on friends array
// add elements at the end
const newLength = friends.push('Robin'); // add element at the end & returns new length
console.log(friends);
console.log(newLength);
// add element at the beginning
friends.unshift('Luffy'); // add element at the beginning & returns new length
console.log(friends);

// remove element from the end
const popped = friends.pop(); // removes last element & returns removed element
console.log(`Removed element: ${popped}
New Array: ${friends}`);

// remove element from the beginning
const shifted = friends.shift();
console.log(`Removed element: ${shifted}
New Array: ${friends}`);

// indexOf
console.log(friends.indexOf('David'));
console.log(friends.indexOf('Zoro')); // -1 (not found)

console.log(friends.includes('Ayesha')); // true
console.log(friends.includes('Zoro')); // false

