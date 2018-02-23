const fs = require('fs');
// Use Nodes stream module and get a Readable
let Readable = require('stream').Readable;

//Make the file counter.txt we can fill by writing data to writeable stream w
const w = fs.createWriteStream('./counter.txt', {flags: 'w', mode: 0666});

let r = new Readable;

// Start the counter at 0
let count = 0;

// Downstram code will call r's _read function when it wants some data from r
r._read = function(){
	count++;
	// Push null downstream to signal weve got no more data
	if(count > 10) {
		return r.push(null);
	}
	// A half second from now, push our count on a line
	setTimeout(() => r.push(count + '\n'), 500);
};

// put w beneath r instead
r.pipe(w);