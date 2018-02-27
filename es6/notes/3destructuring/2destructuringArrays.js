/*
	Destructuring Arrays
*/

let c = [100, 200];
let [a, b] = c;
console.log(a,b);

let names = ["Ty", "Tiff", "Rena", "Stephanie"];
let [developer, teacher, baby] = names;
console.log(developer, teacher, baby);

// spread
let g = [100, 200, 300, 400, 500];
let [y, ...z] = g;
console.log(y,z);