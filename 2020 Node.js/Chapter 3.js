// 1. Variable
var a = 1;
var b = 2;
console.log("a: " + a);
console.log("b: %d", b);

console.log(typeof 1, typeof "Hello", typeof true, typeof c, typeof {});
// Object -> JS is Object-Oriented Programming!

function ex() {
    console.log(a);
    let tmp = "Hi"; // let: block level scope variable
}
console.log(typeof tmp);
console.log();



// 2. Array
var arr = [1, 2, 3, "Hi", true];

console.log(arr.length); // 5
console.log(arr[3]); // "Hi"

for (i of arr) console.log(i); // C++ -> for (auto i : arr) ..

arr.push("Pushed"); // Last Push
console.log(arr.pop()) // "Pushed" (returns popped object)

// arr.splice(index, amount, element)
arr.splice(1, 0, 99); // Index 1 -> Remove 0 Objects -> Add '99'
arr.splice(0) // Remove All From Index 0 = arr.clear()
for (i of arr) console.log(i);
console.log()



// 3. Function
function add(x, y) { return x+y; }
var add2 = function(x, y) { return x+y; }; // Assigning function in variable
console.log(add(1, 2), add2(3, 4));
// add2 -> Anonymous Function

var add3 = (function(x, y) { return x+y; })(5, 6);

var add4 = ((x, y) => { return x+y; })(7, 8); // ES6 (Lambda)

console.log(add5(9, 10)); // Hoisting (Declaration is lower)

function add5(x, y) { return x+y; };
console.log();



// 4. Object
var aa = {}; // Empty Object 
var bb = new Object();

// First: Object Creation -> Adding
var Person = {};
Person.age = 18;
Person['name'] = 'Adam';

console.log(Person['age']);  // 18
console.log(Person.name);    // Adam

// Second: Initalizing
var Person2 = {
  age: 19,
  name: 'Kevin',

  add6: function() { // Method
      this.age++;
  }
};

console.log(Person2['age']);  // 19
console.log(Person2.name);    // Kevin
Person2.add6();
console.log(Person2.age); // 20

var Users = [ // Object Array
    {name: "AAA", age: 18},
    {name: "BBB", age: 19}
];

Users.push({name: "CCC", age: 20});

console.log(Users.length); // 3
console.log(Users[0]); // AAA Object
console.log();



// 5. Callback
// Callback is essential in "Asynchronous"
// Sequentual Handling -> Synchronous
function add7(a, b, callback) {
    var sum = a + b;
    callback(sum);
}
  
function print(result) { 
   console.log(result);
}                         
  
add7(1, 2, print); // function in member

// Anonymous Function
add7(2, 3, function(result) {
    console.log(result);         
});