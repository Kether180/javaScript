# Homework
- [Exercise 5](#exercise-5)
- [Exercise 6](#exercise-6)
- [Exercise 7](#exercise-7)
- [Exercise 8](#exercise-8)
- [Exercise 9](#exercise-9)


## Exercise 5
Modify the Exercise 4 so that only multiples of three or five are considered in the sum.

> **Example:**<br />
> User inputs `17`<br />
> Output:<br />
> `3 + 5 + 6 + 9 + 10 + 12 + 15 = 60`

## Exercise 6
Modify Exercise 4 so that the program asks the user for a number `n` and gives them the possibility to choose between computing the sum or computing the product of 1 to n.


## Exercise 7
Write a program that check wether a number exists inside an array of numbers.
```
let n = 5;
let numbers = [4, 7, 10, 12, 1, 8, 20];
// for this case the result would be false
n

```

// EXERCISE: Create a program that checks if a given number is in an array and logs the fitting boolean to the console
let numbers = [12, 41, 55, 12, 1, 2, 6, 5, 100, 20, 40];

//SUM OF ALL NUMBERS
let n = 33; // Variable for checking if this number is in array TODO: Ask for input to be set as variable 

let result = false; // Sets assumption to false
for (let i = 0; i < numbers.length; i++) {   
    if (numbers[i] == n) {
        result = true; // If number is found during an iteration, changes result to true
    }
}
console.log(result); // Logs the result to the console


## Exercise 8
Write a program that prints **1 per line** only the names on odd positions in an array of names.

## Exercise 9
Write a program that prints the name with more characters in an array of names.

// EXERCISE: Log the longest name in an array of names to the console.
let names = ['Gandalf', 'Frodo', 'Smaug', 'Aragon', 'Sauron', 'Samwise', 'Erowyn', 'Gimli', 'Legalos'];
let longestName = ''; // Empty string to be filled with longest name
let equalNameLength = ''; // Set empty string in variable to be filled if multiple names are equal in length and longest
let multiples; // Variable to be used for boolean to print either only the single longest name or multiple longest names

for (let i = 0; i < names.length; i++) {
    if (names[i].length > longestName.length) {
        // If an iteration is longer than last, set multiples to false and add the name to both possible name variables
        multiples = false;
        longestName = names[i];
        equalNameLength = names[i];
    } else if (names[i].length == longestName.length) {
        // If another iteration is equal to the current longest, set multiples to true and supplement names list
        multiples = true;
        equalNameLength += ', ' + names[i];
    }
}

if (multiples == false) {
    // If no multiples have equally longest name, print only the single longest name
    console.log('The character with the longest name is ' + longestName); // Logs the iteration with the most characters to the console
} else if (multiples == true) {
    // If multiple people have the longest name, print out the list of these people
    console.log('These characters have the longest names: ' + equalNameLength);
} else {
    // If there is no longest name, the array is empty and the user should be informed
    console.log('Uh oh, not all who wander are lost, but you are: No characters found.');
}
