function addTwoNumbers(num1, num2) {
  return num1 + num2 
} 

let answer = addTwoNumbers(5, 15);
console.log(answer);
// Which gives you:

// [20]

console.log(addTwoNumbers(10, 20));
// Which gives you:

// [30]


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:



function addTwoNumbers(num1, num2) { //creating a function named addTwoNumbers and addTwoNumbers has the parameters of num1 and num2
  return num1 + num2                 //returning the value of the parameters added (+) together
} 


let answer = addTwoNumbers(5, 15); // creating a variable using let(which means it can change) and naming that variable "answer". We are setting it equal to the value of the function addTwoNumbers(). We are passing in the value of 5 for the parameter of num1 and 15 for the parameter of num2. 5 and 15 are arguments. Arguments are the specific value of the parameters passed in the function. 

console.log(answer); // We are console logging the value of the variable "answer".
// Which gives you:

// [20]


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

console.log(addTwoNumbers(10, 20)); // We are console logging the functions final value with set arguments of 10 and 20. ?
