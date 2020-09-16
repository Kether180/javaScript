/* Exercise 4 - Sum loop
Write a program that asks the user for a number 

`n` and prints the sum of the numbers `1` to `n`.

> **Example:**<br />
> User inputs `5`<br />
> Output:<br />
> `1 + 2 + 3 + 4 + 5 = 15` */



let userInput = readlineSync.questionInt('Enter a number: '); 
let placeholder = userInput; //Saves input number before zeroing out 
let text = ''; 
let sum = 0;
userInput = 0; //Zeroes out input to use as counter


while (userInput < placeholder) {

    userInput++;  // Adds 1 to the input until it reaches original value
    sum += userInput; //Adds each iteration to the sum

    if (userInput < placeholder) { 

        text += userInput + ' + '; //Appends string with new value of userinput + "+"

    } else {

        text += userInput + ' = ' + sum; //Once original input value is reached, appends = plus the sum
        console.log(text); //Prints string including sum
    }

}


