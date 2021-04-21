function addNewDataToExistingArray(data, existingArray) {
  [existingArray.push(data)];
  return existingArray
}

let newData = 25;
let array = [50, 25, 10];

console.log(addNewDataToExistingArray(newData, array));