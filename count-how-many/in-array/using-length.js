//count how many things are in the array

function countHowManyInArray(someArray) {
  return someArray.length
}

let anArrayOfThings = [
  "thing1",
  3,
  4,
  5,
  "thing2",
  "otherThing"
]

let output = countHowManyInArray(anArrayOfThings); 
console.log(output);

// Which gives you:

// 6

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function countHowManyInArray(someArray) { //creating a function and naming it countHowManyInArray.  Giving it a parameter named someArray
  return someArray.length  //return someArray's length
}

let anArrayOfThings = [
  "thing1",
  3,
  4,
  5,
  "thing2",
  "otherThing"
]

let output = countHowManyInArray(anArrayOfThings); 
console.log(output);

// Which gives you:

// 6