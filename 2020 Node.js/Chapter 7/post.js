var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen(3000, function() {
    console.log('Server running at http://localhost:3000');
});

// Data Parsing From 'x-www-form-urlencoded'
// extended: true -> extra 'qs' extension module.
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));	// static file dir allocation
   
app.post('/music', function (req, res) {
    console.log('req.body:', req.body);
    var title = req.body.title;
    var singer = req.body.singer;

    res.send('urlencoded -> title:' + title + ', singer:' + singer);
});

// URL Parameter (REST API)
app.post("/music/:singer/:title", (req, res) => {
    const {singer, title} = req.params;
    res.send(`url parameter(post) -> ${singer}의 ${title}입니다.`);
});