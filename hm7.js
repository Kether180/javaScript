/*## Exercise 7
Write a program that check wether a number exists inside an array of numbers.
```
let n = 5;
let numbers = [4, 7, 10, 12, 1, 8, 20];
// for this case the result would be false
n

```*/

// EXERCISE: Create a program that checks if a given number is in an array and logs the fitting boolean to the console
//let numbers = [12, 41, 55, 12, 1, 2, 6, 5, 100, 20, 40];

//SUM OF ALL NUMBERS

let n = 33; // Variable for checking if this number is in array TODO: Ask for input to be set as variable 

let result = false; // Sets assumption to false
for (let i = 0; i < numbers.length; i++) {   
    if (numbers[i] == n) {
        result = true; // If number is found during an iteration, changes result to true
    }
}
console.log(result); // Logs the result to the console
