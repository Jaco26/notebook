console.log('sourced!');

// Regular Expression:
// "a sequence of characters that defines a pattern that can be used to match that pattern inside of another string"

var str = 'Is this This?';

// JavaScript has two ways to create a RegEx

// Method #1 - the constructor method
// var regex = new RegExp()
// then we pass in the pattern we're looking for.
// It's important to understand that this is a pattern, not a string.  So what we're looking for here, is a lowercase 'i' followed by a lowercase 's'

//var regex = new RegExp('is');

// Regular Experessions provide us a handfull of methods to use to find our pattern and the first one is test().  The test method takes a the variable str as an argument.  It returns 'true' or 'false'

// console.log(regex.test(str));

// Method #2 - the literal regular expression
// we delimit a regular expression literal, we use two forward slashes '//' and then we pass in the pattern that we're looking for
var regex = /is/;

console.log(regex.test(str));

// if we wanted a bit more information about our match, we can use the 'execute' method on a regular Expression
console.log(regex.exec(str));
// this will give us: the match that was found; its index '5'; and the input (in this case 'str')


// Regular Expressions also give us a series of flags that we can use to identify additional parameters of our pattern.  For example, the 'global flags'

// in a regEx literal '/is/g' add on a 'g' at the end
// in a regEx constructor, var x = new RegExp('is', 'g'), it's just passed in as a string as the second argument

regex = /is/g;

// So now when run this, we're actually gonna get the exact same result.
// HOWEVER, if we run it twice, what we'll see is that
console.log(regex.exec(str));
console.log(regex.exec(str));

  // RESUME VIDEO AT 2:37








//
