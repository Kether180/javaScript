# Homework
- [Exercise 10](#exercise-10)
- [Exercise 11](#exercise-11)

## Exercise 10
Write a program that asks the user for a name and outputs that name backwards.


let name = readlineSync.question("What is your name?");
let reversename = "";
for (let i = (name.length - 1); i >= 0; i--) {
    reversename += name[i];
}
console.log(reversename);



## Exercise 11
Write a program that asks the user for a sentence and outputs the words in the ___console___, one per line, in a rectangular frame. For example the sentence "Hello World in a frame" gets printed as:

```
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*********
```
> **Hint:**<br />
> Research how to `split()` Strings.


let input = readlineSync.question("Write any sentence you like.");

//splitting string into array of strings, using space as a separator
let split = input.split(" ");

//identifying length of longest item in array, then asking JS to include an extra space in array item as long as it is shorter than the longest one
let longest = 0;
for (let i = 0; i < split.length; i++) {
    if (split[i].length > longest) {
        longest = split[i].length;   
    }
}

//...asking JS to include an extra space in array item as long as it is shorter than the longest one.
for (let i = 0; i < split.length; i++) {
  while (split[i].length < longest) {
    split[i] += " ";
  }
}

//code for top and base line of asterisks
let frameline = "";
for (let i = 0; i < longest + 4; i++) {
  while (frameline.length < longest + 4) {
    frameline += "*";
  }
}

//variables for outer space and asterisk. Allows for easy replacement of characters - however there is much probably a smarter solution for this
let frame = "*";
let extraspace = " ";

//finally console.logging everything

console.log(frameline);

for (let i = 0; i < split.length; i++) {
    console.log(frame + extraspace + split[i] + extraspace + frame);
}

console.log(frameline); 