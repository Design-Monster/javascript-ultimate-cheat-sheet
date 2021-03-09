// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
// After a quick look, you can easily notice that the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3 or in maths:

function fibonacci(num) {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(12));
