//This is the best way

function arrayDiff(a, b) {
  const first = new Set(a);
  const second = new Set(b);

  return [
      ...a.filter(i => !second.has(i)),
      ...b.filter(i => !first.has(i))
  ];
}

// And you would use it like this:

let arrayOne = [1,2,1,2,3,4,"Hello","Hi",7,8,9];
let arrayTwo = [1,2,3,"Hi",12,17,19,8];

const symmetricDifference = arrayDiff(arrayOne, arrayTwo);
console.log('These do NOT appear in both: ' + symmetricDifference);

// Which gives you:

// [1,2,3,6]


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

// function arrayDiff(a, b) { //creating a function and naming it arrayDiff.  That function has two parameters, called a & b, being passed in when the function is invoked. REMEMBER: You can name a & b WHATEVER you want.  a & b are just the generic names (parameters) that we are choosing to call two things that the user will pass in when invoking the function (using it).  
//   const first = new Set(a);  //creating a constant and naming it first.  first is a new Set, which is an object that is a collection of unique items, no repeats. We are pre-populating it with the data of a (parameter) which will be passed in when invoked. 
//   const second = new Set(b); //ditto, except for b

//   return [ //here, we return an array that uses the ...spread operator to deconstruct the array of a and filter it against the SET object that we made above of second - which is really just a copy of the b parameter that was passed in. If a does not have any items (i) from the SET second, return that value in this new array. Ditto for the second line in the return, except opposite. If b parameter does not have anything from SET object first, return that value in this new array.  
//       ...a.filter(i => !second.has(i)),
//       ...b.filter(i => !first.has(i))
//   ];
// }

// // And you would use it like this:

// const a1 = [ 1, 2, 3, 4, 5 ];
// const b1 = [ 4, 5, 6 ];

// const symmetricDifference = arrayDiff(a1, b1);
// console.log(symmetricDifference);

// // Which gives you:

// // [1,2,3,6]