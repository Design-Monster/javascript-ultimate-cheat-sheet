VAR
A "var" variable can be re-declared and updated. "Var" can be accessible anywhere in function. 
"Var" variables are function-scoped because their visibility is limited to the function.
When you try to use it outside of the function, you’ll get an error

LET
A "let" variable be be updated but not re-declared. Let variables are made to be updated. 
"Let" can only be accessible inside the block where they are declared.

CONST
A "const" variable cannot be updated or changed. Unless you create a const variable that is an object, the attributes of that object can be updated.
"Const" can only be accessible inside the block where they are declared.

Let and const have a block scope but var has function scope. 

Function scope is within the function.

Block scope is within curly brackets.
 