# Variables (basics)

> Programming	is	about	making	computers	do	what	you	want.	A	computer program	is	basically	a	series	of	instructions	that	tell	your	computer	how	to perform	a	task.

> JavaScript	is	a	high-level	scripting	language	that	is	interpreted	and	compiled	at run	time.	This	means	it	requires	an	engine	that's	responsible	for	interpreting	a program	and	running	it.	The	most	common	JavaScript	engines	are	found	in browsers	such	as	Firefox,	Chrome	or	Safari,	although	JavaScript	can	be	run without	a	browser	using	an	engine	such	as	Google	V8

> JavaScript	is	also	a	dynamic	language,	so	elements	of	a	program	can	change while	it's	running,	and	it	can	do	lots	of	things	in	the	background	at	run	time 

> Javascript was created by Brendan Eich to	develop	a	new language	for	their	Navigator	browser which only took 10 days

> The	new	language	was	originally	called	Mocha,	but	it	was	changed	to LiveScript,	then	hastily	rebranded	as	JavaScript	so	it	could	benefit	from	the publicity	that	Sun	Microsystem’s	Java	language	was	attracting	at	the	time

## Hello world

> This is a first program for many new developers learning a new language

	console.log("Hello World");

> Nearly	all	web	pages	are	made	up	of	three	key	ingredients	―	HTML,	CSS	and JavaScript.	HTML	is	used	to	mark	up	the	content.	CSS	is	the	presentation	layer, and	JavaScript	adds	the	interactivity

## Comments

> 	a	comment	is	a	piece	of	code	that	is	ignored	by	the	language	―	it doesn’t	do	anything.	Despite	this,	comments	are	extremely	important:	wellcommented	code	is	the	hallmark	of	a	ninja	programmer

> In Javascript There are 2 types of comments

	// single line comment

	/*
		Multi
		line comment
	*/

## Primitive Data Types

> JavaScript	has	seven	different	data	types.	Six	of	them	are	primitive	data	types and	are	listed	below: 

	1. String 
	2. Symbol 
	3. Number 
	4. Boolean 
	5. Undefined 
	6. Null

> Any	value	that	isn’t	one	of	the	primitive	data	types	listed	above	is	an	object. These	include	arrays,	functions	and	object	literals

> JavaScript	has	a	special	operator	called	typeof	for	finding	out	the	type	of	a value.

	typeof("hello"); // outputs String

## Variables

> Variables	are	used	in	programming	languages	to	refer	to	a	value	stored	in memory.

### Declaring and Assigning

> To	assign	a	value	to	a	constant	or	variable,	we	use	the	=	operator.

	const myName = "Ty";
	let playerScore = 0; // this will change

	connsole.log(myName);
	console.log(playerScore);

> You	can	even	declare	and	assign	multiple	variables	at	the	same	time	if	you separate	them	with	commas:

	let x = 3, y = 4, z = 6;

> We can re assign variables that uses the let keyword easily:
	
	score = 5;

> In	contrast,	using	const	means	you	can't	reassign	the	variable	to	another	value. That	means	that	if	a	variable	is	assigned	to	a	primitive	data	type,	then	the	value can't	be	changed,	and	will	result	in	an	error	if	you	attempt	to

> Using	const	prevents	you	from	reassigning	a	variable	to	another	object,	as	it	will produce	an	error

> It	may	seem	like	a	restriction	to	use	const,	but	it	actually	helps	make	your programs	more	predictable	if	the	assignment	to	variables	can't	change.	For	this reason,	you	should	try	to	use	const	to	declare	most	variables.

## Scope

> Using	const	and	let	to	declare	variables	means	they	are	block	scoped,	so	their value	only	exists	inside	the	block	they	are	declared	in. 

> Scope	is	an	important	concept	in	programming.	It	refers	to	where	a	constant	or variable	is	accessible	by	the	program

### Global Scope

> Any	variable	declared	outside	of	a	block	is	said	to	have	global	scope.	This means	it	is	accessible	everywhere	in	the	program.	While	this	may	seem	to	be	a good	idea	at	first,	it	is	not	considered	good	practice.	A	ninja	programmer	will	try to	keep	the	number	of	global	variables	to	a	minimum,	because	any	variables	that share	the	same	name	will	clash	and	potentially	overwrite	each	other’s	values.

### Local Scope

> In	ES6,	blocks	can	be	used	to	create	a	local	scope.	This	means	that	any	variables defined	inside	a	block	using	the	let	or	const	will	only	be	available	inside	that block	and	not	be	accessible	outside	of	that	block.	This	is	known	as	having	local scope,	as	the	variable	is	only	visible	in	the	locality	of	the	block. 

> If	let	or	const	are	not	used,	the	variable	will	have	global	scope	and	be	available outside	the	block.	This	can	be	demonstrated	in	the	following	example,	where	the variable	a	can	have	two	different	values	depending	on	whether	it	is	defined inside	or	outside	a	block

	const a = 1;
	{const a = 3; a;}
	console.log(a);

