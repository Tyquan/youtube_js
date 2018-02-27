/*
	Constants in es6

	* Enable protection for variables that must remain the same
	* Could actually improve performance

*/

// Cant change the value of a const after it was declared

const a = 2;
// a = 3*4; // error

// can be manipulated but not reassigned
const array = [1,2,3];
array.push(4);
console.log(array);

//array = [3,5]; // error