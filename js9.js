## Exercise 9
Write a program that prints the name with more characters in an array of names.

// EXERCISE: Log the longest name in an array of names to the console.
let names = ['Gandalf', 'Frodo', 'Smaug', 'Aragon', 'Sauron', 'Samwise', 'Erowyn', 'Gimli', 'Legalos'];
let longestName = ''; // Empty string to be filled with longest name
let equalNameLength = ''; // Set empty string in variable to be filled if multiple names are equal in length and longest
let multiples; // Variable to be used for boolean to print either only the single longest name or multiple longest names

for (let i = 0; i < names.length; i++) {
    if (names[i].length > longestName.length) {
        // If an iteration is longer than last, set multiples to false and add the name to both possible name variables
        multiples = false;
        longestName = names[i];
        equalNameLength = names[i];
    } else if (names[i].length == longestName.length) {
        // If another iteration is equal to the current longest, set multiples to true and supplement names list
        multiples = true;
        equalNameLength += ', ' + names[i];
    }
}

if (multiples == false) {
    // If no multiples have equally longest name, print only the single longest name
    console.log('The character with the longest name is ' + longestName); // Logs the iteration with the most characters to the console
} else if (multiples == true) {
    // If multiple people have the longest name, print out the list of these people
    console.log('These characters have the longest names: ' + equalNameLength);
} else {
    // If there is no longest name, the array is empty and the user should be informed
    console.log('Uh oh, not all who wander are lost, but you are: No characters found.');
}
