
A for loop allows a program (a function) to execute the same code over and over as long as the condition is true.  It will ONLY stop when the condition becomes false.

A “for loop” has three expressions, located inside the parentheses and separated by a semicolon ;
The three expressions are:

1 - an initialization starts the loop and can also be used to declare the iterator variable.

for (let program = 5; program < 11; program++) {
  console.log(program);
}

2 - a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.

for (let program = 5; program < 11; program++) {
  console.log(program);
}

3 - an iteration statement is used to update the iterator variable on each loop.

for (let program = 5; program < 11; program++) {
  console.log(program);
}

The typical “for loop” includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator variables can have any name, but it’s best practice to use a descriptive variable name.

If you wanted to loop through the full contents of an array, you would write the for loop stopping condition using .length:

for (let i = 0; i < array.length; i++) {
  console.log(program);
}
