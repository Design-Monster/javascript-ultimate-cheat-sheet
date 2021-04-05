// Reverse a string.

function reverseString(string) {
  return [...string].reverse().join("");
}

let output = reverseAString("hello I am a string");
console.log(output);

//Which gives you:

// "gnirts a ma I olleh"

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function reverseString(string) {  //We are creating a function and naming it reverseAString.  reverseAString has one paramter and we are naming it string
  return [...string].reverse().join("");  //we are directly returning string, broken out using the spread operator, then reversed using the reverse method, then joined back together and turned from an array into a string using join()
}

let output = reverseAString("hello I am a string");
console.log(output);

//Which gives you:

// "gnirts a ma I olleh"