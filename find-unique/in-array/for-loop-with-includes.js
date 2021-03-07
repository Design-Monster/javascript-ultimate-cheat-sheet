
// Find the unique items in the array

function findUniqueInArray(someArray) {
  let uniqueArray = [];
    for(var i = 0; i < someArray.length; i++) { 
      if (!uniqueArray.includes(someArray[i])) {
      uniqueArray.push(someArray[i]);
    }
  }
  return uniqueArray;
}

let anArrayOfNames = [
  "Remington Akelman",
  "Diana Akelman",
  "Michelle Lamb",
  "Brad Smith",
  "Remington Akelman",
  "Bob Power",
  "Michelle Lamb",
  "Steven Neilson",
  "Remington Akelman",
  "Darth Vader",
  "Simba the Lion",
  "Goofy"
];

let finalUniqueValuesArray = findUniqueInArray(anArrayOfNames);
console.log(finalUniqueValuesArray);

//Which gives you a final array of unique values:

// [
//   'Remington Akelman',
//   'Diana Akelman',
//   'Michelle Lamb',
//   'Brad Smith',
//   'Bob Power',
//   'Steven Neilson',
//   'Darth Vader',
//   'Simba the Lion',
//   'Goofy'
// ]


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function findUniqueInArray(someArray) { //creating a function and naming it findUniqueInArray.  That function has one parameter, called someArray, whose value will be passed in when the function is invoked. REMEMBER: You can name someArray WHATEVER you want.  someArray is just the generic name (parameter) that we are choosing to call the thing that the user or trigger will pass in (argument) when invoking the function.
  let uniqueArray = []; //Setting a variable to an empty array, to store values in later.
    for(var i = 0; i < someArray.length; i++) {  //loop through someArray using a for loop.
      if (!uniqueArray.includes(someArray[i])) { //if the new array (uniqueArray) does NOT contain the individual values from someArray or its inner arrays, then:
      uniqueArray.push(someArray[i]); // push those unique values from someArray into uniqueArray
    }
  }
  return uniqueArray;  //return the new uniqueArray, which only contains unique values pulled from someArray
}

let anArrayOfNames = [  //an array to plug in for the parameter 'someArray' - this can be called whatever you want!  Just plug it in down below on function invocation.
  "Remington Akelman",
  "Diana Akelman",
  "Michelle Lamb",
  "Brad Smith",
  "Remington Akelman",
  "Bob Power",
  "Michelle Lamb",
  "Steven Neilson",
  "Remington Akelman",
  "Darth Vader",
  "Simba the Lion",
  "Goofy"
];

let finalUniqueValuesArray = findUniqueInArray(anArrayOfNames);
console.log(finalUniqueValuesArray);

//Which gives you a final array of unique values:

[
  'Remington Akelman',
  'Diana Akelman',
  'Michelle Lamb',
  'Brad Smith',
  'Bob Power',
  'Steven Neilson',
  'Darth Vader',
  'Simba the Lion',
  'Goofy'
]
