
Prototypal inheritance is a working object instance that inherits directly from other objects. Generally considered a better method than class inheritance.

Inherit ONLY what you specify.  
NOT brittle
Leads to smaller, less redundant code

var person = { 
  name: ‘Ryan’ 
};

let personTwo = Object.create(person); 
personTwo.name = ‘Matt’;
