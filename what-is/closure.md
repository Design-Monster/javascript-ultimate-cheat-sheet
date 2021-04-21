Closure means that an inner function always has access to the variables and parameters of its outer function, even after the outer function has returned.

function pam() {
    let name = "Pam Beesly";
    function displayName() {
        alert (name);
    }
  displayName(); 
}

pam();

The inner function displayName is able to display "Pam Beesly" without defining the variable itself because it remembers the variable that was already defined in the outer function of pam.

Common use cases for closures:

1 - Giving objects data privacy  

2 - Currying

3 - Callbacks

