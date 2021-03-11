// Fibonacci sequence, is a sequence characterized by the fact that every number after the first two is the sum of the two preceding ones.

function fibonacci(number) {
  let previous= 0;
  let next = 1;

  for (let i = 0; i < number; i++) {
    let temp = next;
    next = previous + next;
    console.log(next + ' + ');
    previous = temp;
    console.log(previous + ' = ');
  }
  return previous;
}

let output = fibonacci(12);
console.log('Final: ' + output);


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function fibonacci(number) { //creating a function and naming it fibonacci.  fibonacci has a parameter named number.
  let previous = 0; //creating a variable and naming it previous and setting its initial value to 0
  let next = 1; //creating a variable and naming it next and setting its initial value to 1

  for (let i = 0; i < number; i++) { //iterating through the values of number - for every iteration set variables
    let temp = next;  //creating a variable and naming it temp and setting it equal to next (which is set equal to 1 above) - so setting temp = 1
    next = previous + next;  // updating the value of next with the last value of previous and next (from the last iteration over the number parameter)
    previous = temp; //setting previous to the last value of temp (which is actually the last value of next) 
  }
  return previous;  //returning previous as a final answer
}

let output = fibonacci(12);
console.log(output);

//confusing as shit but it works