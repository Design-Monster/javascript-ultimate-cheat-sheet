// Put all unique items from given arguments into an array, in the same order they were in (just omitting duplicates).  This will be a single array.

function uniqueInOrder(somethingIterable){
  const newUniqueInOrderSet = new Set(somethingIterable);

  return [...newUniqueInOrderSet];
}

let anArrayOfNumbers = [1,1,2,5,10,12,1,2,5,3,4];

let output = uniqueInOrder(anArrayOfNumbers);
console.log(output);

// Which gives you:

// [1,2,5,10,12,3,4]


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function uniqueInOrder(somethingIterable){  //creating a function and naming it uniqueInOrder.  That function has one parameter, called somethingIterable, whose value will be passed in when the function is invoked. REMEMBER: You can name somethingIterable WHATEVER you want - we called it someArray in the for-loop-with-includes.js example.  somethingIterable is just the generic name (parameter) that we are choosing to call the thing that the user or trigger will pass in (argument) when invoking the function.
  const newUniqueInOrderSet = new Set(somethingIterable); //creating a new constant called newUniqueInOrderSet and making it a Set. A set is an object, not an array.  It takes all unique values out of an array AUTOMATICALLY and places them in an object. Very cool.
  return [...newUniqueInOrderSet]; //return the values within that Set object and place them into an array, leaving behind the object part from set.  The ...spread operator allows us to do this by taking {1,2,5,10,12,3,4} - the value of newUniqueInOrderSet - and stripping out the items.
}

let anArrayOfNumbers = [1,1,2,5,10,12,5,3,4];

let output = uniqueInOrder(anArrayOfNumbers);
console.log(output);

// Which gives you:

// [1,2,5,10,12,3,4]
