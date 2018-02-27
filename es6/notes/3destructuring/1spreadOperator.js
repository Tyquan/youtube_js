/*
	Spread Operators
*/

let a = [7,8,9];
let b = [6, ...a, 10]; // concats
console.log(b);

function print(a,b,c) {
	console.log(a,b,c);
}
let z = [1,2,3];
print(...z);

function print2(...g) {
	console.log(g);
}
print2(4,5,6,7,8,9,10);