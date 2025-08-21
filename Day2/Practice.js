// var name="Radha"
// let age=55
// const pi=3.14
// console.log(name,age, pi)
/*
console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(pi))
console.log(typeof(true))
console.log(typeof(false))
console.log(typeof(undefined))
console.log(typeof(null))
*/

// type conversion
let numStr="123"
let num=Number(numStr)
console.log(num+10)

let n=45 //result = 45 but as a string
console.log(typeof(String(n)))
console.log(String(n))
console.log(typeof(n))


// extras
// console.log(b) /// cannot access b because let is hoisted and same for the const too
let b="Rich"

greet()
var c= function greet(){
    console.log("Hurrey!")
}