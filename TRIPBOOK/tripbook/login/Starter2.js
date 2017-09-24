var http = require('http'),
    fs = require('fs');

console.log('HOLA');
http.createServer(function (req, res) {
	console.log(req);
    if(req.url.indexOf('.html') != -1){ //req.url has the pathname, check if it conatins '.html'
	  console.log("entra");
	  console.log(__dirname);
      fs.readFile(__dirname + 'Login.html', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });

    }

    if(req.url.indexOf('.js') != -1){ //req.url has the pathname, check if it conatins '.js'

      fs.readFile(__dirname + '/js/script.js', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });

    }

    if(req.url.indexOf('.css') != -1){ //req.url has the pathname, check if it conatins '.css'

      fs.readFile(__dirname + '/css/style.css', function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });

    }

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');