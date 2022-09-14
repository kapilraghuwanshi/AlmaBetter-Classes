// console.log("Download the file, Fetch data from server");



// Synchronous  // blocking  
console.log('Start script...');//1
task('Download a file.');//2
console.log('Done!');//3

function task(message) {
    let n = 1000000;
    while (n > 0){
            n--;
    }
    console.log(message);//2
}



console.log('...');



// ASynchronous  // non-blocking  
// callback functions

console.log('Start script...');//1
// callback function
const myFun = function() {
    task('Download a file.');//4
}
// higher order func
setTimeout(myFun, 5000);//4

setTimeout(function() {
    task('Enjoy a file.');//3
}, 3000);

console.log('Done!');//2


//
// setTimeout(function(){
//     console.log("c");
// }, 4000);

// function x(y){
//     console.log("a");
//     y();
// }

// const k = function y(){
//     console.log("b");
// }

// x(k);


console.log('Hi!');
setTimeout(function(){
    console.log('Execute immediately.');
}, 0);
console.log('Bye!');


// SAP
// let x = true;

// setTimeout(function(){
//     x = false;
// }, 4000);

// while(x){
//     console.log("x");
// }

//Display a Text Once After 3 Second
function greet() {
    console.log('Hello world');
}
const timeOutid = setTimeout(greet, 3000);

clearTimeout(timeOutid);


//Display a Text After every 3 Second
function greet() {
    console.log('Hello world');
}
const intervalID = setInterval(greet, 1000);

clearInterval(intervalID);
