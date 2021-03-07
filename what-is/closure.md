A closure is a function that captures variables from its lexical scope. In simple words, the closure remembers the variables from the place where it is defined, no matter where it is executed.

	function outerFunc() {
  	// the outer scope
  	let outerVar = 'I am outside!';

  	function innerFunc() {
    	// the inner scope
      console.log(outerVar); // => logs "I am outside!"
 	  }
	innerFunc();
}

outerFunc();


Common use cases for closures:
Giving objects data privacy.  
Currying
Callbacks

