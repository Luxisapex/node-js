var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {'Content-type': 'text/html'});
	response.end('<h1>Hello World!</h1>');
});

var port = Number(process.env.PORT || 8080);

server.listen(port);