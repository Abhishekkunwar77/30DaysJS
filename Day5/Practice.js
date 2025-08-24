// some usage of array methods
let a = ["Apple", "Banana", "Pineapple", "Mango", "Katahar"];
a.push("Jamun");
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift("Jamun");
console.log(a);

//to print the double and square of the number using the map method
let arrayList = [1, 2, 3, 4, 5];
let squaredNum = arrayList.map((i) => i * i);
console.log(squaredNum);
let doubledNumbers = arrayList.map((double) => double + double);
console.log(doubledNumbers);

// use filter method to keep only even numbers and keep only numbers greater that 50
let arrayList1 = [10, 23, 45, 66, 70, 85];
let filteredEven = arrayList1.filter((num) => num % 2 == 0);
console.log(filteredEven);

let greaterThanFifty = arrayList1.filter((num) => num > 50);
console.log(greaterThanFifty);

// finding the minimum and maximum elements in the array using function
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([1, 4, 5, 4, 8, 4, 8, 99, 88, 77, 999]));

// finding the minimum value in the array  list using the function
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
console.log(findMin([8, 7, 9, 88, 77, 5, 3]));

//reversing the array without using the reverse method
let originalArray = [1, 2, 3, 4, 5];
let reversedArray = [];
for (let i = originalArray.length - 1; i >= 0; i--) {
  reversedArray.push(originalArray[i]);
}
console.log(reversedArray);

// removing the duplicates from the array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(
  removeDuplicates([
    1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 6, 6, 1, 2, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5,
    6, 7, 7,
  ])
);

//frequency of each items in the array
function countFrequency(arr) {
  let frequency = {};
  arr.forEach((element) => {
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  });
  return frequency;
}
console.log(
  countFrequency([
    ,
    "d",
    "b",
    "a",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "k",
  ])
);

//merging two array without any duplicates
function removeDuplicatesAndMerge(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
let arr1 = [1, 2, 3, 4, 4, 3, 2, 1];
let arr2 = [1, 2, 3, 4, 4, 3, 2, 1, 5, 6];
console.log(removeDuplicatesAndMerge(arr1, arr2));

//todo list
let todos = [];
function addTask(task) {
  todos.push(task);
  console.log(`${task} added!`);
}
function removeLast() {
  console.log(`${todos.pop()} removed!`);
}
function removeFirst() {
  console.log(`${todos.shift()} removed!}`);
}
console.log("-----Added Items-----");
addTask("Drone");
addTask("Bus");
addTask("Car");
addTask("Yacht");
addTask("Aeroplane");
addTask("Mumbai");
console.log("-----Removed Items-----");
removeLast();
removeFirst();
console.log("-----Overall To Do List -----");

function listAllItems() {
  for (let i = 0; i < todos.length; i++) {
    console.log(`${todos[i]}`);
  }
}
listAllItems();

//function to remove all falsy value
function removeFalsy(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsy([0, 1, false, 2, "", 3]));

// findinng the sum of digit
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(13245));

// finding the longest word in the string
function findLongestWord(str) {
  const words = str.split(" ");
  console.log(words);
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestWord("I love javascript Programming language"));
