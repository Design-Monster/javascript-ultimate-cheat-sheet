//Count how many things are in the array of arrays (the items, not the array sets)

function countHowManyInArrayOfArrays(someArray) {
  return someArray.flat().length
}

let anArrayOfThings = [
  [
    "thing1",
    3,
    4
  ],
  [
    5,
    "thing2",
    "otherThing"
  ]
]

let output = countHowManyInArrayOfArrays(anArrayOfThings);
console.log(output);

// Which gives you:

// 6

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function countHowManyInArrayOfArrays(someArray) {  //creating a function and naming it countHowManyInArrayOfArrays.  Giving it a parameter named someArray
  return someArray.flat().length //return the value of the parameter someArray, use .flat() to remove the first level of arrays, and then use .length to count how many items are in the new, single array.  .flat and .length are both available array methods for anyone to use.
}

let anArrayOfThings = [
  [
    "thing1",
    3,
    4
  ],
  [
    5,
    "thing2",
    "otherThing"
  ]
]

let output = countHowManyInArrayOfArrays(anArrayOfThings);
console.log(output);

// Which gives you:

// 6
