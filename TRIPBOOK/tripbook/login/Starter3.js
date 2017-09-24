var http = require('http');
var url=require('url');
var fs=require('fs');
var server = http.createServer();
function control(petic, resp) {
	fs.readFile('\Login.html', function (err, data) {
		if (err) console.log(err);
		resp.writeHead(200, {'Content-Type': 'text/html'});
		resp.write(data);
		resp.end();
	});
}
server.on('request', control);
server.listen(8080);