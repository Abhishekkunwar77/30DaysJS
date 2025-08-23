// program to reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Abhishek"));

// without using split and reverse methods
function reverseString(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseString("Abhishek"));

// counting the number of words
function countWords(str) {
  return str.trim().split(/\s+/).length;
}
console.log(countWords("i am a billionaire"));

//replacing the word in sentence
let sentence = "JavaScript is easy to learn.";
let newSentence = sentence.replace("JavaScript", "JS");
console.log(newSentence);

// using the template literals
let name = "Abhishek";
let day = "Saturday";
let course = "JavaScript";
let currentDay = 4;
console.log(
  `Hello ${name}, today is ${currentDay}. You are learning ${course} on Day ${4}`
);

//to find the frequency of the wrods in the sentences
function freqCounter(str){
    let words=str.split(" ")
    let freq={}
    for(let word of words){
        if(freq[word]){
            freq[word]++;
        }else{
            freq[word]=1
        }
    }
    return freq
}
console.log(freqCounter("Abhishek Kunwar is a billionaire and also a fullstack developer."))


//to check the palindrome
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/\s+/g, "");
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
console.log(isPalindrome("A man a plan a canal Panama"));

//to capitalize the first letter of the word
function capitalize(sentence){
    return sentence
    .split(" ")
    .map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
}
console.log(capitalize("hello sir i am  a billionaire"))

//counting the vowels in the word
function countVowels(str){
    let vowels='AEIOUaeiou'
    let count=0;
    for(let i of str){
        if(vowels.includes(i)){
            count++;
        }
    }
    return count
}

console.log(countVowels("Javascript"))

// finding the longest word in the  sentence 
function findLongest(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  for (let i of words) {
    if (i.length > longest.length) {
      longest = i;
    }
  }
  return longest;
}
console.log(findLongest("I am learning js"));

// counting  the number of occurance
function countOccurance(sentence,target){
    let words=sentence.toLowerCase().split(/\s+/)
    target=target.toLowerCase()
    let count=0
    for(let i of words){
        if(i===target){
            count++;
        }
    }
    return count
}
console.log(countOccurance("I am learning js and js is easy","js"))


// extracting the number form the string
function extractNumber(str){
    return str.match(/\d+/g) || []
}
console.log(extractNumber("Hello i have 12 dozen of pencil and 100000000 coin."))

//replacing the spaces with underscore in sentence
function replaceSpaces(str){
    return str.replaceAll(" ","_")
}
console.log(replaceSpaces("i am a billionaire"))

console.log(typeof NaN)
//output : number 