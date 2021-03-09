// The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:
// 1 - For every number that is divisible by 3 and 5 (or 15), console log "FizzBuzz".
// 2 - For every number that is divisible by only 3 and not 5, console log "Fizz".
// 3 - For every number that is divisible by only 5 and not 3, console .log "Buzz".

function fizzBuzz(countUpTo) {
  for(let i = 1; i < countUpTo + 1; i++) {
    if (i % 15 === 0) {  //could also be: if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    } else if (i % 3 === 0) { 
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
  }
}

fizzBuzz(100);


// https://medium.com/@endubueze00/javascript-algorithm-fizzbuzz-42129ee418e6