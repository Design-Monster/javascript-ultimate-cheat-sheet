// duplicate a given array

const duplicate = (arr) => [...arr, ...arr];

// it is the same as:

// function duplicate(arr) {
//   return [...arr, ...arr]
// }

let output = duplicate([1, 2, 3, 4, 5]); 
console.log(output);

// Which gives you:

// [1,2,3,4,5,1,2,3,4,5]


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

const duplicate = (someArray) => [...someArray, ...someArray]; // creating a constant and naming it duplicate. Setting duplicate equal to a function with the parameter someArray and returning the items inside some array, times two, into a new array.

// it is the same as:

// function duplicate(someArray) {
//   return [...someArray, ...someArray]
// }

let output = duplicate([1, 2, 3, 4, 5]); 
console.log(output);

// Which gives you:

// [1,2,3,4,5,1,2,3,4,5]