## Strings

> A	string	is	a	collection	of	characters,	such	as	letters	and	symbols

	'Hello'

### String Properties and Methods

> Primitive	data	types	and	objects	have	properties	and	methods.	Properties	are information	about	the	object	or	value,	while	methods	perform	an	action	on	the object	or	value	―	either	to	change	it	or	to	tell	us	something	about	it.

#### Properties

> We	can	access	the	properties	of	a	string	using	dot	notation.	This	involves	writing a	dot	followed	by	the	property	we	are	interested	in.	

	const computerName = "hp"; // declares and assigns a variable
	console.log(`${computerName}`);
	console.log(computerName.length); // retrieve the name variables length property (2)

> An	alternative	notation	you	can	use	to	access	a	primitive	data	type's	properties are	square	brackets

	console.log(computerName['length']);

> All	properties	of	primitive	data	types	are	immutable,	meaning	they’re	unable	to be	changed.

#### Methods

> A	method	is	an	action	that	a	primitive	data	type	or	object	can	perform.	To	call	a method,	we	use	the	dot	operator	(.)	followed	by	the	name	of	the	method, followed	by	parentheses	(this	is	a	useful	way	to	distinguish	between	a	property and	a	method	―	methods	end	with	parentheses).

> we	can	write	a string	in	all	capital	letters	using	the	toUpperCase()	method

	console.log(computerName.toUpperCase()); // HP

> Or	the	toLowerCase()	method,	which	will	write	my	name	in	all	lower-case letters

	console.log(computerName.toLowerCase()); // hp

> If	you	want	to	know	which	character	is	at	a	certain	position,	you	can	use	the charAt()	method.

	console.log(computerName.charAt(1)); // p

> This	tells	us	that	the	character	'p'	is	at	position	1.	If	you	were	thinking	that	it should	be	'h',	this	is	because	the	first	letter	is	classed	as	being	at	position	0 

> If	you	want	to	find	where	a	certain	character	or	substring	appears	in	a	string,	we can	use	the	indexOf()	method

	const alpha = "abcdefghijklmnop";
	console.log(alpha.indexOf("m"));

> If a character doesn’t appear	in the string, -1 will	be	returned:

	alpha.indexOf('z'); // -1

##### Other methods

> If	we	want	the	last	occurrence	of	a	character	or	substring,	we	can	use	the lastIndexOf()	method

	alpha.lastIndexOf('a');														
> If	all	we	want	to	know	if	a	string	contains	a	certain	character,	then	ES2016 provides	the	useful	includes()	method

	alpha.includes('a'); // true
	alpha.includes('z'); // false

> ES6	added	a	couple	of	methods	to	check	if	a	string	starts	or	ends	in	a	particular character. To	check	if	a	string	starts	with	a	certain	character,	we	can	use	the	startsWith() method.	Be	careful	though,	it's	case-sensitive	

	alpha.startsWith('a'); //	true
	alpha.startsWith('A'); //	false
	alpha.startsWith('z'); // false

> And	we	can	use	the	similar	endsWith()	method	to	check	if	a	string	ends	with	a particular	character

	alpha.startsWith('a'); // false
	alpha.endsWith('p'); // true
	alpha.endsWith('op'); // true

> The	concat()	method	can	be	used	to	concatenate	two	or	more	strings	together

	'JavaScript'.concat('Ninja'); // 'JavaScriptNinja'
	'Hello'.concat('	','World','!'); 

> A	shortcut	for	string	concatenation	is	to	use	the	+	operator	to	add	the	two	strings together

	'Java'	+	'Script'	+	'	'	+	'Ninja';

> The	trim()	method	will	remove	any	whitespace	from	the	beginning	and	end	of	a string

	'Hello	World					'.trim();

> ES6	also	introduced	the	repeat()	method	that	will	repeat	a	string	the	stated number	of	times:

	'Hello'.repeat(2); // hellohello

### Template Literals

