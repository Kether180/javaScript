 /* Homework
[Exercise 16](#exercise-16)

Perfect numbers
Write a program that calculates which integers below 1000 are perfect numbers. 


A perfect number is a positive integer that is equal to the sum of its proper positive divisors, 

that is, the sum of its positive divisors excluding the number itself.  Hint The first perfect number is 6. Its proper divisors are 1, 2 and 3 `1 + 2 + 3 = 6`. The next perfect number is 28: `1 + 2 + 4 + 7 + 14 = 28`.
8 is not a perfect number because it is evenly divisible by 1, 2 and 4 but `1 + 2 + 4 = 7`*/ 


// could also do an array 

 /*function divisorsArray (number)
let divArray = [];

for ( let i = 1; i <= number*0.5;i++) */ 

// Perfect numbers
// Write a program that calculates which integers below 1000 are perfect numbers.

// Write a program that calculates which integers below 1000 are perfect numbers. A perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself.

//     Hint:
//     The first perfect number is 6. Its proper divisors are 1, 2 and 3 1 + 2 + 3 = 6.
//     The next perfect number is 28: 1 + 2 + 4 + 7 + 14 = 28.
//     8 is not a perfect number because it is evenly divisible by 1, 2 and 4 but 1 + 2 + 4 = 7.


// OPTION 1

let perfectNum = ''; // variable for adding perfect numbers into
let perfectNumCheckUpTo = 1000 // To what number perfect numbers will be checked


for (let i = 6; i < 1000; i++) {
    let divisor = 0; // Divisor set in loop to reset each time i increases
for (let i = 6; i < 1000; i++) {
    }
}

console.log(perfectNum); // Log perfect numbers after for loop

// OPTION 2 (nested loops)
function perfectNumber1(upTo) {
    let perfectNum1 = '';
    for (let i = 6; i < upTo; i++) {
        let divisor = 0; 

        for (let j = 1; j < i; j++) { 

            if (i % j == 0) {
                divisor += j; 
            }

            if (j == i - 1 && divisor == i) { 
                perfectNum1 += i;
                perfectNum1 += ' ';
            }
        }
    }
    return perfectNum1;
}

console.log(perfectNumber1(1000));

//OPTION 3 - 2functions
function perfectNumber(upTo) {
    for (let i = 6; i < upTo; i++) {
        checkIfPerfectNumber(i); // Sets iteration of i as parameter to be passed through checkPerfectNumbers function
    }
    return perfectNumForFunction; // Returns perfect numbers after function check
}

function checkIfPerfectNumber(number) { // Function to check if a single number is perfect
    let divisor = 0;

    for (let j = 1; j < number; j++) { //  parameter number for the loop

        if (number % j == 0) { // If parameter divided by current iteration has no remainders, add this value to the divisor
            divisor += j;
        }

        if (j == number - 1 && divisor == number) { // If the number is perfect return number with space
            return perfectNumForFunction += number + ' ';
        }
    }
    return false; // If the number is not perfect, return false
}

let perfectNumForFunction = '';

console.log(perfectNumber(1000));
