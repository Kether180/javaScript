// ## Exercise 6
// Modify Exercise 4 so that the program asks the user for a number `n` and gives them the possibility to choose between computing the sum or computing the product of 1 to n.

// EXERCISE: Have user enter a number n and then choose if they want the 1 to n sum or product to be printed to the console
let readlineSync = require("readline-sync");


let userInt = readlineSync.questionInt('Enter a number: '); 
let userChoice = readlineSync.questionInt('Press 1 to calculate sum, press 2 to calculate product: '); 
let placeholder = userInt; //Saves input number before zeroing out 
let text = ''; 
let sum = 0;
userInt = 0; //Zeroes out input to use as counter

while (userInt < placeholder && userChoice == 1) { // Loop for calculating the sum after user selects option 1

    userInt++;  // Adds 1 to the input until it reaches original value
    sum += userInt; //Adds each iteration to the sum

    if (userInt < placeholder) { 

        text += userInt + ' + '; //Appends string with new value of userInt + "+"

    } else {

        text += userInt + ' = ' + sum; //Once original input value is reached, appends = plus the sum
        console.log(text); //Prints string including sum
    }

}

let product = 1; // Variable for product set to 1 so that this can be incremented higher in the loop

while (userInt < placeholder && userChoice == 2) { // Loop for calculating the product after user selects option 2

    userInt++;  // Adds 1 to the input until it reaches original value
    product *= userInt; //Adds each iteration to the product

    if (userInt < placeholder) { 

        text += userInt + ' x '; //Appends string with new value of userInt + "+"

    } else {

        text += userInt + ' = ' + product; //Once original input value is reached, appends = plus the product
        console.log(text); //Prints string including product
    }

}

// If user does not enter 1 or 2, print error 
if (userChoice > 2) { 
    console.log('I said press 1 or 2 and whatever you pressed wasn\'t it!');
}
