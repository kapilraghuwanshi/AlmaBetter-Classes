// add 2 numbers
function addNumbers(a, b) {
  let sum = 0; // local var initialize = 0 , null
  sum = a + b;
  return sum;
}

//calling
console.log(addNumbers(2, 3)); // sum = 5
console.log(addNumbers(5, 6)); // 5 + 11 = 16

console.log(2 + 3);
console.log(5 + 6);

//(0°C × 9/5) + 32

convertDegToCel();
convertDegToCel(20);

function convertDegToCel(x = 5) {
  return x * (9 / 5) + 32;
}

convertDegToCel1(15);
// helper function
function multiplyByNineFifths(x) {
  return x * (9 / 5);
}
// higher order function
function convertDegToCel1(x) {
    // callback function
  return multiplyByNineFifths(x) + 32;
}

// arrow functions

let x = function (a) {
  return a;
};
console.log(x(2));

let y = (a) => {
  return a;
};
console.log(y(2));

// diff btw arrow function and regular function

// arrow function does not have their own "this"
// arrow function has parental(lexical) scope
const obj1 = {
  name: "kapil",
  getName: function () {
    console.log(`my name is - ${this.name}`);
  },
};
//console.log(obj1.getName());

const obj2 = {
  name: "AlmaBetter",
  getName: () => {
    console.log(`my name is - ${this.name}`);
  },
};
//console.log(obj2.getName());

const person1 = {
  name: "kapil",
  hobbies: ["cricket", "coding", "teaching"],
  getHobbies: function () {
    this.hobbies.forEach(function (x) {
      console.log(`${this.name} like - ${x}`);
    });
  },
};
//console.log(person1.getHobbies());

const person2 = {
  name: "AlmaBetter",
  hobbies: ["cricket", "coding", "teaching"],
  getHobbies: function () {
    this.hobbies.forEach((x) => {
      console.log(`${this.name} like - ${x}`);
    });
  },
};
//console.log(person1.getHobbies());


// Hoisting

console.log(x1); // undefined
var x1;
x1 = 5;

// var x1;
// console.log(x1); // undefined
// x1 = 5;

a = 5;
console.log(a); // 5
var a;
// var a;
// a = 5;
// console.log(a); // 5

// declare all the varibalea in javascript in top side/ first line

var a = 4;
function greet() {
    // var b;
    b = 'hello';
    console.log(b); // hello
    var b;
}
greet(); // hello
console.log(b); // ? refrence - not defined


function greet1() {
    // var b;
    console.log(b); // undeinfed
    b = 'hello';
    var b;
    console.log(b); // hello
}
greet1(); // hello