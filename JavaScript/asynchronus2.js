// Async

myCalculator(5, 3, myDisplayer);
// higher order function
function myCalculator(num1, num2, myDisplayer) {
    let sum = num1 + num2;
    myDisplayer(sum);
}
// callback function
function myDisplayer(sum){
    console.log(sum);
    // 5 mins
}


console.log('Start script...');
task('Download a file.');
console.log('Done!');

// regular time blocking function

function task(message) { // 10 mins
    // emulate time consuming tasklet 
    let n = 100000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

//Start script...
//Download a file.
//Done!

// non blocking
// Callback function

console.log('2Start script...');
setTimeout(()=>{
    task1('2Download a file.');
});
console.log('2Done!');

console.log('2Start script...');
setTimeout(()=>{
    task1('2Download a file.');
},0);
console.log('2Done!');

console.log('2Start script...');
setTimeout(()=>{
    task1('2Download a file.');
},1000);
console.log('2Done!');

function task1(message) { // 10 mins
    // emulate time consuming tasklet 
        let n = 100000000;
        while (n > 0){
            n--;
        }
        console.log(message);
}

// SetTimeout
// higher order fcuntion -
// it takes another function as input(args/param)

function greet() {
    console.log('Hello world');
}
setTimeout(greet, 3000);

// another function is handler - callback function
//named function
setTimeout(function handler(){
    console.log("Hurray, I understood callback!");
}, 9000);

//annonymous function
setTimeout(function(){
    console.log("Hurray, I understood async!");
}, 2000);

setTimeout(() => {
    console.log("Hurray, I understood js event loop!");
}, 5000);


// 3 parallels
setTimeout(function handler(){
    console.log("Hurray, I understood callback!");
}, 2000);

//annonymous function
setTimeout(function(){
    console.log("Hurray, I understood async!");
}, 2000);

setTimeout(() => {
    console.log("Hurray, I understood js event loop!");
}, 2000);

// clear timout

let stopTimeout = setTimeout(function handler(){
    console.log("Hurray, I am enjoyinhg the async stuff!");
}, 10000);

clearTimeout(stopTimeout);

// setInterval 

setInterval(function handler(){
    console.log(new Date().getMinutes(), new Date().getSeconds());
}, 1000);

let stopIntervalId = setInterval(function handler(){
    console.log(new Date().getMinutes(), new Date().getSeconds());
}, 1000);

clearInterval(stopIntervalId)