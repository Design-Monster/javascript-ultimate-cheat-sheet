
// Find the unique in the array of arrays

function findUniqueInArrayOfArrays(someArray) {
  let uniqueArray = [];
    for(var i = 0; i < someArray.length; i++) {
      for(var x = 0; x < someArray[i].length; x++) {
        if (!uniqueArray.includes(someArray[i][x])) {
        uniqueArray.push(someArray[i][x]);
      }
    }
  }
  return uniqueArray;
}

let anArrayOfNames = [
  [
    "Remington Akelman",
    "Diana Akelman",
    "Michelle Lamb"
  ],
  [
    "Brad Smith",
    "Remington Akelman"
  ],
  [
    "Bob Power",
    "Michelle Lamb",
    "Steven Neilson"
  ],
  [
    "Remington Akelman",
    "Darth Vader",
    "Simba the Lion",
    "Goofy"
  ]
];

let finalUniqueValuesArray = findUniqueInArrayOfArrays(anArrayOfNames);
console.log(finalUniqueValuesArray);

findUniqueInArrayOfArrays(someArray);

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function findUniqueInArrayOfArrays(someArray) {
  let uniqueArray = [];
    for(var i = 0; i < someArray.length; i++) {  //loop through outer (parent) array
      for(var x = 0; x < someArray[i].length; x++) {  //loop through inner arrays
        if (!uniqueArray.includes(someArray[i][x])) { //if the new array (uniqueArray) does not contain the individual values from someArray or its inner arrays - push those  to uniqueArray
        uniqueArray.push(someArray[i][x]);
      }
    }
  }
  return uniqueArray;  //return the new uniqueArray, which only contains unique values
}

let anArrayOfNames = [
  [
    "Remington Akelman",
    "Diana Akelman",
    "Michelle Lamb"
  ],
  [
    "Brad Smith",
    "Remington Akelman"
  ],
  [
    "Bob Power",
    "Michelle Lamb",
    "Steven Neilson"
  ],
  [
    "Remington Akelman",
    "Darth Vader",
    "Simba the Lion",
    "Goofy"
  ]
];

let finalUniqueValuesArray = findUniqueInArrayOfArrays(anArrayOfNames);
console.log(finalUniqueValuesArray);