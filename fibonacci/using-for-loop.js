// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// After a quick look, you can easily notice that the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3 or in maths:

function fibonacci(number) {
  let previous= 0; 
  let next = 1;

  for (let i = 0; i < number; i++) {
    let temp = next;
    next = previous + next;
    previous = temp;
  }
  return previous;
}

let output = fibonacci(12);
console.log(output);