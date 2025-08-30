// Can you filter objects from an array based on a property? => YES
let users = [
  { name: 'Abhishek Kunwar', age: 21 },
  { name: 'Radha', age: 22 },
  { name: 'Krishna', age: 23 },
];
let adults = users.filter((billion) => billion.age >= 22);
console.log(adults);

// finding only even numbers
let lists = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let evenNumbers = lists.filter((even) => even % 2 === 0);
console.log(evenNumbers);

// doubling the numbers
let nums = [1, 2, 3, 4, 5, 6];
let doubled = nums.map((wo) => wo * 2);
console.log(doubled);

//reduce method to get the single value
let toReduceNums = [1, 2, 3, 4, 5, 6];
let reducedNumbers = toReduceNums.reduce((acc, cur) => acc + cur, 1);
console.log(reducedNumbers);

//flattening the array
let toFlattenArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let flattenedArray = toFlattenArray.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattenedArray);

// Square every number in an array using map().
let toSquareNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let squaredNumbers = toSquareNumbers.map((sq) => sq ** 2);
console.log(squaredNumbers);

// Filter out negative numbers from an array.
let toFilterNegative = [6, 5, 4, 3, 2, 1, 0, -1, -2, -3, -4, -5, -6];
let filteredNegative = toFilterNegative.filter((neg) => neg < 0);
console.log(filteredNegative);

// Find the maximum number in an array using reduce().
let toFindMax = [34, 56, 54, 23, 76, 45, 65, 43, 87, 98, 12];
let maxNumber = toFindMax.reduce((acc, cur) => {
  return acc > cur ? acc : cur;
}, 0);
console.log(maxNumber);

// Count the number of occurrences of each character in a string using reduce().
let string = 'AbhishekKunwar';
let counts = string.split('').reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(counts);

// creating own map function
function myMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5];
const squared = myMap(numbers, function (num) {
  return num * num;
});
console.log(squared);

// to check whether an array have duplicates or not
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}
let list = [1, 2, 2, 3, 3, 4, 4, 5, 4, 2];
console.log(hasDuplicates(list));

//store cart items with each item total and overall total
let cartItems = [
  { name: 'Knife', price: 250, quantity: 5 },
  { name: 'Pan', price: 750, quantity: 3 },
  { name: 'Board', price: 500, quantity: 7 },
  { name: 'Bat', price: 25000, quantity: 15 },
  { name: 'Ball', price: 650, quantity: 9 },
];
let overallTotal = cartItems.reduce(
  (acc, cur) => acc + cur.price * cur.quantity,
  0
);
console.log(`Total Price: ${overallTotal}`);
let eachItemTotal = cartItems.map((item) => {
  return {
    ...item,
    total: item.price * item.quantity,
  };
});
console.log(eachItemTotal);

//calculate  the total transaction amount: Method1
function totalTransaction(trans) {
  return trans.reduce((acc, cur) => acc + cur, 0);
}
let transactions = [100, 500, 600, -900, 800];
console.log(totalTransaction(transactions));

//calculate  the total transaction amount: Method1
function totalTrans(trans) {
  return trans.reduce((acc, cur) => {
    if (cur.type === 'withdraw') {
      return acc - cur.amount;
    } else if (cur.type === 'deposit') {
      return acc + cur.amount;
    } else {
      return acc;
    }
  }, 0);
}
let allTransactions = [
  { type: 'deposit', amount: 300 },
  { type: 'withdraw', amount: 100 },
  { type: 'deposit', amount: 3000 },
  { type: 'deposit', amount: 850 },
  { type: 'withdraw', amount: 500 },
  { type: 'deposit', amount: 390 },
];
console.log(`Total Transaction is : ${totalTrans(allTransactions)}`);
