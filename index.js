var http = require("http");
var fs = require("fs");
var port = Number(process.env.PORT || 8080);


// web server object
/*** Part 1: (a)fs.readFileSync and (b)fs.readFile.  ********************************
http.createServer(function (request, response) {
      fs.readFile('./public/index.html', function (err, html){   // readFile
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write(html);                                      // readFile
//      response.write(fs.readFileSync('./public/index.html'));    // readFileSync
	response.end();
      });                                                        // readFile
*************************************************************************************/

/*** Part 2: fs and buffer.  **/
var path = './public/index.html';
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    fs.open(path, 'r', function(err, fd) {
	if(err) {
	    if(err.code === "ENOENT") {
		console.log('File does not exist.');
		return;
	    } else {
		throw err;
	    }
	} else {
	    fs.fstat(fd, function(err, stats) {
		var bufferSize = stats.size,
		  chunkSize = 512,
		  buffer = new Buffer(bufferSize),
		  bytesRead = 0;

		while(bytesRead < bufferSize) {
		    if((bytesRead+chunkSize) > bufferSize) {
			chunkSize = (bufferSize - bytesRead);
		    }
		    fs.read(fd, buffer, bytesRead, chunkSize, bytesRead);
		    bytesRead += chunkSize;
		}
		//console.log(buffer.toString('utf8', 0, bufferSize));  // for test
		response.end(buffer.toString('utf8', 0, bufferSize));
		fs.close(fd);
	    }); // fs.fstat
	}  // if(err)-else
    }); // fs.open

}).listen(port);

console.log("Node app is running at:", port);
