const fruits = ['apple', 'orange', 'mango', 'banana'];

// accessing array elements
console.log(fruits[0]); // apple
console.log(fruits[2]); // mango
console.log(fruits[fruits.length - 1]); // banana

// modifyting array elements
fruits[1] = 'strawberry';
console.log(fruits); // ['apple', 'strawberry', 'mango', 'banana']

// another way to create an array
const friedns = new Array('Sarah', 'Ayesha', 'David', 'Punk');
console.log(friedns); // ['Sarah', 'Ayesha', 'David', 'Punk']

const name1 = 'Prantik';
const age = 20;
const prantik = [name1, age, 3, 'programmer', fruits];
console.log(prantik); 