> Template	literals	are	a	special	types	of	string	that	were	introduced	in	ES6. Template	literals	use	the	backtick	character,	`	,	to	deliminate	the	string

	`Hello!`;

> This	has	the	advantage	of	being	able	to	use	both	types	of	quote	mark	within	the string

	`She said, "It's Me!"`

> They	also	allow	interpolation	of	JavaScript	code.	This	means	that	a	JavaScript expression	can	be	inserted	inside	a	string	and	the	result	will	be	displayed

	const yourName = "Bob";
	console.log(`Hello ${name}`);

> This also works with Integers (Numbers)

	let age = 20;
	console.log(`I will be ${age + 1} next year`);







# Lesson 2

## Numbers (Integers)

> Numbers	can	be	integers	(whole	numbers,	such	as	3)	or	floating	point	numbers (often	referred	to	as	just	'decimals'	or	'floats',	such	as	3.14159).

	typeof	42;	//	integer <<	'number'
	typeof	3.14159;	//	floating	point	decimal <<	'number'

### Number	Methods

> Numbers	also	have	some	built-in	methods,	although	you	need	to	be	careful	when using	the	dot	notation	with	number	literals	that	are	integers	because	JavaScript will	confuse	the	dot	with	a	decimal	point

	Use	two	dots:
	5..toExponential(); // "5e+0"
	Place	the	integer	in	parentheses:
	(5).toExponential();

> The	toFixed()	method	rounds	a	number	to	a	fixed	number	of	decimal	places:

	const	PI	=	3.1415926; <<	undefined
	PI.toFixed(3);	//	only	one	dot	is	needed	when	using	constants	or	variables <<	"3.142

> Note	that	the	value	is	returned	as	a	string,	rather	than	a	number. 

### Arithmetic	Operations

> All	the	usual	arithmetic	operations	can	be	carried	out	in	JavaScript. 

	Addition:
	5	+	4.3; <<	9.3																
	Subtraction:
	6	-	11; >>	-5

	Multiplication:
	6	*	7; <<	42
	Division:
	3/7; <<0.42857142857142855																
	Exponentiation:
	2**3;	//	introduced	in	ES2017 <<	8																
< You	can	also	calculate	the	remainder	of	a	division	using	the	%	operator:

	23%6;	//	the	same	as	asking	'what	is	the	remainder	when	13	is	divided	by	6' <<	5			

### Changing The Value of Variable

> If	a	variable	has	been	assigned	a	numerical	value,	it	can	be	increased or decreased

	let points = 0;
	let maxPoints = 100;
	console.log(points);
	console.log(maxPoints);
	points = points + 10;
	maxPoints = maxPoints - 10;
	console.log(points);
	console.log(maxPoints);

> A	shorthand	for	doing	this	is	to	use	the	compound	assignment	operator,	+= or -=

	points += 10;
	console.log(points);
	maxPoints -= 10;
	console.log(maxPoints);

### Incrementing / Decrementing Values

> If	you	only	want	to	increment	a	value	by	1,	you	can	use	the	++	operator

	points++;
	console.log(points);

> There	is	also	a	--	operator	that	works	in	the	same	way

	maxPoints--;
	console.log(maxPoints);

### Converting	Strings	to	Numbers

> The	best	way	to	change	a	string	to	a	number	is	to	use	the	Number	function
	
	let twentyThree = '23';
	let numbs = Number(twentyThree);
	console.log(numbs);

> If	the	string	cannot	be	converted	into	a	number,	then	NaN	is	returned

	let wontWork = "Hello";
	console.log(Number(wontWork)); // NaN

> There	are	a	few	'tricks'	that	can	also	be	used	to	convert	a	string	into	a	number 

	let answer = '10' * 1
	console.log(answer);
	console.log(typeof(answer)); // number

> not really recommended

### Converting Numbers to Strings

> The	preferred	way	of	changing	a	number	to	a	string	is	to	use	the	String function

	let twentyThree = 23;
	let numbs = String(twentyThree);
	console.log(numbs);

> Another	option	is	to	use	the	toString()	method

	console.log(twentyThree..toString());

## Undefined

> Undefined	is	the	value	given	to	variables	that	have	not	been	assigned	a	value

> 	It	can	also	occur	if	an	object’s	property	doesn’t exist	or	a	function	has	a	missing	parameter.	It	is	basically	JavaScript’s	way	of saying	"I	can’t	find	a	value	for	this." 

	console.log(teeth); // we havent defined teeth yet
	console.log(Number()); // missing parameter, what are we turning into a number?

## Null

> Null	means	'no	value'.	It	can	be	thought	of	as	a	placeholder	that	JavaScript	uses to	say	"there	should	be	a	value	here,	but	there	isn’t	at	the	moment." 

	console.log(10 + null); // behaves like zero (answer: 10)

> In	general,	values	tend	to	be	set	to	undefined	by	JavaScript,	whereas	values	are usually	set	to	null	manually	by	the	programmer. 

## Booleans

> There	are	only	two	Boolean	values:	true	and	false.

> Boolean	values	are	fundamental	in	the	logical	statements	that	make	up	a computer	program.	Every	value	in	JavaScript	has	a	Boolean	value	and	most	of them	are	true	(these	are	known	as	truthy	values). 

	console.log(Boolean('hello')) // true
	console.log(Boolean(102)) // true
	console.log(Boolean(0)) // false

> Only	9	values	are	always	false	and	these	are	known	as	falsy	values:

	*	""	//	double	quoted	empty	string	literal 
	*	''	//	single	quoted	empty	string	literal 
	*	``	//	empty	template	literal 
	*	0 
	*	-0	//	considered	different	to	0	by	JavaScript! 
	*	NaN 
	*	false 
	*	null 
	*	undefined