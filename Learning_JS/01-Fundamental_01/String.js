const nickName = 'Prantik';
const currYear = 2025;
const birthYear = 2004;
const job = 'programmer';
const prantik = "I'm " + nickName + ', a ' + (currYear - birthYear) + ' years old ' + job + '!';
console.log(prantik + '\n');

// template literal
const prantikNew = `I'm ${nickName}, a ${currYear - birthYear} years old ${job}!`;
console.log(prantikNew + '\n');

console.log(`Just a regular string!\n`);

// with multiple lines
console.log("line1\nline2\nline3\n");

console.log(`line1
line2
line3`);