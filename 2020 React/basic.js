// 1. Spread Operator (ES6)
// Array
const num = [1, 2, 3, 4, 5];
console.log(num); // [1, 2, 3, 4, 5]
console.log(...num); // 1 2 3 4 5

const num2 = [...num, 6];
console.log(num2); // [1 ~ 6]

const [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a, b, rest);

// Object
const std = {id: 1, name: "Ria"};
const std2 = {...std, addr: "Ansan"};
console.log(std2);



// 2. Destructing Assignment
// Array
const arr = [1, 2, 3];
console.log(arr[0], arr[1], arr[2]);

const [i, j, k] = arr;
console.log(i, j, k);

// Object
const obj = {id: 1, text: "Hi"};
const {id, text} = obj;
console.log(id, text);

const arrobj = [
    {id: 1, text: "Hi"},
    {id: 2, text: "Bi"},
    {id: 3, text: "EXC"}
];

const [f1, f2, f3] = arrobj;
console.log(f1, f2, f3);

const [
    {id: i1, text: t1},
    {id: i2, text: t2},
    {id: i3, text: t3}
] = arrobj;
console.log(i1, i2, i3, t1, t2, t3);

let c = 1, d = 2;
[d, c] = [c, d];
console.log(c, d);



// 3. Immutability
// Object
const ob = {a: 1, b: 2};
// ob.b = 3; <-- Not Allowed

const newOb = {...ob, b: 3};
console.log(newOb);

// Array + Object
const todos = [
    {id: 1, text: "DB", done: true},
    {id: 2, text: "RenPy", done: false},
    {id: 3, text: "Novel", done: false}
];
// todos.push({ ... }) <-- Not Allowed

const newTodos = todos.concat(
    {id: 4, text: "Plan", done: false}
); // Not Perfect?
const newTodos2 = [
    {...todos[0]}, {...todos[1]}, {...todos[2]}, 
];
console.log(newTodos);

const filteredTodos = newTodos.filter((todo) => todo.id !== 3);
console.log(filteredTodos);

const toggledTodos = filteredTodos.map((todo) => todo.id === 2 ? {...todo, done: !todo.done} : todo);
console.log(toggledTodos);



// 4. Module Import & Export
// Node.js (moment): CommonJS
const moment = require("moment");

module.exports = {};

// React: ES6 (ES2015)
import moment from "moment";

export default {};