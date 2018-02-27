/*
	Review of the important material we just learned.

	1. The es6 spread operator spreads the contents of an array or object into multiple variables. Its syntax uses three periods, just like so: …

	2. Destructuring Assignment  in es6 allows us to extract data from arrays or objects into separate, distinct variables.

	3. Array Destructuring Assignment assigns multiple variables from an array. For instance, let [a, b] = c, where values ‘a’ and ‘b’ assign in order to the respective elements in ‘c’.

	4. Object Destructuring Assignment assigns multiple variables form an object. For instance, let { a, b } = c, where values ‘a’ and ‘b’ assign to the ‘a’ and ‘b’ properties in ‘c’.
*/

let wizard = {
	magical: true,
	power: 10
};

let { magical, power } = wizard;

console.log(magical, power);




let magic = true;
let pow = 2;

let ranger = {
	magic: false,
	pow: 0
};
({ magic, pow } = ranger);
console.log(magic, pow)