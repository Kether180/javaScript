/*# Exercise 8
Write a program that prints **1 per line** only the names on odd positions in an array of names.
```
let names = [“Josie”, “Cathrin”, “Bob”, “Max”, “Hannah”, “Alex”];

// EXERCISE: Take an array of names and only log the odd arrays to the console, one name per line
let names = ['Josie', 'Cathrin', 'Bob', 'Max', 'Hannah', 'Alex', 'Miriam', 'Markus', 'Sebastian', 'Connor'];

for (let i = 0; i < names.length; i++) {   
    if (i % 2 == 0) {
        console.log(names[i]); // Logs every other name in the array to the console
    }
} 
``` */ 

let numbers = [12, 6, 90, 5, 71, 42, 13];
let total = 0;
let highest;
// let highest = numbers [0];
//let lowest = numbers[0];
// let highest = - Infinity;
//let lowest = Infinity ;

for ( let i = 0; i < numbers.length; i++){

    //console.log(numbers[i]);
    total += numbers[i];

if (numbers[i] > highest ) {
    highest = numbers[i];
}

if (numbers [i] < lowest ){
    lowest = numbers[i];
}

}

let avg = total / numbers.length;