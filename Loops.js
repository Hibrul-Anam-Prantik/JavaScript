for(let i = 0; i < 5; ++i) {
    console.log('index number: ', i);

// continue and break statements
const tempArr = ['Hello', 'World', 2025 - 2000, true, 'JavaScript'];
console.log(tempArr);
console.log('===== Only Strings =====');
for(let i = 0; i < tempArr.length; ++i) {
    if(typeof tempArr[i] !== 'string') continue; // continue to next iteration if not string
    console.log(tempArr[i], typeof tempArr[i]);
}
console.log('===== Breaking at Non-String =====');
for(let i = 0; i < tempArr.length; ++i) {
    if(typeof tempArr[i] === 'number') break; // break the loop if number is found
    console.log(tempArr[i], typeof tempArr[i]);
}

// backward looping
console.log('===== Backward Looping =====');
for(let i = tempArr.length - 1; i >= 0; i--) {
    console.log(tempArr[i]);
}

// nested loops
console.log('===== Nested Loops =====');
for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`--- Start exercise ${exercise} ---`);
    for(let rep = 1; rep <= 4; ++rep) {
        console.log(`  Weight Lifting Repetition ${rep} 🏋️‍♂️`);
    }
}