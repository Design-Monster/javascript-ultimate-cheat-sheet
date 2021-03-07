// Find the Symmetric Difference between two arrays

function arrayDiff(a, b) {
  let differenceOfA = a.filter(i => !b.includes(i));
  let differenceOfB = b.filter(i => !a.includes(i));
  let symmetricDifference = [...differenceOfA, ...differenceOfB];
  return symmetricDifference;
}

const a1 = [ 1, 2, 3, 4, 5 ];
const b1 = [ 4, 5, 6 ];

const symmetricDifference = arrayDiff(a1, b1);
console.log(symmetricDifference);

// Which gives you:

// [1,2,3,6]

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function arrayDiff(a, b) {  //creating a function and naming it arrayDiff.  That function has two parameters, called a & b, being passed in when the function is invoked. REMEMBER: You can name a & b WHATEVER you want.  a & b are just the generic names (parameters) that we are choosing to call two things that the user will pass in when invoking the function (using it).  
let differenceOfA = a.filter(i => !b.includes(i)); //creating a variable and naming it differenceOfA.  Setting that variable equal to THE RESULTS of:  Parameter a (being passed in by the user at invocation of the function) getting filtered by using the .filter method - (a.filter). The .filter method is just a BUILT-IN for loop that removes certain values and then spits back out a new array with the remaining values. 

  //The stuff happening inside the parenthesis is a callback - remember a callback is just a function that is being called by another function.  So (i => !b.includes(i)) is JUST A FUNCTION.  
  
  // i is the first argument of the (callback) function. 

  // a.filter(i => !b.includes(i));

  // is the same exact thing as this:

  // a.filter( function(i) {
      //return !b.includes(i)
  // });

  // which is actually the same thing as this:

  // a.filter( function(i) {
    //if (!b.includes(i)) {  <- b does NOT contain any same i as a
      // return true
    // }
  // })
  
  // i here is what we're choosing to name EACH element in the array of a, JUST LIKE A FOR LOOP.  It's the same as a & b, just a parameter.  The loop will continue as long as there are i left to go over.  Again, like a & b above, we can name this whatever we want.  We can call each item x - (x => !b.includes(x)) or item, (item => !b.includes(item)).  It's only a placeholder representing that there is an existing thing and that the for loop (.filter) should continue. 
  
  // The => indicates an arrow function. What the fuck is that? Well, it's a shorthand way of saying this:
  
  // a.filter( function(i) {
      //return !b.includes(i)
  // });

  // Again, this:
  
  // a.filter(i => !b.includes(i));

  // equals the same thing.

// The second argument (!b.includes(i)) is your boolean (think of it as the if statement in the examples above).  Here, we are returning true as long as the array of a does not include anything in the array of b.

  let differenceOfB = b.filter(i => a.indexOf(i) === -1);  // Ditto but for array b
  let symmetricDifference = [...differenceOfA, ...differenceOfB]; // combining the i from each array into one single array.  The ...syntax takes the elements OUT OF the array without bringing the array part with it.  Because differenceOfA and differenceOfB are both arrays, at this point we have two arrays.  We want one. So we pull out the values of the two arrays and combine them into one array using the ...spread operator.
  return symmetricDifference;  // We then return that value, or the one array.  YOU MUST RETURN.  Without the return, nothing happens.  Think of it like this:  2 + 2.  We know what that equals.  But we won't ever be able to share that knowledge because it doesn't actually equal anything.  2 + 2 = 4 RETURNS the value, allowing us to share that with other people.  Without the return, it's just a math problem without an equals sign.
}


const a1 = [ 1, 2, 3, 4, 5 ];  // making a variable named a1 and setting it equal to an array.
const b1 = [ 4, 5, 6 ];  // making a variable named b1 and setting it equal to an array.

const symmetricDifference = arrayDiff(a1, b1);  // making a variable named symmetricDifference and setting it equal to the function we've built:  ArrayDiff.  We then give the parameters of a & b REAL values (called arguments) and the function plugs those values in to the inner code and spits out (RETURNS) a final value.  In this case it is a single array with the symmetric difference between the two arrays.
console.log(symmetricDifference);  // Console log it to see it

// Which gives you:

// [1,2,3,6]