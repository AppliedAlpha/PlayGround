// Global Object
console.log('Hello, Node.js');
global.console.log('Hello, Node.js');


// Console Object
console.log("%d + %d = %d", 1, 2); // 1 + 2 = %d
console.time('time');
console.timeEnd('time'); // time: ~.ms


// Process Object ==> Only in 'Node.js'
console.log(process.version); // Node.js version
console.log(process.memoryUsage());
console.log(process.uptime());


// Exports Object
let exported_cal = require('./1-1. Exportation');

console.log(typeof exported_cal); // Object

let x = 50;
let y = 30;

console.log(exported_cal.add(x, y)); // 80
console.log(exported_cal.sub(x, y)); // 20


// Module Exports
let exported_cal2 = require('./1-2. Exportation II');

console.log(exported_cal2.mul(x, y)); // 1500
console.log(exported_cal2.div(x, y)); // 1.6666...