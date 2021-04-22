function addNewDataToExistingArray(data, existingArray) {
  existingArray.push(data);
  return existingArray
}

let newData = 25;
let array = [50, 25, 10];

console.log(addNewDataToExistingArray(newData, array));


// // Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// // Breakdown:

function addNewDataToExistingArray(data, existingArray) { // Creating a function named "addNewDataToExistingArray"
  existingArray.push(data); // Using "push" to add data to the end of an existing array. Push is a built in method in JavaScript for arrays.
  return existingArray // Return "existingArray" which has the new data added to the end of it with "push".
}

let newData = 25; // Creating a variable with let (meaning it can be changed) which we named "newData" and gave it a value of 25.
let array = [50, 25, 10]; // Creating a variable named "array" giving it a value of an array with 3 indexes [50, 25, 10].

console.log(addNewDataToExistingArray(newData, array)); // We are console logging the functions final value with set arguments of 25 for "newData" and [50, 25, 10] for array. Those values are set up above in the variable. 