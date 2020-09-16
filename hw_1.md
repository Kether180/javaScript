# Homework
- [Exercise 1](#exercise-1)
- [Exercise 2](#exercise-2)
- [Exercise 3](#exercise-3)
- [Exercise 4](#exercise-4)


## Exercise 1
### Input and output
Write a program that ask the user for his name and prints a greeting.
```
Please enter your name:

Hello <NAME>, welcome to the Learn to Code course.
```

> **Hint:**<br />
> Use `readline-sync` for the input and `console.log()` for the output .let readlineSync = require('readline-sync');

// Ask for user response.

let name = readlineSync.question('May I have your name? ');
console.log('Hello ' + name + ', welcome to the Learn to Code course!'); //Prints user response to console 




## Exercise 2
### Format text
Choose a simple Ascii art from the website https://www.asciiart.eu/.<br />
Output it to the ___console___.
```
￼        _______
       //  ||\ \
 _____//___||_\ \___
 )  _          _    \
 |_/ \________/ \___|
___\_/________\_/______
```
console.log(`
     _________ 
    / ======= \\ 
   /___________\\
  | ___________ |
  | | -       | |
  | |         | |
  | |_________| |____________________
  \\=____________/                    )
  / """"""""""" \\                   /
 / ::::::::::::: \\              -\'
(_________________) `); 

## Exercise 3
### Currency converter
Write a program that asks the user for an amount in USD.<br />
Output that amount converted to EURO.

> **Bonus goal:**<br />
> Use a precision of 2 decimal points: `3.45€`.

let readlineSync = require('readline-sync');

let amountDollar = readlineSync.question('Enter the amount you would like to conver to Euros: '); //Sets input of user as variabe for dollar
let exchangeEuro = 0.844; //Sets exchange rate for Euro for conversion
let conversion = amountDollar * exchangeEuro;

console.log(amountDollar + ' USD is currently worth ' + conversion.toFixed(2) + ' EUR'); //Prints original input plus Euro to two decimal places 

## Exercise 4
### Sum loop
Write a program that asks the user for a number `n` and prints the sum of the numbers `1` to `n`.

> **Example:**<br />
> User inputs `5`<br />
> Output:<br />
> `1 + 2 + 3 + 4 + 5 = 15`



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


