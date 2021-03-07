The scope is the policy or rules governing the accessibility of variables.
Local scope means within a function. Only that function can access it.
Global scope means outside of a function. All functions can access it.
Lexical scoping means that the accessibility of variables is determined by the position of the variables in the source code inside the nesting scopes. If you write it inside a function, it’s local.  Outside, global.

	function foo() {
  	  // The function scope
  	  let count = 0;
  console.log(count); // logs 0
}

foo();
console.log(count); // ReferenceError: count is not defined

Because “count” is defined within the scope of the function foo(), “count” is not available outside of that function.
