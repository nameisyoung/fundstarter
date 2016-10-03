var http = require("http");
var fs = require("fs");


// web server object
http.createServer(function (request, response) {
    fs.readFile('/public/index.html', function (err, data){
	response.writeHead(200, {'Contnt-Type': 'text/plain'});
	response.write('Simple Simple');
	response.end();
    });
}).listen(8080);
