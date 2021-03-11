// The symmetric difference between two sets results in a third set with the elements, from both sets, that are not present on the other.

// For example, if you calculate the symmetric difference between {1, 2, 3} and {2, 3, 4}, the output will be {1, 4}.

// Find the Symmetric Difference between two arrays

function arrayDiff(a, b) {
  return [
      ...a.filter(i => !b.includes(i)),
      ...b.filter(i => !a.includes(i))
  ];
}

const a = [ 1, 2, 3, 4, 5 ];
const b = [ 4, 5, 6 ];

const symmetricDifference = arrayDiff(a, b);
console.log(symmetricDifference);

// Which gives you:

// [1,2,3,6]

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function arrayDiff(a, b) { //creating a function and naming it arrayDiff.  That function has two parameters, called a & b, being passed in when the function is invoked. REMEMBER: You can name a & b WHATEVER you want.  a & b are just the generic names (parameters) that we are choosing to call two things that the user will pass in when invoking the function (using it).
  return [  //directly returning in an array, the items, deconstructed using the spread operator, and then filtered to check against the other.
      ...a.filter(i => !b.includes(i)),  //array a, checked against the items in array b and put into the new array using the ...spread operator.
      ...b.filter(i => !a.includes(i))  //Ditto but opposite
  ];
}

const a = [ 1, 2, 3, 4, 5 ];
const b = [ 4, 5, 6 ];

const symmetricDifference = arrayDiff(a, b);
console.log(symmetricDifference);

// Which gives you:

// [1,2,3,6]

