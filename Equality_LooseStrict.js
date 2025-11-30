// Loose Equality (==) vs Strict Equality (===)

// Loose Equality (==) allows type coercion
console.log(5 == '5'); // true, because '5' is converted to 5
console.log(null == undefined); // true, special case
console.log(0 == false); // true, because false is converted to 0

// Strict Equality (===) does not allow type coercion
console.log(5 === '5'); // false, different types
console.log(null === undefined); // false, different types
console.log(0 === false); // false, different types

// Summary:
// Use '===' for strict comparison to avoid unexpected results due to type coercion.
// Use '==' only when you explicitly want type conversion to occur. 
// Example:
const age = 18;
// const age = '18';
if (age === 18) {
    console.log("You just became an adult! (strict check)");
} else {
    console.log('Loose!');
}

if (age == '18') {
    console.log("You just became an adult! (loose check)");
} else {
    console.log('Strict!');
}