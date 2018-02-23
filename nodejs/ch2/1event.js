const fs = require('fs');

fs.readFile('1event_example.js', {encoding:'utf8'}, (err, fileContents) => {
	console.log("Then the contents are available", fileContents);
});

console.log('This happens first');

/*
	Here's	what	Node	does	when	executing	this	program:
		1.	A	process	object	is	created	in	C++	using	the	V8	API.	The	Node.js	runtime is	then	imported	into	this	V8	process. 
		2.	The	fs	module	is	attached	to	the	Node	runtime.	V8	exposes	C++	to JavaScript.	This	provides	access	to	native	filesystem	bindings	for	your JavaScript	code.
		3.	The	fs.readFile	method	has	passed	instructions	and	a	JavaScript	callback. Through	fs.binding,	libuv	is	notified	of	the	file	read	request,	and	is	passed	a specially	prepared	version	of	the	callback	sent	by	the	original	program. 
		4.	libuv	invokes	the	OS-level	functions	necessary	to	read	a	file. 
		5.	The	JavaScript	program	continues,	printing	This	happens	first.	Because	there is	a	callback	outstanding,	the	event	loop	continues	to	spin,	waiting	for	that callback	to	resolve. 
		6.	When	the	file	descriptor	has	been	fully	read	by	the	OS,	libuv	(via	internal mechanisms)	is	informed,	and	the	callback	passed	to	libuv	is	invoked,	which essentially	prepares	the	original	JavaScript	callback	for	re-entrance	into	the main	(V8)	thread. 
		7.	The	original	JavaScript	callback	is	pushed	onto	the	event	loop,	and	is invoked	on	a	near-future	tick	of	the	loop. 
		8.	The	file	contents	are	printed	to	the	console. 
		9.	As	there	are	no	further	callbacks	in	flight,	the	process	exits.
	
*/