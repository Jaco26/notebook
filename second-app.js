console.log('sourced');



// Edabit Problem
//
// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.
//
//
// Create a function that takes a stirng, transforms all but the last four characters into '#' and returns the new masked string
//
// note: this function must accept a string of any length
function maskify(str) {
  var strToArray = str.split('');
  for(var i = 0; i < str.length-4; i++){
    strToArray.splice(i,1,'#');
  }
  return strToArray.join('');
}

console.log(maskify('4043 2304 0355 1183'));

/*
var result = [];
for(var i = 0; i < charArray.length-4; i++){
  var spliced = charArray.splice(0,1,'#');
  result.push(spliced);
}
console.log(result.join(''));
*/




// Edabit Puzzle
//
// Create a function that takes a number as an argument.  Add up all the numbers from 1 to the number you passed to the function.  For example, if the input is 4 then your function should return 10 becuase 1+2+3+4=10.

function addUp(num) {
  var numberArray = [];
  for(var i = 1; i <= num; i++){
    numberArray.push(i);
  }
  return numberArray.reduce(function(a,b){
    return a+b;
  });
}

console.log(addUp(26));




// Edabit Puzzle
//
// Replace Letters With Position In Alphabet
//
// Create a function that takes a string and replaces each letter with its appropriate position in the alphabet
function alphabetIndex(str) {
  var string = str.toLowerCase().split('');
  var alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');
  var result = [];

  var filtered = [];
  for(var x = 0; x < string.length; x++){
    for(var y = 0; y < alphabet.length; y++){
      if (string[x] === alphabet[y] && string[x] !== ' '){
        filtered.push(string[x]);
      }
    }
  }

  for(var i = 0; i < filtered.length; i++){
    result.push(alphabet.indexOf(filtered[i]) + 1);
  }
  return result.join(' ');
}

console.log(alphabetIndex('Hello'));


/*

Here A Similar Solution From Edabit

function alphabetIndex(str) {
  var alphaArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 	var returnArr = [];
  for(var i = 0; i < str.length; i++) {
    if(alphaArr.indexOf(str[i].toLowerCase()) !== -1) {
      returnArr.push(alphaArr.indexOf(str[i].toLowerCase()) + 1);
    }
  }
  return returnArr.join(" ");;
*/



// Edabit Puzzle
//
// Balanced Brackets
//
// Write a function that takes a string of brackets and checks whether they are balanced or not
function isBalanced(string) {
  if(typeof string === 'undefined'){
    return undefined;
  }
  var result = [];
  for (var i = 0; i < string.split('').length; i++){
    for(var j = string.length; j >= 0; j--){
      string[i] === string[j] ? result.push(string[i]): false;
    }
  }
  return result.length === string.length? true: false;
}

console.log(isBalanced('{[()]}'));
console.log(isBalanced('{[([)]]}'));
console.log(isBalanced());



// Edabit Problem
//
// Is It Time For Milk And Cookies?
//
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa!
// Create a function that accepts a Date object and returns true if it's Christmas Eve (Dec 24) and false otherwise.  Keep in mind that JavaScripts Date month is 0 based, meaining December is the 11th month while January is 0
function timeForMilkAndCookies(date) {
  return date.getDate() === 24 && date.getMonth() === 11 ? true: false;
}



// Edabit Puzzle
//
// Check If A String Is A Palindrome
//
//  A palindrome is a word, phrase, number or other sequence of characters which reads the same backward or forward, such as madam or kayak.
//  Write a function that takes a String and determines whether it's a Palindrome or not. The function should return a boolean.

function isPalindrome(string) {
  for(var i = 0; i < string.length; i++){
    string = string.replace(' ', '');
    string = string.replace('-', '');
    string = string.replace(',', '');
    string = string.replace('!', '');
  }
  return string.toLowerCase() === string.toLowerCase().split('').reverse().join('') ? true: false;
}

console.log(isPalindrome('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'));
console.log(isPalindrome('Neuquen'));
console.log(isPalindrome('Not a palindrome'));





// Edabit Puzzle
//
// Product Of All Other Numbers
//
// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// Write a function that takes an array of integers and returns an array of the products
function getProducts(arr) {

}

console.log(getProducts([1, 2, 6, 5, 9]));
//console.log(getProducts([1, 7, 3, 4]));
//console.log(getProducts([1, 2, 3, 0, 5]));



// Edabit Puzzle
//
// Return The Highest & Lowest Numbers
//
// Create a function that accepts a string of space seperated by numbers and returns the highest and lowest number (as a string)
function highLow(str) {
  var array = str.split(' ');
  var sorted = array.sort(function(a,b){
    return a - b;
  });
  var min = sorted[0].toString();
  var max = sorted[sorted.length-1].toString();
   return max + ' ' + min;
}

console.log(highLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));




// Edabit Problem
//
// Alphabet Soup
//
// Create a function that takes a string and returns a string with its letters in alphabetical order

function AlphabetSoup(str) {
  var strToArray = str.split('');
  var alpha = Array.from('abcdefghijklmnopqrstuvwxyz');
  var sorted = strToArray.sort(function(a,b){
    return alpha.indexOf(a) - alpha.indexOf(b);
  });
  return sorted.join('');
}

console.log(AlphabetSoup("hello"));

function AlphabetSoup(str) {
  return str.split('').sort().join('');
}



// Edabit Puzzle
//
// Triple + Double = So Much Trouble
//
// Create a function that takes two integers as arguments (num1, num2) and returns true if a number repeats three times in a row at any place in num1 AND that same number repeats two times in a row in num2.
function trouble(num1, num2) {
  var one = num1.toString().split('');
  var two = num2.toString().split('');
  var longerNum;
    if(one.length > two.length){
      longerNum = one;
    } else if (one.length < two.length){
      longerNum = two;
    } else {
      longerNum = one;
    }
  var triple;
  for (var i = 0; i < longerNum.length; i++) {
    if (one[i] === one[i-1] && one[i] === one[i-2]){
      triple = one[i];
    } if (triple === one[i] && triple === one[i-1]){
        return true;
    }
  }
}

console.log(trouble(451999277,41177722899));
console.log(trouble(1222345, 12345));
console.log(trouble(12345, 12345));









//
