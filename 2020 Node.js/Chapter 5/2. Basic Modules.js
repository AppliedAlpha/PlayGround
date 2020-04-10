// PATH Module
var pathUtil = require('path');

console.log(__dirname);     // Directory Route
console.log(__filename);    // File Route

var path = __filename;

console.log(pathUtil.dirname(path));	// Directory Route
console.log(pathUtil.basename(path));	// File Name + Extension
console.log(pathUtil.extname(path));	// . + Extension

var obj = pathUtil.parse(path);
console.log(obj);

console.log(pathUtil.join(obj.dir, obj.base));


// FS Module
var fs = require('fs');

// Making Stream
var debug = fs.createWriteStream('2020 Node.js/Chapter 5/debug.log');
var error = fs.createWriteStream('2020 Node.js/Chapter 5/error.log');

var Console = console.Console;
var logger = new Console(debug, error) // stdout, stderr

logger.log('Log'); // stdout
logger.info('Info'); // stdout
logger.warn('Warn'); // stderr
logger.error('Error'); // stderr
console.log()

// Syncronous (동기식)
try {
    var data = fs.readFileSync('input.txt', 'utf8');
    console.log(data);
} catch (exception) {
    console.error('Syncronous Error : ' + exception);
    return;
}
console.log('[Syncronous Complete]');

// Asyncronous (비동기식)
fs.readFile('input.txt', 'utf8', function(err, data) {
    if(err) {
        console.error('Asyncronous Error : ' + err);
    } else {
        console.log(data); // will be last
    }
});
console.log('[Asyncronous Complete]');
// More Further => 'Async' External Module


// URL Module
var url = require('url');
var urlPath = 'https://github.com/AppliedAlpha';

var parsed = url.parse(urlPath, true);	// parse : String -> Object
console.log(parsed);

console.log(parsed.host);    // github.com
console.log(parsed.path);    // /AppliedAlpha
console.log(parsed.query);   // Query (behind ?) -> Object