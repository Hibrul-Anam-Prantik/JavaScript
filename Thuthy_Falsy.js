// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// Rest are all truthy values
// truthy values: 'Prantik', 23, {}, []
console.log(Boolean('Prantik'));
console.log(Boolean(23));
console.log(Boolean({}));
console.log(Boolean([]));

// example
// const money = 0;
const money = 100;
if(money) {
    console.log("Don't spend it all!"); 
} else {
    console.log('You should get a job!'); 
}

let height;
if(height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is UNDEFINED!");
}
height = 123;
if(height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is UNDEFINED!");
}
height = 0;
if(height) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is UNDEFINED!");
}

// 0 is falsy value --> to fix the above code, we can do this
height = 0;
if(height || height === 0) {
    console.log("YAY! Height is defined!");
} else {
    console.log("Height is UNDEFINED!");
}


