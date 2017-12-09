
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
    var newItem = [firstLetterUpCase+wordEndLowCase];
    console.log(newItem);
    return newItem;
  });
  return resultArray.join(' ');
}


var output = document.createElement('p');
document.body.appendChild(output);
output.textContent = makeTitle('each of tHESe words has an uppercase first letter');
