
/* Exercise 1 - Input and output Write a program that ask the user for his name and prints a greeting.


Please enter your name:

Hello <NAME>, welcome to the Learn to Code course. Use `readline-sync` for the input and `console.log()` for the output .let readlineSync = require('readline-sync'); Ask for user response. */


let readlineSync = require('readline-sync');

let name = readlineSync.question('May I have your name?');

console.log('Hello ' + name + ', welcome to the Learn to Code course!'); //Prints user response to console 


