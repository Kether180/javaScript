/* ## Exercise 5
Modify the Exercise 4 so that only multiples of three or five are considered in the sum.

> **Example:**<br />
> User inputs `17`<br />
> Output:<br />
> `3 + 5 + 6 + 9 + 10 + 12 + 15 = 60`

// EXERCISE: Create a programm that takes a users input and calculates the sum from 1 to n only when that iteration is divisible by 3 or 5
let readlineSync = require('readline-sync');

*/

let userInput = readlineSync.questionInt('Enter a number above 3: ');
let placeholder = userInput; // Saves input number before zeroing out
let text = '';
let sum = 0;
userInput = 0; // Zeroes out input to use as counter

while (userInput < placeholder) {
  userInput++; // Adds 1 to the input until it reaches original value

  if (placeholder < 3) {

    // If placeholder is less than 3 only this text should be printed and only once
    text = 'That is not a number greater than 3 you dingus!'; 

  } else if (userInput == placeholder && placeholder == 3) {
    // If original input is equal to 3, this should be the final and be appended by the additional equals information
    sum += userInput;
    text += userInput + ' = ' + sum;

  } else if(userInput < placeholder && (userInput == 3)) { 
    // If original input greater than 3, simply add the iteration to the text
    sum += userInput;
    text += userInput;

  } else if (userInput < placeholder && (userInput % 3 == 0 || userInput % 5 == 0)) {
    // Adds all further iteration values less than original to sum only if divisible by 3 or 5
    sum += userInput;
    text += ' + ' + userInput; 

  } else if (userInput == placeholder && (userInput % 3 == 0 || userInput % 5 == 0)) {
    // If original input is divisible by 3 or 5, but greater than 3, + should be prefixed with "+" and suffixed with final calculation
    sum += userInput;
    text += ' + ' + userInput + ' = ' + sum; 

  } else if (userInput == placeholder) {
    // If the final iteration is not divisible by 3 or 5, only the = followed by already calcuated sum should print
    text += ' = ' + sum;

  }
}

// Print final text after loop to the console
console.log(text);




// 


for ( let i = 1; i<= Number; i++) {

  if (i % 3!= 0 && i% 5 !=0){
    continue;

  }

  if (i > 3) {
    output += '+';
  }

  output += i;

}