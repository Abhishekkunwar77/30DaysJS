// Computer picks a random number (1–100).and user Guess it
const prompt = require("prompt-sync")();

console.log("🎯 Welcome to the Guess the Number Game!");
console.log("I have picked a number between 1 and 100. Can you guess it?");
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
while (true) {
  let userGuess = Number(prompt("Enter your guess: "));
  if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
    console.log("Please enter a valid number between 1 and 100.");
    attempt--;
  }
  attempt++;
  if (userGuess > randomNumber) {
    console.log("📈 You guessed too high.");
  } else if (userGuess < randomNumber) {
    console.log("📉 You guessed too low.");
  } else if (userGuess === randomNumber) {
    console.log("✅ Hurrey, You nailed it.");
    console.log(`score: ${attempt}`);

    break;
  }
}
