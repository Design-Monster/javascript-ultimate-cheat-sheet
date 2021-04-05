// Write a function that takes in a string of one or more words and reverses those words in place

// Examples:

// reverseWordsInPlace( "Hey fellow warriors" ) => returns "yeH wollef sroirraw"


function reverseWordsInPlace(string) {
  let wordsArray = string.split(" ");
  console.log(wordsArray);
  for (let i = 0; i < wordsArray.length; i++) {
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
//     wordsArray[i] = wordsArray[i].split('').reverse().join('');
//   }
//   return wordsArray.join(' ');
// }


// let output = reverseWordsInPlace("Hello I am a string");
// console.log(output);
