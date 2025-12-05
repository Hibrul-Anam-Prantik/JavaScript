/* 
1. Store Prantik's and Sarah's mass and height in variables
2. Calculate both their BMIs using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
3. Create a boolean variable 'prantikHigherBMI' containing information about whether Prantik has a higher BMI than Sarah. Print a string to the console containing the variable from step 3. (e.g. "Is Prantik's BMI higher than Sarah's? true")

TEST DATA: Prantik weights 78 kg and is 1.69 m tall. Sarah weights 92 kg and is 1.95 m tall.      
*/

// Soln: 1
const massPrantik = 78;
const heightPrantik = 1.69;
const massSarah = 92;
const heightSarah = 1.95;
console.log('Prantiks info: ','\n', 'Mass: ', massPrantik, '\n','Height: ', heightPrantik + '\n' + 'Sarahs info: ', '\n', 'Mass: ', massSarah, '\n','Height: ', heightSarah);
// Soln: 2
const bmiPrantik = massPrantik / heightPrantik ** 2;
const bmiSarah = massSarah / (heightSarah * heightSarah);
console.log('BMI: '); 
console.log('Prantik: ', bmiPrantik);
console.log('Sarah: ', bmiSarah);

// Soln: 3
const prantikhigherBMI = bmiPrantik > bmiSarah;
console.log('Is Prantik\'s BMI higher than Sarah\'s? => ', prantikhigherBMI);


