const http = require('http');
const server = new http.Server();

const port = process.env.PORT || 8080;

server.on('request', (request, socket) => {
	console.log(request.url);
	http.request({
		host: 'www.tyquanreddick.us',
		method: 'GET',
		path: '/',
		port: 80,
	}, (response) => {
		response.pipe(socket)
	}).end();
});

server.listen(port, () => {
	console.log(`Proxy server listening on port ${port}`);
});