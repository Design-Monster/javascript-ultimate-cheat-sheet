// The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:
// 1 - For every number that is divisible by 3 and 5 (or 15), console log "FizzBuzz".
// 2 - For every number that is divisible by only 3 and not 5, console log "Fizz".
// 3 - For every number that is divisible by only 5 and not 3, console .log "Buzz".

function fizzBuzz(countUpTo) {
  for(let i = 1; i < countUpTo + 1; i++) {
    if (i % 15 === 0) {  //could also be: if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    } else if (i % 3 === 0) { 
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
  }
}

fizzBuzz(100);


// https://medium.com/@endubueze00/javascript-algorithm-fizzbuzz-42129ee418e6

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function fizzBuzz(countUpTo) { //creating a variable and naming it fizzBuzz.  We are giving fizzBuzz a parameter and naming it countUpTo.
  for(let i = 1; i < countUpTo + 1; i++) {  //loop through countUpTo, starting at 1.  We do not want to start at zero because zero divided by anything is zero, so our logic would not work below.
    if (i % 15 === 0) {  //could also be: if(i % 3 === 0 && i % 5 === 0){  // (%) is the modulus operator, it will let you have the remainder of something.  So here if the value of i is divisible evenly (without any remainder) by 15 - console.log "fizzBuzz"
      console.log("FizzBuzz");
    } else if (i % 3 === 0) { // (%) is the modulus operator, it will let you have the remainder of something.  So here if the value of i is divisible evenly (without any remainder) by 3 -  - console.log "Fizz"
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz"); // (%) is the modulus operator, it will let you have the remainder of something.  So here if the value of i is divisible evenly (without any remainder) by 5 -  - console.log "Buzz"
    } else {
        console.log(i); //if not divisible evenly by any of these numbers - console.log the value of i.
    }
  }
}

fizzBuzz(100);