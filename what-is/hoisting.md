What is ‘hoisting’ in javascript?

When javascript runs, it initializes the variables FIRST (always with a value of undefined), and then executes the rest of the code in the file.  This is called hoisting.  It moves all variables up in scope so that they can be used.

console.log(hoist); // Output: undefined

var hoist = 'The variable has been hoisted.';

	Actually runs in the js interpreter as:

	var hoist; //declares a variable

console.log(hoist); //Output: undefined, because it’s not defined up above

hoist = 'The variable has been hoisted.';   //defines the variable after it has been called, thus undefined

	So it’s ALWAYS best to declare and define a variable before use:

var hoist = 'The variable has been hoisted.';

	console.log(hoist); // Output: ‘The variable has been hoisted’;
