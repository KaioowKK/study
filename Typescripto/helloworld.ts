let message: string = 'Hello World';
console.log(message);

let firstName: string = "Dylan";
let firstName2 = "Dylan";

let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}
// Although we have to cast multiple times we can do a check in the if to secure our type and have a safer casting

const numbers = [1, 2, 3]; // inferred to type number[]

numbers.push(4); // no error

// comment line below out to see the successful assignment 
//numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.

console.log(numbers);

let head: number = numbers[0]; // no error

console.log(head);

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');

console.log(ourTuple);