/* Exercise 3 Currency converter
Write a program that asks the user for an amount in USD.
Output that amount converted to EURO. Use a precision of 2 decimal points: `3.45€`*/



let readlineSync = require('readline-sync');
let amountDollar = readlineSync.question('Enter the amount you would like to cover to Euros: '); //Sets input of user as variabe for dollar
let exchangeEuro = 0.844; // Sets exchange rate for Euro for conversion
let conversion = amountDollar * exchangeEuro;
console.log(amountDollar + ' USD is currently worth ' + conversion.toFixed(2) + 'EUR'); //Prints original input plus Euro to two decimal places 