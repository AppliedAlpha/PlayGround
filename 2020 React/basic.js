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
