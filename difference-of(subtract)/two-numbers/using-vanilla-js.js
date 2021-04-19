function subtractTwoNumbers(num1, num2) {
  return num1 - num2
}

let answer = subtractTwoNumbers(10, 5);

console.log(answer);
// Which gives you:

// [5]

console.log(subtractTwoNumbers(20, 10));
// Which gives you:

// [10]


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function subtractTwoNumbers(num1, num2) {  // Creating a function and naming it "subtractTwoNumbers" and giving it 2 parameters of num1 and num2. 
  return num1 - num2 // returning the values of the 2 parameters (-) from each other. 
}

let answer = subtractTwoNumbers(10, 5); // Creating a variable using let (which means it can change) which we named "answer". We are setting it equal to the value of the function subtractTwoNumbers. We are passing in the value of 10 for the parameter of num1 and 5 for the parameter of num2. 10 and 5 are arguments. Arguments are the specific value of the parameters passed in the function.

console.log(answer); // We are console logging the value of the variable "answer".

console.log(subtractTwoNumbers(20, 10)); // We are console logging the functions final value with set arguments of 20 and 10.