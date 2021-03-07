
THIS. IN JS

Can mean many things - it comes down to function invocation (how you call your function).  So….it depends.

GLOBAL CONTEXT = outside a function
Usually refers to window in the browser, or the global object.

FUNCTION CONTEXT = inside a function
Essentially its value depends on the binding of the current execution context - MEANING, it refers to the object it belongs to.



“Ryan went to the fridge because he was hungry.”

he = this which = Ryan, basically.

let person = {
	firstName = ‘Ryan’,
	lastName = “Roderick’,
	fullName = function() {
		console.log(this.firstName + this.lastName);
		console.log(person.firstName + person.lastName);
 // THESE WILL EQUAL THE SAME THING
	}
}

person.fullName();
