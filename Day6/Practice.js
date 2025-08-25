const prompt=require("prompt-sync")();
let a = 50;
for (let i = 0; i <= a; i++) {
  console.log("For loop");
}
let w = 1;
while (w <= 50) {
  console.log("while loop");
  w++;
}
let dw = 1;
do {
  console.log("Do While Loop!");
  dw++;
} while (dw <= 50);

// printing the even numbers from 1 to 100
for (let e = 1; e <= 100; e++) {
  if (e % 2 === 0) {
    console.log(e);
  }
}

let we = 1;
while (we <= 100) {
  if (we % 2 === 0) {
    console.log(we);
  }
  we++;
}

let dwe = 1;
do {
  if (dwe % 2 === 0) {
    console.log(dwe);
  }
  dwe++;
} while (dwe <= 100);

// printing the sum from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(`The total sum from 1 to 100 is ${sum}.`);

// Reverse loop: print numbers from 20 → 1.
console.log("-----using for loop-----");

for (let i = 20; i >= 1; i--) {
  console.log(i);
}
console.log("-----using do..while loop-----");
let rev = 20;
do {
  console.log(rev);
  rev--;
} while (rev >= 1);
console.log("-----using while loop-----");

let revUsingWhile = 20;
while (revUsingWhile >= 1) {
  console.log(revUsingWhile);
  revUsingWhile--;
}

// printing the star using nested  loop
for (let i = 0; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// multiplication table of any number

//using for loop
let userInput = Number(prompt("Enter the number: "));
for (let i = 1; i <= 10; i++) {
  console.log(`${userInput} * ${i} = ${userInput * i}`);
}
//using do while loop
let userNum = Number(prompt("Enter the number: "));
let num = 1;
do {
  console.log(`${userNum} * ${num} = ${userNum * num}`);
  num++;
} while (num <= 10);

//using while loop multiplication table
let userVal = Number(prompt("Enter the number: "));
let numw = 1;
while (numw <= 10) {
  console.log(`${userVal} * ${numw} = ${userVal * numw}`);
  numw++;
}


//finding the prime numbers upto 50
for(let num=2;num<=50;num++){
  let isPrime=true
  for(let i=2;i<=Math.sqrt(num);i++){
    if(num%i===0){
      isPrime=false;
      break;
    }
  }
  if(isPrime){
    console.log(num)
  }
}

//palindrome checker 
//using loop to check if the word is palindrome or not
let word = "level";
let reversed=""
for(let i=word.length-1;i>=0;i--){
    reversed+=word[i]
}
    if(reversed===word){
        console.log("Palindrome")
    }else{
        console.log("Not Palindrome")
    }

    while(classNotEnded){
      console.log("Pretending to take notes🤣😣")
    }

    //