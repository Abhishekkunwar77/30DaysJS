import prompt from 'prompt-sync';
let now = new Date();
console.log(now);
let specificDate = new Date('2025-08-29');
let withNumbers = new Date(2025, 7, 29, 10, 30, 15);
console.log(specificDate);
console.log(withNumbers);
// in date and time the month starts with 0 i.e 0 represent jan and 11 represent dec

// printing each items of the date and time
console.log('-------------------------------');
let d = new Date();
//getting values
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());
// setting values
d.setFullYear(2027);
d.setMonth(5);
d.setDate(6);
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());

//formatting the date
console.log('-------------------------------');
let today = new Date();
console.log(today.toDateString());
console.log(today.toTimeString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());

// mathematics concepts
// pi and euler value
console.log('-------------------------------');
console.log(Math.PI);
console.log(Math.E);
//rounding values
console.log(Math.round(4.6));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));
console.log(Math.trunc(6.568));
//mathematical functions
console.log(Math.sqrt(64));
console.log(Math.pow(5, 3));
console.log(Math.abs(-250));
console.log(Math.min(1, 2, 4, 5, 6));
console.log(Math.max(1, 2, 4, 5, 6));
console.log(Math.cbrt(27));
console.log(Math.sign(-29));
console.log(Math.sin(45));
console.log(Math.cos(45));
console.log(Math.tan(45));
//random number generator
console.log(Math.random()); // >=0 and less than 1
console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 100) + 1);

console.log('-------------------------------');
function digitalClock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // adding zeros front
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  console.log(`${hours} : ${minutes} : ${seconds}`);
}
digitalClock();

//random quotes generator
console.log('-------------------------------');

let quotes = [
  {
    quote: 'Life isn’t about getting and having, it’s about giving and being.',
    author: 'Kevin Kruse',
  },
  {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
    author: 'Napoleon Hill',
  },
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
    author: 'Robert Frost',
  },
  {
    quote: 'I attribute my success to this: I never gave or took any excuse.',
    author: 'Florence Nightingale',
  },
  {
    quote: 'You miss 100% of the shots you don’t take.',
    author: 'Wayne Gretzky',
  },
  {
    quote:
      'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
    author: 'Michael Jordan',
  },
  {
    quote:
      'The most difficult thing is the decision to act, the rest is merely tenacity.',
    author: 'Amelia Earhart',
  },
  {
    quote: 'Every strike brings me closer to the next home run.',
    author: 'Babe Ruth',
  },
  {
    quote: 'Definiteness of purpose is the starting point of all achievement.',
    author: 'W. Clement Stone',
  },
  {
    quote: 'We must balance conspicuous consumption with conscious capitalism.',
    author: 'Kevin Kruse',
  },
  {
    quote: 'Life is what happens to you while you’re busy making other plans.',
    author: 'John Lennon',
  },
  {
    quote: 'We become what we think about.',
    author: 'Earl Nightingale',
  },
];
function randomQuote() {
  let index = Math.floor(Math.random() * quotes.length);
  let displayQuote = quotes[index];
  console.log(displayQuote);
}
randomQuote();

//finding today's and tomorrow's date
let todayDate = new Date();
let tomorrowDate = new Date(today);
tomorrowDate.setDate(today.getDate() + 1);
console.log(`Today: ${todayDate.toLocaleDateString()}`);
console.log(`Tomorrow: ${tomorrowDate.toLocaleDateString()}`);

//finding the past date
console.log('-------------------------------');
function getPastDate(daysAgo) {
  let toDay = new Date();
  let past = new Date(toDay);
  past.setDate(today.getDate() - daysAgo);
  return past;
}
console.log(`The date before 5 day was: ${getPastDate(5).toDateString()}`);

// getting the start of the day
function startOfday(date) {
  let start = new Date(date);
  start.setHours(0, 0, 0, 0);
  return start;
}
let todays = new Date();
console.log('Start of the day: ' + startOfday(todays));

// Write a function daysLeftInYear() that returns how many days are left until 31st Dec of the current year.
function daysLeftInYear() {
  let todayDate = new Date();
  let endOfYear = new Date(todayDate.getFullYear(), 11, 31);
  let timeDiff = endOfYear - todayDate;
  let millisecondsPerDay = 1000 * 60 * 60 * 24;
  let daysLeft = Math.ceil(timeDiff / millisecondsPerDay);
  return daysLeft;
}
console.log(daysLeftInYear());

// how old your date of birth is ??
function calculateAge(dob) {
  let todayDate = new Date();
  let birthdayDate = new Date(dob);
  let years = todayDate.getFullYear() - birthdayDate.getFullYear();
  let months = todayDate.getMonth() - birthdayDate.getMonth();
  let days = todayDate.getDate() - birthdayDate.getDate();
  if (days < 0) {
    months -= 1;
    days += new Date(
      todayDate.getFullyear(),
      todayDate.getMonth(),
      0
    ).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years: years, months: months, days: days };
}
console.log(calculateAge('2004-03-23'));

// to get the day of date
function getDateDay(dobString) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let date = new Date(dobString);
  let daysIndex = date.getDay();
  return days[daysIndex];
}
console.log(getDateDay('2004-03-23'));

// generating the random opt of six digit
function optGenerator() {
  return Math.floor(100000 + Math.random() * 900000);
}
console.log(optGenerator());

// finding whether the number is prime or not using math
function isPrime(n) {
  if (n <= 1 || n % 2 === 0) return false;
  if (n === 2) return true;
  let limit = Math.sqrt(n);
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(11));

// finding the larggest number in the array
// Write a function that finds the largest number in an array without using Math.max().
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax([1, 2, 3, 4, 5, 6]));

// finding the area of the circle
function findAreaCircle(radius) {
  let area = Math.PI * radius * radius;
  return area.toFixed(2);
}
console.log(findAreaCircle(5));
// Number Guessing Game
// Generate a random number between 1 and 100, and let the user guess it until correct. Print "Too High", "Too Low", or "Correct".
function numberGuessGame() {
  let randomNumber = Math.floor(1 + Math.random() * 100);
  let userGuess = Number(prompt('Enter your guess: '));
  let attempt = 1;

  while (userGuess !== randomNumber) {
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      console.log('Please enter a valid number (0-100)');
      attempt--;
    } else if (userGuess > randomNumber) {
      console.log('Your guess is too high!');
    } else if (userGuess < randomNumber) {
      console.log('Your guess is too low!');
    }
    userGuess = Number(prompt('Enter your guess (1-100): '));
    attempt++;
  }

  console.log('Correct, The number was: ' + randomNumber);
  console.log('You did it in : ' + attempt + ' attempt(s).');
}
numberGuessGame();

// current time generator
function currentTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return `${hours} : ${minutes} : ${seconds}`;
}
console.log(currentTime());
