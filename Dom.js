"use strict";
console.log("Dom.js file has been loaded successfully.");

console.log(document.querySelector(".msg").textContent); // Getting text content - "Start guessing..."
document.querySelector(".msg").textContent = "🎉 Correct Number!"; // Setting text content
document.querySelector(".score").textContent = 13; // Setting score to 13
document.querySelector(".number").textContent = 9;
document.querySelector(".guess-number").value = 23; // Setting input value to 23
console.log(document.querySelector(".guess-number").value); // Getting input value

// Example of adding an event listener to a button
document.querySelector(".check-btn").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess-number").value);
  console.log(`User guessed: ${guess}`);
});
