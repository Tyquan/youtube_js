# Logic

## Logical Operators

> A	logical	operator	can	be	used	with	any	primitive	value	or	object.	The	results	are based	on	whether	the	values	are	considered	to	be	truthy	or	falsy. 

### ! (Logical NOT)

> Placing	the	!	operator	in	front	of	a	value	will	convert	it	to	a	Boolean	and	return the	opposite	value.	So	truthy	values	will	return	false,	and	falsy	values	will return	true.	This	is	known	as	negation.

	console.log(!true); // false
	console.log(!0); // true

### && (Logical AND)

> The	logical	AND	operator	works	on	two	or	more	values	(the	operands)	and	only evaluates	to	true	if	all	the	operands	are	truthy

> The	value	that	is	returned	is	the last	truthy	value	if	they	are	all	true,	or	the	first	falsy	value	if	at	least	one	of	them is	false

	console.log(true && true); // true
	console.log(false && false); // false
	console.log(false && true); // false

### ||	(Logical	OR)

> The	logical	OR	operator	also	works	on	two	or	more	operands,	but	evaluates	to true	if	any	of	the	operands	are	true,	so	it	only	evaluates	to	false	if	both	operands are	falsy.	The	value	that	is	returned	is	the	first	truthy	value	if	any	of	them	are true,	or	the	last	falsy	value	if	all	of	them	are	false

	console.log(true || true); // true
	console.log(false || false); // false
	console.log(false || true); // true

## Comparison

> We	often	need	to	compare	values	when	programming.	JavaScript	has	several ways	to	compare	two	values

### Equality

> ==,	known	as	"soft	equality"	or	the	triple	equals	operator,	===,	known	as	"hard equality".

	let answer = 10;
	console.log(answer == 10); // true (The two values are 10)

	let newAnswer = "10";
	console.log(newAnswer == 10); // false (The two values are 10 but newAnser is a String and 10 is a Number)

### InEquality

> We	can	check	if	two	values	are	not	equal	using	the	inequality	operator.	There	is	a soft	inequality	operator,	!=	and	a	hard	inequality	operator,	!==.	These	work	in	a similar	way	to	the	soft	and	hard	equality	operators.

	console.log(20 != "20"); // false these two values are equal
	console.log(20 !== "20"); // true these two values are not the same.

### Greater	Than and Less Than

> You	can	check	if	a	value	is	greater	than	another	using	the	>	operator

	console.log(25 > 12); // true 25 is greater than 12
	console.log(12 > 25); // false 12 is not greater than 25

> You	can	also	use	the	"less	than"	<	operator

	console.log(25 < 12); // false 25 is greater than 12
	console.log(12 < 25); // true 12 is not greater than 25 (its less than 25)

> If	you	want	to	check	if	a	value	is	greater	than	or	equal	to	another	value,	you	can use	the	>=	operator and vice versa for less than or equal to <=

	console.log(10 >= 5); // true
	console.log(10 >= 10); // true
	console.log(10 >= '10'); // true

> These	operators	can	also	be	used	with	strings,	which	will	be	alphabetically
ordered	to	check	if	one	string	is	"less	than"	the	other

	console.log("abcd" > "abc"); // true

## Logical Conditions

> logical	conditions	allow	you	to	control the	flow	of	a	program	by	running	different	blocks	of	code,	depending	on	the results	of	certain	operations. 

### If Statement

> if statements	have the following structure

	if (condition) {
		// code to run if the condition is true
	}

> The	code	inside	the	block	will	only	run	if	the	condition	in	parentheses	is	true.	If the	condition	is	not	a	boolean	value,	it	will	be	converted	to	a	boolean,	depending on	whether	or	not	it	is	truthy	or	falsy

> Example:

	let userAge = 19;
	const userMayEnterAge = 18;
	if (userAge >= userMayEnterAge) {
		console.log("You May enter. Welcome to our App.");
	}

> If we change the userAge variabe to under 18. the program will output nothing.

### else Statements

> The	else	keyword	can	be	used	to	add	an	alternative	block	of	code	to	run	if	the condition	is	false.

	let userAge = 17;
	const userMayEnterAge = 18;
	if (userAge >= userMayEnterAge) {
		console.log("You May enter. Welcome to our App.");
	} else {
		console.log("Sorry You are too young to use this App.");
	}

> Example (we can test if a number is even or odd):

	const n = 14;
	if (n % 2 === 0) {
		console.log("n is an even number");
	} else {
		console.log("n is an odd number");
	}

> This	uses	the	%	operator	that	we	met	in	the	previous	chapter	to	check	the remainder	when	dividing	the	variable	n	by	2.	All	even	numbers	leave	no remainder	when	divided	by	2,	so	we	can	test	to	see	if	n%2	is	equal	to	zero;	if	it	is, n	must	be	even.	If	n	is	not	even,	then	it	must	be	odd.

### Switch Statements

> The	switch	operator	can	be	used	to	make	your	if / else statement code	easier	to	follow	when	there are	lots	of	conditions	to	test.

> Example

	let number = 4;
	switch (number) {
		case 4:
			console.log("You rolled a four");
			break;
		case 5:
			console.log("You rolled a five");
			break;
		case 6:
			console.log("You rolled a six");
			break;
		default:
			console.log("You rolled a number less than four");
			break;
	}

> The	value	you	are	comparing	goes	in	parentheses	after	the	switch	operator.	A case	keyword	is	then	used	for	each	possible	value	that	can	occur	(4,	5,	and	6	in the	example	above).	After	each	case	statement	is	the	code	that	that	needs	to	be run	if	that	case	occurs. 

> It	is	important	to	finish	each	case	block	with	the	break	keyword,	as	this	stops any	more	of	the	case	blocks	being	executed.	Without	a	break	statement,	the program	will	"fall	through"	and	continue	to	evaluate	subsequent	case	blocks. This	is	sometimes	implemented	on	purpose,	but	it	is	a	hack	and	can	be confusing.	For	this	reason	it	should	be	avoided	―	a	ninja	programmer	always finishes	a	case	block	with	a	break! 

> The	default	keyword	is	used	at	the	end	for	any	code	than	needs	to	be	run	if none	of	the	cases	are	true. 