Can you describe the main difference between a .forEach loop and a .map() loop and why you would pick one versus the other?

forEach:

- Iterates through the elements in an array.
- Executes a callback for each element.
- Does not return a value.


const a = [1, 2, 3];

const doubled = a.forEach((num, index) => {
  // Do something with num and/or index.
});

// doubled = undefined


map:

- Iterates through the elements in an array.
- "Maps" each element to a new element by calling the function on each element, creating a new array as a result.


const a = [1, 2, 3];

const doubled = a.map((num) => {
  return num * 2;
});

// doubled = [2, 4, 6]


The main difference between .forEach and .map() is that .map() returns a new array. If you need the result, but do not wish to mutate the original array, .map() is the clear choice. If you simply need to iterate over an array, forEach is a fine choice.