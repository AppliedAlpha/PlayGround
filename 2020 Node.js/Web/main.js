/*
var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname + url);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(3000);
*/

var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type' : 'text/html' });
  res.write("<!DOCTYPE html>");
  res.write("<html>");
  res.write("  <head><title>Node.js</title></head>");
  res.write("  <body><h1>Hello, Node.js</h1></body>");
  res.write("</html>");
  res.end();
}).listen(3000);

console.log('Server is running at http://localhost:3000/');

// Asynchronous Event
var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();   // Event Object Creation

evt.on("helloNode", function(str) {
  console.log(str);
});

setTimeout(function() {
  evt.emit("helloNode", "Hello, Node.js");
}, 3000);       // Event Emission After 3 sec