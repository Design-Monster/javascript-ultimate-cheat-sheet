function divideTwoNumbers(num1, num2) { 
  return num1 / num2
}

let answer = divideTwoNumbers(20,5);

console.log(answer);
// Which gives you:

// [4]

console.log(divideTwoNumbers(10,5));
// Which gives you:

// [2]


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:




function divideTwoNumbers(num1, num2) {  // Created a function called "divideTwoNumbers". Creating 2 parameters and naming them num1 and num2.
  return num1 / num2 // Returning the value of the 2 parameters num1 / num2.
}

let answer = divideTwoNumbers(20,5); // Creating a variable with let (meaning it can be changed) which we named answer. We are setting it equal to the value of the function "divideTwoNumbers". We are passing it the value of 20 to the parameter of num1 and 5 to the parameter of num2. 10 and 5 are now the arguments. Arguments are the specific value of the parameters passed in the function.

console.log(answer); // Console logging the variable answer.

console.log(divideTwoNumbers(10,5)); // We are console logging the functions final value with set arguments of 10 and 5.