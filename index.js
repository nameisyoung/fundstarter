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
var file = './public/index.html';
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});

    fs.stat(file, function(err, stats){
	if(!err && stats.isFile()){
	    console.log(stats.size);
	    var buffer = new Buffer(stats.size);

	    fs.open(file, 'r', function(err, fd) {
		if(err) {
		    if(err.code === "ENOENT") {
			console.log('File does not exist.');
			return;
		    } else {
			throw err;
		    }
		} else {
		    fs.read(fd, buffer, 0, stats.size, null);
		    //console.log(buffer.toString('utf8', 0, stats.size));  // for test
		    response.write(buffer.toString('utf8', 0, stats.size));
		    response.end();
		    fs.close(fd);
		}
	    }); // fs.open
	} // if(!err)
    }); // fs.stat
}).listen(port);

console.log("Node app is running at:", port);
