"use strict";

// // lab 1 prom 1

// let c = prompt("What is the celsius temperature");

// let f = (c * 9/5) + 32;

// console.log(f);

// // // lab 1 prom 2

// let age = prompt("What is your age?");

// if (age <= 17) {
//   alert("You are a minor");
// } else if (age >= 18 && age <= 63) {
//   alert("Your are an adult.");
// } else if (age >= 64) {
//   alert("Your are a senior citizen");
// }

//lab 1 prom 3
let userInput1 = prompt("Please type in a number.");
userInput1 = Number(userInput1);
let userInput2 = prompt("Please type in a number.");
userInput2 = Number(userInput2);

let operation = prompt("Choose an operation(-, +, /, *).");

if (operation === "-") {
  let result = userInput1 - userInput2;
  alert("subtract" + result);
} else if (operation === "+") {
  let result = userInput1 + userInput2;
  alert("addition" + result);
} else if (operation === "/") {
  let result = userInput1 / userInput2;
  alert("division" + result);
} else if (operation === "*") {
  let result = userInput1 * userInput2;
  alert("multiplication" + result);
} else {
  alert("invalid response!");
}
