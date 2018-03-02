const person = {
	name: 'Ty',
	age: 31,
	location: {
		city: 'Philadelphia',
		temp: 92
	}
};

// deconstruction
const { name, age } = person;

console.log(`${person.name} is ${person.age}`);


//Array Deconstruction

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, mediumPrice] = item;
// grab first and third items using array deconstructuring
console.log(`A medium Ciffee {hot} costs $2.50`);