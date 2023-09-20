var name = "pujari";

function developer(designation) {
    const role = designation;
    return role;
}

var position = developer("frontend engineer");

//ep-2
var num = 18;

function getName() {
    console.log("Namaste");
}

getName();
console.log(num);
// console.log(getName);

//ep-4

var x = 10;
a();
b();
console.log(x);

function a() {
    var x = 10*3;
    console.log(x);
}
function b() {
    var x = 10*10;
    console.log(x);
}


//ep- 5

/* Just create a blank js file and run in browser  */

//ep- 6

console.log(x); // undefined var x = 25;
console.log(x); // 25
console.log(a); // Uncaught ReferenceError: a is not defined


//ep-7
function a() {
    var number = 19;
    c();
    function c() {
        console.log(number)
    }
}

a();
// console.log(number);


// ep-8
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // prints undefined as expected
let a = 10;
console.log(a); // 10
var b = 15;
console.log(window.a); // undefined
console.log(window.b); // 15


