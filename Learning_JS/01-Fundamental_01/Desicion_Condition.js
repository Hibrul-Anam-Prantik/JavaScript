const age = 14;
const isAdult = age >= 18;

if(isAdult) {
    console.log(`You can apply for a driving license 🚗`);
} else if(age === 17) {
    console.log(`You can apply for a driving license after 1 year 🚗`);
} else {
    console.log(`You are too young to apply for a driving license 🚫`);
}