var express = require('express');
var app = express();
var logger = require("morgan")

app.listen(3000, function() {
    console.log("Server running at http://localhost:3000"); 
});

// 로깅처리 미들웨어
app.use(logger("common")); // dev, short, common, combined

app.get('/', (req, res) => res.send("<h1>Hi, Express."));

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

// URL Parameter (REST API)
app.get("/music/:singer/:title", (req, res) => {
    const {singer, title} = req.params;
    res.send(`url parameter(get) -> ${singer}의 ${title}입니다.`);
});

app.use("/music2", require("./api/music"));