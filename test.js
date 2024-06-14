/**
 * The crucial in below code is, that `x` returns the function `y` but does not invoke it immediately. When you call x(), it doesn't log anything to the console. Instead, it returns the function y.
 */
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}

// x();

/**
 * In below code , Instead of returning the inner function y, it directly invokes it by calling y(). This means that when you call x(), it logs the value of a (which is 10) to the console immediately.
 */
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y(); // This line invokes the function immediately
}

//   x();

//
function z() {
  var b = 900;
  function x() {
    var a = 7;
    function y() {
      console.log(a, b);
    }
    // y();
  }
  //   x(); // This line invokes the function immediately
}

z();

// print 1...6 with interval of 2 second

function num() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
  console.log("hello!!");
}

// num();

/* if we use above code the o/p will be:
hello!!
6
6
6
6
6
6

bcz we're using `var` here and using setTimeout function which is call back so kind of store the values of i inside it and consoles it later on, in this process all the values of i points to only one reference  
so to avoid this use let for declaring i here
*/

function num() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 2000);
  }
  console.log("hello!!");
}

// num();

/**
 * on using above code , it resolve our error but if there is constraint that we can only use var keyword for declaring variable, so to resolve this
  we can create one more function named prints(ref) and put settimeout function inside that and pass ref as parameter to `prints()` function then values of i points to different reference  
 */

function num() {
  for (var i = 1; i <= 5; i++) {
    function prints(ref) {
      setTimeout(function () {
        console.log(ref);
      }, ref * 1000);
    }
    prints(i);
  }
  console.log("hello!!");
}

// num();

//Named Function Expression

var b = function xyz() {
  console.log(xyz);
};

// xyz(); // we cannot call Anonymous functions like this
// b(); // right way to call Anonymous functions

// function invocation

function greet(name) {
  console.log("Hello, " + name + "!");
}

// Function invocation
// greet("John");

// Function call

function add(a, b) {
  return a + b;
}

// making a Function call
var result = add(3, 5);
// console.log(result); // Output: 8

//
function attachEventList() {
  //creating new function for closure
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count); //now callback function forms closure with outer scope(count)
  });
}
// attachEventList();

// functional prog

const radius = [14, 26, 32];

const areaOfCircle = function (radius) {
  return Math.PI * radius * radius;
};

// custom map function
const area = function (radius, operation) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(operation(radius[i]));
  }
  return output;
};

// console.log(area(radius, areaOfCircle));
/* in above custom map function we have to iterate over radius array and then return all value
  but we have built-in map() method which iterates over array/object,etc so we can reduce line of code using map()
*/
// console.log(radius.map(areaOfCircle));

//

const users = [
  { firstName: "dhanush", lastName: "raja", age: 35 },
  { firstName: "lorem", lastName: "raja", age: 50 },
  { firstName: "gattu", lastName: "raja", age: 45 },
  { firstName: "raghu", lastName: "raja", age: 45 },
  { firstName: "anushka", lastName: "raja", age: 35 },
];

// get user with age < 40 & their firstname , using reduce
// [""]

/**
 * accumulator: This is a parameter used by the reduce function. It represents the accumulated result of the callback function over each element of the array. In this case, accumulator is an array that collects the first names of users meeting the specified condition (age < 40).

user: This is the current element being processed in each iteration of the reduce function. In this context, user refers to an object in the `users` array, where each object represents a user with properties such as firstName, lastName, and age.
 */
const filteredusers = users.reduce(function (accumlator, user) {
  //age = acc
  if (user.age < 40) {
    accumlator.push(user.firstName);
  }
  return accumlator;
}, []);

console.log(filteredusers);
