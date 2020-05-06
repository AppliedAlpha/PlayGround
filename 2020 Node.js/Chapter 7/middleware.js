var express = require('express');
var moment = require('moment');
var app = express();

app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000');
});

/*
// (Logging 처리) 미들웨어 함수 정의
var myLogger = function (req, res, next) {
    console.log('LOGGED');
    req.requestTime = Date.now();
    next(); // 다음 미들웨어 호출
};

// 미들웨어 함수 로드
app.use(myLogger);

app.get('/', function (req, res) {
    var responseText = 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
});
*/


// 미들웨어 설정 시 순서 중요
// 1. 애플리케이션 레벨 미들웨어
// app.XXX() Format
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();   // control 넘김
});

const logger = (req, res, next) => {
    const { method, url } = req; // req.method, req.url
    const time = moment().format("YYYY-MM-DD HH:mm:ss:SSS");
    console.log(`${method} - ${url} - ${time}`);
    next();
}

app.use(logger);

app.get("/hello", (req, res) => {
    res.send("Hi");
});

app.get('/user/:id', function (req, res, next) {
    res.send('GET 방식 호출');
});

// 2. 라우터 레벨 미들웨어


// 3. 기본 제공 미들웨어
app.use(express.static("public"));

// 4. 서드 파티 미들웨어
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// 5. 오류 처리 미들웨어
app.use((err, req, res, _) => {
    // ??
});