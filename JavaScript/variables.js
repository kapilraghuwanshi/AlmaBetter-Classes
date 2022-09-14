// Var
var a = 5;
function getName(input){
    // function scope
    var output = null;
    output = input + 10;
    console.log(a);
    return output;
}

console.log(getName(8));
// global scope
console.log(a);
// block scope
{
    console.log(a); 
}


// Let
let b = 6;
console.log(b);
function getAddress(input){
    // function scope
    var output = null;
    output = input + 10;
    console.log(b);
    return output;
}

console.log(getAddress(8));
console.log(b);
// block scope
{
    let xyz = 78;
    console.log(xyz);
}
//console.log(xyz);

// Const

const c = 55;
console.log(c);
// c = 56; 
// TypeError - Assignment to constant variable.

{
    const abc = 67;
    console.log(abc);
}
// console.log(abc);
//ReferenceError: abc is not defined