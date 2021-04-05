// Check if number is a prime number (divisible only by 1 and itself)

function isThisAPrimeNumber(number) {
  if (number <= 1) return "No";
  if (number === 2) return "Yes";
  let squareRootOfNumber = Math.sqrt(number);
  for (let i = 2; i <= squareRootOfNumber; i++) { 
    if (number % i === 0) {
      return "No";
    }
  }
  return "Yes";
}

console.log("Is this a prime number? " + isThisAPrimeNumber(100));

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function isThisAPrimeNumber(number) { //creating a function and naming it isThisAPrimeNumber.  We are giving isThisAPrimeNumber one parameter, and naming that parameter number.
  if (number <= 1) return "No"; //if number is less than or equal to 1, return "No"
  if (number === 2) return "Yes"; //if number is equal to the number 2, return "Yes"
  let squareRootOfNumber = Math.sqrt(number);//creating a variable and naming it squareRootOfNumber. squareRootOfNumber is the square root of the parameter number
  for (let i = 2; i <= squareRootOfNumber; i++) { //note that we are working now with the square root.  Looping through the variable squareRootOfNumber
    if (number % i === 0) {  //(%) is the modulus operator, it will let you have the remainder of something.  So here if the value of number is divisible evenly (without any remainder) by the value of i - return "No"  or false
      return "No";
    }
  }
  return "Yes"; //otherwise, return "Yes"
}

console.log(isThisAPrimeNumber(100));