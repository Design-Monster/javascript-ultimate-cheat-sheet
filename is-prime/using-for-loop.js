// Check if number is a prime number (divisible only by 1 and itself)

function isThisNumberPrime(num) {
  if (num <= 1) return "No";
  if (num === 2) return "Yes";
  let num2 = Math.sqrt(num);//num2 is the square root of num
  for (let i= 2; i <= num2; i++) { //note that we are working now with the square root
    if (num2 % i === 0) {
      return "No";
    }
  }
  return "Yes";
}

console.log('Prime number? ' + isThisNumberPrime(100));