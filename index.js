var http = require("http");
var fs = require("fs");
var port = Number(process.env.PORT || 8080);

// web server object
http.createServer(function (request, response) {
    fs.readFile('./public/index.html', function (err, html){
	response.writeHead(200, {'Contnt-Type': 'text/plain'});
	response.write(html);
	response.end();
    });
}).listen(port);

console.log("Node app is running at:", port);
