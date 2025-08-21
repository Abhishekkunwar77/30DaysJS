// let num1 = prompt("Enter the first number: ");
// let num2 = prompt("Enter the second number: ");
// console.log("Before Swapping: Num1 = " + num1, "num2 = " + num2);
// // swapping the values
// let temp = num1;
// num1 = num2;
// num2 = temp;
// console.log("After Swapping: Num1 = " + num1, "Num2 = " + num2);

//checking the looose and strict equality
let a=5
let b="5"
console.log(a+b)
if(a==b){
    console.log("Loose Equality: a and b are equal")
}
if(a===b){
    console.log("a and b are equal")
}else{
    console.log("Strict Equality: a and b are not equal")


}

//adding the boolean to the number
let x=2
let y=false 
console.log(x+y)
console.log(true+1)


//type detection code to change the values of the variable to check the datatypes
let m="78"
console.log(typeof(m))
console.log(Number(m))
let n=Number(m)
console.log(typeof(n))

let k = "Hello";
let l = 55;
let c = 0;
let d = 1;
let e = undefined;
let f = NaN;
let result1 = Boolean(k);
let result2 = Boolean(l);
let result3 = Boolean(c);
let result4 = Boolean(d);
let result5 = Boolean(e);
let result6 = Boolean(f);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);


// temperature conversion 
// temperature  conversion
let userInput= prompt("Enter the temperature (Celsius): ")
let result=Number(userInput)
result=(userInput*(9/5)+32)
console.log(result)

// object type and array type checking both will give the types as object
// object and array type practice
// object and array type practice
let arrayExample=[1,2,3,4,5]
console.log(typeof(arrayExample))
let objectExample={
    name:"Abhishek Kunwar",
    niche:"Full Stack Developer",
    age:21
    }
console.log(typeof(objectExample))
console.log(Array.isArray(arrayExample))
console.log(Array.isArray(objectExample))
console.log(Array.isArray(objectExample.niche))

// creating the car object and printing the each datatypes here

let landRover = {
  model: "23LPA",
  color: "Red",
  year: 2030,
  isElectric: false,
};
console.log(typeof landRover.model);
console.log(typeof landRover.color);
console.log(typeof landRover.year);
console.log(typeof landRover.isElectric);

// adding the fruits in the array and removing the last and firsrt element
let fruitArray = ["Apple", "Banana", "Cactus", "Dangue"];
console.log(fruitArray);
fruitArray.push("Elephant");
console.log(fruitArray);
fruitArray.shift();
console.log(fruitArray);

//to check the input as the array and object 
function checkType(input) {
  if (Array.isArray(input)) {
    console.log("Input is Array!");
  } else if (typeof input === "object" && input !== null) {
    console.log("Input is Object");
  } else {
    console.log("Something Else");
  }
}
checkType([1, 2, 3, 4]);
checkType("Abhishek");
checkType({ name: "Abhishek Kunwar", niche: "Full Stack Developer" });



// nested object access

let nestedObject = {
  name: "Abhishek Kunwar",
  age: 23,
  niche: "Full Stack Developer",
  lovedBook: (fullStackBook = {
    author: "Abhishek",
    pages: 55,
  }),
};
console.log(nestedObject);
console.log(fullStackBook.author);


// creating the array and printing it using the for loop
let loopingArray=[1,2,3,4,5]
for(let i=0;i<loopingArray.length;i++){
    console.log(loopingArray[i])
}

// creating the variable with null and undefined
let s;
let t=null;
console.log(typeof(s))
console.log(typeof(t))


/// using the for of loop to print the square of the each number
let arrayNumbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10];
for (nums of arrayNumbers) {
  console.log(nums * nums);
}


//reversing the string 
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello"));

// printing the frequency  of the item in the array
const arr = [1, 2, 3, 4, 5, 5, 6, 7, 4, 5, 3, 6, 2];
const frequency = {};
arr.forEach((item) => {
  if (frequency[item]) {
    frequency[item] += 1;
  } else {
    frequency[item] = 1;
  }
});
console.log(frequency);