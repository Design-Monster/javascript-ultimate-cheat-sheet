// Create a function that returns the sum of the two lowest positive numbers given an array of minimum integers.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(iterableNumbers) {
  let smallestNumber = Math.min(...iterableNumbers.filter(i => i != 0));
  let secondSmallestNumber = Math.min(...iterableNumbers.filter(i => i && i !== smallestNumber && i != 0));  

  return smallestNumber + secondSmallestNumber
}

let answer = sumTwoSmallestNumbers([1.8,9,7,11,3]);
console.log(answer);

//Which gives you this:

// 4.8 because 1.8 + 3 = 4.8

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function sumTwoSmallestNumbers(iterableNumbers) {
  let smallestNumber = Math.min(...iterableNumbers.filter(i => i != 0)); // using Math.min, iterate through the deconstructed array (deconstructed by using the ...spread operator), then filter i (the parameter of the callback function in between the parenthesis - (i => i != 0)). 
  
  //i is the parameter of the callback function because (i => i != 0) is the same as:

  // ...iterableNumbers.filter( function(i) {  
      //if (i != 0) 
      //return i 
  // });

  // you can see here that i is JUST A PARAMETER OF A FUNCTION, just like iterableNumbers is JUST a parameter of a a function above.  We are just writing it shorthand without the word function by using the => arrow function.

  //so it checks if i is zero and if not it assigns the value of i to the variable smallestNumber.

  let secondSmallestNumber = Math.min(...iterableNumbers.filter(i => i && i !== smallestNumber && i != 0));  //Ditto.  The exact same thing except that you can see that it also checks to make sure it's not equal to the value we just set in smallestNumber.

  return smallestNumber + secondSmallestNumber  //return sum of those two numbers
}

let answer = sumTwoSmallestNumbers([1.8,9,7,11,-3]);
console.log(answer);

//Which gives you this:

// 4.8 because 1.8 + 3 = 4.8