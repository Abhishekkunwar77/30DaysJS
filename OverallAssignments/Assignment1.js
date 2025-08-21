let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
num1 = Number(num1);
num2 = Number(num2);
if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter a valid number!");
} else {
  // addition
  console.log(`Addition: ${num1} + ${num2} = ${num1 + num2}  `);
  console.log(`Subtractioin: ${num1} - ${num2} = ${num1 - num2}`);
  console.log(`Multiplication: ${num1} * ${num2} = ${num1 * num2}`);
  console.log(`Division: ${num1} / ${num2} = ${num1 / num2}`);
}
