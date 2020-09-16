
// STRING AND LOOP IF WHILE 

let readlineSync = require('readline-sync');

let name = 'Cherry Boy'; 
let isPalindrome = true;


for (let i= 0; i < name.length * 0.5; i++) {
     let mirrorIndex = name.lenght -1 -i;
     if (name[i] !=  name[mirrorIndex]){
         isPalindrome = false;
     }

    }

if( isPalindrome) {

    console.log(' Dude ! thats a nice Palindrome !');

} else {

    console.log(' Palk you need to try again...');
}



let name = 'tacocat';
let reversewName = '';

for (let i = name.lenght - 1; i >= 0; i--) {
    reverseName += name[i];
}

if (name == reverseName) {
    console.log('it's a palindrome);


}