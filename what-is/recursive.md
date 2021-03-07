
What is recursive in JS?

 A function that calls itself is called a recursive function. A recursive function must have a condition to stop calling itself. Otherwise, the function is called indefinitely.

	function countDownFrom(number) {
	  if (number === 0) {
	  return;
	  }
    	countDownFrom(number - 1);
}

countDownFrom(5);
// 5
// 4
// 3
// 2
// 1

This technique can be used in place of “for loops” sometimes. This is the same function in a for loop instead:

	function countDownFrom(number) {
	  for (let i = number; i > 0; i--) {
	  console.log(i);
	  }	
}

countDownFrom(5);
// 5
// 4
// 3
// 2
// 1

