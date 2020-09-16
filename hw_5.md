# Homework
- [Exercise 13](#exercise-13)
- [Exercise 14](#exercise-14)
- [Exercise 15](#exercise-15)

## Exercise 13
### Xmas tree 🎄

Write a programa that asks the user for a height `h` and then output a Xmas Tree with an height of `h`.
> **Example:**<br />
> User inputs `5`<br />
> Output:
```
    *
   ***
  *****
 *******
*********
    I
```
> **Hint:**<br />
> Don't forget the stem.

let ReadlineSync = require('readline-sync');

let lines = ReadlineSync.questionInt('Enter the number of rows, between 5 and 20, you would like the christmas tree to have: ');
let treeLeaves = '';
let treeTrunk = '';

// Tree function
function christmasTree(lines) {

    for (let i = 1; i <= lines; i++) {

        if (i > 1) {
            treeLeaves += '\n'; // Starting after the first row, add line break for next row
        }
        treeLeaves += ' '.repeat(lines - i); // Add spaces equal to length of user input minus current iteration
        treeLeaves += '☘'.repeat(i * 2 - 1); // In order for the leaves to fit, multiply i by two and subtract one

        if (i == 1) { // Tree trunk should be in the same position as the first leaf, so only add on this iteration
            treeTrunk += '\n';
            treeTrunk += ' '.repeat(lines - i);
            treeTrunk += '|';
        }

    }
    return treeLeaves += treeTrunk; // Return treeLeaves concatenated with treeTrunk
}

if (lines < 5 || lines > 20) { // If user input is too small or large, give error, other log tree function
    console.log('Ho, ho, ho-ld on there! Only a number between 5 and 20 is possible.')
} else {
    console.log(christmasTree(lines));
}

## Exercise 14

List a table that multiplies all the numbers from 1 to 10.<br />
Format your output to something like this:
```
 1   2   3   4   5   6   7   8   9  10
 2   4   6   8  10  12  14  16  18  20
 3   6   9  12  15  18  21  24  27  30
 4   8  12  16  20  24  28  32  36  40
 5  10  15  20  25  30  35  40  45  50
 6  12  18  24  30  36  42  48  54  60
 7  14  21  28  35  42  49  56  63  70
 8  16  24  32  40  48  56  64  72  80
 9  18  27  36  45  54  63  72  81  90
10  20  30  40  50  60  70  80  90 100



// List a table that multiplies all the numbers from 1 to 10.
// Format your output to something like this:

//  1   2   3   4   5   6   7   8   9  10
//  2   4   6   8  10  12  14  16  18  20
//  3   6   9  12  15  18  21  24  27  30
//  4   8  12  16  20  24  28  32  36  40
//  5  10  15  20  25  30  35  40  45  50
//  6  12  18  24  30  36  42  48  54  60
//  7  14  21  28  35  42  49  56  63  70
//  8  16  24  32  40  48  56  64  72  80
//  9  18  27  36  45  54  63  72  81  90
// 10  20  30  40  50  60  70  80  90 100


let multiplicationTable = '';
let multiplicationTable = '\n';

function multiply(number) {
    for (i = 1; i <= 10; i++) {
        multiplicationTable += (number * i) + ' ';
        let formatter = i * number; // Variable  adding spaces before numbers (improve readability)
        // Numbers below 10 have 2 spaces before iteration, below 100 only 1 space
        if (formatter < 10) {
            multiplicationTable += ' ';
        }

        if (formatter < 100) {
            multiplicationTable += ' ';
        }
        // Add current number from formatter to table
        multiplicationTable += formatter + ' ';

        if (i == 10) {
            multiplicationTable += '\n';
            multiplicationTable += '\n'; // Once iteration is ended, add space for next line
        }
    }
    return multiplicationTable;
    return multiplicationTable; // Returns mulitplication table for logging later
}

let sizeOfTable = 10;
function table(sizeOfTable) {
    for (j = 1; j <= sizeOfTable; j++) {
// Function for passing through the size of table to multiplication table function
function table(rows) {
    for (j = 1; j <= rows; j++) {
        multiply(j);
    }
    return multiplicationTable;
}

console.log(table(sizeOfTable));
let sizeOfTable = 10; // Variable for number of rows multiplications table should have
console.log(table(sizeOfTable)); // Use size variable to call and log table

## Exercise 15
### Guessing Game

Write a guessing game where the user has to guess a secret number between 1 and 100 generated randomly by the program.
After every guess the program tells the user whether their number was too large or too small.<br />
After 6 tries the game is over and the user loses.

let readlineSync = require('readline-sync');

function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

let number = random(1, 100);
let correctGuess = false;

for (i = 6; i > 0; i--) {
    let guess = readlineSync.questionInt('Guess the number: ');

    if (guess < number) {
        console.log('Too low, try again!');
    } else if (guess > number) {
        console.log('Too high, try again!');
    } else {
        correctGuess = true;
        break;
    }
}

if (correctGuess) {
    console.log('Great job! You won against a computer. Don\'t you feel special...');
} else {
    console.log('Pathetic... Can\'t even pick numbers right, loser!');
}