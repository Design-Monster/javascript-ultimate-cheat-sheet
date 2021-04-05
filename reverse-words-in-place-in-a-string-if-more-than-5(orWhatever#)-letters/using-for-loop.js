// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed in place.

// Examples:

// reverseWordsInPlace( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"

// reverseWordsInPlace( "This is a test") => returns "This is a test"

function reverseWordsInPlace(string) {
  let wordsArray = string.split(" ");
  console.log(wordsArray);
  for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length >= 5)  //replace 5 with number that is appropriate to your needs
      wordsArray[i] = wordsArray[i].split('').reverse().join('');
  }
  return wordsArray.join(' ');
}

let output = reverseWordsInPlace("Hello I am a string");
console.log(output);


// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

// function reverseWordsInPlace(string) {
//   let wordsArray = string.split(" ");
//   console.log(wordsArray);
//   for (let i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i].length >= 5)
//       wordsArray[i] = wordsArray[i].split('').reverse().join('');
//   }
//   return wordsArray.join(' ');
// }


// let output = reverseWordsInPlace("Hello I am a string");
// console.log(output);
