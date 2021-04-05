// Find the same in each array, without duplicates, and put into new array

function findSameAndRemove(a, b) {
  let sameNumbersArray = [];
  for (let i = 0; i < a.length; i++) {
    for (let x = 0; x < b.length; x++) {
      if (a[i] === b[x]) {
        sameNumbersArray.push(b[x]);
      }
    }
  }
  let output = new Set(sameNumbersArray);
  return [...output];
}

let arrayOne = [1,2,1,2,3,4,"Hello","Hi",7,8,9];
let arrayTwo = [1,2,3,"Hi",12,17,19,8];

let answer = findSameAndRemove(arrayOne, arrayTwo);
console.log('These appear in both: ' + answer);
