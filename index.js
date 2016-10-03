//var express = require('express')
//var app = express()
var http = require('http');
var fs = require('fs');


// Web server object
http.createServer(function (request, response) {
//    response
    fs.readFile('index.html', function (err, data) {
	response.writeHead(200, {'Content-Type': 'text/html', 'Content-Length':data.length});
	response.write(data);
	response.end();
    });
}).listen(8080);

//app.set('port', (process.env.PORT || 8080))
//app.use(express.static(__dirname + '/public'))

//__dirname returns the directory that the currently executing script is in.

/* serves main page */
//app.get('/', function(request, response) {
//    response.sendFile('public/index.html',{root:__dirname})
//    reponse.sendFile(__dirname + '/index.html')

/* sends an entire HTTP response to the client,                                                                                                                                     
 including headers and content,                                                                                                                                                     
 which is why you can only call once*/


//})

//var port = process.env.PORT || 8080

//app.listen(app.get('port'), function() {
//  console.log("Node app is running at :" + app.get('port'))
//app.listen(port, function() {
//    console.log("Node app is running at :" +port)
//})
