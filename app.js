
//Edabit Problem:
//
//Capitalize The First Letter Of Each Word
//
//Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
function makeTitle(str) {
  var strArray = str.split(' ');
  var resultArray = strArray.map(function(item){
    var firstLetterUpCase = item.substring(0,1).toUpperCase();
    var wordEndLowCase = item.substring(1).toLowerCase();
    var newItem = firstLetterUpCase + wordEndLowCase;
    console.log(newItem);
    return newItem;
  });
  console.log(resultArray);
  return resultArray.join(' ');
}

var output = document.querySelector('#problem1');
document.body.appendChild(output);
output.textContent = makeTitle('We like LADy');


//Edabit Problem:
//
//Write a function that takes 4 string arguments. You will be comparing the first string to the 3 next strings. Verify if the 1st string starts with the 2nd string, includes the 3rd string, and ends with the 4th string. If the 1st string passes all the checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.".
var fourStringArguments = {
  mainStr: 'My head is made of mud.',
  head: 'My head',
  body: 'is made',
  tail: 'of mud.',
  varifySubstrs: function(mainStr, head, body, tail) {
    if( mainStr.startsWith(head) && mainStr.endsWith(tail) && mainStr.includes(body)){
      return 'My head, body, and tail.';
    } else {
      return 'Incomplete.';
    }
  }
};

var output2 = document.querySelector('#problem2');
document.body.appendChild(output2);
output2.textContent = fourStringArguments.verifySubstrs;



//Edabit Problem:
//
//Factor Tractor:
//
//Write a program to find all the prime factors of a given number.  The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composit and should not be included in your output array.

//SOLUTION FROM STACKOVERFLOW!!!
function primeFactorize(num) {
  var primeFactorsArray = [];
  var isPrime;
  //find divisors starting with 2
  for (var i = 2; i <= num; i++){
    if (num % i === 0){
      //check if divisor is prime
      for(var j = 2; j <= i/2; j++){
        if(i % j === 0) {
          isPrime = false;
        } else {
          isPrime = true;
        }
      }

      if (isPrime === true){
        //divide integer by prime factor and factor store in array primeFactorsArray
        num /= i;
        primeFactorsArray.push(i);
      }
    }
  }
return primeFactorsArray;
}


//Edabit Problem:
//
//Absolutely submit
//
// Take an array of integers (positive or negaitve both) and return the sum of the absolute value of each element
function getAbsSum(arr){
  var absoluteValues = arr.reduce(function(a,b){
    return Math.abs(a) + Math.abs(b);
  }, 0);
  console.log(absoluteValues);
}

var numberArray = [-1];
var numberArray2 = [-1, 40, 23, -16];

getAbsSum(numberArray2);


//Edabit Problem:
//
//IPv4 Validation
//
// Create a function that takes a string (IPv4 address in standard dot-decimal format) and returns true of the Ip is valid and false if it is not.
function isValidIP(str) {
  if(str.includes(' ')){
    return false;
  } else {
    var octetArray = str.split('.');
    var result = octetArray.filter(function(x) {
      console.log(x[0]);
      return x >= 0 && x <= 255 && x[0] !== 0;
    });
    console.log(result);
    if(result.length === 4){
      return true;
    } else {
      return false;
    }
  }
}

console.log(isValidIP('19.255 .0.126'));













//
