// Fibonacci sequence, is a sequence characterized by the fact that every number after the first two is the sum of the two preceding ones.

function fibonacci(number) {
  if (number <= 1) {
    return number;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log(fibonacci(12));


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function fibonacci(number) { //creating a function and naming it fibonacci.  fibonacci has a parameter named number.
  if (number <= 1) {  //if number parameter is less than or equal to 1, return number (so 0 or 1)
    return number;
  } else {  //otherwise, return this function recursively (fibonacci), so that it iterates over the correct sequence of last number plus next number = next number
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log(fibonacci(12));



