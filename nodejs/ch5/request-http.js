const http = require('http');

// http.request({
// 	host: 'www.google.com',
// 	method: 'GET',
// 	path: '/'
// }, (res) => {
// 	res.setEncoding('utf8');
// 	res.on("readable", () => {
// 		console.log(res.read());
// 	});
// }).end();

/*
	Because it is common to	use	HTTP.request in	order to 
	GET external pages, Node offers a shortcut
*/

http.get('http://www.tyquanreddick.us', res => {
	console.log(`Status: ${res.statusCode}`);
}).on('error', err => {
	console.log(`Error: ${err.message}`);
});