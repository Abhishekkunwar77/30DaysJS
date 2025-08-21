// example of var

console.log(a); // cannot be accessed because var is not hoisted
var a = "Abhishek is a billionaire";

// console.log(b)
// const b="Abhishek is an entrepreneur"

HoistingExample(); // can be accessed because  let and const are hoisted
function HoistingExample() {
  let b = "Let is hoisted";
  console.log(b);
}

constExample();
function constExample() {
  const m = "Abhishek is a billionaire";
  console.log(m);
}

// trying the hoisting with the var
varExample(); // gives the output
function varExample() {
  var k = "abhishek hello";
  console.log(k);
}

// example of redeclare and re-assign

//var example
var a = 25;
var a = 55;
console.log(a);

// let example
let b = 100;
// let b=5000000 // cannot redeclared as it is block level scope
b = 200; // can be re-assigned
console.log(b);

// const example
const c = "Abhishek";
// const c="Hello" // cannot be redeclared
// c="Bye" // cannot be reassigned
console.log(c);

// Predict the output
console.log("1:", x);
var x = 20;

// console.log("2:", y);
let y = 30;

greet();
function greet() {
  console.log("3: Hello from greet()");
}

// one  more example
foo();
function foo() {
  console.log("hello foo");
}

// bar(); // cannot be accessed type error - bar is not a function

var bar = function () {
  console.log("variable hoisting!");
};
