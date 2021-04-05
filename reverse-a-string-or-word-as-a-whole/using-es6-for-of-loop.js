function reverseAString(string){
  let reversed = "";
  for(let individualCharacter of string){
    reversed += individualCharacter;
  }
  return reversed;
}

let output = reverseAString("hello I am a string");
console.log(output);

//Which gives you:

// "gnirts a ma I olleh"

// Comment out from here down and use vscode 'code-runner' extension to run the function in the vscode terminal and see the output by pressing control + option + n together.

// Breakdown:

function reverseAString(string){ //We are creating a function and naming it reverseAString.  reverseAString has one paramter and we are naming it string
  let reversed = "";  //creating a variable and naming it reversed. We are setting the initial value of reverse to an empty string.    
  for (let individualCharacter of string){ //looping through using the newer es6 for...of loop.  This allows us to say "for every i of the parameter string"        
    reversed += individualCharacter; //so for every i, add the value of i to the variable containing an empty string called reverse
  }    
  return reversed;  //return reversed, which is now a string with a single i value in it (a letter from the parameter string)
}

let output = reverseAString("hello I am a string");
console.log(output);

//Which gives you:

// "gnirts a ma I olleh"