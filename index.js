// // var name = "pujari";

// // function developer(designation) {
// //     const role = designation;
// //     return role;
// // }

// // var position = developer("frontend engineer");

// // //ep-2
// // var num = 18;

// // function getName() {
// //     console.log("Namaste");
// // }

// // getName();
// // console.log(num);
// // // console.log(getName);

// // //ep-4

// // var x = 10;
// // a();
// // b();
// // console.log(x);

// // function a() {
// //     var x = 10*3;
// //     console.log(x);
// // }
// // function b() {
// //     var x = 10*10;
// //     console.log(x);
// // }

// // //ep- 5

// // /* Just create a blank js file and run in browser  */

// // //ep- 6

// // console.log(x); // undefined var x = 25;
// // console.log(x); // 25
// // console.log(a); // Uncaught ReferenceError: a is not defined

// // //ep-7
// // function a() {
// //     var number = 19;
// //     c();
// //     function c() {
// //         console.log(number)
// //     }
// // }

// // a();
// // // console.log(number);

// // // ep-8
// // console.log(a); // ReferenceError: Cannot access 'a' before initialization
// // console.log(b); // prints undefined as expected
// // let a1 = 10;
// // console.log(a1); // 10
// // var b = 15;
// // console.log(window.a); // undefined
// // console.log(window.b); // 15

// // ep-10

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var codenum1 = x();
// console.log(codenum1);

// function z() {
//   var b = 900;
//   function x() {
//     var a = 10;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }

// z();

// // ep-11

// function x() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 3000);
//   console.log("Namaste Javascript");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Namaste Javascript");
// }
// x();

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//       // put the setT function inside new function close()
//     }
//     close(i); // everytime you call close(i) it creates new copy of i. Only this time, it is with var itself!
//   }
//   console.log("Namaste Javascript");
// }
// x();

// // ep-12

// function outer(outerparam) {
//   let outervariable = 10;
//   function inner() {
//     console.log(
//       "outervariable value-> " +
//         outervariable +
//         "  params passed =>" +
//         outerparam
//     );
//   } // inner forms a closure with outer return inner;
//   return inner;
// }

// outer(
//   "Cricket"
// )(); /* first we're calling outer function and then inner function  */

// function outest() {
//   var c = 20;
//   function outer(b) {
//     function inner() {
//       console.log(a, b, c);
//     }
//     let a = 10;
//     return inner;
//   }
//   return outer;
// }

// let a = 999;
// var close = outest()("hellow");
// close();

// // without closures
// var count = 0;
// function increment() {
//   count++;
// }
// // in the above code, anyone can access count and change it.
// // ----------------------------------------------------------
// // (with closures) -> put everything into a function
// function counter() {
//   var count = 0;
//   function increment() {
//     count++;
//   }
// }
// console.log(count); // this will give referenceError as count can't be accessed. So now we are able to achieve hiding of data
// // ----------------------------------------------------------
// //(increment with function using closure) true function
// function counter() {
//   var count = 0;
//   return function increment() {
//     count++;
//     console.log(count);
//   };
// }
// var counter1 = counter(); //counter function has closure with count var.
// counter1(); // increments counter
// var counter2 = counter();
// counter2(); // here counter2 is whole new copy of counter function and it wont impack the output of counter1
// // ----------------------------------------------------------
// // Above code is not good and scalable for say, when you plan to implement decrement counter at a later stage.
// // To address this issue, we use *constructors*
// // ----------------------------------------------------------
// // Adding decrement counter and refactoring code:
// function Counter() {
//   //constructor function. Good coding would be to capitalize first letter of constructor function.

//   var count = 0;
//   this.incrementCounter = function () {
//     //anonymous function
//     count++;
//     console.log(count);
//   };
//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }
// var counter1 = new Counter(); // new keyword for constructor function
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

// function a() {
//   var x = 0;
//   return function b() {
//     console.log(x);
//   };
// }
// var y = a(); // y is a copy of b() y();
// // Once a() is called, its variable "x" should be garbage collected ideally.
// // But function "b" has closure over variable x. So memmory of "x" cannot be freed.
// //Like this if more closures are formed, it becomes an issue. To tackle this issue,
// //JS engines like v8 and Chrome have smart garbage
// // collection mechanisms. Say we have var x = 0, z = 10 in code.
// // When we access "x" it's value is printed as 0 but z is removed automatically because it hasn't been used.

// // ep-13

// function a() {
//   console.log("Hello");
// }
// a();

// var b = function () {
//   console.log("Hello");
// };
// a();

a(); // "Hello A"
//b(); // TypeError
function a() {
  console.log("Hello A");
}
var b = function () {
  console.log("Hello B");
};
// Why? During memory creation phase a is created in memory and function is assigned to a.
// But b is created like a variable (b:undefined) and until code reaches the function() part, it is still undefined. So it cannot find the value for "b" that's the reason it results in error.

var b = function (
  param1,
  param2 // labels/identifiers are parameters
) {
  console.log("b called");
};

// b(arg1, arg2); // arguments - values passed inside function call

var b = function (param1) {
  console.log(param1); // prints " f() {} "
};
b(function () {});

// Other way of doing the same thing:
var b = function (param1) {
  console.log(param1);
};
function xyz() {}
b(xyz); // same thing but with different code.

// we can return a function from a function:
var b = function (param1) {
  return function () {};
};
console.log(b()); //we log the entire fun within b

//ep-14

setTimeout(function () {
  console.log("Timer");
}, 1000); // first argument is callback function and second is timer.

setTimeout(function () {
  console.log("timer");
}, 5000);
function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});
// x y timer

function attachEventList() {
  //creating new function for closure 
  let count = 0;
  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked", ++count); //now callback function forms closure with outer scope(count)
  });
}
attachEventList();
