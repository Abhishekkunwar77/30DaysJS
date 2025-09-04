// use of spread operator
// epxpand the element of the array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // print the merged array with [1,2,3,4,5,6]

// expanding the elements of the object
const student = {
  name: 'Gopal',
  age: 23,
  isStudent: true,
};
const copy = { ...student };
//for object the spread and the normal one is same
console.log(student);
console.log(copy);
//gives the same output

// using the spread operator in the function
function sum(...num) {
  return num.reduce((acc, cur) => {
    //accumulator as acc and current value as cur
    return acc + cur;
  }, 0);
}
console.log(sum(1, 2, 3, 4, 6, 7, 8, 9, 10));

//default params fallback if no values are passed
function greet(name = 'Guest') {
  return `hello ${name}!`;
}
console.log(greet());

// assignment

// merging two arrays using the spread operator
const fruits = ['Apple', 'Banana'];
const moreFruits = ['Mango', 'PineApple'];

const allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // will print [ 'Apple', 'Banana', 'Mango', 'PineApple' ]

const stdnt = [
  {
    name: 'Radha',
    age: 23,
    salary: '1234',
  },
  {
    name: 'Krishna',
    age: 34,
  },
];
const copied = stdnt.map((copiedStd) => ({ ...copiedStd }));
console.log(copied);

//upgraded version of the stdnt
const updatedStudents = stdnt.map((std) => ({
  ...std,
  grade: 'A+', // will add the grade key and value with the A+
}));
// add the grade key value pair in the object
console.log(updatedStudents);

// Write a function that takes an array of student objects, makes a copy with spread, and adds a passed: true field to each.
function marksStudentPassed(students) {
  return students.map((student) => ({
    ...student,
    passed: true, //added extra key to the student
  }));
}
const dummyStds = [
  {
    name: 'krishna',
    marks: 55,
    isGraterThanHalf: true,
  },
  {
    name: 'Gopal',
    marks: 45,
    isGraterThanHalf: false,
  },
  {
    name: 'Hooky',
    marks: 85,
    isGraterThanHalf: false,
  },
];
const updatedStds = marksStudentPassed(dummyStds);
// ouput as   { name: 'krishna', marks: 55, isGraterThanHalf: true, passed: true } ......
console.log(updatedStds);

//Create a function with rest params to calculate the average marks of students.
function averageMarks(...marks) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return marks.length > 0 ? total / marks.length : 0;
}
console.log(`The average marks is: ${averageMarks(10, 20, 30, 40, 40, 50)}`);
console.log(
  `The average marks is: ${averageMarks(
    45,
    645,
    2,
    135,
    232,
    341,
    3413,
    4131,
    413,
    41,
    341,
    34,
    13,
    413,
    41,
    32
  )}`
);
// Use default params to give a student a default country = "India" if not provided.
function defaultProvider(students) {
  return students.map(({ country = 'India', ...rest }) => ({
    ...rest,
    country,
  }));
}
let stds = [
  {
    name: 'abc',
    age: 123,
    country: 'india',
  },
  {
    name: 'def',
    age: 456,
    country: 'india',
  },
  {
    name: 'ghi',
    age: 789,
  },
  {
    name: 'jkl',
    age: 101112,
  },
];
console.log(defaultProvider(stds)); // add country india to the output

function greet(name = 'Guest') {
  return `Hello ${name}`;
}
console.log(greet());
console.log(greet('Meena')); // passing the default name

//assignment
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

//spreading object
function assignedObj(students) {
  return students.map((student) => ({
    ...student,
    grade: 'A+',
  }));
}
const assignObjects = [
  {
    name: 'Kool',
    age: 45,
    marks: 80,
  },
  {
    name: 'dhoni',
    age: 45,
    marks: 99,
  },
  {
    name: 'jadeja',
    age: 45,
    marks: 85,
  },
];
console.log(assignedObj(assignObjects));

//multiplying all the numbers passed through the function
function mult(...nums) {
  const result = nums.reduce((acc, curr) => acc * curr);
  return result;
}
console.log(mult(10, 20, 30, 40, 50, 60));

// take the output as { name: "Ravi", country: "India" }
function createUser(name, country = 'India') {
  return { name, country };
}
console.log(createUser('Abhishek'));
console.log(createUser('Gopal', 'Parlok'));
console.log(createUser());

// Copy the array with spread
// Add status: "Pass" if marks >= 75 else "Fail"
const students = [
  { name: 'Ravi', marks: 80 },
  { name: 'Meena', marks: 20 },
  { name: 'Kiran', marks: 75 },
  { name: 'Moon', marks: 70 },
];

const updatedStatus = students.map((std) => ({
  ...std,
  status: std.marks >= 75 ? 'Pass' : 'Fail',
}));
console.log(updatedStatus);
