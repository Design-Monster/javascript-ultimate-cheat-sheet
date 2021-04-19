//Reverse a string

function reverseAString(string){
  let reversed = "";    
  for (let i = string.length - 1; i >= 0; i--){        
    reversed += string[i];
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
  for (let i = string.length - 1; i >= 0; i--){ //looping through and setting each value of index to a variable named i.  We are starting at the end of the length of the string and moving backwards through the length of the parameter string.        
    reversed += string[i]; //so for every i, add the value of i to the variable containing an empty string called reverse
  }    
  return reversed;  //return reversed, which is now a string with a single i value in it (a letter from the parameter string)
}

let output = reverseAString("hello I am a string");
console.log(output);

//Which gives you:

// "gnirts a ma I olleh"

