# Servers

## Creating an HTTP server

> HTTP	is	a	stateless	data	transfer	protocol	built	upon	a	request/response	model: clients	make	requests	to	servers,	which	then	return	a	response.	

> Node	gained	early	widespread	attention	as	a	toolkit	for creating	servers—though	it	can	certainly	be	used	to	do	much,	much	more.

> At	its	simplest,	an	HTTP	server	responds	to	connection	attempts,	and	manages data	as	it	arrives	and	as	it	is	sent	along.	A	Node	server	is	typically	created	using the	createServer	method	of	the	http	module

> simple-http.js

> The	object	returned	by	http.createServer	is	an	instance	of	http.Server,	which extends	EventEmitter,	broadcasting	network	events	as	they	occur,	such	as	a	client connection	or	request.	

> create	a	basic	server	that	simply	reports	when	a	connection	is	made, and	when	it	is	terminated

> simple-http2.js

> When	building	multiuser	systems,	especially	authenticated	multiuser	systems, this	point	in	the	server-client	transaction	is	an	excellent	place	for	client validation	and	tracking	code,	including	setting	or	reading	of	cookies	and	other session	variables,	or	the	broadcasting	of	a	client	arrival	event	to	other	clients working	together	in	a	concurrent	real-time	application.

## Making HTTP Request

> It	is	often	necessary	for	a	network	application	to	make	external	HTTP	calls. HTTP	servers	are	also	often	called	upon	to	perform	HTTP	services	for	clients making	requests.	Node	provides	an	easy	interface	for	making	external	HTTP calls.

> request-http.js

### Proxying and Tunneling

> Sometimes,	it	is	useful	to	provide	a	means	for	one	server	to	function	as	a	proxy, or	broker,	for	other	servers.	This	would	allow	one	server	to	distribute	a	load	to other	servers, for example

> Another	use	would	be	to	provide	access	to	a	secured server	to	users	who	are	unable	to	connect	to	that	server	directly

> It	is	also common	to	have	one	server	answering	for	more	than	one	URL—using	a	proxy, that	one	server	can	forward	requests	to	the	right	recipient.

> Because	Node	has	a	consistent	streams	interface	throughout	its	network interfaces,	we	can	build	a	simple	HTTP	proxy	in	just	a	few	lines	of	code

> proxy-http.js

> 	Tunneling	involves	using	a	proxy	server	as	an	intermediary	to communicate	with	a	remote	server	on	behalf	of	a	client

> Once	our	proxy	server connects	to	a	remote	server,	it	is	able	to	pass	messages	back	and	forth	between that	server	and	a	client.	This	is	advantageous	when	a	direct	connection	between	a client	and	a	remote	server	is	not	possible,	or	not	desired.

> tunnel.js

> Once	we	make	a	request	to	our	local	tunneling	server	running	on	port	8080	it will	set	up	a	remote	socket	connection	to	our	destination	and	maintain	this "bridge"	between	the	remote	socket	and	the	(local)	client	socket.	The	remote connection	of	course	only	sees	our	tunneling	server,	and	in	this	way	clients	can connect	in	a	sense	anonymously	to	remote	services	(which	isn't	always	a	shady practice!)