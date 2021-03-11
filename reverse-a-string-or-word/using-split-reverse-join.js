// Reverse a string.

function reverseString(string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
}

let output = reverseString("hello");
console.log(output);

//Which gives you:

// "olleh"

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function reverseString(string) {
  // Step 1. Use the split() method to return a new array
  let splitString = string.split(""); //The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array. Here we are creating a variable named splitString and setting it equal to the value of the parameter string, split between the quotes (""), which results in:

  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  let reverseArray = splitString.reverse(); // The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first. Here we are creating a variable and naming it reverseArray and setting it equal to the result of the variable splitString that has had the reverse method called on it, which results in:
  
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  let joinArray = reverseArray.join(""); //The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. Here we are creating a new variable and naming it joinArray and setting it equal to the results of reverse array that has had the method join() called on it, which results in:

  // "olleh"
  
  //Step 4. Return the reversed string
  return joinArray;
}

let output = reverseString("hello");
console.log(output);

//Which gives you:

// "olleh"
