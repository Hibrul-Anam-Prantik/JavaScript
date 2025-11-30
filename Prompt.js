const fav = prompt("What's your favourite color?");

console.log(`Oh! ${fav} is a beautiful color!`);

const favNum = prompt("What's your favourite number?");
console.log(`Your favourite number is ${favNum}`);
console.log(typeof favNum);  // string
if(favNum == 3) console.log(`Wow! ${favNum} is an amazing number! (Loose)`); // '23' == 23
else console.log(`Hmm! ${favNum} is a good number too!`);

//but 
if(favNum === 3) console.log(`Wow! ${favNum} is an amazing number! (Strict)`); // '23' === 23 && '23' !== 23
else console.log(`Hmm! ${favNum} is a good number too!`);

// to convert string to number
const favNumConverted = Number(favNum); 
// or you can do: const favNumConverted = +favNum;
// or you can do: const favNumConverted = parseInt(favNum);
//or
const favNum1 = Number(prompt("What's your favourite number?"));
console.log(`Your favourite number is ${favNum1}`);
console.log(typeof favNum1);  // number
if(favNum1 === 3) console.log(`Wow! ${favNum1} is an amazing number! (Strict)`); // '23' === 23 && '23' !== 23
else console.log(`Hmm! ${favNum1} is a good number too!`);