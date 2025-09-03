var x = 55;
var x = 45; //allowed
x = 40; //allowed
let a = 100;
// let a=200 //redeclaration is not allowed in let
a = 400; //allowed
const county = 88;
// county = 45 now allowed to re-assign and redeclare for the const
console.log(county);

console.log(j); //undefiend
var j = 10;
// console.log(k); // referenceError
let k = 20;
// console.log(l); // referenceError
const l = 30;

function normalAdd(a, b) {
  return a + b;
}
console.log(normalAdd(55, 55));

const arrowAdd = (a, b) => {
  return a + b;
};
console.log(arrowAdd(45, 56));

// template literals
let name = 'Krishna';
let score = 100;
console.log(`${name} has scored ${score} in physics.`);

//array destructuring
let nums = [10, 20, 30];
let [m, n, o] = nums;
console.log(m);
console.log(n);
console.log(o);

//object destructuring
const user = {
  naam: 'Abhishek Kunwar',
  age: 21,
  isStudent: true,
};
let { naam, age, isStudent } = user;
console.log(name);
console.log(age);
console.log(isStudent);

//swapping the variable using the destructuring
let g = 10;
let h = 20;
[g, h] = [h, g];
console.log(g, h);

//some examples of arrow functions
const square = (n) => {
  return n * n;
};
const greet = (name) => {
  return 'Hello ' + name;
};
const isEven = (num) => {
  return num % 2 === 0;
};
console.log(square(5));
console.log(greet('Abhishek'));
console.log(isEven(10));

const employee = {
  naau: 'Gopal Das',
  isPremiumUser: true,
  timeSpan: 55,
};
console.log(
  `Is ${employee.naau} a Premium employee ? =>  ${employee.isPremiumUser}, If yes then, ${employee.naau} has a time span of ${employee.timeSpan}`
);

//using arrow function + map method + template literals to print the double of the numer
numbers = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
const arrowedNumberDouble = () => {
  return numbers.map((d) => d * 2);
};
let result = arrowedNumberDouble().join(', ');
console.log(`The doubled numbers are: ${result}`);

const apiResponse = {
  userId: 101,
  profile: { firstName: 'Gopal', lastName: 'Kumar' },
  settings: { theme: 'dark', notifications: true },
};
const {
  userId,
  profile: { firstName, lastName },
  settings: { theme },
} = apiResponse;
const transformedData = {
  id: userId,
  fullName: `${firstName} ${lastName}`,
  theme: theme,
};
console.log(transformedData);

// Use map with arrow functions to return just names.
// Use filter to get students with marks > 80.
// Use reduce to find total marks.
// Use destructuring inside these callbacks.
const students = [
  { name: 'Ravi', marks: 85 },
  { name: 'Meena', marks: 92 },
  { name: 'Kiran', marks: 76 },
];
const justName = () => {
  return students.map((n) => n.name);
};
console.log(justName());

const marksGreaterThanEighty = () => {
  return students.filter(({ marks }) => marks > 80);
};

console.log(marksGreaterThanEighty());

const totalMarks = () => {
  return students.reduce((acc, { marks }) => {
    return acc + marks;
  }, 0);
};
console.log(`Total Marks: ${totalMarks()}`);

const colors = ['red', 'green', 'blue', 'yellow'];
// Use destructuring to grab first two into variables,
// and the rest into another array using ...rest

let [d, b, ...rest] = colors;
console.log(d);
console.log(b);
console.log(rest);

// changing the key names in the object
const userNames = { userName: 'Abhishek Kunwar', isAdmin: true, id: 123 };
const { userName: username, isAdmin: isStd, id: employeeId } = userNames;
console.log(username);
console.log(isStd);
console.log(employeeId);

const config = {
  themes: 'dark',
};
const { themes, language = 'un', timezone = 'IST' } = config;
console.log(themes);
console.log(language);
console.log(timezone);

//nested objects destructuring
const order = {
  id: 1,
  customer: {
    name: 'Radha',
    address: {
      city: 'Coimbatore',
      pin: '651202',
    },
  },
};
const {
  customer: {
    address: { city, pin },
  },
} = order;
console.log(city);
console.log(pin);
