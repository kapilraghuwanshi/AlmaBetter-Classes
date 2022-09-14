// program to find the factorial of a number

// take input from the user
const number = 2;
let fact;
// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}
// if number is positive
else {
    fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}