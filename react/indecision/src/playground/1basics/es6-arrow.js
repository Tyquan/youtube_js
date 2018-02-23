const square = function(x){
	return x * x;
}

const squareArrow = (x) => {
	return x * x;
};

// arrow function expression
const squareArrow2 = (x) => x * x;

console.log('es5 anonymous function', square(9));

console.log('es6 Arrow function', squareArrow(9));

console.log('es6 Arrow function expression', squareArrow2(9));

// Challenge
// getFirstName

const getFirstName = (name) => {
	return name.split(" ")[0];
};

const getFirstName2 = (fullName) => fullName.split(" ")[0];

console.log(getFirstName("Tyquan Reddick"));
console.log(getFirstName2("Mike Smith"));