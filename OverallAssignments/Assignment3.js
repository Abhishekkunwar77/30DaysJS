// to write a program to  check if the person is eligible to vote  or not
/*
const age=prompt("Enter the age: ")
if(age>=18 ){
    console.log("You are eligible to vote.")
}else{
    console.log("You are not eligible to vote.")
}*/

//to find the largest number among three

//to find the largest number among three
/*const num1 = Number(prompt("Enter the first number: "));
const num2 = Number(prompt("Enter the second number: "));
const num3 = Number(prompt("Enter the third number: "));
if (num1 > num2 && num1 > num3) {
  console.log(`${num1} is the greatest.`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} is the greatest.`);
} else if (num3 > num2 && num3 > num1) {
  console.log(`${num3} is the greatest.`);
} else if (num1 === num2 && num2 === num3) {
  console.log("All values  are equal.");
} else {
  console.log("There is a tie between two numbers.");
}
*/

// to check whether a number is divisible by both 3 and 5
//to find the largest number among three
/*
const num=Number(prompt("Enter the number: "))
if(num%3===0 && num%5===0){
    console.log(`${num} is divisible by both 3 and 5.`)
}else if(num%3===0){
    console.log(`${num} is only divisible by 3`)
}else if(num%5===0){
    console.log(`${num} is only divisible by 5`)
}else{
    console.log(`${num} is not divisible by 3 and 5.`)
}*/

/* to check the number is zero, positive or negative 
function checkNumber(num){
    if(num>0){
        return "Positive"
    }else if(num<0){
        return "Negative"
    }else if(num===0){
        return "Zero"
    }
}

console.log(checkNumber(55))*/
/*
// Write a program to swap two variables without using a temporary variable (use arithmetic or bitwise operators).
let a=55
let b=65
a=a^b
b=a^b
a=a^b
console.log(a,b)
*/

/* to check the leap year or not
function checkLeapYear(year){
    if((year%4===0 && year%100!==0) || (year%400===0)){
        return "Leap Year"
    }else{
        return "Not Leap Year"
    }
}
console.log(checkLeapYear(2025))*/

/*
// Implement a function that uses logical operators to check if a given number is within a range (e.g., between 10 and 20).

const userInput=Number(prompt("Enter a number: "))
function checkBetween(){
if(userInput<=20 && userInput>=10){
    return "Between 10 and 20"
}else {
    return "Not between 10 and 20"
}
}
console.log(checkBetween())
*/

/*
// to find the truely  or falsy value
function trueOrFalse(){
    let trueValues=[true,1,"Hello",[]]
    let falseValues=[false,0,NaN,undefined, null]
    console.log("===Truely Values===")
    trueValues.forEach(items=>{
        console.log(items, " => ", Boolean(items))
    });
    console.log("    ")
    console.log("===Falsy Values===")
    falseValues.forEach(items=>{
        console.log(items," => ", Boolean(items))
    })
}

trueOrFalse()
*/

/*
// Write a mini calculator program that takes two numbers and an operator as input and returns the result.
let firstInput= Number(prompt("Enter the first number: "))
let secondInput= Number(prompt("Enter the second number: "))
let operator=(prompt("Choose the operator(+,-,*,/): "))
let result;
if(operator==="+"){
    result= firstInput+secondInput
}else if(operator==="-"){
    result= firstInput-secondInput
}else if(operator==="*"){
    result=firstInput*secondInput
}else if(operator==="/"){
    if(secondInput===0){
        result="Error. Cannot be divided by Zero"
    }else{
        result=firstInput/secondInput
    }
}else{
    result="Invalid Operator!"
}

console.log("Result: ", result)
*/

/*
// Write a program to classify numbers as even, odd, or prime.
const num=Number(prompt("Enter a number: "))
if(isNaN(num) || num<=0){
    console.log("Please enter a valid number.")
}else if(num===1){
    console.log("1 is neither prime nor composite, but it's odd")
}else if(isPrime(num)){
    console.log(`${num} is a prime number.`)
}else if(num%2===0){
    console.log("Even")
}else{
    console.log("Odd")
}
function isPrime(n){
    if(n<2) return false
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i===0) return false
    }
    return true
}
*/
/*
// Create a program to convert seconds into hours, minutes, and seconds using division and modulus operators.
const hour=Number(prompt("Enter an hour: "))
let result;
if(isNaN(hour) || hour<=0){
    console.log("Please enter a valid number.")
}else{
    console.log(`${hour} hour is equal to ${hour*60} minutes and also equal to ${hour*60*60} seconds`)
}
    */
/*
// Create a program to convert seconds into hours, minutes, and seconds using division and modulus operators.
const age=Number(prompt("Enter an age: "))
const isStudent=prompt("Are you a student(yes/no): ").toLowerCase();
const result=isStudent==="yes"
if(isNaN(age) || age<=0){
    console.log("Please enter a valid age.")
}else{
    if(age<18 || result ||age>=65){
        console.log("You are eligible for the discount.")
    }else{
        console.log("You are not eligible for the discount")
    }
}

*/
/*
// Create a program to convert seconds into hours, minutes, and seconds using division and modulus operators.
const userInput=prompt("Enter a string: ")
isNumberOnly=true;
for(let i=0;i<=userInput.length;i++){
    const char=userInput[i]
    if(!(char>='0' && char<='9')){
        isNumberOnly=false;
        break;
    }
}
if(userInput.length===0){
    console.log("String is empty.")
}else if(isNumberOnly){
    console.log("The string contains number only.")
}else{
    console.log("The string contain non numeric characters.")
}
    */
/*
// Create a program to convert seconds into hours, minutes, and seconds using division and modulus operators.
const year=prompt("Enter a string: ")
if(isNaN(year) || year<=0){
    console.log("Please enter a valid year.")
}else{
    const isCentury=year%100===0;
    const isLeap= (year%4===0) || (year%400===0 && year%100!==0)
    if(isCentury && isLeap){
        console.log(`${year} is both leap and century`)
    }else if(isCentury){
        console.log(`${year} is only century but not leap year`)
    }else if(isLeap){
            console.log(`${year} is only leap  year but not century year`)
    }else{
        console.log("it is neither leap year nor century year.")
    }
}

*/
/*
to find the factorial fo the number
let num=Number(prompt("Enter the number: "))
let factorial=1
if(num<0){
    console.log("Factorial is not defined for negative numbers.")
}else{
    for(let i=1;i<=num;i++){
        factorial=factorial*i;
    }
    console.log(`The factorial of  ${num} is ${factorial}`)
}*/
