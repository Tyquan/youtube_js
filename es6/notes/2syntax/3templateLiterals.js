/*
	Review the important topics we covered in this section:
	1. Block scoping binds variable declarations to blocks of code, { .. }.

	2. The let keyword replaces var in es6.

	3. The const keyword declares a variable that cannot be re-assigned.

	4. Template literals in es6 are strings with embedded variables or code inside. They have surrounding backticks `` with interpolated ${} symbols for variables.
*/


/*
	Template Literals / Strings
*/

// old school es5
var a = "hello";
var b = "world";
var c = a + " " + b;
console.log("Old school:", c);


// new school es6 template literals
let d = `hello ${b}`;
console.log("New school:", d);

let e = `${a} world`;
console.log("New school:", e);



function print() {
  let luke = 'blue';
  let vader = 'red';

  let message = `Luke first uses a ${luke}-colored lightsaber. But his father, Vader, wields a ${vader}-colored lightsaber.`;

  console.log(message);
}
print();