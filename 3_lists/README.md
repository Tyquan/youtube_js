# Lists (Data Structures)

## Arrays 

> An	array	is	an	ordered	list	of	values

	let customArray = []; // this initializes an empty array
	console.log(customArray);

> Arrays	are	not	primitive	values	but	a	special	built-in	object

	console.log(typeof(customArray));

### Adding	Values	to	Arrays

> To	place	the	string	'Superman'	inside	the	first	element	of	our	heroes	array,	we can	assign	it	to	element	0

	let superheroes = [];
	superheroes[0] = 'Spiderman';

> Each	item	in	an	array	can	be	treated	like	a	variable.	You	can	change	the	value using	the	assignment	operator	=.

	superheroes[0] = 'The Hulk';

> We	can	add	more	values	to	our	array	by	assigning	them	to	other	indices

	superheroes[1] = 'Superman';
	superheroes[1] = 'Batman';

> We can also add a value to our array at any position

	superheroes[5] = 'Wonder Woman';

> We	can	look	at	the	heroes	array	by	simply	typing	its	name	into	the	console

	console.log(superheroes);

### Creating	Array	Literals

> We	can	create	an	array	literal	using	square	brackets	that	already	contain	some initial	values

	let users = ["John", "Jane", "Bill", "Nya"];

> You	don’t	even	have	to	use	the	same	types	of	items	inside	an	array.	This	array contains	a	variety	different	data	types,	as	well	as	an	empty	array	object

	let mixedArray = [ null, 1, [], 'two', true ];

### Removing	Values	from	Arrays 

> The	delete	operator	will	remove	an	item	from	an	array

	delete users[2];
	console.log(users);

### Destructuring Arrays

> Destructuring	an	array	is	the	concept	of	taking	values	out	of	an	array	and presenting	them	as	individual	values. Destructuring	allows	us	to	assign	multiple	values	at	the	same	time,	using	arrays

	const [a,b] = [1,2];

> Even	though	the	assignment	is	made	using	arrays,	each	individual	variable	exists on	its	own	outside	the	array.	

	console.log(a); // 1
	console.log(b); // 2

### Array Properties and Methods

#### Length

> To	find	the	length	of	an	array,	we	can	use	the	length	property

	const marvel = ['Captain	America',	'Iron	Man',	'Thor'];
	console.log(marvel);

> The	length	property	can	be	used	as	part	of	the	index	to	find	the	last	item	in	an array

	console.log(marvel[marvel.length - 1]); // Thor

#### .pop()

> To	remove	the	last	item	from	an	array

	const poppedMarvel = marvel.pop();
	console.log(poppedMarvel);

#### .shift()
> The	shift()	method	works	in	a	similar	way	to	the	pop()	method,	but	this removes	the	first	item	in	the	array

	const shiftedMarvel = marvel.shift();
	console.log(shiftedMarvel);

#### .push()

> The	push()	method	appends	a	new	value	to	the	end	of	the	array

	const newMarvel = marvel.push("Spider/man");
	console.log(newMarvel);

#### .unshift()

> The	unshift()	method	is	similar	to	the	push()	method,	but	this	appends	a	new item	to	the	beginning	of	the	array

	const unshiftMarvel = marvel.unshift("Spider/man");
	console.log(unshiftMarvel);