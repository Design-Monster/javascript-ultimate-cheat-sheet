// duplicate a given array

function duplicate(array) {
  return array.concat(array);
}

let sampleArray = [1, 2, 3, 4, 5];

let output = duplicate(sampleArray);
console.log(output); 

// Which gives you:

// [1,2,3,4,5,1,2,3,4,5]


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function duplicate(array) {  //creating a function and naming it duplicate.  duplicate has a parameter named array.
  return array.concat(array);  //then returning array which is joined with another instance of array (itself) using concat.
}

// this is the same as:

// const duplicate = (array) => array.concat(array);

let sampleArray = [1, 2, 3, 4, 5];

let output = duplicate(sampleArray);
console.log(output); 

// Which gives you:

// [1,2,3,4,5,1,2,3,4,5]