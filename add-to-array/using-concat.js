function addDataToExistingArray(data, existingArray) {
  return existingArray.concat(data)  
}

let newData = 25; 
let array = [50, 25, 10];

console.log(addDataToExistingArray(newData, array));



// // Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// // Breakdown

function addDataToExistingArray(data, existingArray) {
  return existingArray.concat(data) // Return "existingArray" which has the new data added to the end of it with "concat". Concat is a built in method in JavaScript for arrays.
}

let newData = 25; // Creating a variable with let (meaning it can be changed) which we named "newData" and gave it a value of 25.
let array = [50, 25, 10]; // Creating a variable named "array" giving it a value of an array with 3 indexes [50, 25, 10].

console.log(addDataToExistingArray(newData, array)); // We are console logging the functions final value with set arguments of 25 for "newData" and [50, 25, 10] for array. Those values are set up above in the variable. 