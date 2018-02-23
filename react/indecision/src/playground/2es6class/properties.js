class OldSyntax {
	constructor(args) {
		this.name = "Mike";
	}

	getGreeting(){
		return `Hi my name is ${this.name}`;
	}
}

// doesnt work
const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());


// Class Properties
class NewSyntax {
	name = "Hen";
	getGreeting = () => {

	}
}
const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting);