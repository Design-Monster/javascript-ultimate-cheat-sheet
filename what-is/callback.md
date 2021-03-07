
A callback is when you pass a function to another function as an argument.

const message = function() {  
    console.log("This message is shown after 3 seconds");
}
setTimeout(message, 3000);
Here, the function message is being passed into the function setTimeout as an argument.
