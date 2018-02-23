/*
	Node's	process	object	provides	information	on	and	control	over	the	current running	process.	It	is	an	instance	of	EventEmitter	is	accessible	from	any	scope,	and exposes	very	useful	low-level	pointers
*/

const size = process.argv[2] || 1000000;
const n = process.argv[3] || 100;
const buffers = [];

let i;
for (i = 0; i<n; i++) {
	buffers.push(Buffer.alloc(size));
	process.stdout.write(process.memoryUsage().heapTotal + "\n");
}

/*
	The	program	gets	the	command-line	arguments	from	process.argv,	loops	to allocate	memory,	and	reports	memory	usage	back	to	standard	out.
*/