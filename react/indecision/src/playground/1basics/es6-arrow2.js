// arguments - no longer bound with arrow funtions

const add = (a,b) => {
	//console.log(arguments); // causes hell
	return a + b;
}
console.log(add(55,1));



// this keyword - no longer bound

const user = {
	name: 'Tyquan',
	cities: ['Philly', "New York", "Dublin"],
	printPlacesLived: function(){
		console.log(this.name);
		console.log(this.cities);

		this.cities.forEach((city) => {
			console.log(this.name + " has lived in " + city);
		});
	}
};

//user.printPlacesLived();

// es6 methods

const user2 = {
	name: 'Tyquan',
	cities: ['Philly', "New York", "Dublin"],
	printPlacesLived(){
		console.log(this.name);
		console.log(this.cities);

		return this.cities.map((city)=>{
			return this.name + ' has lived in ' + city;
		});
	}
};

console.log(user2.printPlacesLived());

// Challenge

const multiplier = {
	numbers: [10, 20, 30],
	multiplyBy: 3,
	// return a new array where the numbers have been multiplied
	multiply(){
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());