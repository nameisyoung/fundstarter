var http = require('http');


// web server object
http.createServer(function (request, response) {
    response.writeHead(200, {'Contnt-Type': 'text/plain'
    });
    response.write('Simple Simple');
    response.end();
}).listen(8080);
