# Understanding	Asynchronous Event-Driven	Programming

> Eliminating	blocking	processes	through	the	use	of	event-driven,	asynchronous I/O	is	Node's	primary	organizational	principle

> Node	lets	you build	and	organize	lightweight,	independent,	and	share-nothing	processes	that communicate	through	callbacks	and	synchronize	with	a	predictable	event	loop.

> Node	is	designed	to	make	I/O	fast.	It	is	designed	for	this	new	world	of networked	software,	where	data	is	in	many	places	and	must	be	assembled quickly.	

> Modern	software	must	anticipate	tens	of	thousands	of simultaneously	connected	clients	concurrently	altering	enormous,	shared	data pools	via	a	variety	of	network	protocols,	on	any	number	of	unique	devices.	Node is	designed	specifically	to	help	those	building	that	kind	of	network	software.

> Node	has	commoditized	I/O	through	the	introduction	of	an	environment	where system	resources	are	(ideally)	never	idle.

> Event-driven	programming	as implemented	by	Node	reflects	the	simple	goal	of	lowering	overall	system	costs by	encouraging	the	sharing	of	expensive	labor,	mainly	by	reducing	the	number of	I/O	bottlenecks	to	zero.

## Understanding	the	event	loop

> Definition: 

	In	computer	programming,	event-driven	programming	or	event-based programming	is	a	programming	paradigm	in	which	the	flow	of	the	program	is determined	by	events—that	is,	sensor	outputs	or	user	actions	(mouse	clicks,	key presses)	or	messages	from	other	programs	or	threads.	Event-driven	programming can	also	be	defined	as	an	application	architecture	technique	in	which	the application	has	a	main	loop	that	is	clearly	divided	down	to	two	sections:	the	first is	event	selection	(or	event	detection),	and	the	second	is	event	handling	[…]. Event-driven	programs	can	be	written	in	any	language,	although	the	task	is easier	in	languages	that	provide	high-level	abstractions,	such	as	closures

> The	following	three	points	are	important	to	remember,	as	we	break	down	the event	loop:

	1. The	event	loop	runs	in	the	same	(single)	thread	your	JavaScript	code	runs in.	Blocking	the	event	loop	means	blocking	the	entire	thread. 
	2. You	don't	start	and/or	stop	the	event	loop.	The	event	loop	starts	as	soon	as	a process	starts,	and	ends	when	no	further	callbacks	remain	to	be	performed. The	event	loop	may,	therefore,	run	forever.
	3. The	event	loop	delegates	many	I/O	operations	to	libuv,	which	manages these	operations	(using	the	power	of	the	OS	itself,	such	as	thread	pools), notifying	the	event	loop	when	results	are	available.	An	easy-to-reason about	single-threaded	programming	model	is	reinforced	with	the	efficiency of	multithreading.

> According	to	the	Node	documentation,	"The	event	loop	is	what	allows	Node.js to	perform	non-blocking	I/O	operations	—	despite	the	fact	that	JavaScript	is single-threaded	—	by	offloading	operations	to	the	system	kernel	whenever possible."

> The	key	design	choice	made	by	Node's	designers	was	the mplementation	of	an	event	loop	as	a	concurrency	manager.	For	example, notifying	your	Node-based	HTTP	server	of	network	connections	to	your	local hardware	is	handled	by	the	OS	passing	along,	via	libuv,	network	interface	events

> Node	makes	a	single	thread	more	efficient	by	delegating	many	blocking operations	to	OS	subsystems	to	process,	bothering	the	main	V8	thread	only when	there	is	data	available	for	use.

> In	event-driven	programming,	an	application	expresses	interest	in	certain	events, and	responds	to	them	when	they	occur.	The	responsibility	of	gathering	events from	the	operating	system	or	monitoring	other	sources	of	events	is	handled	by libuv,	and	the	user	can	register	callbacks	to	be	invoked	when	an	event	occurs

> 1event.js

