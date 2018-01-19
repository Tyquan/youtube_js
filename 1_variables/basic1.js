// single line comment

/*
	Multi
	Line Comment
*/

// this prints hello world to the console
console.log("Hello World from a javascript file");


/*
	Primary Data Types
*/
// String
//"Hello";
// Number (int in other languages)
//1
// Boolean
//true or false
// Symbol
//new Symbol();
// Undefined
// null

/*
	Variables
*/

// var (older way)
var myName = "Ty";
console.log(myName);
console.log(myName);
var thisWillBeTrue = true;
console.log(thisWillBeTrue);

// let and const (Newer ways to declare a variable)
const myFirstName = "Tyquan";
let myAge = "30";

console.log(myFirstName);
console.log(myAge);

let x = 4, y = 10, z = 15;

console.log(z);

let myScore = 0;

console.log(myScore);

myScore = 5; // reassigning
console.log(myScore);

// jattempting to mutate a const (it failed)
// myFirstName = "John";
// console.log(myFirstName);

let sayHi = 'Greetings From Basic1.JS';//"Hi"

let sayHiLength = sayHi.length;

console.log(sayHiLength);

// capitalize
console.log(sayHi.toUpperCase());

// lowercase everything
console.log(sayHi.toLowerCase());

// indexOf (Whats the position of this letter?)
console.log(sayHi.indexOf('o')); // its located at position 12
console.log(sayHi.indexOf('z')); // is not in our string

// includes
console.log(sayHi.includes('o'));
console.log(sayHi.includes('z'));

// starts with
console.log(sayHi.startsWith('G'));
console.log(sayHi.startsWith('z'));

// concat (put together a string)
let stringBuilder = "javascript";
let isGreat = " is great";
console.log(stringBuilder.concat(isGreat));
console.log(stringBuilder + isGreat);

// trim (this deletes whitespace at then of your string)
let nickname = "TonyBanannas           ";
console.log(nickname);
console.log(nickname.trim());

// repeat() this repeats whatever you give it
let helloX3 = "Hello ";
console.log(helloX3.repeat(3));

console.log(`theyr'e there`);
console.log(`This is the answer for 2 * 2 is ${2 * 2}`);

console.log(`We are going crazy with the hellos: ${helloX3.repeat(8)}`);