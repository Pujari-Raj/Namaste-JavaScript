// "use strict" // for running in strict mode

// this in global space

// refers to global object i.e. window in case of browser
// 💡 global object differs based on runtime environment,
// console.log(this);

// this inside a function

function x() {
  // the value of this in function-scop depends on strict/non-strict mode
  console.log(this);
  // in strict mode - refers to global window object
  // in non-strict mode - undefined
}

// x();

/** 📒 Notes
 * On the first go feels like `this` keyword in global space and inside function behaves
same but in reality it's different.

The moment you make JS run in strict mode by using: "use strict" at the top, `this`
keyword inside function returns `undefined` whereas global space will still refers to
global window object.
 */

// this inside a object's method

const student = {
  name: "Basvaraj",
  // `x` is known as method as per terminology
  printName: function () {
    console.log(this.name); // Basvaraj
  },
};

// student.printName(); //here the value of `this` is referring to current object i.e. `obj`

const student2 = {
  name: "Jay",
};

// now we want to re-use printName function from `student` object,
//we can do that using call method

// student.printName.call(student2);

//this inside arrow function

// arrow function inside global lexical-context
const arrowobject = {
  a: 10,
  x: () => {
    // here the  enclosing lexical context is global object ,therefore it will return window object
    console.log(this);
    // Above the value of `this` won't be arrowobject anymore instead it will be enclosing lexical context i.e. window object in current scenario.
  },
};

arrowobject.x();

// arrow function inside function lexical-context
const arrowobject1 = {
  a: 10,
  x: function () {
   const y = () => {
      // here the  enclosing lexical context is function `x` ,therefore it will return function `x` 
      console.log(this);
      // Above the value of `this` will be arrowobject1 as function `y` enclosing lexical context is function `x`
    };
    y();
  },
};

arrowobject1.x();
