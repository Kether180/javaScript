// BREAK ;
// CONTINUE;

let readlineSync = require('readline-sync');

for (let i = 0; i < 20; i++) {

    if (i % 2 == 1) {
        continue;
    }

    console.log(i);
}

for (let i = 0; i < 20; i++) {

    if (i == 10) {
        break;
    }

    console.log(i);
}