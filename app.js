
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

function isValidIP(str){
  var array = str.split('.');
  var valid = [];
  var notValid = [];
  for (var i = 0; i < array.length; i++){
    if (array[i][0] === '0' && array[i].length > 1){
      notValid.push(array[i]);
    } else if (array[i].includes('e')){
      notValid.push(array[i]);
    }
    else if (array[i] <= 255 && array[i] >= 0 && array[i].includes(' ') === false){
      valid.push(array[i]);
    }
  }
  return valid.length === 4;
}
/*
function isValidIP(str){
  var array = str.split('.');
  console.log(array);
  var filtered = array.filter(function(x){
    return x <= 255 && x >= 0 && x.includes(' ') === false;
  });
  var result = [];
  for(var i = 0; i < filtered.length; i++){
    if(filtered[i][0] === '0' && filtered[i].length > 1)
    result.push(filtered[i]);
  }
  console.log(result);
  console.log(filtered);
  console.log(filtered.length === 4);
}

isValidIP2('19.255.200.0');

function isValidIP2(str){
  var array = str.split('.');
  var valid = [];
  var notValid = [];
  for (var i = 0; i < array.length; i++){
    if (array[i][0] === '0' && array[i].length > 1){
      notValid.push(array[i]);
    } else if (array[i].includes('e')){
      notValid.push(array[i]);
    }
    else if (array[i] <= 255 && array[i] >= 0 && array[i].includes(' ') === false){
      valid.push(array[i]);
    }
  }
  console.log(valid.length === 4);
}
*/



// Edabit Problem:
//
//Reverse The Order Of A string
//
//Create a function that takes a string as its argument and returns the string in reversed order.
function reverse(str) {
  var stringToArray = str.split('');
  var reversedArray = stringToArray.reverse();
  return reversedArray.join('');
}

// console.log(reverse('Hello'));




// Edabit Problem:
//
// Purge and Organize
//
// Given an array of numbers, write a function that returns an array that:
// 1: Has all duplicate elements removed
// 2: Is sorted from least value to greatest value
function uniqueSort(arr) {
  var sorted = arr.sort(function(a,b){
    return a - b;
  });
  var newArray = [];
  for(var i = 0; i < sorted.length; i++){
    if(newArray.includes(sorted[i])===false){
      newArray.push(sorted[i]);
    }
  }
  return newArray;
}

console.log(uniqueSort([9,5,29,6,7,12,55,3,55,55,55,90]));



// Edabit Problem
//
// Find The LARGEST Number In An array
//
// Create a function that takes an array of numbers and returns the largest number in the array
function findLargestNum(arr){
  var sorted = arr.sort(function(a,b){
    return a - b;
  });
  for(i = 0; i < sorted.length; i++){
    var answer = sorted[i];
  }
  console.log(answer);
}

findLargestNum([9,3,5,'a',110]);



var klein = [1, 4, 7, 23, 95, 223, 12, 8];

function sum(arr){
  var result = klein.sort(function(a,b){
    return a - b;
  });
  return result[0];
}


console.log(sum(klein));





// How would you store your favorite foods in an array? If a restaurant's menu was also in an array, could you write a function that would check if the restaurant had some of your favorite foods?

function menuCheck(arr1, arr2){
  var matches = [];
  for(var i = 0; i < arr1.length; i++){
    for(var j = 0; j < arr2.length; j++){
      if( arr1[i] === arr2[j] ){
        matches.push(arr1[i]);
      }
    }
  }
  console.log(matches);
}

menuCheck(klein, numberArray2);




//
