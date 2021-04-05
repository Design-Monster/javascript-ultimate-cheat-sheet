// Find the same in each array, without duplicates, and put into new array

function findSameAndRemove(a, b) {
  const first = new Set(a);
  const second = new Set(b);
  let newArray = [...first];

  return [
    ...newArray.filter(i => second.has(i)),
  ];
}

let arrayOne = [1,2,1,2,3,4,"Hello","Hi",7,8,9];
let arrayTwo = [1,2,3,"Hi",12,17,19,8];

let output = findSameAndRemove(arrayOne, arrayTwo);
console.log('These appear in both: ' + output);

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

// function findSameInArrays(a, b) {
//   const first = new Set(a);
//   const second = new Set(b);
//   let newArray = [...first];

//   return [
//     ...newArray.filter(i => second.has(i)),
//   ];
// }

// let arrayOne = [1,2,1,2,3,4,"Hello","Hi",7,8,9];
// let arrayTwo = [1,2,3,"Hi",12,17,19,8];

// let output = findSameInArrays(arrayOne, arrayTwo);
// console.log('These appear in both: ' + output);
