let readlineSync = require('readline-sync');

let number = 0; // ask for number later 
let output ='';

for ( let i = 1; i <= number; i ++)  {

    if( i > 1) {
        output += '+';
    }
    output += i;

    
    sum += i; // sum = sum + i;

    }

    console.log(output + '=' + sum);
    console.log(sum);