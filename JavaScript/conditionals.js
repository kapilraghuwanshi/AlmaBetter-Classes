true === false;

true == false;

5 == "Alma";

5 == "5";

console.log(Number("5"));

console.log(String(5));

console.log(5 != 5);

console.log(15 == 15);

const a = 5,
  b = 2,
  c = "hello";

// const a = 5;
// const b = 2;
// const c = 'hello';

// equal to operator
console.log(a == 5); // true
console.log(a === 5); // true
console.log(b == "2"); // true
console.log(c == "Hello"); // false
// case sensitive

// Logical Operators
const a1 = true;
const b1 = false;
const c1 = 4;

// logical AND
console.log(a1 && a1); // true
console.log(a1 && b1); // false
console.log(b1 || b1); // false
console.log(c1 > 2 && c1 < 2); // false

// >75 - A
// 50-75 - B
// 35-50 - C
// <35 - D

if (false) {
  console.log("inside if");
} else {
  console.log("inside else");
}

if (true) {
  console.log("inside if");
} else {
  console.log("inside else");
}

let num = 65;
if (num > 75) {
  console.log("A grade");
} else {
  console.log("B or C or D grade");
}

// if else if else

function gradeDecider(num1) {
  if (num1 > 75) {
    // 65 > 75
    console.log("A grade");
  } else if (num1 > 50) {
    // 65 > 50
    console.log("B grade");
  } else if (num1 > 35) {
    // 65 > 50
    console.log("C grade");
  } else {
    console.log("D grade");
  }
}

gradeDecider(65);
gradeDecider(25);
gradeDecider(95);

// Switch
let grade = "C";
switch (grade) {
  case "A": {
    console.log("you got A grade!");
    break;
  }
  case "B": {
    console.log("you got B grade!");
    break;
  }
  case "C": {
    console.log("you got C grade!");
    break;
  }
  default: {
    console.log("you got D grade!");
    break;
  }
}

let num2 = 66;
switch (num2 > 75) {
  case num2 > 75:
  case num2 > 65: {
    console.log("you got A grade!");
    break;
  }
  case "B": {
    console.log("you got B grade!");
    break;
  }
  case "C": {
    console.log("you got C grade!");
    break;
  }
  default: {
    console.log("you got D grade!");
    break;
  }
}

function Calculator(operator, number1, number2) {
  // program for a simple calculator
  let result;
  switch (operator) {
    case "+":{
      result = number1 + number2;
      console.log(`${number1} + ${number2} = ${result}`);
      break;
    }
    case "-":{
      result = number1 - number2;
      console.log(`${number1} - ${number2} = ${result}`);
      break;
    }
    case "*":{
      result = number1 * number2;
      console.log(`${number1} * ${number2} = ${result}`);
      break;
    }
    case "/":{
      result = number1 / number2;
      console.log(`${number1} / ${number2} = ${result}`);
      break;
    }
    default:
      console.log("Invalid operator!");
      break;
  }
}

Calculator("+", 5, 6); // 11

Calculator("*", 5, 6); // 30

Calculator("-", 15, 6); // 9

Calculator("%", 15, 6); // 9



let num3 = 35;
undefined
switch (num3) {
  case num3 > 75 :
  case num3 > 65 :
  {
    console.log("you got A grade!");
    break;
  }
  case "B": {
    console.log("you got B grade!");
    break;
  }
  case "C": {
    console.log("you got C grade!");
    break;
  }
  default: {
      if(num3 > 30){
        console.log("you got D grade!");
      } else {
        console.log("you got failed!"); 
      }
    break;
  }
}