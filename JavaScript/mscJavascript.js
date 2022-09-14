
// create a regular expression

//1st - regex literal
const regularExp = /abc/;

console.log(regularExp);
console.log(typeof regularExp);

//2nd way - constructor
const regularExp1 = new RegExp(/abc/);

console.log(regularExp1);
console.log(typeof regularExp1);

// reg exp JS methods

// test method
const regexObj = new RegExp(/^a...s$/);
let str1 = 'alias';
console.log(regexObj.test(str1));

console.log(regexObj.test("a1@3s"));

console.log(regexObj.test("a1@3S"));

// search method

const str2 = 'Find me';
const pattern = /me/;

console.log(str2.search(pattern));

// replace method

console.log(str2.replace(pattern, 'you'));

// splitting strings into array elements
const regex1 = /[\s]+/;
console.log('Hello world! '.split(regex1));


// exec - earching the phone number pattern
const regex2 = /(\d{3})\D(\d{3})-(\d{4})/gim;
console.log(regex2.exec('My phone number is: 555 123-4567'));


function validatePhone(num) {
    // regex pattern for phone number
    const re = /^\(?([0-9]{2})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{5})$/g;

    // check if the phone number is valid
    let result = num.match(re);
    if (result) {
        console.log('The number is valid.');
    }
    else {
        let num = prompt('Enter number in XX-XXXXX-XXXXX format:');
        validatePhone(num);
    }
}

// take input
let number = prompt('Enter a number XX-XXXXX-XXXXX');

validatePhone(number);

function validateEmail(email) {

    // regex pattern for email
    const re = /\S+@\S+\.\S+/g;

    // check if the email is valid
    let result = re.test(email);
    if (result) {
        console.log('The email is valid.');
    }
    else {
        let newEmail = prompt('Enter a valid email:');
        validateEmail(newEmail);
    }
}

// take input
let email = prompt('Enter an email: ');

validateEmail(email);


// Debugging Techniques

// 1. using console.log 
// 2. using debugger
// 3. using breakpoints

let a = 6;
let b = 9;
let c = a * b;

// stops the execution
debugger;