> Here's	what	Node	does	when	executing	this	program:
		1.	A	process	object	is	created	in	C++	using	the	V8	API.	The	Node.js	runtime is	then	imported	into	this	V8	process. 
		2.	The	fs	module	is	attached	to	the	Node	runtime.	V8	exposes	C++	to JavaScript.	This	provides	access	to	native	filesystem	bindings	for	your JavaScript	code.
		3.	The	fs.readFile	method	has	passed	instructions	and	a	JavaScript	callback. Through	fs.binding,	libuv	is	notified	of	the	file	read	request,	and	is	passed	a specially	prepared	version	of	the	callback	sent	by	the	original	program. 
		4.	libuv	invokes	the	OS-level	functions	necessary	to	read	a	file. 
		5.	The	JavaScript	program	continues,	printing	This	happens	first.	Because	there is	a	callback	outstanding,	the	event	loop	continues	to	spin,	waiting	for	that callback	to	resolve. 
		6.	When	the	file	descriptor	has	been	fully	read	by	the	OS,	libuv	(via	internal mechanisms)	is	informed,	and	the	callback	passed	to	libuv	is	invoked,	which essentially	prepares	the	original	JavaScript	callback	for	re-entrance	into	the main	(V8)	thread. 
		7.	The	original	JavaScript	callback	is	pushed	onto	the	event	loop,	and	is invoked	on	a	near-future	tick	of	the	loop. 
		8.	The	file	contents	are	printed	to	the	console. 
		9.	As	there	are	no	further	callbacks	in	flight,	the	process	exits.

## Event	loop	ordering,	phases,	and priorities

> The	event	loop	proceeds	through	phases,	and	each	phase	has	a	queue	of	events	to process.

> The	phases	relevant	to	developers	are	the	following:

	* Timers:	Callbacks	deferred	to	some	time	in	the	future	specified	in milliseconds,	such	as	setTimeout	and	setInterval 
	* I/O	callbacks:	Prepared	callbacks	returned	to	the	main	thread	after	being delegated	to	Node's	managed	thread	pool,	such	as	filesystem	calls	and network	listeners
	* Poll/check:	Mainly	the	functions	slotted	on	the	stack	according	to	the	rules of	setImmediate	and	nextTick

> When	data	becomes	available	on	a	socket	or	other	stream	interface,	we	cannot simply	execute	our	callback	immediately.	JavaScript	is	single-threaded,	so results	must	be	synchronized.	We	can't	suddenly	change	the	state	in	the	middle of	an	event	loop	tick	—	this	would	create	some	of	the	classic	multithreaded application	problems	of	race	conditions,	memory	access	conflicts,	and	so	on

> Upon	entering	an	event	loop,	Node,	in	effect,	makes	a	copy	of	the	current instruction	queue	(also	known	as	stack),	empties	the	original	queue,	and executes	its	copy.	The	processing	of	this	instruction	queue	is	referred	to	as	a tick.

## Listening for events

> Node-based	architectures are	often	composed	of	many	small	processes	and/or	services	communicating with	events	—	internally,	by	extending	the	EventEmitter	interface	and	using callbacks,	and	externally,	over	one	of	several	common	transport	layers	(for example,	HTTP,	TCP),	or	through	a	thin	messaging	layer	covering	one	of	these transport	layers	(for	example,	0MQ,	Redis	PUBSUB,	and	Kafka).

> The	previous	chapter	introduced	you	to	the	EventEmitter	interface.	This	is	the primary	event	interface	we	will	be	encountering	as	we	move	chapter	to	chapter, as	it	provides	the	prototype	class	for	the	many	Node	objects	exposing	evented interfaces,	such	as	file	and	network	streams.	Various	close,	exit,	data,	and	other events	exposed	by	different	module	APIs	signal	the	presence	of	an	EventEmitter interface,	and	we	will	be	learning	about	these	modules	and	use	cases	as	we progress.

### Signals

> A	signal	is	a	limited	form	of inter-process	communication	used	in	Unix,	Unix-like,	and	other	POSIXcompliant	operating	systems.	It	is	an	asynchronous	notification	sent	to	a	process, or	to	a	specific	thread,	within	the	same	process	in	order	to	notify	it	of	an	event that	occurred