var express = require('express');
var app = express();

app.listen(3000, function() {
    console.log("Server running at http://localhost:3000"); 
});

app.get('/', function(req, res) {
    res.send("<h1>Hi, Express</h1>");
});

app.get('/hidden', function(req, res) {
    res.send("<h1>Okay, Whatever.</h1>");
});

app.get('/query', function(req, res) {
    console.log(req.query);
    var nm = req.query.nm;
    var ans = req.query.ans;
    res.send(nm + ans); 
});

app.get('/music', function(req, res) {
    res.send(req.query.singer + '의 ' + req.query.title + '입니다.');
});