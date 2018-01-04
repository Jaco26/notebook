console.log('third-app.js for Edabit problems');

// Return The Objects Keys And Values
//
// Create a function that takes an object and returns the keys and values as seperate arrays
function keysAndValues(object) {
  var answer = [[],[]];
  var keys = Object.keys(object);
  // 'for...in' statement iterates over the enumerable properties of an object.  For each distinct property, statements can be executed
  // a different property name is assigned to the variable 'x' for every iteration of the loop
  for(var x in object){
    // object[x] utilizes bracket notation to call a given 'key' –– by substitution 'x' for the key name –– in the object referenced in 'for...in' parentheses.  Doing this will return the value for a given key.
    var value = object[x];
    answer[1].push(value);
  }
  keys.forEach(key => answer[0].push(key));
  return answer;
}
keysAndValues({key1: true, key2: false, key3: undefined});
keysAndValues({1: null, 2: null, 3: null});





// Compounding Letters
//
// Create a function that takes a string and returns a new string with each unique character accumulating by +1 seperated by a dash.  Capitalize the first character of each set.
// "abcd" ––> "A-Bb-Ccc-Dddd"


function accum(str) {
  var arr = str.split('');
  var box = [];
  arr.forEach(function(char, index){
    box.push(char.repeat(index+1));
    box.map(function(x, i, a){
      console.log(a[i].toUpperCase());
    });
  });
  return box;
}

console.log(accum("abcd"));
