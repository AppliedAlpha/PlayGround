// HTTP Module
var http = require('http');
var url = require('url');

// http.Server Object Creation
http.createServer(function (req, res) {
    // 0. Request Message Analyzing
    console.log('Method:', req.method);
    console.log('URL:', req.url);

    /*
    var parsed = url.parse(req.url, true);
    console.log(parsed.query.id);
    */

    // 1. Response Message Header
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200; // OK
    // 404 = Not Found, 500 = Internal Server Error

    // +. JSON
    if (req.url === '/json' || req.url === '/') {
        const data = { msg : 'Hello, World!'};
        res.statusCode = 200; // OK
        res.setHeader('Context-Type', 'application/json');
        res.end(JSON.stringify(data))
    }

    else {
        res.statusCode = 404; // Not Found
        res.end("404 Not Found");
    }
    /*
    // 2. Response Message Body
    res.write('<h1>Hello, Node.js!</h1>');

    // 3. end(): Response Message Finished
    res.end('End');
    */

}).listen(3000, function() {
    console.log('Server Running at http://localhost:3000');
});

