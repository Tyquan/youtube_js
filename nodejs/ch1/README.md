# The Process Object

> Node's	process	object	provides	information	on	and	control	over	the	current running	process.	It	is	an	instance	of	EventEmitter	is	accessible	from	any	scope,	and exposes	very	useful	low-level	pointers

> process.js

> A	Node	process	begins	by	constructing	a	single	execution	stack,	with	the	global context	forming	the	base	of	the	stack.	Functions	on	this	stack	execute	within their	own	local	context	(sometimes	referred	to	as	scope),	which	remains enclosed	within	the	global	context.	This	way	of	keeping	the	execution	of	a function	together	with	the	environment	the	function	runs	in	is	called	closure. Because	Node	is	evented,	any	given	execution	context	can	commit	the	running thread	to	handling	an	eventual	execution	context.	This	is	the	purpose	of	callback functions.

> Inside	Node,	a	C	library	named	libuv	creates	and	manages	the	event	loop.	It connects	to	low-level	operating	system	kernel	mode	objects	that	can	produce events,	such	as	timers	that	go	off,	sockets	that	receive	data,	files	that	open	for reading,	and	child	processes	that	complete.	It	loops	while	there	are	still	events	to process,	and	calls	callbacks	associated	with	events.	It	does	this	at	a	very	low level,	and	with	a	very	performant	architecture.	Written	for	Node,	libuv	is	now	a building	block	of	a	number	of	software	platforms	and	languages.

> The	concomitant	execution	stack	is	introduced	to	Node's	single-process	thread. This	stack	remains	in	memory	until	libuv	reports	that	fs.readdir	has	completed,	at which	point	the	registered	anonymous	callback	fires,	resolving	the	sole	pending execution	context.	As	no	further	events	are	pending,	and	the	maintenance	of closures	no	longer	necessary,	the	entire	structure	can	be	safely	torn	down	(in reverse,	beginning	with	anonymous),	and	the	process	can	exit,	freeing	any allocated	memory.	This	method	of	building	up	and	tearing	down	a	single	stack	is what	Node's	event	loop	is	ultimately	doing.