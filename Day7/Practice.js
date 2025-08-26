// finding the prime numbers
let prompt = require("prompt-sync")();
let user = 50;
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("---printing prime number upto userinput---");
for (let i = 2; i <= user; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// normal banking functionalities
let balance = 0;
function deposit() {
  let userDepositAmount = Number(
    prompt("Enter the balance you want to deposit: ")
  );
  if (!isNaN(userDepositAmount) && userDepositAmount > 0) {
    balance += userDepositAmount;
    console.log(`Deposited: ${userDepositAmount}, Current Balance: ${balance}`);
  } else {
    console.log("Invalid deposit amount!");
  }
}
function withdraw() {
  let userWithdrawalInput = Number(prompt("Enter the amount  to withdraw: "));
  if (!isNaN(userWithdrawalInput) && userWithdrawalInput > 0) {
    balance -= userWithdrawalInput;
    console.log(
      `Withdrawn: ${userWithdrawalInput}, Current balance: ${balance}`
    );
  } else {
    console.log("Invalid withdrawn amount!");
  }
}
function checkBalance() {
  console.log(`Current Balance: ${balance}`);
}
deposit();
withdraw();
checkBalance();

// Function to reverse a string
let reversed = "";
function reverseString(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("Abhishek"));

//vowel checker
let userInput = prompt("Enter the string : ");
userInput = userInput.toLowerCase();
let count = 0;
for (let i = 0; i <= userInput.length; i++) {
  if (
    userInput[i] === "a" ||
    userInput[i] === "e" ||
    userInput[i] === "i" ||
    userInput[i] === "o" ||
    userInput[i] === "u"
  ) {
    count += 1;
  }
}
console.log(count);
//multiplicatoint table from user input
let userInputa = Number(prompt("Enter the number: "));
for (let i = 1; i <= 10; i++) {
  console.log(`${userInputa} * ${i} = ${userInputa * i}`);
}
// Write a function that takes a list of numbers and returns the sum of all even numbers.
let arrayInput = prompt("Enter the array elements seperated by the space: ");
let numbersArray = arrayInput.split(" ").map(Number);
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  if (numbersArray[i] % 2 === 0) {
    sum += numbersArray[i];
  }
}
console.log(sum);

// Write a function that takes a string and returns a dictionary with the frequency of each character.
let userInputs = prompt("Enter a string: ");
let frequency = {};
for (let i = 0; i <= userInputs.length - 1; i++) {
  let char = userInputs[i];
  if (frequency[char]) {
    frequency[char]++;
  } else {
    frequency[char] = 1;
  }
}
console.log(frequency);

// Write a function that accepts a list of integers and returns the second largest number.
let userArray=prompt("Enter the array list: ")
let input=userArray.split(" ").map(Number)
// console.log(input)
let largest=input[0]
for(let i=0;i<=input.length-1;i++){
    if(input[i]>largest){
        largest=input[i-1]
    }
}
console.log(largest)

