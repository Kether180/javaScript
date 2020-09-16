// 26 numbers fibonacci sequence 


let readlineSync = require('readline-sync');

let array = [0, 1];

function fib(n){
    
    for (let i = 2; i < n + 1; i++){
      array.push(array[i - 2] + array[i -1])
    }
   return array[n]
  }