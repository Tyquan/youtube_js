// Car (make, model, vin {getDescription()})


class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	getDescription(){
		return `${this.name} is ${this.age} years old`;
	}

	getGreeting(){
		return `Hi my name is ${this.name}`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

	hasMajor(){
		return !!this.major;
	}
	// method override
	getDescription(){
		let description = super.getDescription();

		if (this.hasMajor()) {
			description = `Their major is ${this.major}`;
		}
		return description;
	}
}

class Traveller extends Person {
	constructor(name, age, homeLocation){
		super(name, age);
		this.homeLocation = homeLocation;
	}
	hasHomeLocation(){
		return !!this.homeLocation;
	}

	getGreeting(){
		let greeting = super.getGreeting();

		if (this.hasHomeLocation()) {
			greeting = `Hello my name is ${this.name} my home locatin is ${this.homeLocation}`;
		} else {
			greeting = `Hello my name is ${this.name} my home locatin is Nowhere`;
		}
		return greeting;
	}
}
const andyA = new Student("AndyA", 31, 'Computer Science');
console.log(andyA);
console.log(andyA.getDescription());

const andy = new Traveller("Andy", 31, 'Brooklyn');
console.log(andy);
console.log(andy.getGreeting());

const andyB = new Traveller("AndyB", 31);
console.log(andyB);
console.log(andyB.getGreeting());
